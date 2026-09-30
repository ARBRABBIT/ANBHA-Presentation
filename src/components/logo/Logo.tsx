type LogoProps = { light?: boolean; compact?: boolean; className?: string };

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 132" fill="none" aria-hidden="true">
      <path d="M80 121C76 94 77 66 80 16c3 50 4 78 0 105Z" fill="currentColor" />
      <path d="M78 112C52 99 31 78 18 48c30 7 51 27 60 64Z" fill="currentColor" />
      <path d="M82 112c26-13 47-34 60-64-30 7-51 27-60 64Z" fill="currentColor" />
      <path d="M76 91C51 78 40 57 40 30c24 14 37 34 36 61Z" fill="currentColor" opacity=".86" />
      <path d="M84 91c25-13 36-34 36-61-24 14-37 34-36 61Z" fill="currentColor" opacity=".86" />
      <path d="M80 88C65 67 64 42 80 8c16 34 15 59 0 80Z" fill="currentColor" opacity=".7" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return <span className={`wordmark ${className}`}>ANBHA</span>;
}

export function Logo({ light = false, compact = false, className = "" }: LogoProps) {
  return (
    <div className={`logo-lockup ${light ? "text-paper" : "text-forest"} ${className}`}>
      <LogoMark className={compact ? "w-10" : "w-20 md:w-24"} />
      <Wordmark className={compact ? "text-[1.25rem]" : "text-[clamp(2rem,5vw,4.5rem)]"} />
    </div>
  );
}
