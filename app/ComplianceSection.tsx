"use client";

import React from "react";
import { useBreakpoint } from "./use-breakpoint";

const CARDS_EN = [
  {
    icon: "data",
    title: "Data Encryption",
    desc: "ISO 27001 certified — all transaction data is encrypted to the highest industry standards. Your customers' information is always protected.",
  },
  {
    icon: "kyc",
    title: "KYC, Audit & Regulation",
    desc: "End-to-end digital audit trail on every transaction. Regulated by the Central Bank of Nigeria (CBN) and certified by NDPC — compliance is built in, not bolted on.",
  },
  {
    icon: "audit",
    title: "PCIDSS Level 1 Certified",
    desc: "We are a Level 1 PCI DSS certified payment service provider, the highest level of security compliance in the payments industry, verified by a qualified security assessor.",
  },
  {
    icon: "monitor",
    title: "Uptime & 24/7 Monitoring",
    desc: "99% uptime SLA backed by round-the-clock infrastructure monitoring, secured source and reply URLs, and real-time transaction notifications across all payment flows.",
  },
];

const CARDS_FR = [
  {
    icon: "data",
    title: "Chiffrement des données",
    desc: "Certifié ISO 27001 — toutes les données de transaction sont chiffrées selon les normes les plus élevées du secteur. Les informations de vos clients sont toujours protégées.",
  },
  {
    icon: "kyc",
    title: "KYC, audit & réglementation",
    desc: "Piste d'audit numérique de bout en bout sur chaque transaction. Régulé par la Banque centrale du Nigéria (CBN) et certifié par le NDPC — la conformité est intégrée, pas ajoutée après coup.",
  },
  {
    icon: "audit",
    title: "Certifié PCI DSS niveau 1",
    desc: "Nous sommes un prestataire de services de paiement certifié PCI DSS niveau 1, le plus haut niveau de conformité sécuritaire du secteur des paiements, vérifié par un évaluateur de sécurité qualifié.",
  },
  {
    icon: "monitor",
    title: "Disponibilité & surveillance 24/7",
    desc: "SLA de disponibilité de 99 % soutenu par une surveillance de l'infrastructure permanente, des URL source et de réponse sécurisées, et des notifications de transaction en temps réel sur tous les flux de paiement.",
  },
];

export const PILLS = [
  { label: "ISO 27001",        icon: "iso"  },
  { label: "PCIDSS Level 1",   icon: "pci"  },
  { label: "NDPC Trust Mark",  icon: "ndpc" },
  { label: "CBN Licensed",     icon: "cbn"  },
];

const EASE = "cubic-bezier(0.16,1,0.3,1)";

function ComplianceIcon({ type }: { type: string }) {
  const c = "#6009FF";
  switch (type) {
    case "kyc":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke={c} strokeWidth="1.8"/>
          <path d="M16.5 3l1.5 1.5L20.5 1" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "data":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="5" rx="9" ry="3" stroke={c} strokeWidth="1.8"/>
          <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M15.5 17l1.5 1.5 2.5-2.5" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "audit":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="9" y="3" width="6" height="4" rx="1" stroke={c} strokeWidth="1.8"/>
          <path d="M9 12h6M9 16h4" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      );
    case "monitor":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12l2 2 4-4" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return null;
  }
}

export function PillIcon({ type, size }: { type: string; size: number }) {
  const c = "#9CA3AF";
  switch (type) {

    /* PCI DSS Level 1 — credit card with chip */
    case "pci":
      return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
          <rect x="1.5" y="3.5" width="13" height="9" rx="1.8" stroke={c} strokeWidth="1.4"/>
          <path d="M1.5 7h13" stroke={c} strokeWidth="1.4"/>
          {/* chip */}
          <rect x="4" y="4.8" width="3" height="2.2" rx=".6" stroke={c} strokeWidth="1.2"/>
          {/* card number dots */}
          <circle cx="4.5" cy="10" r=".6" fill={c}/>
          <circle cx="6.5" cy="10" r=".6" fill={c}/>
          <circle cx="8.5" cy="10" r=".6" fill={c}/>
          <circle cx="10.5" cy="10" r=".6" fill={c}/>
        </svg>
      );

    /* ISO 27001 — certification rosette / badge */
    case "iso":
      return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
          {/* 8-point star badge */}
          <path d="M8 1L9.4 3.2 12 2.8l-.4 2.6L13.8 7l-2.2 1 .4 2.6-2.4-.8L8 12l-1.6-2.2-2.4.8.4-2.6L2.2 7l2.2-1L4 3.4l2.6.4z"
            stroke={c} strokeWidth="1.3" strokeLinejoin="round"/>
          {/* tick inside */}
          <path d="M5.8 8l1.4 1.4 3-3" stroke={c} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );

    /* CBN Licensed — central bank building */
    case "cbn":
      return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
          {/* roof */}
          <path d="M8 1.5L2 5h12L8 1.5z" stroke={c} strokeWidth="1.4" strokeLinejoin="round"/>
          {/* top ledge */}
          <path d="M2 5h12" stroke={c} strokeWidth="1.4" strokeLinecap="round"/>
          {/* columns */}
          <path d="M4 6v5.5M7 6v5.5M9 6v5.5M12 6v5.5" stroke={c} strokeWidth="1.4" strokeLinecap="round"/>
          {/* base */}
          <path d="M1.5 11.5h13" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M1.5 13h13" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );

    /* NDPC Trust Mark — shield with person (data protection) */
    case "ndpc":
      return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
          <path d="M8 1.5L2 4v4.5c0 3.5 2.5 6.5 6 7.5 3.5-1 6-4 6-7.5V4L8 1.5z"
            stroke={c} strokeWidth="1.4" strokeLinejoin="round"/>
          <circle cx="8" cy="7" r="1.6" stroke={c} strokeWidth="1.2"/>
          <path d="M5 12c0-1.66 1.34-3 3-3s3 1.34 3 3" stroke={c} strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      );

    default:
      return null;
  }
}

export default function ComplianceSection({ locale = "en" }: { locale?: "en" | "fr" }) {
  const { isMobile, isTablet } = useBreakpoint();
  const CARDS = locale === "fr" ? CARDS_FR : CARDS_EN;
  const hPad     = isMobile ? 20 : isTablet ? 48 : 80;
  const h2Size   = isMobile ? 28 : isTablet ? 38 : 48;
  const cardCols = isMobile ? "1fr" : "1fr 1fr";
  const gap      = isMobile ? 28 : isTablet ? 40 : 56;

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

  const fade = (delay: string): React.CSSProperties => ({
    transition: `opacity 0.6s ${delay} ${EASE}, transform 0.6s ${delay} ${EASE}`,
    opacity:    on ? 1 : 0,
    transform:  on ? "translateY(0)" : "translateY(20px)",
  });

  return (
    <section
      ref={ref}
      id="compliance"
      style={{
        width:      "100%",
        background: "#FAFAF8",
        padding:    isMobile ? "60px 0" : "94px 0 80px",
      }}
    >
      <div style={{
        maxWidth:      1440,
        margin:        "0 auto",
        padding:       `0 ${hPad}px`,
        display:       "flex",
        flexDirection: "column",
      }}>

        {/* Label */}
        <span style={{
          ...fade("0s"),
          fontFamily:    "DM Sans, sans-serif",
          fontWeight:    500,
          fontSize:      16,
          lineHeight:    "24px",
          letterSpacing: "0.0094em",
          color:         "#F4B249",
          display:       "block",
          marginBottom:  gap,
        }}>
          {locale === "fr" ? "— Conformité" : "— Compliance"}
        </span>

        {/* Headline */}
        <h2 style={{
          ...fade("0.07s"),
          margin:     "0 0 12px",
          fontFamily: "Rubik, sans-serif",
          fontStyle:  "italic",
          fontWeight: 700,
          fontSize:   h2Size,
          lineHeight: 1.12,
        }}>
          <span style={{ color: "#6009FF" }}>{locale === "fr" ? "Conformité de niveau entreprise." : "Enterprise-grade compliance."}</span>
          <br />
          <span style={{ color: "#0F0C36" }}>{locale === "fr" ? "Intégrée à l'infrastructure." : "Built into the infrastructure."}</span>
        </h2>

        {/* Subtext */}
        <p style={{
          ...fade("0.13s"),
          margin:     `0 0 ${gap}px`,
          fontFamily: "Rubik, sans-serif",
          fontStyle:  "italic",
          fontWeight: 400,
          fontSize:   16,
          lineHeight: 1.6,
          color:      "#49454F",
          maxWidth:   680,
        }}>
          {locale === "fr"
            ? "Les exigences réglementaires varient selon les marchés. payonus s'en occupe entièrement au niveau de l'infrastructure — pour que votre équipe n'ait pas à les construire, les maintenir ou les auditer."
            : "Regulatory requirements vary by market. payonus handles all of it at the infrastructure layer — so your team doesn't have to build, maintain, or audit it."}
        </p>

        {/* 2×2 card grid */}
        <div style={{
          ...fade("0.19s"),
          display:             "grid",
          gridTemplateColumns: cardCols,
          gap:                 20,
          marginBottom:        gap,
        }}>
          {CARDS.map((card) => (
            <div key={card.title} className="compliance-card" style={{
              background:    "#FFFFFF",
              borderRadius:  12,
              padding:       isMobile ? "20px" : "20px 24px",
              display:       "flex",
              flexDirection: "column",
              gap:           12,
            }}>
              {/* Icon + Title row */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width:          36,
                  height:         36,
                  borderRadius:   8,
                  background:     "#EDE9FF",
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "center",
                  flexShrink:     0,
                }}>
                  <ComplianceIcon type={card.icon} />
                </div>
                <p style={{
                  margin:     0,
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: 700,
                  fontSize:   17,
                  lineHeight: 1.3,
                  color:      "#0F0C36",
                }}>
                  {card.title}
                </p>
              </div>

              {/* Description */}
              <p style={{
                margin:     0,
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 400,
                fontSize:   13.5,
                lineHeight: 1.65,
                color:      "#6B6877",
              }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications heading */}
        <p style={{
          ...fade("0.25s"),
          margin:     "0 0 20px",
          fontFamily: "DM Sans, sans-serif",
          fontWeight: 700,
          fontSize:   18,
          lineHeight: 1.3,
          color:      "#0F0C36",
        }}>
          {locale === "fr" ? "Certifications et normes" : "Certifications and Standards"}
        </p>

        {/* Marquee */}
        <div style={{ ...fade("0.3s"), width: "100%", overflow: "hidden", flexShrink: 0 }}>
          <div className="compliance-marquee-track">
            {[...PILLS, ...PILLS, ...PILLS, ...PILLS].map((pill, i) => (
              <div key={i} style={{
                display:      "inline-flex",
                alignItems:   "center",
                gap:          6,
                padding:      isMobile ? "6px 14px" : "9px 22px",
                border:       "1.5px solid #D0D5DD",
                borderRadius: 999,
                background:   "transparent",
                whiteSpace:   "nowrap",
                flexShrink:   0,
                marginRight:  12,
              }}>
                <PillIcon type={pill.icon} size={isMobile ? 13 : 17} />
                <span style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontStyle:  "italic",
                  fontWeight: 500,
                  fontSize:   isMobile ? 11 : 14,
                  color:      "#1C1B1F",
                }}>
                  {pill.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
