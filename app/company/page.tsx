"use client";

import React from "react";
import { useBreakpoint } from "../use-breakpoint";
import Navbar, { T } from "../Navbar";
import Footer from "../Footer";

const NAVY = "#1D0057";

/* ─── SCROLL REVEAL ─── */
function useScrollReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.08 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── RIPPLE ─── */
function ripple(e: React.MouseEvent<HTMLButtonElement>) {
  const btn = e.currentTarget;
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 2;
  const span = document.createElement("span");
  Object.assign(span.style, {
    position: "absolute",
    width: `${size}px`,
    height: `${size}px`,
    left: `${e.clientX - rect.left - size / 2}px`,
    top: `${e.clientY - rect.top - size / 2}px`,
  });
  span.className = "ripple-effect";
  btn.appendChild(span);
  setTimeout(() => span.remove(), 600);
}

/* ─── PRINCIPLE ICONS ─── */
function PrincipleIcon({ type }: { type: string }) {
  const c = T.primary;
  switch (type) {
    case "speed":
      return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M2 8h6M1 13h4M2 18h6" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
          <circle cx="17" cy="13" r="7" stroke={c} strokeWidth="1.6"/>
          <path d="M17 10v3.5l2.5 1.5" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "simplicity":
      return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M13 2l9 7-3 13H7L4 9l9-7z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/>
          <path d="M4 9h18" stroke={c} strokeWidth="1.4" strokeLinecap="round"/>
          <path d="M13 2L8.5 9 13 22l4.5-13L13 2" stroke={c} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "africa":
      return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <circle cx="13" cy="13" r="10" stroke={c} strokeWidth="1.6"/>
          <path d="M13 3c-3 3-5 6-5 10s2 7 5 10M13 3c3 3 5 6 5 10s-2 7-5 10" stroke={c} strokeWidth="1.4" strokeLinecap="round"/>
          <path d="M3 13h20M4 8.5h18M4 17.5h18" stroke={c} strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
      );
    case "trust":
      return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M13 24s9-4.5 9-11V6L13 3 4 6v7c0 6.5 9 11 9 11z" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return null;
  }
}

/* ─── DATA ─── */
const PRINCIPLES = [
  { icon: "speed",      title: "Speed Obsessed",    desc: "Seconds matter. We fight every delay so businesses can operate at the true speed of commerce." },
  { icon: "simplicity", title: "Radical Simplicity", desc: "Complex problems deserve simple solutions. One integration. One dashboard. One reliable API." },
  { icon: "africa",     title: "Built for Africa",   desc: "Designed for local realities — currencies, rails, mobile usage patterns, and regulatory environments." },
  { icon: "trust",      title: "Trust by Default",   desc: "Security, compliance, and transparency are non-negotiable. We protect every transaction like it's our own." },
];

const JOBS = [
  {
    title:    "Senior Backend Engineer (Payments)",
    location: "Lagos",
    type:     "Full-time",
    desc:     "Design and scale high-throughput payment systems handling thousands of transactions per second across multiple African countries.",
  },
  {
    title:    "Growth Marketing Lead",
    location: "Lagos",
    type:     "Full-time",
    desc:     "Drive customer acquisition and expansion across key African markets through creative, data-driven campaigns.",
  },
  {
    title:    "Senior Backend Engineer (Payments)",
    location: "Lagos",
    type:     "Full-time",
    desc:     "Design and scale high-throughput payment systems handling thousands of transactions per second across multiple African countries.",
  },
  {
    title:    "Growth Marketing Lead",
    location: "Lagos",
    type:     "Full-time",
    desc:     "Drive customer acquisition and expansion across key African markets through creative, data-driven campaigns.",
  },
];

/* ═══════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════ */
export default function CompanyPage() {
  useScrollReveal();
  const { isMobile, isTablet } = useBreakpoint();
  const [scrolled,  setScrolled]  = React.useState(false);
  const [scrollPct, setScrollPct] = React.useState(0);

  const hPad = isMobile ? 20 : isTablet ? 48 : 80;

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
        @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
        html, body { margin:0; padding:0; background:${T.bg}; }
        *, *::before, *::after { box-sizing:border-box; }
        img { display:block; }

        .fade-up { opacity:0; transform:translateY(36px); transition:opacity 0.7s cubic-bezier(0.16,1,0.3,1),transform 0.7s cubic-bezier(0.16,1,0.3,1); }
        .fade-up.visible { opacity:1; transform:translateY(0); }
        .fade-up.d1 { transition-delay:0.10s; }
        .fade-up.d2 { transition-delay:0.20s; }
        .fade-up.d3 { transition-delay:0.30s; }
        .fade-up.d4 { transition-delay:0.40s; }

        @keyframes rippleOut { from{transform:scale(0);opacity:0.5;} to{transform:scale(1);opacity:0;} }
        .ripple-effect { position:absolute; border-radius:50%; background:rgba(255,255,255,0.35); animation:rippleOut 0.55s ease-out forwards; pointer-events:none; }

        @keyframes ctaPulse { 0%,100%{box-shadow:0 0 0 0 rgba(96,9,255,0.40);} 60%{box-shadow:0 0 0 14px rgba(96,9,255,0);} }
        .cta-pulse { animation:ctaPulse 2.8s ease-in-out infinite; }

        @keyframes scrollX { from{transform:translateX(0);} to{transform:translateX(-50%);} }
        .hero-scroll-track { display:flex; gap:12px; width:max-content; animation:scrollX 18s linear infinite; }
        .hero-scroll-track:hover { animation-play-state:paused; }

        @keyframes float1 { 0%,100%{transform:translateY(0px);} 50%{transform:translateY(-16px);} }
        @keyframes float2 { 0%,100%{transform:translateY(-10px);} 50%{transform:translateY(10px);} }
        @keyframes float3 { 0%,100%{transform:translateY(-6px);} 50%{transform:translateY(14px);} }
        .hero-photo-1 { animation:float1 4.2s ease-in-out infinite; }
        .hero-photo-2 { animation:float2 5.1s ease-in-out infinite; }
        .hero-photo-3 { animation:float3 4.7s ease-in-out infinite; }

        .principle-card:hover { background:#F8F5FF !important; }

        .job-card { transition:transform 0.28s cubic-bezier(0.16,1,0.3,1),box-shadow 0.28s cubic-bezier(0.16,1,0.3,1); }
        .job-card:hover { transform:translateY(-3px); box-shadow:0 12px 32px rgba(96,9,255,0.09); }

        .footer-link { position:relative; display:inline-block; }
        .footer-link::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:1px; background:${T.primary}; transition:width 0.3s cubic-bezier(0.16,1,0.3,1); }
        .footer-link:hover::after { width:100%; }
      `}</style>

      {/* ── Scroll progress bar ── */}
      <div style={{ position:"fixed", top:0, left:0, right:0, height:3, zIndex:200, pointerEvents:"none" }}>
        <div style={{ height:"100%", width:`${scrollPct * 100}%`, background:"linear-gradient(90deg,#6009FF 0%,#F4B249 100%)", transition:"width 0.1s linear", borderRadius:"0 2px 2px 0", boxShadow:"0 0 8px rgba(96,9,255,0.4)" }} />
      </div>

      <Navbar scrolled={scrolled} />

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section style={{
        position:"relative",
        width:"100%", background:T.bg,
        overflow:"hidden",
        padding: isMobile ? "56px 0 60px" : isTablet ? "72px 0 72px" : "80px 0 80px",
      }}>
        {/* Background concentric-oval vector */}
        {!isMobile && (
          <img
            src="/hero-vector.png"
            aria-hidden
            style={{
              position:"absolute",
              top:"50%", left:"50%",
              transform:"translate(-20%, -50%)",
              width: isTablet ? 600 : 780,
              opacity:0.55,
              pointerEvents:"none",
              zIndex:0,
              userSelect:"none",
            }}
          />
        )}

        <div style={{ position:"relative", zIndex:1, maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px` }}>
          <div style={{
            display:"grid",
            gridTemplateColumns: isMobile ? "1fr" : "62fr 38fr",
            gap: isMobile ? 48 : isTablet ? 40 : 48,
            alignItems:"center",
          }}>

            {/* Left */}
            <div>
              <span className="fade-up" style={{
                display:"block", marginBottom: isMobile ? 20 : 28,
                fontFamily:"DM Sans, sans-serif", fontWeight:500,
                fontSize:14, color:T.orange,
              }}>
                • About Us
              </span>

              <h1 className="fade-up d1" style={{
                margin:`0 0 ${isMobile ? 16 : 22}px`,
                fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
                fontSize: isMobile ? 62 : isTablet ? 64 : 90,
                lineHeight:1.05, letterSpacing:"-0.02em", color:T.headingBlack,
              }}>
                Building the rails<br />for a borderless<br />
                <span style={{ color:T.primary }}>Africa.</span>
              </h1>

              <p className="fade-up d2" style={{
                margin:`0 0 ${isMobile ? 28 : 36}px`,
                fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400,
                fontSize: isMobile ? 16 : 20, lineHeight:1.6, color:T.muted, maxWidth:520,
              }}>
                Payonus is on a mission to make moving money across Africa as simple, fast, and reliable as sending a message. Founded in Lagos, built for the continent.
              </p>

              <div className="fade-up d3" style={{ display:"flex", flexWrap:"wrap", gap:12 }}>
                <button
                  className="cta-pulse"
                  onClick={ripple}
                  style={{ position:"relative", overflow:"hidden", fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:T.white, background:T.primary, border:"none", borderRadius:6, padding:"12px 24px", cursor:"pointer" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >Join the Team</button>
                <button
                  style={{ fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14, color:T.dark, background:"transparent", border:`1px solid ${T.dark}`, borderRadius:6, padding:"12px 24px", cursor:"pointer", transition:"background .15s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#E9DDFF")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >Our Story</button>
              </div>
            </div>

            {/* Right: 3 photos — fixed 208.8×174px, staggered + floating */}
            {!isMobile && (
              <div className="fade-up d2" style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:20 }}>
                <div className="hero-photo-1" style={{ width:208.8, height:174, borderRadius:16, overflow:"hidden", flexShrink:0, marginRight:60 }}>
                  <img src="/company-hero-1.png" alt="Team member with technology network" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top" }} />
                </div>
                <div className="hero-photo-2" style={{ width:208.8, height:174, borderRadius:16, overflow:"hidden", flexShrink:0 }}>
                  <img src="/company-hero-2.png" alt="Team collaboration" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center" }} />
                </div>
                <div className="hero-photo-3" style={{ width:208.8, height:174, borderRadius:16, overflow:"hidden", flexShrink:0, marginRight:90 }}>
                  <img src="/company-hero-3.png" alt="Customer using mobile payment" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top" }} />
                </div>
              </div>
            )}

            {/* Mobile: endless auto-scrolling marquee */}
            {isMobile && (
              <div style={{ overflow:"hidden", marginLeft:-20, marginRight:-20 }}>
                <div className="hero-scroll-track">
                  {[1,2,3,1,2,3].map((num, i) => (
                    <div key={i} style={{ flexShrink:0, width:208.8, height:174, borderRadius:14, overflow:"hidden" }}>
                      <img src={`/company-hero-${num}.png`} alt={`Team ${num}`} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          QUOTE
      ══════════════════════════════ */}
      <section style={{
        width:"100%",
        background: T.bg,
        padding: isMobile ? "72px 0 64px" : isTablet ? "96px 0 88px" : "120px 0 112px",
        borderTop:    `1px solid ${T.borderLight}`,
        borderBottom: `1px solid ${T.borderLight}`,
      }}>
        <div style={{ maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px` }}>
          <div className="fade-up" style={{ maxWidth: isMobile ? "100%" : 860 }}>

            {/* Decorative quote mark */}
            <div style={{
              fontFamily:"Georgia, 'Times New Roman', serif",
              fontSize: isMobile ? 72 : 104,
              lineHeight: 0.8,
              color: T.primary,
              marginBottom: isMobile ? 20 : 28,
              userSelect:"none",
            }} aria-hidden>
              &ldquo;
            </div>

            <p style={{
              margin: `0 0 ${isMobile ? 36 : 48}px`,
              fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
              fontSize: isMobile ? 30 : isTablet ? 46 : 64,
              lineHeight: 1.14,
              letterSpacing:"-0.015em",
              color: NAVY,
            }}>
              Africa deserves payment infrastructure that moves at the speed of its ambition.
            </p>

            <div style={{ display:"flex", alignItems:"center", gap:16 }}>
              <div style={{ width:40, height:2, background:T.primary, borderRadius:2, flexShrink:0 }} />
              <div>
                <p style={{ margin:"0 0 3px", fontFamily:"DM Sans, sans-serif", fontWeight:700, fontSize:16, color:T.dark }}>
                  Onyiye Olisah
                </p>
                <p style={{ margin:0, fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14, color:T.muted }}>
                  Founder &amp; CEO, PayOnUs
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          MISSION / VISION
      ══════════════════════════════ */}
      <section style={{ width:"100%", background:"#F8F7F9" }}>
        <div style={{ maxWidth:1440, margin:"0 auto", padding:`${isMobile ? 56 : 80}px ${hPad}px ${isMobile ? 56 : 80}px` }}>

          {isMobile ? (
            /* Mobile: Mission text → Mission image → Vision text → Vision image */
            <div style={{ display:"flex", flexDirection:"column", gap:40 }}>
              {/* Mission */}
              <div className="fade-up">
                <span style={{ display:"block", marginBottom:16, fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:NAVY }}>• Our Mission</span>
                <h2 style={{ margin:"0 0 20px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:22, lineHeight:1.22, color:T.headingBlack }}>
                  Make moving money across Africa simple, instant, and accessible for every business.
                </h2>
                <p style={{ margin:"0 0 24px", fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:15, lineHeight:1.75, color:T.dark }}>
                  We eliminate the friction, delays, and complexity that have held back African commerce for decades. Whether it's paying vendors, receiving customer payments, or moving funds across borders — Payonus makes it seamless.
                </p>
                <div style={{ height:240, borderRadius:16, overflow:"hidden" }}>
                  <img src="/company-mission.png" alt="Our Mission" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", display:"block" }} />
                </div>
              </div>

              {/* Vision */}
              <div className="fade-up d1">
                <span style={{ display:"block", marginBottom:16, fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:NAVY }}>• Our Vision</span>
                <h2 style={{ margin:"0 0 20px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:22, lineHeight:1.22, color:T.headingBlack }}>
                  A future where financial borders no longer limit African potential.
                </h2>
                <p style={{ margin:"0 0 24px", fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:15, lineHeight:1.75, color:T.dark }}>
                  We envision a continent where any business — from a Lagos startup to a Nairobi merchant — can send and receive money instantly across 50+ African markets, just like sending a WhatsApp message.
                </p>
                <div style={{ height:240, borderRadius:16, overflow:"hidden" }}>
                  <img src="/company-vision.png" alt="Our Vision" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", display:"block" }} />
                </div>
              </div>
            </div>
          ) : (
            /* Desktop/Tablet: text row then image row side-by-side */
            <>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap: isTablet ? 52 : 80, marginBottom: isTablet ? 40 : 56 }}>
                <div className="fade-up">
                  <span style={{ display:"block", marginBottom:16, fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:NAVY }}>• Our Mission</span>
                  <h2 style={{ margin:"0 0 20px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize: isTablet ? 26 : 32, lineHeight:1.22, color:T.headingBlack }}>
                    Make moving money across Africa simple, instant, and accessible for every business.
                  </h2>
                  <p style={{ margin:0, fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:15, lineHeight:1.75, color:T.dark }}>
                    We eliminate the friction, delays, and complexity that have held back African commerce for decades. Whether it's paying vendors, receiving customer payments, or moving funds across borders — Payonus makes it seamless.
                  </p>
                </div>
                <div className="fade-up d1">
                  <span style={{ display:"block", marginBottom:16, fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:NAVY }}>• Our Vision</span>
                  <h2 style={{ margin:"0 0 20px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize: isTablet ? 26 : 32, lineHeight:1.22, color:T.headingBlack }}>
                    A future where financial borders no longer limit African potential.
                  </h2>
                  <p style={{ margin:0, fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:15, lineHeight:1.75, color:T.dark }}>
                    We envision a continent where any business — from a Lagos startup to a Nairobi merchant — can send and receive money instantly across 50+ African markets, just like sending a WhatsApp message.
                  </p>
                </div>
              </div>

              <div className="fade-up" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24 }}>
                <div style={{ height: isTablet ? 320 : 400, borderRadius:16, overflow:"hidden" }}>
                  <img src="/company-mission.png" alt="Our Mission" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", display:"block" }} />
                </div>
                <div style={{ height: isTablet ? 320 : 400, borderRadius:16, overflow:"hidden" }}>
                  <img src="/company-vision.png" alt="Our Vision" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", display:"block" }} />
                </div>
              </div>
            </>
          )}

        </div>
      </section>

      {/* ══════════════════════════════
          PRINCIPLES
      ══════════════════════════════ */}
      <section style={{ width:"100%", background:T.bg, padding: isMobile ? "64px 0 80px" : "88px 0 108px" }}>
        <div style={{ maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px` }}>

          <p className="fade-up" style={{
            margin:`0 0 ${isMobile ? 40 : 64}px`,
            fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400,
            fontSize: isMobile ? 22 : isTablet ? 30 : 38,
            lineHeight:1.25, color:T.headingBlack,
          }}>
            The principles that guide everything we build.
          </p>

          <div style={{
            display:"grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            border:`1px solid ${T.borderLight}`,
            borderRadius:16,
            overflow:"hidden",
          }}>
            {PRINCIPLES.map((p, i) => {
              const isRightCol = i % 2 === 1;
              const isLastRow  = i >= 2;
              return (
                <div
                  key={p.title}
                  className={`fade-up principle-card d${i + 1}`}
                  style={{
                    padding: isMobile ? "36px 28px" : isTablet ? "40px 36px" : "52px 52px",
                    borderRight:  (!isMobile && !isRightCol) ? `1px solid ${T.borderLight}` : "none",
                    borderBottom: !isLastRow ? `1px solid ${T.borderLight}` : "none",
                    background: T.bg,
                    transition:"background 0.22s",
                  }}
                >
                  {/* Square icon box — white bg, border, rounded */}
                  <div style={{
                    width:72, height:72, borderRadius:10,
                    background:"#FFFFFF",
                    border:`1px solid ${T.borderLight}`,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    marginBottom:28,
                  }}>
                    <PrincipleIcon type={p.icon} />
                  </div>
                  <p style={{ margin:"0 0 14px", fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize: isMobile ? 19 : 22, color:T.dark, lineHeight:1.2 }}>{p.title}</p>
                  <p style={{ margin:0, fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14.5, lineHeight:1.75, color:"#6B6877" }}>{p.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          CAREERS
      ══════════════════════════════ */}
      <section style={{ width:"100%", background:T.bg, padding: isMobile ? "64px 0" : "88px 0" }}>
        <div style={{ maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px` }}>

          <span className="fade-up" style={{
            display:"block", marginBottom:20,
            fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:T.orange,
          }}>
            • Careers
          </span>

          <h2 className="fade-up d1" style={{
            margin:`0 0 ${isMobile ? 16 : 20}px`,
            fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
            fontSize: isMobile ? 30 : isTablet ? 40 : 52,
            lineHeight:1.08, color:T.headingBlack,
          }}>
            Help us <span style={{ color:T.primary }}>build</span> the future of<br />African payments.
          </h2>

          <p className="fade-up d2" style={{
            margin:`0 0 ${isMobile ? 40 : 56}px`,
            fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400,
            fontSize: isMobile ? 15 : 16, lineHeight:1.7, color:T.muted, maxWidth:560,
          }}>
            We're a fast-growing team based in Lagos with a remote-friendly culture. Join us if you love solving hard problems and want to have real impact across the continent.
          </p>

          <div style={{
            display:"grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 16 : 20,
          }}>
            {JOBS.map((job, i) => (
              <div
                key={i}
                className={`fade-up job-card d${(i % 2) + 1}`}
                style={{
                  background:T.white, borderRadius:12,
                  padding: isMobile ? "24px 22px" : "28px 28px",
                  display:"flex", flexDirection:"column", gap:10,
                  border:`1px solid ${T.borderLight}`,
                }}
              >
                <p style={{ margin:0, fontFamily:"DM Sans, sans-serif", fontWeight:700, fontSize: isMobile ? 15 : 17, color:T.dark, lineHeight:1.3 }}>{job.title}</p>
                <p style={{ margin:0, fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:T.primary }}>
                  {job.location} • {job.type}
                </p>
                <p style={{ margin:0, fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14, lineHeight:1.68, color:T.muted }}>{job.desc}</p>
                <button
                  style={{ alignSelf:"flex-start", fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:13, color:T.white, background:T.primary, border:"none", borderRadius:6, padding:"10px 22px", cursor:"pointer", transition:"opacity .15s", marginTop:6 }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >Apply Now</button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          BOTTOM CTA
      ══════════════════════════════ */}
      <section style={{
        width:"100%", background:T.bg,
        padding: isMobile ? "64px 0" : "88px 0 108px",
      }}>
        <div style={{ maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px` }}>
          <div style={{
            display:"grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "2fr 1fr 1fr",
            gap: isMobile ? 44 : isTablet ? 44 : 56,
            alignItems:"start",
          }}>

            {/* Left: heading + buttons */}
            <div className="fade-up">
              <h2 style={{
                margin:"0 0 16px",
                fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
                fontSize: isMobile ? 28 : isTablet ? 36 : 48,
                lineHeight:1.08, color:T.headingBlack, maxWidth:480,
              }}>
                Ready to shape the future of payments in Africa?
              </h2>
              <p style={{ margin:"0 0 28px", fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:15, lineHeight:1.65, color:T.muted, maxWidth:400 }}>
                Join a mission-driven team that's building infrastructure that matters.
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:12 }}>
                <button
                  className="cta-pulse"
                  onClick={ripple}
                  style={{ position:"relative", overflow:"hidden", fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:T.white, background:T.primary, border:"none", borderRadius:6, padding:"12px 24px", cursor:"pointer" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >Explore Open Roles</button>
                <button
                  style={{ fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14, color:T.dark, background:"#EFEFEF", border:"none", borderRadius:6, padding:"12px 24px", cursor:"pointer", transition:"background .15s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#E4DFEE")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#EFEFEF")}
                >Learn More About Our Culture</button>
              </div>
            </div>

            {/* Pricing details */}
            <div className="fade-up d2">
              <div style={{ width:44, height:44, borderRadius:8, background:"#EDE9FF", border:`1px solid ${T.borderLight}`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:16 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke={T.primary} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="7" cy="7" r="1.2" fill={T.primary}/>
                </svg>
              </div>
              <p style={{ margin:"0 0 8px", fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:16, color:T.dark, lineHeight:1.3 }}>See what you'll pay</p>
              <p style={{ margin:"0 0 14px", fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14, lineHeight:1.65, color:"#6B6877" }}>Integrated per-transaction pricing with no hidden fees.</p>
              <a href="/get-started" style={{ display:"inline-flex", alignItems:"center", gap:4, fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:14, color:T.primary, textDecoration:"none" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                Pricing details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke={T.primary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>

            {/* Integration options */}
            <div className="fade-up d3">
              <div style={{ width:44, height:44, borderRadius:8, background:"#EDE9FF", border:`1px solid ${T.borderLight}`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:16 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke={T.primary} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ margin:"0 0 8px", fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:16, color:T.dark, lineHeight:1.3 }}>Start building</p>
              <p style={{ margin:"0 0 14px", fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14, lineHeight:1.65, color:"#6B6877" }}>Get up and running with Payonus in as little as 10 minutes.</p>
              <a href="/get-started" style={{ display:"inline-flex", alignItems:"center", gap:4, fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:14, color:T.primary, textDecoration:"none" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                Integration options
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke={T.primary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
