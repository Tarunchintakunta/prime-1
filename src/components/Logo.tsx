export function Logo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="primelearning-glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="hsl(38 92% 65%)" />
          <stop offset="60%" stopColor="hsl(38 92% 50%)" />
          <stop offset="100%" stopColor="hsl(28 92% 35%)" />
        </radialGradient>
      </defs>
      <circle cx="16" cy="16" r="14" fill="url(#primelearning-glow)" />
      <circle
        cx="16"
        cy="16"
        r="14"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1"
      />
      <path
        d="M11 9.5v13h10"
        stroke="hsl(0 0% 0%)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
