"use client";

import React from "react";
import { useBreakpoint } from "../use-breakpoint";
import Navbar, { T } from "../Navbar";
import Footer from "../Footer";
import TestimonialsSection from "../TestimonialsSection";

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

/* ─── HERO BACKGROUND SVG ─── */
function HeroBg() {
  return (
    <svg
      aria-hidden
      style={{ position:"absolute", top:0, left:0, width:"100%", height:"100%", pointerEvents:"none", zIndex:0 }}
      viewBox="0 0 1440 700"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="hero-wg1">
        <path d="M-50 680 C100 660 220 630 380 600 C480 582 560 565 660 540 C780 510 880 470 990 415 C1090 365 1190 300 1320 235 C1380 205 1420 182 1460 162" stroke="rgba(114,82,195,0.30)" strokeWidth="1.4"/>
        <path d="M-50 700 C80 692 160 675 270 660 C360 647 420 648 480 638 C545 626 585 610 650 596 C730 578 810 555 900 526 C1000 493 1100 447 1200 385 C1290 330 1370 270 1440 220" stroke="rgba(114,82,195,0.24)" strokeWidth="1.3"/>
        <path d="M100 700 C180 693 260 678 370 665 C450 654 510 657 565 647 C620 635 655 618 710 604 C785 584 860 562 945 533 C1045 499 1140 451 1240 387 C1325 332 1390 272 1440 236" stroke="rgba(114,82,195,0.20)" strokeWidth="1.1"/>
        <path d="M-100 700 C20 698 80 686 160 678 C205 673 235 678 265 671 C305 662 330 646 375 635 C435 619 490 607 555 591 C635 570 720 547 815 517 C920 483 1020 436 1125 372 C1215 316 1315 250 1440 194" stroke="rgba(90,60,180,0.26)" strokeWidth="1.1"/>
      </g>
      <g className="hero-wg2">
        <path d="M200 700 C290 694 380 680 480 667 C560 656 615 660 665 651 C715 640 748 623 800 609 C870 589 945 567 1030 537 C1125 503 1215 454 1308 390 C1376 341 1415 302 1440 278" stroke="rgba(114,82,195,0.18)" strokeWidth="1.1"/>
        <path d="M-100 660 C50 645 160 618 300 598 C400 582 468 569 545 548 C630 524 710 503 800 476 C905 444 1015 396 1115 332 C1205 276 1310 209 1440 158" stroke="rgba(140,100,210,0.24)" strokeWidth="1"/>
        <path d="M-50 640 C100 625 200 600 330 582 C420 567 490 555 568 534 C650 510 730 490 825 462 C925 430 1030 382 1135 316 C1224 260 1325 193 1440 145" stroke="rgba(140,100,210,0.20)" strokeWidth="1"/>
      </g>
      <g className="hero-wg3">
        <line x1="1060" y1="700" x2="1180" y2="320" stroke="rgba(114,82,195,0.18)" strokeWidth="1"/>
        <line x1="1120" y1="700" x2="1220" y2="280" stroke="rgba(114,82,195,0.16)" strokeWidth="1"/>
        <line x1="1180" y1="700" x2="1265" y2="240" stroke="rgba(114,82,195,0.14)" strokeWidth="1"/>
        <line x1="1240" y1="700" x2="1310" y2="200" stroke="rgba(114,82,195,0.12)" strokeWidth="1"/>
        <line x1="1300" y1="700" x2="1360" y2="160" stroke="rgba(114,82,195,0.10)" strokeWidth="0.9"/>
        <line x1="1360" y1="700" x2="1410" y2="120" stroke="rgba(114,82,195,0.08)" strokeWidth="0.9"/>
        <line x1="1410" y1="700" x2="1445" y2="90"  stroke="rgba(114,82,195,0.06)" strokeWidth="0.9"/>
      </g>
      <g className="hero-wg4">
        <path d="M-50 695 C100 680 230 653 380 632 C470 618 540 606 620 585 C710 560 800 534 905 500 C1010 463 1110 416 1210 351 C1295 296 1375 240 1440 198" stroke="rgba(196,148,80,0.18)" strokeWidth="0.9"/>
        <path d="M-50 700 C80 692 190 670 320 653 C410 640 480 630 555 613 C640 592 725 570 820 542 C920 510 1020 463 1125 398 C1212 343 1308 278 1440 220" stroke="rgba(196,148,80,0.14)" strokeWidth="0.9"/>
      </g>
    </svg>
  );
}

/* ─── DATA ─── */
const TABLE_ROWS = [
  { country:"Nigeria (NGN)",          type:"Payout",      method:"Bank Transfer",   feeType:"% of Volume", fee:"1.5%",  cap:"N/A"       },
  { country:"Nigeria (NGN)",          type:"Collections", method:"Virtual Account", feeType:"% of Volume", fee:"2.0%",  cap:"N/A"       },
  { country:"Nigeria (NGN)",          type:"Collections", method:"Opay/PalmPay",    feeType:"% of Volume", fee:"2.5%",  cap:"N/A"       },
  { country:"Kenya (KES)",            type:"Payout",      method:"Mobile Money",    feeType:"% of Volume", fee:"1.5%",  cap:"MIN 65 KES"},
  { country:"Kenya (KES)",            type:"Collections", method:"Mobile Money",    feeType:"% of Volume", fee:"2.0%",  cap:"N/A"       },
  { country:"Ghana (GHS)",            type:"Payout",      method:"Bank Transfer",   feeType:"% of Volume", fee:"2.5%",  cap:"N/A"       },
  { country:"Ghana (GHS)",            type:"Collections", method:"Bank Transfer",   feeType:"% of Volume", fee:"3.0%",  cap:"N/A"       },
  { country:"South Africa (ZAR)",     type:"Payout",      method:"Bank Transfer",   feeType:"Fixed",       fee:"150",   cap:"N/A"       },
  { country:"South Africa (ZAR)",     type:"Collections", method:"EFT",             feeType:"% of Volume", fee:"5.0%",  cap:"N/A"       },
  { country:"Zambia (ZMW)",           type:"Payout",      method:"Mobile Money",    feeType:"% of Volume", fee:"1.0%",  cap:"N/A"       },
  { country:"Zambia (ZMW)",           type:"Collections", method:"Mobile Money",    feeType:"% of Volume", fee:"5.5%",  cap:"N/A"       },
  { country:"Cote d'Ivoire (XOF)",    type:"Payout",      method:"Mobile Money",    feeType:"% of Volume", fee:"2.5%",  cap:"N/A"       },
  { country:"Cote d'Ivoire (XOF) HR", type:"Payout",      method:"Mobile Money",    feeType:"% of Volume", fee:"4.5%",  cap:"N/A"       },
  { country:"Cote d'Ivoire (XOF)",    type:"Collections", method:"Mobile Money",    feeType:"% of Volume", fee:"3.0%",  cap:"N/A"       },
  { country:"Cote d'Ivoire (XOF) HR", type:"Collections", method:"Mobile Money",    feeType:"% of Volume", fee:"4.5%",  cap:"N/A"       },
  { country:"Cameroon (XOF)",         type:"Payout",      method:"Mobile Money",    feeType:"% of Volume", fee:"3.0%",  cap:"N/A"       },
  { country:"Cameroon (XOF)",         type:"Collections", method:"Mobile Money",    feeType:"% of Volume", fee:"3.5%",  cap:"N/A"       },
];

const FAQS = [
  { q:"Are there setup fees?",            a:"No. There are no setup fees, activation fees, or minimum commitments on our Starter plan. You only pay for what you process." },
  { q:"Can I switch plans mid-month?",    a:"Yes. You can upgrade or downgrade at any time. Changes take effect immediately and billing is prorated for the remainder of the billing cycle." },
  { q:"Are there volume discounts?",      a:"Yes. Enterprise customers and high-volume businesses are eligible for custom pricing. Reach out to our sales team to discuss your volume and get a tailored rate." },
  { q:"What currencies are fees charged in?", a:"Fees are charged in the local currency of each transaction. For international transfers, fees are calculated in the transaction currency before settlement." },
];

/* ═══════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════ */
export default function PricingPage() {
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

        @keyframes ctaPulse{0%,100%{box-shadow:0 0 0 0 rgba(96,9,255,.40);}60%{box-shadow:0 0 0 14px rgba(96,9,255,0);}}

        .cta-pulse{animation:ctaPulse 2.8s ease-in-out infinite;}

        .pricing-card{transition:transform .28s cubic-bezier(.16,1,.3,1),box-shadow .28s;}
        .pricing-card:hover{transform:translateY(-4px);box-shadow:0 20px 56px rgba(96,9,255,.10);}

        table{border-collapse:collapse;width:100%;}
        th{text-align:left;}
        tbody tr:hover td{background:rgba(96,9,255,.025);}

        .footer-link{position:relative;display:inline-block;}
        .footer-link::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:1px;background:${T.primary};transition:width .3s cubic-bezier(.16,1,.3,1);}
        .footer-link:hover::after{width:100%;}
      `}</style>

      {/* ── Scroll progress ── */}
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
        padding: isMobile ? "64px 0 80px" : "88px 0 108px",
      }}>
        <HeroBg />

        <div style={{position:"relative",zIndex:1,maxWidth:1440,margin:"0 auto",padding:`0 ${hPad}px`}}>

          {/* Label */}
          <span className="fade-up" style={{
            display:"block", marginBottom: isMobile ? 20 : 28,
            fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:T.orange,
          }}>• Pricing</span>

          {/* Heading */}
          <h1 className="fade-up d1" style={{
            margin:`0 0 ${isMobile ? 16 : 20}px`,
            fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
            fontSize: isMobile ? 52 : isTablet ? 68 : 84,
            lineHeight:1.04, letterSpacing:"-0.02em", color:T.headingBlack,
          }}>
            Simple pricing.<br />No surprises.
          </h1>

          {/* Subtext */}
          <p className="fade-up d2" style={{
            margin:`0 0 ${isMobile ? 44 : 60}px`,
            fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400,
            fontSize: isMobile ? 15 : 16, lineHeight:1.7, color:T.muted, maxWidth:480,
          }}>
            Pay only for what you use. No setup fees, no monthly minimums on Starter. Upgrade when you need more
          </p>

          {/* Pricing cards — full width, 1fr 1fr */}
          <div className="fade-up d3" style={{
            display:"grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 20 : 28,
          }}>

            {/* Left: Local Transactions */}
            <div className="pricing-card" style={{
              background:T.white,
              border:`1px solid ${T.borderLight}`,
              borderRadius:20,
              padding: isMobile ? "32px 24px" : "40px 36px",
              display:"flex", flexDirection:"column",
            }}>
              <span style={{
                display:"block", marginBottom:24,
                fontFamily:"DM Sans, sans-serif", fontWeight:700, fontSize:14,
                color:T.primary,
              }}>Local Transactions</span>

              <p style={{
                margin:"0 0 10px",
                fontFamily:"Rubik, sans-serif", fontWeight:700,
                fontSize: isMobile ? 60 : 72, lineHeight:1, color:T.headingBlack,
              }}>1.5%</p>

              <p style={{
                margin:"0 0 36px",
                fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:16, color:T.muted,
              }}>Capped at 2000</p>

              <button
                onClick={ripple}
                style={{
                  position:"relative", overflow:"hidden",
                  fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:15,
                  color:T.white, background:T.primary,
                  border:"none", borderRadius:10,
                  padding:"16px 0", cursor:"pointer",
                  transition:"opacity .15s", width:"100%", marginTop:"auto",
                }}
                onMouseEnter={e=>(e.currentTarget.style.opacity="0.88")}
                onMouseLeave={e=>(e.currentTarget.style.opacity="1")}
              >Get Started</button>
            </div>

            {/* Right: International Transactions (lavender highlight) */}
            <div className="pricing-card" style={{
              background:"#EDE9FF",
              border:`2px solid ${T.primary}`,
              borderRadius:20,
              padding: isMobile ? "32px 24px" : "40px 36px",
              display:"flex", flexDirection:"column",
            }}>
              <span style={{
                display:"block", marginBottom:24,
                fontFamily:"DM Sans, sans-serif", fontWeight:700, fontSize:14,
                color:T.primary,
              }}>International Transactions</span>

              <p style={{
                margin:"0 0 10px",
                fontFamily:"Rubik, sans-serif", fontWeight:700,
                fontSize: isMobile ? 40 : 52, lineHeight:1.1, color:T.headingBlack,
              }}>Custom rate</p>

              <p style={{
                margin:"0 0 36px",
                fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:16, color:T.muted,
              }}>Subject to Negotiation</p>

              <button
                onClick={ripple}
                style={{
                  position:"relative", overflow:"hidden",
                  fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:15,
                  color:T.white, background:T.primary,
                  border:"none", borderRadius:10,
                  padding:"16px 0", cursor:"pointer",
                  transition:"opacity .15s", width:"100%", marginTop:"auto",
                }}
                onMouseEnter={e=>(e.currentTarget.style.opacity="0.88")}
                onMouseLeave={e=>(e.currentTarget.style.opacity="1")}
              >Get Started</button>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          COMPARISON TABLE
      ══════════════════════════════ */}
      <section style={{width:"100%",background:T.bg,padding: isMobile ? "64px 0" : "88px 0 108px"}}>
        <div style={{maxWidth:1440,margin:"0 auto",padding:`0 ${hPad}px`}}>

          <span className="fade-up" style={{
            display:"block", marginBottom:20,
            fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:13,
            color:T.orange, letterSpacing:"0.06em",
          }}>— Compare Plans</span>

          <h2 className="fade-up d1" style={{
            margin:`0 0 ${isMobile ? 40 : 56}px`,
            fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
            fontSize: isMobile ? 34 : isTablet ? 46 : 58,
            lineHeight:1.1, color:T.headingBlack,
          }}>
            Everything side<br />by <span style={{color:T.primary}}>side.</span>
          </h2>

          <div className="fade-up d2">
            {isMobile ? (
              <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                {TABLE_ROWS.map((row,i) => (
                  <div key={i} style={{
                    background:T.white, border:`1px solid ${T.borderLight}`,
                    borderRadius:14, padding:"18px 20px",
                  }}>
                    <div style={{ fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:14, color:T.dark, marginBottom:14 }}>{row.country}</div>
                    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px 16px" }}>
                      {[
                        { label:"Type",   value:row.type,   bold:false },
                        { label:"Method", value:row.method, bold:false },
                        { label:"Fee",    value:row.fee,    bold:true  },
                        { label:"Cap",    value:row.cap,    bold:false },
                      ].map(({ label, value, bold }) => (
                        <div key={label}>
                          <div style={{ fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:10, color:T.muted, marginBottom:3, textTransform:"uppercase", letterSpacing:"0.06em" }}>{label}</div>
                          <div style={{ fontFamily:"DM Sans, sans-serif", fontWeight: bold ? 700 : 500, fontSize: bold ? 16 : 13, color: bold ? T.primary : T.dark }}>{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{overflowX:"auto"}}>
                <table style={{minWidth:640,fontFamily:"DM Sans, sans-serif"}}>
                  <thead>
                    <tr>
                      {["Country/Currency","Transaction Type","Payment Method","Fee Type","Fee","Fee Cap"].map(h=>(
                        <th key={h} style={{
                          padding:"0 20px 16px 0",
                          fontWeight:600, fontSize:13, color:T.dark,
                          borderBottom:`2px solid ${T.borderLight}`,
                          whiteSpace:"nowrap" as "nowrap",
                        }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {TABLE_ROWS.map((row,i)=>(
                      <tr key={i}>
                        <td style={{padding:"14px 20px 14px 0",fontSize:14,fontWeight:500,color:T.dark,whiteSpace:"nowrap" as "nowrap",borderBottom:`1px solid ${T.borderLight}`}}>{row.country}</td>
                        <td style={{padding:"14px 20px 14px 0",fontSize:14,color:T.muted,borderBottom:`1px solid ${T.borderLight}`}}>{row.type}</td>
                        <td style={{padding:"14px 20px 14px 0",fontSize:14,color:T.muted,borderBottom:`1px solid ${T.borderLight}`}}>{row.method}</td>
                        <td style={{padding:"14px 20px 14px 0",fontSize:14,color:T.muted,borderBottom:`1px solid ${T.borderLight}`}}>{row.feeType}</td>
                        <td style={{padding:"14px 20px 14px 0",fontSize:14,fontWeight:600,color:T.dark,borderBottom:`1px solid ${T.borderLight}`}}>{row.fee}</td>
                        <td style={{padding:"14px 0 14px 0",fontSize:14,color:T.muted,borderBottom:`1px solid ${T.borderLight}`}}>{row.cap}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          TESTIMONIALS — identical to home page
      ══════════════════════════════ */}
      <TestimonialsSection />

      {/* ══════════════════════════════
          FAQs
      ══════════════════════════════ */}
      <section style={{width:"100%",background:T.bg,padding: isMobile ? "64px 0" : "88px 0"}}>
        <div style={{maxWidth:1440,margin:"0 auto",padding:`0 ${hPad}px`}}>

          <span className="fade-up" style={{
            display:"block", marginBottom:20,
            fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:13,
            color:T.orange, letterSpacing:"0.06em",
          }}>— FAQs</span>

          <h2 className="fade-up d1" style={{
            margin:`0 0 ${isMobile ? 40 : 56}px`,
            fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
            fontSize: isMobile ? 32 : isTablet ? 44 : 56,
            lineHeight:1.1, color:T.headingBlack,
          }}>
            Common pricing<br /><span style={{color:T.primary}}>questions.</span>
          </h2>

          <div className="fade-up d2">
            {FAQS.map((faq,i)=>(
              <div key={i} style={{
                borderTop:    i === 0 ? `1px solid ${T.borderLight}` : "none",
                borderBottom: `1px solid ${T.borderLight}`,
              }}>
                <button
                  onClick={()=>setOpenFaq(openFaq===i ? null : i)}
                  style={{
                    width:"100%", background:"none", border:"none", cursor:"pointer",
                    display:"flex", justifyContent:"space-between", alignItems:"center",
                    padding:"24px 0", gap:24,
                  }}
                >
                  <span style={{
                    fontFamily:"DM Sans, sans-serif", fontWeight:500,
                    fontSize: isMobile ? 15 : 16, color:T.dark, textAlign:"left" as "left",
                  }}>{faq.q}</span>
                  <span style={{
                    fontSize:26, fontWeight:300, color:T.primary, flexShrink:0,
                    lineHeight:1,
                    display:"block",
                    transform: openFaq===i ? "rotate(45deg)" : "rotate(0deg)",
                    transition:"transform .22s cubic-bezier(.16,1,.3,1)",
                  }}>+</span>
                </button>
                <div style={{
                  maxHeight: openFaq===i ? 200 : 0,
                  overflow:"hidden",
                  transition:"max-height .32s cubic-bezier(.16,1,.3,1)",
                }}>
                  <p style={{
                    margin:"0 0 24px",
                    fontFamily:"DM Sans, sans-serif", fontWeight:400,
                    fontSize: isMobile ? 14 : 15, lineHeight:1.75, color:T.muted,
                    paddingRight: isMobile ? 0 : 56,
                  }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          BOTTOM CTA
      ══════════════════════════════ */}
      <section style={{width:"100%",background:T.bg,padding: isMobile ? "72px 0" : "96px 0 120px"}}>
        <div style={{maxWidth:1440,margin:"0 auto",padding:`0 ${hPad}px`}}>
          <div style={{
            display:"grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "2fr 1fr 1fr",
            gap: isMobile ? 48 : isTablet ? 48 : 56,
            alignItems:"start",
          }}>

            {/* Left */}
            <div className="fade-up">
              <h2 style={{
                margin:"0 0 16px",
                fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
                fontSize: isMobile ? 30 : isTablet ? 38 : 48,
                lineHeight:1.08, color:T.headingBlack, maxWidth:440,
              }}>
                Not sure which <span style={{color:T.primary}}>plan</span><br />is right for you?
              </h2>
              <p style={{
                margin:"0 0 28px",
                fontFamily:"DM Sans, sans-serif", fontWeight:400,
                fontSize:15, lineHeight:1.65, color:T.muted, maxWidth:380,
              }}>
                Talk to our team — we'll help you find the right fit for your business.
              </p>
              <div style={{display:"flex",flexWrap:"wrap",gap:12}}>
                <button
                  className="cta-pulse"
                  onClick={ripple}
                  style={{
                    position:"relative", overflow:"hidden",
                    fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:14,
                    color:T.white, background:T.primary,
                    border:"none", borderRadius:6, padding:"12px 20px", cursor:"pointer",
                  }}
                  onMouseEnter={e=>(e.currentTarget.style.opacity="0.88")}
                  onMouseLeave={e=>(e.currentTarget.style.opacity="1")}
                >Get Started — Free</button>
                <button
                  style={{
                    fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14,
                    color:T.dark, background:"transparent",
                    border:`1px solid ${T.dark}`, borderRadius:6,
                    padding:"12px 20px", cursor:"pointer", transition:"background .15s",
                  }}
                  onMouseEnter={e=>(e.currentTarget.style.background="#E9DDFF")}
                  onMouseLeave={e=>(e.currentTarget.style.background="transparent")}
                >Contact Sales</button>
              </div>
            </div>

            {/* Pricing details */}
            <div className="fade-up d2">
              <div style={{width:44,height:44,borderRadius:8,background:"#EDE9FF",border:`1px solid ${T.borderLight}`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke={T.primary} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="7" cy="7" r="1.2" fill={T.primary}/>
                </svg>
              </div>
              <p style={{margin:"0 0 8px",fontFamily:"DM Sans, sans-serif",fontWeight:600,fontSize:16,color:T.dark}}>See what you'll pay</p>
              <p style={{margin:"0 0 14px",fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:14,lineHeight:1.65,color:"#6B6877"}}>Integrated per-transaction pricing with no hidden fees.</p>
              <button onClick={e=>e.preventDefault()} style={{display:"inline-flex",alignItems:"center",gap:4,fontFamily:"DM Sans, sans-serif",fontWeight:600,fontSize:14,color:T.primary,background:"none",border:"none",cursor:"pointer",padding:0}}
                onMouseEnter={e=>(e.currentTarget.style.opacity="0.7")}
                onMouseLeave={e=>(e.currentTarget.style.opacity="1")}
              >
                Pricing details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke={T.primary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>

            {/* Integration options */}
            <div className="fade-up d3">
              <div style={{width:44,height:44,borderRadius:8,background:"#EDE9FF",border:`1px solid ${T.borderLight}`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke={T.primary} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{margin:"0 0 8px",fontFamily:"DM Sans, sans-serif",fontWeight:600,fontSize:16,color:T.dark}}>Start building</p>
              <p style={{margin:"0 0 14px",fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:14,lineHeight:1.65,color:"#6B6877"}}>Get up and running with Payonus in as little as 10 minutes.</p>
              <button onClick={e=>e.preventDefault()} style={{display:"inline-flex",alignItems:"center",gap:4,fontFamily:"DM Sans, sans-serif",fontWeight:600,fontSize:14,color:T.primary,background:"none",border:"none",cursor:"pointer",padding:0}}
                onMouseEnter={e=>(e.currentTarget.style.opacity="0.7")}
                onMouseLeave={e=>(e.currentTarget.style.opacity="1")}
              >
                Integration options
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke={T.primary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
