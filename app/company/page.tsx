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
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "simplicity":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.8"/>
          <path d="M8 12h8M12 8v8" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      );
    case "africa":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke={c} strokeWidth="1.8"/>
          <path d="M2 12h4l2-3 3 6 2-4 2 2 3-3h4" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "trust":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12l2 2 4-4" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return null;
  }
}

/* ─── DATA ─── */
const PRINCIPLES = [
  { icon: "speed",      title: "Speed Obsessed",     desc: "Seconds matter. We fight every delay so businesses can operate at the true speed of commerce." },
  { icon: "simplicity", title: "Radical Simplicity",  desc: "Complex problems deserve simple solutions. One integration. One dashboard. One reliable API." },
  { icon: "africa",     title: "Built for Africa",    desc: "Designed for local realities — currencies, rails, mobile usage patterns, and regulatory environments." },
  { icon: "trust",      title: "Trust by Default",    desc: "Security, compliance, and transparency are non-negotiable. We protect every transaction like it's our own." },
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
    title:    "Product Designer",
    location: "Lagos",
    type:     "Full-time",
    desc:     "Shape the experience of Africa's most developer-loved payments platform — from API docs to dashboard flows.",
  },
  {
    title:    "Compliance & Regulatory Manager",
    location: "Lagos",
    type:     "Full-time",
    desc:     "Own our regulatory relationships across 14+ African markets and keep us ahead of evolving financial compliance requirements.",
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
        @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
        html, body { margin:0; padding:0; background:${T.bg}; }
        *, *::before, *::after { box-sizing:border-box; }
        img { display:block; }

        /* Scroll reveal */
        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.72s cubic-bezier(0.16,1,0.3,1), transform 0.72s cubic-bezier(0.16,1,0.3,1);
        }
        .fade-up.visible { opacity:1; transform:translateY(0); }
        .fade-up.d1 { transition-delay: 0.10s; }
        .fade-up.d2 { transition-delay: 0.20s; }
        .fade-up.d3 { transition-delay: 0.30s; }
        .fade-up.d4 { transition-delay: 0.40s; }

        /* Ripple */
        @keyframes rippleOut { from{transform:scale(0);opacity:0.5;} to{transform:scale(1);opacity:0;} }
        .ripple-effect { position:absolute; border-radius:50%; background:rgba(255,255,255,0.35); animation:rippleOut 0.55s ease-out forwards; pointer-events:none; }

        /* CTA pulse */
        @keyframes ctaPulse { 0%,100%{box-shadow:0 0 0 0 rgba(96,9,255,0.40);} 60%{box-shadow:0 0 0 14px rgba(96,9,255,0);} }
        .cta-pulse { animation: ctaPulse 2.8s ease-in-out infinite; }

        /* Principle card hover */
        .principle-card { transition: background 0.25s; }
        .principle-card:hover { background: #F8F5FF !important; }

        /* Job card hover */
        .job-card { transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s cubic-bezier(0.16,1,0.3,1); }
        .job-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(96,9,255,0.10); }

        /* Portrait image shimmer background */
        @keyframes portraitShimmer {
          0%   { background-position: 0% 50%;   }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%;   }
        }

        /* Underline accent */
        .accent-underline {
          text-decoration: underline;
          text-decoration-color: ${T.accent};
          text-underline-offset: 6px;
          text-decoration-thickness: 3px;
        }

        /* Footer link */
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
      <section style={{ width:"100%", background:T.bg, padding: isMobile ? "52px 0 56px" : isTablet ? "72px 0 72px" : "88px 0 80px" }}>
        <div style={{ maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px` }}>
          <div style={{
            display:"grid",
            gridTemplateColumns: isMobile ? "1fr" : "54fr 46fr",
            gap: isMobile ? 48 : isTablet ? 52 : 80,
            alignItems:"center",
          }}>

            {/* Left: text */}
            <div>
              <span className="fade-up" style={{
                fontFamily:"DM Sans, sans-serif", fontWeight:500,
                fontSize:13, letterSpacing:"0.08em", textTransform:"uppercase",
                color:T.orange, display:"block", marginBottom: isMobile ? 20 : 28,
              }}>
                Payonus
              </span>

              <h1 className="fade-up d1" style={{
                margin:`0 0 ${isMobile ? 16 : 24}px`,
                fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
                fontSize: isMobile ? 42 : isTablet ? 56 : 74,
                lineHeight:1.06, letterSpacing:"-0.02em", color:T.headingBlack,
              }}>
                Building the rails<br />for a borderless<br />
                <span style={{ color:T.primary }}>Africa.</span>
              </h1>

              <p className="fade-up d2" style={{
                margin:`0 0 ${isMobile ? 28 : 36}px`,
                fontFamily:"DM Sans, sans-serif", fontWeight:400,
                fontSize: isMobile ? 15 : 16, lineHeight:1.72, color:T.muted, maxWidth:430,
              }}>
                Payonus is on a mission to make moving money across Africa as simple, fast, and reliable as sending a message. Founded in Lagos, built for the continent.
              </p>

              <div className="fade-up d3" style={{ display:"flex", flexWrap:"wrap", gap:12 }}>
                <button
                  className="cta-pulse"
                  onClick={ripple}
                  style={{ position:"relative", overflow:"hidden", fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:T.white, background:T.primary, border:"none", borderRadius:6, padding:"12px 24px", cursor:"pointer", transition:"opacity .15s" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >Join the Team</button>
                <button
                  style={{ fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14, color:T.muted, background:"transparent", border:`1px solid ${T.muted}`, borderRadius:6, padding:"12px 24px", cursor:"pointer", transition:"background .15s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#E9DDFF")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >Our Story</button>
              </div>
            </div>

            {/* Right: stacked portrait cards */}
            {!isMobile && (
              <div className="fade-up d2" style={{ display:"flex", flexDirection:"column", gap:12 }}>
                {/* Portrait 1 — deep purple */}
                <div style={{
                  width:"100%", height: isTablet ? 134 : 164, borderRadius:12, overflow:"hidden",
                  background:"linear-gradient(135deg, #2D0080 0%, #6009FF 55%, #9B59F5 100%)",
                  backgroundSize:"200% 200%",
                  animation:"portraitShimmer 8s ease infinite",
                  display:"flex", alignItems:"flex-end", padding:"18px 20px",
                }}>
                  <div style={{ width:36, height:36, borderRadius:"50%", background:"rgba(255,255,255,0.18)", border:"1.5px solid rgba(255,255,255,0.35)" }} />
                  <div style={{ marginLeft:10, display:"flex", flexDirection:"column", gap:5 }}>
                    <div style={{ width:80, height:7, borderRadius:4, background:"rgba(255,255,255,0.30)" }} />
                    <div style={{ width:55, height:5, borderRadius:4, background:"rgba(255,255,255,0.18)" }} />
                  </div>
                </div>
                {/* Portrait 2 — warm golden */}
                <div style={{
                  width:"100%", height: isTablet ? 164 : 204, borderRadius:12, overflow:"hidden",
                  background:"linear-gradient(135deg, #C47D0E 0%, #F4B249 50%, #FDDEA0 100%)",
                  backgroundSize:"200% 200%",
                  animation:"portraitShimmer 10s ease infinite 1s",
                  display:"flex", alignItems:"flex-end", padding:"18px 20px",
                }}>
                  <div style={{ width:36, height:36, borderRadius:"50%", background:"rgba(255,255,255,0.25)", border:"1.5px solid rgba(255,255,255,0.45)" }} />
                  <div style={{ marginLeft:10, display:"flex", flexDirection:"column", gap:5 }}>
                    <div style={{ width:90, height:7, borderRadius:4, background:"rgba(255,255,255,0.35)" }} />
                    <div style={{ width:60, height:5, borderRadius:4, background:"rgba(255,255,255,0.22)" }} />
                  </div>
                </div>
                {/* Portrait 3 — deep navy */}
                <div style={{
                  width:"100%", height: isTablet ? 134 : 164, borderRadius:12, overflow:"hidden",
                  background:"linear-gradient(135deg, #0F0C36 0%, #1D0057 55%, #3A1580 100%)",
                  backgroundSize:"200% 200%",
                  animation:"portraitShimmer 9s ease infinite 2s",
                  display:"flex", alignItems:"flex-end", padding:"18px 20px",
                }}>
                  <div style={{ width:36, height:36, borderRadius:"50%", background:"rgba(255,255,255,0.15)", border:"1.5px solid rgba(255,255,255,0.28)" }} />
                  <div style={{ marginLeft:10, display:"flex", flexDirection:"column", gap:5 }}>
                    <div style={{ width:70, height:7, borderRadius:4, background:"rgba(255,255,255,0.25)" }} />
                    <div style={{ width:50, height:5, borderRadius:4, background:"rgba(255,255,255,0.15)" }} />
                  </div>
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
        width:"100%", background:T.white,
        padding: isMobile ? "56px 0 52px" : isTablet ? "80px 0 72px" : "96px 0 88px",
        borderTop:`1px solid ${T.borderLight}`,
        borderBottom:`1px solid ${T.borderLight}`,
      }}>
        <div style={{ maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px` }}>
          <div className="fade-up" style={{ maxWidth: isMobile ? "100%" : isTablet ? 680 : 880 }}>
            {/* Opening quote mark */}
            <div style={{
              fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
              fontSize: isMobile ? 72 : 100, lineHeight:0.6,
              color:T.primary, opacity:0.18, marginBottom: isMobile ? 16 : 24,
              userSelect:"none",
            }}>
              "
            </div>
            <p style={{
              margin:`0 0 ${isMobile ? 28 : 36}px`,
              fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
              fontSize: isMobile ? 22 : isTablet ? 32 : 46,
              lineHeight:1.2, color:T.headingBlack,
            }}>
              Africa deserves payment infrastructure that moves at the speed of its ambition.
            </p>
            <div style={{ display:"flex", alignItems:"center", gap:14 }}>
              <div style={{ width:40, height:40, borderRadius:"50%", background:"linear-gradient(135deg,#6009FF,#9B59F5)", flexShrink:0 }} />
              <div>
                <p style={{ margin:"0 0 2px", fontFamily:"DM Sans, sans-serif", fontWeight:700, fontSize:15, color:T.dark }}>Onyiye Olisah.</p>
                <p style={{ margin:0, fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14, color:T.muted }}>Founder &amp; CEO, PayOnUs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          MISSION / VISION
      ══════════════════════════════ */}
      <section style={{ width:"100%", background:"#F5F0FF" }}>
        <div style={{ maxWidth:1440, margin:"0 auto", padding:`${isMobile ? 56 : 80}px ${hPad}px ${isMobile ? 52 : 72}px` }}>
          <div style={{
            display:"grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 48 : isTablet ? 52 : 88,
          }}>

            {/* Our Mission */}
            <div className="fade-up">
              <span style={{
                fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:12,
                letterSpacing:"0.08em", textTransform:"uppercase",
                color:T.orange, display:"block", marginBottom:20,
              }}>
                • Our Mission
              </span>
              <h2 style={{
                margin:"0 0 18px",
                fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
                fontSize: isMobile ? 22 : isTablet ? 26 : 30, lineHeight:1.25, color:T.headingBlack,
              }}>
                Make moving money across Africa simple, instant, and accessible for every business.
              </h2>
              <p style={{ margin:0, fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14.5, lineHeight:1.78, color:T.muted }}>
                We eliminate the friction, delays, and complexity that have held back African commerce for decades. Whether it's paying vendors, receiving customer payments, or moving funds across borders — Payonus makes it seamless.
              </p>
            </div>

            {/* Our Vision */}
            <div className="fade-up d1">
              <span style={{
                fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:12,
                letterSpacing:"0.08em", textTransform:"uppercase",
                color:T.orange, display:"block", marginBottom:20,
              }}>
                • Our Vision
              </span>
              <h2 style={{
                margin:"0 0 18px",
                fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
                fontSize: isMobile ? 22 : isTablet ? 26 : 30, lineHeight:1.25, color:T.headingBlack,
              }}>
                A future where financial borders no longer limit African potential.
              </h2>
              <p style={{ margin:0, fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14.5, lineHeight:1.78, color:T.muted }}>
                We envision a continent where any business — from a Lagos startup to a Nairobi merchant — can send and receive money instantly across 50+ African markets, just like sending a WhatsApp message.
              </p>
            </div>

          </div>
        </div>

        {/* Full-width photo pair */}
        <div className="fade-up" style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr" }}>
          <div style={{ height: isMobile ? 220 : isTablet ? 300 : 380, overflow:"hidden", position:"relative" }}>
            <img
              src="/africa-map.png"
              alt="Africa map"
              style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", display:"block" }}
            />
            <div style={{ position:"absolute", inset:0, background:"rgba(96,9,255,0.30)" }} />
          </div>
          <div style={{ height: isMobile ? 220 : isTablet ? 300 : 380, overflow:"hidden", position:"relative" }}>
            <img
              src="/backbone-hero.png"
              alt="Payment infrastructure"
              className="banner-inner-image"
              style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", display:"block" }}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PRINCIPLES
      ══════════════════════════════ */}
      <section style={{ width:"100%", background:T.white, padding: isMobile ? "64px 0 80px" : "88px 0 108px" }}>
        <div style={{ maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px` }}>

          <p className="fade-up" style={{
            margin:`0 0 ${isMobile ? 44 : 68}px`,
            fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
            fontSize: isMobile ? 24 : isTablet ? 34 : 44,
            lineHeight:1.2, color:T.headingBlack, maxWidth:580,
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
                    padding: isMobile ? "32px 24px" : isTablet ? "36px 32px" : "52px",
                    borderRight:  (!isMobile && !isRightCol) ? `1px solid ${T.borderLight}` : "none",
                    borderBottom: !isLastRow ? `1px solid ${T.borderLight}` : "none",
                    background: T.white,
                  }}
                >
                  <div style={{
                    width:48, height:48, borderRadius:"50%",
                    background:"#EDE9FF",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    marginBottom:22,
                  }}>
                    <PrincipleIcon type={p.icon} />
                  </div>
                  <p style={{ margin:"0 0 12px", fontFamily:"DM Sans, sans-serif", fontWeight:700, fontSize: isMobile ? 17 : 18, color:T.dark }}>{p.title}</p>
                  <p style={{ margin:0, fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14.5, lineHeight:1.75, color:T.muted }}>{p.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          CAREERS
      ══════════════════════════════ */}
      <section style={{ width:"100%", background:"#F5F0FF", padding: isMobile ? "64px 0" : "88px 0" }}>
        <div style={{ maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px` }}>

          <span className="fade-up" style={{
            fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:12,
            letterSpacing:"0.08em", textTransform:"uppercase",
            color:T.orange, display:"block", marginBottom:22,
          }}>
            Openings
          </span>

          <h2 className="fade-up d1" style={{
            margin:`0 0 ${isMobile ? 14 : 18}px`,
            fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
            fontSize: isMobile ? 28 : isTablet ? 38 : 50,
            lineHeight:1.1, color:T.headingBlack,
          }}>
            Help us{" "}
            <span className="accent-underline" style={{ color:T.headingBlack }}>build</span>
            {" "}the future<br />of African payments.
          </h2>

          <p className="fade-up d2" style={{
            margin:`0 0 ${isMobile ? 40 : 56}px`,
            fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:15, lineHeight:1.7,
            color:T.muted, maxWidth:500,
          }}>
            We're a fast-growing team based in Lagos with a remote-friendly culture. Join us if you love solving hard problems and want to have real impact across the continent.
          </p>

          <div style={{
            display:"grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: 16,
          }}>
            {JOBS.map((job, i) => (
              <div
                key={i}
                className={`fade-up job-card d${(i % 2) + 1}`}
                style={{
                  background:T.white, borderRadius:14,
                  padding: isMobile ? "24px 20px" : "28px 28px",
                  display:"flex", flexDirection:"column", gap:12,
                  border:`1px solid ${T.borderLight}`,
                }}
              >
                <p style={{ margin:0, fontFamily:"DM Sans, sans-serif", fontWeight:700, fontSize: isMobile ? 15 : 16, color:T.dark, lineHeight:1.35 }}>{job.title}</p>
                <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                  <span style={{
                    display:"inline-flex", alignItems:"center", gap:5,
                    fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:12,
                    color:T.primary, background:"#EDE9FF", borderRadius:999, padding:"4px 12px",
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill={T.primary}/>
                    </svg>
                    {job.location}
                  </span>
                  <span style={{
                    display:"inline-flex", alignItems:"center",
                    fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:12,
                    color:"#6B6877", background:"#F3F0F8", borderRadius:999, padding:"4px 12px",
                  }}>
                    {job.type}
                  </span>
                </div>
                <p style={{ margin:0, fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:13.5, lineHeight:1.7, color:T.muted, flex:1 }}>{job.desc}</p>
                <button
                  style={{ alignSelf:"flex-start", fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:13, color:T.white, background:T.primary, border:"none", borderRadius:6, padding:"9px 20px", cursor:"pointer", transition:"opacity .15s", marginTop:4 }}
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
        padding: isMobile ? "64px 0" : "92px 0 108px",
      }}>
        <div style={{ maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px` }}>
          <div style={{
            display:"grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "1.9fr 1fr 1fr",
            gap: isMobile ? 44 : isTablet ? 44 : 52,
            alignItems:"start",
          }}>

            {/* Left: heading + buttons */}
            <div className="fade-up">
              <h2 style={{
                margin:"0 0 18px",
                fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
                fontSize: isMobile ? 28 : isTablet ? 36 : 46,
                lineHeight:1.1, color:T.headingBlack, maxWidth:480,
              }}>
                Ready to shape the future of payments in Africa?
              </h2>
              <p style={{ margin:"0 0 32px", fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:15, lineHeight:1.68, color:T.muted, maxWidth:400 }}>
                Join a mission-driven team that's building infrastructure that matters across the continent.
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:12 }}>
                <button
                  className="cta-pulse"
                  onClick={ripple}
                  style={{ position:"relative", overflow:"hidden", fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:T.white, background:T.primary, border:"none", borderRadius:6, padding:"12px 24px", cursor:"pointer", transition:"opacity .15s" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >Explore Open Roles</button>
                <button
                  style={{ fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14, color:T.muted, background:"transparent", border:`1px solid ${T.muted}`, borderRadius:6, padding:"12px 24px", cursor:"pointer", transition:"background .15s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#E9DDFF")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >Learn About Our Culture</button>
              </div>
            </div>

            {/* Pricing details */}
            <div className="fade-up d2">
              <div style={{ width:48, height:48, borderRadius:10, background:"#EDE9FF", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:18 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke={T.primary} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="7" cy="7" r="1.2" fill={T.primary}/>
                </svg>
              </div>
              <p style={{ margin:"0 0 8px", fontFamily:"DM Sans, sans-serif", fontWeight:700, fontSize:16, color:T.dark, lineHeight:1.3 }}>See what you'll pay</p>
              <p style={{ margin:"0 0 14px", fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:13.5, lineHeight:1.68, color:"#6B6877" }}>Integrated per-transaction pricing with no hidden fees.</p>
              <a href="#" style={{ display:"inline-flex", alignItems:"center", gap:4, fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:14, color:T.primary, textDecoration:"none" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                Pricing details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke={T.primary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>

            {/* Integration options */}
            <div className="fade-up d3">
              <div style={{ width:48, height:48, borderRadius:10, background:"#EDE9FF", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:18 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke={T.primary} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ margin:"0 0 8px", fontFamily:"DM Sans, sans-serif", fontWeight:700, fontSize:16, color:T.dark, lineHeight:1.3 }}>Start building</p>
              <p style={{ margin:"0 0 14px", fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:13.5, lineHeight:1.68, color:"#6B6877" }}>Get up and running with Payonus in as little as 10 minutes.</p>
              <a href="#" style={{ display:"inline-flex", alignItems:"center", gap:4, fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:14, color:T.primary, textDecoration:"none" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
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
