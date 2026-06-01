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
      { threshold: 0.08 }
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
        <path d="M-100 640 C20 638 80 626 160 618 C205 613 235 618 265 611 C305 602 330 586 375 575 C435 559 490 547 555 531 C635 510 720 487 815 457 C920 423 1020 376 1125 312 C1215 256 1315 190 1440 134" stroke="rgba(90,60,180,0.22)" strokeWidth="1.1"/>
      </g>
      <g className="hero-wg2">
        <path d="M200 640 C290 634 380 620 480 607 C560 596 615 600 665 591 C715 580 748 563 800 549 C870 529 945 507 1030 477 C1125 443 1215 394 1308 330 C1376 281 1415 242 1440 218" stroke="rgba(114,82,195,0.16)" strokeWidth="1.1"/>
        <path d="M-100 600 C50 585 160 558 300 538 C400 522 468 509 545 488 C630 464 710 443 800 416 C905 384 1015 336 1115 272 C1205 216 1310 149 1440 98" stroke="rgba(140,100,210,0.20)" strokeWidth="0.9"/>
        <path d="M-50 580 C100 565 200 540 330 522 C420 507 490 495 568 474 C650 450 730 430 825 402 C925 370 1030 322 1135 256 C1224 200 1325 133 1440 85" stroke="rgba(140,100,210,0.16)" strokeWidth="0.9"/>
      </g>
      <g className="hero-wg3">
        <line x1="1060" y1="640" x2="1180" y2="260" stroke="rgba(114,82,195,0.16)" strokeWidth="1"/>
        <line x1="1120" y1="640" x2="1220" y2="220" stroke="rgba(114,82,195,0.13)" strokeWidth="1"/>
        <line x1="1180" y1="640" x2="1265" y2="180" stroke="rgba(114,82,195,0.11)" strokeWidth="0.9"/>
        <line x1="1240" y1="640" x2="1310" y2="140" stroke="rgba(114,82,195,0.09)" strokeWidth="0.9"/>
        <line x1="1300" y1="640" x2="1360" y2="100" stroke="rgba(114,82,195,0.07)" strokeWidth="0.9"/>
      </g>
      <g className="hero-wg4">
        <path d="M-50 635 C100 620 230 593 380 572 C470 558 540 546 620 525 C710 500 800 474 905 440 C1010 403 1110 356 1210 291 C1295 236 1375 180 1440 138" stroke="rgba(196,148,80,0.16)" strokeWidth="0.9"/>
        <path d="M-50 640 C80 632 190 610 320 593 C410 580 480 570 555 553 C640 532 725 510 820 482 C920 450 1020 403 1125 338 C1212 283 1308 218 1440 160" stroke="rgba(196,148,80,0.11)" strokeWidth="0.9"/>
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


/* ─── DATA ─── */
const FAQ_ITEMS = [
  "How long does a payout take to settle?",
  "How long does a payout take to settle?",
  "How long does a payout take to settle?",
  "How long does a payout take to settle?",
  "How long does a payout take to settle?",
  "How long does a payout take to settle?",
];

const FAQ_ANSWER = "Our standard payout settlement window is T+1 for verified merchant accounts. International payouts may take 2–3 business days depending on the destination bank and intermediary routing.";

/* ═══════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════ */
export default function SupportPage() {
  useScrollReveal();
  const { isMobile, isTablet } = useBreakpoint();
  const [scrolled,  setScrolled]  = React.useState(false);
  const [scrollPct, setScrollPct] = React.useState(0);
  const [openFaq,   setOpenFaq]   = React.useState<number | null>(null);

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

        .support-card{transition:transform .28s cubic-bezier(.16,1,.3,1),box-shadow .28s;}
        .support-card:hover{transform:translateY(-4px);box-shadow:0 20px 56px rgba(96,9,255,.10);}

        fieldset.form-field{border:1px solid ${T.borderLight};border-radius:8px;padding:2px 14px 14px;background:#FFFFFF;margin:0;transition:border-color .18s;}
        fieldset.form-field:focus-within{border-color:${T.primary};}
        fieldset.form-field legend{font-family:"DM Sans",sans-serif;font-weight:400;font-size:12px;color:${T.muted};padding:0 4px;margin-left:-4px;line-height:1;background:#FFFFFF;}
        fieldset.form-field input,fieldset.form-field textarea{width:100%;border:none;outline:none;font-family:"DM Sans",sans-serif;font-size:14px;color:${T.dark};background:transparent;padding:0;resize:none;}

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
            fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14,
            color:T.orange,
          }}>• Support</span>

          <h1 className="fade-up d1" style={{
            margin:`0 0 ${isMobile ? 20 : 28}px`,
            fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
            fontSize: isMobile ? 62 : isTablet ? 64 : 90,
            lineHeight:1.04, letterSpacing:"-0.02em", color:T.headingBlack,
          }}>
            We're here when it matters.
          </h1>

          <p className="fade-up d2" style={{
            margin:0,
            fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400,
            fontSize: isMobile ? 15 : 17, lineHeight:1.7, color:T.muted,
            maxWidth: 520,
          }}>
            Payments don't stop at 5pm — and neither do we. Every plan includes access to our support team across chat, email, and phone.
          </p>

        </div>
      </section>

      {/* ══════════════════════════════
          CONTACT OPTIONS
      ══════════════════════════════ */}
      <section style={{width:"100%",background:T.bg,padding: isMobile ? "64px 0" : "88px 0"}}>
        <div style={{maxWidth:1440,margin:"0 auto",padding:`0 ${hPad}px`}}>

          <span className="fade-up" style={{
            display:"block", marginBottom:20,
            fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:13,
            color:T.orange,
          }}>— Get in Touch</span>

          <h2 className="fade-up d1" style={{
            margin:`0 0 ${isMobile ? 40 : 56}px`,
            fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
            fontSize: isMobile ? 32 : isTablet ? 44 : 56,
            lineHeight:1.1, color:T.headingBlack,
          }}>
            We'd love to{isMobile ? " " : <br />}hear from you.
          </h2>

          {/* Two cards */}
          <div className="fade-up d2" style={{
            display:"grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 20 : 24,
          }}>

            {/* Email Support */}
            <div className="support-card" style={{
              background:"#EDE9FF", border:`2px solid ${T.primary}`,
              borderRadius:16, padding: isMobile ? "28px 24px" : "36px 32px",
              display:"flex", flexDirection:"column",
            }}>
              <div style={{marginBottom:24}}>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <rect width="44" height="44" rx="10" fill="rgba(96,9,255,0.12)"/>
                  <rect x="11" y="14" width="22" height="16" rx="2" stroke={T.primary} strokeWidth="1.6" strokeLinejoin="round"/>
                  <path d="M11 17l11 8 11-8" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={{margin:"0 0 12px",fontFamily:"DM Sans, sans-serif",fontWeight:500,fontSize:20,color:T.dark}}>Email Support</h3>
              <p style={{margin:"0 0 28px",fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:14,lineHeight:1.65,color:T.muted,flex:1}}>
                Send us a message and our team will get back to you as soon as possible. Best for billing, integration, and account questions.
              </p>
              <a href="mailto:support@payonus.com" style={{
                display:"block", textAlign:"center",
                fontFamily:"DM Sans, sans-serif",fontWeight:600,fontSize:14,
                color:T.white,background:T.primary,
                borderRadius:8,padding:"13px 0",
                textDecoration:"none", marginBottom:16,
                transition:"opacity .15s",
              }}
                onMouseEnter={e=>(e.currentTarget.style.opacity="0.88")}
                onMouseLeave={e=>(e.currentTarget.style.opacity="1")}
              >Send an Email</a>
              <p style={{margin:0,fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:12,color:T.orange,textAlign:"center" as "center"}}>
                support@payonus.com
              </p>
            </div>

            {/* Office Address */}
            <div className="support-card" style={{
              background:T.white, border:`1px solid ${T.borderLight}`,
              borderRadius:16, padding: isMobile ? "28px 24px" : "36px 32px",
              display:"flex", flexDirection:"column",
            }}>
              <div style={{marginBottom:24}}>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <rect width="44" height="44" rx="10" fill="#F5EFF7"/>
                  <path d="M22 11c-4.42 0-8 3.58-8 8 0 5.25 8 14 8 14s8-8.75 8-14c0-4.42-3.58-8-8-8z" stroke={T.primary} strokeWidth="1.6" strokeLinejoin="round"/>
                  <circle cx="22" cy="19" r="2.5" stroke={T.primary} strokeWidth="1.6"/>
                </svg>
              </div>
              <h3 style={{margin:"0 0 12px",fontFamily:"DM Sans, sans-serif",fontWeight:500,fontSize:20,color:T.dark}}>Our Office</h3>
              <p style={{margin:"0 0 28px",fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:14,lineHeight:1.65,color:T.muted,flex:1}}>
                Plot 1a Kunle Ogunba Street<br />
                Formerly (Otunba Adesina Str),<br />
                Lekki Phase 1,<br />
                Lagos, Nigeria.
              </p>
              <a
                href="https://maps.google.com/?q=Plot+1a+Kunle+Ogunba+Street+Lekki+Phase+1+Lagos+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display:"block", textAlign:"center",
                  fontFamily:"DM Sans, sans-serif",fontWeight:600,fontSize:14,
                  color:T.primary, background:"transparent",
                  border:`1.5px solid ${T.primary}`,borderRadius:8,
                  padding:"12px 0", textDecoration:"none",
                  marginBottom:16, transition:"background .15s",
                }}
                onMouseEnter={e=>(e.currentTarget.style.background="#E9DDFF")}
                onMouseLeave={e=>(e.currentTarget.style.background="transparent")}
              >Get Directions</a>
              <p style={{margin:0,fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:12,color:T.orange,textAlign:"center" as "center"}}>
                Lekki Phase 1, Lagos
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FAQs + CONTACT FORM
      ══════════════════════════════ */}
      <section style={{width:"100%",background:"#F0EFEB",padding: isMobile ? "64px 0 80px" : "88px 0 112px"}}>
        <div style={{maxWidth:1440,margin:"0 auto",padding:`0 ${hPad}px`}}>
          <div style={{
            display:"grid",
            gridTemplateColumns: isMobile || isTablet ? "1fr" : "1fr 1fr",
            gap: isMobile ? 56 : isTablet ? 64 : 80,
            alignItems:"start",
          }}>

            {/* Left: FAQs */}
            <div>
              <span className="fade-up" style={{
                display:"block", marginBottom:20,
                fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:13,
                color:T.orange,
              }}>— FAQs</span>

              <h2 className="fade-up d1" style={{
                margin:`0 0 ${isMobile ? 36 : 48}px`,
                fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
                fontSize: isMobile ? 34 : 46,
                lineHeight:1.1, color:T.headingBlack,
              }}>
                Common <span style={{color:T.primary}}>questions.</span>
              </h2>

              <div className="fade-up d2">
                {FAQ_ITEMS.map((faq, i) => (
                  <div key={i} style={{
                    borderTop:    i === 0 ? `1px solid ${T.borderLight}` : "none",
                    borderBottom: `1px solid ${T.borderLight}`,
                  }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{
                        width:"100%", background:"none", border:"none", cursor:"pointer",
                        display:"flex", justifyContent:"space-between", alignItems:"center",
                        padding:"22px 0", gap:24,
                      }}
                    >
                      <span style={{
                        fontFamily:"DM Sans, sans-serif", fontWeight:500,
                        fontSize: isMobile ? 14 : 15, color:T.dark, textAlign:"left" as "left",
                      }}>{faq}</span>
                      <span style={{
                        fontSize:24, fontWeight:300, color:T.primary, flexShrink:0,
                        lineHeight:1, display:"block",
                        transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                        transition:"transform .22s cubic-bezier(.16,1,.3,1)",
                      }}>+</span>
                    </button>
                    <div style={{
                      maxHeight: openFaq === i ? 200 : 0,
                      overflow:"hidden",
                      transition:"max-height .32s cubic-bezier(.16,1,.3,1)",
                    }}>
                      <p style={{
                        margin:"0 0 20px",
                        fontFamily:"DM Sans, sans-serif", fontWeight:400,
                        fontSize: isMobile ? 13 : 14, lineHeight:1.75, color:T.muted,
                        paddingRight: isMobile ? 0 : 40,
                      }}>{FAQ_ANSWER}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="fade-up d1">
              <h3 style={{
                margin:"0 0 8px",
                fontFamily:"DM Sans, sans-serif", fontWeight:500,
                fontSize: isMobile ? 22 : 26,
                color:T.dark,
              }}>Still have Questions?</h3>
              <p style={{
                margin:`0 0 ${isMobile ? 28 : 32}px`,
                fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14,
                lineHeight:1.65, color:T.muted,
              }}>Fill in the form and we'll get back to you within 2 hours.</p>

              <form onSubmit={e => e.preventDefault()} style={{ display:"flex", flexDirection:"column", gap:16 }}>

                {/* First + Last name */}
                <div style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap:16 }}>
                  <fieldset className="form-field">
                    <legend>First name</legend>
                    <input placeholder="enter first name" />
                  </fieldset>
                  <fieldset className="form-field">
                    <legend>Last Name</legend>
                    <input placeholder="enter last name" />
                  </fieldset>
                </div>

                <fieldset className="form-field">
                  <legend>Email address</legend>
                  <input type="email" placeholder="enter email address" />
                </fieldset>

                <fieldset className="form-field">
                  <legend>Subject</legend>
                  <input placeholder="enter a subject" />
                </fieldset>

                <fieldset className="form-field">
                  <legend>Merchant name</legend>
                  <textarea
                    placeholder="describe your issues or questions in as much detail as you can"
                    rows={6}
                  />
                </fieldset>

                <button
                  type="submit"
                  onClick={ripple}
                  style={{
                    position:"relative", overflow:"hidden",
                    fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:15,
                    color:T.white, background:T.primary,
                    border:"none", borderRadius:8,
                    padding:"17px 0", cursor:"pointer",
                    width:"100%", transition:"opacity .15s",
                    marginTop:4,
                  }}
                  onMouseEnter={e=>(e.currentTarget.style.opacity="0.88")}
                  onMouseLeave={e=>(e.currentTarget.style.opacity="1")}
                >Send Message</button>

              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
