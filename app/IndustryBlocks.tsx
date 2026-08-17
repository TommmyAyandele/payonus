"use client";

import React from "react";
import { useBreakpoint } from "./use-breakpoint";
import { T } from "./Navbar";
import { ripple } from "./ProductPage";

/* ═══════════════════════════════════════
   ICON LIBRARY — shared outline-icon set
═══════════════════════════════════════ */
type IconProps = { size?: number; color?: string };
const ip = ({ size = 24, color = T.primary }: IconProps) => ({
  width: size, height: size, viewBox: "0 0 24 24", fill: "none" as const,
  stroke: color, strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
});

const Icons = {
  bolt:      (p: IconProps = {}) => <svg {...ip(p)}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  globe:     (p: IconProps = {}) => <svg {...ip(p)}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
  shield:    (p: IconProps = {}) => <svg {...ip(p)}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  link:      (p: IconProps = {}) => <svg {...ip(p)}><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12l2 2 4-4"/></svg>,
  chart:     (p: IconProps = {}) => <svg {...ip(p)}><path d="M1 4v6h6" transform="translate(0 0)"/><path d="M3 20h18M7 20V10M12 20V4M17 20v13"/></svg>,
  refresh:   (p: IconProps = {}) => <svg {...ip(p)}><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 101.49-9"/></svg>,
  card:      (p: IconProps = {}) => <svg {...ip(p)}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M6 15h4M14 15h2"/></svg>,
  wallet:    (p: IconProps = {}) => <svg {...ip(p)}><path d="M20 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><path d="M16 12a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/><path d="M2 8V6a2 2 0 012-2h12"/></svg>,
  alert:     (p: IconProps = {}) => <svg {...ip(p)}><path d="M12 9v4"/><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><path d="M12 17h.01"/></svg>,
  check:     (p: IconProps = {}) => <svg {...ip(p)}><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6"/></svg>,
  layers:    (p: IconProps = {}) => <svg {...ip(p)}><path d="M12 2l9 5-9 5-9-5 9-5z"/><path d="M3 12l9 5 9-5"/><path d="M3 17l9 5 9-5"/></svg>,
  users:     (p: IconProps = {}) => <svg {...ip(p)}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  building:  (p: IconProps = {}) => <svg {...ip(p)}><path d="M4 22V4a1 1 0 011-1h10a1 1 0 011 1v18"/><path d="M4 22h16"/><path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1"/></svg>,
  clock:     (p: IconProps = {}) => <svg {...ip(p)}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
  route:     (p: IconProps = {}) => <svg {...ip(p)}><circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h7a4 4 0 000-8H9a4 4 0 010-8h7"/></svg>,
  eye:       (p: IconProps = {}) => <svg {...ip(p)}><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>,
  scale:     (p: IconProps = {}) => <svg {...ip(p)}><path d="M12 3v18"/><path d="M5 8l-3 6a4 4 0 008 0l-3-6"/><path d="M19 8l-3 6a4 4 0 008 0l-3-6"/><path d="M5 8h6M13 8h6M12 3l3 5M12 3l-3 5"/></svg>,
  plug:      (p: IconProps = {}) => <svg {...ip(p)}><path d="M9 2v6M15 2v6"/><path d="M6 8h12l-1 6a5 5 0 01-10 0z"/><path d="M12 18v4"/></svg>,
  truck:     (p: IconProps = {}) => <svg {...ip(p)}><path d="M1 3h13v13H1z"/><path d="M14 8h4l3 3v5h-7z"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>,
  plane:     (p: IconProps = {}) => <svg {...ip(p)}><path d="M2 16l20-8-8 20-2-8-8-2z" transform="translate(1 -1)"/></svg>,
  target:    (p: IconProps = {}) => <svg {...ip(p)}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>,
  gauge:     (p: IconProps = {}) => <svg {...ip(p)}><path d="M12 14l3-4"/><circle cx="12" cy="14" r="1"/><path d="M4 14a8 8 0 1116 0"/></svg>,
};
type IconName = keyof typeof Icons;
export function BlockIcon({ name, size = 22, color }: { name: IconName; size?: number; color?: string }) {
  return Icons[name]({ size, color });
}

/* ═══════════════════════════════════════
   SHARED TYPES
═══════════════════════════════════════ */
export interface IndustryCTA { label: string; href: string; external?: boolean; }
export interface CardItem { title: string; desc: string; icon: IconName; href?: string; linkLabel?: string; }

export type IndustryBlock =
  | { kind: "cards"; id: string; eyebrow?: string; heading: React.ReactNode; intro?: string; columns?: 2 | 3; tint?: boolean; items: CardItem[]; footNote?: string }
  | { kind: "trust"; id: string; heading: React.ReactNode; intro?: string; items: { title: string; desc: string }[] }
  | { kind: "flow"; id: string; heading: React.ReactNode; intro?: string; steps: string[]; bullets?: string[]; supportingCopy?: string }
  | { kind: "numberedSteps"; id: string; heading: React.ReactNode; intro?: string; steps: { title: string; desc: string; linkLabel?: string; href?: string }[] }
  | { kind: "markets"; id: string; heading: React.ReactNode; intro?: string; countries: string[]; ctaLabel?: string; ctaHref?: string }
  | { kind: "faq"; id: string; heading: React.ReactNode; items: { q: string; a: string }[] }
  | { kind: "textCta"; id: string; heading: React.ReactNode; copy: string; cta: IndustryCTA }
  | { kind: "cta"; id: string; heading: React.ReactNode; subtext?: string; primaryCta: IndustryCTA; secondaryCta?: IndustryCTA }
  | { kind: "prose"; id: string; heading: React.ReactNode; body: string[]; tint?: boolean };

/* ═══════════════════════════════════════
   LAYOUT HELPERS
═══════════════════════════════════════ */
function useHPad() {
  const { isMobile, isTablet } = useBreakpoint();
  return isMobile ? 20 : isTablet ? 48 : 80;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="fade-up" style={{ display: "block", marginBottom: 16, fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 13, color: T.orange, letterSpacing: "0.06em", textTransform: "uppercase" }}>
      {children}
    </span>
  );
}

function Heading({ children, maxWidth }: { children: React.ReactNode; maxWidth?: number }) {
  const { isMobile, isTablet } = useBreakpoint();
  return (
    <h2 className="fade-up" style={{ margin: "0 0 16px", fontFamily: "Rubik, sans-serif", fontStyle: "italic", fontWeight: 500, fontSize: isMobile ? 28 : isTablet ? 38 : 46, lineHeight: 1.12, color: T.headingBlack, maxWidth: maxWidth ?? 640 }}>
      {children}
    </h2>
  );
}

function Intro({ children, marginBottom = 48 }: { children: React.ReactNode; marginBottom?: number }) {
  return (
    <p className="fade-up" style={{ margin: `0 0 ${marginBottom}px`, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 15, lineHeight: 1.7, color: T.muted, maxWidth: 620 }}>
      {children}
    </p>
  );
}

function PrimaryBtn({ cta }: { cta: IndustryCTA }) {
  return (
    <button
      style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 14, color: T.white, background: T.primary, border: "none", borderRadius: 6, padding: "13px 24px", cursor: "pointer", transition: "opacity .15s" }}
      onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
      onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
      onClick={e => { ripple(e); if (cta.external) window.open(cta.href, "_blank"); else window.location.href = cta.href; }}
    >
      {cta.label}
    </button>
  );
}

function SecondaryBtn({ cta }: { cta: IndustryCTA }) {
  return (
    <button
      style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 14, color: T.muted, background: "transparent", border: `1px solid ${T.muted}`, borderRadius: 6, padding: "12px 22px", cursor: "pointer", transition: "background .15s" }}
      onMouseEnter={e => (e.currentTarget.style.background = "#E9DDFF")}
      onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
      onClick={() => { if (cta.external) window.open(cta.href, "_blank"); else window.location.href = cta.href; }}
    >
      {cta.label}
    </button>
  );
}

/* ═══════════════════════════════════════
   CARDS BLOCK
═══════════════════════════════════════ */
function CardsBlock({ block }: { block: Extract<IndustryBlock, { kind: "cards" }> }) {
  const { isMobile, isTablet } = useBreakpoint();
  const hPad = useHPad();
  const cols = block.columns ?? 3;
  const gridCols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : cols === 2 ? "1fr 1fr" : "1fr 1fr 1fr";
  return (
    <section style={{ width: "100%", background: block.tint ? "#F4F0FF" : T.bg, padding: `${isMobile ? 56 : 80}px 0` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
        {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
        <Heading>{block.heading}</Heading>
        {block.intro && <Intro>{block.intro}</Intro>}
        <div className="fade-up" style={{ display: "grid", gridTemplateColumns: gridCols, gap: isMobile ? 16 : 24, marginTop: 8 }}>
          {block.items.map((item, i) => {
            const Card = (
              <div className="challenge-card" style={{ padding: isMobile ? "26px 22px" : "32px 28px", height: "100%" }}>
                <div style={{ width: 46, height: 46, borderRadius: 10, background: "#EDE9FF", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <BlockIcon name={item.icon} />
                </div>
                <p style={{ margin: "0 0 8px", fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 16, lineHeight: 1.3, color: T.dark }}>{item.title}</p>
                <p style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 14, lineHeight: 1.65, color: T.muted }}>{item.desc}</p>
                {item.href && item.linkLabel && (
                  <a href={item.href} style={{ display: "inline-flex", alignItems: "center", gap: 4, marginTop: 14, fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 13, color: T.primary, textDecoration: "none" }}>
                    {item.linkLabel}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke={T.primary} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                )}
              </div>
            );
            return <React.Fragment key={i}>{Card}</React.Fragment>;
          })}
        </div>
        {block.footNote && (
          <p className="fade-up" style={{ margin: "28px 0 0", fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 14, lineHeight: 1.65, color: T.muted, maxWidth: 640 }}>
            {block.footNote}
          </p>
        )}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   TRUST GRID BLOCK
═══════════════════════════════════════ */
function TrustBlock({ block }: { block: Extract<IndustryBlock, { kind: "trust" }> }) {
  const { isMobile, isTablet } = useBreakpoint();
  const hPad = useHPad();
  return (
    <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 56 : 80}px 0` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
        <Heading>{block.heading}</Heading>
        {block.intro && <Intro>{block.intro}</Intro>}
        <div className="fade-up" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "1fr 1fr 1fr", gap: isMobile ? 14 : 20, border: "1px solid #E5E7EB", borderRadius: 16, overflow: "hidden", background: T.white }}>
          {block.items.map((item, i) => {
            const cols = isMobile ? 1 : isTablet ? 2 : 3;
            const isLastCol = (i + 1) % cols === 0;
            const isLastRow = i >= block.items.length - cols;
            return (
              <div key={i} style={{ padding: isMobile ? "24px 22px" : "28px 26px", borderRight: !isLastCol ? "1px solid #E5E7EB" : "none", borderBottom: !isLastRow ? "1px solid #E5E7EB" : "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <BlockIcon name="check" size={16} />
                  <p style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 15, color: T.dark }}>{item.title}</p>
                </div>
                <p style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 13.5, lineHeight: 1.6, color: T.muted }}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   FLOW BLOCK (process visualization)
═══════════════════════════════════════ */
function FlowBlock({ block }: { block: Extract<IndustryBlock, { kind: "flow" }> }) {
  const { isMobile, isTablet } = useBreakpoint();
  const hPad = useHPad();
  return (
    <section style={{ width: "100%", background: "#F4F0FF", padding: `${isMobile ? 56 : 80}px 0` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile || isTablet ? "1fr" : "1fr 1fr", gap: isMobile ? 36 : 56, alignItems: "center" }}>
          <div>
            <Heading maxWidth={520}>{block.heading}</Heading>
            {block.intro && <Intro marginBottom={20}>{block.intro}</Intro>}
            {block.bullets && (
              <ul className="fade-up" style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {block.bullets.map((b, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 14, lineHeight: 1.6, color: T.dark }}>
                    <span style={{ marginTop: 4, flexShrink: 0 }}><BlockIcon name="check" size={15} /></span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {block.supportingCopy && !block.bullets && (
              <p style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 14, lineHeight: 1.65, color: T.muted }}>{block.supportingCopy}</p>
            )}
          </div>
          <div className="fade-up" style={{ display: "flex", flexDirection: isMobile ? "column" : "column", gap: 0, background: T.white, borderRadius: 16, border: `1px solid ${T.borderLight}`, padding: isMobile ? "20px" : "28px" }}>
            {block.steps.map((step, i) => (
              <React.Fragment key={i}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 4px" }}>
                  <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#EDE9FF", color: T.primary, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 12, flexShrink: 0 }}>{i + 1}</div>
                  <span style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 14.5, color: T.dark }}>{step}</span>
                </div>
                {i < block.steps.length - 1 && (
                  <div style={{ marginLeft: 13, width: 1, height: 16, background: T.borderLight }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   NUMBERED STEPS BLOCK (implementation / how-it-works)
═══════════════════════════════════════ */
function NumberedStepsBlock({ block }: { block: Extract<IndustryBlock, { kind: "numberedSteps" }> }) {
  const { isMobile, isTablet } = useBreakpoint();
  const hPad = useHPad();
  return (
    <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 56 : 80}px 0` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
        <Heading>{block.heading}</Heading>
        {block.intro && <Intro>{block.intro}</Intro>}
        <div className="fade-up" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : `repeat(${Math.min(block.steps.length, 5)}, 1fr)`, gap: isMobile ? 20 : 18 }}>
          {block.steps.map((step, i) => (
            <div key={i} style={{ padding: isMobile ? "0" : "0 4px" }}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: T.primary, color: T.white, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 13, marginBottom: 14 }}>{i + 1}</div>
              <p style={{ margin: "0 0 6px", fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 15, color: T.dark }}>{step.title}</p>
              <p style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 13.5, lineHeight: 1.6, color: T.muted }}>{step.desc}</p>
              {step.href && step.linkLabel && (
                <a href={step.href} style={{ display: "inline-flex", alignItems: "center", gap: 4, marginTop: 10, fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 13, color: T.primary, textDecoration: "none" }}>
                  {step.linkLabel}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke={T.primary} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   MARKETS BLOCK — text-based, crawlable
═══════════════════════════════════════ */
export const MARKET_COUNTRIES = ["Nigeria", "Ghana", "Kenya", "Côte d'Ivoire", "South Africa", "Zambia", "Senegal", "Cameroon"];

function MarketsBlock({ block }: { block: Extract<IndustryBlock, { kind: "markets" }> }) {
  const { isMobile } = useBreakpoint();
  const hPad = useHPad();
  return (
    <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 56 : 80}px 0` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
        <Heading>{block.heading}</Heading>
        {block.intro && <Intro marginBottom={32}>{block.intro}</Intro>}
        <ul className="fade-up" style={{ margin: "0 0 32px", padding: 0, listStyle: "none", display: "flex", flexWrap: "wrap", gap: 12 }}>
          {block.countries.map(c => (
            <li key={c} style={{ display: "inline-flex", alignItems: "center", padding: "10px 20px", border: `1px solid ${T.borderLight}`, borderRadius: 999, fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 14, color: T.dark, background: T.white }}>
              {c}
            </li>
          ))}
        </ul>
        {block.ctaLabel && block.ctaHref && (
          <a href={block.ctaHref} className="fade-up" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 14, color: T.white, background: T.primary, border: `1px solid ${T.primary}`, borderRadius: 4, padding: "12px 22px", textDecoration: "none", transition: "opacity .15s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")} onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
            {block.ctaLabel} →
          </a>
        )}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   FAQ ACCORDION BLOCK
═══════════════════════════════════════ */
function FaqBlock({ block }: { block: Extract<IndustryBlock, { kind: "faq" }> }) {
  const { isMobile } = useBreakpoint();
  const hPad = useHPad();
  const [open, setOpen] = React.useState<number | null>(null);
  return (
    <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 56 : 80}px 0` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
        <Heading>{block.heading}</Heading>
        <div className="fade-up">
          {block.items.map((faq, i) => (
            <div key={i} style={{ borderTop: i === 0 ? `1px solid ${T.borderLight}` : "none", borderBottom: `1px solid ${T.borderLight}` }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                style={{ width: "100%", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 0", gap: 24, textAlign: "left" }}
              >
                <span style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: isMobile ? 15 : 16, color: T.dark }}>{faq.q}</span>
                <span style={{ fontSize: 24, fontWeight: 300, color: T.primary, flexShrink: 0, lineHeight: 1, transform: open === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform .22s cubic-bezier(.16,1,.3,1)" }}>+</span>
              </button>
              <div style={{ maxHeight: open === i ? 400 : 0, overflow: "hidden", transition: "max-height .4s cubic-bezier(.16,1,.3,1)" }}>
                <p style={{ margin: "0 0 22px", fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: isMobile ? 14 : 15, lineHeight: 1.75, color: T.muted, paddingRight: isMobile ? 0 : 56 }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   TEXT + CTA BLOCK (small conversion moment)
═══════════════════════════════════════ */
function TextCtaBlock({ block }: { block: Extract<IndustryBlock, { kind: "textCta" }> }) {
  const { isMobile, isTablet } = useBreakpoint();
  const hPad = useHPad();
  return (
    <section style={{ width: "100%", background: "#F4F0FF", padding: `${isMobile ? 44 : 64}px 0` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
        <div style={{ display: "flex", flexDirection: isMobile || isTablet ? "column" : "row", alignItems: isMobile || isTablet ? "flex-start" : "center", justifyContent: "space-between", gap: 24 }}>
          <div style={{ maxWidth: 640 }}>
            <p className="fade-up" style={{ margin: "0 0 8px", fontFamily: "Rubik, sans-serif", fontStyle: "italic", fontWeight: 500, fontSize: isMobile ? 22 : 26, color: T.headingBlack }}>{block.heading}</p>
            <p className="fade-up" style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 14.5, lineHeight: 1.65, color: T.muted }}>{block.copy}</p>
          </div>
          <div className="fade-up" style={{ flexShrink: 0 }}><PrimaryBtn cta={block.cta} /></div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   PROSE BLOCK (heading + paragraphs only)
═══════════════════════════════════════ */
function ProseBlock({ block }: { block: Extract<IndustryBlock, { kind: "prose" }> }) {
  const { isMobile } = useBreakpoint();
  const hPad = useHPad();
  return (
    <section style={{ width: "100%", background: block.tint ? "#F4F0FF" : T.bg, padding: `${isMobile ? 48 : 72}px 0` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
        <Heading maxWidth={680}>{block.heading}</Heading>
        {block.body.map((p, i) => (
          <p key={i} className="fade-up" style={{ margin: i === block.body.length - 1 ? 0 : "0 0 16px", fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 15, lineHeight: 1.75, color: T.muted, maxWidth: 680 }}>
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   FINAL CTA BANNER BLOCK
═══════════════════════════════════════ */
function CtaBlock({ block }: { block: Extract<IndustryBlock, { kind: "cta" }> }) {
  const { isMobile } = useBreakpoint();
  const hPad = useHPad();
  return (
    <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 56 : 88}px 0` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
        <div style={{ maxWidth: 640 }}>
          <h2 className="fade-up" style={{ margin: "0 0 14px", fontFamily: "Rubik, sans-serif", fontStyle: "italic", fontWeight: 500, fontSize: isMobile ? 30 : 42, lineHeight: 1.1, color: T.headingBlack }}>{block.heading}</h2>
          {block.subtext && <p className="fade-up" style={{ margin: "0 0 28px", fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 15, lineHeight: 1.65, color: T.muted }}>{block.subtext}</p>}
          <div className="fade-up" style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <PrimaryBtn cta={block.primaryCta} />
            {block.secondaryCta && <SecondaryBtn cta={block.secondaryCta} />}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   RENDERER
═══════════════════════════════════════ */
export function IndustryBlockRenderer({ blocks }: { blocks: IndustryBlock[] }) {
  return (
    <>
      {blocks.map(block => {
        switch (block.kind) {
          case "cards": return <CardsBlock key={block.id} block={block} />;
          case "trust": return <TrustBlock key={block.id} block={block} />;
          case "flow": return <FlowBlock key={block.id} block={block} />;
          case "numberedSteps": return <NumberedStepsBlock key={block.id} block={block} />;
          case "markets": return <MarketsBlock key={block.id} block={block} />;
          case "faq": return <FaqBlock key={block.id} block={block} />;
          case "textCta": return <TextCtaBlock key={block.id} block={block} />;
          case "cta": return <CtaBlock key={block.id} block={block} />;
          case "prose": return <ProseBlock key={block.id} block={block} />;
          default: return null;
        }
      })}
    </>
  );
}
