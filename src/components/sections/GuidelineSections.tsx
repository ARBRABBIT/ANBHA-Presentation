"use client";

import { RotateCw, Scaling, Sparkles, Palette, ScanLine, ImageOff } from "lucide-react";
import { Logo, LogoMark } from "@/components/logo/Logo";
import { ChapterLabel, Container, SectionTitle } from "@/components/layout/Primitives";
import { Reveal } from "@/components/animation/Reveal";
import { misuse } from "@/data/brand";

export function UsageSection() {
  return (
    <section id="guidelines" className="bg-paper py-28 text-forest md:py-40">
      <Container>
        <ChapterLabel number="03">The Guidelines</ChapterLabel>
        <div className="mt-16 grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <div><SectionTitle className="text-[clamp(3.5rem,6vw,7rem)]">Space to<br /><em className="font-normal">be seen.</em></SectionTitle><p className="mt-8 max-w-sm text-sm leading-relaxed text-forest/60">Consistent clear space preserves the calm and recognition of the ANBHA mark across every touchpoint.</p></div>
          <div className="usage-canvas">
            <span className="measure measure-top">1×</span><span className="measure measure-side">1×</span>
            <div className="clearspace-box"><Logo /></div>
          </div>
        </div>
        <div className="mt-20 grid gap-px overflow-hidden border border-forest/15 bg-forest/15 md:grid-cols-3">
          <div className="usage-cell"><span>Primary lockup</span><Logo compact /></div>
          <div className="usage-cell bg-forest text-paper"><span className="text-paper/50">Reversed</span><Logo light compact /></div>
          <div className="usage-cell"><span>Minimum size · 24 px</span><LogoMark className="w-8" /></div>
        </div>
      </Container>
    </section>
  );
}

const icons = [Scaling, RotateCw, Palette, Sparkles, ImageOff, ScanLine];

export function MisuseSection() {
  return (
    <section className="bg-sage py-28 text-forest md:py-40">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2"><div><p className="eyebrow">Logo misuse</p><SectionTitle className="mt-7 text-[clamp(3.5rem,6vw,7rem)]">Protect the<br /><em className="font-normal">silence.</em></SectionTitle></div><p className="max-w-md self-end text-sm leading-relaxed text-forest/60">To maintain consistency and recognition, the logo should always be used with restraint across every application.</p></div>
        <div className="misuse-grid mt-16">
          {misuse.map((item, index) => {
            const Icon = icons[index];
            return <Reveal key={item} delay={index * .04} className="misuse-item"><Icon strokeWidth={1.3} size={24} /><div className="misuse-demo"><LogoMark className={`w-16 misuse-${index}`} /><span className="cross-line" /></div><p>{item}</p></Reveal>;
          })}
        </div>
      </Container>
    </section>
  );
}
