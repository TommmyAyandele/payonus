"use client";
import React from "react";

export type Industry = "gaming" | "forex" | "banking" | "ecommerce" | "aviation" | "manufacturing";

export function IndustryHeroBg({ industry: _ }: { industry: Industry }) {
  return (
    <>
      <style>{`
        @keyframes orbA { 0%,100% { transform:translate(0,0) } 50% { transform:translate(55px,-45px) } }
        @keyframes orbB { 0%,100% { transform:translate(0,0) } 50% { transform:translate(-45px,55px) } }
      `}</style>
      <div style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none", zIndex:0 }} aria-hidden>
        <div style={{
          position:"absolute", right:-120, top:-120,
          width:600, height:600, borderRadius:"50%",
          background:"#6009FF", filter:"blur(140px)",
          opacity:0.28, animation:"orbA 20s ease-in-out infinite alternate",
        }} />
        <div style={{
          position:"absolute", left:-100, bottom:-100,
          width:440, height:440, borderRadius:"50%",
          background:"#F4B249", filter:"blur(115px)",
          opacity:0.20, animation:"orbB 15s ease-in-out infinite alternate",
          animationDelay:"3s",
        }} />
      </div>
    </>
  );
}
