/** Small country flag from flagcdn.com. `code` is an ISO 3166-1 alpha-2 code, e.g. "tn". */
export default function Flag({ code, name, size = 20 }) {
  const c = code.toLowerCase();
  return (
    <img
      className="flag"
      src={`https://flagcdn.com/w40/${c}.png`}
      srcSet={`https://flagcdn.com/w40/${c}.png 1x, https://flagcdn.com/w80/${c}.png 2x`}
      width={size}
      height={Math.round(size * 0.75)}
      alt={name ? `${name} flag` : ""}
      loading="lazy"
    />
  );
}
