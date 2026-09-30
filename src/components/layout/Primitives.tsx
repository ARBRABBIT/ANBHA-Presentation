import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-20 ${className}`}>{children}</div>;
}

export function ChapterLabel({ number, children, light = false }: { number: string; children: ReactNode; light?: boolean }) {
  return (
    <div className={`chapter-label ${light ? "text-paper/60" : "text-forest/55"}`}>
      <span>{number}</span><span className="h-px w-8 bg-current" />{children}
    </div>
  );
}

export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`font-display text-[clamp(3rem,7.6vw,8.8rem)] leading-[.88] tracking-[-.055em] ${className}`}>{children}</h2>;
}
