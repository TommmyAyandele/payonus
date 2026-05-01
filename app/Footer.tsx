"use client";

import React from "react";
import { useBreakpoint } from "./use-breakpoint";

const BG        = "#DDD6FE";
const HEAD      = "#1D0057";
const LINK      = "#6B6877";
const COPY      = "#49454F";
const DIVIDER   = "rgba(96,9,255,0.18)";
const ICON_RING = "rgba(96,9,255,0.28)";

const COLS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Payonus",
    links: [
      { label: "About",    href: "#" },
      { label: "Blog",     href: "#" },
      { label: "Careers",  href: "#" },
      { label: "Contact",  href: "#" },
    ],
  },
  {
    heading: "Products",
    links: [
      { label: "Payouts",     href: "/payouts"     },
      { label: "Collections", href: "/collections" },
      { label: "Settlements", href: "/settlements" },
      { label: "Payment API", href: "/payment-api" },
      { label: "Analytics",   href: "/analytics"   },
    ],
  },
  {
    heading: "Developers",
    links: [
      { label: "Documentation", href: "/docs"       },
      { label: "API Reference",  href: "/docs"       },
      { label: "SDKs",           href: "/docs"       },
      { label: "Status",         href: "#"           },
      { label: "Changelog",      href: "/docs"       },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy",   href: "#" },
      { label: "Cookies Policy",   href: "#" },
    ],
  },
];

function SocialBtn({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <button
      aria-label={label}
      style={{
        width:          40,
        height:         40,
        borderRadius:   "50%",
        border:         `1.5px solid ${ICON_RING}`,
        background:     "transparent",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        cursor:         "pointer",
        flexShrink:     0,
        transition:     "background 0.2s, transform 0.25s cubic-bezier(0.16,1,0.3,1), border-color 0.2s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background   = "rgba(96,9,255,0.1)";
        e.currentTarget.style.transform    = "scale(1.15)";
        e.currentTarget.style.borderColor  = "rgba(96,9,255,0.55)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background   = "transparent";
        e.currentTarget.style.transform    = "scale(1)";
        e.currentTarget.style.borderColor  = ICON_RING;
      }}
    >
      {children}
    </button>
  );
}

export default function Footer() {
  const { isMobile, isTablet } = useBreakpoint();
  const hPad     = isMobile ? 20 : isTablet ? 48 : 80;
  const gridCols = isMobile ? "1fr 1fr" : "1fr 1fr 1fr 1fr";
  const gridGap  = isMobile ? 32 : 48;
  const vPad     = isMobile ? 40 : 56;

  return (
    <footer
      style={{
        width:      "100%",
        background: BG,
        boxSizing:  "border-box",
        flex:       1,
      }}
    >
      <div style={{
        maxWidth:  1440,
        margin:    "0 auto",
        padding:   `${vPad}px ${hPad}px`,
        boxSizing: "border-box",
      }}>

        {/* ── 4-column link grid ── */}
        <div style={{
          display:             "grid",
          gridTemplateColumns: gridCols,
          gap:                 gridGap,
          marginBottom:        isMobile ? 40 : 64,
        }}>
          {COLS.map(col => (
            <div key={col.heading}>
              <p style={{
                margin:     "0 0 24px",
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 700,
                fontSize:   15,
                color:      HEAD,
              }}>
                {col.heading}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {col.links.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="footer-link"
                    style={{
                      fontFamily:     "DM Sans, sans-serif",
                      fontWeight:     400,
                      fontSize:       15,
                      color:          LINK,
                      textDecoration: "none",
                      transition:     "color 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#6009FF")}
                    onMouseLeave={e => (e.currentTarget.style.color = LINK)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Divider ── */}
        <div style={{ borderTop: `1px solid ${DIVIDER}`, marginBottom: 40 }} />

        {/* ── Bottom bar: logo · copyright · socials ── */}
        <div style={{
          display:        "flex",
          alignItems:     isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          flexDirection:  isMobile ? "column" : "row",
          gap:            isMobile ? 20 : 0,
        }}>

          {/* Logo */}
          <img
            src="/logo-full.svg"
            alt="Payonus"
            height={30}
            style={{ display: "block" }}
          />

          {/* Copyright */}
          <p style={{
            margin:     0,
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 400,
            fontSize:   14,
            color:      COPY,
          }}>
            © 2026 Payonus All Rights Reserved
          </p>

          {/* Social icons */}
          <div style={{ display: "flex", gap: 10 }}>

            {/* LinkedIn */}
            <SocialBtn label="LinkedIn">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke={HEAD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="2" y="9" width="4" height="12" stroke={HEAD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="4" cy="4" r="2" stroke={HEAD} strokeWidth="1.8"/>
              </svg>
            </SocialBtn>

            {/* Instagram */}
            <SocialBtn label="Instagram">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke={HEAD} strokeWidth="1.8"/>
                <circle cx="12" cy="12" r="4" stroke={HEAD} strokeWidth="1.8"/>
                <circle cx="17.5" cy="6.5" r="1" fill={HEAD}/>
              </svg>
            </SocialBtn>

            {/* Facebook */}
            <SocialBtn label="Facebook">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke={HEAD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </SocialBtn>

            {/* X / Twitter */}
            <SocialBtn label="X">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke={HEAD} strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </SocialBtn>

          </div>
        </div>

      </div>
    </footer>
  );
}
