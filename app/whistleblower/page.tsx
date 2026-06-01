"use client";

import React from "react";
import Navbar, { T } from "../Navbar";
import Footer from "../Footer";
import { useBreakpoint } from "../use-breakpoint";
import HeroBg from "../HeroBg";

type FormState = { name: string; email: string; message: string };
type Errors    = Partial<Record<keyof FormState, string>>;
type Alert     = { type: "success" | "error"; message: string } | null;

const API      = "https://dev-cicd-payonus-notification-service.dev-payonus.com/api/v1/report";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ACCEPT   = ".pdf,.doc,.docx,.jpg,.jpeg,.png";
const MAX_MB   = 10;

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

function fmtSize(bytes: number) {
  return bytes < 1024 * 1024
    ? `${(bytes / 1024).toFixed(0)} KB`
    : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function UploadZone({ files, onAdd, onRemove, error }: {
  files: File[]; onAdd: (f: File[]) => void; onRemove: (i: number) => void; error?: string;
}) {
  const [dragging, setDragging] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault(); setDragging(false); onAdd(Array.from(e.dataTransfer.files));
  };

  return (
    <div>
      <div
        role="button" tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={e => (e.key === "Enter" || e.key === " ") && inputRef.current?.click()}
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        style={{
          border:       `1px ${dragging ? "solid" : "dashed"} ${error ? "#B3261E" : dragging ? T.primary : T.borderLight}`,
          borderRadius: 8,
          padding:      "20px 16px",
          cursor:       "pointer",
          background:   dragging ? "#EDE9FF" : T.white,
          transition:   "all 0.15s",
          textAlign:    "center",
          userSelect:   "none",
          outline:      "none",
        }}
      >
        <input ref={inputRef} type="file" multiple accept={ACCEPT} style={{ display:"none" }}
          onChange={e => { onAdd(Array.from(e.target.files ?? [])); e.target.value = ""; }} />
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ display:"block", margin:"0 auto 6px" }}>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke={dragging ? T.primary : T.muted} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="17 8 12 3 7 8" stroke={dragging ? T.primary : T.muted} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="12" y1="3" x2="12" y2="15" stroke={dragging ? T.primary : T.muted} strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
        <p style={{ margin:0, fontFamily:"DM Sans, sans-serif", fontSize:13, color: dragging ? T.primary : T.muted }}>
          <span style={{ fontWeight:600, color:T.primary }}>Click to upload</span> or drag and drop
        </p>
        <p style={{ margin:"3px 0 0", fontFamily:"DM Sans, sans-serif", fontSize:11, color:T.muted }}>
          PDF, DOC, DOCX, JPG, PNG — max {MAX_MB} MB each
        </p>
      </div>

      {error && (
        <p style={{ margin:"4px 0 0", fontFamily:"DM Sans, sans-serif", fontSize:12, color:"#B3261E" }}>{error}</p>
      )}

      {files.length > 0 && (
        <ul style={{ margin:"10px 0 0", padding:0, listStyle:"none", display:"flex", flexDirection:"column", gap:6 }}>
          {files.map((f, i) => (
            <li key={i} style={{ display:"flex", alignItems:"center", gap:8, background:"#F4F0FF", borderRadius:6, padding:"6px 10px" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink:0 }}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke={T.primary} strokeWidth="1.8" strokeLinejoin="round"/>
                <polyline points="14 2 14 8 20 8" stroke={T.primary} strokeWidth="1.8" strokeLinejoin="round"/>
              </svg>
              <span style={{ flex:1, fontFamily:"DM Sans, sans-serif", fontSize:12, color:T.dark, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{f.name}</span>
              <span style={{ fontFamily:"DM Sans, sans-serif", fontSize:11, color:T.muted, flexShrink:0 }}>{fmtSize(f.size)}</span>
              <button type="button" onClick={() => onRemove(i)} aria-label={`Remove ${f.name}`}
                style={{ border:"none", background:"none", cursor:"pointer", padding:2, display:"flex", color:T.muted, flexShrink:0 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function WhistleblowerPage() {
  const { isMobile, isTablet } = useBreakpoint();

  const [scrolled,  setScrolled]  = React.useState(false);
  const [form,      setForm]      = React.useState<FormState>({ name:"", email:"", message:"" });
  const [errors,    setErrors]    = React.useState<Errors>({});
  const [files,     setFiles]     = React.useState<File[]>([]);
  const [fileError, setFileError] = React.useState<string | undefined>();
  const [loading,   setLoading]   = React.useState(false);
  const [alert,     setAlert]     = React.useState<Alert>(null);

  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name as keyof FormState]) setErrors(p => ({ ...p, [name]: undefined }));
  };

  const handleBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const { name, value } = e.target;
    const partial = validate({ ...form, [name]: value });
    setErrors(p => ({ ...p, [name]: partial[name as keyof FormState] }));
  };

  const handleAddFiles = (incoming: File[]) => {
    const oversize = incoming.filter(f => f.size > MAX_MB * 1024 * 1024);
    if (oversize.length > 0) {
      setFileError(`${oversize.map(f => f.name).join(", ")} exceed${oversize.length === 1 ? "s" : ""} ${MAX_MB} MB.`);
      return;
    }
    setFileError(undefined);
    setFiles(prev => {
      const names = new Set(prev.map(f => f.name));
      return [...prev, ...incoming.filter(f => !names.has(f.name))];
    });
  };

  const handleRemoveFile = (i: number) => { setFiles(p => p.filter((_, idx) => idx !== i)); setFileError(undefined); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    try {
      let body: BodyInit;
      let headers: Record<string, string> = {};
      if (files.length > 0) {
        const fd = new FormData();
        fd.append("name", form.name); fd.append("email", form.email); fd.append("message", form.message);
        files.forEach(f => fd.append("attachments", f));
        body = fd;
      } else {
        headers["Content-Type"] = "application/json";
        body = JSON.stringify(form);
      }
      const res = await fetch(API, { method:"POST", headers, body });
      if (res.ok) {
        setAlert({ type:"success", message:"Your report has been submitted successfully. Thank you." });
        setTimeout(() => { setForm({ name:"", email:"", message:"" }); setFiles([]); }, 2000);
      } else {
        setAlert({ type:"error", message:"Failed to submit. Please try again later." });
      }
    } catch {
      setAlert({ type:"error", message:"Network error. Please check your connection and try again." });
    } finally {
      setLoading(false);
      setTimeout(() => setAlert(null), 5000);
    }
  };

  const hPad = isMobile ? 20 : isTablet ? 48 : 80;

  return (
    <div style={{ display:"flex", flexDirection:"column", minHeight:"100vh", background:T.bg }}>
      <style>{`
        fieldset.wb-field{border:1px solid ${T.borderLight};border-radius:8px;padding:2px 14px 14px;background:${T.white};margin:0;transition:border-color .18s;}
        fieldset.wb-field:focus-within{border-color:${T.primary};}
        fieldset.wb-field.has-error{border-color:#B3261E;}
        fieldset.wb-field.has-error legend{color:#B3261E;}
        fieldset.wb-field legend{font-family:"DM Sans",sans-serif;font-weight:400;font-size:12px;color:${T.muted};padding:0 4px;margin-left:-4px;line-height:1;background:${T.white};}
        fieldset.wb-field input,fieldset.wb-field textarea{width:100%;border:none;outline:none;font-family:"DM Sans",sans-serif;font-size:14px;color:${T.dark};background:transparent;padding:0;resize:none;}
        fieldset.wb-field textarea{min-height:90px;padding-top:4px;}
        .wb-field-error{margin:4px 0 0;font-family:"DM Sans",sans-serif;font-size:12px;color:#B3261E;}
      `}</style>

      <Navbar scrolled={scrolled} />

      {/* Toast */}
      {alert && (
        <div role="alert" aria-live="polite" style={{
          position:"fixed", top:80, left:"50%", transform:"translateX(-50%)", zIndex:200,
          padding:"14px 24px", borderRadius:8,
          background: alert.type === "success" ? "#1A7F5A" : "#B3261E",
          color:"#fff", fontFamily:"DM Sans, sans-serif", fontSize:15,
          boxShadow:"0 4px 20px rgba(0,0,0,0.18)", maxWidth:"90vw", textAlign:"center",
        }}>
          {alert.message}
        </div>
      )}

      {/* Hero */}
      <section style={{ position:"relative", width:"100%", background:T.bg, overflow:"hidden", padding: isMobile ? "64px 0 80px" : "88px 0 120px" }}>
        <HeroBg />
        <div style={{ position:"relative", zIndex:1, maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px`, display:"flex", flexDirection:"column", alignItems:"flex-start" }}>
          <span className="fade-up" style={{ display:"block", marginBottom: isMobile ? 20 : 28, fontFamily:"DM Sans,sans-serif", fontWeight:500, fontSize:14, color:T.orange }}>
            • Legal
          </span>
          <div style={{ width:"fit-content" }}>
            <h1 className="fade-up d1" style={{ margin:`0 0 ${isMobile ? 20 : 28}px`, fontFamily:"Rubik,sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?62:isTablet?64:90, lineHeight:1.04, letterSpacing:"-0.02em", color:T.headingBlack }}>
              Whistleblower Reporting
            </h1>
            <p className="fade-up d2" style={{ margin:0, fontFamily:"Rubik,sans-serif", fontStyle:"italic", fontWeight:400, fontSize:isMobile?15:17, lineHeight:1.7, color:T.muted }}>
              This confidential reporting system allows you to report concerns regarding policy violations,
              unethical behavior, or other issues. Your report will be handled with the utmost
              confidentiality and forwarded to the appropriate authorities.
            </p>
          </div>
        </div>
      </section>

      {/* Form section */}
      <section style={{ flex:1, background:T.bg }}>
        <div style={{
          maxWidth:1440, margin:"0 auto",
          padding:`${isMobile ? 56 : 80}px ${hPad}px ${isMobile ? 64 : 96}px`,
          width:"100%", boxSizing:"border-box",
          display:"flex", justifyContent:"center",
        }}>
          <div style={{ width:"100%", maxWidth:610 }}>

            <h3 style={{ margin:"0 0 8px", fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize: isMobile ? 22 : 26, color:T.dark }}>
              Submit a Report
            </h3>
            <p style={{ margin:`0 0 ${isMobile ? 28 : 32}px`, fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14, lineHeight:1.65, color:T.muted }}>
              Your identity is protected — name and email are optional. All submissions are reviewed only by authorised personnel.
            </p>

            <form onSubmit={handleSubmit} noValidate style={{ display:"flex", flexDirection:"column", gap:16 }}>

              {/* Name + Email row */}
              <div style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap:16 }}>
                <div>
                  <fieldset className={`wb-field${errors.name ? " has-error" : ""}`}>
                    <legend>Name <span style={{ fontWeight:400, color:"#9CA3AF" }}>(optional)</span></legend>
                    <input name="name" value={form.name} onChange={handleChange} onBlur={handleBlur} placeholder="Your name" maxLength={100} />
                  </fieldset>
                  {errors.name && <p className="wb-field-error">{errors.name}</p>}
                </div>
                <div>
                  <fieldset className={`wb-field${errors.email ? " has-error" : ""}`}>
                    <legend>Email address <span style={{ fontWeight:400, color:"#9CA3AF" }}>(optional)</span></legend>
                    <input type="email" name="email" value={form.email} onChange={handleChange} onBlur={handleBlur} placeholder="your@email.com" />
                  </fieldset>
                  {errors.email && <p className="wb-field-error">{errors.email}</p>}
                </div>
              </div>

              {/* Message */}
              <div>
                <fieldset className={`wb-field${errors.message ? " has-error" : ""}`}>
                  <legend>Message <span style={{ color:"#B3261E" }}>*</span></legend>
                  <textarea name="message" value={form.message} onChange={handleChange} onBlur={handleBlur}
                    placeholder="Describe the concern or incident in as much detail as you can" maxLength={2000} />
                </fieldset>
                <div style={{ display:"flex", justifyContent:"space-between", marginTop:4 }}>
                  {errors.message
                    ? <p className="wb-field-error" style={{ margin:0 }}>{errors.message}</p>
                    : <span />}
                  <span style={{ fontFamily:"DM Sans, sans-serif", fontSize:11, color:T.muted }}>{form.message.length} / 2000</span>
                </div>
              </div>

              {/* Attachments */}
              <div>
                <p style={{ margin:"0 0 8px", fontFamily:"DM Sans, sans-serif", fontSize:12, color:T.muted }}>
                  Attachments <span style={{ color:"#9CA3AF" }}>(optional)</span>
                </p>
                <UploadZone files={files} onAdd={handleAddFiles} onRemove={handleRemoveFile} error={fileError} />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  position:"relative", overflow:"hidden",
                  fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:15,
                  color:"#fff", background: loading ? "#C4B5FD" : T.primary,
                  border:"none", borderRadius:8,
                  padding:"17px 0", cursor: loading ? "not-allowed" : "pointer",
                  width:"100%", transition:"opacity .15s", marginTop:4,
                }}
                onMouseEnter={e => { if (!loading) e.currentTarget.style.opacity = "0.88"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
              >
                {loading ? "Submitting…" : "Submit Report"}
              </button>

            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
