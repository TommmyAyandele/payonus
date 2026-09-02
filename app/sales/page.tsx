"use client";

import React from "react";
import { useBreakpoint } from "../use-breakpoint";
import Navbar, { T } from "../Navbar";
import Footer from "../Footer";
import HeroBg from "../HeroBg";

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

const BENEFITS = [
  {
    title: "Custom pricing",
    desc: "Volume-based rates and bespoke contract terms tailored to your transaction scale.",
  },
  {
    title: "Dedicated account manager",
    desc: "A single point of contact who knows your business and responds within hours.",
  },
  {
    title: "Priority support",
    desc: "SLA-backed uptime guarantees and a direct escalation path to our engineering team.",
  },
  {
    title: "Enterprise integrations",
    desc: "White-glove onboarding, custom webhooks, and deep ERP or platform integrations.",
  },
];

/* ═══════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════ */
export default function SalesPage() {
  useScrollReveal();
  const { isMobile, isTablet } = useBreakpoint();
  const [scrolled,  setScrolled]  = React.useState(false);
  const [scrollPct, setScrollPct] = React.useState(0);

  const [form, setForm] = React.useState({
    firstName: "", lastName: "", email: "", company: "",
    role: "", volume: "", message: "",
  });
  const [submitted, setSubmitted] = React.useState(false);

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

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch("/api/sales-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, formName: "Sales Page" }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch (err) {
      console.error("Sales page submit failed:", err);
    }
  }

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

        @keyframes ctaPulse{0%,100%{box-shadow:0 0 0 0 rgba(96,9,255,.40);}60%{box-shadow:0 0 0 14px rgba(96,9,255,0);}}
        .cta-pulse{animation:ctaPulse 2.8s ease-in-out infinite;}

        fieldset.form-field{border:1px solid ${T.borderLight};border-radius:8px;padding:2px 14px 14px;background:#FFFFFF;margin:0;transition:border-color .18s;}
        fieldset.form-field:focus-within{border-color:${T.primary};}
        fieldset.form-field legend{font-family:"DM Sans",sans-serif;font-weight:400;font-size:12px;color:${T.muted};padding:0 4px;margin-left:-4px;line-height:1;background:#FFFFFF;}
        fieldset.form-field input,fieldset.form-field textarea,fieldset.form-field select{width:100%;border:none;outline:none;font-family:"DM Sans",sans-serif;font-size:14px;color:${T.dark};background:transparent;padding:0;resize:none;}
        fieldset.form-field input,fieldset.form-field textarea{appearance:none;}
        fieldset.form-field select{cursor:pointer;}
        fieldset.form-field select option{background:#fff;color:${T.dark};}

        .benefit-card{transition:background .22s;}
        .benefit-card:hover{background:#F5EFFE !important;}
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
        padding: isMobile ? "64px 0 80px" : "88px 0 112px",
      }}>
        <HeroBg />
        <div style={{position:"relative",zIndex:1,maxWidth:1440,margin:"0 auto",padding:`0 ${hPad}px`}}>

          <span className="fade-up" style={{
            display:"block", marginBottom: isMobile ? 20 : 28,
            fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:T.orange,
          }}>• Contact Sales</span>

          <h1 className="fade-up d1" style={{
            margin:`0 0 ${isMobile ? 20 : 28}px`,
            fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
            fontSize: isMobile ? 44 : isTablet ? 58 : 68,
            lineHeight:1.05, letterSpacing:"-0.02em", color:T.headingBlack, maxWidth:700,
          }}>
            Let's talk about what<br />Payonus can do for <span style={{color:T.primary}}>your business.</span>
          </h1>

          <p className="fade-up d2" style={{
            margin:0,
            fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400,
            fontSize: isMobile ? 15 : 17, lineHeight:1.7, color:T.muted, maxWidth:500,
          }}>
            Tell us about your payment needs and a member of our sales team will be in touch within one business day.
          </p>

        </div>
      </section>

      {/* ══════════════════════════════
          FORM + BENEFITS
      ══════════════════════════════ */}
      <section style={{width:"100%",background:T.white,padding: isMobile ? "56px 0 80px" : "72px 0 100px"}}>
        <div style={{maxWidth:1440,margin:"0 auto",padding:`0 ${hPad}px`}}>
          <div style={{
            display:"grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 48 : isTablet ? 48 : 80,
            alignItems:"start",
          }}>

            {/* Form */}
            <div className="fade-up">
              {submitted ? (
                <div style={{
                  padding: isMobile ? "40px 28px" : "56px 44px",
                  background:T.bg, borderRadius:16,
                  border:`1px solid ${T.borderLight}`,
                  textAlign:"center",
                }}>
                  <div style={{
                    width:56, height:56, borderRadius:"50%",
                    background:"#EDE9FF", display:"flex", alignItems:"center",
                    justifyContent:"center", margin:"0 auto 24px",
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke={T.primary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p style={{margin:"0 0 10px",fontFamily:"Rubik, sans-serif",fontStyle:"italic",fontWeight:500,fontSize:24,color:T.headingBlack}}>
                    We'll be in touch soon.
                  </p>
                  <p style={{margin:0,fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:15,lineHeight:1.65,color:T.muted}}>
                    Thanks for reaching out. Someone from our sales team will contact you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:16}}>

                  <div style={{display:"grid",gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",gap:16}}>
                    <fieldset className="form-field">
                      <legend>First name</legend>
                      <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="enter first name" required />
                    </fieldset>
                    <fieldset className="form-field">
                      <legend>Last name</legend>
                      <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="enter last name" required />
                    </fieldset>
                  </div>

                  <fieldset className="form-field">
                    <legend>Work email</legend>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="enter work email" required />
                  </fieldset>

                  <fieldset className="form-field">
                    <legend>Company</legend>
                    <input name="company" value={form.company} onChange={handleChange} placeholder="enter company name" required />
                  </fieldset>

                  <fieldset className="form-field">
                    <legend>Your role</legend>
                    <input name="role" value={form.role} onChange={handleChange} placeholder="e.g. CTO, Head of Finance" />
                  </fieldset>

                  <fieldset className="form-field">
                    <legend>Monthly transaction volume</legend>
                    <select name="volume" value={form.volume} onChange={handleChange} required>
                      <option value="" disabled>select a range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-100k">$10,000 – $100,000</option>
                      <option value="100k-1m">$100,000 – $1,000,000</option>
                      <option value="over-1m">Over $1,000,000</option>
                    </select>
                  </fieldset>

                  <fieldset className="form-field">
                    <legend>How can we help?</legend>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="describe your use case, challenges, or questions"
                      rows={5}
                    />
                  </fieldset>

                  <button
                    type="submit"
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
              )}
            </div>

            {/* Benefits */}
            <div className="fade-up d1" style={{display:"flex",flexDirection:"column",gap:0}}>
              <p style={{
                margin:`0 0 ${isMobile ? 32 : 40}px`,
                fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
                fontSize: isMobile ? 22 : 26, lineHeight:1.2, color:T.headingBlack,
              }}>
                What you get with an<br /><span style={{color:T.primary}}>enterprise plan.</span>
              </p>

              <div style={{
                border:`1px solid ${T.borderLight}`,
                borderRadius:16, overflow:"hidden",
              }}>
                {BENEFITS.map((b, i) => (
                  <div
                    key={b.title}
                    className="benefit-card"
                    style={{
                      padding: isMobile ? "24px 22px" : "28px 28px",
                      borderBottom: i < BENEFITS.length - 1 ? `1px solid ${T.borderLight}` : "none",
                      background:T.bg,
                      display:"flex", gap:16, alignItems:"flex-start",
                    }}
                  >
                    <div style={{
                      flexShrink:0, width:36, height:36, borderRadius:8,
                      background:"#EDE9FF", border:`1px solid ${T.borderLight}`,
                      display:"flex", alignItems:"center", justifyContent:"center", marginTop:2,
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke={T.primary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p style={{margin:"0 0 6px",fontFamily:"DM Sans, sans-serif",fontWeight:600,fontSize:15,color:T.dark}}>{b.title}</p>
                      <p style={{margin:0,fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:14,lineHeight:1.68,color:T.muted}}>{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p style={{
                margin:"32px 0 0",
                fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:13.5,
                lineHeight:1.65, color:T.muted,
              }}>
                Prefer email? Reach us at{" "}
                <a href="mailto:sales@payonus.com" style={{color:T.primary,textDecoration:"none",fontWeight:500}}>
                  sales@payonus.com
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
