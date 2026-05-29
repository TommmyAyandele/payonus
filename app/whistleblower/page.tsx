"use client";

import React from "react";
import Navbar, { T } from "../Navbar";
import Footer from "../Footer";
import { useBreakpoint } from "../use-breakpoint";

type FormState = { name: string; email: string; message: string };
type FieldErrors = Partial<Record<keyof FormState, string>>;
type Alert = { type: "success" | "error"; message: string } | null;

const API = "https://dev-cicd-payonus-notification-service.dev-payonus.com/api/v1/report";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: FormState): FieldErrors {
  const e: FieldErrors = {};
  if (form.name.trim() && form.name.length > 100)
    e.name = "Name must not exceed 100 characters.";
  if (form.email.trim() && !EMAIL_RE.test(form.email))
    e.email = "Please enter a valid email address.";
  if (!form.message.trim())
    e.message = "Message is required.";
  else if (form.message.trim().length < 10)
    e.message = "Message must be at least 10 characters.";
  else if (form.message.length > 2000)
    e.message = "Message must not exceed 2000 characters.";
  return e;
}

/* ── Outlined Material-style text field ── */
function Field({
  id, label, optional, type = "text", multiline,
  value, error, onChange, onBlur, maxLength, placeholder,
}: {
  id: keyof FormState; label: string; optional?: boolean; type?: string;
  multiline?: boolean; value: string; error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur:   (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>)  => void;
  maxLength?: number; placeholder?: string;
}) {
  const [focused, setFocused] = React.useState(false);
  const borderColor = error ? "#B00020" : focused ? T.primary : "#79747E";
  const labelColor  = error ? "#B00020" : focused ? T.primary : "#49454F";
  const labelSize   = (focused || value) ? 12 : 16;
  const labelTop    = (focused || value) ? -10 : multiline ? 16 : "50%";
  const labelTransform = (focused || value) ? "none" : multiline ? "none" : "translateY(-50%)";

  const sharedProps = {
    id,
    name: id,
    value,
    onChange,
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFocused(false);
      onBlur(e);
    },
    onFocus: () => setFocused(true),
    maxLength,
    "aria-required": id === "message" ? ("true" as const) : ("false" as const),
    "aria-invalid": !!error,
    "aria-describedby": error ? `${id}-error` : undefined,
    style: {
      width: "100%",
      padding: multiline ? "20px 16px 12px" : "20px 16px 6px",
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "DM Sans, sans-serif",
      fontSize: 16,
      color: T.dark,
      resize: "none" as const,
      boxSizing: "border-box" as const,
      minHeight: multiline ? 140 : undefined,
    } as React.CSSProperties,
  };

  return (
    <div style={{ marginBottom: 24 }}>
      <div
        style={{
          position: "relative",
          border: `${focused ? 2 : 1}px solid ${borderColor}`,
          borderRadius: 4,
          background: "#FAFAF8",
          transition: "border-color 0.2s",
        }}
      >
        {/* Floating label */}
        <label
          htmlFor={id}
          style={{
            position: "absolute",
            left: 12,
            top: labelTop as string | number,
            transform: labelTransform,
            fontSize: labelSize,
            color: labelColor,
            background: "#FAFAF8",
            padding: "0 4px",
            pointerEvents: "none",
            transition: "all 0.15s cubic-bezier(0.4,0,0.2,1)",
            lineHeight: 1,
            fontFamily: "DM Sans, sans-serif",
            fontWeight: focused || value ? 500 : 400,
          }}
        >
          {label}{" "}
          {optional && (
            <span style={{ color: "#79747E", fontWeight: 400, fontSize: 12 }}>(Optional)</span>
          )}
          {!optional && id === "message" && (
            <span style={{ color: "#B00020" }}> *</span>
          )}
        </label>

        {multiline ? (
          <textarea {...sharedProps} placeholder={focused ? placeholder : ""} />
        ) : (
          <input type={type} {...sharedProps} placeholder={focused ? placeholder : ""} />
        )}
      </div>

      {/* Character counter for message */}
      {multiline && (
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
          <span id={`${id}-error`} style={{ fontFamily: "DM Sans,sans-serif", fontSize: 12, color: "#B00020" }}>
            {error ?? ""}
          </span>
          <span style={{ fontFamily: "DM Sans,sans-serif", fontSize: 12, color: "#79747E" }}>
            {value.length} / 2000
          </span>
        </div>
      )}
      {!multiline && error && (
        <p id={`${id}-error`} style={{ margin: "4px 0 0 16px", fontFamily: "DM Sans,sans-serif", fontSize: 12, color: "#B00020" }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default function WhistleblowerPage() {
  const { isMobile, isTablet } = useBreakpoint();
  const [scrolled, setScrolled] = React.useState(false);
  const [form,     setForm]     = React.useState<FormState>({ name: "", email: "", message: "" });
  const [errors,   setErrors]   = React.useState<FieldErrors>({});
  const [loading,  setLoading]  = React.useState(false);
  const [alert,    setAlert]    = React.useState<Alert>(null);

  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const partial = validate({ ...form, [name]: value });
    setErrors(prev => ({ ...prev, [name]: partial[name as keyof FormState] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setAlert({ type: "success", message: "Your report has been submitted successfully. Thank you for your submission." });
        setTimeout(() => setForm({ name: "", email: "", message: "" }), 2000);
        setTimeout(() => setAlert(null), 5000);
      } else {
        setAlert({ type: "error", message: "Failed to submit your report. Please try again later." });
        setTimeout(() => setAlert(null), 5000);
      }
    } catch {
      setAlert({ type: "error", message: "Network error. Please check your connection and try again." });
      setTimeout(() => setAlert(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  const hPad = isMobile ? 20 : isTablet ? 48 : 80;

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: T.bg }}>
      <Navbar scrolled={scrolled} />

      {/* Alert toast */}
      {alert && (
        <div
          role="alert"
          aria-live="polite"
          style={{
            position: "fixed",
            top: 80,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 200,
            padding: "14px 24px",
            borderRadius: 8,
            background: alert.type === "success" ? "#1A7F5A" : "#B00020",
            color: "#fff",
            fontFamily: "DM Sans, sans-serif",
            fontSize: 15,
            boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
            maxWidth: "90vw",
            textAlign: "center",
          }}
        >
          {alert.message}
        </div>
      )}

      {/* Hero */}
      <section style={{ padding: `${isMobile ? 56 : 72}px 0 ${isMobile ? 32 : 48}px` }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px`, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <span style={{ fontFamily: "DM Sans,sans-serif", fontWeight: 500, fontSize: 13, color: T.accent, display: "block", marginBottom: 14 }}>
            • Legal
          </span>
          <h1 style={{ margin: "0 0 16px", fontFamily: "Rubik,sans-serif", fontStyle: "italic", fontWeight: 500, fontSize: isMobile ? 62 : isTablet ? 64 : 90, lineHeight: 1.05, letterSpacing: "-0.02em", color: T.headingBlack }}>
            Whistleblower Reporting
          </h1>
          <p style={{ margin: 0, fontFamily: "Rubik,sans-serif", fontStyle: "italic", fontWeight: 400, fontSize: isMobile ? 15 : 17, lineHeight: 1.6, color: T.muted, maxWidth: 560 }}>
            This confidential reporting system allows you to report concerns regarding policy violations, unethical behavior, or other issues. Your report will be handled with the utmost confidentiality and forwarded to the appropriate authorities.
          </p>
        </div>
      </section>

      {/* Form area */}
      <div style={{ flex: 1, maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px 96px`, width: "100%", boxSizing: "border-box" }}>
        <div style={{ maxWidth: 600 }}>

          {/* Confidentiality notice */}
          <div style={{
            display: "flex", gap: 14, alignItems: "flex-start",
            background: "#EDE9FF", border: "1px solid #DDD0FF",
            borderRadius: 10, padding: "16px 20px", marginBottom: 36,
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
              <circle cx="12" cy="12" r="10" stroke={T.primary} strokeWidth="1.8"/>
              <path d="M12 8v4M12 16h.01" stroke={T.primary} strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <p style={{ margin: 0, fontFamily: "DM Sans,sans-serif", fontSize: 14, color: T.muted, lineHeight: 1.6 }}>
              <strong style={{ color: T.dark }}>Your identity is protected.</strong> Name and email are optional — you may report anonymously. All submissions are encrypted and reviewed by authorised personnel only.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <Field
              id="name" label="Name" optional
              value={form.name} error={errors.name}
              onChange={handleChange} onBlur={handleBlur}
              maxLength={100} placeholder="Your name"
            />
            <Field
              id="email" label="Email" optional type="email"
              value={form.email} error={errors.email}
              onChange={handleChange} onBlur={handleBlur}
              placeholder="your@email.com"
            />
            <Field
              id="message" label="Message" multiline
              value={form.message} error={errors.message}
              onChange={handleChange} onBlur={handleBlur}
              maxLength={2000}
              placeholder="Describe the concern or incident in detail…"
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "14px 24px",
                background: loading ? "#C4B5FD" : T.primary,
                color: "#fff",
                border: "none",
                borderRadius: 4,
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 600,
                fontSize: 16,
                cursor: loading ? "not-allowed" : "pointer",
                transition: "opacity 0.15s, background 0.2s",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={e => { if (!loading) e.currentTarget.style.opacity = "0.88"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
            >
              {loading ? "Submitting…" : "Submit Report"}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
