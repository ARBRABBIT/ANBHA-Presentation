import { Heart, Menu, Search, ShoppingBag } from "lucide-react";
import { LogoMark } from "@/components/logo/Logo";

const products = ["Arc Earrings", "Lotus Ring", "Quiet Chain"];

export function BrowserMockup() {
  return (
    <div className="browser-shell">
      <div className="browser-bar"><i /><i /><i /><span>anbha.com</span></div>
      <div className="web-page">
        <div className="web-nav"><LogoMark className="w-6" /><span>COLLECTIONS</span><span>OUR STORY</span><Search size={13} /></div>
        <div className="web-hero"><div><span className="type-meta">The first chapter</span><h3>Silver,<br />made eternal.</h3><button>Discover the collection</button></div><div className="silver-orbit" /></div>
        <div className="web-products">{products.map((product, i) => <div key={product}><div className={`product-shape shape-${i}`} /><span>{product}</span></div>)}</div>
      </div>
    </div>
  );
}

export function PhoneMockup({ variant = 0 }: { variant?: number }) {
  return (
    <div className={`phone-shell phone-${variant}`}>
      <div className="phone-island" />
      <div className="phone-nav"><Menu size={14} /><LogoMark className="w-5" /><ShoppingBag size={14} /></div>
      {variant === 0 ? <><div className="phone-visual"><div className="silver-orbit" /></div><p className="type-meta mt-5">New collection</p><h3 className="font-display text-3xl">Stories in silver.</h3></> : <><div className="phone-product"><div className="product-shape shape-1" /></div><div className="flex items-center justify-between"><div><p className="font-display text-2xl">Lotus Ring</p><span className="text-[9px]">925 PURE SILVER</span></div><Heart size={16} /></div><button className="phone-button">Add to bag</button></>}
    </div>
  );
}
