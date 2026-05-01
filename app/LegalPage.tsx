"use client";

import React from "react";
import { useBreakpoint } from "./use-breakpoint";
import Navbar, { T } from "./Navbar";
import Footer from "./Footer";

/* ─── HERO BG ─── */
function HeroBg() {
  return (
    <svg aria-hidden style={{ position:"absolute", top:"-10%", right:"-5%", width:"55%", height:"120%", pointerEvents:"none", zIndex:0 }}
      viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet" fill="none">
      {/* Organic concentric blob shapes matching design reference */}
      <path d="M420,80 C480,110 510,180 500,260 C490,340 450,410 370,440 C290,470 190,460 120,410 C50,360 20,270 30,190 C40,110 100,50 180,25 C260,0 360,50 420,80 Z"
        stroke="rgba(200,195,210,0.45)" strokeWidth="1.2" />
      <path d="M390,105 C445,132 472,196 462,268 C452,340 415,402 342,428 C269,454 176,444 112,397 C48,350 22,266 32,192 C42,118 97,62 170,40 C243,18 335,78 390,105 Z"
        stroke="rgba(190,182,205,0.40)" strokeWidth="1.1" />
      <path d="M358,132 C408,156 432,214 422,278 C412,342 378,394 312,416 C246,438 162,428 104,385 C46,342 24,264 34,196 C44,128 94,76 162,56 C230,36 308,108 358,132 Z"
        stroke="rgba(178,168,200,0.35)" strokeWidth="1" />
      <path d="M326,160 C370,182 390,232 382,288 C374,344 342,386 284,404 C226,422 150,412 98,374 C46,336 28,264 38,202 C48,140 92,92 154,74 C216,56 282,138 326,160 Z"
        stroke="rgba(165,152,195,0.30)" strokeWidth="0.9" />
      <path d="M294,188 C332,208 348,250 342,298 C336,346 308,378 256,392 C204,406 138,396 92,362 C46,328 32,262 42,208 C52,154 90,108 146,92 C202,76 256,168 294,188 Z"
        stroke="rgba(150,138,188,0.25)" strokeWidth="0.9" />
      <path d="M264,216 C296,234 308,268 302,308 C296,348 272,372 228,382 C184,392 128,382 88,352 C48,322 36,262 46,214 C56,166 88,124 138,110 C188,96 232,198 264,216 Z"
        stroke="rgba(135,122,180,0.20)" strokeWidth="0.8" />
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
