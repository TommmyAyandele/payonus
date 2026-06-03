"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { useBreakpoint } from "../../use-breakpoint";
import Navbar, { T } from "../../Navbar";
import Footer from "../../Footer";
import HeroBg from "../../HeroBg";
import { JOBS } from "../jobs-data";

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
function ripple(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
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

export default function JobDetailPage() {
  useScrollReveal();
  const params    = useParams();
  const router    = useRouter();
  const { isMobile, isTablet } = useBreakpoint();

  const [scrolled,  setScrolled]  = React.useState(false);
  const [scrollPct, setScrollPct] = React.useState(0);

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

  const job = JOBS.find(j => j.slug === params.slug);

  if (!job) {
    return (
      <>
        <Navbar scrolled={false} />
        <div style={{
          minHeight:"60vh", display:"flex", flexDirection:"column",
          alignItems:"center", justifyContent:"center", gap:20,
          padding:"80px 24px", fontFamily:"DM Sans, sans-serif",
        }}>
          <p style={{ fontSize:18, color:T.muted }}>Role not found.</p>
          <button
            onClick={() => router.push("/careers")}
            style={{
              fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14,
              color:T.white, background:T.primary, border:"none",
              borderRadius:6, padding:"12px 24px", cursor:"pointer",
            }}
          >Back to Careers</button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
        html,body{margin:0;padding:0;background:${T.bg};}
        *,*::before,*::after{box-sizing:border-box;}
        img{display:block;}

        .fade-up{opacity:0;transform:translateY(32px);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1);}
        .fade-up.visible{opacity:1;transform:translateY(0);}
        .fade-up.d1{transition-delay:.10s;}
        .fade-up.d2{transition-delay:.20s;}
        .fade-up.d3{transition-delay:.30s;}

        @keyframes rippleOut{from{transform:scale(0);opacity:.5;}to{transform:scale(1);opacity:0;}}
        .ripple-effect{position:absolute;border-radius:50%;background:rgba(255,255,255,.35);animation:rippleOut .55s ease-out forwards;pointer-events:none;}

        .back-btn{transition:color .15s,background .15s;}
        .back-btn:hover{color:${T.primary}!important;}

        .check-item{display:flex;align-items:flex-start;gap:12px;margin-bottom:14px;}
        .check-icon{flex-shrink:0;margin-top:2px;}
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
        padding: isMobile ? "64px 0 72px" : "88px 0 104px",
      }}>
        <HeroBg />
        <div style={{position:"relative",zIndex:1,maxWidth:1440,margin:"0 auto",padding:`0 ${hPad}px`}}>

          {/* Breadcrumb */}
          <div className="fade-up" style={{display:"flex",alignItems:"center",gap:8,marginBottom: isMobile ? 28 : 36}}>
            <button
              className="back-btn"
              onClick={() => router.push("/careers")}
              style={{
                fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:13,
                color:T.muted, background:"none", border:"none", cursor:"pointer",
                display:"flex", alignItems:"center", gap:6, padding:0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M5 12l7-7M5 12l7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              All Roles
            </button>
            <span style={{color:T.borderLight,fontSize:14}}>/</span>
            <span style={{fontFamily:"DM Sans, sans-serif",fontSize:13,color:T.muted}}>{job.dept}</span>
          </div>

          {/* Dept badge */}
          <span className="fade-up d1" style={{
            display:"inline-block", marginBottom:18,
            fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:11,
            color:T.primary, background:"#EDE9FF",
            borderRadius:20, padding:"4px 12px",
            textTransform:"uppercase", letterSpacing:"0.06em",
          }}>{job.dept}</span>

          <h1 className="fade-up d1" style={{
            margin:`0 0 ${isMobile ? 18 : 24}px`,
            fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
            fontSize: isMobile ? 36 : isTablet ? 48 : 58,
            lineHeight:1.08, letterSpacing:"-0.02em", color:T.headingBlack,
            maxWidth:760,
          }}>{job.title}</h1>

          <div className="fade-up d2" style={{display:"flex",flexWrap:"wrap",gap: isMobile ? 12 : 20,marginBottom: isMobile ? 28 : 36}}>
            <span style={{
              display:"flex", alignItems:"center", gap:7,
              fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:T.muted,
            }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke={T.muted} strokeWidth="1.6"/>
                <circle cx="12" cy="9" r="2.5" stroke={T.muted} strokeWidth="1.6"/>
              </svg>
              {job.location}
            </span>
            <span style={{
              display:"flex", alignItems:"center", gap:7,
              fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:T.muted,
            }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke={T.muted} strokeWidth="1.6"/>
                <path d="M16 2v4M8 2v4M3 10h18" stroke={T.muted} strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
              {job.type}
            </span>
          </div>

          <div className="fade-up d3" style={{display:"flex",flexWrap:"wrap",gap:12}}>
            <a
              href={`mailto:careers@payonus.com?subject=Application: ${encodeURIComponent(job.title)}`}
              onClick={e => ripple(e as unknown as React.MouseEvent<HTMLAnchorElement>)}
              style={{
                position:"relative", overflow:"hidden", display:"inline-block",
                fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:14,
                color:T.white, background:T.primary,
                borderRadius:6, padding:"13px 28px",
                textDecoration:"none", transition:"opacity .15s",
              }}
              onMouseEnter={e=>(e.currentTarget.style.opacity="0.88")}
              onMouseLeave={e=>(e.currentTarget.style.opacity="1")}
            >Apply for This Role</a>
            <button
              onClick={() => router.push("/careers")}
              style={{
                fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14,
                color:T.dark, background:"transparent",
                border:`1px solid ${T.dark}`, borderRadius:6,
                padding:"12px 24px", cursor:"pointer",
                transition:"background .15s",
              }}
              onMouseEnter={e=>(e.currentTarget.style.background="#E9DDFF")}
              onMouseLeave={e=>(e.currentTarget.style.background="transparent")}
            >View All Roles</button>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          BODY
      ══════════════════════════════ */}
      <section style={{width:"100%",background:T.white,padding: isMobile ? "56px 0 72px" : "80px 0 96px"}}>
        <div style={{
          maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px`,
          display:"grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "1fr 320px",
          gap: isMobile ? 48 : 64,
          alignItems:"start",
        }}>

          {/* Left: content */}
          <div>
            {/* Overview */}
            <div className="fade-up" style={{marginBottom: isMobile ? 40 : 52}}>
              <h2 style={{
                margin:"0 0 16px",
                fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
                fontSize: isMobile ? 22 : 26, lineHeight:1.2, color:T.headingBlack,
              }}>About the role</h2>
              <p style={{
                margin:0, fontFamily:"DM Sans, sans-serif", fontWeight:400,
                fontSize: isMobile ? 14 : 15, lineHeight:1.8, color:T.muted,
              }}>{job.desc}</p>
            </div>

            {/* Responsibilities */}
            <div className="fade-up d1" style={{marginBottom: isMobile ? 40 : 52}}>
              <h2 style={{
                margin:"0 0 20px",
                fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
                fontSize: isMobile ? 22 : 26, lineHeight:1.2, color:T.headingBlack,
              }}>What you'll do</h2>
              <ul style={{margin:0,padding:0,listStyle:"none"}}>
                {job.responsibilities.map((item, i) => (
                  <li key={i} className="check-item">
                    <span className="check-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#EDE9FF"/>
                        <path d="M8 12l3 3 5-5" stroke={T.primary} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span style={{fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize: isMobile ? 14 : 15,lineHeight:1.72,color:T.muted}}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="fade-up d2">
              <h2 style={{
                margin:"0 0 20px",
                fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
                fontSize: isMobile ? 22 : 26, lineHeight:1.2, color:T.headingBlack,
              }}>What we're looking for</h2>
              <ul style={{margin:0,padding:0,listStyle:"none"}}>
                {job.requirements.map((item, i) => (
                  <li key={i} className="check-item">
                    <span className="check-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#FFF3E0"/>
                        <path d="M8 12l3 3 5-5" stroke={T.orange} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span style={{fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize: isMobile ? 14 : 15,lineHeight:1.72,color:T.muted}}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: sticky apply card */}
          {!isMobile && (
            <div style={{
              position:"sticky", top:100,
              background:T.bg,
              border:`1px solid ${T.borderLight}`,
              borderRadius:16, padding:"32px 28px",
            }}>
              <p style={{margin:"0 0 6px",fontFamily:"DM Sans, sans-serif",fontWeight:700,fontSize:17,color:T.dark}}>
                Interested?
              </p>
              <p style={{margin:"0 0 24px",fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:13,lineHeight:1.7,color:T.muted}}>
                Send your CV and a short note about why you're excited about this role to our team.
              </p>
              <a
                href={`mailto:careers@payonus.com?subject=Application: ${encodeURIComponent(job.title)}`}
                style={{
                  display:"block", textAlign:"center",
                  fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:14,
                  color:T.white, background:T.primary,
                  borderRadius:6, padding:"13px 20px",
                  textDecoration:"none", transition:"opacity .15s",
                  marginBottom:12,
                }}
                onMouseEnter={e=>(e.currentTarget.style.opacity="0.88")}
                onMouseLeave={e=>(e.currentTarget.style.opacity="1")}
              >Apply Now</a>
              <button
                onClick={() => router.push("/careers")}
                style={{
                  display:"block", width:"100%", textAlign:"center",
                  fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:13,
                  color:T.muted, background:"transparent",
                  border:`1px solid ${T.borderLight}`, borderRadius:6,
                  padding:"11px 20px", cursor:"pointer",
                  transition:"border-color .15s,color .15s",
                }}
                onMouseEnter={e=>{ e.currentTarget.style.borderColor=T.primary; e.currentTarget.style.color=T.primary; }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor=T.borderLight; e.currentTarget.style.color=T.muted; }}
              >View Other Roles</button>

              <hr style={{border:"none",borderTop:`1px solid ${T.borderLight}`,margin:"24px 0"}}/>

              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke={T.muted} strokeWidth="1.6"/>
                    <circle cx="12" cy="9" r="2.5" stroke={T.muted} strokeWidth="1.6"/>
                  </svg>
                  <span style={{fontFamily:"DM Sans, sans-serif",fontSize:13,color:T.muted}}>{job.location}</span>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke={T.muted} strokeWidth="1.6"/>
                    <path d="M16 2v4M8 2v4M3 10h18" stroke={T.muted} strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                  <span style={{fontFamily:"DM Sans, sans-serif",fontSize:13,color:T.muted}}>{job.type}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════
          BOTTOM CTA
      ══════════════════════════════ */}
      <section style={{width:"100%",background:T.bg,padding: isMobile ? "56px 0" : "80px 0"}}>
        <div style={{maxWidth:1440,margin:"0 auto",padding:`0 ${hPad}px`}}>
          <div style={{
            background:"#EDE9FF",
            border:`1.5px solid ${T.primary}`,
            borderRadius:20,
            padding: isMobile ? "40px 28px" : isTablet ? "52px 52px" : "60px 72px",
            display:"flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent:"space-between",
            gap: isMobile ? 28 : 40,
          }}>
            <div style={{maxWidth:500}}>
              <h2 className="fade-up" style={{
                margin:"0 0 12px",
                fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
                fontSize: isMobile ? 24 : isTablet ? 32 : 38,
                lineHeight:1.12, color:T.headingBlack,
              }}>
                Ready to join the team?
              </h2>
              <p className="fade-up d1" style={{
                margin:0, fontFamily:"DM Sans, sans-serif", fontWeight:400,
                fontSize: isMobile ? 14 : 15, lineHeight:1.72, color:T.muted,
              }}>
                Email your CV and a brief introduction. We review every application personally and get back within 5 business days.
              </p>
            </div>
            <div className="fade-up d2" style={{flexShrink:0}}>
              <a
                href={`mailto:careers@payonus.com?subject=Application: ${encodeURIComponent(job.title)}`}
                style={{
                  display:"inline-block",
                  fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:14,
                  color:T.white, background:T.primary,
                  borderRadius:6, padding:"14px 28px",
                  textDecoration:"none", transition:"opacity .15s",
                  whiteSpace:"nowrap",
                }}
                onMouseEnter={e=>(e.currentTarget.style.opacity="0.88")}
                onMouseLeave={e=>(e.currentTarget.style.opacity="1")}
              >Apply for This Role</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
