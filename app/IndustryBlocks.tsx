"use client";

import React from "react";
import { useBreakpoint } from "./use-breakpoint";
import { T } from "./Navbar";
import { ripple } from "./ProductPage";
import { useSalesModal } from "./SalesModalContext";
import { trackEvent } from "./analytics";

/* ═══════════════════════════════════════
   TRACKING CONTEXT — carries the current page's industry name down to
   every CTA/link so GA4 events don't need it threaded through every block.
═══════════════════════════════════════ */
const IndustryTrackingContext = React.createContext<string>("");
export function IndustryTrackingProvider({ pageIndustry, children }: { pageIndustry: string; children: React.ReactNode }) {
  return <IndustryTrackingContext.Provider value={pageIndustry}>{children}</IndustryTrackingContext.Provider>;
}
function usePageIndustry() {
  return React.useContext(IndustryTrackingContext);
}
/** Documentation links (e.g. "/docs", "Explore Developer Documentation") get their own event per spec; everything else is a regular internal link. */
function isDocumentationLink(href: string, label: string) {
  return href === "/docs" || href.includes("documentation.payonus.com") || /documentation/i.test(label);
}

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
  chart:     (p: IconProps = {}) => <svg {...ip(p)}><path d="M3 20h18M7 20V10M12 20V4M17 20v13"/></svg>,
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
  | { kind: "list"; id: string; heading: React.ReactNode; intro?: string; items: CardItem[]; tint?: boolean; numbered?: boolean }
  | { kind: "bento"; id: string; heading: React.ReactNode; intro?: string; items: CardItem[]; leadMock?: MockName }
  | { kind: "showcase"; id: string; heading: React.ReactNode; intro?: string; items: { title: string; desc: string; icon: IconName; illustration: MockName }[] }
  | { kind: "split"; id: string; heading: React.ReactNode; body: string[]; bullets?: string[]; icon: IconName; mock?: MockName; reverse?: boolean; tint?: boolean }
  | { kind: "stats"; id: string; heading?: React.ReactNode; intro?: string; items: { value: string; label: string }[]; tint?: boolean }
  | { kind: "quote"; id: string; text: string; tint?: boolean }
  | { kind: "marqueeList"; id: string; heading: React.ReactNode; intro?: string; items: string[] }
  | { kind: "trust"; id: string; heading: React.ReactNode; intro?: string; items: { title: string; desc: string }[]; split?: boolean }
  | { kind: "flow"; id: string; heading: React.ReactNode; intro?: string; steps: string[]; bullets?: string[]; supportingCopy?: string }
  | { kind: "numberedSteps"; id: string; heading: React.ReactNode; intro?: string; steps: { title: string; desc: string; linkLabel?: string; href?: string }[]; split?: boolean; mock?: MockName }
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

function ArrowLink({ href, label, light, location }: { href: string; label: string; light?: boolean; location: string }) {
  const color = light ? "#FFFFFF" : T.primary;
  const pageIndustry = usePageIndustry();
  const isDocs = isDocumentationLink(href, label);
  return (
    <a
      href={href}
      onClick={() => trackEvent(isDocs ? "documentation_click" : "internal_link_click", {
        page_industry: pageIndustry, link_name: label, link_location: location, destination: href,
      })}
      style={{ display: "inline-flex", alignItems: "center", gap: 4, marginTop: 12, fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 13, color, textDecoration: "none" }}
    >
      {label}
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </a>
  );
}

/* Button styling matches the site-wide convention (hero CTAs, ProductPage, pricing) exactly:
   radius 4, 13px/28px primary padding, 11px/24px secondary padding. Kept identical everywhere. */
function PrimaryBtn({ cta, location }: { cta: IndustryCTA; location: string }) {
  const { open: openSalesModal } = useSalesModal();
  const pageIndustry = usePageIndustry();
  return (
    <button
      style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 14, color: T.white, background: T.primary, border: "none", borderRadius: 4, padding: "13px 28px", cursor: "pointer", transition: "opacity .15s" }}
      onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
      onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
      onClick={e => {
        ripple(e);
        trackEvent("cta_click", { page_industry: pageIndustry, cta_name: cta.label, cta_location: location, destination: cta.href === "/sales" ? "Sales Form" : cta.href });
        if (cta.href === "/sales") { openSalesModal({ pageIndustry, formName: `${pageIndustry} Merchant Enquiry` }); return; }
        if (cta.external) window.open(cta.href, "_blank"); else window.location.href = cta.href;
      }}
    >
      {cta.label}
    </button>
  );
}

function SecondaryBtn({ cta, location }: { cta: IndustryCTA; location: string }) {
  const { open: openSalesModal } = useSalesModal();
  const pageIndustry = usePageIndustry();
  return (
    <button
      style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 14, color: T.muted, background: "transparent", border: `1px solid ${T.muted}`, borderRadius: 4, padding: "11px 24px", cursor: "pointer", transition: "background .15s" }}
      onMouseEnter={e => (e.currentTarget.style.background = "#E9DDFF")}
      onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
      onClick={() => {
        trackEvent("cta_click", { page_industry: pageIndustry, cta_name: cta.label, cta_location: location, destination: cta.href === "/sales" ? "Sales Form" : cta.href });
        if (cta.href === "/sales") { openSalesModal({ pageIndustry, formName: `${pageIndustry} Merchant Enquiry` }); return; }
        if (cta.external) window.open(cta.href, "_blank"); else window.location.href = cta.href;
      }}
    >
      {cta.label}
    </button>
  );
}

/* ═══════════════════════════════════════
   REAL PEOPLE
   Free stock photography (Pexels license, no attribution required) —
   one photo per role, reused across pages so a pilot always reads as a
   pilot, a market trader always reads as a trader, etc.
═══════════════════════════════════════ */
interface PersonPreset { icon: IconName; photo: string; }

const PEOPLE = {
  amara:  { icon: "bolt",     photo: "amara" },  // cashier — paying by card at checkout
  tunde:  { icon: "building", photo: "tunde" },   // executive
  ngozi:  { icon: "card",     photo: "ngozi" },   // market trader
  kwame:  { icon: "route",    photo: "kwame" },   // delivery rider
  fatima: { icon: "chart",    photo: "fatima" },  // financial analyst
  chidi:  { icon: "plane",    photo: "chidi" },   // pilot
  aisha:  { icon: "globe",    photo: "aisha" },   // cross-border / global trade
  femi:   { icon: "shield",   photo: "femi" },    // security & compliance professional
  zainab: { icon: "users",    photo: "zainab" },  // team manager
  dele:   { icon: "gauge",    photo: "dele" },    // gamer
  amina:  { icon: "eye",      photo: "amina" },   // auditor
  tobi:   { icon: "layers",   photo: "tobi" },    // software engineer
  yusuf:  { icon: "plug",     photo: "yusuf" },   // IT / integration technician
  halima: { icon: "truck",    photo: "halima" },  // freight / logistics
  invoiceDoc:      { icon: "layers", photo: "invoiceDoc" },      // hands reviewing an invoice document
  bankApp:         { icon: "route",  photo: "bankApp" },         // banking app + financial data on a phone
  cardTap:         { icon: "card",   photo: "cardTap" },         // tapping a card on a payment terminal
  qrLink:          { icon: "link",   photo: "qrLink" },          // scanning a QR / payment link
  milestoneDeal:   { icon: "clock",  photo: "milestoneDeal" },   // handshake sealing a staged agreement
  currencyExchange:{ icon: "globe",  photo: "currencyExchange" },// hands exchanging currency
} satisfies Record<string, PersonPreset>;

export type MockName = keyof typeof PEOPLE;

function PersonIllustration({ preset }: { preset: PersonPreset }) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <img
        src={`/industry-people/${preset.photo}.jpg`}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      <div style={{ position: "absolute", right: 16, bottom: 16, width: 44, height: 44, borderRadius: "50%", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.16)" }}>
        <BlockIcon name={preset.icon} size={22} />
      </div>
    </div>
  );
}

function MockVisual({ name }: { name: MockName }) {
  return <PersonIllustration preset={PEOPLE[name]} />;
}

/* Decorative panel — stands in for a product illustration where none exists. Always light. */
function AbstractPanel({ icon, mock }: { icon: IconName; mock?: MockName }) {
  const { isMobile } = useBreakpoint();
  return (
    <div className="fade-up" style={{ position: "relative", overflow: "hidden", borderRadius: 20, background: "#EDE9FF", minHeight: isMobile ? 220 : 340, display: "flex", alignItems: "center", justifyContent: "center" }}>
      {mock ? <MockVisual name={mock} /> : (
        <>
          <div style={{ position: "absolute", top: "-18%", right: "-12%", width: "55%", aspectRatio: "1", borderRadius: "50%", background: "rgba(96,9,255,0.08)" }} />
          <div style={{ position: "absolute", bottom: "-22%", left: "-14%", width: "60%", aspectRatio: "1", borderRadius: "50%", background: "rgba(244,178,73,0.14)" }} />
          <div style={{ position: "relative", width: isMobile ? 84 : 108, height: isMobile ? 84 : 108, borderRadius: "50%", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 12px 32px rgba(96,9,255,0.14)" }}>
            <BlockIcon name={icon} size={isMobile ? 36 : 46} color={T.primary} />
          </div>
        </>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════
   CARDS BLOCK — single bordered container, hairline internal
   dividers. Matches the live payonus.com product-page convention
   exactly (payouts/collections "what you get" grids) — never
   individually-boxed cards.
═══════════════════════════════════════ */
function CardsBlock({ block }: { block: Extract<IndustryBlock, { kind: "cards" }> }) {
  const { isMobile, isTablet } = useBreakpoint();
  const hPad = useHPad();
  const cols = isMobile ? 1 : isTablet ? 2 : (block.columns ?? 3);
  const gridCols = cols === 1 ? "1fr" : cols === 2 ? "1fr 1fr" : "1fr 1fr 1fr";
  return (
    <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 56 : 80}px 0` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
        {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
        <Heading>{block.heading}</Heading>
        {block.intro && <Intro>{block.intro}</Intro>}
        <div className="fade-up" style={{ border: "1px solid #E5E7EB", borderRadius: 16, overflow: "hidden", background: T.white }}>
          <div style={{ display: "grid", gridTemplateColumns: gridCols }}>
            {block.items.map((item, i) => {
              const isLastCol = (i + 1) % cols === 0;
              const isLastRow = i >= block.items.length - cols;
              return (
                <div key={i} style={{ padding: isMobile ? "32px 24px" : "40px", borderRight: !isLastCol ? "1px solid #E5E7EB" : "none", borderBottom: !isLastRow ? "1px solid #E5E7EB" : "none" }}>
                  <div style={{ width: 52, height: 52, borderRadius: 10, background: "#F3F4F6", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                    <BlockIcon name={item.icon} />
                  </div>
                  <p style={{ margin: "0 0 12px", fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: isMobile ? 16 : 20, lineHeight: 1.3, color: T.dark }}>{item.title}</p>
                  <p style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 14, lineHeight: 1.65, color: T.muted }}>{item.desc}</p>
                  {item.href && item.linkLabel && <ArrowLink href={item.href} label={item.linkLabel} location={block.id} />}
                </div>
              );
            })}
          </div>
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
   LIST BLOCK — flowing hairline rows, no boxes
═══════════════════════════════════════ */
function ListBlock({ block }: { block: Extract<IndustryBlock, { kind: "list" }> }) {
  const { isMobile } = useBreakpoint();
  const hPad = useHPad();
  return (
    <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 56 : 80}px 0` }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: `0 ${hPad}px` }}>
        <Heading maxWidth={680}>{block.heading}</Heading>
        {block.intro && <Intro>{block.intro}</Intro>}
        <div className="fade-up" style={{ borderTop: `1px solid ${T.borderLight}` }}>
          {block.items.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: isMobile ? 16 : 24, padding: isMobile ? "20px 0" : "26px 0", borderBottom: `1px solid ${T.borderLight}` }}>
              {block.numbered ? (
                <span style={{ flexShrink: 0, width: 34, fontFamily: "Rubik, sans-serif", fontWeight: 500, fontStyle: "italic", fontSize: 20, color: "#C4B5FD" }}>{String(i + 1).padStart(2, "0")}</span>
              ) : (
                <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 10, background: "#EDE9FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <BlockIcon name={item.icon} size={19} />
                </div>
              )}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ margin: "0 0 4px", fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: isMobile ? 15 : 16, color: T.dark }}>{item.title}</p>
                <p style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 14, lineHeight: 1.6, color: T.muted, maxWidth: 640 }}>{item.desc}</p>
                {item.href && item.linkLabel && <ArrowLink href={item.href} label={item.linkLabel} location={block.id} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   BENTO BLOCK — asymmetric emphasis grid
═══════════════════════════════════════ */
/* Tile fills cycle through the site's established light palette only — never a solid dark/deep fill */
const BENTO_FILLS = [
  { bg: "#F4F0FF", border: "none", chip: "rgba(96,9,255,0.10)" },
  { bg: T.white, border: `1px solid ${T.borderLight}`, chip: "#EDE9FF" },
  { bg: "#FDF3E7", border: "none", chip: "rgba(244,178,73,0.18)" },
];

function BentoBlock({ block }: { block: Extract<IndustryBlock, { kind: "bento" }> }) {
  const { isMobile, isTablet } = useBreakpoint();
  const hPad = useHPad();
  const rest = block.items.slice(1);
  const lead = block.items[0];
  return (
    <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 56 : 80}px 0` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
        <Heading>{block.heading}</Heading>
        {block.intro && <Intro>{block.intro}</Intro>}
        <div className="fade-up" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "1.4fr 1fr 1fr", gridAutoRows: "min-content", gap: isMobile ? 14 : 18 }}>
          {lead && (
            <div style={{ position: "relative", overflow: "hidden", gridRow: isMobile ? "auto" : isTablet ? "auto" : "span 2", borderRadius: 20, minHeight: isMobile ? 280 : 420, ...(block.leadMock ? {} : { background: "#EDE9FF", border: `2px solid ${T.primary}` }) }}>
              {block.leadMock && (
                <>
                  <div style={{ position: "absolute", inset: 0 }}><MockVisual name={block.leadMock} /></div>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,12,20,0.86) 0%, rgba(15,12,20,0.5) 42%, rgba(15,12,20,0.05) 68%)" }} />
                </>
              )}
              <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: isMobile ? "26px 22px" : "32px 30px" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: T.white, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <BlockIcon name={lead.icon} size={24} />
                </div>
                <div>
                  <p style={{ margin: "0 0 8px", fontFamily: "Rubik, sans-serif", fontStyle: "italic", fontWeight: 500, fontSize: isMobile ? 22 : 26, lineHeight: 1.2, color: block.leadMock ? "#FFFFFF" : T.headingBlack }}>{lead.title}</p>
                  <p style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 14, lineHeight: 1.65, color: block.leadMock ? "rgba(255,255,255,0.85)" : T.muted }}>{lead.desc}</p>
                  {lead.href && lead.linkLabel && <ArrowLink href={lead.href} label={lead.linkLabel} light={!!block.leadMock} location={block.id} />}
                </div>
              </div>
            </div>
          )}
          {rest.map((item, i) => {
            const f = BENTO_FILLS[i % BENTO_FILLS.length];
            return (
              <div key={i} style={{ background: f.bg, border: f.border, borderRadius: 20, padding: isMobile ? "24px 22px" : "28px 26px" }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: f.chip, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <BlockIcon name={item.icon} size={19} />
                </div>
                <p style={{ margin: "0 0 6px", fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 15.5, color: T.dark }}>{item.title}</p>
                <p style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 13.5, lineHeight: 1.6, color: T.muted }}>{item.desc}</p>
                {item.href && item.linkLabel && <ArrowLink href={item.href} label={item.linkLabel} location={block.id} />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SHOWCASE BLOCK — continuous marquee of gradient panels, same
   endless-motion mechanic as the countries strip (tripled content,
   linear CSS loop, pauses on hover — no manual scroll/arrows).
═══════════════════════════════════════ */
function ShowcaseBlock({ block }: { block: Extract<IndustryBlock, { kind: "showcase" }> }) {
  const { isMobile } = useBreakpoint();
  const hPad = useHPad();
  const cardW = isMobile ? 240 : 300;
  const loop = [...block.items, ...block.items, ...block.items];
  /* Duration scales with actual pixel distance, not just item count — a fixed
     duration made mobile (narrower cards, narrower viewport, so fewer cards
     visible at once) feel sluggish since the same wait revealed less. Faster
     px/s on mobile on top of that keeps it feeling snappy despite the smaller
     viewport. */
  const setWidthPx = block.items.length * (cardW + 16);
  const pxPerSec = isMobile ? 95 : 60;
  const duration = Math.max(10, setWidthPx / pxPerSec);
  const [paused, setPaused] = React.useState(false);
  return (
    <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 56 : 80}px 0` }}>
      <style>{`
        @keyframes indShowcaseMarquee{from{transform:translateX(0);}to{transform:translateX(-33.333%);}}
        .ind-showcase-track{animation:indShowcaseMarquee ${duration}s linear infinite;}
      `}</style>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
        <Heading>{block.heading}</Heading>
        {block.intro && <Intro marginBottom={0}>{block.intro}</Intro>}
      </div>
      <div className="fade-up" style={{ width: "100%", overflow: "hidden", marginTop: 28 }}>
        <div
          className="ind-showcase-track"
          style={{ display: "flex", gap: 16, width: "max-content", padding: `0 ${hPad}px 12px`, animationPlayState: paused ? "paused" : "running" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {loop.map((item, i) => (
            <div key={i} style={{
              position: "relative", flex: `0 0 ${cardW}px`, height: isMobile ? 320 : 380, borderRadius: 20, overflow: "hidden",
              background: "#EDE9FF",
            }}>
              <div style={{ position: "absolute", inset: 0 }}><PersonIllustration preset={PEOPLE[item.illustration]} /></div>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,12,20,0.82) 0%, rgba(15,12,20,0.35) 42%, rgba(15,12,20,0) 68%)" }} />
              <div style={{ position: "absolute", top: 18, left: 18 }}>
                <span style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 12, color: "rgba(255,255,255,0.75)", letterSpacing: "0.04em" }}>{String((i % block.items.length) + 1).padStart(2, "0")}</span>
              </div>
              <div style={{ position: "absolute", left: 20, right: 20, bottom: 20 }}>
                <p style={{ margin: "0 0 6px", fontFamily: "Rubik, sans-serif", fontStyle: "italic", fontWeight: 500, fontSize: 20, lineHeight: 1.25, color: "#FFFFFF" }}>{item.title}</p>
                <p style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 12.5, lineHeight: 1.55, color: "rgba(255,255,255,0.82)" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SPLIT BLOCK — big statement + abstract panel
═══════════════════════════════════════ */
function SplitBlock({ block }: { block: Extract<IndustryBlock, { kind: "split" }> }) {
  const { isMobile, isTablet } = useBreakpoint();
  const hPad = useHPad();
  const stacked = isMobile || isTablet;
  const textCol = (
    <div>
      <Heading maxWidth={520}>{block.heading}</Heading>
      {block.body.map((p, i) => (
        <p key={i} className="fade-up" style={{ margin: i === block.body.length - 1 && !block.bullets ? 0 : "0 0 16px", fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 15, lineHeight: 1.75, color: T.muted, maxWidth: 500 }}>{p}</p>
      ))}
      {block.bullets && (
        <ul className="fade-up" style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
          {block.bullets.map((b, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 14, lineHeight: 1.6, color: T.dark }}>
              <span style={{ marginTop: 4, flexShrink: 0 }}><BlockIcon name="check" size={15} /></span>{b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  const panelCol = <AbstractPanel icon={block.icon} mock={block.mock} />;
  const reverseDesktop = !!block.reverse && !stacked;
  return (
    <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 56 : 80}px 0` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
        {/* Text and panel always stay in the same DOM order — only visual order flips via CSS `order`.
            Swapping JSX child order instead (based on a post-hydration breakpoint value) makes React
            unmount/remount fresh DOM nodes, which the one-shot scroll-reveal observer never sees again. */}
        <div style={{ display: "grid", gridTemplateColumns: stacked ? "1fr" : "1fr 1fr", gap: isMobile ? 32 : 56, alignItems: "center" }}>
          <div style={{ order: reverseDesktop ? 2 : 1 }}>{textCol}</div>
          <div style={{ order: reverseDesktop ? 1 : 2 }}>{panelCol}</div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   STATS BLOCK — big number band
═══════════════════════════════════════ */
function StatsBlock({ block }: { block: Extract<IndustryBlock, { kind: "stats" }> }) {
  const { isMobile, isTablet } = useBreakpoint();
  const hPad = useHPad();
  return (
    <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 48 : 72}px 0` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
        {block.heading && <Heading maxWidth={680}>{block.heading}</Heading>}
        {block.intro && (
          <p className="fade-up" style={{ margin: "0 0 40px", fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 15, lineHeight: 1.7, color: T.muted, maxWidth: 620 }}>{block.intro}</p>
        )}
        <div className="fade-up" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "repeat(2,1fr)" : `repeat(${block.items.length}, 1fr)`, gap: isMobile ? "28px 16px" : 24 }}>
          {block.items.map((s, i) => (
            <div key={i} style={{ paddingLeft: i === 0 || isMobile ? 0 : 24, borderLeft: i === 0 || isMobile ? "none" : `1px solid ${T.borderLight}` }}>
              <p style={{ margin: "0 0 4px", fontFamily: "Rubik, sans-serif", fontWeight: 700, fontSize: isMobile ? 32 : 44, lineHeight: 1, color: T.headingBlack }}>{s.value}</p>
              <p style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 13.5, lineHeight: 1.5, color: T.muted }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   QUOTE BLOCK — editorial pull-quote
═══════════════════════════════════════ */
function QuoteBlock({ block }: { block: Extract<IndustryBlock, { kind: "quote" }> }) {
  const { isMobile, isTablet } = useBreakpoint();
  const hPad = useHPad();
  return (
    <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 56 : 96}px 0` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: `0 ${hPad}px`, textAlign: "center" }}>
        <span className="fade-up" style={{ display: "block", fontFamily: "Rubik, sans-serif", fontSize: isMobile ? 34 : 44, color: T.primary, lineHeight: 1, marginBottom: 12 }}>"</span>
        <p className="fade-up" style={{ margin: 0, fontFamily: "Rubik, sans-serif", fontStyle: "italic", fontWeight: 500, fontSize: isMobile ? 24 : isTablet ? 32 : 38, lineHeight: 1.35, color: T.headingBlack }}>
          {block.text}
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   MARQUEE LIST BLOCK — scrolling ticker
═══════════════════════════════════════ */
function MarqueeListBlock({ block }: { block: Extract<IndustryBlock, { kind: "marqueeList" }> }) {
  const { isMobile } = useBreakpoint();
  const hPad = useHPad();
  const loop = [...block.items, ...block.items, ...block.items, ...block.items];
  const [paused, setPaused] = React.useState(false);
  return (
    <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 48 : 72}px 0` }}>
      <style>{`
        @keyframes indTicker{from{transform:translateX(0);}to{transform:translateX(-25%);}}
        .ind-ticker-track{display:flex;flex-wrap:nowrap;width:max-content;animation:indTicker 26s linear infinite;}
      `}</style>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
        <Heading maxWidth={680}>{block.heading}</Heading>
        {block.intro && <Intro marginBottom={36}>{block.intro}</Intro>}
      </div>
      <div className="fade-up" style={{ width: "100%", overflow: "hidden" }}>
        <div
          className="ind-ticker-track"
          style={{ animationPlayState: paused ? "paused" : "running" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {loop.map((item, i) => (
            <div key={i} style={{ display: "inline-flex", alignItems: "center", padding: "12px 26px", border: `1.5px solid ${T.borderLight}`, borderRadius: 999, whiteSpace: "nowrap", flexShrink: 0, marginRight: 12, fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 14.5, color: T.dark }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   TRUST BLOCK — flowing rows, not boxes
═══════════════════════════════════════ */
function TrustBlock({ block }: { block: Extract<IndustryBlock, { kind: "trust" }> }) {
  const { isMobile, isTablet } = useBreakpoint();
  const hPad = useHPad();
  const split = !!block.split;
  const stacked = isMobile || isTablet;

  const list = (
    <div className="fade-up" style={{ display: "grid", gridTemplateColumns: stacked ? "1fr" : split ? "1fr" : "1fr 1fr 1fr", columnGap: 40, rowGap: split ? 18 : 22 }}>
      {block.items.map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          <span style={{ flexShrink: 0, marginTop: 2 }}><BlockIcon name="check" size={17} /></span>
          <div>
            <p style={{ margin: "0 0 4px", fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 15, color: T.dark }}>{item.title}</p>
            <p style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 13.5, lineHeight: 1.6, color: T.muted }}>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );

  if (split) {
    return (
      <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 56 : 80}px 0` }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
          <div style={{ display: "grid", gridTemplateColumns: stacked ? "1fr" : "1fr 1fr", gap: isMobile ? 32 : 56, alignItems: "center" }}>
            <div>
              <Heading maxWidth={520}>{block.heading}</Heading>
              {block.intro && <Intro marginBottom={32}>{block.intro}</Intro>}
              {list}
            </div>
            <div className="fade-up" style={{ borderRadius: 20, overflow: "hidden", minHeight: isMobile ? 220 : 340 }}>
              <PersonIllustration preset={PEOPLE.femi} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 56 : 80}px 0` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
        <Heading>{block.heading}</Heading>
        {block.intro && <Intro>{block.intro}</Intro>}
        {list}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   FLOW BLOCK (process visualization, side panel)
═══════════════════════════════════════ */
function FlowBlock({ block }: { block: Extract<IndustryBlock, { kind: "flow" }> }) {
  const { isMobile, isTablet } = useBreakpoint();
  const hPad = useHPad();
  return (
    <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 56 : 80}px 0` }}>
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
          <div className="fade-up" style={{ position: "relative", background: T.white, borderRadius: 20, border: `1px solid ${T.borderLight}`, padding: isMobile ? "24px 24px 24px 30px" : "32px 32px 32px 40px" }}>
            <div style={{ position: "absolute", left: isMobile ? 40 : 52, top: isMobile ? 40 : 48, bottom: isMobile ? 40 : 48, width: 1, background: T.borderLight }} />
            {block.steps.map((step, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "9px 0", position: "relative" }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: T.primary, color: T.white, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 11, flexShrink: 0, zIndex: 1 }}>{i + 1}</div>
                <span style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 14.5, color: T.dark }}>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   NUMBERED STEPS BLOCK — connected rail, no boxes
═══════════════════════════════════════ */
function NumberedStepsBlock({ block }: { block: Extract<IndustryBlock, { kind: "numberedSteps" }> }) {
  const { isMobile, isTablet } = useBreakpoint();
  const hPad = useHPad();
  const stacked = isMobile || isTablet;
  const split = !!block.split;

  if (split) {
    const dotted = (
      <div style={{ position: "relative" }}>
        {block.steps.map((step, i) => (
          <div key={i} style={{ position: "relative", paddingLeft: 54, paddingBottom: i < block.steps.length - 1 ? 30 : 0 }}>
            {i < block.steps.length - 1 && (
              <div style={{ position: "absolute", left: 15, top: 30, bottom: 0, borderLeft: "1.5px dashed #D8D3E6" }} />
            )}
            <span style={{ position: "absolute", left: 0, top: 0, fontFamily: "Rubik, sans-serif", fontWeight: 500, fontSize: 15, color: "#C4B5FD" }}>{String(i + 1).padStart(2, "0")}</span>
            <p style={{ margin: "0 0 4px", fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 16, color: T.dark }}>{step.title}</p>
            <p style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 13.5, lineHeight: 1.6, color: T.muted }}>{step.desc}</p>
            {step.href && step.linkLabel && <ArrowLink href={step.href} label={step.linkLabel} location={block.id} />}
          </div>
        ))}
      </div>
    );
    return (
      <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 56 : 80}px 0` }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
          <div style={{ display: "grid", gridTemplateColumns: stacked ? "1fr" : "1fr 1.1fr", gap: isMobile ? 32 : 56, alignItems: "center" }}>
            <div className="fade-up" style={{ borderRadius: 20, overflow: "hidden", minHeight: isMobile ? 200 : 320 }}>
              <MockVisual name={block.mock ?? "kwame"} />
            </div>
            <div>
              <Heading>{block.heading}</Heading>
              {block.intro && <Intro marginBottom={32}>{block.intro}</Intro>}
              <div className="fade-up">{dotted}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 56 : 80}px 0` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
        <Heading>{block.heading}</Heading>
        {block.intro && <Intro>{block.intro}</Intro>}
        <div className="fade-up" style={{ position: "relative", display: stacked ? "flex" : "grid", flexDirection: stacked ? "column" : undefined, gridTemplateColumns: stacked ? undefined : `repeat(${block.steps.length}, 1fr)`, gap: stacked ? 28 : 8 }}>
          {!stacked && (
            <div style={{ position: "absolute", top: 17, left: `${50 / block.steps.length}%`, right: `${50 / block.steps.length}%`, height: 1, background: T.borderLight, zIndex: 0 }} />
          )}
          {stacked && <div style={{ position: "absolute", left: 17, top: 8, bottom: 8, width: 1, background: T.borderLight, zIndex: 0 }} />}
          {block.steps.map((step, i) => (
            <div key={i} style={{ position: "relative", display: "flex", flexDirection: stacked ? "row" : "column", gap: stacked ? 18 : 0, paddingRight: stacked ? 0 : 12 }}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: T.primary, color: T.white, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 13, marginBottom: stacked ? 0 : 16, flexShrink: 0, zIndex: 1 }}>{i + 1}</div>
              <div>
                <p style={{ margin: "0 0 6px", fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 15, color: T.dark }}>{step.title}</p>
                <p style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 13.5, lineHeight: 1.6, color: T.muted }}>{step.desc}</p>
                {step.href && step.linkLabel && <ArrowLink href={step.href} label={step.linkLabel} location={block.id} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   MARKETS BLOCK — continuous marquee, matching the homepage's countries strip
═══════════════════════════════════════ */
export const MARKET_COUNTRIES = ["Nigeria", "Ghana", "Kenya", "Côte d'Ivoire", "South Africa", "Zambia", "Senegal", "Cameroon"];
export const MARKET_COUNTRIES_FR = ["Nigéria", "Ghana", "Kenya", "Côte d'Ivoire", "Afrique du Sud", "Zambie", "Sénégal", "Cameroun"];

const COUNTRY_INFO: Record<string, { flag: string; currency: string }> = {
  "Nigeria": { flag: "🇳🇬", currency: "NGN" },
  "Ghana": { flag: "🇬🇭", currency: "GHS" },
  "Kenya": { flag: "🇰🇪", currency: "KES" },
  "South Africa": { flag: "🇿🇦", currency: "ZAR" },
  "Zambia": { flag: "🇿🇲", currency: "ZMW" },
  "Cameroon": { flag: "🇨🇲", currency: "XAF" },
  "Côte d'Ivoire": { flag: "🇨🇮", currency: "XOF" },
  "Senegal": { flag: "🇸🇳", currency: "XOF" },
};

function MarketsBlock({ block }: { block: Extract<IndustryBlock, { kind: "markets" }> }) {
  const { isMobile } = useBreakpoint();
  const hPad = useHPad();
  const loop = [...block.countries, ...block.countries, ...block.countries];
  const [paused, setPaused] = React.useState(false);
  return (
    <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 56 : 80}px 0` }}>
      <style>{`
        @keyframes indMarketsMarquee{from{transform:translateX(0);}to{transform:translateX(-33.333%);}}
        .ind-markets-track{animation:indMarketsMarquee 22s linear infinite;}
      `}</style>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
        <Heading>{block.heading}</Heading>
        {block.intro && <Intro marginBottom={32}>{block.intro}</Intro>}
      </div>
      <div className="fade-up" style={{ width: "100%", overflow: "hidden", borderTop: `1px solid ${T.borderLight}`, borderBottom: `1px solid ${T.borderLight}` }}>
        <div
          className="ind-markets-track"
          style={{ display: "flex", alignItems: "center", width: "max-content", animationPlayState: paused ? "paused" : "running" }}
          aria-label="Markets we operate in"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {loop.map((c, i) => {
            const info = COUNTRY_INFO[c];
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: isMobile ? 6 : 12, padding: isMobile ? "12px 14px" : "26px 36px", borderRight: `1px solid ${T.borderLight}`, flexShrink: 0 }}>
                {info && <span style={{ fontSize: isMobile ? 16 : 28, lineHeight: 1, userSelect: "none" }}>{info.flag}</span>}
                <div>
                  <p style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: isMobile ? 11 : 14, color: T.dark, whiteSpace: "nowrap", lineHeight: 1.25 }}>{c}</p>
                  {info && <p style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: isMobile ? 9 : 11, color: T.muted, letterSpacing: "0.06em", lineHeight: 1.4 }}>{info.currency}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {block.ctaLabel && block.ctaHref && (
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
          <div className="fade-up" style={{ marginTop: 32 }}><PrimaryBtn cta={{ label: block.ctaLabel, href: block.ctaHref }} location={block.id} /></div>
        </div>
      )}
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
    <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 44 : 64}px 0` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
        <div style={{ display: "flex", flexDirection: isMobile || isTablet ? "column" : "row", alignItems: isMobile || isTablet ? "flex-start" : "center", justifyContent: "space-between", gap: 24 }}>
          <div style={{ maxWidth: 640 }}>
            <p className="fade-up" style={{ margin: "0 0 8px", fontFamily: "Rubik, sans-serif", fontStyle: "italic", fontWeight: 500, fontSize: isMobile ? 22 : 26, color: T.headingBlack }}>{block.heading}</p>
            <p className="fade-up" style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 14.5, lineHeight: 1.65, color: T.muted }}>{block.copy}</p>
          </div>
          <div className="fade-up" style={{ flexShrink: 0 }}><PrimaryBtn cta={block.cta} location={block.id} /></div>
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
    <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 48 : 72}px 0` }}>
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
            <PrimaryBtn cta={block.primaryCta} location={block.id} />
            {block.secondaryCta && <SecondaryBtn cta={block.secondaryCta} location={block.id} />}
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
          case "list": return <ListBlock key={block.id} block={block} />;
          case "bento": return <BentoBlock key={block.id} block={block} />;
          case "showcase": return <ShowcaseBlock key={block.id} block={block} />;
          case "split": return <SplitBlock key={block.id} block={block} />;
          case "stats": return <StatsBlock key={block.id} block={block} />;
          case "quote": return <QuoteBlock key={block.id} block={block} />;
          case "marqueeList": return <MarqueeListBlock key={block.id} block={block} />;
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
