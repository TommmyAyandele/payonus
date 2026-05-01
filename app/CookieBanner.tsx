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
          position:    "fixed",
          bottom:      24,
          left:        "50%",
          transform:   "translateX(-50%)",
          zIndex:      999,
          width:       "calc(100% - 40px)",
          maxWidth:    680,
          background:  T.white,
          border:      "1px solid #E7E0EC",
          borderRadius: 16,
          boxShadow:   "0 8px 40px rgba(28,27,31,0.12), 0 2px 8px rgba(96,9,255,0.06)",
          padding:     "20px 24px",
          display:     "flex",
          alignItems:  "center",
          gap:         20,
          flexWrap:    "wrap",
        }}
      >
        {/* Cookie icon */}
        <div style={{
          width:           40,
          height:          40,
          borderRadius:    10,
          background:      "#F5EEFF",
          border:          "1px solid #DDD0FF",
          display:         "flex",
          alignItems:      "center",
          justifyContent:  "center",
          flexShrink:      0,
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#6009FF" strokeWidth="1.5"/>
            <circle cx="9"  cy="10" r="1.2" fill="#6009FF"/>
            <circle cx="14" cy="8"  r="0.9" fill="#F4B249"/>
            <circle cx="15" cy="13" r="1.2" fill="#6009FF"/>
            <circle cx="10" cy="15" r="0.9" fill="#F4B249"/>
            <circle cx="12" cy="12" r="0.7" fill="#6009FF"/>
          </svg>
        </div>

        {/* Text */}
        <div style={{ flex:1, minWidth:180 }}>
          <div style={{ fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:14, color:T.dark, marginBottom:3 }}>
            We use cookies
          </div>
          <div style={{ fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:13, color:T.muted, lineHeight:1.55 }}>
            We use cookies to improve your experience and analyse site traffic. Read our{" "}
            <a href="#" style={{ color:T.primary, textDecoration:"none", fontWeight:500 }}>Cookie Policy</a>.
          </div>
        </div>

        {/* Actions */}
        <div style={{ display:"flex", gap:10, flexShrink:0 }}>
          <button
            onClick={decline}
            style={{
              fontFamily:   "DM Sans, sans-serif",
              fontWeight:   400,
              fontSize:     13,
              color:        T.muted,
              background:   "transparent",
              border:       `1px solid ${T.borderLight}`,
              borderRadius: 8,
              padding:      "8px 16px",
              cursor:       "pointer",
              transition:   "background 0.15s",
              whiteSpace:   "nowrap",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#F5EFF7")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
          >
            Decline
          </button>
          <button
            onClick={accept}
            style={{
              fontFamily:   "DM Sans, sans-serif",
              fontWeight:   500,
              fontSize:     13,
              color:        T.white,
              background:   T.primary,
              border:       "none",
              borderRadius: 8,
              padding:      "8px 18px",
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
    </>
  );
}
