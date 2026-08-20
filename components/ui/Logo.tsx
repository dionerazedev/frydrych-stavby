export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand${compact ? " brand--compact" : ""}`} aria-label="Frydrych Stavby">
      <svg className="brand__mark" viewBox="0 0 42 42" role="img" aria-hidden="true">
        <rect x="1" y="1" width="40" height="40" />
        <path d="M13 30V11h17M13 20h12" />
      </svg>
      <span className="brand__text">
        <span>Frydrych</span>
        <span>Stavby</span>
      </span>
    </span>
  );
}
