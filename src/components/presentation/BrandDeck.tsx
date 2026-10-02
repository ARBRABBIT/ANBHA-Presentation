"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ArrowLeft, ArrowRight, Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ReactNode, type TouchEvent } from "react";
import { brandColors } from "@/data/brand";
import LotusGeometry from "./LotusGeometry";

const TOTAL_SLIDES = 16;

type LogoAssetProps = {
  kind?: "symbol" | "wordmark" | "tagline" | "lockup";
  light?: boolean;
  color?: "white" | "black" | "green";
  className?: string;
  alt?: string;
};

function LogoAsset({ kind = "lockup", light = false, color, className = "", alt = "ANBHA logo" }: LogoAssetProps) {
  const chosenColor = color || (light ? "white" : "black");
  let filename = "";

  if (kind === "symbol") {
    filename = chosenColor === "white" ? "logo-white.svg" : chosenColor === "green" ? "logo-green.svg" : "logo-black.svg";
  } else if (kind === "wordmark") {
    filename = chosenColor === "white" ? "word-logo-white.svg" : chosenColor === "green" ? "word-logo-green.svg" : "word-logo-black.svg";
  } else if (kind === "tagline") {
    filename = chosenColor === "white" ? "tagline-white.svg" : chosenColor === "green" ? "tagline-green.svg" : "tagline-black.svg";
  } else {
    filename = chosenColor === "white" ? "whole-logo-white.svg" : chosenColor === "green" ? "whole-logo-green.svg" : "whole-logo.svg";
  }

  return <img src={`/brand/logo/${filename}`} alt={alt} className={className} draggable={false} />;
}

function Slide({ children, dark = false, sage = false, className = "" }: { children: ReactNode; dark?: boolean; sage?: boolean; className?: string }) {
  return <section className={`deck-slide ${dark ? "slide-dark" : sage ? "slide-sage" : "slide-paper"} ${className}`}>{children}</section>;
}

function Kicker({ number, children, light = false }: { number: string; children: ReactNode; light?: boolean }) {
  return <div className={`kicker ${light ? "kicker-light" : ""}`}><span>{number}</span>{children}</div>;
}

function SlideTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`slide-title ${className}`}>{children}</h2>;
}

function CoverSlide() {
  return <Slide className="cover-slide"><div className="cover-ring ring-one" /><div className="cover-ring ring-two" /><div className="cover-center"><LogoAsset className="cover-wordmark" /><span>Brand Identity Presentation</span></div><div className="corner-note">ANBHA / 2026</div></Slide>;
}

function IntroductionSlide() {
  return (
    <Slide>
      <div className="slide-pad intro-grid">
        <div className="intro-copy">
          <Kicker number="01">The Story</Kicker>
          <h2 className="intro-heading">
            Every jewellery brand<br />tells a story.
          </h2>
          <p className="intro-subtext">
            ANBHA begins with purity, meaning,<br />and timeless elegance.
          </p>
        </div>
        <div className="intro-stage">
          <LotusGeometry />
        </div>
      </div>
    </Slide>
  );
}

function InspirationSlide() {
  return (
    <Slide>
      <div className="split-slide">
        <div className="split-copy">
          <Kicker number="03">The Inspiration</Kicker>
          <SlideTitle>
            Rooted in<br /><em>purity.</em>
          </SlideTitle>
          <p className="body-copy">
            The ANBHA identity is inspired by the lotus associated with Goddess Lakshmi, a symbol of purity, grace, prosperity, and divine beauty.
          </p>
          <div className="meaning-strip">
            <span>Purity</span>
            <span>Grace</span>
            <span>Prosperity</span>
          </div>
        </div>
        <div className="split-image">
          <Image
            src="/brand/lotus/lotus-inspiration-8k.png"
            alt="Pink lotus reference associated with Goddess Lakshmi"
            fill
            sizes="50vw"
            className="object-cover"
            priority
          />
          <span className="image-caption">01 / Natural reference · pink lotus</span>
        </div>
      </div>
    </Slide>
  );
}

function TransformationSlide() {
  return (
    <Slide sage>
      <div className="slide-pad transform-slide">
        <div className="transform-header">
          <div className="transform-heading-group">
            <Kicker number="04">From symbol to identity</Kicker>
            <h2 className="transform-title">
              From lotus<br />to <em>ANBHA.</em>
            </h2>
          </div>
          <p className="transform-subtext">
            We studied the flower’s organic form and refined it into a clean, timeless symbol.
          </p>
        </div>
        <div className="comparison-grid">
          <figure className="reference-panel">
            <Image
              src="/brand/lotus/lotus-reference-pink.png"
              alt="Pink lotus reference"
              fill
              sizes="45vw"
              className="object-cover"
            />
            <figcaption>Reference / Organic form</figcaption>
            <svg
              className="trace-overlay"
              viewBox="0 0 700 560"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <filter
                  id="pencil-sketch"
                  x="-15%"
                  y="-15%"
                  width="130%"
                  height="130%"
                >
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.045 0.09"
                    numOctaves={3}
                    result="noise"
                  />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale={2.4}
                    xChannelSelector="R"
                    yChannelSelector="G"
                  />
                </filter>
              </defs>
              <g className="trace-sketch" transform="translate(-24, 0)">
                {/* Construction gesture lines */}
                <path
                  className="trace-line-guide"
                  d="M350 42 C349.5 160 350.5 340 350 518"
                />
                <path
                  className="trace-line-guide"
                  d="M175 240 C235 130 465 130 525 240"
                />

                {/* Central petal pencil contours */}
                <path
                  className="trace-line"
                  d="M350 70 C328 120 310 195 324 290 C334 355 344 425 350 485"
                />
                <path
                  className="trace-line"
                  d="M350 70 C372 120 390 195 376 290 C366 355 356 425 350 485"
                />
                <path
                  className="trace-line-secondary"
                  d="M349 65 C325 125 306 200 322 294 C332 358 343 427 349 488"
                />
                <path
                  className="trace-line-secondary"
                  d="M351 65 C375 125 394 200 378 294 C368 358 357 427 351 488"
                />
                <path className="trace-line-guide" d="M347 78 L350 64 L353 78" />

                {/* Left inner petal sketch */}
                <path
                  className="trace-line"
                  d="M348 480 C322 435 256 350 242 260 C234 218 250 178 280 158 C310 138 338 185 348 255"
                />
                <path
                  className="trace-line-secondary"
                  d="M346 483 C319 438 253 354 239 263 C231 221 247 181 278 160 C307 141 336 188 346 258"
                />

                {/* Right inner petal sketch */}
                <path
                  className="trace-line"
                  d="M352 480 C378 435 444 350 458 260 C466 218 450 178 420 158 C390 138 362 185 352 255"
                />
                <path
                  className="trace-line-secondary"
                  d="M354 483 C381 438 447 354 461 263 C469 221 453 181 422 160 C393 141 364 188 354 258"
                />

                {/* Left outer blooming petal */}
                <path
                  className="trace-line"
                  d="M344 484 C272 465 194 408 148 338 C118 294 125 248 162 230 C206 210 266 284 332 390"
                />
                <path
                  className="trace-line-secondary"
                  d="M342 486 C269 468 191 411 145 341 C115 297 122 251 159 232 C203 213 263 287 330 393"
                />

                {/* Right outer blooming petal */}
                <path
                  className="trace-line"
                  d="M356 484 C428 465 506 408 552 338 C582 294 575 248 538 230 C494 210 434 284 368 390"
                />
                <path
                  className="trace-line-secondary"
                  d="M358 486 C431 468 509 411 555 341 C585 297 578 251 541 232 C497 213 437 287 370 393"
                />

                {/* Base petal cradle */}
                <path
                  className="trace-line"
                  d="M245 412 C288 474 350 496 412 474 C455 412 404 466 350 475 C296 466 245 412 245 412"
                />
                <path
                  className="trace-line-secondary"
                  d="M248 416 C290 477 350 499 410 477 C452 416 401 469 350 478 C299 469 248 416 248 416"
                />

                {/* Pencil shading / cross-hatching at base */}
                <path className="trace-hatch" d="M336 488 L343 462" />
                <path className="trace-hatch" d="M342 490 L347 460" />
                <path className="trace-hatch" d="M350 492 L350 458" />
                <path className="trace-hatch" d="M358 490 L353 460" />
                <path className="trace-hatch" d="M364 488 L357 462" />

                {/* Petal vein / structure guide lines */}
                <path
                  className="trace-line-guide"
                  d="M350 470 C340 375 329 295 328 205"
                />
                <path
                  className="trace-line-guide"
                  d="M350 470 C360 375 371 295 372 205"
                />
              </g>
            </svg>
          </figure>
          <div className="refine-axis">
            <span>Trace</span>
            <i />
            <span>Refine</span>
          </div>
          <figure className="identity-panel">
            <div className="identity-gridlines" />
            <LogoAsset kind="symbol" className="identity-symbol" />
            <figcaption>Identity / Simplified form</figcaption>
          </figure>
        </div>
      </div>
    </Slide>
  );
}

function LogoRevealSlide() {
  return (
    <Slide dark>
      <div className="slide-pad reveal-layout">
        <Kicker number="05" light>The ANBHA Logo</Kicker>
        <div className="logo-specimen">
          <div className="specimen-col">
            <span>01 · Symbol</span>
            <div className="spec-frame">
              <LogoAsset kind="symbol" light className="spec-symbol" alt="ANBHA Symbol" />
            </div>
          </div>
          <i />
          <div className="specimen-col">
            <span>02 · Word logo</span>
            <div className="spec-frame">
              <LogoAsset kind="wordmark" light className="spec-wordmark" alt="ANBHA Word Logo" />
            </div>
          </div>
          <i />
          <div className="specimen-col">
            <span>03 · Tagline</span>
            <div className="spec-frame">
              <LogoAsset kind="tagline" light className="spec-tagline" alt="ANBHA Tagline" />
            </div>
          </div>
        </div>
        <p className="reveal-copy">
          A refined identity inspired by tradition,<br />designed for a modern silver jewellery brand.
        </p>
      </div>
    </Slide>
  );
}

function ColorSlide() {
  return <Slide><div className="slide-pad color-layout"><div className="color-heading"><Kicker number="06">Brand Colors</Kicker><SlideTitle>A palette of<br /><em>quiet confidence.</em></SlideTitle><p>Together, these colors create a visual language that feels pure, refined, minimal, and premium.</p></div><div className="swatch-stack">{brandColors.map((color, index) => <article key={color.hex} style={{ backgroundColor: color.hex, color: index === 2 ? "#F9F9F9" : "#193B32" }}><div><strong>{color.hex}</strong><span>{color.name}</span></div><p>{color.words.join(" · ")}</p></article>)}</div></div></Slide>;
}

function DualBackgroundSlide() {
  return (
    <Slide className="dual-split-slide">
      <div className="dual-split-half cream-half">
        <LogoAsset kind="lockup" color="green" className="dual-split-logo" alt="Complete ANBHA Green Logo on Cream Background" />
      </div>
      <div className="dual-split-half green-half">
        <LogoAsset kind="lockup" color="white" className="dual-split-logo" alt="Complete ANBHA White Logo on Green Background" />
      </div>
    </Slide>
  );
}

function TypographySlide() {
  return (
    <Slide sage>
      <div className="slide-pad type-layout">
        <div className="type-intro">
          <Kicker number="07">Typography</Kicker>
          <SlideTitle>
            Elegance,<br /><em>clearly spoken.</em>
          </SlideTitle>
          <p>
            The typography balances elegance and clarity, helping the brand feel premium, modern, and timeless.
          </p>
        </div>
        <div className="type-spec">
          {/* Display Font Card */}
          <div className="type-card display-card">
            <div className="type-card-top">
              <div>
                <span className="type-role-badge">Display Font</span>
                <h3 className="type-font-heading serif-heading">Cormorant Upright</h3>
              </div>
              <strong className="type-glyph-hero">Aa</strong>
            </div>
            <div className="type-rationale-box">
              <span className="type-rationale-label">Why we chose this font</span>
              <p>
                An upright cursive serif with distinct calligraphic poise and graceful curves. Its fluid, handcrafted ductus and delicate hairline serifs evoke royal Indian heritage, celebratory adornment, and the timeless artisanal purity of pure silver.
              </p>
            </div>
          </div>

          {/* Body Font Card */}
          <div className="type-card body-card">
            <div className="type-card-top">
              <div>
                <span className="type-role-badge">Body &amp; UI Font</span>
                <h3 className="type-font-heading sans-heading">Manrope</h3>
              </div>
            </div>
            <div className="type-body-content-grid">
              <p className="type-character-set">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                abcdefghijklmnopqrstuvwxyz<br />
                0123456789
              </p>
              <div className="type-rationale-box">
                <span className="type-rationale-label">Why we chose this font</span>
                <p>
                  A modern, geometric grotesque sans-serif with open apertures and clean geometric rhythm. It ensures effortless legibility and functional clarity across digital commerce, hallmark certificates, and product specifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

function UsageSlide() {
  const [activeUsage, setActiveUsage] = useState<"logo" | "wordmark" | "lockup">("logo");

  return (
    <Slide>
      <div className="slide-pad usage-layout">
        <div>
          <Kicker number="08">Logo Usage Guidelines</Kicker>
          <SlideTitle>
            Precision in<br /><em>every form.</em>
          </SlideTitle>
          <p className="body-copy">
            Preserve clear space and consistent proportions across every touchpoint.
          </p>
        </div>
        <div className="clearspace-demo">
          <div className={`clear-box clear-box-${activeUsage}`}>
            <div className="measure-line measure-x">1×</div>
            <div className="measure-line measure-y">1×</div>
          </div>
          {activeUsage === "logo" && (
            <LogoAsset kind="symbol" className="usage-display-symbol" alt="ANBHA symbol logo" />
          )}
          {activeUsage === "wordmark" && (
            <LogoAsset kind="wordmark" className="usage-display-wordmark" alt="ANBHA wordmark" />
          )}
          {activeUsage === "lockup" && (
            <LogoAsset kind="lockup" className="usage-display-lockup" alt="ANBHA logo and wordmark" />
          )}
        </div>
        <div className="usage-row" role="tablist" aria-label="Logo Usage Types">
          <button
            type="button"
            role="tab"
            aria-selected={activeUsage === "logo"}
            onClick={() => setActiveUsage("logo")}
            className={activeUsage === "logo" ? "dark-use" : ""}
          >
            <span>1. Logo</span>
            <LogoAsset kind="symbol" light={activeUsage === "logo"} className="mini-symbol" alt="Logo preview" />
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeUsage === "wordmark"}
            onClick={() => setActiveUsage("wordmark")}
            className={activeUsage === "wordmark" ? "dark-use" : ""}
          >
            <span>2. Wordmark</span>
            <LogoAsset kind="wordmark" light={activeUsage === "wordmark"} className="mini-wordmark" alt="Wordmark preview" />
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeUsage === "lockup"}
            onClick={() => setActiveUsage("lockup")}
            className={activeUsage === "lockup" ? "dark-use" : ""}
          >
            <span>3. Logo + Wordmark</span>
            <LogoAsset kind="lockup" light={activeUsage === "lockup"} className="mini-wordmark" alt="Logo + wordmark preview" />
          </button>
        </div>
      </div>
    </Slide>
  );
}

const misuseItems = ["Stretch", "Recolor", "Rotate", "Add effects", "Use on clutter", "Distort proportions"];

function MisuseSlide() {
  return <Slide sage><div className="slide-pad misuse-layout"><div className="misuse-heading"><Kicker number="09">Logo Misuse</Kicker><SlideTitle>Keep it<br /><em>consistent.</em></SlideTitle><p>To maintain recognition, the logo should always be used correctly.</p></div><div className="misuse-cards">{misuseItems.map((item, index) => <article key={item}><div className={`misuse-logo misuse-logo-${index}`}><LogoAsset kind="symbol" /><X size={18} /></div><p>Do not {item.toLowerCase()}</p></article>)}</div></div></Slide>;
}

function PackagingSlide() {
  return (
    <Slide>
      <div className="slide-pad package-layout">
        <div className="package-copy">
          <Kicker number="10">Packaging Mockups</Kicker>
          <SlideTitle>
            The story,<br /><em>unwrapped.</em>
          </SlideTitle>
          <p>
            The ANBHA identity extends beautifully across packaging, creating a premium and memorable unboxing experience.
          </p>
          <div className="package-tags">
            <span>Jewellery box</span>
            <span>Velvet pouch</span>
            <span>Gift tag</span>
            <span>Brand cards</span>
          </div>
        </div>
        <div className="package-image">
          <Image
            src="/brand/packaging/mockup-1.png"
            alt="ANBHA jewellery packaging set"
            fill
            sizes="58vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </Slide>
  );
}

function CollateralSlide() {
  return (
    <Slide dark>
      <div className="slide-pad collateral-layout">
        <div>
          <Kicker number="11" light>Brand Applications</Kicker>
          <SlideTitle>
            Every detail<br /><em>belongs.</em>
          </SlideTitle>
        </div>
        <div className="collateral-stage">
          <div className="floating-card-item card-back-float">
            <img
              src="/brand/collateral/back.svg"
              alt="ANBHA Brand Card - Back with QR code and contact details"
              className="floating-card-img"
              draggable={false}
            />
          </div>
          <div className="floating-card-item card-front-float">
            <img
              src="/brand/collateral/front.svg"
              alt="ANBHA Brand Card - Front with signature logo"
              className="floating-card-img"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}

function WebsiteSlide() {
  return (
    <Slide>
      <div className="slide-pad digital-layout">
        <div className="digital-copy">
          <Kicker number="12">Digital Experience · Website</Kicker>
          <SlideTitle>
            A quiet<br />digital <em>stage.</em>
          </SlideTitle>
          <p>The identity translates into a clean environment for discovering each collection.</p>
        </div>
        <div className="browser-frame">
          <div className="browser-top">
            <i/><i/><i/><span>anbha.com</span>
          </div>
          <div className="website-ui">
            <header>
              <LogoAsset kind="symbol" className="web-symbol"/>
              <nav>COLLECTIONS&nbsp;&nbsp;&nbsp;&nbsp; OUR STORY</nav>
              <Search size={15}/>
            </header>
            <div className="website-hero">
              <div>
                <small>THE FIRST CHAPTER</small>
                <h3>Silver,<br/>made eternal.</h3>
                <button>Discover the collection</button>
              </div>
              <div className="hero-plate-stage">
                <div className="silver-ring"/>
                <img
                  src="/brand/jewellery/silver-ring.svg"
                  alt="ANBHA Pure Silver Lotus Ring"
                  className="plate-silver-ring"
                  draggable={false}
                />
              </div>
            </div>
            <div className="product-row">
              <i/><i/><i/>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

function Phone({ product = false }: { product?: boolean }) {
  return (
    <div className="phone">
      <div className="island"/>
      <header>
        <Menu size={13}/>
        <LogoAsset kind="symbol" className="phone-symbol"/>
        <ShoppingBag size={13}/>
      </header>
      {product ? (
        <>
          <div className="phone-product">
            <div className="hero-plate-stage">
              <div className="silver-ring"/>
              <img
                src="/brand/jewellery/silver-ring.svg"
                alt="Lotus Ring"
                className="plate-silver-ring"
                draggable={false}
              />
            </div>
          </div>
          <div className="phone-detail">
            <div>
              <h4>Lotus Ring</h4>
              <span>925 PURE SILVER</span>
            </div>
            <Heart size={16}/>
          </div>
          <button>Add to bag</button>
        </>
      ) : (
        <>
          <div className="phone-hero">
            <div className="hero-plate-stage">
              <div className="silver-ring"/>
              <img
                src="/brand/jewellery/silver-ring.svg"
                alt="Stories in silver"
                className="plate-silver-ring"
                draggable={false}
              />
            </div>
          </div>
          <small>NEW COLLECTION</small>
          <h4>Stories in silver.</h4>
        </>
      )}
    </div>
  );
}

function MobileSlide() {
  return <Slide sage><div className="slide-pad mobile-layout"><div><Kicker number="13">Digital Experience · Mobile</Kicker><SlideTitle>Grace,<br />in your <em>hand.</em></SlideTitle><p>On mobile, the identity remains graceful and refined, an immersive browsing experience without the noise.</p></div><div className="phone-pair"><Phone/><Phone product/></div></div></Slide>;
}

function FeelSlide() {
  return <Slide><div className="slide-pad feel-layout"><Kicker number="14">How ANBHA Feels</Kicker><div className="feel-words"><span>Pure</span><span>Elegant</span><span>Timeless</span><span>Graceful</span><span>Premium</span></div><p>ANBHA is designed to feel calm, luxurious, and meaningful, a brand that celebrates silver through simplicity and storytelling.</p><LogoAsset kind="symbol" className="feel-mark" alt="" /></div></Slide>;
}

function ClosingSlide() {
  return <Slide dark className="closing-slide"><div className="closing-copy"><p>Inspired by the lotus of Lakshmi, ANBHA is more than a logo, it is a symbol of purity, prosperity, and timeless beauty.</p><i/><LogoAsset light className="closing-logo"/></div><small>Inspired by purity · Designed for stories that last</small></Slide>;
}

const slides = [CoverSlide, IntroductionSlide, InspirationSlide, TransformationSlide, LogoRevealSlide, ColorSlide, DualBackgroundSlide, TypographySlide, UsageSlide, MisuseSlide, PackagingSlide, CollateralSlide, WebsiteSlide, MobileSlide, FeelSlide, ClosingSlide];
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
      gsap.fromTo(".trace-line, .trace-line-secondary, .trace-line-guide, .trace-hatch", { strokeDashoffset: 950 }, { strokeDashoffset: 0, duration: 1.8, stagger: .04, ease: "power2.inOut" });
      gsap.fromTo(".identity-symbol", { opacity: 0, scale: .88 }, { opacity: 1, scale: 1, duration: 1.1, delay: .9, ease: "power3.out" });
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
