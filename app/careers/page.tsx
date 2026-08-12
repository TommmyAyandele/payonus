"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useBreakpoint } from "../use-breakpoint";
import Navbar, { T } from "../Navbar";
import Footer from "../Footer";
import HeroBg from "../HeroBg";
import { JOBS } from "./jobs-data";

/* ─── SCROLL REVEAL ─── */
function useScrollReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
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
    position: "absolute", width: `${size}px`, height: `${size}px`,
    left: `${e.clientX - rect.left - size / 2}px`,
    top:  `${e.clientY - rect.top  - size / 2}px`,
  });
  span.className = "ripple-effect";
  btn.appendChild(span);
  setTimeout(() => span.remove(), 600);
}

/* ─── DATA ─── */
const PERKS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke={T.primary} strokeWidth="1.6"/>
        <path d="M12 3c-3 3-5 6-5 10s2 7 5 10M12 3c3 3 5 6 5 10s-2 7-5 10" stroke={T.primary} strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M3 12h18" stroke={T.primary} strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: "Remote Friendly",
    desc:  "Work from anywhere across Africa. We care about output, not office hours.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "High Impact",
    desc:  "Every feature you ship reaches real businesses moving real money across the continent.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 20V10M6 20V14M18 20V4" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    title: "Growth Budget",
    desc:  "Annual learning allowance for courses, conferences, and books — no approvals needed.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="5" stroke={T.primary} strokeWidth="1.6"/>
        <path d="M3 21a9 9 0 0 1 18 0" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M12 13v4M10 15h4" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Competitive Pay",
    desc:  "Market-leading salaries benchmarked against global fintech standards, reviewed every year.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Health Coverage",
    desc:  "Comprehensive HMO for you and your dependants, from day one.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke={T.primary} strokeWidth="1.6"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Great Team",
    desc:  "Work alongside people who are genuinely excited about the problem we're solving.",
  },
];

const DEPTS = ["All", ...Array.from(new Set(JOBS.map(j => j.dept)))];

/* ═══════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════ */
export default function CareersPage() {
  useScrollReveal();
  const router = useRouter();
  const { isMobile, isTablet } = useBreakpoint();
  const [scrolled,  setScrolled]  = React.useState(false);
  const [scrollPct, setScrollPct] = React.useState(0);
  const [activeDept, setActiveDept] = React.useState("All");

  const hPad = isMobile ? 20 : isTablet ? 48 : 80;

  React.useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 10);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(max > 0 ? window.scrollY / max : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const filtered = activeDept === "All" ? JOBS : JOBS.filter(j => j.dept === activeDept);

  React.useEffect(() => {
    const els = document.querySelectorAll("#open-roles .fade-up:not(.visible)");
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      }),
      { threshold: 0.08 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [activeDept]);

  return (
    <>
      <style>{`
        html,body{margin:0;padding:0;background:${T.bg};}
        *,*::before,*::after{box-sizing:border-box;}
        img{display:block;}

        .fade-up{opacity:0;transform:translateY(32px);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1);}
        .fade-up.visible{opacity:1;transform:translateY(0);}
        .fade-up.d1{transition-delay:.10s;}
        .fade-up.d2{transition-delay:.20s;}
        .fade-up.d3{transition-delay:.30s;}
        .fade-up.d4{transition-delay:.40s;}

        @keyframes rippleOut{from{transform:scale(0);opacity:.5;}to{transform:scale(1);opacity:0;}}
        .ripple-effect{position:absolute;border-radius:50%;background:rgba(255,255,255,.35);animation:rippleOut .55s ease-out forwards;pointer-events:none;}

        @keyframes ctaPulse{0%,100%{box-shadow:0 0 0 0 rgba(96,9,255,.40);}60%{box-shadow:0 0 0 14px rgba(96,9,255,0);}}
        .cta-pulse{animation:ctaPulse 2.8s ease-in-out infinite;}

        .perk-card{transition:background .22s;}
        .perk-card:hover{background:#F5EFFE !important;}

        .job-card{transition:transform .28s cubic-bezier(.16,1,.3,1),box-shadow .28s;}
        .job-card:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(96,9,255,.09);}

        .dept-pill{font-family:"DM Sans",sans-serif;font-size:13px;font-weight:500;border:1px solid ${T.borderLight};border-radius:20px;padding:7px 18px;cursor:pointer;transition:all .18s;background:transparent;color:${T.muted};}
        .dept-pill:hover{border-color:${T.primary};color:${T.primary};}
        .dept-pill.active{background:${T.primary};color:#fff;border-color:${T.primary};}

        .footer-link{position:relative;display:inline-block;}
        .footer-link::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:1px;background:${T.primary};transition:width .3s cubic-bezier(.16,1,.3,1);}
        .footer-link:hover::after{width:100%;}
      `}</style>

      {/* Scroll progress */}
      <div style={{position:"fixed",top:0,left:0,right:0,height:3,zIndex:200,pointerEvents:"none"}}>
        <div style={{height:"100%",width:`${scrollPct*100}%`,background:"linear-gradient(90deg,#6009FF 0%,#F4B249 100%)",transition:"width .1s linear",borderRadius:"0 2px 2px 0",boxShadow:"0 0 8px rgba(96,9,255,.4)"}}/>
      </div>

      <Navbar scrolled={scrolled} />

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section style={{
        position:"relative", width:"100%", background:T.bg,
        overflow:"hidden",
        padding: isMobile ? "64px 0 80px" : "88px 0 120px",
      }}>
        <HeroBg />
        <div style={{position:"relative",zIndex:1,maxWidth:1440,margin:"0 auto",padding:`0 ${hPad}px`,display:"flex",flexDirection:"column",alignItems:"flex-start"}}>

          <span className="fade-up" style={{
            display:"block", marginBottom: isMobile ? 20 : 28,
            fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:T.orange,
          }}>• Careers</span>

          <h1 className="fade-up d1" style={{
            margin:`0 0 ${isMobile ? 20 : 28}px`,
            fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
            fontSize: isMobile ? 48 : isTablet ? 60 : 72,
            lineHeight:1.04, letterSpacing:"-0.02em", color:T.headingBlack,
          }}>
            Work that matters,<br />at the speed of <span style={{color:T.primary}}>Africa.</span>
          </h1>

          <p className="fade-up d2" style={{
            margin:`0 0 ${isMobile ? 36 : 48}px`,
            fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400,
            fontSize: isMobile ? 15 : 17, lineHeight:1.7, color:T.muted, maxWidth:520,
          }}>
            Join a mission-driven team building payment infrastructure for a continent on the move. We're hiring across engineering, growth, and product.
          </p>

          <div className="fade-up d3" style={{display:"flex",flexWrap:"wrap",gap:12}}>
            <button
              className="cta-pulse"
              onClick={e => { ripple(e); document.getElementById("open-roles")?.scrollIntoView({ behavior:"smooth", block:"start" }); }}
              style={{
                position:"relative", overflow:"hidden",
                fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:14,
                color:T.white, background:T.primary,
                border:"none", borderRadius:6, padding:"13px 24px", cursor:"pointer",
              }}
              onMouseEnter={e=>(e.currentTarget.style.opacity="0.88")}
              onMouseLeave={e=>(e.currentTarget.style.opacity="1")}
            >See Open Roles</button>
            <a
              href="/support"
              style={{
                fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14,
                color:T.dark, background:"transparent",
                border:`1px solid ${T.dark}`, borderRadius:6,
                padding:"12px 24px", cursor:"pointer", textDecoration:"none",
                transition:"background .15s", display:"inline-block",
              }}
              onMouseEnter={e=>(e.currentTarget.style.background="#E9DDFF")}
              onMouseLeave={e=>(e.currentTarget.style.background="transparent")}
            >Get in Touch</a>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          PERKS / CULTURE
      ══════════════════════════════ */}
      <section style={{width:"100%",background:T.white,padding: isMobile ? "64px 0" : "88px 0"}}>
        <div style={{maxWidth:1440,margin:"0 auto",padding:`0 ${hPad}px`}}>

          <span className="fade-up" style={{
            display:"block", marginBottom:20,
            fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:13, color:T.orange,
          }}>— Why Payonus</span>

          <h2 className="fade-up d1" style={{
            margin:`0 0 ${isMobile ? 40 : 56}px`,
            fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
            fontSize: isMobile ? 32 : isTablet ? 44 : 56,
            lineHeight:1.1, color:T.headingBlack,
          }}>
            A team worth<br /><span style={{color:T.primary}}>joining.</span>
          </h2>

          {(() => {
            const cols = isMobile ? 1 : isTablet ? 2 : 3;
            return (
              <div style={{
                display:"grid",
                gridTemplateColumns: `repeat(${cols}, 1fr)`,
                border:`1px solid ${T.borderLight}`,
                borderRadius:16,
                overflow:"hidden",
              }}>
                {PERKS.map((perk, i) => {
                  const isLastInRow = (i + 1) % cols === 0;
                  const isLastRow   = i >= PERKS.length - cols;
                  return (
                    <div
                      key={perk.title}
                      className={`fade-up perk-card d${(i % 4) + 1}`}
                      style={{
                        background:T.bg,
                        padding: isMobile ? "28px 24px" : "36px 32px",
                        borderRight:  !isLastInRow ? `1px solid ${T.borderLight}` : "none",
                        borderBottom: !isLastRow   ? `1px solid ${T.borderLight}` : "none",
                      }}
                    >
                      <div style={{
                        width:48, height:48, borderRadius:10,
                        background:"#EDE9FF", border:`1px solid ${T.borderLight}`,
                        display:"flex", alignItems:"center", justifyContent:"center",
                        marginBottom:20,
                      }}>
                        {perk.icon}
                      </div>
                      <p style={{margin:"0 0 10px",fontFamily:"DM Sans, sans-serif",fontWeight:600,fontSize: isMobile ? 16 : 17,color:T.dark}}>{perk.title}</p>
                      <p style={{margin:0,fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:14,lineHeight:1.72,color:T.muted}}>{perk.desc}</p>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>
      </section>

      {/* ══════════════════════════════
          OPEN ROLES
      ══════════════════════════════ */}
      <section id="open-roles" style={{width:"100%",background:T.bg,padding: isMobile ? "64px 0 80px" : "88px 0 112px", scrollMarginTop:80}}>
        <div style={{maxWidth:1440,margin:"0 auto",padding:`0 ${hPad}px`}}>

          <span className="fade-up" style={{
            display:"block", marginBottom:20,
            fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:13, color:T.orange,
          }}>— Open Roles</span>

          <h2 className="fade-up d1" style={{
            margin:`0 0 ${isMobile ? 28 : 36}px`,
            fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
            fontSize: isMobile ? 32 : isTablet ? 44 : 56,
            lineHeight:1.1, color:T.headingBlack,
          }}>
            Find your role<br />at <span style={{color:T.primary}}>Payonus.</span>
          </h2>

          {/* Department filter pills */}
          <div className="fade-up d2" style={{display:"flex",flexWrap:"wrap",gap:10,marginBottom: isMobile ? 32 : 44}}>
            {DEPTS.map(dept => (
              <button
                key={dept}
                className={`dept-pill${activeDept === dept ? " active" : ""}`}
                onClick={() => setActiveDept(dept)}
              >{dept}</button>
            ))}
          </div>

          {/* Job cards */}
          <div style={{
            display:"grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 16 : 20,
          }}>
            {filtered.map((job, i) => (
              <div
                key={`${job.title}-${i}`}
                className={`fade-up job-card d${(i % 2) + 1}`}
                style={{
                  background:T.white, borderRadius:12,
                  padding: isMobile ? "24px 22px" : "28px 28px",
                  display:"flex", flexDirection:"column", gap:10,
                  border:`1px solid ${T.borderLight}`,
                }}
              >
                <span style={{
                  alignSelf:"flex-start",
                  fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:11,
                  color:T.primary, background:"#EDE9FF",
                  borderRadius:20, padding:"3px 10px",
                  textTransform:"uppercase", letterSpacing:"0.06em",
                }}>{job.dept}</span>
                <p style={{margin:0,fontFamily:"DM Sans, sans-serif",fontWeight:700,fontSize: isMobile ? 15 : 17,color:T.dark,lineHeight:1.3}}>{job.title}</p>
                <p style={{margin:0,fontFamily:"DM Sans, sans-serif",fontWeight:500,fontSize:13,color:T.muted}}>
                  {job.location} · {job.type}
                </p>
                <p style={{margin:0,fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:14,lineHeight:1.68,color:T.muted}}>{job.desc}</p>
                <button
                  onClick={e => { ripple(e); router.push(`/careers/${job.slug}`); }}
                  style={{
                    position:"relative", overflow:"hidden",
                    alignSelf:"flex-start",
                    fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:13,
                    color:T.white, background:T.primary,
                    border:"none", borderRadius:6, padding:"10px 22px",
                    cursor:"pointer", transition:"opacity .15s", marginTop:6,
                  }}
                  onMouseEnter={e=>(e.currentTarget.style.opacity="0.88")}
                  onMouseLeave={e=>(e.currentTarget.style.opacity="1")}
                >Apply Now</button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          BOTTOM CTA — open application
      ══════════════════════════════ */}
      <section style={{width:"100%",background:T.bg,padding: isMobile ? "64px 0" : "88px 0 108px"}}>
        <div style={{maxWidth:1440,margin:"0 auto",padding:`0 ${hPad}px`}}>
          <div style={{
            display:"grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "2fr 1fr 1fr",
            gap: isMobile ? 40 : isTablet ? 40 : 56,
            alignItems:"start",
          }}>
            {/* Left — always visible */}
            <div>
              <h2 style={{
                margin:"0 0 16px",
                fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
                fontSize: isMobile ? 28 : isTablet ? 36 : 44,
                lineHeight:1.1, color:T.headingBlack,
              }}>
                Don't see a role<br />that <span style={{color:T.primary}}>fits?</span>
              </h2>
              <p style={{
                margin:"0 0 28px",
                fontFamily:"DM Sans, sans-serif", fontWeight:400,
                fontSize:15, lineHeight:1.65, color:T.muted, maxWidth:440,
              }}>
                We're always looking for exceptional people. Send us your CV and tell us how you'd contribute — we'll reach out when the right opportunity comes up.
              </p>
              <div style={{display:"flex",flexWrap:"wrap",gap:12}}>
                <a
                  href="mailto:careers@payonus.com"
                  className="cta-pulse"
                  style={{
                    display:"inline-flex", alignItems:"center", gap:8,
                    fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14,
                    color:T.white, background:T.primary,
                    borderRadius:6, padding:"12px 20px",
                    textDecoration:"none",
                    transition:"transform 0.4s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  onMouseMove={e=>{ const r=e.currentTarget.getBoundingClientRect(); const x=(e.clientX-r.left-r.width/2)*0.25; const y=(e.clientY-r.top-r.height/2)*0.25; e.currentTarget.style.transform=`translate(${x}px,${y}px)`; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=""; }}
                >
                  Send Open Application
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <button
                  onClick={() => document.getElementById("open-roles")?.scrollIntoView({ behavior:"smooth" })}
                  style={{
                    fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14,
                    color:T.muted, background:"transparent",
                    border:`1px solid ${T.muted}`, borderRadius:6,
                    padding:"12px 20px", cursor:"pointer", transition:"background .15s",
                  }}
                  onMouseEnter={e=>(e.currentTarget.style.background="#E9DDFF")}
                  onMouseLeave={e=>(e.currentTarget.style.background="transparent")}
                >Browse Open Roles</button>
              </div>
            </div>

            {/* Right columns — desktop only */}
            {!isMobile && !isTablet && (<>
              <div>
                <div style={{width:44,height:44,borderRadius:10,background:"#EDE9FF",border:`1px solid ${T.borderLight}`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16}}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke={T.primary} strokeWidth="1.6"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p style={{margin:"0 0 8px",fontFamily:"DM Sans, sans-serif",fontWeight:700,fontSize:16,lineHeight:1.3,color:T.dark}}>Remote-first culture</p>
                <p style={{margin:"0 0 14px",fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:13.5,lineHeight:1.65,color:T.muted}}>We hire the best people across Africa, regardless of where they're based.</p>
                <a href="/careers#perks" className="arrow-link" style={{display:"inline-flex",alignItems:"center",gap:4,fontFamily:"DM Sans, sans-serif",fontWeight:500,fontSize:13,color:T.primary,textDecoration:"none"}}
                >Why Payonus <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke={T.primary} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
              </div>

              <div>
                <div style={{width:44,height:44,borderRadius:10,background:"#EDE9FF",border:`1px solid ${T.borderLight}`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16}}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11.9 19.79 19.79 0 0 1 1 3.27 2 2 0 0 1 2.96 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16z" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p style={{margin:"0 0 8px",fontFamily:"DM Sans, sans-serif",fontWeight:700,fontSize:16,lineHeight:1.3,color:T.dark}}>Hiring questions?</p>
                <p style={{margin:"0 0 14px",fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:13.5,lineHeight:1.65,color:T.muted}}>Reach our talent team directly. We respond to every inquiry within two business days.</p>
                <a href="mailto:careers@payonus.com" className="arrow-link" style={{display:"inline-flex",alignItems:"center",gap:4,fontFamily:"DM Sans, sans-serif",fontWeight:500,fontSize:13,color:T.primary,textDecoration:"none"}}
                >careers@payonus.com <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke={T.primary} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
              </div>
            </>)}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
