"use client";

import React from "react";
import { useBreakpoint } from "./use-breakpoint";
import Navbar, { T } from "./Navbar";
import Footer from "./Footer";
import HeroBg from "./HeroBg";


export interface LegalSection {
  id:       string;
  heading:  string;
  content:  React.ReactNode;
}

interface LegalPageProps {
  title:    string;
  subtitle: string;
  updated:  string;
  sections: LegalSection[];
  eyebrow?: string;
}

export default function LegalPage({ title, subtitle, updated, sections, eyebrow = "Legal" }: LegalPageProps) {
  const { isMobile, isTablet } = useBreakpoint();
  const [scrolled,    setScrolled]    = React.useState(false);
  const [scrollPct,   setScrollPct]   = React.useState(0);
  const [activeId,    setActiveId]    = React.useState(sections[0]?.id ?? "");
  const [tocOpen,     setTocOpen]     = React.useState(false);

  React.useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 10);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(max > 0 ? window.scrollY / max : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* Scrollspy */
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id); }),
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    sections.forEach(s => { const el = document.getElementById(s.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTocOpen(false);
  };

  const hPad = isMobile ? 20 : isTablet ? 48 : 80;

  return (
    <div style={{ display:"flex", flexDirection:"column", minHeight:"100vh", background:T.bg }}>
      <div style={{position:"fixed",top:0,left:0,right:0,height:3,zIndex:200,pointerEvents:"none"}}>
        <div style={{height:"100%",width:`${scrollPct*100}%`,background:"linear-gradient(90deg,#6009FF 0%,#F4B249 100%)",transition:"width .1s linear",borderRadius:"0 2px 2px 0",boxShadow:"0 0 8px rgba(96,9,255,.4)"}}/>
      </div>
      <style>{`
        .legal-toc-btn { display:flex; align-items:center; gap:7px; font-family:"DM Sans",sans-serif; font-size:13px; font-weight:400; color:#49454F; text-decoration:none; padding:5px 4px; border-radius:5px; cursor:pointer; border:none; background:none; text-align:left; width:100%; transition:color 0.15s; }
        .legal-toc-btn:hover { color:#6009FF; }
        .legal-toc-btn.active { color:#6009FF; font-weight:600; }
        .legal-body h3 { font-family:"Rubik",sans-serif; font-style:italic; font-weight:500; font-size:17px; color:#1C1B1F; margin:28px 0 8px; }
        .legal-body p  { font-family:"DM Sans",sans-serif; font-weight:400; font-size:15px; line-height:1.75; color:#49454F; margin:0 0 16px; }
        .legal-body ul { font-family:"DM Sans",sans-serif; font-weight:400; font-size:15px; line-height:1.75; color:#49454F; margin:0 0 16px; padding-left:22px; }
        .legal-body ul li { margin-bottom:6px; }
        .legal-body a  { color:#6009FF; text-decoration:none; }
        .legal-body a:hover { text-decoration:underline; }
        .legal-divider { border:none; border-top:1px solid #E7E0EC; margin:40px 0; }
      `}</style>

      <Navbar scrolled={scrolled} />

      {/* ── HERO ── */}
      <section style={{ position:"relative", width:"100%", background:T.bg, overflow:"hidden", padding: isMobile ? "64px 0 80px" : "88px 0 120px" }}>
        <HeroBg />
        <div style={{ position:"relative", zIndex:1, maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px`, display:"flex", flexDirection:"column", alignItems:"flex-start" }}>
          <span className="fade-up" style={{ display:"block", marginBottom: isMobile ? 20 : 28, fontFamily:"DM Sans,sans-serif", fontWeight:500, fontSize:14, color:T.orange }}>
            • {eyebrow}
          </span>
          <h1 className="fade-up d1" style={{ margin:`0 0 ${isMobile ? 20 : 28}px`, fontFamily:"Rubik,sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?48:isTablet?60:72, lineHeight:1.04, letterSpacing:"-0.02em", color:T.headingBlack }}>
            {title}
          </h1>
          <p className="fade-up d2" style={{ margin:"0 0 12px", fontFamily:"Rubik,sans-serif", fontStyle:"italic", fontWeight:400, fontSize:isMobile?15:17, lineHeight:1.7, color:T.muted, maxWidth:520 }}>
            {subtitle}
          </p>
          <span className="fade-up d2" style={{ fontFamily:"DM Sans,sans-serif", fontWeight:400, fontSize:13, color:"#9CA3AF" }}>
            Last updated: {updated}
          </span>
        </div>
      </section>

      {/* ── Mobile TOC toggle ── */}
      {isMobile && (
        <div style={{ background:T.bg, borderBottom:"1px solid #E7E0EC", padding:"12px 20px" }}>
          <button onClick={() => setTocOpen(o=>!o)} style={{ fontFamily:"DM Sans,sans-serif", fontWeight:500, fontSize:13, color:T.primary, background:"#EDE9FF", border:"1px solid #DDD0FF", borderRadius:6, padding:"6px 14px", cursor:"pointer" }}>
            {tocOpen ? "✕ Close" : "☰ Sections"}
          </button>
          {tocOpen && (
            <div style={{ marginTop:12, display:"flex", flexDirection:"column", gap:2 }}>
              {sections.map(s => (
                <button key={s.id} className={`legal-toc-btn${activeId===s.id?" active":""}`} onClick={() => scrollTo(s.id)}>
                  <span style={{ width:5,height:5,borderRadius:"50%",background:activeId===s.id?"#6009FF":"#C4B5FD",display:"inline-block",flexShrink:0 }}/>
                  {s.heading}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── BODY ── */}
      <div style={{ flex:1, maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px`, width:"100%", boxSizing:"border-box", display:"flex", gap:isMobile?0:56, alignItems:"flex-start" }}>

        {/* Sidebar TOC */}
        {!isMobile && (
          <aside style={{ width:200, flexShrink:0, position:"sticky", top:90, alignSelf:"flex-start", paddingTop:40, paddingBottom:40, maxHeight:"calc(100vh - 90px)", overflowY:"auto" }}>
            <div style={{ fontFamily:"DM Sans,sans-serif", fontWeight:600, fontSize:10, color:T.muted, textTransform:"uppercase", letterSpacing:"0.09em", padding:"0 0 10px 4px", marginBottom:4 }}>
              On this page
            </div>
            {sections.map(s => (
              <button key={s.id} className={`legal-toc-btn${activeId===s.id?" active":""}`} onClick={() => scrollTo(s.id)}>
                <span style={{ width:5,height:5,borderRadius:"50%",background:activeId===s.id?"#6009FF":"#C4B5FD",display:"inline-block",flexShrink:0 }}/>
                {s.heading}
              </button>
            ))}
          </aside>
        )}

        {/* Content */}
        <main style={{ flex:1, minWidth:0, paddingTop:40, paddingBottom:96, maxWidth:780 }}>
          {sections.map((s, i) => (
            <div key={s.id}>
              <div id={s.id} style={{ scrollMarginTop:100 }}>
                <h2 style={{ margin:"0 0 14px", fontFamily:"Rubik,sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?20:24, color:T.headingBlack }}>
                  {s.heading}
                </h2>
                <div className="legal-body">{s.content}</div>
              </div>
              {i < sections.length - 1 && <hr className="legal-divider" />}
            </div>
          ))}
        </main>
      </div>

      <Footer />
    </div>
  );
}
