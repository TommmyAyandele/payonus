"use client";

import React from "react";
import { T } from "./Navbar";

export default function CookieBanner() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes cookieFadeIn {
          from { opacity:0; }
          to   { opacity:1; }
        }
        @keyframes cookieSlideIn {
          from { opacity:0; transform:translateY(-18px) translateX(-50%); }
          to   { opacity:1; transform:translateY(0)     translateX(-50%); }
        }
        .cookie-overlay { animation: cookieFadeIn 0.28s ease forwards; }
        .cookie-panel   { animation: cookieSlideIn 0.38s cubic-bezier(0.16,1,0.3,1) forwards; }
      `}</style>

      {/* Backdrop */}
      <div
        className="cookie-overlay"
        onClick={decline}
        style={{
          position:   "fixed",
          inset:      0,
          background: "rgba(28,27,31,0.38)",
          zIndex:     998,
        }}
      />

      {/* Banner — centered vertically, full viewport width */}
      <div
        className="cookie-panel"
        style={{
          position:        "fixed",
          top:             "50%",
          left:            "50%",
          zIndex:          999,
          width:           "100vw",
          background:      T.white,
          borderTop:       `3px solid ${T.primary}`,
          borderBottom:    "1px solid #E7E0EC",
          boxShadow:       "0 20px 60px rgba(28,27,31,0.22)",
          padding:         "28px 0",
        }}
      >
        {/* Centered inner content */}
        <div style={{
          maxWidth:       1440,
          margin:         "0 auto",
          padding:        "0 80px",
          display:        "flex",
          alignItems:     "center",
          gap:            28,
          flexWrap:       "wrap",
        }}>

          {/* Cookie SVG icon */}
          <div style={{ flexShrink: 0 }}>
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Cookie base */}
              <circle cx="26" cy="26" r="22" fill="#F4B249" opacity="0.15"/>
              <circle cx="26" cy="26" r="22" fill="none" stroke="#F4B249" strokeWidth="2"/>
              {/* Cookie fill */}
              <circle cx="26" cy="26" r="18" fill="#FDEABD"/>
              {/* Bite taken out (top right) */}
              <path d="M38 14 Q44 20 40 28 Q36 18 30 16 Z" fill={T.white}/>
              {/* Chocolate chips */}
              <ellipse cx="20" cy="22" rx="2.5" ry="2" fill="#7C4B1A"/>
              <ellipse cx="30" cy="20" rx="2"   ry="1.6" fill="#7C4B1A"/>
              <ellipse cx="22" cy="31" rx="2.5" ry="2" fill="#7C4B1A"/>
              <ellipse cx="32" cy="30" rx="2"   ry="1.6" fill="#7C4B1A"/>
              <ellipse cx="26" cy="25" rx="1.8" ry="1.4" fill="#7C4B1A"/>
              <ellipse cx="17" cy="29" rx="1.6" ry="1.3" fill="#7C4B1A"/>
            </svg>
          </div>

          {/* Text */}
          <div style={{ flex: 1, minWidth: 220 }}>
            <div style={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize:   17,
              color:      T.dark,
              marginBottom: 5,
            }}>
              We use cookies 🍪
            </div>
            <div style={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 400,
              fontSize:   14,
              color:      T.muted,
              lineHeight: 1.6,
              maxWidth:   560,
            }}>
              We use cookies to improve your experience, personalise content, and analyse site traffic.
              By clicking <strong style={{ color: T.dark, fontWeight: 600 }}>"Accept all"</strong> you consent to our use of cookies.{" "}
              <a href="#" style={{ color: T.primary, textDecoration: "none", fontWeight: 500 }}>
                Read our Cookie Policy →
              </a>
            </div>
          </div>

          {/* Buttons — site style */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
            <button
              onClick={decline}
              style={{
                fontFamily:   "DM Sans, sans-serif",
                fontWeight:   400,
                fontSize:     14,
                color:        T.muted,
                background:   "transparent",
                border:       `1px solid ${T.muted}`,
                borderRadius: 4,
                padding:      "9px 20px",
                cursor:       "pointer",
                transition:   "background 0.15s",
                whiteSpace:   "nowrap",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#E9DDFF")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              Decline
            </button>
            <button
              onClick={accept}
              style={{
                fontFamily:   "DM Sans, sans-serif",
                fontWeight:   500,
                fontSize:     14,
                color:        T.white,
                background:   T.primary,
                border:       "none",
                borderRadius: 4,
                padding:      "9px 24px",
                cursor:       "pointer",
                transition:   "opacity 0.15s",
                whiteSpace:   "nowrap",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              Accept all
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
