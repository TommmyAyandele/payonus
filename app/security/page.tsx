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

/* ─── DATA ─── */
const CERTS = [
  {
    label: "PCIDSS Level 1",
    sub:   "Payment Card Industry",
    desc:  "Payonus is PCIDSS Level 1 certified — the highest tier of card payment security, verified by a qualified security assessor.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="3" stroke={T.primary} strokeWidth="1.6"/>
        <path d="M2 9h20" stroke={T.primary} strokeWidth="1.6"/>
        <path d="M6 13h4M6 16h2" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "ISO 27001",
    sub:   "Information Security",
    desc:  "Our Information Security Management System (ISMS) is aligned with ISO 27001, governing how we manage and protect sensitive data.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.5C16.5 22.15 20 17.25 20 12V6l-8-4z" stroke={T.primary} strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "NDPC Trust Mark",
    sub:   "Nigeria Data Protection",
    desc:  "Payonus holds the NDPC Trust Mark and is registered with the Nigeria Data Protection Commission as a data controller and processor.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke={T.primary} strokeWidth="1.6"/>
        <path d="M12 3c-3 3-5 6-5 10s2 7 5 10M12 3c3 3 5 6 5 10s-2 7-5 10" stroke={T.primary} strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M3 12h18" stroke={T.primary} strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "CBN Licensed",
    sub:   "Central Bank of Nigeria",
    desc:  "Payonus operates under a CBN Payment Service Provider licence, holding us to the highest regulatory standards in Nigeria.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 10v11M10 10v11M14 10v11M18 10v11" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "TLS 1.3",
    sub:   "Encryption in Transit",
    desc:  "All data in transit is encrypted using TLS 1.3. Older protocol versions are rejected at the network edge — no exceptions.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="11" width="14" height="10" rx="2" stroke={T.primary} strokeWidth="1.6"/>
        <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="12" cy="16" r="1.5" fill={T.primary}/>
      </svg>
    ),
  },
];

const PILLARS = [
  {
    title: "Data Protection",
    items: [
      { heading: "Encryption at rest", body: "All stored data is encrypted with AES-256. Encryption keys are managed through a dedicated KMS with strict rotation policies — your data is never stored in plaintext." },
      { heading: "Tokenisation", body: "Sensitive account numbers and card details are immediately replaced with opaque tokens at the point of entry. The raw value never touches our application layer." },
      { heading: "Data residency", body: "Customer data is stored and processed within African data centres by default. Cross-border transfers comply with applicable data localisation rules." },
      { heading: "Data minimisation", body: "We collect only what is necessary to process a transaction. No behavioural profiling, no selling of data to third parties — ever." },
    ],
  },
  {
    title: "Infrastructure Security",
    items: [
      { heading: "Cloud-native hardening", body: "Our infrastructure runs on enterprise-grade cloud providers with VPC isolation, private subnets, and no public-facing databases. All services are behind managed API gateways." },
      { heading: "DDoS & WAF protection", body: "Distributed denial-of-service mitigation and a Web Application Firewall operate at the network edge, filtering malicious traffic before it reaches application servers." },
      { heading: "Independent penetration testing", body: "We engage independent third-party security firms to conduct penetration tests at least once per year. Critical findings are remediated within 72 hours." },
      { heading: "99.9% uptime SLA", body: "Our architecture uses multi-region failover, automated health checks, and circuit breakers. System status is published in real time at status.payonus.com." },
    ],
  },
  {
    title: "Access & Identity",
    items: [
      { heading: "Zero-trust access model", body: "Every internal service call is authenticated and authorised. No service is implicitly trusted by virtue of being inside the network perimeter." },
      { heading: "MFA enforced company-wide", body: "Multi-factor authentication is mandatory for every Payonus employee and contractor — no exceptions. Privileged access requires hardware security keys." },
      { heading: "Least-privilege principle", body: "Access to production systems is granted on a need-to-know basis and reviewed quarterly. Engineers do not have standing access to production data." },
      { heading: "Background checks", body: "All employees and contractors with access to financial data undergo background verification before their first day." },
    ],
  },
  {
    title: "Fraud & Risk",
    items: [
      { heading: "Real-time monitoring", body: "Every transaction is evaluated by our risk engine in under 50ms. Suspicious patterns trigger instant holds and alerts without interrupting legitimate payments." },
      { heading: "Velocity & anomaly checks", body: "We apply velocity rules, geolocation checks, and behavioural baselines to detect account takeover, card testing, and money mule patterns." },
      { heading: "Chargeback management", body: "Merchants are notified immediately on dispute creation and provided with evidence bundles to support representments. Average dispute resolution time: 72 hours." },
      { heading: "KYC & AML programme", body: "Our compliance team enforces Know Your Customer and Anti-Money Laundering controls aligned with GIABA and FATF recommendations." },
    ],
  },
];

const FAQS = [
  {
    q: "What happens if there is a security incident?",
    a: "We follow a documented incident response plan. Affected customers are notified within 72 hours of confirmation in accordance with NDPA requirements. A post-incident report is published for significant events.",
  },
  {
    q: "Can I request a security questionnaire or vendor assessment?",
    a: "Yes. Enterprise customers can request our standard security questionnaire, data processing addendum, and most recent penetration test executive summary via their account manager or security@payonus.com.",
  },
  {
    q: "How are API keys and secrets managed?",
    a: "API keys are hashed before storage using a one-way function — we cannot recover them. Secrets are managed through a dedicated secrets manager with audit logging on every read. Key rotation is available on demand.",
  },
  {
    q: "Do you subcontract data processing to third parties?",
    a: "We use a small number of vetted sub-processors (listed in our Privacy Policy). Each undergoes security due diligence before onboarding and is bound by data processing agreements that mirror our own obligations.",
  },
  {
    q: "What is your data retention and deletion policy?",
    a: "Transaction records are retained for 7 years to meet regulatory requirements. All other data is deleted within 30 days of account closure. You can request immediate deletion of non-regulatory data at any time.",
  },
];

/* ═══════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════ */
export default function SecurityPage() {
  useScrollReveal();
  const { isMobile, isTablet } = useBreakpoint();
  const [scrolled,  setScrolled]  = React.useState(false);
  const [scrollPct, setScrollPct] = React.useState(0);
  const [openFaq,   setOpenFaq]   = React.useState<number | null>(null);

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
        .fade-up.d5{transition-delay:.50s;}
        .fade-up.d6{transition-delay:.60s;}

        .cert-card{transition:background .22s;}
        .cert-card:hover{background:#F5EFFE !important;}

        .pillar-item{transition:background .2s;}
        .pillar-item:hover{background:#FAFAF8 !important;}

        .faq-btn{transition:background .18s;}
        .faq-btn:hover{background:#F5EFFE;}

        .faq-answer{overflow:hidden;transition:max-height .38s cubic-bezier(.16,1,.3,1),opacity .3s;}

        .disclose-card{transition:border-color .2s,box-shadow .2s;}
        .disclose-card:hover{border-color:#C4B5FD !important;box-shadow:0 12px 36px rgba(96,9,255,.09);}
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
        <div style={{position:"relative",zIndex:1,maxWidth:1440,margin:"0 auto",padding:`0 ${hPad}px`}}>

          <span className="fade-up" style={{
            display:"block", marginBottom: isMobile ? 20 : 28,
            fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:T.orange,
          }}>• Security</span>

          <h1 className="fade-up d1" style={{
            margin:`0 0 ${isMobile ? 20 : 28}px`,
            fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
            fontSize: isMobile ? 48 : isTablet ? 60 : 72,
            lineHeight:1.04, letterSpacing:"-0.02em", color:T.headingBlack, maxWidth:820,
          }}>
            Security is<br />our <span style={{color:T.primary}}>infrastructure.</span>
          </h1>

          <p className="fade-up d2" style={{
            margin:`0 0 ${isMobile ? 36 : 48}px`,
            fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400,
            fontSize: isMobile ? 15 : 17, lineHeight:1.7, color:T.muted, maxWidth:560,
          }}>
            Every payment Payonus processes is protected by multiple independent layers of security — from the moment a transaction is initiated to the moment funds settle.
          </p>

          <div className="fade-up d3" style={{display:"flex",flexWrap:"wrap",gap:12}}>
            <a
              href="mailto:security@payonus.com"
              style={{
                fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:14,
                color:T.white, background:T.primary,
                border:"none", borderRadius:6, padding:"13px 24px",
                textDecoration:"none", transition:"opacity .15s", display:"inline-block",
              }}
              onMouseEnter={e=>(e.currentTarget.style.opacity="0.88")}
              onMouseLeave={e=>(e.currentTarget.style.opacity="1")}
            >Contact Security Team</a>
            <a
              href="#disclosure"
              style={{
                fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14,
                color:T.dark, background:"transparent",
                border:`1px solid ${T.dark}`, borderRadius:6,
                padding:"12px 24px", textDecoration:"none",
                transition:"background .15s", display:"inline-block",
              }}
              onMouseEnter={e=>(e.currentTarget.style.background="#E9DDFF")}
              onMouseLeave={e=>(e.currentTarget.style.background="transparent")}
            >Report a Vulnerability</a>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          TRUST BAR — key numbers
      ══════════════════════════════ */}
      <section style={{width:"100%",background:"#EDE9FF",padding: isMobile ? "40px 0" : "52px 0"}}>
        <div style={{
          maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px`,
          display:"grid",
          gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
          gap: isMobile ? "32px 20px" : 0,
        }}>
          {[
            { stat: "AES-256",  label: "Encryption at rest" },
            { stat: "TLS 1.3",  label: "Encryption in transit" },
            { stat: "99.9%",    label: "Uptime SLA" },
            { stat: "< 50 ms",  label: "Risk engine response" },
          ].map((item, i) => (
            <div key={i} style={{
              textAlign:"center",
              padding: isMobile ? "0" : "0 24px",
              borderRight: (!isMobile && i < 3) ? `1px solid rgba(96,9,255,0.15)` : "none",
            }}>
              <p style={{margin:"0 0 6px",fontFamily:"Rubik, sans-serif",fontStyle:"italic",fontWeight:700,fontSize: isMobile ? 26 : 32,color:T.primary}}>{item.stat}</p>
              <p style={{margin:0,fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:13,color:T.muted}}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════
          COMPLIANCE & CERTIFICATIONS
      ══════════════════════════════ */}
      <section style={{width:"100%",background:T.white,padding: isMobile ? "64px 0" : "88px 0"}}>
        <div style={{maxWidth:1440,margin:"0 auto",padding:`0 ${hPad}px`}}>

          <span className="fade-up" style={{
            display:"block", marginBottom:20,
            fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:13, color:T.orange,
          }}>— Compliance & Certifications</span>

          <h2 className="fade-up d1" style={{
            margin:`0 0 ${isMobile ? 40 : 56}px`,
            fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
            fontSize: isMobile ? 32 : isTablet ? 44 : 52,
            lineHeight:1.1, color:T.headingBlack,
          }}>
            Built to meet the<br /><span style={{color:T.primary}}>highest standards.</span>
          </h2>

          {(() => {
            const cols = isMobile ? 1 : isTablet ? 2 : 3;
            return (
              <div style={{
                display:"grid",
                gridTemplateColumns:`repeat(${cols}, 1fr)`,
                border:`1px solid ${T.borderLight}`,
                borderRadius:16,
                overflow:"hidden",
              }}>
                {CERTS.map((cert, i) => {
                  const isLastInRow = (i + 1) % cols === 0;
                  const isLastRow   = i >= CERTS.length - cols;
                  return (
                    <div
                      key={cert.label}
                      className={`fade-up cert-card d${(i % 6) + 1}`}
                      style={{
                        background:T.bg,
                        padding: isMobile ? "28px 24px" : "36px 32px",
                        borderRight:  !isLastInRow ? `1px solid ${T.borderLight}` : "none",
                        borderBottom: !isLastRow   ? `1px solid ${T.borderLight}` : "none",
                      }}
                    >
                      <div style={{
                        width:56, height:56, borderRadius:12,
                        background:"#EDE9FF", border:`1px solid ${T.borderLight}`,
                        display:"flex", alignItems:"center", justifyContent:"center",
                        marginBottom:20,
                      }}>
                        {cert.icon}
                      </div>
                      <p style={{margin:"0 0 4px",fontFamily:"DM Sans, sans-serif",fontWeight:700,fontSize:16,color:T.dark}}>{cert.label}</p>
                      <p style={{margin:"0 0 12px",fontFamily:"DM Sans, sans-serif",fontWeight:500,fontSize:12,color:T.primary,textTransform:"uppercase",letterSpacing:"0.06em"}}>{cert.sub}</p>
                      <p style={{margin:0,fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:14,lineHeight:1.72,color:T.muted}}>{cert.desc}</p>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>
      </section>

      {/* ══════════════════════════════
          SECURITY PILLARS
      ══════════════════════════════ */}
      {PILLARS.map((pillar, pi) => (
        <section
          key={pillar.title}
          style={{
            width:"100%",
            background: pi % 2 === 0 ? T.bg : T.white,
            padding: isMobile ? "64px 0" : "88px 0",
          }}
        >
          <div style={{maxWidth:1440,margin:"0 auto",padding:`0 ${hPad}px`}}>
            <div style={{
              display:"grid",
              gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "280px 1fr",
              gap: isMobile ? 32 : isTablet ? 40 : 80,
              alignItems:"start",
            }}>

              {/* Left label */}
              <div style={{paddingTop: isMobile ? 0 : 4}}>
                <span className="fade-up" style={{
                  display:"block", marginBottom:12,
                  fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:13, color:T.orange,
                }}>— {String(pi + 1).padStart(2,"0")}</span>
                <h2 className="fade-up d1" style={{
                  margin:0,
                  fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
                  fontSize: isMobile ? 28 : isTablet ? 36 : 40,
                  lineHeight:1.12, color:T.headingBlack,
                }}>{pillar.title}</h2>
              </div>

              {/* Right items — conjoined */}
              <div style={{
                border:`1px solid ${T.borderLight}`,
                borderRadius:14,
                overflow:"hidden",
              }}>
                {pillar.items.map((item, ii) => (
                  <div
                    key={item.heading}
                    className={`fade-up pillar-item d${ii + 1}`}
                    style={{
                      padding: isMobile ? "24px 20px" : "28px 32px",
                      background:T.white,
                      borderBottom: ii < pillar.items.length - 1 ? `1px solid ${T.borderLight}` : "none",
                      display:"flex", gap: isMobile ? 14 : 20, alignItems:"flex-start",
                    }}
                  >
                    <div style={{
                      flexShrink:0,
                      width:8, height:8, borderRadius:"50%",
                      background:T.primary, marginTop:7,
                    }}/>
                    <div>
                      <p style={{margin:"0 0 6px",fontFamily:"DM Sans, sans-serif",fontWeight:600,fontSize: isMobile ? 14 : 15,color:T.dark}}>{item.heading}</p>
                      <p style={{margin:0,fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:14,lineHeight:1.75,color:T.muted}}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* ══════════════════════════════
          RESPONSIBLE DISCLOSURE
      ══════════════════════════════ */}
      <section id="disclosure" style={{width:"100%",background:T.bg,padding: isMobile ? "64px 0" : "88px 0",scrollMarginTop:80}}>
        <div style={{maxWidth:1440,margin:"0 auto",padding:`0 ${hPad}px`}}>

          <div style={{
            display:"grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "1fr 1fr",
            gap: isMobile ? 40 : 72,
            alignItems:"center",
          }}>
            <div>
              <span className="fade-up" style={{
                display:"block", marginBottom:20,
                fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:13, color:T.orange,
              }}>— Responsible Disclosure</span>

              <h2 className="fade-up d1" style={{
                margin:`0 0 ${isMobile ? 16 : 20}px`,
                fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
                fontSize: isMobile ? 30 : isTablet ? 40 : 46,
                lineHeight:1.1, color:T.headingBlack,
              }}>
                Found a<br /><span style={{color:T.primary}}>vulnerability?</span>
              </h2>

              <p className="fade-up d2" style={{
                margin:`0 0 ${isMobile ? 24 : 32}px`,
                fontFamily:"DM Sans, sans-serif", fontWeight:400,
                fontSize: isMobile ? 14 : 15, lineHeight:1.8, color:T.muted,
              }}>
                We welcome responsible security research. If you discover a potential vulnerability in Payonus systems, please report it to us privately before public disclosure. We commit to:
              </p>

              <ul className="fade-up d3" style={{margin:`0 0 ${isMobile ? 28 : 36}px`,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:12}}>
                {[
                  "Acknowledge your report within 24 hours",
                  "Provide a timeline for investigation and fix",
                  "Keep you informed throughout the process",
                  "Give credit in our security acknowledgements",
                ].map((item, i) => (
                  <li key={i} style={{display:"flex",alignItems:"flex-start",gap:10}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{flexShrink:0,marginTop:1}}>
                      <circle cx="12" cy="12" r="10" fill="#EDE9FF"/>
                      <path d="M8 12l3 3 5-5" stroke={T.primary} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:14,lineHeight:1.72,color:T.muted}}>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                className="fade-up d4"
                href="mailto:security@payonus.com?subject=Vulnerability Report"
                style={{
                  display:"inline-block",
                  fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:14,
                  color:T.white, background:T.primary,
                  borderRadius:6, padding:"13px 28px",
                  textDecoration:"none", transition:"opacity .15s",
                }}
                onMouseEnter={e=>(e.currentTarget.style.opacity="0.88")}
                onMouseLeave={e=>(e.currentTarget.style.opacity="1")}
              >Report to security@payonus.com</a>
            </div>

            {/* Right: scope card */}
            <div className="fade-up d2 disclose-card" style={{
              background:T.white,
              border:`1px solid ${T.borderLight}`,
              borderRadius:16,
              padding: isMobile ? "28px 24px" : "36px 36px",
            }}>
              <p style={{margin:"0 0 20px",fontFamily:"DM Sans, sans-serif",fontWeight:700,fontSize:16,color:T.dark}}>In scope</p>
              <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:28}}>
                {[
                  "payonus.com and subdomains",
                  "Payonus merchant dashboard",
                  "Public REST API endpoints",
                  "Mobile applications (iOS & Android)",
                  "Authentication and authorisation flows",
                ].map((s, i) => (
                  <div key={i} style={{display:"flex",alignItems:"center",gap:10}}>
                    <div style={{width:6,height:6,borderRadius:"50%",background:T.primary,flexShrink:0}}/>
                    <span style={{fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:14,color:T.muted}}>{s}</span>
                  </div>
                ))}
              </div>

              <hr style={{border:"none",borderTop:`1px solid ${T.borderLight}`,margin:"0 0 20px"}}/>

              <p style={{margin:"0 0 14px",fontFamily:"DM Sans, sans-serif",fontWeight:700,fontSize:16,color:T.dark}}>Out of scope</p>
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                {[
                  "Social engineering and phishing attacks",
                  "Denial-of-service or load testing",
                  "Third-party services not under our control",
                ].map((s, i) => (
                  <div key={i} style={{display:"flex",alignItems:"center",gap:10}}>
                    <div style={{width:6,height:6,borderRadius:"50%",background:T.orange,flexShrink:0}}/>
                    <span style={{fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:14,color:T.muted}}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FAQs
      ══════════════════════════════ */}
      <section style={{width:"100%",background:T.white,padding: isMobile ? "64px 0" : "88px 0"}}>
        <div style={{maxWidth:1440,margin:"0 auto",padding:`0 ${hPad}px`}}>

          <span className="fade-up" style={{
            display:"block", marginBottom:20,
            fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:13, color:T.orange,
          }}>— Common Questions</span>

          <h2 className="fade-up d1" style={{
            margin:`0 0 ${isMobile ? 36 : 52}px`,
            fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500,
            fontSize: isMobile ? 30 : isTablet ? 40 : 46,
            lineHeight:1.1, color:T.headingBlack,
          }}>
            Security <span style={{color:T.primary}}>FAQs.</span>
          </h2>

          <div style={{
            border:`1px solid ${T.borderLight}`,
            borderRadius:14,
            overflow:"hidden",
          }}>
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} style={{borderBottom: i < FAQS.length - 1 ? `1px solid ${T.borderLight}` : "none"}}>
                  <button
                    className="faq-btn fade-up"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{
                      width:"100%", background:"none", border:"none", cursor:"pointer",
                      display:"flex", alignItems:"center", justifyContent:"space-between",
                      gap:16, padding: isMobile ? "20px 20px" : "22px 28px",
                      textAlign:"left",
                    }}
                  >
                    <span style={{fontFamily:"DM Sans, sans-serif",fontWeight:600,fontSize: isMobile ? 14 : 15,color:T.dark,lineHeight:1.4}}>{faq.q}</span>
                    <span style={{
                      flexShrink:0, width:24, height:24, borderRadius:"50%",
                      background: isOpen ? T.primary : "#EDE9FF",
                      display:"flex", alignItems:"center", justifyContent:"center",
                      transition:"background .2s, transform .3s",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M6 1v10M1 6h10" stroke={isOpen ? "#fff" : T.primary} strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </button>
                  <div style={{
                    maxHeight: isOpen ? 300 : 0,
                    opacity: isOpen ? 1 : 0,
                    overflow:"hidden",
                    transition:"max-height .38s cubic-bezier(.16,1,.3,1), opacity .28s",
                  }}>
                    <p style={{
                      margin:0, padding: isMobile ? "0 20px 20px" : "0 28px 24px",
                      fontFamily:"DM Sans, sans-serif", fontWeight:400,
                      fontSize:14, lineHeight:1.78, color:T.muted,
                    }}>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          BOTTOM CTA
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
                Security questions<br />for your <span style={{color:T.primary}}>team?</span>
              </h2>
              <p style={{
                margin:"0 0 28px",
                fontFamily:"DM Sans, sans-serif", fontWeight:400,
                fontSize:15, lineHeight:1.65, color:T.muted, maxWidth:440,
              }}>
                Our security team reviews every enterprise onboarding. Send your questionnaire, request our latest pen-test report, or ask about our DPA — we respond within one business day.
              </p>
              <div style={{display:"flex",flexWrap:"wrap",gap:12}}>
                <a
                  href="mailto:security@payonus.com"
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
                  Contact Security Team
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href="/support"
                  style={{
                    fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14,
                    color:T.muted, background:"transparent",
                    border:`1px solid ${T.muted}`, borderRadius:6,
                    padding:"12px 20px", textDecoration:"none",
                    transition:"background .15s", display:"inline-block",
                  }}
                  onMouseEnter={e=>(e.currentTarget.style.background="#E9DDFF")}
                  onMouseLeave={e=>(e.currentTarget.style.background="transparent")}
                >General Support</a>
              </div>
            </div>

            {/* Right columns — desktop only */}
            {!isMobile && !isTablet && (<>
              <div>
                <div style={{width:44,height:44,borderRadius:10,background:"#EDE9FF",border:`1px solid ${T.borderLight}`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16}}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.5C16.5 22.15 20 17.25 20 12V6l-8-4z" stroke={T.primary} strokeWidth="1.6" strokeLinejoin="round"/>
                    <path d="M9 12l2 2 4-4" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p style={{margin:"0 0 8px",fontFamily:"DM Sans, sans-serif",fontWeight:700,fontSize:16,lineHeight:1.3,color:T.dark}}>Request a questionnaire</p>
                <p style={{margin:"0 0 14px",fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:13.5,lineHeight:1.65,color:T.muted}}>Send your vendor security assessment and we'll complete it within 3 business days.</p>
                <a href="mailto:security@payonus.com?subject=Security Questionnaire Request" className="arrow-link" style={{display:"inline-flex",alignItems:"center",gap:4,fontFamily:"DM Sans, sans-serif",fontWeight:500,fontSize:13,color:T.primary,textDecoration:"none"}}
                >Email us <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke={T.primary} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
              </div>

              <div>
                <div style={{width:44,height:44,borderRadius:10,background:"#EDE9FF",border:`1px solid ${T.borderLight}`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16}}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="8" stroke={T.primary} strokeWidth="1.6"/>
                    <path d="M21 21l-4.35-4.35" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                </div>
                <p style={{margin:"0 0 8px",fontFamily:"DM Sans, sans-serif",fontWeight:700,fontSize:16,lineHeight:1.3,color:T.dark}}>Report a vulnerability</p>
                <p style={{margin:"0 0 14px",fontFamily:"DM Sans, sans-serif",fontWeight:400,fontSize:13.5,lineHeight:1.65,color:T.muted}}>Found a security issue? We welcome responsible disclosure and acknowledge every report.</p>
                <a href="#disclosure" className="arrow-link" style={{display:"inline-flex",alignItems:"center",gap:4,fontFamily:"DM Sans, sans-serif",fontWeight:500,fontSize:13,color:T.primary,textDecoration:"none"}}
                >View disclosure policy <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke={T.primary} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
              </div>
            </>)}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
