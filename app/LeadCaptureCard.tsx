"use client";

import React from "react";
import { useBreakpoint } from "./use-breakpoint";
import { T } from "./Navbar";
import { useSalesModal } from "./SalesModalContext";

const STORAGE_KEY = "payonus_lead_capture_last_interaction";
const COOLDOWN_MS = 30 * 24 * 60 * 60 * 1000; // 30 days — reappear on a later visit, not the next one
const SCROLL_THRESHOLD = 500;
const AUTO_CLOSE_MS = 2500;
const SCROLL_SETTLE_MS = 600; // wait for scrolling to stop before popping up, so it never appears mid-flick
const ARM_DELAY_MS = 400; // ignore dismiss taps for a beat after showing, so the tap that reveals it can't also swallow-close it

function withinCooldown(): boolean {
  const last = localStorage.getItem(STORAGE_KEY);
  if (!last) return false;
  return Date.now() - Number(last) < COOLDOWN_MS;
}

export default function LeadCaptureCard() {
  const { isMobile } = useBreakpoint();
  const { isOpen: salesModalOpen } = useSalesModal();
  const [visible, setVisible] = React.useState(false);
  const [armed, setArmed] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ business: "", email: "" });

  React.useEffect(() => {
    if (withinCooldown()) return;
    let settleTimer: ReturnType<typeof setTimeout> | null = null;
    const onScroll = () => {
      if (window.scrollY <= SCROLL_THRESHOLD) return;
      if (settleTimer) clearTimeout(settleTimer);
      settleTimer = setTimeout(() => {
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
      }, SCROLL_SETTLE_MS);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (settleTimer) clearTimeout(settleTimer);
    };
  }, []);

  React.useEffect(() => {
    if (!visible) { setArmed(false); return; }
    const id = setTimeout(() => setArmed(true), ARM_DELAY_MS);
    return () => clearTimeout(id);
  }, [visible]);

  const close = React.useCallback(() => {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setVisible(false);
  }, []);

  const requestClose = React.useCallback(() => {
    if (!armed) return;
    close();
  }, [armed, close]);

  React.useEffect(() => {
    if (!visible) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [visible, close]);

  // After a successful submission, auto-close so it never lingers and blocks scrolling.
  React.useEffect(() => {
    if (!submitted) return;
    const id = setTimeout(close, AUTO_CLOSE_MS);
    return () => clearTimeout(id);
  }, [submitted, close]);

  if (!visible || salesModalOpen) return null;

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
      aria-modal="true"
      aria-label="Stay in touch"
      onClick={requestClose}
      style={{
        position: "fixed", inset: 0, zIndex: 900,
        background: "rgba(15,12,20,0.55)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 20,
        animation: "leadCardFade 0.18s ease-out",
      }}
    >
      <style>{`
        @keyframes leadCardFade{from{opacity:0;}to{opacity:1;}}
        @keyframes leadCardRise{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);}}
      `}</style>

      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: "relative",
          width: isMobile ? "100%" : 400,
          maxWidth: "100%",
          background: T.white,
          borderRadius: 20,
          padding: isMobile ? "26px 22px" : "32px 32px 28px",
          animation: "leadCardRise 0.22s cubic-bezier(.16,1,.3,1)",
          boxShadow: "0 24px 64px rgba(15,12,20,0.28)",
        }}
      >
        <button
          onClick={close}
          aria-label="Close"
          style={{
            position: "absolute", top: 16, right: 16,
            width: 30, height: 30, borderRadius: "50%", border: "none", background: T.bg,
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke={T.dark} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "8px 12px 4px" }}>
            <div style={{
              width: 48, height: 48, borderRadius: "50%",
              background: "#EDE9FF", display: "flex", alignItems: "center",
              justifyContent: "center", margin: "0 auto 18px",
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke={T.primary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p style={{ margin: "0 0 6px", fontFamily: "Rubik, sans-serif", fontStyle: "italic", fontWeight: 500, fontSize: 19, color: T.headingBlack }}>
              Thanks — we'll be in touch.
            </p>
            <p style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 13.5, lineHeight: 1.6, color: T.muted }}>
              We'll reach out with more on how Payonus can support your business.
            </p>
          </div>
        ) : (
          <>
            <p style={{ margin: "0 0 6px", paddingRight: 20, fontFamily: "Rubik, sans-serif", fontStyle: "italic", fontWeight: 500, fontSize: isMobile ? 19 : 21, lineHeight: 1.25, color: T.headingBlack }}>
              See what Payonus can do for your business.
            </p>
            <p style={{ margin: "0 0 20px", fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 13.5, lineHeight: 1.6, color: T.muted }}>
              Leave your details and we'll follow up with the right setup for you.
            </p>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <input
                name="business" value={form.business} onChange={handleChange} placeholder="Business name" required
                style={{ width: "100%", border: `1px solid ${T.borderLight}`, borderRadius: 8, padding: "12px 14px", fontFamily: "DM Sans, sans-serif", fontSize: 14, color: T.dark, outline: "none" }}
              />
              <input
                type="email" name="email" value={form.email} onChange={handleChange} placeholder="Work email address" required
                style={{ width: "100%", border: `1px solid ${T.borderLight}`, borderRadius: 8, padding: "12px 14px", fontFamily: "DM Sans, sans-serif", fontSize: 14, color: T.dark, outline: "none" }}
              />
              <button
                type="submit"
                style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 14.5, color: T.white, background: T.primary, border: "none", borderRadius: 8, padding: "13px 0", cursor: "pointer", marginTop: 2, transition: "opacity .15s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                Notify Me
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
