"use client";

import React from "react";
import Navbar, { T } from "../Navbar";
import Footer from "../Footer";
import { useBreakpoint } from "../use-breakpoint";

type FormState = { name: string; email: string; message: string };
type Errors    = Partial<Record<keyof FormState, string>>;
type Alert     = { type: "success" | "error"; message: string } | null;

const API      = "https://dev-cicd-payonus-notification-service.dev-payonus.com/api/v1/report";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(f: FormState): Errors {
  const e: Errors = {};
  if (f.name.trim() && f.name.length > 100)
    e.name = "Name must not exceed 100 characters.";
  if (f.email.trim() && !EMAIL_RE.test(f.email))
    e.email = "Please enter a valid email address.";
  if (!f.message.trim())
    e.message = "Message is required.";
  else if (f.message.trim().length < 10)
    e.message = "Message must be at least 10 characters.";
  else if (f.message.length > 2000)
    e.message = "Message must not exceed 2000 characters.";
  return e;
}

/**
 * MD3 outlined text field — matches Figma node 60844-711.
 * Outline: 1px #7A757F → 3px #6009FF focused.
 * Floating label: 14px resting, 12px lifted, background clips the border.
 */
function Field({
  id, label, optional, type = "text", multiline,
  value, error, onChange, onBlur, maxLength,
}: {
  id:         keyof FormState;
  label:      string;
  optional?:  boolean;
  type?:      string;
  multiline?: boolean;
  value:      string;
  error?:     string;
  onChange:   React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur:     React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  maxLength?: number;
}) {
  const [focused, setFocused] = React.useState(false);
  const lifted = focused || !!value;

  const outline   = error ? "#B3261E" : focused ? T.primary : "#7A757F";
  const outlinePx = focused ? 3 : 1;
  const labelClr  = error ? "#B3261E" : focused ? T.primary : "#49454F";

  const sharedInputStyle: React.CSSProperties = {
    width:      "100%",
    border:     "none",
    outline:    "none",
    background: "transparent",
    fontFamily: "DM Sans, sans-serif",
    fontSize:   14,
    lineHeight: "20px",
    color:      T.dark,
    boxSizing:  "border-box",
    resize:     "none",
  };

  const sharedAttrs = {
    id, name: id, value, maxLength,
    onChange,
    onFocus: () => setFocused(true),
    onBlur:  (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFocused(false);
      onBlur(e);
    },
    "aria-required":    (id === "message" ? "true" : "false") as "true" | "false",
    "aria-invalid":     !!error,
    "aria-describedby": error ? `${id}-err` : undefined,
  };

  return (
    <div>
      {/* Field border container */}
      <div style={{
        position:     "relative",
        border:       `${outlinePx}px solid ${outline}`,
        borderRadius: 8,
        background:   T.bg,
        display:      "flex",
        alignItems:   multiline ? "stretch" : "center",
        minHeight:    multiline ? 160 : 56,
        height:       multiline ? "auto" : 56,
        transition:   "border-color 0.15s, border-width 0.1s",
      }}>

        {/* Floating label */}
        <label
          htmlFor={id}
          style={{
            position:      "absolute",
            left:          lifted ? 12 : 16,
            top:           multiline
                             ? (lifted ? -10 : 18)
                             : (lifted ? -10 : "50%"),
            transform:     (!multiline && !lifted) ? "translateY(-50%)" : "none",
            fontSize:      lifted ? 12 : 14,
            fontWeight:    lifted ? 500 : 400,
            color:         labelClr,
            background:    T.bg,
            padding:       "0 4px",
            pointerEvents: "none",
            transition:    "all 0.15s cubic-bezier(0.4,0,0.2,1)",
            lineHeight:    1.2,
            fontFamily:    "DM Sans, sans-serif",
            whiteSpace:    "nowrap",
            zIndex:        1,
          }}
        >
          {label}
          {optional && (
            <span style={{ fontWeight: 400, color: "#79747E" }}> (optional)</span>
          )}
          {!optional && id === "message" && (
            <span style={{ color: "#B3261E" }}> *</span>
          )}
        </label>

        {multiline ? (
          <textarea
            {...sharedAttrs}
            style={{ ...sharedInputStyle, padding: "28px 16px 12px", minHeight: 160 }}
          />
        ) : (
          <input
            type={type}
            {...sharedAttrs}
            style={{
              ...sharedInputStyle,
              height:  "100%",
              padding: lifted ? "20px 16px 8px" : "0 16px",
            }}
          />
        )}
      </div>

      {/* Supporting text row */}
      <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 16px 0", minHeight: 20 }}>
        <span
          id={`${id}-err`}
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize:   11,
            fontWeight: 500,
            lineHeight: "16px",
            color:      error ? "#B3261E" : "transparent",
            letterSpacing: "0.04em",
          }}
        >
          {error ?? " "}
        </span>
        {multiline && (
          <span style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize:   11,
            fontWeight: 500,
            color:      "#7A757F",
            lineHeight: "16px",
            letterSpacing: "0.04em",
          }}>
            {value.length} / 2000
          </span>
        )}
      </div>
    </div>
  );
}

/* ─── Page ─── */
export default function WhistleblowerPage() {
  const { isMobile, isTablet } = useBreakpoint();

  const [scrolled, setScrolled] = React.useState(false);
  const [form,     setForm]     = React.useState<FormState>({ name: "", email: "", message: "" });
  const [errors,   setErrors]   = React.useState<Errors>({});
  const [loading,  setLoading]  = React.useState(false);
  const [alert,    setAlert]    = React.useState<Alert>(null);

  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name as keyof FormState])
      setErrors(p => ({ ...p, [name]: undefined }));
  };

  const handleBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const { name, value } = e.target;
    const partial = validate({ ...form, [name]: value });
    setErrors(p => ({ ...p, [name]: partial[name as keyof FormState] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    try {
      const res = await fetch(API, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(form),
      });
      if (res.ok) {
        setAlert({ type: "success", message: "Your report has been submitted successfully. Thank you for your submission." });
        setTimeout(() => setForm({ name: "", email: "", message: "" }), 2000);
      } else {
        setAlert({ type: "error", message: "Failed to submit your report. Please try again later." });
      }
    } catch {
      setAlert({ type: "error", message: "Network error. Please check your connection and try again." });
    } finally {
      setLoading(false);
      setTimeout(() => setAlert(null), 5000);
    }
  };

  const hPad = isMobile ? 20 : isTablet ? 48 : 80;

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: T.bg }}>
      <Navbar scrolled={scrolled} />

      {/* Toast */}
      {alert && (
        <div
          role="alert"
          aria-live="polite"
          style={{
            position:   "fixed",
            top:        80,
            left:       "50%",
            transform:  "translateX(-50%)",
            zIndex:     200,
            padding:    "14px 24px",
            borderRadius: 8,
            background: alert.type === "success" ? "#1A7F5A" : "#B3261E",
            color:      "#fff",
            fontFamily: "DM Sans, sans-serif",
            fontSize:   15,
            boxShadow:  "0 4px 20px rgba(0,0,0,0.18)",
            maxWidth:   "90vw",
            textAlign:  "center",
          }}
        >
          {alert.message}
        </div>
      )}

      {/* Hero */}
      <section style={{ padding: `${isMobile ? 56 : 72}px 0 ${isMobile ? 32 : 48}px` }}>
        <div style={{
          maxWidth:       1440,
          margin:         "0 auto",
          padding:        `0 ${hPad}px`,
          display:        "flex",
          flexDirection:  "column",
          alignItems:     "flex-start",
        }}>
          <span style={{ fontFamily:"DM Sans,sans-serif", fontWeight:500, fontSize:13, color:T.accent, display:"block", marginBottom:14 }}>
            • Legal
          </span>
          <h1 style={{
            margin:        "0 0 16px",
            fontFamily:    "Rubik,sans-serif",
            fontStyle:     "italic",
            fontWeight:    500,
            fontSize:      isMobile ? 62 : isTablet ? 64 : 90,
            lineHeight:    1.05,
            letterSpacing: "-0.02em",
            color:         T.headingBlack,
          }}>
            Whistleblower Reporting
          </h1>
          <p style={{
            margin:     0,
            fontFamily: "Rubik,sans-serif",
            fontStyle:  "italic",
            fontWeight: 400,
            fontSize:   isMobile ? 15 : 17,
            lineHeight: 1.6,
            color:      T.muted,
            maxWidth:   560,
          }}>
            This confidential reporting system allows you to report concerns regarding policy violations,
            unethical behavior, or other issues. Your report will be handled with the utmost
            confidentiality and forwarded to the appropriate authorities.
          </p>
        </div>
      </section>

      {/* Form area */}
      <div style={{
        flex:      1,
        maxWidth:  1440,
        margin:    "0 auto",
        padding:   `0 ${hPad}px 96px`,
        width:     "100%",
        boxSizing: "border-box",
        display:   "flex",
        justifyContent: "center",
      }}>
        <div style={{ width: "100%", maxWidth: 610 }}>

          {/* Anonymity notice */}
          <div style={{
            display:      "flex",
            gap:          14,
            alignItems:   "flex-start",
            background:   "#EDE9FF",
            border:       "1px solid #DDD0FF",
            borderRadius: 8,
            padding:      "16px 20px",
            marginBottom: 40,
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink:0, marginTop:1 }}>
              <circle cx="12" cy="12" r="10" stroke={T.primary} strokeWidth="1.8"/>
              <path d="M12 8v4M12 16h.01" stroke={T.primary} strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <p style={{ margin:0, fontFamily:"DM Sans,sans-serif", fontSize:14, color:T.muted, lineHeight:1.6 }}>
              <strong style={{ color:T.dark }}>Your identity is protected.</strong>{" "}
              Name and email are optional — you may submit this report completely anonymously.
              All submissions are reviewed only by authorised personnel.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate style={{ display:"flex", flexDirection:"column", gap:32 }}>

            <Field
              id="name" label="Name" optional
              value={form.name} error={errors.name}
              onChange={handleChange} onBlur={handleBlur}
              maxLength={100}
            />

            <Field
              id="email" label="Email Address" optional type="email"
              value={form.email} error={errors.email}
              onChange={handleChange} onBlur={handleBlur}
            />

            <Field
              id="message" label="Message" multiline
              value={form.message} error={errors.message}
              onChange={handleChange} onBlur={handleBlur}
              maxLength={2000}
            />

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width:          "100%",
                padding:        "16px 24px",
                background:     loading ? "#C4B5FD" : T.primary,
                color:          "#fff",
                border:         "none",
                borderRadius:   4,
                fontFamily:     "DM Sans, sans-serif",
                fontWeight:     500,
                fontSize:       16,
                lineHeight:     "24px",
                letterSpacing:  "0.0094em",
                cursor:         loading ? "not-allowed" : "pointer",
                transition:     "opacity 0.15s",
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
