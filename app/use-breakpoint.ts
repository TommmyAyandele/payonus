"use client";
import React from "react";

// useLayoutEffect on client (fires before paint), useEffect on server (avoids SSR warning)
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export function useBreakpoint() {
  const [w, setW] = React.useState(390); // mobile-first default
  useIsomorphicLayoutEffect(() => {
    const update = () => setW(window.innerWidth);
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);
  return {
    isMobile:  w < 768,
    isTablet:  w >= 768 && w < 1200,
    isDesktop: w >= 1200,
    w,
  };
}
