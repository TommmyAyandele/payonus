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

function ArrowLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} style={{ display: "inline-flex", alignItems: "center", gap: 4, marginTop: 12, fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 13, color: T.primary, textDecoration: "none" }}>
      {label}
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke={T.primary} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </a>
  );
}

/* Button styling matches the site-wide convention (hero CTAs, ProductPage, pricing) exactly:
   radius 4, 13px/28px primary padding, 11px/24px secondary padding. Kept identical everywhere. */
function PrimaryBtn({ cta }: { cta: IndustryCTA }) {
  return (
    <button
      style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 14, color: T.white, background: T.primary, border: "none", borderRadius: 4, padding: "13px 28px", cursor: "pointer", transition: "opacity .15s" }}
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
      style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 14, color: T.muted, background: "transparent", border: `1px solid ${T.muted}`, borderRadius: 4, padding: "11px 24px", cursor: "pointer", transition: "background .15s" }}
      onMouseEnter={e => (e.currentTarget.style.background = "#E9DDFF")}
      onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
      onClick={() => { if (cta.external) window.open(cta.href, "_blank"); else window.location.href = cta.href; }}
    >
      {cta.label}
    </button>
  );
}

/* ═══════════════════════════════════════
   ILLUSTRATED PEOPLE
   Hand-drawn flat-style portraits instead of photography or product
   screenshots — varied skin tones, hairstyles and outfits so the people
   using Payonus can actually see themselves, not a handful of repeated
   stock photos or app screenshots. Pure inline SVG, no external assets.
═══════════════════════════════════════ */
type SkinTone = "s1" | "s2" | "s3" | "s4" | "s5";
const SKIN: Record<SkinTone, string> = {
  s1: "#4A2E1E", s2: "#7A4B2C", s3: "#9C6B42", s4: "#C68B5C", s5: "#E0A876",
};
type HairStyle = "afro" | "hijab" | "locs" | "short" | "bun";

/* Each scene gives the same base figure a distinct job, props and pose so the
   fourteen illustrations read as fourteen different people with different
   stories — a pilot, a forex trader, a rider — not one template recoloured. */
type Scene =
  | "cashier" | "executive" | "merchant" | "rider" | "analyst" | "pilot"
  | "globalTrader" | "security" | "manager" | "gamer" | "auditor"
  | "engineer" | "connector" | "freight";

interface PersonPreset { skin: SkinTone; hair: HairStyle; hairColor: string; outfit: string; bg: string; icon: IconName; scene: Scene; }

const PEOPLE = {
  amara:  { skin: "s2", hair: "afro",  hairColor: "#1E140F", outfit: "#6009FF", bg: "#EDE9FF", icon: "bolt",     scene: "cashier" },
  tunde:  { skin: "s4", hair: "short", hairColor: "#170F0A", outfit: "#2B3A55", bg: "#F4F0FF", icon: "building", scene: "executive" },
  ngozi:  { skin: "s1", hair: "hijab", hairColor: "#C2703D", outfit: "#C2703D", bg: "#FDF3E7", icon: "card",     scene: "merchant" },
  kwame:  { skin: "s3", hair: "locs",  hairColor: "#1E140F", outfit: "#3F6650", bg: "#EDE9FF", icon: "route",    scene: "rider" },
  fatima: { skin: "s2", hair: "hijab", hairColor: "#4B2FA0", outfit: "#4B2FA0", bg: "#F4F0FF", icon: "chart",    scene: "analyst" },
  chidi:  { skin: "s5", hair: "short", hairColor: "#1E140F", outfit: "#C98A2C", bg: "#FDF3E7", icon: "plane",    scene: "pilot" },
  aisha:  { skin: "s1", hair: "locs",  hairColor: "#1E140F", outfit: "#6009FF", bg: "#EDE9FF", icon: "globe",    scene: "globalTrader" },
  femi:   { skin: "s3", hair: "bun",   hairColor: "#170F0A", outfit: "#2B3A55", bg: "#F4F0FF", icon: "shield",   scene: "security" },
  zainab: { skin: "s4", hair: "hijab", hairColor: "#3F6650", outfit: "#3F6650", bg: "#FDF3E7", icon: "users",    scene: "manager" },
  dele:   { skin: "s2", hair: "short", hairColor: "#1E140F", outfit: "#C2703D", bg: "#EDE9FF", icon: "gauge",    scene: "gamer" },
  amina:  { skin: "s5", hair: "hijab", hairColor: "#2B3A55", outfit: "#2B3A55", bg: "#F4F0FF", icon: "eye",      scene: "auditor" },
  tobi:   { skin: "s1", hair: "afro",  hairColor: "#170F0A", outfit: "#C98A2C", bg: "#FDF3E7", icon: "layers",   scene: "engineer" },
  yusuf:  { skin: "s3", hair: "short", hairColor: "#170F0A", outfit: "#4B2FA0", bg: "#EDE9FF", icon: "plug",     scene: "connector" },
  halima: { skin: "s4", hair: "hijab", hairColor: "#C98A2C", outfit: "#C98A2C", bg: "#F4F0FF", icon: "truck",    scene: "freight" },
} satisfies Record<string, PersonPreset>;

export type MockName = keyof typeof PEOPLE;

function HairBack({ style, color }: { style: HairStyle; color: string }) {
  switch (style) {
    case "afro": return <circle cx="150" cy="132" r="76" fill={color} />;
    case "locs": return (
      <g fill={color}>
        <circle cx="150" cy="128" r="66" />
        {[-40, -24, -8, 8, 24, 40].map(dx => <rect key={dx} x={150 + dx - 5} y="150" width="10" height="120" rx="5" />)}
      </g>
    );
    case "hijab": return <path d="M70,150 Q70,52 150,52 Q230,52 230,150 L240,300 Q150,336 60,300 Z" fill={color} />;
    case "bun": return (
      <g fill={color}>
        <circle cx="150" cy="130" r="64" />
        <circle cx="198" cy="90" r="18" />
      </g>
    );
    default: return <path d="M86,130 a64,64 0 01128,0 v-16 a64,56 0 00-128,0 z" fill={color} />;
  }
}

/* Head-and-shoulder level props: what makes a pilot read as a pilot, a
   gamer as a gamer. Drawn over the hair/outfit, before the held prop. */
function SceneGear({ scene, hijab }: { scene: Scene; hijab: boolean }) {
  switch (scene) {
    case "pilot": return (
      <g>
        <path d="M84,126 A66,66 0 01216,126 L214,108 Q150,84 86,108 Z" fill="#1C1B1F" />
        <rect x="118" y="118" width="64" height="12" rx="5" fill="#0F0E11" />
        <circle cx="150" cy="106" r="7" fill="#F4B61E" />
        <rect x="66" y="252" width="34" height="12" rx="3" fill="#14131A" />
        <rect x="200" y="252" width="34" height="12" rx="3" fill="#14131A" />
        <path d="M143,240 L157,240 L152,272 L148,272 Z" fill="#C2262A" />
      </g>
    );
    case "gamer": return (
      <g>
        <path d="M92,116 Q150,68 208,116" stroke="#1C1B1F" strokeWidth="9" fill="none" strokeLinecap="round" />
        <circle cx="92" cy="126" r="12" fill="#1C1B1F" />
        <circle cx="208" cy="126" r="12" fill="#1C1B1F" />
        <path d="M92,132 Q100,168 130,178" stroke="#1C1B1F" strokeWidth="4" fill="none" strokeLinecap="round" />
      </g>
    );
    case "freight": return (
      <g>
        <path d="M66,300 L108,380" stroke="#F4B61E" strokeWidth="9" strokeLinecap="round" />
        <path d="M234,300 L192,380" stroke="#F4B61E" strokeWidth="9" strokeLinecap="round" />
      </g>
    );
    case "executive":
    case "globalTrader":
    case "manager": return (
      <g>
        <path d="M118,258 L150,304 L182,258" stroke="rgba(255,255,255,0.55)" strokeWidth="5" fill="none" strokeLinecap="round" />
        {scene === "manager" ? (
          <>
            <line x1="150" y1="244" x2="150" y2="312" stroke="#FFFFFF" strokeWidth="3" />
            <rect x="138" y="306" width="24" height="30" rx="3" fill="#FFFFFF" stroke="#E5E7EB" />
          </>
        ) : (
          <rect x="142" y="262" width="16" height="26" rx="2" fill="#F4B61E" />
        )}
      </g>
    );
    case "security": return (
      <g transform="translate(134,266)">
        <path d="M12,0 L24,5 L24,18 Q24,30 12,36 Q0,30 0,18 L0,5 Z" fill="#F4B61E" />
        <path d="M6,17 L10,22 L18,11" stroke="#1C1B1F" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    );
    case "analyst":
    case "auditor": return (
      <g>
        <circle cx="130" cy="148" r="15" fill="none" stroke="#20140D" strokeWidth="3.5" />
        <circle cx="170" cy="148" r="15" fill="none" stroke="#20140D" strokeWidth="3.5" />
        <line x1="145" y1="148" x2="155" y2="148" stroke="#20140D" strokeWidth="3.5" />
      </g>
    );
    case "merchant":
    case "cashier": return (
      <path d={hijab ? "M96,220 L204,220 L212,380 L88,380 Z" : "M110,258 L190,258 L198,380 L102,380 Z"} fill="rgba(255,255,255,0.82)" />
    );
    default: return null;
  }
}

/* A small hand-held object in front of the outfit, unique per scene. */
function SceneProp({ scene }: { scene: Scene }) {
  const wrap = (children: React.ReactNode) => <g transform="translate(50,296)">{children}</g>;
  switch (scene) {
    case "cashier": return wrap(<>
      <rect width="46" height="30" rx="5" fill="#1C1B1F" />
      <rect x="6" y="6" width="34" height="12" rx="2" fill="#6009FF" />
      <circle cx="12" cy="24" r="2.5" fill="#FFFFFF" /><circle cx="20" cy="24" r="2.5" fill="#FFFFFF" /><circle cx="28" cy="24" r="2.5" fill="#FFFFFF" />
    </>);
    case "merchant": return wrap(<>
      <rect width="32" height="50" rx="6" fill="#1C1B1F" />
      <rect x="4" y="6" width="24" height="32" rx="2" fill="#FFFFFF" />
      <path d="M8,22 L14,28 L24,14" stroke="#3F6650" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>);
    case "rider": return wrap(<>
      <path d="M4,30 A22,22 0 0148,30 L48,36 L4,36 Z" fill="#1C1B1F" />
      <rect x="20" y="28" width="8" height="8" fill="#F4B61E" />
    </>);
    case "analyst": return wrap(<>
      <rect width="44" height="52" rx="5" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
      <polyline points="6,40 16,26 24,32 38,12" stroke="#4B2FA0" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>);
    case "pilot": return null;
    case "globalTrader": return wrap(<>
      <circle cx="20" cy="20" r="20" fill="none" stroke="#1C1B1F" strokeWidth="3" />
      <ellipse cx="20" cy="20" rx="8" ry="20" fill="none" stroke="#1C1B1F" strokeWidth="2" />
      <line x1="0" y1="20" x2="40" y2="20" stroke="#1C1B1F" strokeWidth="2" />
    </>);
    case "security": return null;
    case "manager": return null;
    case "gamer": return wrap(<>
      <rect width="56" height="26" rx="13" fill="#1C1B1F" />
      <circle cx="16" cy="13" r="4.5" fill="#F4B61E" /><circle cx="40" cy="13" r="4.5" fill="#F4B61E" />
    </>);
    case "auditor": return wrap(<>
      <circle cx="14" cy="14" r="14" fill="none" stroke="#1C1B1F" strokeWidth="4" />
      <line x1="24" y1="24" x2="38" y2="38" stroke="#1C1B1F" strokeWidth="5" strokeLinecap="round" />
    </>);
    case "engineer": return wrap(<>
      <rect width="52" height="34" rx="3" fill="#1C1B1F" />
      <rect x="4" y="4" width="44" height="24" fill="#C98A2C" />
      <rect y="34" width="52" height="6" rx="2" fill="#3A3742" />
    </>);
    case "connector": return wrap(<>
      <path d="M0,14 L14,14 L14,4 L26,4 L26,24 L14,24 L14,34" stroke="#1C1B1F" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="38" cy="14" r="9" fill="#4B2FA0" />
    </>);
    case "freight": return wrap(<>
      <rect width="46" height="40" rx="4" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
      <line x1="0" y1="20" x2="46" y2="20" stroke="#C98A2C" strokeWidth="5" />
      <line x1="23" y1="0" x2="23" y2="40" stroke="#C98A2C" strokeWidth="5" />
    </>);
    default: return wrap(<>
      <rect width="46" height="30" rx="5" fill="#1C1B1F" />
      <rect x="6" y="6" width="34" height="12" rx="2" fill="#2B3A55" />
    </>);
  }
}

function PersonIllustration({ preset }: { preset: PersonPreset }) {
  const faceR = preset.hair === "hijab" ? 52 : 60;
  return (
    <svg viewBox="0 0 300 380" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", display: "block" }} role="img" aria-label="Illustrated portrait">
      <rect width="300" height="380" fill={preset.bg} />
      <circle cx="252" cy="56" r="90" fill="rgba(96,9,255,0.06)" />
      <circle cx="26" cy="344" r="112" fill="rgba(244,178,73,0.10)" />
      <HairBack style={preset.hair} color={preset.hairColor} />
      <path d="M40,380 Q40,258 150,258 Q260,258 260,380 Z" fill={preset.outfit} />
      <rect x="130" y="188" width="40" height="52" fill={SKIN[preset.skin]} />
      <circle cx="150" cy="150" r={faceR} fill={SKIN[preset.skin]} />
      <circle cx="130" cy="148" r="4.5" fill="#20140D" />
      <circle cx="170" cy="148" r="4.5" fill="#20140D" />
      <path d="M128,172 Q150,186 172,172" stroke="#20140D" strokeWidth="4" strokeLinecap="round" fill="none" />
      <SceneGear scene={preset.scene} hijab={preset.hair === "hijab"} />
      <SceneProp scene={preset.scene} />
      <g transform="translate(228,256)">
        <circle r="26" fill="#FFFFFF" />
        <g transform="translate(-13,-13)"><BlockIcon name={preset.icon} size={26} /></g>
      </g>
    </svg>
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
                  {item.href && item.linkLabel && <ArrowLink href={item.href} label={item.linkLabel} />}
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
                {item.href && item.linkLabel && <ArrowLink href={item.href} label={item.linkLabel} />}
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
            <div style={{ position: "relative", overflow: "hidden", gridRow: isMobile ? "auto" : isTablet ? "auto" : "span 2", background: "#EDE9FF", border: `2px solid ${T.primary}`, borderRadius: 20, padding: isMobile ? "26px 22px" : "38px 32px", display: "flex", flexDirection: "column", justifyContent: block.leadMock ? "space-between" : "flex-end", minHeight: isMobile ? 220 : 340 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: T.white, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <BlockIcon name={lead.icon} size={24} />
              </div>
              {block.leadMock && (
                <div style={{ alignSelf: isMobile ? "center" : "flex-end", margin: isMobile ? "16px 0" : "0" }}>
                  <MockVisual name={block.leadMock} />
                </div>
              )}
              <div>
                <p style={{ margin: "20px 0 8px", fontFamily: "Rubik, sans-serif", fontStyle: "italic", fontWeight: 500, fontSize: isMobile ? 22 : 26, lineHeight: 1.2, color: T.headingBlack }}>{lead.title}</p>
                <p style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 14, lineHeight: 1.65, color: T.muted }}>{lead.desc}</p>
                {lead.href && lead.linkLabel && <ArrowLink href={lead.href} label={lead.linkLabel} />}
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
                {item.href && item.linkLabel && <ArrowLink href={item.href} label={item.linkLabel} />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SHOWCASE BLOCK — horizontal scroll of gradient panels
═══════════════════════════════════════ */
/* Matches TestimonialsSection's arrow button exactly — same size, color, radius, hover. */
const showcaseArrowBtn: React.CSSProperties = {
  width: 52, height: 52,
  display: "flex", alignItems: "center", justifyContent: "center",
  background: "#EDE9FF", border: "none", borderRadius: 8,
  cursor: "pointer", flexShrink: 0, transition: "background 0.15s",
};

function ShowcaseArrow({ dir, onClick }: { dir: "left" | "right"; onClick: () => void }) {
  return (
    <button
      aria-label={dir === "left" ? "Previous" : "Next"}
      onClick={onClick}
      style={showcaseArrowBtn}
      onMouseEnter={e => (e.currentTarget.style.background = "#DDD6FE")}
      onMouseLeave={e => (e.currentTarget.style.background = "#EDE9FF")}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d={dir === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} stroke="#4B2FA0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

function ShowcaseBlock({ block }: { block: Extract<IndustryBlock, { kind: "showcase" }> }) {
  const { isMobile } = useBreakpoint();
  const hPad = useHPad();
  const trackRef = React.useRef<HTMLDivElement>(null);
  const cardW = isMobile ? 240 : 300;
  const scroll = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * (cardW + 16), behavior: "smooth" });
  };
  return (
    <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 56 : 80}px 0` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, marginBottom: 8 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <Heading>{block.heading}</Heading>
            {block.intro && <Intro marginBottom={0}>{block.intro}</Intro>}
          </div>
          {!isMobile && (
            <div style={{ display: "flex", gap: 12, flexShrink: 0, marginTop: 4 }}>
              <ShowcaseArrow dir="left" onClick={() => scroll(-1)} />
              <ShowcaseArrow dir="right" onClick={() => scroll(1)} />
            </div>
          )}
        </div>
      </div>
      <div ref={trackRef} className="fade-up showcase-track" style={{ display: "flex", gap: 16, overflowX: "auto", padding: `28px ${hPad}px 12px`, scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}>
        <style>{`.showcase-track{scrollbar-width:none;-ms-overflow-style:none;}.showcase-track::-webkit-scrollbar{display:none;}`}</style>
        {block.items.map((item, i) => (
          <div key={i} style={{
            position: "relative", flex: `0 0 ${cardW}px`, height: isMobile ? 320 : 380, borderRadius: 20, overflow: "hidden",
            scrollSnapAlign: "start", background: "#EDE9FF",
          }}>
            <div style={{ position: "absolute", inset: 0 }}><PersonIllustration preset={PEOPLE[item.illustration]} /></div>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,12,20,0.82) 0%, rgba(15,12,20,0.35) 42%, rgba(15,12,20,0) 68%)" }} />
            <div style={{ position: "absolute", top: 18, left: 18 }}>
              <span style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 12, color: "rgba(255,255,255,0.75)", letterSpacing: "0.04em" }}>{String(i + 1).padStart(2, "0")}</span>
            </div>
            <div style={{ position: "absolute", left: 20, right: 20, bottom: 20 }}>
              <p style={{ margin: "0 0 6px", fontFamily: "Rubik, sans-serif", fontStyle: "italic", fontWeight: 500, fontSize: 20, lineHeight: 1.25, color: "#FFFFFF" }}>{item.title}</p>
              <p style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 12.5, lineHeight: 1.55, color: "rgba(255,255,255,0.82)" }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {isMobile && (
        <div style={{ display: "flex", gap: 12, padding: `0 ${hPad}px`, marginTop: 8 }}>
          <ShowcaseArrow dir="left" onClick={() => scroll(-1)} />
          <ShowcaseArrow dir="right" onClick={() => scroll(1)} />
        </div>
      )}
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
  return (
    <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 56 : 80}px 0` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
        <div style={{ display: "grid", gridTemplateColumns: stacked ? "1fr" : "1fr 1fr", gap: isMobile ? 32 : 56, alignItems: "center" }}>
          {block.reverse && !stacked ? <>{panelCol}{textCol}</> : <>{textCol}{panelCol}</>}
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
  return (
    <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 48 : 72}px 0` }}>
      <style>{`
        @keyframes indTicker{from{transform:translateX(0);}to{transform:translateX(-25%);}}
        .ind-ticker-track{display:flex;flex-wrap:nowrap;width:max-content;animation:indTicker 26s linear infinite;}
        .ind-ticker-track:hover{animation-play-state:paused;}
      `}</style>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
        <Heading maxWidth={680}>{block.heading}</Heading>
        {block.intro && <Intro marginBottom={36}>{block.intro}</Intro>}
      </div>
      <div className="fade-up" style={{ width: "100%", overflow: "hidden" }}>
        <div className="ind-ticker-track">
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
            {step.href && step.linkLabel && <ArrowLink href={step.href} label={step.linkLabel} />}
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
                {step.href && step.linkLabel && <ArrowLink href={step.href} label={step.linkLabel} />}
              </div>
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
          <div className="fade-up"><PrimaryBtn cta={{ label: block.ctaLabel, href: block.ctaHref }} /></div>
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
    <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 44 : 64}px 0` }}>
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
