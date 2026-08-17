"use client";

import React from "react";
import { useBreakpoint } from "./use-breakpoint";
import Navbar, { T } from "./Navbar";
import Footer from "./Footer";
import { useScrollReveal, ripple } from "./ProductPage";
import { IndustryBlock, IndustryBlockRenderer, IndustryCTA } from "./IndustryBlocks";

export interface IndustryHeroData {
  eyebrow: string;
  heading: React.ReactNode;
  subtext: string;
  primaryCta: IndustryCTA;
  secondaryCta?: IndustryCTA;
  trustLine?: string;
  geoLine?: string;
}

export interface IndustryPageProps {
  hero: IndustryHeroData;
  blocks: IndustryBlock[];
  relatedLinks?: { label: string; href: string }[];
}

/* ═══════════════════════════════════════
   SHARED INDUSTRY PAGE COMPONENT
═══════════════════════════════════════ */
export default function IndustryPage({ hero, blocks, relatedLinks }: IndustryPageProps) {
  useScrollReveal();
  const { isMobile, isTablet } = useBreakpoint();
  const [scrolled, setScrolled] = React.useState(false);
  const [scrollPct, setScrollPct] = React.useState(0);

  React.useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 20);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(max > 0 ? window.scrollY / max : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const hPad = isMobile ? 20 : isTablet ? 48 : 80;

  return (
    <>
      <style>{`
        html,body{margin:0;padding:0;background:#FAFAF8;}
        *,*::before,*::after{box-sizing:border-box;}
        img{display:block;}
        .fade-up{opacity:0;transform:translateY(40px);transition:opacity 0.75s cubic-bezier(0.16,1,0.3,1),transform 0.75s cubic-bezier(0.16,1,0.3,1);}
        .fade-up.visible{opacity:1;transform:translateY(0);}
        @keyframes ctaPulse{0%,100%{box-shadow:0 0 0 0 rgba(96,9,255,0.40);}60%{box-shadow:0 0 0 14px rgba(96,9,255,0);}}
        .cta-pulse{animation:ctaPulse 2.8s ease-in-out infinite;}
        @keyframes rippleOut{from{transform:scale(0);opacity:0.55;}to{transform:scale(1);opacity:0;}}
        .ripple-effect{position:absolute;border-radius:50%;background:rgba(255,255,255,0.38);animation:rippleOut 0.55s ease-out forwards;pointer-events:none;}
        .challenge-card{background:#fff;border:1px solid #E7E0EC;border-radius:16px;transition:transform 0.3s cubic-bezier(0.16,1,0.3,1),box-shadow 0.3s cubic-bezier(0.16,1,0.3,1);}
        .challenge-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(96,9,255,0.10);border-color:#C4B5FD;}
        .footer-link{position:relative;display:inline-block;}
        .footer-link::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:1px;background:#6009FF;transition:width 0.3s cubic-bezier(0.16,1,0.3,1);}
        .footer-link:hover::after{width:100%;}
        @keyframes mapScrollY{from{transform:translateX(-50%) translateY(0);}to{transform:translateX(-50%) translateY(-50%);}}
        @keyframes menuSlideIn{from{opacity:0;transform:translateY(-8px);}to{opacity:1;transform:translateY(0);}}
      `}</style>

      {/* Scroll progress bar */}
      <div style={{ position:"fixed",top:0,left:0,right:0,height:3,zIndex:200,pointerEvents:"none" }}>
        <div style={{ height:"100%",width:`${scrollPct*100}%`,background:"linear-gradient(90deg,#6009FF 0%,#F4B249 100%)",transition:"width 0.1s linear",borderRadius:"0 2px 2px 0",boxShadow:"0 0 8px rgba(96,9,255,0.4)" }} />
      </div>

      <Navbar scrolled={scrolled} />

      {/* ══ HERO ══ */}
      <section style={{ position:"relative", width:"100%", background:T.bg, overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, left:"50%", width:isMobile?860:1600, pointerEvents:"none", zIndex:0, animation:"mapScrollY 38s linear infinite", willChange:"transform" }}>
          {[0,1].map(n => <img key={n} src="/world-map-dots.png" aria-hidden style={{ display:"block", width:"100%", opacity:isMobile?0.18:0.14, filter:"invert(1)" }} />)}
        </div>

        <div style={{ position:"relative", zIndex:1, maxWidth:1440, margin:"0 auto", padding:isMobile?`80px 20px 60px`:`120px ${hPad}px 100px`, display:"block" }}>
          <div style={{ maxWidth:isMobile?"100%":760, display:"flex", flexDirection:"column", gap:isMobile?24:22, alignItems:"flex-start" }}>
            <span style={{ fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:isMobile?12:14, letterSpacing:"0.08em", textTransform:"uppercase", color:T.orange }}>
              {hero.eyebrow}
            </span>
            <h1 style={{ margin:0, fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?42:isTablet?54:64, lineHeight:1.08, letterSpacing:"-0.02em", color:T.headingBlack }}>
              {hero.heading}
            </h1>
            <p style={{ margin:0, fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400, fontSize:isMobile?15:17, lineHeight:1.65, color:T.muted, maxWidth:520 }}>
              {hero.subtext}
            </p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:12, marginTop:4 }}>
              <button className="cta-pulse" style={{ position:"relative", overflow:"hidden", fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:T.white, background:T.primary, border:"none", borderRadius:4, padding:"13px 28px", cursor:"pointer", transition:"opacity .15s" }}
                onClick={e => { ripple(e); if (hero.primaryCta.external) window.open(hero.primaryCta.href,"_blank"); else window.location.href = hero.primaryCta.href; }}>
                {hero.primaryCta.label}
              </button>
              {hero.secondaryCta && (
                <button style={{ fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14, color:T.muted, background:"transparent", border:`1px solid ${T.muted}`, borderRadius:4, padding:"11px 24px", cursor:"pointer", transition:"background .15s" }}
                  onMouseEnter={e=>(e.currentTarget.style.background="#E9DDFF")} onMouseLeave={e=>(e.currentTarget.style.background="transparent")}
                  onClick={() => { if (hero.secondaryCta!.external) window.open(hero.secondaryCta!.href,"_blank"); else window.location.href = hero.secondaryCta!.href; }}>
                  {hero.secondaryCta.label}
                </button>
              )}
            </div>
            {(hero.trustLine || hero.geoLine) && (
              <div style={{ display:"flex", flexDirection:"column", gap:4, marginTop:8 }}>
                {hero.trustLine && <span style={{ fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:12.5, color:T.muted, letterSpacing:"0.02em" }}>{hero.trustLine}</span>}
                {hero.geoLine && <span style={{ fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:12.5, color:T.muted }}>{hero.geoLine}</span>}
              </div>
            )}
          </div>
        </div>
      </section>

      <IndustryBlockRenderer blocks={blocks} />

      {relatedLinks && relatedLinks.length > 0 && (
        <section style={{ width:"100%", background:T.bg, borderTop:`1px solid ${T.borderLight}` }}>
          <div style={{ maxWidth:1440, margin:"0 auto", padding:`32px ${hPad}px`, display:"flex", flexWrap:"wrap", alignItems:"center", gap:20 }}>
            <span style={{ fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:13, color:T.muted }}>Related:</span>
            {relatedLinks.map(link => (
              <a key={link.href} href={link.href} style={{ fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:T.primary, textDecoration:"none" }}>
                {link.label} →
              </a>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
