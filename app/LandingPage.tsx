"use client";

import React from "react";
import { useBreakpoint } from "./use-breakpoint";
import Navbar, { T } from "./Navbar";
import BackboneSection from "./BackboneSection";
import ComplianceSection from "./ComplianceSection";
import TestimonialsSection from "./TestimonialsSection";
import CTASection from "./CTASection";
import Footer from "./Footer";

/* ─── SCROLL REVEAL HOOK ─── */
function useScrollReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── HERO ─── */
const CYCLE_WORDS  = ["Speed", "Security", "Reliability"];
const CYCLE_COLORS = [T.primary, T.primary, T.orange];

function Hero() {
  const { isMobile, isTablet } = useBreakpoint();
  const [wordIdx, setWordIdx] = React.useState(0);
  const [animKey, setAnimKey] = React.useState(0);
  const textRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const id = setInterval(() => {
      setWordIdx(i => (i + 1) % CYCLE_WORDS.length);
      setAnimKey(k => k + 1);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  const onParallax = (e: React.MouseEvent<HTMLElement>) => {
    if (isMobile || !textRef.current) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width  / 2) / width;
    const y = (e.clientY - top  - height / 2) / height;
    textRef.current.style.transform = `translate(${x * 14}px,${y * 8}px)`;
  };

  const onParallaxLeave = () => {
    if (!textRef.current) return;
    textRef.current.style.transition = "transform 0.7s cubic-bezier(0.16,1,0.3,1)";
    textRef.current.style.transform  = "";
    setTimeout(() => { if (textRef.current) textRef.current.style.transition = ""; }, 700);
  };

  const hPad    = isMobile ? 20 : isTablet ? 48 : 80;
  const h1Size  = isMobile ? 44 : isTablet ? 64 : 90;
  const subSize = isMobile ? 16 : isTablet ? 18 : 20;
  const logoH   = isMobile ? 80 : 126;

  return (
    <section
      style={{ position:"relative", width:"100%", height:"100vh", background:T.bg, overflow:"hidden", scrollSnapAlign:"start" }}
      onMouseMove={onParallax}
      onMouseLeave={onParallaxLeave}
    >
      {/* World map */}
      <div className="map-rotate" style={{ position:"absolute", left:"50%", top:"50%", pointerEvents:"none", width: isMobile ? 900 : 1600, zIndex:0 }}>
        <img src="/world-map-dots.png" alt="" aria-hidden style={{ display:"block", width:"100%", opacity:0.18, filter:"invert(1)", mixBlendMode:"multiply" }} />
      </div>

      {/* Text content — left-aligned, vertically centred between nav and logo bar */}
      <div style={{
        position:       "absolute",
        top:            64,          /* clear the sticky navbar */
        left:           0,
        right:          0,
        bottom:         logoH,       /* sit above the logo bar */
        zIndex:         1,
        display:        "flex",
        flexDirection:  "column",
        justifyContent: "center",    /* vertical centre in that usable band */
      }}>
        <div style={{ maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px`, width:"100%", boxSizing:"border-box", display:"flex", justifyContent:"center" }}>
          <div ref={textRef} style={{ width: isMobile ? "100%" : 700, display:"flex", flexDirection:"column", gap: isMobile ? 20 : 40, transition:"transform 0.15s linear", willChange:"transform" }}>

            <span style={{ fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize: isMobile ? 13 : 16, letterSpacing:"0.0094em", color:T.orange }}>
              — PAN-AFRICAN PAYMENT INFRASTRUCTURE
            </span>

            <div style={{ display:"flex", flexDirection:"column", gap: isMobile ? 16 : 24 }}>
              <h1 style={{ maxWidth:"100%", margin:0, fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:h1Size, lineHeight:1.05, letterSpacing:"-0.02em", color:T.headingBlack }}>
                Built for<br />
                <span key={animKey} className="word-in" style={{ color:CYCLE_COLORS[wordIdx] }}>{CYCLE_WORDS[wordIdx]}.</span><br />
                Made for trust.
              </h1>

              <p style={{ maxWidth:"100%", margin:0, fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400, fontSize:subSize, lineHeight:1.5, color:T.muted }}>
                Settle payments across 14+ African markets in seconds — no delays, no workarounds, no babysitting.
              </p>

              <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center", gap:12 }}>
                <button style={{ fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:T.white, background:T.primary, border:"none", borderRadius:4, padding:"11px 24px", cursor:"pointer", transition:"opacity .15s" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >Get Started</button>
                <button style={{ fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14, color:T.muted, background:"transparent", border:`1px solid ${T.muted}`, borderRadius:4, padding:"11px 24px", cursor:"pointer", transition:"background .15s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#E9DDFF")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >Contact Sales</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo bar */}
      <div style={{ position:"absolute", left:0, bottom:0, width:"100%", height:logoH, overflow:"hidden" }}>
        <div className="marquee-track" style={{ display:"flex", width:"200%" }}>
          <img src="/logo-bar.png" alt="Trusted by industry-leading businesses" style={{ width:"50%", height:logoH, objectFit:"cover", flexShrink:0 }} />
          <img src="/logo-bar.png" aria-hidden style={{ width:"50%", height:logoH, objectFit:"cover", flexShrink:0 }} />
        </div>
      </div>

      {!isMobile && (
        <a href="#products" className="scroll-hint" style={{ position:"absolute", bottom: logoH + 22, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:6, textDecoration:"none", color:T.muted, opacity:0.5 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      )}
    </section>
  );
}

/* ─── PRODUCT SECTION ─── */
const PRODUCT_CARDS_TOP = [
  { title: "Payouts",     image: "/card-payouts.png"     },
  { title: "Collections", image: "/card-collections.png" },
];
const PRODUCT_CARDS_BOTTOM = [
  { title: "Instant Settlements",   image: "/card-instant-settlements.png" },
  { title: "Payment API",           image: "/card-payment-api.png"         },
  { title: "Analytics & Reporting", image: "/card-analytics.png"           },
];

function ProductSection() {
  const { isMobile, isTablet } = useBreakpoint();
  const hPad    = isMobile ? 20 : isTablet ? 48 : 80;
  const secPad  = isMobile ? "48px 0 32px" : "100px 0 80px";
  const topCols = isMobile ? "1fr" : "1fr 1fr";
  const botCols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "1fr 1fr 1fr";
  const topH    = isMobile ? undefined : 420;
  const descSz  = isMobile ? 22 : isTablet ? 32 : 42;

  const card: React.CSSProperties = {
    background:   T.bg,
    borderRadius: 16,
    overflow:     "hidden",
  };

  const onTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width  - 0.5;
    const y = (e.clientY - top)  / height - 0.5;
    e.currentTarget.style.transition = "box-shadow 0.1s";
    e.currentTarget.style.transform  = `perspective(900px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) translateY(-4px)`;
    e.currentTarget.style.boxShadow  = `${-x * 24}px ${-y * 16}px 60px rgba(96,9,255,0.15), 0 20px 48px rgba(0,0,0,0.07)`;
  };

  const onTiltLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transition = "transform 0.55s cubic-bezier(0.16,1,0.3,1), box-shadow 0.55s cubic-bezier(0.16,1,0.3,1)";
    e.currentTarget.style.transform  = "";
    e.currentTarget.style.boxShadow  = "";
  };

  return (
    <section id="products" style={{ width:"100%", background:T.white, padding:secPad, scrollSnapAlign:"start", scrollMarginTop:94 }}>
      <div style={{ maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px` }}>

        <span style={{ fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, letterSpacing:"0.0094em", color:T.orange, display:"block", marginBottom:20 }}>
          — Products
        </span>

        <p className="fade-up" style={{ margin:`0 0 ${isMobile ? 40 : 64}px`, fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400, fontSize:descSz, lineHeight:1.15, color:T.headingBlack }}>
          Built for operations that can't afford a delay. Every product in the payonus suite is designed to eliminate payment friction at scale.
        </p>

        <div className="fade-up" style={{ display:"grid", gridTemplateColumns:topCols, gap: isMobile ? 16 : 24, marginBottom: isMobile ? 16 : 24 }}>
          {PRODUCT_CARDS_TOP.map(p => (
            <div key={p.title} className="product-card" style={{ ...card, height:topH }} onMouseMove={onTilt} onMouseLeave={onTiltLeave}>
              <img src={p.image} alt={p.title} className="product-card-img"
                style={{ width:"100%", height: topH ? "100%" : undefined, display:"block", objectFit:"cover", objectPosition:"top left" }} />
            </div>
          ))}
        </div>

        <div className="fade-up" style={{ display:"grid", gridTemplateColumns:botCols, gap: isMobile ? 16 : 24 }}>
          {PRODUCT_CARDS_BOTTOM.map(p => (
            <div key={p.title} className="product-card" style={card} onMouseMove={onTilt} onMouseLeave={onTiltLeave}>
              <img src={p.image} alt={p.title} className="product-card-img" style={{ width:"100%", display:"block" }} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ─── ROOT ─── */
export default function PayonUsLandingPage() {
  useScrollReveal();
  const scrollRef  = React.useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled]   = React.useState(false);
  const [scrollPct, setScrollPct] = React.useState(0);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      setScrolled(el.scrollTop > 20);
      const max = el.scrollHeight - el.clientHeight;
      setScrollPct(max > 0 ? el.scrollTop / max : 0);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=Archivo:wght@600&display=swap');
        html, body { margin:0; padding:0; background:${T.bg}; height:100%; overflow:hidden; }
        *, *::before, *::after { box-sizing:border-box; }
        img { display:block; }

        /* Marquee */
        @keyframes marquee { from { transform:translateX(0); } to { transform:translateX(-50%); } }
        .marquee-track { animation: marquee 32s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }

        /* World map rotation */
        @keyframes mapDrift {
          0%   { transform: translate(-50%,-50%) translate(0px,    0px);   }
          25%  { transform: translate(-50%,-50%) translate(18px,  -14px);  }
          50%  { transform: translate(-50%,-50%) translate(8px,    16px);  }
          75%  { transform: translate(-50%,-50%) translate(-16px,  6px);   }
          100% { transform: translate(-50%,-50%) translate(0px,    0px);   }
        }
        .map-rotate { animation: mapDrift 24s ease-in-out infinite; will-change: transform; }

        /* Hero word swap */
        @keyframes wordFadeIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
        .word-in { display:inline-block; animation: wordFadeIn 0.35s ease forwards; }

        /* Scroll reveal */
        .fade-up { opacity:0; transform:translateY(36px); transition: opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1); }
        .fade-up.visible { opacity:1; transform:translateY(0); }
        .fade-up:nth-child(2) { transition-delay: 0.12s; }
        .fade-up:nth-child(3) { transition-delay: 0.22s; }

        /* Product image crossfade */
        @keyframes imgIn { from { opacity:0; transform:scale(0.975); } to { opacity:1; transform:scale(1); } }
        .product-img-in { animation: imgIn 0.4s cubic-bezier(0.16,1,0.3,1) forwards; }

        /* Scroll hint */
        @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0);} 55%{transform:translateX(-50%) translateY(6px);} }
        .scroll-hint { animation: bounce 2s ease-in-out infinite; }

        /* smooth scroll */
        html { scroll-behavior: smooth; }

        /* Product card — 3D tilt handled via JS; img scale stays CSS */
        .product-card { cursor: pointer; }
        .product-card-img { transition: transform 0.4s cubic-bezier(0.16,1,0.3,1); transform-origin: top center; display: block; }
        .product-card:hover .product-card-img { transform: scale(1.03); }

      `}</style>

      {/* ── Scroll progress bar ── */}
      <div style={{ position:"fixed", top:0, left:0, right:0, height:3, zIndex:200, pointerEvents:"none" }}>
        <div style={{ height:"100%", width:`${scrollPct * 100}%`, background:"linear-gradient(90deg,#6009FF 0%,#F4B249 100%)", transition:"width 0.1s linear", borderRadius:"0 2px 2px 0", boxShadow:"0 0 8px rgba(96,9,255,0.4)" }} />
      </div>

      <div ref={scrollRef} style={{ height:"100vh", overflowY:"scroll", scrollSnapType:"y mandatory", background:T.bg }}>
        <Navbar scrolled={scrolled} />
        <Hero />
        <ProductSection />
        <BackboneSection />
        <ComplianceSection />
        <TestimonialsSection />
        <div style={{ scrollSnapAlign: "start", height: "100vh", display: "flex", flexDirection: "column" }}>
          <CTASection />
          <Footer />
        </div>
      </div>
    </>
  );
}
