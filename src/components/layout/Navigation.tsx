"use client";

import { useEffect, useState } from "react";
import { chapters } from "@/data/brand";
import { LogoMark } from "@/components/logo/Logo";

export function Navigation() {
  const [active, setActive] = useState("story");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max ? window.scrollY / max : 0);
      const point = window.innerHeight * 0.35;
      for (const chapter of [...chapters].reverse()) {
        const element = document.getElementById(chapter.id);
        if (element && element.getBoundingClientRect().top <= point) {
          setActive(chapter.id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between px-5 mix-blend-difference md:px-10">
        <a href="#story" aria-label="ANBHA — back to top" className="text-paper"><LogoMark className="w-7" /></a>
        <nav aria-label="Presentation chapters" className="hidden items-center gap-7 md:flex">
          {chapters.map((chapter) => (
            <a key={chapter.id} href={`#${chapter.id}`} className={`nav-link ${active === chapter.id ? "is-active" : ""}`}>
              {chapter.number} <span>{chapter.label}</span>
            </a>
          ))}
        </nav>
        <span className="font-ui text-[10px] uppercase tracking-[.2em] text-paper md:hidden">{active}</span>
      </header>
      <div className="fixed left-0 top-0 z-[60] h-[2px] bg-sage" style={{ width: `${progress * 100}%` }} />
    </>
  );
}
