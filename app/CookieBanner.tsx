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
        @keyframes cookieSlideUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .cookie-banner { animation: cookieSlideUp 0.38s cubic-bezier(0.16,1,0.3,1) forwards; }
      `}</style>

      <div
        className="cookie-banner"
        style={{
          position:     "fixed",
          bottom:       16,
          left:         "50%",
          transform:    "translateX(-50%)",
          zIndex:       999,
          width:        "calc(100% - 32px)",
          maxWidth:     680,
          background:   T.white,
          border:       "1px solid #E7E0EC",
          borderRadius: 16,
          boxShadow:    "0 8px 40px rgba(28,27,31,0.12), 0 2px 8px rgba(96,9,255,0.06)",
          padding:      "16px 18px",
          display:      "flex",
          flexDirection: "column",
          gap:          12,
        }}
      >
        {/* Top row: icon + text */}
        <div style={{ display:"flex", alignItems:"flex-start", gap:14 }}>
          <div style={{ flexShrink: 0, marginTop:2 }}>
            <svg width="36" height="36" viewBox="0 0 52 52" fill="none">
              <circle cx="26" cy="26" r="22" fill="#FEF3C7"/>
              <circle cx="26" cy="26" r="22" stroke="#F4B249" strokeWidth="2"/>
              <circle cx="26" cy="26" r="18" fill="#FDEABD"/>
              <path d="M38 14 Q44 20 40 28 Q36 18 30 16 Z" fill={T.white}/>
              <ellipse cx="20" cy="22" rx="2.5" ry="2"   fill="#7C4B1A"/>
              <ellipse cx="30" cy="20" rx="2"   ry="1.6" fill="#7C4B1A"/>
              <ellipse cx="22" cy="31" rx="2.5" ry="2"   fill="#7C4B1A"/>
              <ellipse cx="32" cy="30" rx="2"   ry="1.6" fill="#7C4B1A"/>
              <ellipse cx="26" cy="25" rx="1.8" ry="1.4" fill="#7C4B1A"/>
              <ellipse cx="17" cy="29" rx="1.6" ry="1.3" fill="#7C4B1A"/>
            </svg>
          </div>
          <div>
            <div style={{ fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:14, color:T.dark, marginBottom:3 }}>
              We use cookies
            </div>
            <div style={{ fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:13, color:T.muted, lineHeight:1.55 }}>
              We use cookies to improve your experience and analyse site traffic. Read our{" "}
              <a href="/cookies" style={{ color:T.primary, textDecoration:"none", fontWeight:500 }}>Cookie Policy</a>.
            </div>
          </div>
        </div>

        {/* Bottom row: buttons full width */}
        <div style={{ display:"flex", gap:10 }}>
          <button
            onClick={decline}
            style={{
              flex:         1,
              fontFamily:   "DM Sans, sans-serif",
              fontWeight:   400,
              fontSize:     14,
              color:        T.muted,
              background:   "transparent",
              border:       `1px solid ${T.muted}`,
              borderRadius: 4,
              padding:      "10px 0",
              cursor:       "pointer",
              transition:   "background 0.15s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#E9DDFF")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
          >
            Decline
          </button>
          <button
            onClick={accept}
            style={{
              flex:         2,
              fontFamily:   "DM Sans, sans-serif",
              fontWeight:   500,
              fontSize:     14,
              color:        T.white,
              background:   T.primary,
              border:       "none",
              borderRadius: 4,
              padding:      "10px 0",
              cursor:       "pointer",
              transition:   "opacity 0.15s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Accept all
          </button>
        </div>
      </div>
    </>
  );
}
