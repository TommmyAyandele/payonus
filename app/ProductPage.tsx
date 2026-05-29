"use client";

import React from "react";
import { useBreakpoint } from "./use-breakpoint";
import Navbar, { T } from "./Navbar";
import Footer from "./Footer";
import { PILLS, PillIcon } from "./ComplianceSection";

/* ─── SCROLL REVEAL ─── */
export function useScrollReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      }),
      { threshold: 0.06 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── RIPPLE ─── */
export function ripple(e: React.MouseEvent<HTMLButtonElement>) {
  const btn = e.currentTarget;
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 2;
  const span = document.createElement("span");
  Object.assign(span.style, {
    position: "absolute", width: `${size}px`, height: `${size}px`,
    left: `${e.clientX - rect.left - size / 2}px`,
    top:  `${e.clientY - rect.top  - size / 2}px`,
  });
  span.className = "ripple-effect";
  btn.appendChild(span);
  setTimeout(() => span.remove(), 600);
}

/* ─── BROWSER WIREFRAME ─── */
function BrowserWireframe() {
  const sk: React.CSSProperties = {
    background: "linear-gradient(90deg, #E8E8E8 25%, #F2F2F2 50%, #E8E8E8 75%)",
    backgroundSize: "600px 100%",
    animation: "skShimmer 1.6s ease-in-out infinite",
  };
  return (
    <div style={{ borderRadius:10, overflow:"hidden", border:"1px solid #DCDCDC", boxShadow:"0 4px 28px rgba(0,0,0,0.07)", background:"#FFF", userSelect:"none", pointerEvents:"none" }}>
      <div style={{ background:"#EBEBEB", display:"flex", alignItems:"center", padding:"8px 12px", gap:8, borderBottom:"1px solid #DEDEDE" }}>
        <div style={{ display:"flex", gap:5, flexShrink:0 }}>
          <div style={{ width:11,height:11,borderRadius:"50%",background:"#FF5F57" }} />
          <div style={{ width:11,height:11,borderRadius:"50%",background:"#FEBC2E" }} />
          <div style={{ width:11,height:11,borderRadius:"50%",background:"#28C840" }} />
        </div>
        <div style={{ display:"flex",alignItems:"center",gap:8,background:"#F7F7F7",borderRadius:"5px 5px 0 0",padding:"5px 10px",minWidth:160 }}>
          <div style={{ width:70,height:7,borderRadius:3,...sk }} />
          <div style={{ marginLeft:"auto",width:10,height:10,borderRadius:2,flexShrink:0,...sk }} />
        </div>
        <div style={{ color:"#AAAAAA",fontSize:16,lineHeight:1,paddingBottom:1 }}>+</div>
      </div>
      <div style={{ background:"#F5F5F5", display:"flex", alignItems:"center", padding:"6px 12px", gap:7, borderBottom:"1px solid #EBEBEB" }}>
        {["←","→","↺","⌂"].map((ic,i) => <span key={i} style={{ fontSize:11,color:"#AAAAAA",lineHeight:1,flexShrink:0 }}>{ic}</span>)}
        <div style={{ width:14,height:14,borderRadius:3,flexShrink:0,...sk }} />
        <div style={{ flex:1,background:"#EBEBEB",borderRadius:4,height:22,display:"flex",alignItems:"center",padding:"0 8px",margin:"0 4px" }}>
          <div style={{ width:"40%",height:6,borderRadius:3,...sk }} />
        </div>
        <span style={{ fontSize:11,color:"#AAAAAA" }}>☆</span>
        <div style={{ width:22,height:22,borderRadius:"50%",...sk }} />
        <span style={{ fontSize:11,color:"#AAAAAA" }}>⋮</span>
      </div>
      <div style={{ display:"flex", flexDirection:"column" }}>
        <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",borderBottom:"1px solid #F0F0F0",background:"#FFF" }}>
          <div style={{ display:"flex",alignItems:"center",gap:14 }}>
            <div style={{ display:"flex",alignItems:"center",gap:1 }}>
              <span style={{ fontFamily:"DM Sans,sans-serif",fontWeight:700,fontSize:12,color:"#6009FF",lineHeight:1 }}>pay</span>
              <div style={{ width:13,height:13,borderRadius:"50%",background:"#F4B249",display:"flex",alignItems:"center",justifyContent:"center" }}>
                <span style={{ fontSize:7,fontWeight:700,color:"#fff",lineHeight:1 }}>O</span>
              </div>
              <span style={{ fontFamily:"DM Sans,sans-serif",fontWeight:700,fontSize:12,color:"#6009FF",lineHeight:1 }}>.us</span>
            </div>
          </div>
          <div style={{ display:"flex",alignItems:"center",gap:7 }}>
            <div style={{ position:"relative" }}>
              <div style={{ width:22,height:22,borderRadius:"50%",...sk }} />
              <div style={{ position:"absolute",bottom:-1,right:-1,width:7,height:7,borderRadius:"50%",background:"#22C55E",border:"1.5px solid #fff" }} />
            </div>
            <div style={{ width:55,height:6,borderRadius:3,...sk }} />
          </div>
        </div>
        <div style={{ display:"flex", minHeight:480 }}>
          <div style={{ width:175,flexShrink:0,background:"#FAFAFA",borderRight:"1px solid #F0F0F0",padding:"12px 10px",display:"flex",flexDirection:"column",gap:9 }}>
            <div style={{ background:"#F4B249",borderRadius:6,padding:"7px 9px",display:"flex",alignItems:"center",gap:6,marginBottom:4 }}>
              <div style={{ width:11,height:11,background:"rgba(255,255,255,0.65)",borderRadius:2,flexShrink:0 }} />
              <div style={{ flex:1,height:6,background:"rgba(255,255,255,0.4)",borderRadius:3 }} />
            </div>
            <div style={{ width:"65%",height:6,borderRadius:3,...sk }} />
            {[0,1,2,3,4,5].map(i => (
              <div key={i} style={{ display:"flex",alignItems:"center",gap:8 }}>
                <div style={{ width:13,height:13,borderRadius:3,flexShrink:0,...sk,animationDelay:`${i*0.08}s` }} />
                <div style={{ flex:1,height:6,borderRadius:3,...sk,animationDelay:`${i*0.08+0.04}s` }} />
              </div>
            ))}
          </div>
          <div style={{ flex:1,padding:"14px",display:"flex",flexDirection:"column",gap:14 }}>
            <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between" }}>
              <div style={{ display:"flex",alignItems:"center",gap:10 }}>
                <div style={{ width:26,height:26,borderRadius:"50%",flexShrink:0,...sk }} />
                <div style={{ display:"flex",flexDirection:"column",gap:5 }}>
                  <div style={{ width:110,height:7,borderRadius:3,...sk }} />
                  <div style={{ width:75,height:6,borderRadius:3,...sk,animationDelay:"0.1s" }} />
                </div>
              </div>
              <div style={{ display:"flex",gap:8 }}>
                <div style={{ width:85,height:24,borderRadius:4,...sk }} />
                <div style={{ width:105,height:24,borderRadius:4,...sk,animationDelay:"0.12s" }} />
              </div>
            </div>
            {[0,1].map(row => (
              <div key={row} style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10 }}>
                {[0,1,2].map(col => (
                  <div key={col} style={{ borderRadius:8,overflow:"hidden",background:"#F5F5F5" }}>
                    <div style={{ height:90,...sk,animationDelay:`${(row*3+col)*0.06}s` }} />
                    <div style={{ padding:"8px 10px",display:"flex",flexDirection:"column",gap:6,background:"#FFF" }}>
                      <div style={{ width:"68%",height:6,borderRadius:3,...sk }} />
                      <div style={{ width:"48%",height:5,borderRadius:3,...sk }} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BrowserWireframeResponsive() {
  const outerRef = React.useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = React.useState(1);
  const NATURAL_W = 1100;
  React.useEffect(() => {
    const update = () => {
      if (!outerRef.current) return;
      setZoom(Math.min(1, outerRef.current.offsetWidth / NATURAL_W));
    };
    update();
    const ro = new ResizeObserver(update);
    if (outerRef.current) ro.observe(outerRef.current);
    return () => ro.disconnect();
  }, []);
  return (
    <div ref={outerRef} style={{ width:"100%", overflow:"hidden" }}>
      <div style={{ zoom, width: NATURAL_W }}><BrowserWireframe /></div>
    </div>
  );
}

/* ─── SHARED DATA ─── */
const FLAGS = [
  { code:"ng", name:"Nigeria" }, { code:"za", name:"South Africa" },
  { code:"ci", name:"Ivory Coast" }, { code:"zm", name:"Zambia" },
  { code:"cm", name:"Cameroon" }, { code:"ke", name:"Kenya" },
  { code:"gh", name:"Ghana" }, { code:"is", name:"Iceland" },
  { code:"us", name:"USA" }, { code:"eu", name:"EUR" },
  { code:"rw", name:"Rwanda" }, { code:"cd", name:"Congo DR" },
];
const FLAG_ROWS = [FLAGS.slice(0,4), FLAGS.slice(4,8), FLAGS.slice(8,12)];


function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width:48,height:48,borderRadius:10,background:"#EDE9FF",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:20 }}>
      {children}
    </div>
  );
}

function LinkArrow({ label }: { label: string }) {
  return (
    <a href="/get-started" style={{ display:"inline-flex",alignItems:"center",gap:4,fontFamily:"DM Sans, sans-serif",fontWeight:600,fontSize:14,color:T.primary,textDecoration:"none" }}>
      {label}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M9 18l6-6-6-6" stroke={T.primary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
}

/* ─── TYPES ─── */
export interface ProductFeature {
  title: string;
  desc:  string;
  icon:  React.ReactNode;
}

export interface ProductPageProps {
  label:           string;
  heading:         React.ReactNode;
  subtext:         string;
  features:        ProductFeature[];
  featuresHeading: React.ReactNode;
  marketsHeading:  React.ReactNode;
  marketsSubtext:  string;
  ctaHeading:      React.ReactNode;
  ctaSubtext:      string;
}

/* ═══════════════════════════════════════
   SHARED PRODUCT PAGE COMPONENT
═══════════════════════════════════════ */
export default function ProductPage({
  label, heading, subtext, features,
  featuresHeading, marketsHeading, marketsSubtext,
  ctaHeading, ctaSubtext,
}: ProductPageProps) {
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
        @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');
        html,body{margin:0;padding:0;background:#FAFAF8;}
        *,*::before,*::after{box-sizing:border-box;}
        img{display:block;}
        .fade-up{opacity:0;transform:translateY(40px);transition:opacity 0.75s cubic-bezier(0.16,1,0.3,1),transform 0.75s cubic-bezier(0.16,1,0.3,1);}
        .fade-up.visible{opacity:1;transform:translateY(0);}
        @keyframes complianceMarquee{from{transform:translateX(0);}to{transform:translateX(-25%);}}
        .compliance-marquee-track{display:flex;flex-wrap:nowrap;width:max-content;animation:complianceMarquee 22s linear infinite;}
        .compliance-marquee-track:hover{animation-play-state:paused;}
        @keyframes ctaPulse{0%,100%{box-shadow:0 0 0 0 rgba(96,9,255,0.40);}60%{box-shadow:0 0 0 14px rgba(96,9,255,0);}}
        .cta-pulse{animation:ctaPulse 2.8s ease-in-out infinite;}
        @keyframes rippleOut{from{transform:scale(0);opacity:0.55;}to{transform:scale(1);opacity:0;}}
        .ripple-effect{position:absolute;border-radius:50%;background:rgba(255,255,255,0.38);animation:rippleOut 0.55s ease-out forwards;pointer-events:none;}
        .feat-card{border:1px solid #E7E0EC;transition:transform 0.3s cubic-bezier(0.16,1,0.3,1),box-shadow 0.3s cubic-bezier(0.16,1,0.3,1);}
        .feat-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(96,9,255,0.10);border-color:#C4B5FD;}
        .flag-circle{transition:transform 0.2s cubic-bezier(0.16,1,0.3,1),box-shadow 0.2s cubic-bezier(0.16,1,0.3,1);}
        .flag-circle:hover{transform:translateY(-4px);box-shadow:0 12px 28px rgba(96,9,255,0.15);}
        .footer-link{position:relative;display:inline-block;}
        .footer-link::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:1px;background:#6009FF;transition:width 0.3s cubic-bezier(0.16,1,0.3,1);}
        .footer-link:hover::after{width:100%;}
        @keyframes skShimmer{from{background-position:-600px 0;}to{background-position:600px 0;}}
        @keyframes mapScrollY{from{transform:translateX(-50%) translateY(0);}to{transform:translateX(-50%) translateY(-50%);}}
        @keyframes flagScrollY{from{transform:translateY(0);}to{transform:translateY(-50%);}}
        .flag-scroll-track{animation:flagScrollY 18s linear infinite;}
        .flag-scroll-track:hover{animation-play-state:paused;}
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

        <div style={{ position:"relative", zIndex:1, maxWidth:1440, margin:"0 auto", padding:isMobile?`80px 20px 60px`:`0 ${hPad}px`, minHeight:isMobile?"auto":"100vh", display:isMobile?"block":"flex", alignItems:"center", justifyContent:"center" }}>
          <div style={{ maxWidth:isMobile?"100%":760, display:"flex", flexDirection:"column", gap:isMobile?28:24, alignItems:"flex-start" }}>
            <span style={{ fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:isMobile?12:14, letterSpacing:"0.08em", textTransform:"uppercase", color:T.orange }}>
              {label}
            </span>
            <h1 style={{ margin:0, fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?58:isTablet?60:86, lineHeight:1.05, letterSpacing:"-0.02em", color:T.headingBlack }}>
              {heading}
            </h1>
            <p style={{ margin:0, fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400, fontSize:isMobile?15:17, lineHeight:1.65, color:T.muted, maxWidth:480 }}>
              {subtext}
            </p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:12 }}>
              <button style={{ fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:T.white, background:T.primary, border:"none", borderRadius:4, padding:"13px 28px", cursor:"pointer", transition:"opacity .15s" }}
                onMouseEnter={e=>(e.currentTarget.style.opacity="0.88")} onMouseLeave={e=>(e.currentTarget.style.opacity="1")}
                onClick={() => { window.location.href="/get-started"; }}>
                Get Started
              </button>
              <button style={{ fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14, color:T.muted, background:"transparent", border:`1px solid ${T.muted}`, borderRadius:4, padding:"11px 24px", cursor:"pointer", transition:"background .15s" }}
                onMouseEnter={e=>(e.currentTarget.style.background="#E9DDFF")} onMouseLeave={e=>(e.currentTarget.style.background="transparent")}
                onClick={() => { window.location.href="/get-started"; }}>
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {!isMobile && (
          <div style={{ position:"relative", zIndex:1, maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px`, marginBottom:-220 }}>
            <div style={{ maxWidth:1140, margin:"0 auto" }}><BrowserWireframeResponsive /></div>
          </div>
        )}
      </section>

      {/* ══ FEATURES ══ */}
      <section style={{ width:"100%", background:T.bg, overflow:"hidden", paddingTop:isMobile?60:220+80, paddingBottom:isMobile?60:80 }}>
        <div style={{ maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px` }}>
          <h2 className="fade-up" style={{ margin:`0 0 ${isMobile?40:56}px`, fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?28:isTablet?38:48, lineHeight:1.1, color:T.headingBlack, maxWidth:600 }}>
            {featuresHeading}
          </h2>
          <div style={{ border:"1px solid #E5E7EB", borderRadius:16, overflow:"hidden", background:T.white }}>
            <div style={{ display:"grid", gridTemplateColumns:isMobile?"1fr":isTablet?"1fr 1fr":"1fr 1fr 1fr" }}>
              {features.map((f, i) => {
                const cols = isMobile?1:isTablet?2:3;
                const isLastCol = (i+1)%cols===0;
                const isLastRow = i>=features.length-cols;
                return (
                  <div key={i} className="fade-up" style={{ padding:isMobile?"32px 24px":"40px", borderRight:!isLastCol?"1px solid #E5E7EB":"none", borderBottom:!isLastRow?"1px solid #E5E7EB":"none", transitionDelay:`${i*0.09}s` }}>
                    <div style={{ width:52,height:52,borderRadius:10,background:"#F3F4F6",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:24 }}>
                      {f.icon}
                    </div>
                    <p style={{ margin:"0 0 12px", fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:isMobile?16:20, lineHeight:1.3, color:T.dark }}>{f.title}</p>
                    <p style={{ margin:0, fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14, lineHeight:1.65, color:T.muted }}>{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══ MARKETS ══ */}
      <section style={{ width:"100%", background:T.bg, padding:`${isMobile?60:80}px 0` }}>
        <div style={{ maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px` }}>
          <div style={{ display:"grid", gridTemplateColumns:isMobile?"1fr":"1fr 1fr", gap:isMobile?48:80, alignItems:"center" }}>
            <div>
              <h2 className="fade-up" style={{ margin:"0 0 20px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?32:isTablet?42:52, lineHeight:1.1 }}>
                {marketsHeading}
              </h2>
              <p style={{ margin:"0 0 32px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400, fontSize:15, lineHeight:1.65, color:T.muted }}>
                {marketsSubtext}
              </p>
              <a href="/pricing" style={{ display:"inline-flex", alignItems:"center", gap:6, fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:T.white, background:T.primary, border:`1px solid ${T.primary}`, borderRadius:4, padding:"10px 20px", textDecoration:"none", transition:"opacity .15s" }}
                onMouseEnter={e=>(e.currentTarget.style.opacity="0.88")} onMouseLeave={e=>(e.currentTarget.style.opacity="1")}>
                See all currencies
              </a>
            </div>
            <div style={{ position:"relative", overflow:"hidden", height:isMobile?280:460, maxWidth:isMobile?"100%":380 }}>
              <div className="flag-scroll-track" style={{ display:"flex", flexDirection:"column", width:"100%", gap:isMobile?8:16, willChange:"transform" }}>
                {[...FLAG_ROWS,...FLAG_ROWS].map((row,ri) => (
                  <div key={ri} style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:isMobile?8:16 }}>
                    {row.map((m,j) => (
                      <div key={j} style={{ aspectRatio:"1", borderRadius:"50%", overflow:"hidden", minWidth:0 }}>
                        <img src={`https://flagcdn.com/w160/${m.code}.png`} alt={m.name} style={{ width:"100%",height:"100%",objectFit:"cover",display:"block" }} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div style={{ position:"absolute",bottom:0,left:0,right:0,height:"32%",background:`linear-gradient(to bottom,transparent,${T.bg})`,pointerEvents:"none" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══ COMPLIANCE ══ */}
      <section style={{ width:"100%", background:T.bg, padding:`${isMobile?60:80}px 0` }}>
        <div style={{ maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px` }}>
          <h2 className="fade-up" style={{ margin:"0 0 16px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?28:isTablet?38:48, lineHeight:1.1, color:T.headingBlack, maxWidth:560 }}>
            Compliance you don't<br />have to build.
          </h2>
          <p style={{ margin:`0 0 ${isMobile?36:48}px`, fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:15, lineHeight:1.65, color:T.muted, maxWidth:520 }}>
            Every transaction moves through an infrastructure your enterprise already requires.
          </p>
          <div style={{ width:"100%", overflow:"hidden" }}>
            <div className="compliance-marquee-track">
              {[...PILLS,...PILLS,...PILLS,...PILLS].map((pill,i) => (
                <div key={i} style={{ display:"inline-flex",alignItems:"center",gap:8,padding:"9px 22px",border:"1.5px solid #D0D5DD",borderRadius:999,background:"transparent",whiteSpace:"nowrap",flexShrink:0,marginRight:12 }}>
                  <PillIcon type={pill.icon} size={isMobile ? 13 : 17} />
                  <span style={{ fontFamily:"DM Sans, sans-serif",fontStyle:"italic",fontWeight:500,fontSize:isMobile ? 11 : 14,color:T.dark }}>{pill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ width:"100%", background:T.bg, padding:`${isMobile?48:80}px 0` }}>
        <div style={{ maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px` }}>
          {isMobile ? (
            <div style={{ maxWidth:560 }}>
              <h2 style={{ margin:"0 0 14px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?28:36, lineHeight:1.1, color:T.headingBlack }}>
                {ctaHeading}
              </h2>
              <p style={{ margin:"0 0 28px", fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:15, lineHeight:1.65, color:T.muted }}>
                {ctaSubtext}
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:12 }}>
                <button className="cta-pulse" style={{ position:"relative",overflow:"hidden",display:"flex",alignItems:"center",gap:8,fontFamily:"DM Sans, sans-serif",fontWeight:500,fontSize:14,color:T.white,background:T.primary,border:"none",borderRadius:6,padding:"12px 20px",cursor:"pointer" }} onClick={e => { ripple(e); window.location.href="/get-started"; }}>
                  Get Started
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button style={{ fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:14,color:T.muted,background:"transparent",border:`1px solid ${T.muted}`,borderRadius:6,padding:"12px 20px",cursor:"pointer",transition:"background .15s" }}
                  onMouseEnter={e=>(e.currentTarget.style.background="#E9DDFF")} onMouseLeave={e=>(e.currentTarget.style.background="transparent")}
                  onClick={() => { window.location.href="/get-started"; }}>
                  Contact Sales
                </button>
              </div>
            </div>
          ) : (
            <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr", gap:48, alignItems:"start" }}>
              <div>
                <h2 style={{ margin:"0 0 16px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:44, lineHeight:1.1, color:T.headingBlack }}>
                  {ctaHeading}
                </h2>
                <p style={{ margin:"0 0 32px", fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:15, lineHeight:1.65, color:T.muted, maxWidth:440 }}>
                  {ctaSubtext}
                </p>
                <div style={{ display:"flex", alignItems:"center", gap:16 }}>
                  <button className="cta-pulse" style={{ position:"relative",overflow:"hidden",display:"flex",alignItems:"center",gap:8,fontFamily:"DM Sans, sans-serif",fontWeight:500,fontSize:14,color:T.white,background:T.primary,border:"none",borderRadius:6,padding:"12px 20px",cursor:"pointer",transition:"transform 0.4s cubic-bezier(0.16,1,0.3,1)" }}
                    onClick={e => { ripple(e); window.location.href="/get-started"; }}
                    onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.transform=`translate(${(e.clientX-r.left-r.width/2)*0.25}px,${(e.clientY-r.top-r.height/2)*0.25}px)`;}}
                    onMouseLeave={e=>{e.currentTarget.style.transform="";}}>
                    Get Started
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <button style={{ fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:14,color:T.muted,background:"transparent",border:`1px solid ${T.muted}`,borderRadius:6,padding:"12px 20px",cursor:"pointer",transition:"background .15s" }}
                    onMouseEnter={e=>(e.currentTarget.style.background="#E9DDFF")} onMouseLeave={e=>(e.currentTarget.style.background="transparent")}
                    onClick={() => { window.location.href="/get-started"; }}>
                    Contact Sales
                  </button>
                </div>
              </div>
              <div>
                <IconBox>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke={T.primary} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="7" cy="7" r="1.2" fill={T.primary}/>
                  </svg>
                </IconBox>
                <p style={{ margin:"0 0 8px",fontFamily:"DM Sans, sans-serif",fontWeight:700,fontSize:16,lineHeight:1.3,color:T.dark }}>See what you'll pay</p>
                <p style={{ margin:"0 0 14px",fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:13.5,lineHeight:1.65,color:"#6B6877" }}>Transparent per-transaction pricing with no hidden fees.</p>
                <LinkArrow label="Pricing details" />
              </div>
              <div>
                <IconBox>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke={T.primary} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </IconBox>
                <p style={{ margin:"0 0 8px",fontFamily:"DM Sans, sans-serif",fontWeight:700,fontSize:16,lineHeight:1.3,color:T.dark }}>Start building</p>
                <p style={{ margin:"0 0 14px",fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:13.5,lineHeight:1.65,color:"#6B6877" }}>Get up and running with Payonus in as little as 30 minutes.</p>
                <LinkArrow label="View docs" />
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
