"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ReactNode, type TouchEvent } from "react";
import { brandColors, meanings } from "@/data/brand";
import { gsap } from "@/lib/gsap";

const TOTAL_SLIDES = 16;

type LogoAssetProps = {
  kind?: "symbol" | "wordmark";
  light?: boolean;
  className?: string;
  alt?: string;
};

function LogoAsset({ kind = "wordmark", light = false, className = "", alt = "ANBHA logo" }: LogoAssetProps) {
  const filename = kind === "symbol"
    ? light ? "logo-white.svg" : "logo-black.svg"
    : light ? "wordmark-white.svg" : "wordmark-black.svg";
  return <img src={`/brand/logo/${filename}`} alt={alt} className={className} draggable={false} />;
}

function Slide({ children, dark = false, sage = false, className = "" }: { children: ReactNode; dark?: boolean; sage?: boolean; className?: string }) {
  return <section className={`deck-slide ${dark ? "slide-dark" : sage ? "slide-sage" : "slide-paper"} ${className}`}>{children}</section>;
}

function Kicker({ number, children, light = false }: { number: string; children: ReactNode; light?: boolean }) {
  return <div className={`kicker ${light ? "kicker-light" : ""}`}><span>{number}</span><i />{children}</div>;
}

function SlideTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`slide-title ${className}`}>{children}</h2>;
}

function CoverSlide() {
  return <Slide className="cover-slide"><div className="cover-ring ring-one" /><div className="cover-ring ring-two" /><div className="cover-center"><LogoAsset kind="symbol" className="cover-symbol" /><LogoAsset className="cover-wordmark" /><p>Pure Silver. Endless Stories</p><span>Brand Identity Presentation</span></div><div className="corner-note">ANBHA / 2026</div></Slide>;
}

function IntroductionSlide() {
  return <Slide><div className="slide-pad intro-layout"><Kicker number="01">The Story</Kicker><div className="intro-statement"><p>Every jewellery brand<br />tells a story.</p><span>ANBHA begins with purity, meaning,<br />and timeless elegance.</span></div><LogoAsset kind="symbol" className="intro-watermark" alt="" /></div></Slide>;
}

function InspirationSlide() {
  return <Slide><div className="split-slide"><div className="split-copy"><Kicker number="03">The Inspiration</Kicker><SlideTitle>Rooted in<br /><em>purity.</em></SlideTitle><p className="body-copy">The ANBHA identity is inspired by the lotus associated with Goddess Lakshmi—a symbol of purity, grace, prosperity, and divine beauty.</p><div className="meaning-strip"><span>Purity</span><span>Grace</span><span>Prosperity</span></div></div><div className="split-image"><Image src="/brand/lotus/lotus-reference-pink.png" alt="Pink lotus reference associated with Goddess Lakshmi" fill sizes="50vw" className="object-cover" priority /><span className="image-caption">01 / Natural reference — pink lotus</span></div></div></Slide>;
}

function TransformationSlide() {
  return <Slide sage><div className="slide-pad transform-slide"><Kicker number="04">From symbol to identity</Kicker><div className="comparison-grid"><figure className="reference-panel"><Image src="/brand/lotus/lotus-reference-pink.png" alt="Pink lotus reference" fill sizes="45vw" className="object-cover" /><figcaption>Reference / Organic form</figcaption><svg className="trace-overlay" viewBox="0 0 700 560" fill="none" aria-hidden="true"><path className="trace-line" d="M350 500C326 340 329 208 350 56c21 152 24 284 0 444Z"/><path className="trace-line" d="M342 470C222 416 131 322 82 188c135 38 226 132 260 282Z"/><path className="trace-line" d="M358 470c120-54 211-148 260-282-135 38-226 132-260 282Z"/></svg></figure><div className="refine-axis"><span>Trace</span><i /><span>Refine</span></div><figure className="identity-panel"><div className="identity-gridlines" /><LogoAsset kind="symbol" className="identity-symbol" /><figcaption>Identity / Simplified form</figcaption></figure></div><div className="comparison-copy"><h2>From lotus<br />to <em>ANBHA.</em></h2><p>We studied the flower’s organic form and refined it into a clean, timeless symbol.</p></div></div></Slide>;
}

function LogoRevealSlide() {
  return <Slide dark><div className="slide-pad reveal-layout"><Kicker number="05" light>The ANBHA Logo</Kicker><div className="logo-specimen"><div><span>Symbol</span><LogoAsset kind="symbol" light className="spec-symbol" /></div><i /><div><span>Wordmark</span><LogoAsset light className="spec-wordmark" /></div></div><p className="reveal-copy">A refined identity inspired by tradition,<br />designed for a modern silver jewellery brand.</p></div></Slide>;
}

function MeaningSlide() {
  return <Slide><div className="slide-pad meaning-layout"><div><Kicker number="06">What the logo represents</Kicker><SlideTitle>Meaning in<br />every <em>line.</em></SlideTitle></div><div className="meaning-list">{meanings.map(([title, text], index) => <div key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></Slide>;
}

function ColorSlide() {
  return <Slide><div className="slide-pad color-layout"><div className="color-heading"><Kicker number="07">Brand Colors</Kicker><SlideTitle>A palette of<br /><em>quiet confidence.</em></SlideTitle><p>Together, these colors create a visual language that feels pure, refined, minimal, and premium.</p></div><div className="swatch-stack">{brandColors.map((color, index) => <article key={color.hex} style={{ backgroundColor: color.hex, color: index === 2 ? "#F9F9F9" : "#193B32" }}><div><strong>{color.hex}</strong><span>{color.name}</span></div><p>{color.words.join(" · ")}</p></article>)}</div></div></Slide>;
}

function TypographySlide() {
  return <Slide sage><div className="slide-pad type-layout"><div className="type-intro"><Kicker number="08">Typography</Kicker><SlideTitle>Elegance,<br /><em>clearly spoken.</em></SlideTitle><p>The typography balances elegance and clarity—helping the brand feel premium, modern, and timeless.</p></div><div className="type-spec"><div><span>DISPLAY / CORMORANT GARAMOND</span><strong>Aa</strong><p>Pure Silver.<br /><em>Endless Stories.</em></p></div><div><span>BODY / MANROPE</span><p>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789</p><small>REFINED · MODERN · TIMELESS</small></div></div></div></Slide>;
}

function UsageSlide() {
  return <Slide><div className="slide-pad usage-layout"><div><Kicker number="09">Logo Usage Guidelines</Kicker><SlideTitle>Space to<br /><em>be seen.</em></SlideTitle><p className="body-copy">Preserve clear space and consistent proportions across every touchpoint.</p></div><div className="clearspace-demo"><div className="measure-line measure-x">1×</div><div className="measure-line measure-y">1×</div><LogoAsset className="usage-wordmark" /><div className="clear-box" /></div><div className="usage-row"><div><span>Primary</span><LogoAsset className="mini-wordmark" /></div><div className="dark-use"><span>Reversed</span><LogoAsset light className="mini-wordmark" /></div><div><span>Minimum symbol / 24 px</span><LogoAsset kind="symbol" className="mini-symbol" /></div></div></div></Slide>;
}

const misuseItems = ["Stretch", "Recolor", "Rotate", "Add effects", "Use on clutter", "Distort proportions"];

function MisuseSlide() {
  return <Slide sage><div className="slide-pad misuse-layout"><div className="misuse-heading"><Kicker number="10">Logo Misuse</Kicker><SlideTitle>Keep it<br /><em>consistent.</em></SlideTitle><p>To maintain recognition, the logo should always be used correctly.</p></div><div className="misuse-cards">{misuseItems.map((item, index) => <article key={item}><div className={`misuse-logo misuse-logo-${index}`}><LogoAsset kind="symbol" /><X size={18} /></div><p>Do not {item.toLowerCase()}</p></article>)}</div></div></Slide>;
}

function PackagingSlide() {
  return <Slide><div className="slide-pad package-layout"><div className="package-copy"><Kicker number="11">Packaging Mockups</Kicker><SlideTitle>The story,<br /><em>unwrapped.</em></SlideTitle><p>The ANBHA identity extends beautifully across packaging, creating a premium and memorable unboxing experience.</p><div className="package-tags"><span>Jewellery box</span><span>Pouch</span><span>Carry bag</span><span>Brand cards</span></div></div><div className="package-image"><Image src="/brand/packaging/packaging-hero.png" alt="Premium jewellery packaging in the ANBHA palette" fill sizes="58vw" className="object-cover" /><LogoAsset kind="symbol" className="package-logo-overlay" /></div></div></Slide>;
}

function CollateralSlide() {
  return <Slide dark><div className="slide-pad collateral-layout"><div><Kicker number="12" light>Brand Applications</Kicker><SlideTitle>Every detail<br /><em>belongs.</em></SlideTitle></div><div className="collateral-stage"><article className="card-auth"><span>Certificate of Authenticity</span><LogoAsset light className="card-logo" /><small>925 / PURE SILVER</small></article><article className="card-care"><span>Jewellery Care</span><LogoAsset kind="symbol" className="care-symbol" /><p>Keep dry.<br />Store softly.<br />Wear often.</p></article><article className="card-thanks"><span>A note from ANBHA</span><p>Thank you for making us<br />part of your story.</p><LogoAsset kind="symbol" className="thanks-symbol" /></article></div></div></Slide>;
}

function WebsiteSlide() {
  return <Slide><div className="slide-pad digital-layout"><div className="digital-copy"><Kicker number="13">Digital Experience — Website</Kicker><SlideTitle>A quiet<br />digital <em>stage.</em></SlideTitle><p>The identity translates into a clean environment for discovering each collection.</p></div><div className="browser-frame"><div className="browser-top"><i/><i/><i/><span>anbha.com</span></div><div className="website-ui"><header><LogoAsset kind="symbol" className="web-symbol"/><nav>COLLECTIONS&nbsp;&nbsp;&nbsp;&nbsp; OUR STORY</nav><Search size={15}/></header><div className="website-hero"><div><small>THE FIRST CHAPTER</small><h3>Silver,<br/>made eternal.</h3><button>Discover the collection</button></div><div className="silver-ring"/></div><div className="product-row"><i/><i/><i/></div></div></div></div></Slide>;
}

function Phone({ product = false }: { product?: boolean }) {
  return <div className="phone"><div className="island"/><header><Menu size={13}/><LogoAsset kind="symbol" className="phone-symbol"/><ShoppingBag size={13}/></header>{product ? <><div className="phone-product"><div className="silver-ring"/></div><div className="phone-detail"><div><h4>Lotus Ring</h4><span>925 PURE SILVER</span></div><Heart size={16}/></div><button>Add to bag</button></> : <><div className="phone-hero"><div className="silver-ring"/></div><small>NEW COLLECTION</small><h4>Stories in silver.</h4></>}</div>;
}

function MobileSlide() {
  return <Slide sage><div className="slide-pad mobile-layout"><div><Kicker number="14">Digital Experience — Mobile</Kicker><SlideTitle>Grace,<br />in your <em>hand.</em></SlideTitle><p>On mobile, the identity remains graceful and refined—an immersive browsing experience without the noise.</p></div><div className="phone-pair"><Phone/><Phone product/></div></div></Slide>;
}

function FeelSlide() {
  return <Slide><div className="slide-pad feel-layout"><Kicker number="15">How ANBHA Feels</Kicker><div className="feel-words"><span>Pure</span><span>Elegant</span><span>Timeless</span><span>Graceful</span><span>Premium</span></div><p>ANBHA is designed to feel calm, luxurious, and meaningful—a brand that celebrates silver through simplicity and storytelling.</p><LogoAsset kind="symbol" className="feel-mark" alt="" /></div></Slide>;
}

function ClosingSlide() {
  return <Slide dark className="closing-slide"><div className="closing-copy"><p>Inspired by the lotus of Lakshmi, ANBHA is more than a logo—it is a symbol of purity, prosperity, and timeless beauty.</p><i/><LogoAsset light className="closing-logo"/><span>Pure Silver. Endless Stories</span></div><small>Inspired by purity · Designed for stories that last</small></Slide>;
}

const slides = [CoverSlide, IntroductionSlide, InspirationSlide, TransformationSlide, LogoRevealSlide, MeaningSlide, ColorSlide, TypographySlide, UsageSlide, MisuseSlide, PackagingSlide, CollateralSlide, WebsiteSlide, MobileSlide, FeelSlide, ClosingSlide];
const chapters = ["The Story", "The Story", "The Story", "The Story", "The Identity", "The Identity", "The Identity", "The Identity", "Guidelines", "Guidelines", "Experience", "Experience", "Experience", "Experience", "Experience", "Closing"];

export default function BrandDeck() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStart = useRef(0);
  const deck = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const goTo = useCallback((next: number) => {
    const bounded = Math.max(0, Math.min(TOTAL_SLIDES - 1, next));
    if (bounded === active) return;
    setDirection(bounded > active ? 1 : -1);
    setActive(bounded);
    window.history.replaceState(null, "", `#${bounded + 1}`);
  }, [active]);

  useEffect(() => {
    const requested = Number(window.location.hash.slice(1));
    if (Number.isInteger(requested) && requested >= 1 && requested <= TOTAL_SLIDES) {
      setActive(requested - 1);
    }
  }, []);

  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(event.key)) { event.preventDefault(); goTo(active + 1); }
      if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) { event.preventDefault(); goTo(active - 1); }
      if (event.key === "Home") goTo(0);
      if (event.key === "End") goTo(TOTAL_SLIDES - 1);
    };
    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  }, [active, goTo]);

  useEffect(() => {
    const scope = deck.current;
    if (active !== 3 || reduceMotion || !scope) return;
    const context = gsap.context(() => {
      gsap.fromTo(".trace-line", { strokeDashoffset: 760 }, { strokeDashoffset: 0, duration: 1.8, stagger: .14, ease: "power2.inOut" });
      gsap.fromTo(".identity-symbol", { opacity: 0, scale: .88 }, { opacity: 1, scale: 1, duration: 1.1, delay: .8, ease: "power3.out" });
    }, scope);
    return () => context.revert();
  }, [active, reduceMotion]);

  const CurrentSlide = slides[active];
  const transition = reduceMotion ? { duration: 0 } : { duration: .65, ease: [0.22, 1, 0.36, 1] as const };

  const onTouchStart = (event: TouchEvent) => { touchStart.current = event.touches[0].clientX; };
  const onTouchEnd = (event: TouchEvent) => {
    const delta = touchStart.current - event.changedTouches[0].clientX;
    if (Math.abs(delta) > 48) goTo(active + (delta > 0 ? 1 : -1));
  };

  return <div ref={deck} className="deck" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
    <div className="deck-stage">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div key={active} custom={direction} className="slide-motion" initial={reduceMotion ? false : { opacity: 0, x: direction * 34 }} animate={{ opacity: 1, x: 0 }} exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * -24 }} transition={transition}>
          <CurrentSlide />
        </motion.div>
      </AnimatePresence>
    </div>
    <div className="deck-chrome">
      <div className="deck-brand"><LogoAsset kind="symbol" className="chrome-symbol"/><span>{chapters[active]}</span></div>
      <div className="deck-progress" aria-label={`Slide ${active + 1} of ${TOTAL_SLIDES}`}><span>{String(active + 1).padStart(2, "0")}</span><div><i style={{ width: `${((active + 1) / TOTAL_SLIDES) * 100}%` }}/></div><span>{TOTAL_SLIDES}</span></div>
      <div className="deck-controls"><button onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Previous slide"><ArrowLeft size={17}/></button><button onClick={() => goTo(active + 1)} disabled={active === TOTAL_SLIDES - 1} aria-label="Next slide"><ArrowRight size={17}/></button></div>
    </div>
    <div className="slide-dots" aria-label="Choose slide">{slides.map((_, index) => <button key={index} onClick={() => goTo(index)} className={index === active ? "active" : ""} aria-label={`Go to slide ${index + 1}`} />)}</div>
  </div>;
}
