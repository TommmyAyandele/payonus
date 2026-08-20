"use client";

import React from "react";
import { useBreakpoint } from "./use-breakpoint";
import { T } from "./Navbar";
import { useSalesModal } from "./SalesModalContext";

const SESSION_KEY = "payonus_lead_capture_seen";
const SCROLL_THRESHOLD = 500;

export default function LeadCaptureCard() {
  const { isMobile } = useBreakpoint();
  const { isOpen: salesModalOpen } = useSalesModal();
  const [visible, setVisible] = React.useState(false);
  const [dismissed, setDismissed] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ business: "", email: "" });

  React.useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const onScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setVisible(true);
        sessionStorage.setItem(SESSION_KEY, "1");
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible || dismissed || salesModalOpen) return null;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      role="dialog"
      aria-label="Stay in touch"
      style={{
        position: "fixed",
        zIndex: 900,
        left: isMobile ? 12 : "auto",
        right: isMobile ? 12 : 24,
        bottom: isMobile ? 12 : 24,
        width: isMobile ? "auto" : 340,
        background: T.white,
        borderRadius: 16,
        border: `1px solid ${T.borderLight}`,
        boxShadow: "0 20px 48px rgba(15,12,20,0.18)",
        padding: "20px 20px 22px",
        animation: "leadCardRise 0.32s cubic-bezier(.16,1,.3,1)",
      }}
    >
      <style>{`@keyframes leadCardRise{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);}}`}</style>

      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        style={{
          position: "absolute", top: 12, right: 12,
          width: 26, height: 26, borderRadius: "50%", border: "none", background: T.bg,
          display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
        }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6l12 12" stroke={T.dark} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {submitted ? (
        <div style={{ paddingRight: 20 }}>
          <div style={{
            width: 40, height: 40, borderRadius: "50%",
            background: "#EDE9FF", display: "flex", alignItems: "center",
            justifyContent: "center", marginBottom: 14,
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke={T.primary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p style={{ margin: "0 0 4px", fontFamily: "Rubik, sans-serif", fontStyle: "italic", fontWeight: 500, fontSize: 17, color: T.headingBlack }}>
            Thanks — we'll be in touch.
          </p>
          <p style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 13, lineHeight: 1.55, color: T.muted }}>
            We'll reach out with more on how Payonus can support your business.
          </p>
        </div>
      ) : (
        <>
          <p style={{ margin: "0 0 4px", paddingRight: 20, fontFamily: "Rubik, sans-serif", fontStyle: "italic", fontWeight: 500, fontSize: 17, lineHeight: 1.25, color: T.headingBlack }}>
            See what Payonus can do for your business.
          </p>
          <p style={{ margin: "0 0 16px", fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 13, lineHeight: 1.55, color: T.muted }}>
            Leave your details and we'll follow up with the right setup for you.
          </p>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <input
              name="business" value={form.business} onChange={handleChange} placeholder="Business name" required
              style={{ width: "100%", border: `1px solid ${T.borderLight}`, borderRadius: 8, padding: "10px 12px", fontFamily: "DM Sans, sans-serif", fontSize: 13.5, color: T.dark, outline: "none" }}
            />
            <input
              type="email" name="email" value={form.email} onChange={handleChange} placeholder="Work email address" required
              style={{ width: "100%", border: `1px solid ${T.borderLight}`, borderRadius: 8, padding: "10px 12px", fontFamily: "DM Sans, sans-serif", fontSize: 13.5, color: T.dark, outline: "none" }}
            />
            <button
              type="submit"
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 13.5, color: T.white, background: T.primary, border: "none", borderRadius: 8, padding: "11px 0", cursor: "pointer", marginTop: 2, transition: "opacity .15s" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              Notify Me
            </button>
          </form>
        </>
      )}
    </div>
  );
}
