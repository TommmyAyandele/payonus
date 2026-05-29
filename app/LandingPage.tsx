"use client";

import React from "react";
import { useBreakpoint } from "./use-breakpoint";
import Navbar, { T } from "./Navbar";
import BackboneSection from "./BackboneSection";
import ComplianceSection from "./ComplianceSection";
import TestimonialsSection from "./TestimonialsSection";
import CTASection from "./CTASection";
import Footer from "./Footer";

/* ─── SCROLL REVEAL HOOK ─── */
function useScrollReveal(isMobile: boolean) {
  React.useEffect(() => {
    const els = document.querySelectorAll(".fade-up, .card-in");
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.10 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [isMobile]);
}

/* ─── HERO ─── */
const CYCLE_WORDS  = ["Speed", "Security", "Reliability"];
const CYCLE_COLORS = [T.primary, T.primary, T.orange];

function Hero() {
  const { isMobile, isTablet } = useBreakpoint();
  const [wordIdx, setWordIdx] = React.useState(0);
  const [animKey, setAnimKey] = React.useState(0);
  const textRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const id = setInterval(() => {
      setWordIdx(i => (i + 1) % CYCLE_WORDS.length);
      setAnimKey(k => k + 1);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  const onParallax = (e: React.MouseEvent<HTMLElement>) => {
    if (isMobile || !textRef.current) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width  / 2) / width;
    const y = (e.clientY - top  - height / 2) / height;
    textRef.current.style.transform = `translate(${x * 14}px,${y * 8}px)`;
  };

  const onParallaxLeave = () => {
    if (!textRef.current) return;
    textRef.current.style.transition = "transform 0.7s cubic-bezier(0.16,1,0.3,1)";
    textRef.current.style.transform  = "";
    setTimeout(() => { if (textRef.current) textRef.current.style.transition = ""; }, 700);
  };

  const hPad    = isMobile ? 20 : isTablet ? 48 : 80;
  const h1Size  = isMobile ? 62 : isTablet ? 64 : 90;
  const subSize = isMobile ? 16 : isTablet ? 18 : 20;
  const logoH   = isMobile ? 96 : 126;

  return (
    <section
      style={{ position:"relative", width:"100%", height:"100vh", background:T.bg, overflow:"hidden" }}
      onMouseMove={onParallax}
      onMouseLeave={onParallaxLeave}
    >
      {/* World map */}
      <div className="map-rotate" style={{ position:"absolute", left:"50%", top:"50%", pointerEvents:"none", width: isMobile ? 900 : 1600, zIndex:0 }}>
        <img src="/world-map-dots.png" alt="" aria-hidden style={{ display:"block", width:"100%", opacity:0.14, filter:"invert(1)" }} />
      </div>

      {/* Text content — left-aligned, vertically centred between nav and logo bar */}
      <div style={{
        position:       "absolute",
        top:            64,          /* clear the sticky navbar */
        left:           0,
        right:          0,
        bottom:         logoH,       /* sit above the logo bar */
        zIndex:         1,
        display:        "flex",
        flexDirection:  "column",
        justifyContent: "center",    /* vertical centre in that usable band */
      }}>
        <div style={{ maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px`, width:"100%", boxSizing:"border-box", display:"flex", justifyContent:"center" }}>
          <div ref={textRef} style={{ width: isMobile ? "100%" : 700, display:"flex", flexDirection:"column", gap: isMobile ? 20 : 40, transition:"transform 0.15s linear", willChange:"transform" }}>

            <span style={{ fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize: isMobile ? 13 : 16, letterSpacing:"0.0094em", color:T.orange }}>
              — PAN-AFRICAN PAYMENT INFRASTRUCTURE
            </span>

            <div style={{ display:"flex", flexDirection:"column", gap: isMobile ? 16 : 24 }}>
              <h1 style={{ maxWidth:"100%", margin:0, fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:h1Size, lineHeight:1.05, letterSpacing:"-0.02em", color:T.headingBlack }}>
                Built for<br />
                <span key={animKey} className="word-in" style={{ color:CYCLE_COLORS[wordIdx] }}>{CYCLE_WORDS[wordIdx]}.</span><br />
                Made for trust.
              </h1>

              <p style={{ maxWidth:"100%", margin:0, fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400, fontSize:subSize, lineHeight:1.5, color:T.muted }}>
                Settle payments across 14+ African markets in seconds — no delays, no workarounds, no babysitting.
              </p>

              <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center", gap:12 }}>
                <button style={{ fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:T.white, background:T.primary, border:"none", borderRadius:4, padding:"11px 24px", cursor:"pointer", transition:"opacity .15s" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >Get Started</button>
                <button style={{ fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14, color:T.muted, background:"transparent", border:`1px solid ${T.muted}`, borderRadius:4, padding:"11px 24px", cursor:"pointer", transition:"background .15s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#E9DDFF")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >Contact Sales</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo bar */}
      <div style={{ position:"absolute", left:0, bottom:0, width:"100%", height:logoH, overflow:"hidden" }}>
        <div className="marquee-track" style={{ display:"flex", width:"200%", height:"100%" }}>
          <img src="/logo-bar.png" alt="Trusted by industry-leading businesses" style={{ display:"block", width:"50%", height:"100%", objectFit:"cover", flexShrink:0 }} />
          <img src="/logo-bar.png" aria-hidden style={{ display:"block", width:"50%", height:"100%", objectFit:"cover", flexShrink:0 }} />
        </div>
      </div>

      {!isMobile && (
        <a href="#products" className="scroll-hint" style={{ position:"absolute", bottom: logoH + 22, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:6, textDecoration:"none", color:T.muted, opacity:0.5 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      )}
    </section>
  );
}

/* ─── PRODUCT WIREFRAMES ─── */
// Cross-fades a shimmer bar → real content
function Cell({ loaded, h, w, flex, d = 0, children, style }: {
  loaded: boolean; h: number; w?: string | number; flex?: number; d?: number;
  children: React.ReactNode; style?: React.CSSProperties;
}) {
  const tr = `opacity 0.55s ease ${d}s`;
  return (
    <div style={{ position:"relative", height:h, width:w, flex, flexShrink:flex?undefined:0, borderRadius:3, overflow:"hidden", ...style }}>
      <div style={{ position:"absolute", inset:0, borderRadius:3, ...sk, opacity:loaded?0:1, transition:tr }} />
      <div style={{ position:"absolute", inset:0, borderRadius:3, opacity:loaded?1:0, transition:tr, display:"flex", alignItems:"center" }}>
        {children}
      </div>
    </div>
  );
}

const sk: React.CSSProperties = {
  background: "linear-gradient(90deg,#F0F0F0 25%,#F8F8F8 50%,#F0F0F0 75%)",
  backgroundSize: "600px 100%",
  animation: "skShimmer 1.8s ease-in-out infinite",
  borderRadius: 3,
};

/* Cycle: shimmer → loaded (2.5 s) → shimmer (1.2 s) → repeat */
function useLoadCycle(initialDelay = 0) {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const doLoad = () => {
      setLoaded(true);
      t = setTimeout(() => { setLoaded(false); t = setTimeout(doLoad, 1200); }, 2500);
    };
    t = setTimeout(doLoad, initialDelay);
    return () => clearTimeout(t);
  }, []);
  return loaded;
}

/* Cross-fades between a shimmer bar and a solid colour */

function Chrome({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width:"100%", height:"100%", background:"#FFF", display:"flex", flexDirection:"column", userSelect:"none", pointerEvents:"none" }}>
      <div style={{ background:"#EBEBEB", display:"flex", alignItems:"center", padding:"6px 10px", gap:6, borderBottom:"1px solid #DEDEDE", flexShrink:0 }}>
        <div style={{ display:"flex", gap:4 }}>
          {["#FF5F57","#FEBC2E","#28C840"].map(c => <div key={c} style={{ width:8,height:8,borderRadius:"50%",background:c }} />)}
        </div>
        <div style={{ flex:1,background:"#DCDCDC",borderRadius:3,height:13,display:"flex",alignItems:"center",padding:"0 7px" }}>
          <div style={{ width:"35%",height:5,...sk }} />
        </div>
      </div>
      {children}
    </div>
  );
}

/* Payouts — recipient list with real names + amounts */
function PayoutsWireframe({ loaded }: { loaded: boolean }) {
  const rows = [
    { initials:"AO", name:"Amara Osei",       bank:"GTBank · ****4123",  amt:"₦45,000",  sc:"#22C55E" },
    { initials:"FD", name:"Fatima Diallo",     bank:"UBA · ****8801",     amt:"$1,200",   sc:"#F4B249" },
    { initials:"KM", name:"Kwame Mensah",      bank:"Zenith · ****3390",  amt:"₦28,500",  sc:"#22C55E" },
    { initials:"ZA", name:"Zainab Abubakar",   bank:"Access · ****7712",  amt:"₦12,000",  sc:"#94A3B8" },
    { initials:"EE", name:"Emeka Eze",         bank:"FCMB · ****6647",    amt:"$850",     sc:"#22C55E" },
  ];
  const nav = ["Dashboard","Payouts","Recipients","History","Settings"];
  return (
    <Chrome>
      <div style={{ flex:1,display:"flex",minHeight:0 }}>
        <div style={{ width:"23%",flexShrink:0,background:"#FAFAFA",borderRight:"1px solid #F0F0F0",padding:"10px 7px",display:"flex",flexDirection:"column",gap:5 }}>
          <div style={{ background:loaded?"#6009FF":"#F4B249",transition:"background 0.6s",borderRadius:4,padding:"5px 7px",display:"flex",alignItems:"center",gap:5,marginBottom:3 }}>
            <div style={{ width:8,height:8,background:"rgba(255,255,255,0.5)",borderRadius:2,flexShrink:0 }} />
            <div style={{ flex:1,height:5,background:"rgba(255,255,255,0.3)",borderRadius:2 }} />
          </div>
          {nav.map((n,i) => (
            <Cell key={i} loaded={loaded} h={18} w="100%" d={i*0.06} style={{ borderRadius:4 }}>
              <div style={{ width:"100%",height:"100%",padding:"0 5px",display:"flex",alignItems:"center",
                background:i===1&&loaded?"rgba(96,9,255,0.08)":"transparent",borderRadius:4 }}>
                <span style={{ fontFamily:"DM Sans,sans-serif",fontSize:9,fontWeight:i===1?600:400,color:i===1?"#6009FF":"#6B6877" }}>{n}</span>
              </div>
            </Cell>
          ))}
        </div>
        <div style={{ flex:1,padding:"10px 11px",display:"flex",flexDirection:"column",gap:6,minWidth:0 }}>
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
            <Cell loaded={loaded} h={14} w="50%" d={0}>
              <span style={{ fontFamily:"DM Sans,sans-serif",fontSize:11,fontWeight:700,color:"#1C1B1F" }}>Send Payouts</span>
            </Cell>
            <Cell loaded={loaded} h={22} w={80} d={0.05} style={{ borderRadius:4 }}>
              <div style={{ width:"100%",height:"100%",background:"#6009FF",borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center" }}>
                <span style={{ fontFamily:"DM Sans,sans-serif",fontSize:9,fontWeight:600,color:"#FFF" }}>+ New Payout</span>
              </div>
            </Cell>
          </div>
          <div style={{ height:22,borderRadius:4,background:"#F5F5F5",display:"flex",alignItems:"center",padding:"0 8px",gap:5,flexShrink:0 }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" style={{ flexShrink:0,opacity:loaded?0.7:0,transition:"opacity 0.5s" }}>
              <circle cx="11" cy="11" r="7" stroke="#94A3B8" strokeWidth="2.5"/>
              <path d="M16.5 16.5L21 21" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <Cell loaded={loaded} h={6} flex={1} d={0.08}>
              <span style={{ fontFamily:"DM Sans,sans-serif",fontSize:9,color:"#94A3B8" }}>Search recipients…</span>
            </Cell>
          </div>
          {rows.map((r,i) => (
            <div key={i} style={{ display:"flex",alignItems:"center",gap:7,paddingBottom:5,borderBottom:"1px solid #F5F5F5",flexShrink:0 }}>
              <Cell loaded={loaded} h={26} w={26} d={i*0.07} style={{ borderRadius:"50%",flexShrink:0 }}>
                <div style={{ width:26,height:26,borderRadius:"50%",background:"#DDD6FE",display:"flex",alignItems:"center",justifyContent:"center" }}>
                  <span style={{ fontFamily:"DM Sans,sans-serif",fontSize:8,fontWeight:700,color:"#6009FF" }}>{r.initials}</span>
                </div>
              </Cell>
              <div style={{ flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:3 }}>
                <Cell loaded={loaded} h={10} w="90%" d={i*0.07}>
                  <span style={{ fontFamily:"DM Sans,sans-serif",fontSize:9,fontWeight:600,color:"#1C1B1F",whiteSpace:"nowrap" }}>{r.name}</span>
                </Cell>
                <Cell loaded={loaded} h={9} w="80%" d={i*0.07+0.05}>
                  <span style={{ fontFamily:"DM Sans,sans-serif",fontSize:8,color:"#94A3B8",whiteSpace:"nowrap" }}>{r.bank}</span>
                </Cell>
              </div>
              <div style={{ display:"flex",alignItems:"center",gap:5,flexShrink:0 }}>
                <Cell loaded={loaded} h={10} w={50} d={i*0.07}>
                  <span style={{ fontFamily:"DM Sans,sans-serif",fontSize:9,fontWeight:700,color:"#1C1B1F" }}>{r.amt}</span>
                </Cell>
                <div style={{ width:7,height:7,borderRadius:"50%",background:r.sc,flexShrink:0 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Chrome>
  );
}

/* Collections — checkout form with real card data */
function CollectionsWireframe({ loaded }: { loaded: boolean }) {
  const fields = [
    { label:"Card number", val:"4242  4242  4242  4242" },
    { label:"Expiry date", val:"12 / 26" },
    { label:"CVV",         val:"• • •" },
  ];
  return (
    <Chrome>
      <div style={{ flex:1,display:"flex",alignItems:"center",justifyContent:"center",background:"#F8F7FF",padding:"12px" }}>
        <div style={{ width:"100%",maxWidth:300,background:"#FFF",borderRadius:10,border:"1px solid #E7E0EC",padding:"14px",display:"flex",flexDirection:"column",gap:9 }}>
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
            <div style={{ display:"flex",alignItems:"center",gap:1 }}>
              <span style={{ fontFamily:"DM Sans,sans-serif",fontWeight:700,fontSize:10,color:"#6009FF" }}>pay</span>
              <div style={{ width:10,height:10,borderRadius:"50%",background:"#F4B249",display:"flex",alignItems:"center",justifyContent:"center" }}>
                <span style={{ fontSize:6,fontWeight:700,color:"#fff",lineHeight:1 }}>O</span>
              </div>
              <span style={{ fontFamily:"DM Sans,sans-serif",fontWeight:700,fontSize:10,color:"#6009FF" }}>.us</span>
            </div>
            <Cell loaded={loaded} h={8} w={65} d={0}>
              <span style={{ fontFamily:"DM Sans,sans-serif",fontSize:8,color:"#6B6877" }}>Checkout · Secure</span>
            </Cell>
          </div>
          <div style={{ background:"#F8F7FF",borderRadius:8,padding:"10px",textAlign:"center" }}>
            <Cell loaded={loaded} h={9} w={70} d={0.05} style={{ margin:"0 auto 5px" }}>
              <span style={{ fontFamily:"DM Sans,sans-serif",fontSize:9,color:"#6B6877",width:"100%",textAlign:"center" }}>Total amount</span>
            </Cell>
            <Cell loaded={loaded} h={20} w={130} d={0.08} style={{ margin:"0 auto",borderRadius:4 }}>
              <span style={{ fontFamily:"DM Sans,sans-serif",fontSize:18,fontWeight:800,color:"#1C1B1F",width:"100%",textAlign:"center" }}>₦25,000.00</span>
            </Cell>
          </div>
          <div style={{ display:"flex",gap:5 }}>
            {["Card","Transfer","USSD"].map((m,i) => (
              <div key={m} style={{ flex:1,height:24,borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center",
                background:i===0?(loaded?"#6009FF":"#E5E7EB"):"#F4F4F5",
                border:"1px solid",borderColor:i===0?(loaded?"#6009FF":"#E5E7EB"):"#E7E0EC",transition:"all 0.6s" }}>
                <span style={{ fontFamily:"DM Sans,sans-serif",fontSize:9,fontWeight:i===0?600:400,
                  color:i===0?(loaded?"#FFF":"#6B6877"):"#6B6877",transition:"color 0.6s" }}>{m}</span>
              </div>
            ))}
          </div>
          {fields.map((f,i) => (
            <div key={i} style={{ height:30,borderRadius:4,background:"#F4F4F5",border:"1px solid #E7E0EC",display:"flex",flexDirection:"column",justifyContent:"center",padding:"0 8px" }}>
              <span style={{ fontFamily:"DM Sans,sans-serif",fontSize:7,color:"#94A3B8",lineHeight:1,marginBottom:3 }}>{f.label}</span>
              <Cell loaded={loaded} h={10} w="80%" d={0.1+i*0.08}>
                <span style={{ fontFamily:"DM Sans,sans-serif",fontSize:9,fontWeight:500,color:"#1C1B1F",letterSpacing:i===0?0.5:0 }}>{f.val}</span>
              </Cell>
            </div>
          ))}
          <div style={{ height:30,borderRadius:4,background:"#6009FF",display:"flex",alignItems:"center",justifyContent:"center",opacity:loaded?1:0.4,transition:"opacity 0.6s" }}>
            <span style={{ fontFamily:"DM Sans,sans-serif",fontSize:10,fontWeight:600,color:"#FFF",opacity:loaded?1:0,transition:"opacity 0.4s 0.15s" }}>
              Pay ₦25,000.00
            </span>
          </div>
        </div>
      </div>
    </Chrome>
  );
}

/* Settlements — real balance + labelled bar chart */
function SettlementsWireframe({ loaded }: { loaded: boolean }) {
  const bars = [65,82,48,90,74,55,88];
  const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  return (
    <Chrome>
      <div style={{ flex:1,padding:"11px",display:"flex",flexDirection:"column",gap:9,minWidth:0 }}>
        <div style={{ background:"linear-gradient(135deg,#6009FF 0%,#8B3FFF 100%)",borderRadius:10,padding:"11px 12px",display:"flex",flexDirection:"column",gap:7 }}>
          <Cell loaded={loaded} h={9} w="55%" d={0}>
            <span style={{ fontFamily:"DM Sans,sans-serif",fontSize:9,color:"rgba(255,255,255,0.7)" }}>Available Balance</span>
          </Cell>
          <Cell loaded={loaded} h={20} w="78%" d={0.06} style={{ borderRadius:4 }}>
            <span style={{ fontFamily:"DM Sans,sans-serif",fontSize:18,fontWeight:800,color:"#FFF" }}>₦4,285,000</span>
          </Cell>
          <div style={{ display:"flex",gap:8 }}>
            {[{ label:"Next Settlement", val:"Tomorrow" },{ label:"Pending", val:"₦820,000" }].map((s,j) => (
              <div key={j} style={{ flex:1,background:"rgba(255,255,255,0.15)",borderRadius:6,padding:"6px 8px" }}>
                <Cell loaded={loaded} h={8} w="90%" d={0.1+j*0.08} style={{ marginBottom:4 }}>
                  <span style={{ fontFamily:"DM Sans,sans-serif",fontSize:8,color:"rgba(255,255,255,0.65)" }}>{s.label}</span>
                </Cell>
                <Cell loaded={loaded} h={11} w="85%" d={0.16+j*0.08}>
                  <span style={{ fontFamily:"DM Sans,sans-serif",fontSize:10,fontWeight:700,color:"#FFF" }}>{s.val}</span>
                </Cell>
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex:1,display:"flex",flexDirection:"column",minHeight:0 }}>
          <div style={{ flex:1,display:"flex",alignItems:"flex-end",gap:4,paddingBottom:4 }}>
            {bars.map((h,i) => (
              <div key={i} style={{ flex:1,display:"flex",flexDirection:"column",justifyContent:"flex-end",height:"100%" }}>
                <div style={{ height:`${h}%`,minHeight:4,borderRadius:"3px 3px 0 0",
                  background:loaded?(i===3?"#6009FF":i===1?"#C4B5FD":"#EDE9FF"):"#E8E8E8",
                  transition:"background 0.6s ease" }} />
              </div>
            ))}
          </div>
          <div style={{ display:"flex",gap:4 }}>
            {days.map((d,i) => (
              <Cell key={i} loaded={loaded} h={9} flex={1} d={i*0.04}>
                <span style={{ fontFamily:"DM Sans,sans-serif",fontSize:7,color:"#94A3B8",width:"100%",textAlign:"center" }}>{d}</span>
              </Cell>
            ))}
          </div>
        </div>
      </div>
    </Chrome>
  );
}

/* Payment API — actual code syntax */
function PaymentApiWireframe({ loaded }: { loaded: boolean }) {
  const lines: { c: string; text: string }[] = [
    { c:"#C792EA", text:"const payout = await payonus" },
    { c:"#82AAFF", text:"  .payouts.create({" },
    { c:"#F78C6C", text:"    amount: 45000," },
    { c:"#C3E88D", text:'    currency: "NGN",' },
    { c:"#82AAFF", text:'    recipient: "rec_0xF4B2",' },
    { c:"#C3E88D", text:'    reference: "PAY-2026-001"' },
    { c:"#82AAFF", text:"  });" },
    { c:"#546E7A", text:"// → 200 OK · id: pay_9xAm" },
  ];
  return (
    <Chrome>
      <div style={{ flex:1,background:"#1E1E2E",padding:"11px 12px",display:"flex",flexDirection:"column",minHeight:0,overflow:"hidden" }}>
        <div style={{ display:"flex",gap:10,marginBottom:9,borderBottom:"1px solid rgba(255,255,255,0.08)",paddingBottom:7 }}>
          {["index.js","config.js"].map((tab,i) => (
            <span key={tab} style={{ fontFamily:"monospace",fontSize:9,color:i===0?"#CDD6F4":"#6C7086",padding:"3px 8px",borderRadius:"4px 4px 0 0",background:i===0?"rgba(255,255,255,0.08)":"transparent" }}>
              {tab}
            </span>
          ))}
        </div>
        <div style={{ display:"flex",alignItems:"center",gap:7,marginBottom:9,background:"rgba(255,255,255,0.05)",borderRadius:5,padding:"5px 10px" }}>
          <div style={{ width:7,height:7,borderRadius:"50%",background:"#22C55E",flexShrink:0 }} />
          <Cell loaded={loaded} h={9} w="55%" d={0}>
            <span style={{ fontFamily:"monospace",fontSize:9,color:"rgba(130,170,255,0.9)" }}>POST /v1/payouts</span>
          </Cell>
          <Cell loaded={loaded} h={9} w={42} d={0.06} style={{ marginLeft:"auto" }}>
            <span style={{ fontFamily:"monospace",fontSize:9,color:"#22C55E" }}>200 OK</span>
          </Cell>
        </div>
        {lines.map((l,i) => (
          <div key={i} style={{ display:"flex",alignItems:"center",gap:7,marginBottom:5 }}>
            <span style={{ fontFamily:"monospace",fontSize:8,color:"rgba(108,112,134,0.45)",width:12,textAlign:"right",flexShrink:0 }}>{i+1}</span>
            <Cell loaded={loaded} h={10} w={`${Math.min(92,l.text.length*5.4)}%`} d={i*0.055}>
              <span style={{ fontFamily:"monospace",fontSize:9,color:l.c,whiteSpace:"nowrap" }}>{l.text}</span>
            </Cell>
          </div>
        ))}
      </div>
    </Chrome>
  );
}

/* Analytics — real stats + labelled bar chart */
function AnalyticsWireframe({ loaded }: { loaded: boolean }) {
  const bars = [40,65,52,80,68,90,72,58,84,62,76,88];
  const months = ["J","F","M","A","M","J","J","A","S","O","N","D"];
  const stats = [
    { accent:"#6009FF", bg:"rgba(96,9,255,0.1)",   label:"Total Volume", val:"₦1.2M"  },
    { accent:"#22C55E", bg:"rgba(34,197,94,0.1)",  label:"Growth",       val:"+24.3%" },
    { accent:"#F4B249", bg:"rgba(244,178,73,0.1)", label:"Success Rate",  val:"98.4%"  },
  ];
  return (
    <Chrome>
      <div style={{ flex:1,padding:"11px",display:"flex",flexDirection:"column",gap:9,minWidth:0 }}>
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:7 }}>
          {stats.map((s,i) => (
            <div key={i} style={{ background:loaded?s.bg:"#F5F5F5",transition:"background 0.6s",borderRadius:8,padding:"8px 7px" }}>
              <Cell loaded={loaded} h={9} w="95%" d={i*0.08} style={{ marginBottom:5 }}>
                <span style={{ fontFamily:"DM Sans,sans-serif",fontSize:8,color:"#6B6877",whiteSpace:"nowrap" }}>{s.label}</span>
              </Cell>
              <Cell loaded={loaded} h={13} w="90%" d={i*0.08+0.1} style={{ borderRadius:3 }}>
                <span style={{ fontFamily:"DM Sans,sans-serif",fontSize:11,fontWeight:800,color:s.accent }}>{s.val}</span>
              </Cell>
            </div>
          ))}
        </div>
        <div style={{ flex:1,display:"flex",flexDirection:"column",minHeight:0 }}>
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6 }}>
            <Cell loaded={loaded} h={10} w={100} d={0}>
              <span style={{ fontFamily:"DM Sans,sans-serif",fontSize:9,fontWeight:600,color:"#1C1B1F" }}>Monthly Revenue</span>
            </Cell>
            <Cell loaded={loaded} h={9} w={60} d={0.05} style={{ borderRadius:3 }}>
              <span style={{ fontFamily:"DM Sans,sans-serif",fontSize:8,color:"#6B6877" }}>Jan–Dec 2026</span>
            </Cell>
          </div>
          <div style={{ flex:1,display:"flex",alignItems:"flex-end",gap:2,minHeight:0 }}>
            {bars.map((h,i) => (
              <div key={i} style={{ flex:1,display:"flex",flexDirection:"column",justifyContent:"flex-end",height:"100%" }}>
                <div style={{ height:`${h}%`,minHeight:3,borderRadius:"2px 2px 0 0",
                  background:loaded?(i===5?"#6009FF":i%3===0?"#DDD6FE":"#EDE9FF"):"#E8E8E8",
                  transition:"background 0.6s ease" }} />
              </div>
            ))}
          </div>
          <div style={{ height:1,background:"#F0F0F0",marginTop:3 }} />
          <div style={{ display:"flex",gap:2,marginTop:3 }}>
            {months.map((m,i) => (
              <Cell key={i} loaded={loaded} h={9} flex={1} d={i*0.04}>
                <span style={{ fontFamily:"DM Sans,sans-serif",fontSize:7,color:"#94A3B8",width:"100%",textAlign:"center" }}>{m}</span>
              </Cell>
            ))}
          </div>
        </div>
      </div>
    </Chrome>
  );
}

/* ─── PRODUCT SECTION ─── */
type WireframeComp = React.FC<{ loaded: boolean }>;

const PRODUCT_CARDS_TOP: { title: string; Wireframe: WireframeComp }[] = [
  { title: "Payouts",     Wireframe: PayoutsWireframe     },
  { title: "Collections", Wireframe: CollectionsWireframe },
];
const PRODUCT_CARDS_BOTTOM: { title: string; Wireframe: WireframeComp }[] = [
  { title: "Instant Settlements",   Wireframe: SettlementsWireframe },
  { title: "Payment API",           Wireframe: PaymentApiWireframe  },
  { title: "Analytics & Reporting", Wireframe: AnalyticsWireframe   },
];

const ALL_CARDS = [...PRODUCT_CARDS_TOP, ...PRODUCT_CARDS_BOTTOM];

function ProductSection() {
  const { isMobile, isTablet } = useBreakpoint();
  const loaded = useLoadCycle(0);

  /* ── Mobile: touch-swipe carousel ── */
  const [activeIdx, setActiveIdx] = React.useState(0);
  const cardRefs     = React.useRef<(HTMLDivElement | null)[]>([]);
  const stageRef     = React.useRef<HTMLDivElement>(null);
  const dotRefs      = React.useRef<(HTMLDivElement | null)[]>([]);
  const hintRef      = React.useRef<HTMLDivElement>(null);
  const activeIdxRef = React.useRef(0);

  const goTo = React.useCallback((idx: number) => {
    const next = Math.max(0, Math.min(idx, ALL_CARDS.length - 1));
    activeIdxRef.current = next;
    cardRefs.current.forEach((c, i) => {
      if (!c) return;
      c.style.transition = "transform 0.38s cubic-bezier(0.16,1,0.3,1)";
      c.style.transform  = `translateY(${(i - next) * 100}%)`;
    });
    dotRefs.current.forEach((d, i) => {
      if (!d) return;
      const active = i === next;
      d.style.width      = active ? "22px" : "7px";
      d.style.background = active ? "#6009FF" : "#D0D0D0";
    });
    if (hintRef.current) {
      hintRef.current.style.opacity = next >= ALL_CARDS.length - 1 ? "0" : "0.4";
    }
    setActiveIdx(next);
  }, []);

  React.useEffect(() => {
    if (!isMobile) return;
    const stage = stageRef.current;
    if (!stage) return;

    let startY = 0;
    let startX = 0;
    let locked = false;

    const onTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
      locked = false;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (locked) { e.preventDefault(); return; }
      const dy = Math.abs(e.touches[0].clientY - startY);
      const dx = Math.abs(e.touches[0].clientX - startX);
      if (dy > dx && dy > 5) { locked = true; e.preventDefault(); }
    };
    const onTouchEnd = (e: TouchEvent) => {
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dy) > 40) goTo(activeIdxRef.current + (dy < 0 ? 1 : -1));
      locked = false;
    };

    stage.addEventListener("touchstart", onTouchStart, { passive: true });
    stage.addEventListener("touchmove",  onTouchMove,  { passive: false });
    stage.addEventListener("touchend",   onTouchEnd,   { passive: true });
    return () => {
      stage.removeEventListener("touchstart", onTouchStart);
      stage.removeEventListener("touchmove",  onTouchMove);
      stage.removeEventListener("touchend",   onTouchEnd);
    };
  }, [isMobile, goTo]);

  const card: React.CSSProperties = { background: T.bg, borderRadius: 16, overflow: "hidden" };

  /* ── Desktop hover tilt ── */
  const onTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width  - 0.5;
    const y = (e.clientY - top)  / height - 0.5;
    e.currentTarget.style.transform = `perspective(900px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) translateY(-4px)`;
  };
  const onTiltLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transition = "transform 0.55s cubic-bezier(0.16,1,0.3,1)";
    e.currentTarget.style.transform  = "";
  };

  const topDirs   = ["from-left", "from-right"] as const;
  const btmDelays = [0, 0.12, 0.22];

  /* ══════════════════════════════════════════════
     MOBILE — sticky scrolljack card reveal
  ══════════════════════════════════════════════ */
  if (isMobile) {
    return (
      <div id="products" style={{ height:"100dvh", display:"flex", flexDirection:"column", background:T.white, overflow:"hidden" }}>

        {/* Header */}
        <div style={{ padding:"72px 20px 16px", flexShrink:0 }}>
          <span style={{ fontFamily:"DM Sans, sans-serif", fontWeight:700, fontSize:14, letterSpacing:"0.08em", textTransform:"uppercase", color:T.primary, display:"block", marginBottom:14 }}>
            Products
          </span>
          <p style={{ margin:0, fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400, fontSize:24, lineHeight:1.22, color:T.headingBlack }}>
            Built for operations that<br />can't afford a delay.
          </p>
        </div>

        {/* Card stage — cards stacked below, swipe navigates */}
        <div ref={stageRef} style={{ flex:1, position:"relative", margin:"12px 20px 0", overflow:"hidden", borderRadius:16 }}>
          {ALL_CARDS.map((p, i) => (
            <div
              key={p.title}
              ref={el => { cardRefs.current[i] = el; }}
              className="product-card"
              style={{
                ...card,
                position:      "absolute",
                inset:         0,
                display:       "flex",
                flexDirection: "column",
                willChange:    "transform",
                transform:     `translateY(${i * 100}%)`,
              }}
            >
              <div style={{ padding:"14px 16px", flexShrink:0 }}>
                <h3 style={{ margin:0, fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:24, color:T.primary }}>
                  {p.title}
                </h3>
              </div>
              <div style={{ flex:1, overflow:"hidden", minHeight:0 }}>
                <p.Wireframe loaded={loaded} />
              </div>
            </div>
          ))}
        </div>

        {/* Progress dots + swipe hint */}
        <div style={{ padding:"14px 20px 28px", display:"flex", justifyContent:"space-between", alignItems:"center", flexShrink:0 }}>
          <div style={{ display:"flex", gap:8, alignItems:"center" }}>
            {ALL_CARDS.map((_, i) => (
              <div
                key={i}
                ref={el => { dotRefs.current[i] = el; }}
                onClick={() => goTo(i)}
                style={{
                  width:        i === 0 ? 22 : 7,
                  height:       7,
                  borderRadius: 4,
                  background:   i === 0 ? T.primary : "#D0D0D0",
                  transition:   "width 0.3s cubic-bezier(0.16,1,0.3,1), background 0.3s",
                  cursor:       "pointer",
                }}
              />
            ))}
          </div>
          <div ref={hintRef} style={{ display:"flex", alignItems:"center", gap:5, opacity:0.4, transition:"opacity 0.25s" }}>
            <span style={{ fontFamily:"DM Sans, sans-serif", fontSize:12, color:T.muted }}>swipe</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12l7 7 7-7" stroke={T.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

      </div>
    );
  }

  /* ══════════════════════════════════════════════
     DESKTOP / TABLET — per-card scroll-entry grid
  ══════════════════════════════════════════════ */
  const hPad   = isTablet ? 48 : 80;
  const descSz = 42;

  return (
    <section id="products" style={{ width:"100%", background:T.white, padding:"100px 0 80px" }}>
      <div style={{ maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px` }}>

        <span style={{ fontFamily:"DM Sans, sans-serif", fontWeight:700, fontSize:16, letterSpacing:"0.08em", textTransform:"uppercase", color:T.primary, display:"block", marginBottom:24 }}>
          Products
        </span>

        <p className="fade-up" style={{ margin:`0 0 64px`, fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400, fontSize:descSz, lineHeight:1.15, color:T.headingBlack }}>
          Built for operations that can't afford a delay. Every product in the payonus suite is designed to eliminate payment friction at scale.
        </p>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24, marginBottom:24 }}>
          {PRODUCT_CARDS_TOP.map((p, i) => (
            <div
              key={p.title}
              className={`product-card card-in ${topDirs[i]}`}
              style={card}
              onMouseMove={onTilt}
              onMouseLeave={onTiltLeave}
            >
              <div style={{ padding:"16px 22px" }}>
                <h3 style={{ margin:0, fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:32, color:T.dark }}>{p.title}</h3>
              </div>
              <div style={{ width:"100%", height:420, overflow:"hidden" }}>
                <p.Wireframe loaded={loaded} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:24 }}>
          {PRODUCT_CARDS_BOTTOM.map((p, i) => (
            <div
              key={p.title}
              className="product-card card-in"
              style={{ ...card, transitionDelay:`${btmDelays[i]}s` }}
              onMouseMove={onTilt}
              onMouseLeave={onTiltLeave}
            >
              <div style={{ padding:"16px 22px" }}>
                <h3 style={{ margin:0, fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:32, color:T.dark }}>{p.title}</h3>
              </div>
              <div style={{ width:"100%", height:280, overflow:"hidden" }}>
                <p.Wireframe loaded={loaded} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ─── ROOT ─── */
export default function PayonUsLandingPage() {
  const { isMobile } = useBreakpoint();
  useScrollReveal(isMobile);
  const [scrolled, setScrolled]   = React.useState(false);
  const [scrollPct, setScrollPct] = React.useState(0);

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
        @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=Archivo:wght@600&display=swap');
        html, body { margin:0; padding:0; background:${T.bg}; }
        *, *::before, *::after { box-sizing:border-box; }
        img { display:block; }

        /* Marquee */
        @keyframes marquee { from { transform:translateX(0); } to { transform:translateX(-50%); } }
        .marquee-track { animation: marquee 32s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }

        /* World map drift */
        @keyframes mapDrift {
          0%   { transform: translate(-50%,-50%) translate(0px,   0px);  }
          25%  { transform: translate(-50%,-50%) translate(18px, -14px); }
          50%  { transform: translate(-50%,-50%) translate(8px,   16px); }
          75%  { transform: translate(-50%,-50%) translate(-16px, 6px);  }
          100% { transform: translate(-50%,-50%) translate(0px,   0px);  }
        }
        .map-rotate { animation: mapDrift 24s ease-in-out infinite; will-change: transform; }

        /* Hero word swap */
        @keyframes wordFadeIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
        .word-in { display:inline-block; animation: wordFadeIn 0.35s ease forwards; }

        /* Scroll reveal */
        .fade-up { opacity:0; transform:translateY(36px); transition: opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1); }
        .fade-up.visible { opacity:1; transform:translateY(0); }
        .fade-up:nth-child(2) { transition-delay: 0.12s; }
        .fade-up:nth-child(3) { transition-delay: 0.22s; }

        /* Per-card inline scroll entry */
        .card-in { opacity:0; transform:translateY(56px); transition: opacity 0.72s cubic-bezier(0.16,1,0.3,1), transform 0.72s cubic-bezier(0.16,1,0.3,1); }
        .card-in.from-left  { transform:translateX(-56px); }
        .card-in.from-right { transform:translateX(56px); }
        .card-in.visible    { opacity:1; transform:none; }

        /* Scroll hint bounce */
        @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0);} 55%{transform:translateX(-50%) translateY(6px);} }
        .scroll-hint { animation: bounce 2s ease-in-out infinite; }

        /* Card shimmer */
        @keyframes skShimmer { from{background-position:-600px 0;} to{background-position:600px 0;} }

        /* Mobile product carousel — hide scrollbar */
        .product-scroll::-webkit-scrollbar { display: none; }
        .product-scroll { -ms-overflow-style: none; scrollbar-width: none; }

        html { scroll-behavior: smooth; }

        .product-card { cursor: pointer; }
        .product-card-img { transition: transform 0.4s cubic-bezier(0.16,1,0.3,1); transform-origin: top center; display: block; }
        .product-card:hover .product-card-img { transform: scale(1.03); }
      `}</style>

      {/* ── Scroll progress bar ── */}
      <div style={{ position:"fixed", top:0, left:0, right:0, height:3, zIndex:200, pointerEvents:"none" }}>
        <div style={{ height:"100%", width:`${scrollPct * 100}%`, background:"linear-gradient(90deg,#6009FF 0%,#F4B249 100%)", transition:"width 0.1s linear", borderRadius:"0 2px 2px 0", boxShadow:"0 0 8px rgba(96,9,255,0.4)" }} />
      </div>

      <Navbar scrolled={scrolled} />
      <Hero />
      <ProductSection />
      <BackboneSection />
      <ComplianceSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
}
