"use client";
import React from "react";

export type Industry = "gaming" | "forex" | "banking" | "ecommerce" | "aviation" | "manufacturing";

const wrap: React.CSSProperties = {
  position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none", zIndex:0,
};

interface L { d:string; c:string; w:number; k:"driftSm"|"driftMd"|"driftLg"; t:number; dl:number; }

function Bg({ lines, op = 0.10 }: { lines: L[]; op?: number }) {
  return (
    <div style={wrap} aria-hidden>
      <svg width="100%" height="100%" style={{ opacity: op }}>
        {lines.map((l, i) => (
          <path key={i} d={l.d} fill="none" stroke={l.c} strokeWidth={l.w}
            style={{ animation:`${l.k} ${l.t}s ease-in-out infinite alternate`, animationDelay:`${l.dl}s` }}
          />
        ))}
      </svg>
    </div>
  );
}

const P = "#6009FF", A = "#F4B249";

/*
  Gaming — medium-high frequency, energetic, irregular amplitudes.
  Feels alive and fast.
*/
const gaming: L[] = [
  { d:"M -600 90  C -300 40,  0 140, 300 80  C 600 20,  900 130,1200 75  C 1500 20, 1800 130,2100 80  C 2400 30, 2700 120,3000 70",  c:P, w:1.5, k:"driftMd", t:14, dl:0   },
  { d:"M -600 215 C -200 185, 200 245, 600 210 C1000 175,1400 240,1800 210 C2200 180,2600 240,3000 210",                              c:A, w:1.0, k:"driftSm", t:20, dl:1.8 },
  { d:"M -600 345 C -100 295, 400 395, 900 335 C1400 275,1900 385,2400 320 C2900 255,3400 365,3900 305",                             c:P, w:1.6, k:"driftLg", t:16, dl:0.5 },
  { d:"M -600 470 C    0 440, 500 510,1000 468 C1500 426,2000 494,2500 458 C3000 422,3500 494,4000 458",                             c:P, w:0.9, k:"driftMd", t:22, dl:3   },
  { d:"M -600 590 C -100 550, 400 640, 900 582 C1400 524,1900 612,2400 558 C2900 504,3400 592,3900 538",                             c:A, w:1.2, k:"driftSm", t:18, dl:2   },
  { d:"M -600 705 C  100 672, 600 742,1100 702 C1600 662,2100 732,2600 698 C3100 664,3600 732,4100 698",                             c:P, w:0.8, k:"driftLg", t:13, dl:4   },
];

/*
  Forex — long wavelength, smooth. Like abstracted price-chart sine waves.
  Slow, rhythmic, confident.
*/
const forex: L[] = [
  { d:"M -600 105 C  100  55, 800 155,1500 105 C2200  55,2900 155,3600 105",                              c:P, w:1.5, k:"driftLg", t:18, dl:0   },
  { d:"M -600 235 C    0 198, 700 272,1400 235 C2100 198,2800 272,3500 235",                              c:P, w:1.0, k:"driftMd", t:24, dl:2   },
  { d:"M -600 365 C  200 325, 900 405,1600 365 C2300 325,3000 405,3700 365",                              c:A, w:1.3, k:"driftSm", t:20, dl:4   },
  { d:"M -600 495 C  100 458, 800 532,1500 495 C2200 458,2900 532,3600 495",                              c:P, w:0.9, k:"driftLg", t:16, dl:1   },
  { d:"M -600 615 C  200 578, 900 652,1600 615 C2300 578,3000 652,3700 615",                              c:P, w:1.2, k:"driftMd", t:22, dl:3.5 },
  { d:"M -600 160 C  300 122,1000 198,1700 160 C2400 122,3100 198,3800 160",                              c:A, w:0.7, k:"driftSm", t:28, dl:5   },
];

/*
  Banking — nearly flat, tiny amplitude, evenly spaced, very slow drift.
  Stable. Trustworthy. Methodical.
*/
const banking: L[] = [
  { d:"M -600 120 C  200 111,1000 129,1800 120 C2600 111,3400 129,4200 120",   c:P, w:1.5, k:"driftSm", t:30, dl:0   },
  { d:"M -600 255 C  100 246, 900 264,1700 255 C2500 246,3300 264,4100 255",   c:P, w:1.1, k:"driftSm", t:36, dl:2   },
  { d:"M -600 395 C  200 386,1000 404,1800 395 C2600 386,3400 404,4200 395",   c:P, w:1.4, k:"driftSm", t:28, dl:1   },
  { d:"M -600 525 C  100 516, 900 534,1700 525 C2500 516,3300 534,4100 525",   c:A, w:0.8, k:"driftSm", t:34, dl:3.5 },
  { d:"M -600 648 C  200 640,1000 656,1800 648 C2600 640,3400 656,4200 648",   c:P, w:0.9, k:"driftSm", t:26, dl:5   },
];

/*
  E-commerce — organic, varied — some lines broader, some tighter.
  Lively but not chaotic.
*/
const ecom: L[] = [
  { d:"M -600  72 C  -50  35, 450 109, 950  62 C1450  15,1950  85,2450  52 C2950  19,3450  89,3950  52",  c:P, w:1.4, k:"driftMd", t:15, dl:0   },
  { d:"M -600 188 C  100 152, 600 224,1100 182 C1600 140,2100 212,2600 178 C3100 144,3600 210,4100 175",  c:A, w:1.1, k:"driftLg", t:21, dl:1.5 },
  { d:"M -600 308 C    0 262, 500 354,1000 302 C1500 250,2000 334,2500 292 C3000 250,3500 328,4000 288",  c:P, w:1.5, k:"driftSm", t:18, dl:3   },
  { d:"M -600 428 C  150 402, 650 454,1150 422 C1650 390,2150 444,2650 418 C3150 392,3650 446,4150 418",  c:P, w:0.9, k:"driftMd", t:25, dl:0.5 },
  { d:"M -600 545 C -100 510, 400 582, 900 542 C1400 502,1900 568,2400 532 C2900 496,3400 562,3900 528",  c:A, w:1.2, k:"driftLg", t:19, dl:2.5 },
  { d:"M -600 648 C  100 626, 600 668,1100 642 C1600 616,2100 658,2600 632 C3100 606,3600 648,4100 622",  c:P, w:0.8, k:"driftSm", t:22, dl:4   },
  { d:"M -600 138 C  200 116, 700 158,1200 132 C1700 106,2200 148,2700 122 C3200  96,3700 138,4200 112",  c:P, w:1.0, k:"driftMd", t:16, dl:6   },
];

/*
  Aviation — very high amplitude, grand sweeping arcs. Expansive, aspirational.
*/
const aviation: L[] = [
  { d:"M -600 700 C    0 200, 700 800,1400 300 C2100 -100,2800 600,3500 200",  c:P, w:1.5, k:"driftLg", t:24, dl:0   },
  { d:"M -600 300 C  200 700, 900  -100,1600 500 C2300 900,3000 100,3700 600", c:P, w:1.0, k:"driftMd", t:30, dl:2   },
  { d:"M -600 600 C  100 100, 800 900,1500 350 C2200 -100,2900 750,3600 250",  c:A, w:1.3, k:"driftLg", t:28, dl:1.5 },
  { d:"M -600 100 C  200 600, 900 -200,1600 450 C2300 950,3000   0,3700 500",  c:P, w:0.9, k:"driftSm", t:20, dl:3   },
  { d:"M -600 500 C  150 100, 850 800,1550 300 C2250 -100,2950 700,3650 200",  c:P, w:1.1, k:"driftMd", t:26, dl:4   },
];

/*
  Manufacturing — repeating short period, mechanical regularity. Precise, even.
*/
const mfg: L[] = [
  { d:"M -600 105 C    0  93, 600 117,1200 105 C1800  93,2400 117,3000 105 C3600  93,4200 117,4800 105", c:P, w:1.5, k:"driftMd", t:22, dl:0   },
  { d:"M -600 232 C  100 220, 700 244,1300 232 C1900 220,2500 244,3100 232 C3700 220,4300 244,4900 232", c:P, w:1.1, k:"driftSm", t:28, dl:1.5 },
  { d:"M -600 372 C -100 358, 500 386,1100 372 C1700 358,2300 386,2900 372 C3500 358,4100 386,4700 372", c:A, w:1.3, k:"driftMd", t:24, dl:3   },
  { d:"M -600 492 C   50 480, 650 504,1250 492 C1850 480,2450 504,3050 492 C3650 480,4250 504,4850 492", c:P, w:0.9, k:"driftSm", t:30, dl:0.8 },
  { d:"M -600 612 C    0 600, 600 624,1200 612 C1800 600,2400 624,3000 612 C3600 600,4200 624,4800 612", c:P, w:1.2, k:"driftLg", t:20, dl:4.5 },
  { d:"M -600 168 C  150 156, 750 180,1350 168 C1950 156,2550 180,3150 168 C3750 156,4350 180,4950 168", c:P, w:0.7, k:"driftMd", t:26, dl:2.2 },
];

export function IndustryHeroBg({ industry }: { industry: Industry }) {
  const map: Record<Industry, { lines: L[]; op: number }> = {
    gaming:        { lines: gaming,   op: 0.11 },
    forex:         { lines: forex,    op: 0.10 },
    banking:       { lines: banking,  op: 0.09 },
    ecommerce:     { lines: ecom,     op: 0.10 },
    aviation:      { lines: aviation, op: 0.10 },
    manufacturing: { lines: mfg,      op: 0.09 },
  };
  const { lines, op } = map[industry];
  return (
    <>
      <style>{`
        @keyframes driftSm{from{transform:translateX(0)}to{transform:translateX(-60px)}}
        @keyframes driftMd{from{transform:translateX(0)}to{transform:translateX(-110px)}}
        @keyframes driftLg{from{transform:translateX(0)}to{transform:translateX(-170px)}}
      `}</style>
      <Bg lines={lines} op={op} />
    </>
  );
}
