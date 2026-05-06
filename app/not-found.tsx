"use client";

import React from "react";
import { Logo } from "./Navbar";

const PRIMARY = "#6009FF";
const INK     = "#0F0C36";
const MUTED   = "#6B6877";
const BG      = "#FAFAF8";
const EASE    = "cubic-bezier(0.16,1,0.3,1)";

export default function NotFound() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const fade = (delay: string): React.CSSProperties => ({
    transition: `opacity 0.7s ${delay} ${EASE}, transform 0.7s ${delay} ${EASE}`,
    opacity:    mounted ? 1 : 0,
    transform:  mounted ? "translateY(0)" : "translateY(24px)",
  });

  return (
    <div style={{
      minHeight: "100vh",
      background: BG,
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Minimal nav */}
      <header style={{
        height: 72,
        display: "flex",
        alignItems: "center",
        padding: "0 48px",
        borderBottom: "1px solid #E7E0EC",
      }}>
        <Logo height={28} />
      </header>

      {/* Main content */}
      <main style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>

        {/* Background glow blob */}
        <div aria-hidden style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 640,
          height: 640,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(96,9,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* 404 numeral */}
        <div style={{
          ...fade("0s"),
          fontFamily: "Rubik, sans-serif",
          fontWeight: 700,
          fontStyle: "italic",
          fontSize: "clamp(100px, 20vw, 180px)",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: `2px ${PRIMARY}`,
          letterSpacing: "-4px",
          marginBottom: 24,
          userSelect: "none",
        }}>
          404
        </div>

        {/* Heading */}
        <h1 style={{
          ...fade("0.1s"),
          fontFamily: "Rubik, sans-serif",
          fontWeight: 700,
          fontSize: "clamp(26px, 4vw, 40px)",
          lineHeight: 1.15,
          color: INK,
          margin: "0 0 16px",
          maxWidth: 520,
        }}>
          This page took a wrong turn
        </h1>

        {/* Sub-copy */}
        <p style={{
          ...fade("0.18s"),
          fontFamily: "DM Sans, sans-serif",
          fontWeight: 400,
          fontSize: 18,
          lineHeight: 1.6,
          color: MUTED,
          margin: "0 0 48px",
          maxWidth: 420,
        }}>
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back on track.
        </p>

        {/* CTAs */}
        <div style={{
          ...fade("0.26s"),
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          <a
            href="/"
            className="cta-pulse"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 32px",
              borderRadius: 100,
              background: PRIMARY,
              color: "#fff",
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 600,
              fontSize: 16,
              textDecoration: "none",
              letterSpacing: 0.2,
              transition: `opacity 0.2s, transform 0.2s ${EASE}`,
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Go home
          </a>

          <a
            href="/support"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 32px",
              borderRadius: 100,
              border: `1.5px solid #E7E0EC`,
              background: "transparent",
              color: INK,
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 600,
              fontSize: 16,
              textDecoration: "none",
              letterSpacing: 0.2,
              transition: `border-color 0.2s, background 0.2s`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = PRIMARY;
              e.currentTarget.style.background  = "rgba(96,9,255,0.04)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "#E7E0EC";
              e.currentTarget.style.background  = "transparent";
            }}
          >
            Contact support
          </a>
        </div>

        {/* Quick links */}
        <div style={{
          ...fade("0.34s"),
          marginTop: 72,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
        }}>
          <p style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: 13,
            fontWeight: 500,
            color: MUTED,
            textTransform: "uppercase",
            letterSpacing: 1.2,
            margin: 0,
          }}>
            Popular pages
          </p>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { label: "Payouts",     href: "/payouts"     },
              { label: "Collections", href: "/collections" },
              { label: "Pricing",     href: "/pricing"     },
              { label: "Docs",        href: "/docs"        },
            ].map(link => (
              <a
                key={link.href}
                href={link.href}
                className="footer-link"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  color: PRIMARY,
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* Minimal footer */}
      <footer style={{
        padding: "24px 48px",
        borderTop: "1px solid #E7E0EC",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <p style={{
          fontFamily: "DM Sans, sans-serif",
          fontSize: 13,
          color: MUTED,
          margin: 0,
        }}>
          © {new Date().getFullYear()} PayOnUs. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
