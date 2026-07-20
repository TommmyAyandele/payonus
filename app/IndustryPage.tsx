"use client";

import React from "react";
import { useBreakpoint } from "./use-breakpoint";
import Navbar, { T } from "./Navbar";
import Footer from "./Footer";
import { PILLS, PillIcon } from "./ComplianceSection";
import { useScrollReveal, ripple, ProductFeature } from "./ProductPage";

/* ─── TYPES ─── */
export type { ProductFeature };

export interface IndustryChallenge {
  title: string;
  desc:  string;
  icon:  React.ReactNode;
}

export interface IndustryPageProps {
  label:             string;
  heading:           React.ReactNode;
  subtext:           string;
  challengeHeading:  React.ReactNode;
  challenges:        IndustryChallenge[];
  featuresHeading:   React.ReactNode;
  features:          ProductFeature[];
  marketsHeading:    React.ReactNode;
  marketsSubtext:    string;
  ctaHeading:        React.ReactNode;
  ctaSubtext:        string;
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
    <a href="https://merchantv2.payonus.com/signup" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex",alignItems:"center",gap:4,fontFamily:"DM Sans, sans-serif",fontWeight:600,fontSize:14,color:T.primary,textDecoration:"none" }}>
      {label}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M9 18l6-6-6-6" stroke={T.primary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
}

/* ═══════════════════════════════════════
   SHARED INDUSTRY PAGE COMPONENT
═══════════════════════════════════════ */
export default function IndustryPage({
  label, heading, subtext,
  challengeHeading, challenges,
  featuresHeading, features,
  marketsHeading, marketsSubtext,
  ctaHeading, ctaSubtext,
}: IndustryPageProps) {
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
        .challenge-card{background:#fff;border:1px solid #E7E0EC;border-radius:16px;transition:transform 0.3s cubic-bezier(0.16,1,0.3,1),box-shadow 0.3s cubic-bezier(0.16,1,0.3,1);}
        .challenge-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(96,9,255,0.10);border-color:#C4B5FD;}
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
        @keyframes menuSlideIn{from{opacity:0;transform:translateY(-8px);}to{opacity:1;transform:translateY(0);}}
      `}</style>

      {/* Scroll progress bar */}
      <div style={{ position:"fixed",top:0,left:0,right:0,height:3,zIndex:200,pointerEvents:"none" }}>
        <div style={{ height:"100%",width:`${scrollPct*100}%`,background:"linear-gradient(90deg,#6009FF 0%,#F4B249 100%)",transition:"width 0.1s linear",borderRadius:"0 2px 2px 0",boxShadow:"0 0 8px rgba(96,9,255,0.4)" }} />
      </div>

      <Navbar scrolled={scrolled} />

      {/* ══ HERO ══ */}
      <section style={{ position:"relative", width:"100%", background:T.bg, overflow:"hidden", minHeight:isMobile?"auto":"80vh", display:"flex", alignItems:"center" }}>
        <div style={{ position:"absolute", top:0, left:"50%", width:isMobile?860:1600, pointerEvents:"none", zIndex:0, animation:"mapScrollY 38s linear infinite", willChange:"transform" }}>
          {[0,1].map(n => <img key={n} src="/world-map-dots.png" aria-hidden style={{ display:"block", width:"100%", opacity:isMobile?0.18:0.14, filter:"invert(1)" }} />)}
        </div>

        <div style={{ position:"relative", zIndex:1, maxWidth:1440, margin:"0 auto", width:"100%", padding:isMobile?`80px 20px 60px`:`80px ${hPad}px` }}>
          <div style={{ maxWidth:isMobile?"100%":680, display:"flex", flexDirection:"column", gap:isMobile?24:20 }}>
            <span style={{ fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:isMobile?12:14, letterSpacing:"0.08em", textTransform:"uppercase", color:T.orange }}>
              {label}
            </span>
            <h1 style={{ margin:0, fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?42:isTablet?56:68, lineHeight:1.05, letterSpacing:"-0.02em", color:T.headingBlack }}>
              {heading}
            </h1>
            <p style={{ margin:0, fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400, fontSize:isMobile?15:17, lineHeight:1.65, color:T.muted, maxWidth:480 }}>
              {subtext}
            </p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:12 }}>
              <button style={{ fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:T.white, background:T.primary, border:"none", borderRadius:4, padding:"13px 28px", cursor:"pointer", transition:"opacity .15s" }}
                onMouseEnter={e=>(e.currentTarget.style.opacity="0.88")} onMouseLeave={e=>(e.currentTarget.style.opacity="1")}
                onClick={() => { window.open("https://merchantv2.payonus.com/signup","_blank"); }}>
                Get Started
              </button>
              <button style={{ fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14, color:T.muted, background:"transparent", border:`1px solid ${T.muted}`, borderRadius:4, padding:"11px 24px", cursor:"pointer", transition:"background .15s" }}
                onMouseEnter={e=>(e.currentTarget.style.background="#E9DDFF")} onMouseLeave={e=>(e.currentTarget.style.background="transparent")}
                onClick={() => { window.location.href="/sales"; }}>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CHALLENGES ══ */}
      <section style={{ width:"100%", background:"#F4F0FF", padding:`${isMobile?60:80}px 0` }}>
        <div style={{ maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px` }}>
          <h2 className="fade-up" style={{ margin:`0 0 ${isMobile?36:52}px`, fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?28:isTablet?38:48, lineHeight:1.1, color:T.headingBlack, maxWidth:560 }}>
            {challengeHeading}
          </h2>
          <div style={{ display:"grid", gridTemplateColumns:isMobile?"1fr":isTablet?"1fr 1fr":"1fr 1fr 1fr", gap:isMobile?16:24 }}>
            {challenges.map((c, i) => (
              <div key={i} className="challenge-card fade-up" style={{ padding:isMobile?"28px 24px":"36px 32px", transitionDelay:`${i*0.1}s` }}>
                <div style={{ width:52,height:52,borderRadius:10,background:"#EDE9FF",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:20 }}>
                  {c.icon}
                </div>
                <p style={{ margin:"0 0 10px", fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:isMobile?16:18, lineHeight:1.3, color:T.dark }}>{c.title}</p>
                <p style={{ margin:0, fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14, lineHeight:1.7, color:T.muted }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURES / SOLUTIONS ══ */}
      <section style={{ width:"100%", background:T.bg, padding:`${isMobile?60:80}px 0` }}>
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
              <h2 style={{ margin:"0 0 14px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:28, lineHeight:1.1, color:T.headingBlack }}>
                {ctaHeading}
              </h2>
              <p style={{ margin:"0 0 28px", fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:15, lineHeight:1.65, color:T.muted }}>
                {ctaSubtext}
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:12 }}>
                <button className="cta-pulse" style={{ position:"relative",overflow:"hidden",display:"flex",alignItems:"center",gap:8,fontFamily:"DM Sans, sans-serif",fontWeight:500,fontSize:14,color:T.white,background:T.primary,border:"none",borderRadius:6,padding:"12px 20px",cursor:"pointer" }} onClick={e => { ripple(e); window.open("https://merchantv2.payonus.com/signup","_blank"); }}>
                  Get Started
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button style={{ fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:14,color:T.muted,background:"transparent",border:`1px solid ${T.muted}`,borderRadius:6,padding:"12px 20px",cursor:"pointer",transition:"background .15s" }}
                  onMouseEnter={e=>(e.currentTarget.style.background="#E9DDFF")} onMouseLeave={e=>(e.currentTarget.style.background="transparent")}
                  onClick={() => { window.location.href="/sales"; }}>
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
                    onClick={e => { ripple(e); window.open("https://merchantv2.payonus.com/signup","_blank"); }}
                    onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.transform=`translate(${(e.clientX-r.left-r.width/2)*0.25}px,${(e.clientY-r.top-r.height/2)*0.25}px)`;}}
                    onMouseLeave={e=>{e.currentTarget.style.transform="";}}>
                    Get Started
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <button style={{ fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:14,color:T.muted,background:"transparent",border:`1px solid ${T.muted}`,borderRadius:6,padding:"12px 20px",cursor:"pointer",transition:"background .15s" }}
                    onMouseEnter={e=>(e.currentTarget.style.background="#E9DDFF")} onMouseLeave={e=>(e.currentTarget.style.background="transparent")}
                    onClick={() => { window.location.href="/sales"; }}>
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
