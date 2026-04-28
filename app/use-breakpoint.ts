"use client";
import React from "react";

export function useBreakpoint() {
  const [w, setW] = React.useState(1440);
  React.useEffect(() => {
    setW(window.innerWidth);
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h, { passive: true });
    return () => window.removeEventListener("resize", h);
  }, []);
  return {
    isMobile:  w < 768,
    isTablet:  w >= 768 && w < 1200,
    isDesktop: w >= 1200,
    w,
  };
}
