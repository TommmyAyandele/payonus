"use client";

import React from "react";
import { useBreakpoint } from "./use-breakpoint";
import Navbar, { T } from "./Navbar";
import Footer from "./Footer";

/* ─── HERO BG ─── */
function HeroBg() {
  return (
    <svg aria-hidden style={{ position:"absolute", top:0, left:0, width:"100%", height:"100%", pointerEvents:"none", zIndex:0 }}
      viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice" fill="none">
      {/* Concentric organic blob shapes */}
      <ellipse cx="820" cy="210" rx="680" ry="310" stroke="rgba(180,160,220,0.18)" strokeWidth="1.2" />
      <ellipse cx="830" cy="205" rx="600" ry="268" stroke="rgba(160,130,210,0.16)" strokeWidth="1.1" />
      <ellipse cx="840" cy="200" rx="520" ry="228" stroke="rgba(140,110,200,0.14)" strokeWidth="1" />
      <ellipse cx="845" cy="198" rx="440" ry="190" stroke="rgba(120,90,190,0.13)" strokeWidth="0.9" />
      <ellipse cx="848" cy="196" rx="360" ry="154" stroke="rgba(100,70,180,0.11)" strokeWidth="0.9" />
      <ellipse cx="850" cy="195" rx="280" ry="120" stroke="rgba(96,9,255,0.09)" strokeWidth="0.8" />
      <ellipse cx="852" cy="194" rx="200" ry="88" stroke="rgba(96,9,255,0.08)" strokeWidth="0.8" />
    </svg>
  );
}

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
}

export default function LegalPage({ title, subtitle, updated, sections }: LegalPageProps) {
  const { isMobile, isTablet } = useBreakpoint();
  const [scrolled,    setScrolled]    = React.useState(false);
  const [activeId,    setActiveId]    = React.useState(sections[0]?.id ?? "");
  const [tocOpen,     setTocOpen]     = React.useState(false);

  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
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
      <section style={{ position:"relative", background:T.bg, overflow:"hidden", padding:`${isMobile?56:72}px 0 ${isMobile?40:56}px` }}>
        <HeroBg />
        <div style={{ position:"relative", zIndex:1, maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px` }}>
          <span style={{ fontFamily:"DM Sans,sans-serif", fontWeight:500, fontSize:13, color:T.accent, display:"block", marginBottom:14 }}>
            • Legal
          </span>
          <h1 style={{ margin:"0 0 12px", fontFamily:"Rubik,sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?34:48, lineHeight:1.1, letterSpacing:"-0.01em", color:T.headingBlack }}>
            {title}
          </h1>
          <p style={{ margin:"0 0 10px", fontFamily:"Rubik,sans-serif", fontStyle:"italic", fontWeight:400, fontSize:15, lineHeight:1.6, color:T.muted, maxWidth:520 }}>
            {subtitle}
          </p>
          <span style={{ fontFamily:"DM Sans,sans-serif", fontWeight:400, fontSize:13, color:"#9CA3AF" }}>
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
