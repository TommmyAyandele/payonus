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
function useScrollReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
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
const sk: React.CSSProperties = {
  background: "linear-gradient(90deg,#E8E8E8 25%,#F2F2F2 50%,#E8E8E8 75%)",
  backgroundSize: "600px 100%",
  animation: "skShimmer 1.6s ease-in-out infinite",
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
function Sk({ loaded, color, w, h = 5, d = 0, flex, style }: {
  loaded: boolean; color: string; w?: string | number; h?: number; d?: number; flex?: number; style?: React.CSSProperties;
}) {
  const tr = `opacity 0.6s ease ${d}s`;
  return (
    <div style={{ position:"relative", width:w, height:h, borderRadius:3, flex, flexShrink:flex?undefined:0, ...style }}>
      <div style={{ position:"absolute", inset:0, borderRadius:3, ...sk, opacity:loaded?0:1, transition:tr }} />
      <div style={{ position:"absolute", inset:0, borderRadius:3, background:color, opacity:loaded?1:0, transition:tr }} />
    </div>
  );
}

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

/* Payouts — recipient list */
function PayoutsWireframe() {
  const loaded = useLoadCycle(0);
  const rows = [
    { sc:"#22C55E", nw:"62%", aw:48, d:0.10 },
    { sc:"#F4B249", nw:"55%", aw:52, d:0.18 },
    { sc:"#22C55E", nw:"68%", aw:44, d:0.26 },
    { sc:"#94A3B8", nw:"48%", aw:56, d:0.34 },
    { sc:"#22C55E", nw:"63%", aw:48, d:0.42 },
  ];
  return (
    <Chrome>
      <div style={{ flex:1, display:"flex", minHeight:0 }}>
        <div style={{ width:"22%",flexShrink:0,background:"#FAFAFA",borderRight:"1px solid #F0F0F0",padding:"10px 8px",display:"flex",flexDirection:"column",gap:7 }}>
          <div style={{ background:loaded?"#6009FF":"#F4B249",transition:"background 0.6s",borderRadius:4,padding:"5px 7px",display:"flex",alignItems:"center",gap:5,marginBottom:2 }}>
            <div style={{ width:8,height:8,background:"rgba(255,255,255,0.5)",borderRadius:2,flexShrink:0 }} />
            <div style={{ flex:1,height:5,background:"rgba(255,255,255,0.3)",borderRadius:2 }} />
          </div>
          {[0,1,2,3,4].map(i => (
            <div key={i} style={{ display:"flex",alignItems:"center",gap:6 }}>
              <Sk loaded={loaded} color="#C4B5FD" w={10} h={10} d={i*0.07} />
              <Sk loaded={loaded} color="#EDE9FF" flex={1} h={5} d={i*0.07+0.04} />
            </div>
          ))}
        </div>
        <div style={{ flex:1,padding:"10px 12px",display:"flex",flexDirection:"column",gap:7,minWidth:0 }}>
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
            <Sk loaded={loaded} color="#1C1B1F" w="50%" h={7} />
            <Sk loaded={loaded} color="#6009FF" w={70} h={22} style={{ borderRadius:4 }} />
          </div>
          <div style={{ height:22,borderRadius:4,background:"#F5F5F5",display:"flex",alignItems:"center",padding:"0 8px",gap:6 }}>
            <Sk loaded={loaded} color="#94A3B8" w={12} h={12} />
            <Sk loaded={loaded} color="#CBD5E1" flex={1} h={5} />
          </div>
          {rows.map((r,i) => (
            <div key={i} style={{ display:"flex",alignItems:"center",gap:8,padding:"5px 0",borderBottom:"1px solid #F5F5F5" }}>
              <Sk loaded={loaded} color="#DDD6FE" w={26} h={26} d={r.d} style={{ borderRadius:"50%" }} />
              <div style={{ flex:1,display:"flex",flexDirection:"column",gap:4,minWidth:0 }}>
                <Sk loaded={loaded} color="#1C1B1F" w={r.nw} h={6} d={r.d} />
                <Sk loaded={loaded} color="#94A3B8" w="40%" h={4} d={r.d+0.1} />
              </div>
              <div style={{ display:"flex",alignItems:"center",gap:5,flexShrink:0 }}>
                <Sk loaded={loaded} color="#1C1B1F" w={r.aw} h={6} d={r.d} />
                <div style={{ width:8,height:8,borderRadius:"50%",background:r.sc,flexShrink:0 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Chrome>
  );
}

/* Collections — checkout form */
function CollectionsWireframe() {
  const loaded = useLoadCycle(700);
  return (
    <Chrome>
      <div style={{ flex:1,display:"flex",alignItems:"center",justifyContent:"center",background:"#F8F7FF",padding:"12px" }}>
        <div style={{ width:"100%",maxWidth:320,background:"#FFF",borderRadius:10,border:"1px solid #E7E0EC",padding:"14px",display:"flex",flexDirection:"column",gap:10 }}>
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
            <div style={{ display:"flex",alignItems:"center",gap:1 }}>
              <span style={{ fontFamily:"DM Sans,sans-serif",fontWeight:700,fontSize:10,color:"#6009FF" }}>pay</span>
              <div style={{ width:10,height:10,borderRadius:"50%",background:"#F4B249",display:"flex",alignItems:"center",justifyContent:"center" }}>
                <span style={{ fontSize:6,fontWeight:700,color:"#fff",lineHeight:1 }}>O</span>
              </div>
              <span style={{ fontFamily:"DM Sans,sans-serif",fontWeight:700,fontSize:10,color:"#6009FF" }}>.us</span>
            </div>
            <Sk loaded={loaded} color="#94A3B8" w={40} h={5} />
          </div>
          <div style={{ textAlign:"center",padding:"4px 0" }}>
            <Sk loaded={loaded} color="#94A3B8" w={60} h={5} style={{ margin:"0 auto 6px" }} />
            <Sk loaded={loaded} color="#1C1B1F" w={90} h={9} style={{ margin:"0 auto",borderRadius:4 }} />
          </div>
          <div style={{ display:"flex",gap:6 }}>
            {([[loaded?"#6009FF":"#E5E7EB",loaded?1:0.18],["#1A1A2E",0.18],["#E5E7EB",1]] as [string,number][]).map(([bg,op],i) => (
              <div key={i} style={{ flex:1,height:22,borderRadius:4,background:bg,opacity:op,transition:"background 0.6s, opacity 0.6s" }} />
            ))}
          </div>
          {[0,1,2].map(i => (
            <div key={i} style={{ height:i===0?30:22,borderRadius:4,background:"#F4F4F5",border:"1px solid #E7E0EC",display:"flex",alignItems:"center",padding:"0 8px" }}>
              <Sk loaded={loaded} color={i===0?"#1C1B1F":"#94A3B8"} w={`${40+i*10}%`} h={5} d={i*0.1} />
            </div>
          ))}
          <div style={{ height:30,borderRadius:4,background:"#6009FF",display:"flex",alignItems:"center",justifyContent:"center",opacity:loaded?1:0.45,transition:"opacity 0.6s" }}>
            <div style={{ width:50,height:5,borderRadius:3,background:"rgba(255,255,255,0.6)" }} />
          </div>
        </div>
      </div>
    </Chrome>
  );
}

/* Settlements — balance card + bar chart */
function SettlementsWireframe() {
  const loaded = useLoadCycle(300);
  const bars = [65,82,48,90,74,55,88];
  return (
    <Chrome>
      <div style={{ flex:1,padding:"12px",display:"flex",flexDirection:"column",gap:10,minWidth:0 }}>
        <div style={{ background:"linear-gradient(135deg,#6009FF 0%,#8B3FFF 100%)",borderRadius:10,padding:"12px",display:"flex",flexDirection:"column",gap:8 }}>
          <Sk loaded={loaded} color="rgba(255,255,255,0.5)" w="45%" h={5} />
          <Sk loaded={loaded} color="rgba(255,255,255,0.9)" w="68%" h={11} style={{ borderRadius:4 }} />
          <div style={{ display:"flex",gap:8,marginTop:2 }}>
            {[0,1].map(j => (
              <div key={j} style={{ flex:1,background:"rgba(255,255,255,0.15)",borderRadius:6,padding:"6px 8px" }}>
                <Sk loaded={loaded} color="rgba(255,255,255,0.4)" w="55%" h={4} d={j*0.1} style={{ marginBottom:5 }} />
                <Sk loaded={loaded} color="rgba(255,255,255,0.75)" w="75%" h={7} d={j*0.1+0.1} style={{ borderRadius:3 }} />
              </div>
            ))}
          </div>
        </div>
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-end",flex:1,paddingTop:4 }}>
          {bars.map((h,i) => (
            <div key={i} style={{ flex:1,marginRight:i<bars.length-1?4:0,display:"flex",flexDirection:"column",justifyContent:"flex-end",height:"100%" }}>
              <div style={{ height:`${h}%`,minHeight:4,borderRadius:"3px 3px 0 0",
                background: loaded ? (i===4?"#6009FF":i===1||i===3?"#C4B5FD":"#EDE9FF") : "#E8E8E8",
                transition:"background 0.6s ease" }} />
            </div>
          ))}
        </div>
        <div style={{ display:"flex",gap:4 }}>
          {bars.map((_,i) => <Sk key={i} loaded={loaded} color="#94A3B8" flex={1} h={4} d={i*0.05} />)}
        </div>
      </div>
    </Chrome>
  );
}

/* Payment API — terminal / code */
function PaymentApiWireframe() {
  const loaded = useLoadCycle(1100);
  const lines: { c: string; w: string }[] = [
    { c:"#C792EA", w:"55%" }, { c:"#82AAFF", w:"78%" }, { c:"#C3E88D", w:"64%" },
    { c:"#82AAFF", w:"71%" }, { c:"#F78C6C", w:"47%" }, { c:"#C3E88D", w:"69%" },
    { c:"#C792EA", w:"59%" }, { c:"#546E7A", w:"43%" }, { c:"#82AAFF", w:"75%" },
  ];
  return (
    <Chrome>
      <div style={{ flex:1,background:"#1E1E2E",padding:"12px",display:"flex",flexDirection:"column",minHeight:0,overflow:"hidden" }}>
        <div style={{ display:"flex",gap:12,marginBottom:10,borderBottom:"1px solid rgba(255,255,255,0.08)",paddingBottom:8 }}>
          {["index.js","README.md"].map((tab,i) => (
            <div key={tab} style={{ fontSize:9,color:i===0?"#CDD6F4":"#6C7086",padding:"3px 8px",borderRadius:"4px 4px 0 0",background:i===0?"rgba(255,255,255,0.08)":"transparent" }}>
              {tab}
            </div>
          ))}
        </div>
        <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:10,background:"rgba(255,255,255,0.05)",borderRadius:4,padding:"6px 10px" }}>
          <div style={{ width:8,height:8,borderRadius:"50%",background:"#22C55E",flexShrink:0 }} />
          <Sk loaded={loaded} color="rgba(130,170,255,0.8)" w="55%" h={5} />
        </div>
        {lines.map((l,i) => (
          <div key={i} style={{ display:"flex",alignItems:"center",gap:8,marginBottom:6 }}>
            <div style={{ width:12,height:4,borderRadius:2,background:"rgba(108,112,134,0.4)",flexShrink:0 }} />
            <Sk loaded={loaded} color={l.c} w={l.w} h={5} d={i*0.06} />
          </div>
        ))}
      </div>
    </Chrome>
  );
}

/* Analytics — stats grid + bar chart */
function AnalyticsWireframe() {
  const loaded = useLoadCycle(500);
  const bars = [40,65,52,80,68,90,72,58,84,62,76,88];
  const stats: [string,string][] = [["#6009FF","rgba(96,9,255,0.1)"],["#22C55E","rgba(34,197,94,0.1)"],["#F4B249","rgba(244,178,73,0.1)"]];
  return (
    <Chrome>
      <div style={{ flex:1,padding:"12px",display:"flex",flexDirection:"column",gap:10,minWidth:0 }}>
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8 }}>
          {stats.map(([accent,bg],i) => (
            <div key={i} style={{ background:loaded?bg:"#F5F5F5",transition:"background 0.6s",borderRadius:8,padding:"8px" }}>
              <Sk loaded={loaded} color="#94A3B8" w="55%" h={4} d={i*0.1} style={{ marginBottom:6 }} />
              <Sk loaded={loaded} color={accent} w="75%" h={9} d={i*0.1+0.1} style={{ borderRadius:3 }} />
            </div>
          ))}
        </div>
        <div style={{ flex:1,display:"flex",flexDirection:"column",gap:6,minHeight:0 }}>
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
            <Sk loaded={loaded} color="#1C1B1F" w={70} h={5} />
            <Sk loaded={loaded} color="#94A3B8" w={50} h={16} style={{ borderRadius:3 }} />
          </div>
          <div style={{ flex:1,display:"flex",alignItems:"flex-end",gap:3,minHeight:0 }}>
            {bars.map((h,i) => (
              <div key={i} style={{ flex:1,display:"flex",flexDirection:"column",justifyContent:"flex-end",height:"100%" }}>
                <div style={{ height:`${h}%`,minHeight:4,borderRadius:"2px 2px 0 0",
                  background: loaded ? (i===9?"#6009FF":i%4===0?"#DDD6FE":"#EDE9FF") : "#E8E8E8",
                  transition:"background 0.6s ease" }} />
              </div>
            ))}
          </div>
          <div style={{ height:1,background:"#F0F0F0" }} />
          <div style={{ display:"flex",gap:4 }}>
            {[0,1,2,3].map(i => <Sk key={i} loaded={loaded} color="#94A3B8" flex={1} h={4} d={i*0.08} />)}
          </div>
        </div>
      </div>
    </Chrome>
  );
}

/* ─── PRODUCT SECTION ─── */
const PRODUCT_CARDS_TOP = [
  { title: "Payouts",     Wireframe: PayoutsWireframe     },
  { title: "Collections", Wireframe: CollectionsWireframe },
];
const PRODUCT_CARDS_BOTTOM = [
  { title: "Instant Settlements",   Wireframe: SettlementsWireframe },
  { title: "Payment API",           Wireframe: PaymentApiWireframe  },
  { title: "Analytics & Reporting", Wireframe: AnalyticsWireframe   },
];

function ProductSection() {
  const { isMobile, isTablet } = useBreakpoint();
  const hPad    = isMobile ? 20 : isTablet ? 48 : 80;
  const secPad  = isMobile ? "48px 0 32px" : "100px 0 80px";
  const topCols = isMobile ? "1fr" : "1fr 1fr";
  const botCols = isMobile ? "1fr" : "1fr 1fr 1fr";
  const cardH   = isMobile ? 260 : undefined;
  const topH    = isMobile ? cardH : 420;
  const descSz  = isMobile ? 22 : 42;

  const card: React.CSSProperties = {
    background:   T.bg,
    borderRadius: 16,
    overflow:     "hidden",
  };

  const onTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width  - 0.5;
    const y = (e.clientY - top)  / height - 0.5;
    e.currentTarget.style.transition = "box-shadow 0.1s";
    e.currentTarget.style.transform  = `perspective(900px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) translateY(-4px)`;
    e.currentTarget.style.boxShadow  = `${-x * 24}px ${-y * 16}px 60px rgba(96,9,255,0.15), 0 20px 48px rgba(0,0,0,0.07)`;
  };

  const onTiltLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transition = "transform 0.55s cubic-bezier(0.16,1,0.3,1), box-shadow 0.55s cubic-bezier(0.16,1,0.3,1)";
    e.currentTarget.style.transform  = "";
    e.currentTarget.style.boxShadow  = "";
  };

  return (
    <section id="products" style={{ width:"100%", background:T.white, padding:secPad }}>
      <div style={{ maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px` }}>

        <span style={{ fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, letterSpacing:"0.0094em", color:T.orange, display:"block", marginBottom:20 }}>
          — Products
        </span>

        <p className="fade-up" style={{ margin:`0 0 ${isMobile ? 40 : 64}px`, fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400, fontSize:descSz, lineHeight:1.15, color:T.headingBlack }}>
          Built for operations that can't afford a delay. Every product in the payonus suite is designed to eliminate payment friction at scale.
        </p>

        <div className="fade-up" style={{ display:"grid", gridTemplateColumns:topCols, gap: isMobile ? 12 : 24, marginBottom: isMobile ? 12 : 24 }}>
          {PRODUCT_CARDS_TOP.map(p => (
            <div key={p.title} className="product-card" style={card} onMouseMove={onTilt} onMouseLeave={onTiltLeave}>
              <div style={{ padding: isMobile ? "12px 14px" : "16px 22px" }}>
                <h3 style={{ margin:0, fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?16:20, color:T.dark }}>{p.title}</h3>
              </div>
              <div style={{ width:"100%", height: topH, overflow:"hidden" }}>
                <p.Wireframe />
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up" style={{ display:"grid", gridTemplateColumns:botCols, gap: isMobile ? 12 : 24 }}>
          {PRODUCT_CARDS_BOTTOM.map(p => (
            <div key={p.title} className="product-card" style={card} onMouseMove={onTilt} onMouseLeave={onTiltLeave}>
              <div style={{ padding: isMobile ? "12px 14px" : "16px 22px" }}>
                <h3 style={{ margin:0, fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?16:20, color:T.dark }}>{p.title}</h3>
              </div>
              <div style={{ width:"100%", height: isMobile ? 200 : 280, overflow:"hidden" }}>
                <p.Wireframe />
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
  useScrollReveal();
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

        /* Scroll hint bounce */
        @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0);} 55%{transform:translateX(-50%) translateY(6px);} }
        .scroll-hint { animation: bounce 2s ease-in-out infinite; }

        /* Card shimmer */
        @keyframes skShimmer { from{background-position:-600px 0;} to{background-position:600px 0;} }

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
