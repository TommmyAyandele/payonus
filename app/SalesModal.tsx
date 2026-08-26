"use client";

import React from "react";
import { useBreakpoint } from "./use-breakpoint";
import { T } from "./Navbar";
import { trackEvent } from "./analytics";

interface SalesModalProps {
  isOpen: boolean;
  onClose: () => void;
  pageIndustry?: string;
  formName?: string;
}

const initialForm = {
  firstName: "", lastName: "", email: "", company: "",
  role: "", volume: "", message: "",
};

export default function SalesModal({ isOpen, onClose, pageIndustry, formName }: SalesModalProps) {
  const { isMobile } = useBreakpoint();
  const [form, setForm] = React.useState(initialForm);
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(false);
  const hasStartedRef = React.useRef(false);
  const resolvedFormName = formName ?? "Sales Enquiry";

  React.useEffect(() => {
    if (!isOpen) return;
    hasStartedRef.current = false;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  // Reset to a fresh form a moment after the close animation finishes.
  React.useEffect(() => {
    if (isOpen) return;
    const id = setTimeout(() => { setForm(initialForm); setSubmitted(false); setSubmitError(false); }, 300);
    return () => clearTimeout(id);
  }, [isOpen]);

  if (!isOpen) return null;

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      trackEvent("custom_form_start", { page_industry: pageIndustry, form_name: resolvedFormName });
    }
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch("/api/sales-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, pageIndustry, formName: resolvedFormName }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      trackEvent("form_submit", { page_industry: pageIndustry, form_name: resolvedFormName });
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Talk to sales"
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(15,12,20,0.55)",
        display: "flex", alignItems: isMobile ? "flex-end" : "center", justifyContent: "center",
        padding: isMobile ? 0 : 20,
        animation: "salesModalFade 0.18s ease-out",
      }}
    >
      <style>{`
        @keyframes salesModalFade{from{opacity:0;}to{opacity:1;}}
        @keyframes salesModalRise{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);}}
        .sales-modal-field{border:1px solid ${T.borderLight};border-radius:8px;padding:2px 14px 14px;background:#FFFFFF;margin:0;transition:border-color .18s;}
        .sales-modal-field:focus-within{border-color:${T.primary};}
        .sales-modal-field legend{font-family:"DM Sans",sans-serif;font-weight:400;font-size:12px;color:${T.muted};padding:0 4px;margin-left:-4px;line-height:1;background:#FFFFFF;}
        .sales-modal-field input,.sales-modal-field textarea,.sales-modal-field select{width:100%;border:none;outline:none;font-family:"DM Sans",sans-serif;font-size:14px;color:${T.dark};background:transparent;padding:0;resize:none;}
        .sales-modal-field select{cursor:pointer;}
      `}</style>

      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: "relative",
          width: isMobile ? "100%" : 520,
          maxWidth: "100%",
          maxHeight: isMobile ? "92vh" : "88vh",
          overflowY: "auto",
          background: T.white,
          borderRadius: isMobile ? "20px 20px 0 0" : 20,
          padding: isMobile ? "28px 20px 24px" : "40px 40px 32px",
          animation: "salesModalRise 0.22s cubic-bezier(.16,1,.3,1)",
          boxShadow: "0 24px 64px rgba(15,12,20,0.28)",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute", top: isMobile ? 16 : 20, right: isMobile ? 16 : 20,
            width: 32, height: 32, borderRadius: "50%", border: "none", background: T.bg,
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke={T.dark} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {submitted ? (
          <div style={{ padding: isMobile ? "24px 4px 8px" : "32px 8px 12px", textAlign: "center" }}>
            <div style={{
              width: 56, height: 56, borderRadius: "50%",
              background: "#EDE9FF", display: "flex", alignItems: "center",
              justifyContent: "center", margin: "0 auto 24px",
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke={T.primary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p style={{ margin: "0 0 10px", fontFamily: "Rubik, sans-serif", fontStyle: "italic", fontWeight: 500, fontSize: 24, color: T.headingBlack }}>
              We'll be in touch soon.
            </p>
            <p style={{ margin: "0 0 28px", fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 15, lineHeight: 1.65, color: T.muted }}>
              Thanks for reaching out. Someone from our sales team will contact you within one business day.
            </p>
            <button
              onClick={onClose}
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 14, color: T.white, background: T.primary, border: "none", borderRadius: 4, padding: "12px 28px", cursor: "pointer" }}
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <p style={{ margin: "0 0 6px", fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 13, color: T.orange, letterSpacing: "0.04em", textTransform: "uppercase" }}>
              Talk to Sales
            </p>
            <p style={{ margin: "0 0 8px", fontFamily: "Rubik, sans-serif", fontStyle: "italic", fontWeight: 500, fontSize: isMobile ? 24 : 28, lineHeight: 1.15, color: T.headingBlack }}>
              Let's talk about what Payonus can do for your business.
            </p>
            <p style={{ margin: "0 0 24px", fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 14, lineHeight: 1.6, color: T.muted }}>
              Tell us about your payment needs and a member of our sales team will be in touch within one business day.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <fieldset className="sales-modal-field">
                  <legend>First name</legend>
                  <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="enter first name" required />
                </fieldset>
                <fieldset className="sales-modal-field">
                  <legend>Last name</legend>
                  <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="enter last name" required />
                </fieldset>
              </div>

              <fieldset className="sales-modal-field">
                <legend>Work email</legend>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="enter work email" required />
              </fieldset>

              <fieldset className="sales-modal-field">
                <legend>Company</legend>
                <input name="company" value={form.company} onChange={handleChange} placeholder="enter company name" required />
              </fieldset>

              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14 }}>
                <fieldset className="sales-modal-field">
                  <legend>Your role</legend>
                  <input name="role" value={form.role} onChange={handleChange} placeholder="e.g. CTO, Head of Finance" />
                </fieldset>
                <fieldset className="sales-modal-field">
                  <legend>Monthly transaction volume</legend>
                  <select name="volume" value={form.volume} onChange={handleChange} required>
                    <option value="" disabled>select a range</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-100k">$10,000 – $100,000</option>
                    <option value="100k-1m">$100,000 – $1,000,000</option>
                    <option value="over-1m">Over $1,000,000</option>
                  </select>
                </fieldset>
              </div>

              <fieldset className="sales-modal-field">
                <legend>How can we help?</legend>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="describe your use case, challenges, or questions" rows={3} />
              </fieldset>

              {submitError && (
                <p style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 13, color: "#C0392B" }}>
                  Something went wrong sending your message. Please try again, or email us directly below.
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                style={{
                  fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 15,
                  color: T.white, background: T.primary, border: "none", borderRadius: 8,
                  padding: "15px 0", cursor: submitting ? "default" : "pointer", width: "100%", transition: "opacity .15s", marginTop: 2,
                  opacity: submitting ? 0.7 : 1,
                }}
                onMouseEnter={e => { if (!submitting) e.currentTarget.style.opacity = "0.88"; }}
                onMouseLeave={e => { if (!submitting) e.currentTarget.style.opacity = "1"; }}
              >
                {submitting ? "Sending…" : "Send Message"}
              </button>
            </form>

            <p style={{ margin: "18px 0 0", fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 12.5, lineHeight: 1.6, color: T.muted, textAlign: "center" }}>
              Prefer email? Reach us at{" "}
              <a href="mailto:sales@payonus.com" style={{ color: T.primary, textDecoration: "none", fontWeight: 500 }}>sales@payonus.com</a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
