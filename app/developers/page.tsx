"use client";

import React from "react";
import { useBreakpoint } from "../use-breakpoint";
import Navbar, { T } from "../Navbar";
import Footer from "../Footer";

/* ─── SCROLL REVEAL ─── */
function useScrollReveal() {
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

/* ─── HERO BACKGROUND SVG ─── */
function HeroBg() {
  return (
    <svg
      aria-hidden
      style={{ position:"absolute", top:0, left:0, width:"100%", height:"100%", pointerEvents:"none", zIndex:0 }}
      viewBox="0 0 1440 640"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="hero-wg1">
        <path d="M-50 620 C100 600 220 570 380 540 C480 522 560 505 660 480 C780 450 880 410 990 355 C1090 305 1190 240 1320 175 C1380 145 1420 122 1460 102" stroke="rgba(114,82,195,0.28)" strokeWidth="1.4"/>
        <path d="M-50 640 C80 632 160 615 270 600 C360 587 420 588 480 578 C545 566 585 550 650 536 C730 518 810 495 900 466 C1000 433 1100 387 1200 325 C1290 270 1370 210 1440 160" stroke="rgba(114,82,195,0.22)" strokeWidth="1.2"/>
      </g>
      <g className="hero-wg2">
        <path d="M200 640 C290 634 380 620 480 607 C560 596 615 600 665 591 C715 580 748 563 800 549 C870 529 945 507 1030 477 C1125 443 1215 394 1308 330 C1376 281 1415 242 1440 218" stroke="rgba(114,82,195,0.16)" strokeWidth="1.1"/>
        <path d="M-100 600 C50 585 160 558 300 538 C400 522 468 509 545 488 C630 464 710 443 800 416 C905 384 1015 336 1115 272 C1205 216 1310 149 1440 98" stroke="rgba(140,100,210,0.20)" strokeWidth="0.9"/>
      </g>
      <g className="hero-wg3">
        <line x1="1060" y1="640" x2="1180" y2="260" stroke="rgba(114,82,195,0.16)" strokeWidth="1"/>
        <line x1="1120" y1="640" x2="1220" y2="220" stroke="rgba(114,82,195,0.13)" strokeWidth="1"/>
        <line x1="1180" y1="640" x2="1265" y2="180" stroke="rgba(114,82,195,0.11)" strokeWidth="0.9"/>
      </g>
      <g className="hero-wg4">
        <path d="M-50 635 C100 620 230 593 380 572 C470 558 540 546 620 525 C710 500 800 474 905 440 C1010 403 1110 356 1210 291 C1295 236 1375 180 1440 138" stroke="rgba(196,148,80,0.16)" strokeWidth="0.9"/>
      </g>
    </svg>
  );
}

/* ─── RIPPLE ─── */
function ripple(e: React.MouseEvent<HTMLButtonElement>) {
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

/* ─── CODE EDITOR ─── */
const CODE_LINES = [
  { n: 1,  tokens: [] },
  { n: 2,  tokens: [{ t: "comment", v: "// Imports" }] },
  { n: 3,  tokens: [{ t: "keyword", v: "import" }, { t: "plain", v: " mongoose, { " }, { t: "type", v: "Schema" }, { t: "plain", v: " } " }, { t: "keyword", v: "from" }, { t: "plain", v: " " }, { t: "string", v: "'mongoose'" }] },
  { n: 4,  tokens: [] },
  { n: 5,  tokens: [{ t: "comment", v: "// Collection name" }] },
  { n: 6,  tokens: [{ t: "keyword", v: "export" }, { t: "plain", v: " " }, { t: "keyword", v: "const" }, { t: "plain", v: " collection = " }, { t: "string", v: "'Product'" }] },
  { n: 7,  tokens: [] },
  { n: 8,  tokens: [{ t: "comment", v: "// Schema" }] },
  { n: 9,  tokens: [{ t: "keyword", v: "const" }, { t: "plain", v: " schema = " }, { t: "keyword", v: "new" }, { t: "plain", v: " Schema({" }] },
  { n: 10, tokens: [{ t: "plain", v: "  name: {" }] },
  { n: 11, tokens: [{ t: "plain", v: "    type: " }, { t: "type", v: "String" }, { t: "plain", v: "," }] },
  { n: 12, tokens: [{ t: "plain", v: "    required: " }, { t: "bool", v: "true" }] },
  { n: 13, tokens: [{ t: "plain", v: "  }," }] },
  { n: 14, tokens: [] },
  { n: 15, tokens: [{ t: "plain", v: "  description: {" }] },
  { n: 16, tokens: [{ t: "plain", v: "    type: " }, { t: "type", v: "String" }] },
  { n: 17, tokens: [{ t: "plain", v: "  }," }] },
  { n: 18, tokens: [{ t: "plain", v: "}, {timestamps: " }, { t: "bool", v: "true" }, { t: "plain", v: "})" }] },
  { n: 19, tokens: [] },
  { n: 20, tokens: [{ t: "comment", v: "// Model" }] },
  { n: 21, tokens: [{ t: "keyword", v: "export" }, { t: "plain", v: " " }, { t: "keyword", v: "default" }, { t: "plain", v: " mongoose.model(collection, schema, collection)" }] },
];

const TOKEN_COLOR: Record<string, string> = {
  keyword: "#C792EA",
  string:  "#C3E88D",
  type:    "#82AAFF",
  bool:    "#F78C6C",
  comment: "#546E7A",
  plain:   "#D4D4D4",
};

function CodeEditor() {
  const TABS = ["index.js", "README.md", ".gitignore"];
  return (
    <div style={{
      borderRadius: 10,
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 24px 64px rgba(0,0,0,0.45)",
      background: "#1E1E2E",
      userSelect: "none",
      fontFamily: "'Fira Code', 'Cascadia Code', 'Courier New', monospace",
    }}>
      {/* Tab bar */}
      <div style={{
        background: "#181825",
        display: "flex",
        alignItems: "stretch",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}>
        {TABS.map((tab, i) => (
          <div key={tab} style={{
            padding: "9px 18px",
            fontSize: 12,
            color: i === 0 ? "#CDD6F4" : "#6C7086",
            background: i === 0 ? "#1E1E2E" : "transparent",
            borderRight: "1px solid rgba(255,255,255,0.06)",
            borderBottom: i === 0 ? "2px solid #6009FF" : "none",
            cursor: "default",
            whiteSpace: "nowrap",
          }}>{tab}</div>
        ))}
      </div>

      {/* Code area */}
      <div style={{ padding: "12px 0 16px", overflowX: "auto" }}>
        {CODE_LINES.map(line => (
          <div key={line.n} style={{ display: "flex", minHeight: 20 }}>
            {/* Line number */}
            <span style={{
              width: 44, flexShrink: 0, textAlign: "right",
              paddingRight: 18, fontSize: 12, lineHeight: "20px",
              color: "#4A4A6A", userSelect: "none",
            }}>{line.n}</span>
            {/* Code tokens */}
            <span style={{ fontSize: 12, lineHeight: "20px", whiteSpace: "pre" }}>
              {line.tokens.length === 0 ? " " : line.tokens.map((tok, ti) => (
                <span key={ti} style={{ color: TOKEN_COLOR[tok.t] }}>{tok.v}</span>
              ))}
            </span>
          </div>
        ))}
      </div>

      {/* Status bar */}
      <div style={{
        background: "#181825",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 16,
        padding: "4px 16px",
      }}>
        {["Ln 21", "UTF-8", "JavaScript"].map(s => (
          <span key={s} style={{ fontSize: 10, color: "#6C7086" }}>{s}</span>
        ))}
      </div>
    </div>
  );
}

/* ─── RESOURCE CARDS ─── */
const RESOURCE_CARDS = [
  {
    title: "Documentation",
    href:  "/docs",
    desc:  "Comprehensive guides for every endpoint and use case.",
    icon: (
      /* File with </> inside */
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" stroke="#6009FF" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M13 2v7h7" stroke="#6009FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 14l-1.5 1.5L9 17" stroke="#6009FF" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 13l1.2 5" stroke="#6009FF" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M15 14l1.5 1.5L15 17" stroke="#6009FF" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "API Refrence",
    href:  "/docs",
    desc:  "Full endpoint reference with request/response examples.",
    icon: (
      /* Wrench / tool */
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="#6009FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Changelog",
    href:  "/docs",
    desc:  "Every API update, new endpoint, and breaking change logged.",
    icon: (
      /* Document with bullet-list rows */
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="2" width="18" height="20" rx="2" stroke="#6009FF" strokeWidth="1.5"/>
        <circle cx="7.5" cy="8" r="1" fill="#6009FF"/>
        <path d="M10.5 8h6" stroke="#6009FF" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="7.5" cy="12" r="1" fill="#6009FF"/>
        <path d="M10.5 12h6" stroke="#6009FF" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="7.5" cy="16" r="1" fill="#6009FF"/>
        <path d="M10.5 16h4" stroke="#6009FF" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "SDKs",
    href:  "/docs",
    desc:  "Official libraries with examples and full TypeScript support.",
    icon: (
      /* Browser window with <> inside */
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="#6009FF" strokeWidth="1.5"/>
        <path d="M2 9h20" stroke="#6009FF" strokeWidth="1.3"/>
        <circle cx="5.5" cy="6.5" r="0.8" fill="#6009FF"/>
        <circle cx="8.5" cy="6.5" r="0.8" fill="#6009FF"/>
        <circle cx="11.5" cy="6.5" r="0.8" fill="#6009FF"/>
        <path d="M9 14l-2 2 2 2" stroke="#6009FF" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 14l2 2-2 2" stroke="#6009FF" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function DevelopersPage() {
  const { isMobile, isTablet } = useBreakpoint();
  useScrollReveal();

  const [scrolled,  setScrolled]  = React.useState(false);
  const [scrollPct, setScrollPct] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(max > 0 ? window.scrollY / max : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hPad = isMobile ? 20 : isTablet ? 48 : 80;

  return (
    <div style={{ display:"flex", flexDirection:"column", minHeight:"100vh", background:T.bg }}>
      <div style={{position:"fixed",top:0,left:0,right:0,height:3,zIndex:200,pointerEvents:"none"}}>
        <div style={{height:"100%",width:`${scrollPct*100}%`,background:"linear-gradient(90deg,#6009FF 0%,#F4B249 100%)",transition:"width .1s linear",borderRadius:"0 2px 2px 0",boxShadow:"0 0 8px rgba(96,9,255,.4)"}}/>
      </div>
      <style>{`
        .fade-up { opacity:0; transform:translateY(28px); transition:opacity 0.55s cubic-bezier(0.16,1,0.3,1), transform 0.55s cubic-bezier(0.16,1,0.3,1); }
        .fade-up.visible { opacity:1; transform:translateY(0); }
        .fade-up.d1 { transition-delay:0.08s; }
        .fade-up.d2 { transition-delay:0.16s; }
        .fade-up.d3 { transition-delay:0.24s; }
        .fade-up.d4 { transition-delay:0.32s; }

        .res-card { display:block; text-decoration:none; cursor:pointer; background:transparent; transition:background 0.2s cubic-bezier(0.16,1,0.3,1); }
        .res-card:hover { background:#F5F0FF; }
        .res-card:hover .res-icon-box { border-color:#C4B5FD; background:#EDE9FF; }

        .ripple-effect { position:absolute; border-radius:50%; background:rgba(255,255,255,0.38); animation:rippleOut 0.55s ease-out forwards; pointer-events:none; }
        @keyframes rippleOut { from{transform:scale(0);opacity:0.55;} to{transform:scale(1);opacity:0;} }

        .dev-cta-link { font-family:"DM Sans",sans-serif; font-weight:500; font-size:14px; color:#6009FF; text-decoration:none; display:inline-flex; align-items:center; gap:4px; transition:gap 0.2s; }
        .dev-cta-link:hover { gap:8px; }
      `}</style>

      <Navbar scrolled={scrolled} />

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section style={{ position:"relative", width:"100%", background:T.bg, overflow:"hidden", paddingTop: isMobile ? 56 : isTablet ? 72 : 88, paddingBottom: isMobile ? 64 : 96 }}>
        <HeroBg />
        <div style={{ position:"relative", zIndex:1, maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px` }}>

          {/* Breadcrumb */}
          <div className="fade-up" style={{ marginBottom: isMobile ? 20 : 28 }}>
            <span style={{ fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:T.accent }}>
              • Developer Platform
            </span>
          </div>

          {/* Two-column layout */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "1fr 1fr",
            gap: isMobile ? 48 : isTablet ? 48 : 64,
            alignItems: "center",
          }}>

            {/* Left — text */}
            <div style={{ display:"flex", flexDirection:"column", gap: isMobile ? 24 : 28 }}>
              <h1 className="fade-up d1" style={{
                margin: 0,
                fontFamily: "Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
                fontSize: isMobile ? 48 : isTablet ? 60 : 72,
                lineHeight: 1.06, letterSpacing:"-0.02em",
                color: T.headingBlack,
              }}>
                Build payment flows that work across Africa.
              </h1>

              <p className="fade-up d2" style={{
                margin: 0,
                fontFamily: "Rubik, sans-serif", fontStyle:"italic", fontWeight:400,
                fontSize: 16, lineHeight: 1.65, color: T.muted,
                maxWidth: 480,
              }}>
                A single, well-documented REST API for every Payonus product. Sandbox-first, webhook-ready, with SDKs in the languages your team already uses.
              </p>

              <div className="fade-up d3" style={{ display:"flex", flexWrap:"wrap", gap:12 }}>
                <button
                  onClick={ripple}
                  style={{
                    position:"relative", overflow:"hidden",
                    fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14,
                    color:T.white, background:T.primary, border:"none", borderRadius:4,
                    padding:"13px 28px", cursor:"pointer", transition:"opacity .15s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >Start in Sandbox</button>
                <button style={{
                  fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14,
                  color:T.muted, background:"transparent", border:`1px solid ${T.muted}`,
                  borderRadius:4, padding:"11px 24px", cursor:"pointer", transition:"background .15s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#E9DDFF")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >View API Refrence</button>
              </div>
            </div>

            {/* Right — code editor */}
            <div className="fade-up d2" style={{ width:"100%", minWidth:0 }}>
              <CodeEditor />
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          RESOURCE CARDS
      ══════════════════════════════ */}
      <section style={{ width:"100%", background:T.bg, padding:`${isMobile ? 48 : 72}px 0` }}>
        <div style={{ maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px` }}>
          <div className="fade-up" style={{
            border: "1px solid #E7E0EC",
            borderRadius: 14,
            overflow: "hidden",
            background: T.white,
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr 1fr",
          }}>
            {RESOURCE_CARDS.map((card, i) => (
              <a
                key={card.title}
                href={card.href}
                className="res-card"
                style={{
                  padding: isMobile ? "28px 20px" : "36px 32px",
                  borderRight: i < RESOURCE_CARDS.length - 1
                    ? (isMobile
                        ? (i % 2 === 0 ? "1px solid #E7E0EC" : "none")
                        : "1px solid #E7E0EC")
                    : "none",
                  borderBottom: isMobile && i < 2 ? "1px solid #E7E0EC" : "none",
                }}
              >
                {/* Icon box */}
                <div className="res-icon-box" style={{
                  width: 44, height: 44,
                  borderRadius: 10,
                  border: "1px solid #DDD0FF",
                  background: "#F8F5FF",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: isMobile ? 20 : 24,
                  transition: "border-color 0.2s, background 0.2s",
                }}>
                  {card.icon}
                </div>
                <div style={{
                  fontFamily:"DM Sans, sans-serif", fontWeight:700,
                  fontSize: isMobile ? 15 : 17,
                  color: T.dark, marginBottom: 10,
                }}>{card.title}</div>
                <div style={{
                  fontFamily:"DM Sans, sans-serif", fontWeight:400,
                  fontSize: isMobile ? 13 : 14, lineHeight: 1.6,
                  color: T.muted,
                }}>{card.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          BOTTOM CTA
      ══════════════════════════════ */}
      <section style={{ width:"100%", background:T.bg, padding:`${isMobile ? 64 : 96}px 0 ${isMobile ? 80 : 112}px` }}>
        <div style={{ maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px` }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "1fr 1fr",
            gap: isMobile ? 52 : isTablet ? 52 : 80,
            alignItems: "flex-start",
          }}>

            {/* Left — headline + buttons */}
            <div style={{ display:"flex", flexDirection:"column", gap:28 }}>
              <h2 className="fade-up" style={{
                margin: 0,
                fontFamily: "Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
                fontSize: isMobile ? 40 : isTablet ? 52 : 62,
                lineHeight: 1.1, letterSpacing:"-0.02em",
                color: T.headingBlack,
              }}>
                Your first payout in{" "}
                <span style={{ color:T.primary }}>under 10 minutes.</span>
              </h2>

              <p className="fade-up d1" style={{
                margin: 0,
                fontFamily: "DM Sans, sans-serif", fontWeight:400,
                fontSize: 15, lineHeight:1.6, color:T.muted,
              }}>
                No lengthy onboarding. Get your sandbox keys and start building today.
              </p>

              <div className="fade-up d2" style={{ display:"flex", flexWrap:"wrap", gap:12 }}>
                <button
                  onClick={ripple}
                  style={{
                    position:"relative", overflow:"hidden",
                    fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14,
                    color:T.white, background:T.primary, border:"none", borderRadius:4,
                    padding:"13px 28px", cursor:"pointer", transition:"opacity .15s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >Start in Sandbox</button>
                <button style={{
                  fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14,
                  color:T.muted, background:"transparent", border:`1px solid ${T.muted}`,
                  borderRadius:4, padding:"11px 24px", cursor:"pointer", transition:"background .15s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#E9DDFF")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >View API Reference</button>
              </div>
            </div>

            {/* Right — supporting links */}
            <div className="fade-up d1" style={{ display:"flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 36 : isTablet ? 36 : 48, alignItems:"flex-start", paddingTop: isMobile ? 0 : 8 }}>

              {/* See what you'll pay */}
              <div style={{ display:"flex", flexDirection:"column", gap:12, flex:1 }}>
                <div style={{ width:40, height:40, borderRadius:10, background:"#F0EAFF", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="#6009FF" strokeWidth="1.6"/>
                    <path d="M12 6v6l4 2" stroke="#6009FF" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div style={{ fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:15, color:T.dark }}>See what you'll pay</div>
                <div style={{ fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:13, color:T.muted, lineHeight:1.55 }}>
                  Integrated per-transaction pricing with no hidden fees.
                </div>
                <a href="/pricing" className="dev-cta-link">
                  Pricing details
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#6009FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>

              {/* Start building */}
              <div style={{ display:"flex", flexDirection:"column", gap:12, flex:1 }}>
                <div style={{ width:40, height:40, borderRadius:10, background:"#F0EAFF", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M7 8l-4 4 4 4M17 8l4 4-4 4" stroke="#6009FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 4l-4 16" stroke="#F4B249" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div style={{ fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:15, color:T.dark }}>Start building</div>
                <div style={{ fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:13, color:T.muted, lineHeight:1.55 }}>
                  Get up and running with Payonus in as little as 10 minutes.
                </div>
                <a href="/get-started" className="dev-cta-link">
                  Integration options
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#6009FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
