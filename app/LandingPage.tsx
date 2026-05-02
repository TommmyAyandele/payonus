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
  const h1Size  = isMobile ? 62 : isTablet ? 64 : 90;
  const subSize = isMobile ? 16 : isTablet ? 18 : 20;
  const logoH   = isMobile ? 96 : 126;

  return (
    <section
      style={{ position:"relative", width:"100%", height:"100vh", background:T.bg, overflow:"hidden" }}
      onMouseMove={onParallax}
      onMouseLeave={onParallaxLeave}
    >
      {/* World map */}
      <div className="map-rotate" style={{ position:"absolute", left:"50%", top:"50%", pointerEvents:"none", width: isMobile ? 900 : 1600, zIndex:0 }}>
        <img src="/world-map-dots.png" alt="" aria-hidden style={{ display:"block", width:"100%", opacity:0.14, filter:"invert(1)" }} />
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
        <div className="marquee-track" style={{ display:"flex", width:"200%", height:"100%" }}>
          <img src="/logo-bar.png" alt="Trusted by industry-leading businesses" style={{ display:"block", width:"50%", height:"100%", objectFit:"cover", flexShrink:0 }} />
          <img src="/logo-bar.png" aria-hidden style={{ display:"block", width:"50%", height:"100%", objectFit:"cover", flexShrink:0 }} />
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

/* ─── PRODUCT WIREFRAMES ─── */
const sk: React.CSSProperties = {
  background: "linear-gradient(90deg,#E8E8E8 25%,#F2F2F2 50%,#E8E8E8 75%)",
  backgroundSize: "600px 100%",
  animation: "skShimmer 1.6s ease-in-out infinite",
  borderRadius: 3,
};

function Chrome({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width:"100%", height:"100%", background:"#FFF", display:"flex", flexDirection:"column", userSelect:"none", pointerEvents:"none" }}>
      <div style={{ background:"#EBEBEB", display:"flex", alignItems:"center", padding:"6px 10px", gap:6, borderBottom:"1px solid #DEDEDE", flexShrink:0 }}>
        <div style={{ display:"flex", gap:4 }}>
          {["#FF5F57","#FEBC2E","#28C840"].map(c => <div key={c} style={{ width:8,height:8,borderRadius:"50%",background:c }} />)}
        </div>
        <div style={{ flex:1,background:"#DCDCDC",borderRadius:3,height:13,display:"flex",alignItems:"center",padding:"0 7px" }}>
          <div style={{ width:"35%",height:5,...sk }} />
        </div>
      </div>
      {children}
    </div>
  );
}

/* Payouts — recipient list + send action */
function PayoutsWireframe() {
  const statuses = ["#22C55E","#F4B249","#22C55E","#94A3B8","#22C55E"];
  return (
    <Chrome>
      <div style={{ flex:1, display:"flex", minHeight:0 }}>
        <div style={{ width:"22%", flexShrink:0, background:"#FAFAFA", borderRight:"1px solid #F0F0F0", padding:"10px 8px", display:"flex", flexDirection:"column", gap:7 }}>
          <div style={{ background:"#6009FF", borderRadius:4, padding:"5px 7px", display:"flex", alignItems:"center", gap:5, marginBottom:2 }}>
            <div style={{ width:8,height:8,background:"rgba(255,255,255,0.5)",borderRadius:2,flexShrink:0 }} />
            <div style={{ flex:1,height:5,background:"rgba(255,255,255,0.3)",borderRadius:2 }} />
          </div>
          {[0,1,2,3,4].map(i => (
            <div key={i} style={{ display:"flex",alignItems:"center",gap:6 }}>
              <div style={{ width:10,height:10,borderRadius:2,flexShrink:0,...sk }} />
              <div style={{ flex:1,height:5,...sk,animationDelay:`${i*0.07}s` }} />
            </div>
          ))}
        </div>
        <div style={{ flex:1, padding:"12px", display:"flex", flexDirection:"column", gap:9, minWidth:0 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <div style={{ width:90,height:7,borderRadius:3,...sk }} />
            <div style={{ width:70,height:22,borderRadius:4,background:"#6009FF",opacity:0.15 }} />
          </div>
          <div style={{ width:"100%",height:22,borderRadius:4,background:"#F5F5F5",display:"flex",alignItems:"center",padding:"0 8px",gap:6 }}>
            <div style={{ width:12,height:12,borderRadius:2,...sk }} />
            <div style={{ width:"50%",height:5,...sk }} />
          </div>
          {statuses.map((color, i) => (
            <div key={i} style={{ display:"flex", alignItems:"center", gap:8, padding:"7px 0", borderBottom:"1px solid #F0F0F0" }}>
              <div style={{ width:28,height:28,borderRadius:"50%",flexShrink:0,...sk }} />
              <div style={{ flex:1, display:"flex", flexDirection:"column", gap:4 }}>
                <div style={{ width:`${55+i*8}%`,height:6,borderRadius:3,...sk }} />
                <div style={{ width:"40%",height:5,borderRadius:3,...sk,animationDelay:"0.1s" }} />
              </div>
              <div style={{ display:"flex",alignItems:"center",gap:6 }}>
                <div style={{ width:48,height:6,borderRadius:3,...sk }} />
                <div style={{ width:8,height:8,borderRadius:"50%",background:color,flexShrink:0 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Chrome>
  );
}

/* Collections — checkout / payment form */
function CollectionsWireframe() {
  return (
    <Chrome>
      <div style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", background:"#F8F7FF", padding:"14px" }}>
        <div style={{ width:"100%", maxWidth:340, background:"#FFF", borderRadius:10, border:"1px solid #E7E0EC", padding:"16px", display:"flex", flexDirection:"column", gap:12 }}>
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
            <div style={{ display:"flex",alignItems:"center",gap:1 }}>
              <span style={{ fontFamily:"DM Sans,sans-serif",fontWeight:700,fontSize:10,color:"#6009FF",lineHeight:1 }}>pay</span>
              <div style={{ width:10,height:10,borderRadius:"50%",background:"#F4B249",display:"flex",alignItems:"center",justifyContent:"center" }}>
                <span style={{ fontSize:6,fontWeight:700,color:"#fff",lineHeight:1 }}>O</span>
              </div>
              <span style={{ fontFamily:"DM Sans,sans-serif",fontWeight:700,fontSize:10,color:"#6009FF",lineHeight:1 }}>.us</span>
            </div>
            <div style={{ width:40,height:5,borderRadius:3,...sk }} />
          </div>
          <div style={{ textAlign:"center", padding:"6px 0" }}>
            <div style={{ width:60,height:5,borderRadius:3,...sk,margin:"0 auto 6px" }} />
            <div style={{ width:90,height:9,borderRadius:3,...sk,margin:"0 auto" }} />
          </div>
          <div style={{ display:"flex",gap:6 }}>
            {["#6009FF","#1A1A2E","#E5E7EB"].map((bg,i) => (
              <div key={i} style={{ flex:1,height:24,borderRadius:4,background:bg,opacity:i===2?1:0.18 }} />
            ))}
          </div>
          {[1,0.8,0.8].map((w,i) => (
            <div key={i} style={{ width:`${w*100}%`,height:i===0?32:24,borderRadius:4,background:"#F4F4F5",border:"1px solid #E7E0EC",display:"flex",alignItems:"center",padding:"0 8px" }}>
              <div style={{ width:`${40+i*10}%`,height:5,borderRadius:3,...sk }} />
            </div>
          ))}
          <div style={{ width:"100%",height:32,borderRadius:4,background:"#6009FF",display:"flex",alignItems:"center",justifyContent:"center",gap:6 }}>
            <div style={{ width:50,height:6,borderRadius:3,background:"rgba(255,255,255,0.35)" }} />
          </div>
        </div>
      </div>
    </Chrome>
  );
}

/* Settlements — balance card + settlement bars */
function SettlementsWireframe() {
  const bars = [65,82,48,90,74,55,88];
  return (
    <Chrome>
      <div style={{ flex:1, padding:"12px", display:"flex", flexDirection:"column", gap:10, minWidth:0 }}>
        <div style={{ background:"linear-gradient(135deg,#6009FF 0%,#8B3FFF 100%)", borderRadius:10, padding:"14px", display:"flex", flexDirection:"column", gap:8 }}>
          <div style={{ width:70,height:5,borderRadius:3,background:"rgba(255,255,255,0.4)" }} />
          <div style={{ width:120,height:11,borderRadius:4,background:"rgba(255,255,255,0.6)" }} />
          <div style={{ display:"flex",gap:8,marginTop:4 }}>
            <div style={{ flex:1,background:"rgba(255,255,255,0.15)",borderRadius:6,padding:"7px 8px" }}>
              <div style={{ width:"60%",height:4,borderRadius:2,background:"rgba(255,255,255,0.35)",marginBottom:5 }} />
              <div style={{ width:"80%",height:7,borderRadius:3,background:"rgba(255,255,255,0.5)" }} />
            </div>
            <div style={{ flex:1,background:"rgba(255,255,255,0.15)",borderRadius:6,padding:"7px 8px" }}>
              <div style={{ width:"50%",height:4,borderRadius:2,background:"rgba(255,255,255,0.35)",marginBottom:5 }} />
              <div style={{ width:"70%",height:7,borderRadius:3,background:"rgba(255,255,255,0.5)" }} />
            </div>
          </div>
        </div>
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-end",padding:"8px 4px 0",flex:1 }}>
          {bars.map((h,i) => (
            <div key={i} style={{ flex:1,marginRight:i<bars.length-1?4:0,display:"flex",flexDirection:"column",justifyContent:"flex-end" }}>
              <div style={{ height:`${h}%`,minHeight:6,borderRadius:"3px 3px 0 0",background:i===4?"#6009FF":"#E2D9F3",transition:"height 0.3s" }} />
            </div>
          ))}
        </div>
        <div style={{ display:"flex",justifyContent:"space-between" }}>
          {bars.map((_,i) => <div key={i} style={{ flex:1,height:4,borderRadius:2,...sk,animationDelay:`${i*0.06}s` }} />)}
        </div>
      </div>
    </Chrome>
  );
}

/* Payment API — terminal / code view */
function PaymentApiWireframe() {
  const lines = [
    { w:"55%", c:"#C792EA" }, { w:"80%", c:"#82AAFF" }, { w:"65%", c:"#C3E88D" },
    { w:"72%", c:"#82AAFF" }, { w:"48%", c:"#F78C6C" }, { w:"70%", c:"#C3E88D" },
    { w:"60%", c:"#C792EA" }, { w:"44%", c:"#546E7A" }, { w:"77%", c:"#82AAFF" },
  ];
  return (
    <Chrome>
      <div style={{ flex:1, background:"#1E1E2E", padding:"12px", display:"flex", flexDirection:"column", gap:0, fontFamily:"monospace", minHeight:0, overflow:"hidden" }}>
        <div style={{ display:"flex",gap:12,marginBottom:10,borderBottom:"1px solid rgba(255,255,255,0.08)",paddingBottom:8 }}>
          {["index.js","README.md"].map((tab,i) => (
            <div key={tab} style={{ fontSize:9,color:i===0?"#CDD6F4":"#6C7086",padding:"3px 8px",borderRadius:"4px 4px 0 0",background:i===0?"rgba(255,255,255,0.08)":"transparent" }}>
              {tab}
            </div>
          ))}
        </div>
        <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:10,background:"rgba(255,255,255,0.05)",borderRadius:4,padding:"6px 10px" }}>
          <div style={{ width:8,height:8,borderRadius:"50%",background:"#22C55E",flexShrink:0 }} />
          <div style={{ width:"55%",height:5,borderRadius:2,background:"rgba(130,170,255,0.5)" }} />
        </div>
        {lines.map((l,i) => (
          <div key={i} style={{ display:"flex",alignItems:"center",gap:8,marginBottom:6 }}>
            <div style={{ width:12,height:4,borderRadius:2,background:"rgba(108,112,134,0.4)",flexShrink:0 }} />
            <div style={{ width:l.w,height:5,borderRadius:2,background:l.c,opacity:0.55 }} />
          </div>
        ))}
      </div>
    </Chrome>
  );
}

/* Analytics — stats + bar chart */
function AnalyticsWireframe() {
  const bars = [40,65,52,80,68,90,72,58,84,62,76,88];
  return (
    <Chrome>
      <div style={{ flex:1, padding:"12px", display:"flex", flexDirection:"column", gap:10, minWidth:0 }}>
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8 }}>
          {[["#6009FF","rgba(96,9,255,0.12)"],["#22C55E","rgba(34,197,94,0.12)"],["#F4B249","rgba(244,178,73,0.12)"]].map(([accent,bg],i) => (
            <div key={i} style={{ background:bg,borderRadius:8,padding:"8px" }}>
              <div style={{ width:"55%",height:4,borderRadius:2,...sk,marginBottom:6 }} />
              <div style={{ width:"75%",height:9,borderRadius:3,background:accent,opacity:0.4 }} />
            </div>
          ))}
        </div>
        <div style={{ flex:1,display:"flex",flexDirection:"column",gap:6 }}>
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
            <div style={{ width:70,height:5,borderRadius:3,...sk }} />
            <div style={{ width:50,height:16,borderRadius:3,...sk }} />
          </div>
          <div style={{ flex:1,display:"flex",alignItems:"flex-end",gap:3,padding:"4px 0" }}>
            {bars.map((h,i) => (
              <div key={i} style={{ flex:1,display:"flex",flexDirection:"column",justifyContent:"flex-end" }}>
                <div style={{ height:`${h}%`,minHeight:4,borderRadius:"2px 2px 0 0",background:i===9?"#6009FF":i%3===0?"#DDD6FE":"#EDE9FF" }} />
              </div>
            ))}
          </div>
          <div style={{ height:1,background:"#F0F0F0" }} />
          <div style={{ display:"flex",justifyContent:"space-between" }}>
            {[0,1,2,3].map(i => <div key={i} style={{ width:"20%",height:4,borderRadius:2,...sk,animationDelay:`${i*0.08}s` }} />)}
          </div>
        </div>
      </div>
    </Chrome>
  );
}

/* ─── PRODUCT SECTION ─── */
const PRODUCT_CARDS_TOP = [
  { title: "Payouts",     Wireframe: PayoutsWireframe     },
  { title: "Collections", Wireframe: CollectionsWireframe },
];
const PRODUCT_CARDS_BOTTOM = [
  { title: "Instant Settlements",   Wireframe: SettlementsWireframe },
  { title: "Payment API",           Wireframe: PaymentApiWireframe  },
  { title: "Analytics & Reporting", Wireframe: AnalyticsWireframe   },
];

function ProductSection() {
  const { isMobile, isTablet } = useBreakpoint();
  const hPad    = isMobile ? 20 : isTablet ? 48 : 80;
  const secPad  = isMobile ? "48px 0 32px" : "100px 0 80px";
  const topCols = isMobile ? "1fr" : "1fr 1fr";
  const botCols = isMobile ? "1fr" : "1fr 1fr 1fr";
  const cardH   = isMobile ? 260 : undefined;
  const topH    = isMobile ? cardH : 420;
  const descSz  = isMobile ? 22 : 42;

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
    <section id="products" style={{ width:"100%", background:T.white, padding:secPad }}>
      <div style={{ maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px` }}>

        <span style={{ fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, letterSpacing:"0.0094em", color:T.orange, display:"block", marginBottom:20 }}>
          — Products
        </span>

        <p className="fade-up" style={{ margin:`0 0 ${isMobile ? 40 : 64}px`, fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400, fontSize:descSz, lineHeight:1.15, color:T.headingBlack }}>
          Built for operations that can't afford a delay. Every product in the payonus suite is designed to eliminate payment friction at scale.
        </p>

        <div className="fade-up" style={{ display:"grid", gridTemplateColumns:topCols, gap: isMobile ? 12 : 24, marginBottom: isMobile ? 12 : 24 }}>
          {PRODUCT_CARDS_TOP.map(p => (
            <div key={p.title} className="product-card" style={card} onMouseMove={onTilt} onMouseLeave={onTiltLeave}>
              <div style={{ padding: isMobile ? "10px 14px" : "14px 20px" }}>
                <span style={{ fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:14, color:T.dark }}>{p.title}</span>
              </div>
              <div style={{ width:"100%", height: topH, overflow:"hidden" }}>
                <p.Wireframe />
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up" style={{ display:"grid", gridTemplateColumns:botCols, gap: isMobile ? 12 : 24 }}>
          {PRODUCT_CARDS_BOTTOM.map(p => (
            <div key={p.title} className="product-card" style={card} onMouseMove={onTilt} onMouseLeave={onTiltLeave}>
              <div style={{ padding: isMobile ? "10px 14px" : "14px 20px" }}>
                <span style={{ fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:14, color:T.dark }}>{p.title}</span>
              </div>
              <div style={{ width:"100%", height: isMobile ? 200 : 280, overflow:"hidden" }}>
                <p.Wireframe />
              </div>
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
  const [scrolled, setScrolled]   = React.useState(false);
  const [scrollPct, setScrollPct] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(max > 0 ? window.scrollY / max : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=Archivo:wght@600&display=swap');
        html, body { margin:0; padding:0; background:${T.bg}; }
        *, *::before, *::after { box-sizing:border-box; }
        img { display:block; }

        /* Marquee */
        @keyframes marquee { from { transform:translateX(0); } to { transform:translateX(-50%); } }
        .marquee-track { animation: marquee 32s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }

        /* World map drift */
        @keyframes mapDrift {
          0%   { transform: translate(-50%,-50%) translate(0px,   0px);  }
          25%  { transform: translate(-50%,-50%) translate(18px, -14px); }
          50%  { transform: translate(-50%,-50%) translate(8px,   16px); }
          75%  { transform: translate(-50%,-50%) translate(-16px, 6px);  }
          100% { transform: translate(-50%,-50%) translate(0px,   0px);  }
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

        /* Scroll hint bounce */
        @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0);} 55%{transform:translateX(-50%) translateY(6px);} }
        .scroll-hint { animation: bounce 2s ease-in-out infinite; }

        /* Card shimmer */
        @keyframes skShimmer { from{background-position:-600px 0;} to{background-position:600px 0;} }

        html { scroll-behavior: smooth; }

        .product-card { cursor: pointer; }
        .product-card-img { transition: transform 0.4s cubic-bezier(0.16,1,0.3,1); transform-origin: top center; display: block; }
        .product-card:hover .product-card-img { transform: scale(1.03); }
      `}</style>

      {/* ── Scroll progress bar ── */}
      <div style={{ position:"fixed", top:0, left:0, right:0, height:3, zIndex:200, pointerEvents:"none" }}>
        <div style={{ height:"100%", width:`${scrollPct * 100}%`, background:"linear-gradient(90deg,#6009FF 0%,#F4B249 100%)", transition:"width 0.1s linear", borderRadius:"0 2px 2px 0", boxShadow:"0 0 8px rgba(96,9,255,0.4)" }} />
      </div>

      <Navbar scrolled={scrolled} />
      <Hero />
      <ProductSection />
      <BackboneSection />
      <ComplianceSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
}
