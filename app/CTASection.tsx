"use client";

import React from "react";
import { useBreakpoint } from "./use-breakpoint";
import { useSalesModal } from "./SalesModalContext";

const PRIMARY = "#6009FF";
const DARK    = "#0F0C36";
const MUTED   = "#49454F";
const DESC    = "#6B6877";
const ICON_BG = "#EDE9FF";

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      width:          48,
      height:         48,
      borderRadius:   10,
      background:     ICON_BG,
      display:        "flex",
      alignItems:     "center",
      justifyContent: "center",
      marginBottom:   20,
    }}>
      {children}
    </div>
  );
}

function LinkArrow({ label, href }: { label: string; href?: string }) {
  const style: React.CSSProperties = {
    display: "inline-flex", alignItems: "center", gap: 4,
    fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 14,
    color: PRIMARY, textDecoration: "none", background: "none",
    border: "none", cursor: "pointer", padding: 0,
  };
  const chevron = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M9 18l6-6-6-6" stroke={PRIMARY} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  return <a href={href ?? "https://merchantv2.payonus.com/signup"} target="_blank" rel="noopener noreferrer" style={style}>{label}{chevron}</a>;
}

function ripple(e: React.MouseEvent<HTMLButtonElement>) {
  const btn  = e.currentTarget;
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 2;
  const span = document.createElement("span");
  Object.assign(span.style, {
    position: "absolute",
    width:    `${size}px`,
    height:   `${size}px`,
    left:     `${e.clientX - rect.left - size / 2}px`,
    top:      `${e.clientY - rect.top  - size / 2}px`,
  });
  span.className = "ripple-effect";
  btn.appendChild(span);
  setTimeout(() => span.remove(), 600);
}

export default function CTASection() {
  const { isMobile, isTablet } = useBreakpoint();
  const { open: openSalesModal } = useSalesModal();
  const hPad    = isMobile ? 20 : isTablet ? 48 : 80;
  const h2Size  = isMobile ? 28 : 44;
  const cols    = isMobile ? "1fr" : "2fr 1fr 1fr";

  return (
    <section
      id="cta"
      style={{
        width:      "100%",
        background: "#FAFAF8",
        paddingTop: 94,
        minHeight:  "55vh",
        boxSizing:  "border-box",
        overflow:   "hidden",
        flexShrink: 0,
      }}
    >
      <div style={{
        maxWidth:  1440,
        width:     "100%",
        margin:    "0 auto",
        padding:   `${isMobile ? 32 : 56}px ${hPad}px`,
        boxSizing: "border-box",
      }}>
        <div style={{
          display:             "grid",
          gridTemplateColumns: cols,
          gap:                 isMobile ? 32 : 48,
          alignItems:          "start",
        }}>

          {/* ── Left: headline + subtext + buttons ── */}
          <div>
            <h2 style={{
              margin:     "0 0 16px",
              fontFamily: "Rubik, sans-serif",
              fontStyle:  "italic",
              fontWeight: 700,
              fontSize:   h2Size,
              lineHeight: 1.1,
              color:      DARK,
            }}>
              Ready to get started?
            </h2>

            <p style={{
              margin:     "0 0 32px",
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 400,
              fontSize:   15,
              lineHeight: 1.65,
              color:      MUTED,
              maxWidth:   440,
            }}>
              Create an account instantly, or contact us to design a
              custom package for your business.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              {/* Filled CTA */}
              <button
                className="cta-pulse"
                style={{
                  position:    "relative",
                  overflow:    "hidden",
                  display:     "flex",
                  alignItems:  "center",
                  gap:         8,
                  fontFamily:  "DM Sans, sans-serif",
                  fontWeight:  500,
                  fontSize:    14,
                  lineHeight:  "20px",
                  color:       "#FFFFFF",
                  background:  PRIMARY,
                  border:      "none",
                  borderRadius: 6,
                  padding:     "12px 20px",
                  cursor:      "pointer",
                  transition:  "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
                }}
                onClick={e => { ripple(e); window.open("https://merchantv2.payonus.com/signup","_blank"); }}
                onMouseMove={e => {
                  const r = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - r.left - r.width  / 2) * 0.25;
                  const y = (e.clientY - r.top  - r.height / 2) * 0.25;
                  e.currentTarget.style.transform = `translate(${x}px,${y}px)`;
                }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; }}
              >
                Get Started
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Outlined CTA */}
              <button
                style={{
                  fontFamily:  "DM Sans, sans-serif",
                  fontWeight:  400,
                  fontSize:    14,
                  lineHeight:  "20px",
                  color:       MUTED,
                  background:  "transparent",
                  border:      `1px solid ${MUTED}`,
                  borderRadius: 6,
                  padding:     "12px 20px",
                  cursor:      "pointer",
                  transition:  "background .15s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#E9DDFF")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                onClick={openSalesModal}
              >
                Contact Sales
              </button>
            </div>
          </div>

          {/* ── Middle: Pricing ── */}
          <div>
            <IconBox>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke={PRIMARY} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="7" cy="7" r="1.2" fill={PRIMARY}/>
              </svg>
            </IconBox>

            <p style={{
              margin:     "0 0 8px",
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize:   16,
              lineHeight: 1.3,
              color:      DARK,
            }}>
              See what you'll pay
            </p>

            <p style={{
              margin:     "0 0 14px",
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 400,
              fontSize:   13.5,
              lineHeight: 1.65,
              color:      DESC,
            }}>
              Integrated per-transaction pricing with no hidden fees.
            </p>

            <LinkArrow label="Pricing details" />
          </div>

          {/* ── Right: Integration ── */}
          <div>
            <IconBox>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke={PRIMARY} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </IconBox>

            <p style={{
              margin:     "0 0 8px",
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize:   16,
              lineHeight: 1.3,
              color:      DARK,
            }}>
              Start building
            </p>

            <p style={{
              margin:     "0 0 14px",
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 400,
              fontSize:   13.5,
              lineHeight: 1.65,
              color:      DESC,
            }}>
              Get up and running with Payonus in as little as 10 minutes.
            </p>

            <LinkArrow label="Integration options" href="/docs" />
          </div>

        </div>
      </div>
    </section>
  );
}
