"use client";

import React from "react";
import { useBreakpoint } from "./use-breakpoint";

const STATS_EN = [
  { value: 500, prefix: "",  suffix: "+",  label: "Businesses",     desc: "500+ businesses onboarded and processing payments across 8 African markets since launch in 2023" },
  { value: 99,  prefix: "",  suffix: "%",  label: "Uptime",         desc: "99% service uptime with 24/7 monitoring and real-time transaction notifications" },
  { value: 200, prefix: "$", suffix: "M+", label: "Monthly Volume", desc: "$200M+ average transaction volume processed every month, with $1.6B+ total payment volume" },
];

const STATS_FR = [
  { value: 500, prefix: "",  suffix: "+",  label: "Entreprises",     desc: "Plus de 500 entreprises intégrées et traitant des paiements dans 8 marchés africains depuis le lancement en 2023" },
  { value: 99,  prefix: "",  suffix: "%",  label: "Disponibilité",   desc: "99 % de disponibilité de service avec surveillance 24h/24, 7j/7 et notifications de transaction en temps réel" },
  { value: 200, prefix: "$", suffix: "M+", label: "Volume mensuel", desc: "Plus de 200 M$ de volume de transactions traité en moyenne chaque mois, pour un volume total de paiements de plus de 1,6 Md$" },
];

function useCounter(to: number, active: boolean, duration = 1500): number {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!active) return;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p     = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, to, duration]);
  return val;
}

const EASE = "cubic-bezier(0.16,1,0.3,1)";

export default function BackboneSection({ locale = "en" }: { locale?: "en" | "fr" }) {
  const { isMobile, isTablet } = useBreakpoint();
  const STATS = locale === "fr" ? STATS_FR : STATS_EN;
  const ref = React.useRef<HTMLElement>(null);
  const [on, setOn] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } },
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const c0 = useCounter(500, on);
  const c1 = useCounter(99, on);
  const c2 = useCounter(300, on);
  const counts = [c0, c1, c2];

  const hPad     = isMobile ? 20 : isTablet ? 48 : 80;
  const h2Size   = isMobile ? 28 : isTablet ? 36 : 44;
  const numSize  = isMobile ? 36 : isTablet ? 44 : 52;
  const lblSize  = isMobile ? 24 : isTablet ? 30 : 36;
  const statCols = isMobile ? "1fr" : "1fr 1fr 1fr";
  const statGap  = isMobile ? 32 : 0;

  const fade = (delay: string): React.CSSProperties => ({
    transition: `opacity 0.6s ${delay} ${EASE}, transform 0.6s ${delay} ${EASE}`,
    opacity:    on ? 1 : 0,
    transform:  on ? "translateY(0)" : "translateY(20px)",
  });

  return (
    <section
      ref={ref}
      id="backbone"
      style={{
        width:      "100%",
        background: "#FAFAF8",
        padding:    isMobile ? "60px 0" : "94px 0 80px",
      }}
    >
      <div style={{ maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px` }}>

        <h2 style={{
          ...fade("0s"),
          margin:     `0 0 ${isMobile ? 32 : 56}px`,
          fontFamily: "Rubik, sans-serif",
          fontStyle:  "italic",
          fontWeight: 700,
          fontSize:   h2Size,
          lineHeight: 1.12,
          color:      "#0F0C36",
        }}>
          {locale === "fr" ? "L'épine dorsale du commerce africain" : "The Backbone of African Commerce"}
        </h2>

        <div style={{
          display:             "grid",
          gridTemplateColumns: statCols,
          alignItems:          "start",
          gap:                 statGap,
          marginBottom:        isMobile ? 32 : 48,
          ...fade("0.13s"),
        }}>
          {STATS.map((s, i) => (
            <div key={s.label}>
              <p style={{ margin:"0 0 2px", fontFamily:"Rubik, sans-serif", fontWeight:700, fontSize:numSize, lineHeight:1, color:"#1D0057" }}>
                {s.prefix}{counts[i]}{s.suffix}
              </p>
              <p style={{ margin:`0 0 ${isMobile ? 8 : 16}px`, fontFamily:"Rubik, sans-serif", fontWeight:700, fontSize:lblSize, lineHeight:1.15, color:"#1D0057" }}>
                {s.label}
              </p>
              <p style={{ margin:0, fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14, lineHeight:1.6, color:"#6B6877", maxWidth:240 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {!isMobile && (
          <div style={{ width:"100%", height: isTablet ? 300 : 417, borderRadius:16, overflow:"hidden", boxSizing:"border-box", ...fade("0.24s") }}>
            <img src="/backbone-hero.png" alt={locale === "fr" ? "Formes de rubans torsadés 3D abstraits en or et violet" : "Abstract 3D twisted ribbon shapes in gold and purple"} loading="lazy" className="banner-inner-image" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
          </div>
        )}

      </div>
    </section>
  );
}
