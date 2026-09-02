"use client";

import React from "react";
import { useBreakpoint } from "./use-breakpoint";

const TESTIMONIALS_EN = [
  {
    quote: `"My experience with Payonus has been very positive. I really appreciate how responsive the team is whenever I need assistance, and I can always reach my account officer whenever necessary. PayOnus is the lifeline of KwikX, and we truly value this partnership. Thank you for your continued commitment and excellent service."`,
    name: "James Idowu,",
    role: "Bureau De Change Merchant, Crownphix Technologies Limited",
  },
  {
    quote: `"At checkout the process is seamless and straightforward, and even for us collecting as well, it is very simple. So I'll recommend Payonus to any growing brand out there — try PAYONUS and you'll be happy that you did."`,
    name: "Mofoluwaso Nwamara,",
    role: "CEO, Boss-Blossoms",
  },
];

const TESTIMONIALS_FR = [
  {
    quote: `"Mon expérience avec Payonus a été très positive. J'apprécie vraiment la réactivité de l'équipe chaque fois que j'ai besoin d'assistance, et je peux toujours joindre mon chargé de compte en cas de besoin. PayOnus est la bouée de sauvetage de KwikX, et nous tenons vraiment à ce partenariat. Merci pour votre engagement continu et votre excellent service."`,
    name: "James Idowu,",
    role: "Marchand Bureau de Change, Crownphix Technologies Limited",
  },
  {
    quote: `"Avant Payonus, les paiements transfrontaliers étaient un exercice d'urgence hebdomadaire. Maintenant, ça fonctionne, tout simplement. Notre équipe a vraiment cessé de s'en inquiéter."`,
    name: "John Kent,",
    role: "Directeur financier, Bet9ja",
  },
];

const SLIDE_GAP = 48;

export default function TestimonialsSection({ locale = "en" }: { locale?: "en" | "fr" }) {
  const { isMobile, isTablet } = useBreakpoint();
  const TESTIMONIALS = locale === "fr" ? TESTIMONIALS_FR : TESTIMONIALS_EN;
  const N = TESTIMONIALS.length;
  const TRACK = [TESTIMONIALS[N - 1], ...TESTIMONIALS, TESTIMONIALS[0]];
  const SLIDE_FRAC = isMobile ? 1 : isTablet ? 0.88 : 0.78;
  const hPad       = isMobile ? 20 : isTablet ? 48 : 80;
  const quoteSz    = isMobile ? 22 : isTablet ? 30 : 40;

  const viewportRef  = React.useRef<HTMLDivElement>(null);
  const timerRef     = React.useRef<ReturnType<typeof setInterval> | null>(null);
  const idxRef       = React.useRef(1);
  const animatingRef = React.useRef(false);
  const dragRef      = React.useRef<{ x: number; active: boolean }>({ x: 0, active: false });

  const [slideWidth, setSlideWidth] = React.useState(0);
  const [idx, setIdx]               = React.useState(1);
  const [animated, setAnimated]     = React.useState(true);

  React.useEffect(() => {
    const measure = () => {
      if (viewportRef.current)
        setSlideWidth(viewportRef.current.offsetWidth * SLIDE_FRAC);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [SLIDE_FRAC]);

  React.useEffect(() => { idxRef.current = idx; }, [idx]);

  React.useEffect(() => {
    if (!animated) {
      const id = setTimeout(() => setAnimated(true), 20);
      return () => clearTimeout(id);
    }
  }, [animated]);

  const step = React.useCallback((dir: 1 | -1) => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    setAnimated(true);
    setIdx(i => i + dir);
  }, []);

  const resetTimer = React.useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => step(1), 5000);
  }, [step]);

  React.useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const onTransitionEnd = () => {
    animatingRef.current = false;
    const i = idxRef.current;
    if (i >= TRACK.length - 1) { setAnimated(false); setIdx(1); }
    else if (i <= 0)            { setAnimated(false); setIdx(TRACK.length - 2); }
  };

  const offset = -(idx * (slideWidth + SLIDE_GAP));

  const arrowBtn: React.CSSProperties = {
    width: 52, height: 52,
    display: "flex", alignItems: "center", justifyContent: "center",
    background: "#EDE9FF", border: "none", borderRadius: 8,
    cursor: "pointer", flexShrink: 0, transition: "background 0.15s",
  };

  return (
    <section
      id="testimonials"
      style={{
        width:           "100%",
        background:      "#FAFAF8",
        paddingTop:      94,
        boxSizing:       "border-box",
        overflow:        "hidden",
        scrollSnapAlign: "start",
        scrollSnapStop:  "always",
      }}
    >
      <div style={{
        maxWidth:  1440,
        margin:    "0 auto",
        padding:   `${isMobile ? 14 : 28}px ${hPad}px ${isMobile ? 24 : 40}px`,
        boxSizing: "border-box",
      }}>

        {/* Label */}
        <span style={{
          fontFamily:    "DM Sans, sans-serif",
          fontWeight:    500,
          fontSize:      16,
          letterSpacing: "0.0094em",
          color:         "#F4B249",
          display:       "block",
          marginBottom:  isMobile ? 28 : 48,
        }}>
          {locale === "fr" ? "— Témoignages" : "— Testimonials"}
        </span>

        {/* Carousel viewport */}
        <div
          ref={viewportRef}
          style={{ overflow: "hidden", userSelect: "none" }}
          onMouseDown={e  => { dragRef.current = { x: e.clientX, active: true }; }}
          onMouseMove={e  => {
            if (!dragRef.current.active) return;
            const delta = e.clientX - dragRef.current.x;
            if (Math.abs(delta) > 44) {
              dragRef.current.active = false;
              step(delta < 0 ? 1 : -1);
              resetTimer();
            }
          }}
          onMouseUp={()   => { dragRef.current.active = false; }}
          onMouseLeave={() => { dragRef.current.active = false; }}
        >
          {slideWidth > 0 && (
            <div
              onTransitionEnd={onTransitionEnd}
              style={{
                display:    "flex",
                gap:        SLIDE_GAP,
                transform:  `translateX(${offset}px)`,
                transition: animated ? "transform 0.65s cubic-bezier(0.16,1,0.3,1)" : "none",
                willChange: "transform",
              }}
            >
              {TRACK.map((t, i) => {
                const active = i === idx;
                return (
                  <div
                    key={i}
                    style={{
                      minWidth:      slideWidth,
                      width:         slideWidth,
                      flexShrink:    0,
                      opacity:       active ? 1 : 0.5,
                      transition:    "opacity 0.5s",
                    }}
                  >
                    <p style={{
                      margin:     `0 0 ${isMobile ? 24 : 36}px`,
                      fontFamily: "Rubik, sans-serif",
                      fontStyle:  "italic",
                      fontWeight: 500,
                      fontSize:   quoteSz,
                      lineHeight: 1.35,
                      color:      "#0F0C36",
                    }}>
                      {t.quote}
                    </p>

                    <p style={{
                      margin:     "0 0 6px",
                      fontFamily: "DM Sans, sans-serif",
                      fontWeight: 700,
                      fontSize:   isMobile ? 16 : 20,
                      lineHeight: 1.3,
                      color:      "#0F0C36",
                    }}>
                      {t.name}
                    </p>
                    <p style={{
                      margin:     0,
                      fontFamily: "DM Sans, sans-serif",
                      fontWeight: 400,
                      fontSize:   isMobile ? 14 : 16,
                      lineHeight: 1.5,
                      color:      "#49454F",
                    }}>
                      {t.role}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Navigation arrows */}
        <div style={{ display: "flex", gap: 12, marginTop: isMobile ? 28 : 40 }}>
          <button
            aria-label={locale === "fr" ? "Témoignage précédent" : "Previous testimonial"}
            onClick={() => { step(-1); resetTimer(); }}
            style={arrowBtn}
            onMouseEnter={e => (e.currentTarget.style.background = "#DDD6FE")}
            onMouseLeave={e => (e.currentTarget.style.background = "#EDE9FF")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="#4B2FA0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            aria-label={locale === "fr" ? "Témoignage suivant" : "Next testimonial"}
            onClick={() => { step(1); resetTimer(); }}
            style={arrowBtn}
            onMouseEnter={e => (e.currentTarget.style.background = "#DDD6FE")}
            onMouseLeave={e => (e.currentTarget.style.background = "#EDE9FF")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="#4B2FA0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
