// Uses an already running local Chrome DevTools endpoint; no browser dependency.
import fs from 'node:fs';
import assert from 'node:assert/strict';
const base = 'http://127.0.0.1:4173';
const tabs = await (await fetch('http://127.0.0.1:9223/json/list')).json();
const tab = tabs.find(t => t.type === 'page');
const socket = new WebSocket(tab.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
let id = 0;
const pending = new Map(), exceptions = [], networkFailures = [];
socket.onmessage = ({ data }) => {
  const message = JSON.parse(data);
  if (message.id) { const p = pending.get(message.id); if (!p) return; pending.delete(message.id); clearTimeout(p.timer); message.error ? p.reject(message.error) : p.resolve(message.result); }
  if (message.method === 'Runtime.exceptionThrown') exceptions.push(message.params.exceptionDetails.text + ': ' + (message.params.exceptionDetails.exception?.description || ''));
  if (message.method === 'Network.responseReceived' && message.params.response.status >= 400) networkFailures.push({ url: message.params.response.url, status: message.params.response.status });
};
function send(method, params = {}) { return new Promise((resolve, reject) => { const key = ++id; const timer = setTimeout(() => { pending.delete(key); reject(new Error('Timeout: ' + method)); }, 20000); pending.set(key, { resolve, reject, timer }); socket.send(JSON.stringify({ id: key, method, params })); }); }
async function evaluate(expression) { const r = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true }); if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text); return r.result?.value; }
const pause = ms => new Promise(r => setTimeout(r, ms));
async function ready() { for(let i=0;i<80;i++){if(await evaluate('document.querySelectorAll(".archive-record").length === 20')) {await evaluate('document.fonts.ready.then(() => true)'); return;} await pause(100);} throw new Error('Page did not render'); }
async function shot(name) { const { data } = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false }); fs.writeFileSync(`.qa/${name}.png`, Buffer.from(data, 'base64')); }
await send('Page.enable'); await send('Runtime.enable'); await send('Network.enable');
await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
await send('Page.navigate', { url: base }); await ready();
const reports = [];
for (const lang of ['en', 'fr']) for (const theme of ['light', 'dark']) {
  await evaluate(`localStorage.setItem('fbh-lang','${lang}');localStorage.setItem('fbh-theme','${theme}')`);
  await send('Page.reload', { ignoreCache: true }); await ready();
  assert(await evaluate(`document.fonts.check('18px Inter') && document.fonts.check('48px "Source Serif 4"') && document.fonts.check('12px "JetBrains Mono"')`), 'Local fonts did not load');
  assert.equal(await evaluate('document.documentElement.lang'), lang);
  assert.equal(await evaluate('document.documentElement.dataset.theme'), theme);
  for (const width of [1440, 960, 768, 390, 320]) {
    await send('Emulation.setDeviceMetricsOverride', { width, height: width < 640 ? 844 : 1000, deviceScaleFactor: 1, mobile: width < 640 });
    await pause(150);
    const overflow = await evaluate(`({width:innerWidth,scroll:document.documentElement.scrollWidth,elements:[...document.querySelectorAll('body *')].filter(e=>{const r=e.getBoundingClientRect();return r.width&&r.right>innerWidth+1&&getComputedStyle(e).position!=='fixed'}).slice(0,12).map(e=>e.className)})`);
    assert(overflow.scroll <= overflow.width + 1, JSON.stringify({ lang, theme, width, overflow }));
    reports.push({ lang, theme, width, overflow: false });
    if (width === 1440 || width === 390) { await evaluate('scrollTo(0,0)'); await pause(100); await shot(`${lang}-${theme}-${width}`); }
  }
}
// Exercise controls, native disclosures, and dialogs in the rendered mobile UI.
await evaluate(`document.querySelector('[aria-label="English"]').click()`); await pause(100);
assert.equal(await evaluate('document.documentElement.lang'), 'en');
await evaluate('document.querySelector(".theme-toggle").click()'); await pause(100);
assert.equal(await evaluate('document.documentElement.dataset.theme'), 'light');
await evaluate('document.querySelector(".menu-toggle").click()');
assert.equal(await evaluate('document.querySelector(".menu-toggle").getAttribute("aria-expanded")'), 'true');
await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
assert.equal(await evaluate('document.querySelector(".menu-toggle").getAttribute("aria-expanded")'), 'false');
assert.equal(await evaluate('document.activeElement.classList.contains("menu-toggle")'), true);
await evaluate('document.querySelector(".menu-toggle").click();document.querySelector(".mobile-nav a").click()');
assert.equal(await evaluate('document.querySelector(".menu-toggle").getAttribute("aria-expanded")'), 'false');
await evaluate('document.querySelector(".case-notes summary").click()');
assert.equal(await evaluate('document.querySelector(".case-notes").open'), true);
await evaluate('document.querySelectorAll("#study-marketplace .flow-stages button")[1].click()');
assert.equal(await evaluate('document.querySelectorAll("#study-marketplace .flow-stages button")[1].getAttribute("aria-pressed")'), 'true');
await evaluate('document.querySelectorAll(".archive-filters button")[1].click()');
assert.equal(await evaluate('document.querySelectorAll(".archive-record").length'), 1);
await evaluate('document.querySelector(".archive-filters button").click()');
assert.equal(await evaluate('document.querySelectorAll(".archive-record").length'), 20);
await evaluate(`{const e=document.querySelector('input[type=search]');Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(e,'Whisper');e.dispatchEvent(new Event('input',{bubbles:true}));}`);
await pause(150); assert.equal(await evaluate('document.querySelectorAll(".archive-record").length'), 1);
await evaluate(`{const e=document.querySelector('input[type=search]');Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(e,'');e.dispatchEvent(new Event('input',{bubbles:true}));}`);
await pause(150);
await evaluate('document.querySelector(".recognition-spread button").focus();document.querySelector(".recognition-spread button").click()');
assert.equal(await evaluate('document.querySelector("dialog").open'), true);
for(let i=0;i<3;i++) await send('Input.dispatchKeyEvent', { type:'keyDown', key:'Tab', code:'Tab', windowsVirtualKeyCode:9 });
assert.equal(await evaluate('!!document.activeElement.closest("dialog")'), true);
await send('Input.dispatchKeyEvent', { type:'keyDown', key:'Escape', code:'Escape', windowsVirtualKeyCode:27 });
await pause(100); assert.equal(await evaluate('!!document.querySelector("dialog[open]")'), false);
assert.equal(await evaluate('document.activeElement === document.querySelector(".recognition-spread button")'), true);
await send('Emulation.setEmulatedMedia', { features: [{ name:'prefers-reduced-motion', value:'reduce' }] });
assert.equal(await evaluate('getComputedStyle(document.documentElement).scrollBehavior'), 'auto');
await evaluate('document.querySelectorAll("details").forEach(d=>d.open=true)');
const missingAnchors = await evaluate(`[...document.querySelectorAll('a[href^="#"]')].map(a=>a.getAttribute('href')).filter(h=>!document.getElementById(decodeURIComponent(h.slice(1))))`);
assert.deepEqual(missingAnchors, []);
const duplicates = await evaluate(`{const ids=[...document.querySelectorAll('[id]')].map(e=>e.id);ids.filter((id,i)=>ids.indexOf(id)!==i)}`);
assert.deepEqual(duplicates, []);
const localResources = await evaluate(`[...new Set([...document.querySelectorAll('img[src],a[download]')].map(e=>e.src||e.href).filter(u=>u.startsWith(location.origin)))]`);
for(const url of localResources){const response=await fetch(url);assert.equal(response.status,200,url);assert(!response.headers.get('content-type')?.includes('text/html'),`Asset returned HTML: ${url}`);}
for(const width of [1440,768,390,320]){
  await send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:width<640});
  await pause(100);
  assert(await evaluate('document.documentElement.scrollWidth<=innerWidth+1'),`Expanded detail overflow at ${width}`);
}
await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
await evaluate('document.querySelectorAll("details").forEach(d=>d.open=false);document.querySelector("#projects").scrollIntoView()'); await pause(100); await shot('selected-work');
await evaluate('document.querySelector("#archive").scrollIntoView()'); await pause(100); await shot('archive');
await evaluate('document.querySelector("#about").scrollIntoView()'); await pause(100); await shot('about');
await evaluate('document.querySelector("#recognition").scrollIntoView()'); await pause(100); await shot('recognition');
await evaluate('document.querySelector("#contact").scrollIntoView()'); await pause(100); await shot('contact');
for (const width of [1440,390]) {
  await send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:width<640});
  for (const section of ['study-pump-watch','study-qcri','experience','skills']) {
    await evaluate(`document.getElementById('${section}').scrollIntoView()`); await pause(150); await shot(`${section}-${width}`);
  }
}
if (fs.existsSync('.qa/axe.min.js')) {
  await evaluate(fs.readFileSync('.qa/axe.min.js','utf8'));
  const audits = [];
  for (const lang of ['en','fr']) for (const theme of ['light','dark']) for (const width of [1440,390]) {
    await evaluate(`document.querySelector('[aria-label="${lang === 'en' ? 'English' : 'Français'}"]').click()`);
    await pause(60);
    if (await evaluate('document.documentElement.dataset.theme') !== theme) await evaluate('document.querySelector(".theme-toggle").click()');
    await send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:width<640});
    await evaluate('document.querySelectorAll("details").forEach(d=>d.open=true)');
    await pause(100);
    assert(await evaluate('document.documentElement.scrollWidth<=innerWidth+1'), `Expanded ${lang}/${theme} overflow at ${width}`);
    const accessibility = await evaluate(`axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}}).then(r=>({violations:r.violations.map(v=>({id:v.id,impact:v.impact,description:v.description,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))})),passes:r.passes.length,incomplete:r.incomplete.length}))`);
    audits.push({lang,theme,width,...accessibility});
  }
  fs.writeFileSync('.qa/accessibility.json',JSON.stringify(audits,null,2));
  assert.equal(audits.reduce((n,a)=>n+a.violations.length,0),0,JSON.stringify(audits.filter(a=>a.violations.length).map(a=>({lang:a.lang,theme:a.theme,width:a.width,violations:a.violations.map(v=>({id:v.id,nodes:v.nodes.length}))}))));
  // Inspect the longest localized case composition after the expanded-content audits.
  await evaluate('document.querySelectorAll("details").forEach(d=>d.open=false);document.getElementById("study-qcri").scrollIntoView()');
  await pause(150); await shot('qcri-fr-dark-mobile');
}
assert.deepEqual(exceptions,[],'Browser runtime errors');
assert.deepEqual(networkFailures,[],'HTTP failures');
fs.writeFileSync('.qa/browser-results.json',JSON.stringify({reports,localResources:localResources.length,exceptions,networkFailures,checks:['language/theme controls','mobile menu and Escape','case disclosures','diagram selection','archive filter/search','dialog focus containment and restoration','reduced motion','local asset HTTP checks','anchor integrity','duplicate IDs','expanded mobile layouts']},null,2));
console.log(`PASS: ${reports.length} language/theme/viewport combinations; ${localResources.length} local resources; interaction checks; no browser exceptions or HTTP failures.`);
socket.close();
