import fs from 'node:fs';
import * as profile from '../src/data/profile.js';
import { additionalProjects, evidenceLinks } from '../src/data/journal.js';
const legacy = JSON.parse(fs.readFileSync('src/data/legacy-projects.json','utf8'));
const urls = [...new Set([
  profile.site.github, profile.site.linkedin,
  ...profile.projects.flatMap(p=>p.links.map(l=>l.href)),
  ...profile.experience.map(e=>e.url),
  ...legacy.flatMap(p=>p.links.map(l=>l.href)),
  ...additionalProjects.flatMap(p=>(p.links||[]).map(l=>l.href)),
  ...Object.values(evidenceLinks).flat().map(l=>l.href),
  'https://nrw.ieee.tn/', 'https://dataoverflow.tn/',
])];
const results = [];
let next = 0;
async function worker(){while(next<urls.length){const url=urls[next++];try{
  let r=await fetch(url,{method:'HEAD',redirect:'follow',signal:AbortSignal.timeout(15000)});
  if(r.status===405) r=await fetch(url,{method:'GET',redirect:'follow',signal:AbortSignal.timeout(15000)});
  results.push({url,status:r.status,finalUrl:r.url,result:r.ok?'reachable':[404,410].includes(r.status)?'unavailable':'access-restricted-or-unverified'});
}catch(e){results.push({url,result:'network-unverified',reason:e.cause?.code||e.name});}}}
await Promise.all(Array.from({length:5},worker));
results.sort((a,b)=>a.url.localeCompare(b.url));
fs.writeFileSync('.qa/external-links.json',JSON.stringify(results,null,2));
console.log(JSON.stringify({total:results.length,reachable:results.filter(r=>r.result==='reachable').length,unavailable:results.filter(r=>r.result==='unavailable'),unverified:results.filter(r=>r.result.includes('unverified')).map(r=>({url:r.url,status:r.status,reason:r.reason}))},null,2));
if(results.every(r=>r.result==='network-unverified'))process.exitCode=2;
