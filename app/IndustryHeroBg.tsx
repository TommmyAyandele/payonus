"use client";
import React from "react";

export type Industry = "gaming" | "forex" | "banking" | "ecommerce" | "aviation" | "manufacturing";

const base: React.CSSProperties = {
  position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0,
};

/* ── GAMING: retro pixel grid + blinking squares ── */
function Gaming() {
  const px = [
    [80,120,0,"#6009FF"],[240,60,.5,"#F4B249"],[400,180,1,"#6009FF"],
    [160,300,1.5,"#F4B249"],[520,90,.3,"#6009FF"],[340,240,.8,"#F4B249"],
    [600,160,1.2,"#6009FF"],[100,400,.6,"#F4B249"],[460,320,1.8,"#6009FF"],
    [280,140,2,"#F4B249"],[580,280,.2,"#6009FF"],[420,400,1.4,"#F4B249"],
    [200,500,.9,"#6009FF"],[360,480,1.7,"#F4B249"],[640,420,2.2,"#6009FF"],
    [700,200,.4,"#F4B249"],[750,340,1.1,"#6009FF"],[500,520,2.5,"#F4B249"],
    [120,540,.7,"#6009FF"],[800,120,.9,"#F4B249"],[900,300,1.6,"#6009FF"],
  ] as [number,number,number,string][];
  return (
    <div style={base} aria-hidden>
      <svg width="100%" height="100%">
        <defs>
          <pattern id="pg" width="36" height="36" patternUnits="userSpaceOnUse">
            <rect width="36" height="36" fill="none" stroke="#6009FF" strokeWidth="0.4" opacity="0.12"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pg)"/>
        {px.map(([x,y,d,c],i) => (
          <rect key={i} x={x} y={y} width="9" height="9" fill={c}
            style={{animation:`pixBlink ${2+i*0.14}s ease-in-out infinite`,animationDelay:`${d}s`}}/>
        ))}
      </svg>
    </div>
  );
}

/* ── FOREX: animated sine-wave price lines ── */
function Forex() {
  const wave = (amp:number,freq:number,phase:number,y0:number) => {
    let d = `M -60 ${y0}`;
    for (let x=-60;x<=1520;x+=7) d+=` L ${x} ${y0+amp*Math.sin(x/freq+phase)}`;
    return d;
  };
  const waves:[number,number,number,number,string,number][] = [
    [42,200,0,180,"#6009FF",16],[30,140,1.2,320,"#F4B249",11],
    [55,300,.6,480,"#6009FF",21],[24,100,2.1,120,"#F4B249",9],
    [37,250,1.8,420,"#6009FF",14],[20,120,.4,560,"#F4B249",13],
  ];
  return (
    <div style={base} aria-hidden>
      <svg width="100%" height="100%" style={{opacity:.09}}>
        {waves.map(([amp,freq,phase,y,color,dur],i) => (
          <path key={i} d={wave(amp,freq,phase,y)} fill="none" stroke={color} strokeWidth="1.5"
            style={{animation:`fxScroll ${dur}s linear infinite`,animationDelay:`${i*.9}s`}}/>
        ))}
      </svg>
    </div>
  );
}

/* ── BANKING: circuit board traces + pulsing nodes ── */
function Banking() {
  const traces = [
    "M 340 60 H 540 V 160 H 740 V 60 H 940 V 260",
    "M 940 260 H 740 V 360 H 540 V 260 H 340 V 360",
    "M 340 360 H 440 V 460 H 640 V 360 H 840 V 460",
    "M 840 460 V 560 H 640 V 460",
    "M 1040 60 V 160 H 840 M 1040 160 H 1240 V 260 H 1040",
    "M 1240 260 V 360 H 1040 V 460 H 1240 V 560",
    "M 440 460 V 560 H 340 V 460",
    "M 540 560 V 620 H 840",
  ];
  const nodes:[number,number][] = [
    [340,60],[540,60],[740,60],[940,60],[940,260],[740,260],[540,260],[340,260],
    [340,360],[440,360],[640,360],[840,360],[840,460],[640,460],[440,460],[340,460],
    [1040,60],[1240,60],[1240,160],[1040,160],[1240,260],[1040,260],[1240,360],[1240,560],
    [440,560],[540,560],[840,560],[640,560],
  ];
  return (
    <div style={base} aria-hidden>
      <svg width="100%" height="100%" style={{opacity:.08}}>
        {traces.map((d,i) => (
          <path key={i} d={d} fill="none" stroke="#6009FF" strokeWidth="1.5"
            strokeDasharray="6 140"
            style={{animation:`cktFlow ${9+i*1.4}s linear infinite`,animationDelay:`${i*.8}s`}}/>
        ))}
        {nodes.map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="3.5" fill="#6009FF"
            style={{animation:`cktNode ${2.5+i*.1}s ease-in-out infinite`,animationDelay:`${i*.2}s`}}/>
        ))}
      </svg>
    </div>
  );
}

/* ── ECOMMERCE: floating outlined box icons ── */
function Ecommerce() {
  const boxes = [
    {left:"7%",sz:32,dur:14,del:0},{left:"19%",sz:22,dur:10,del:2.5},
    {left:"32%",sz:40,dur:17,del:1},{left:"45%",sz:26,dur:12,del:4},
    {left:"58%",sz:34,dur:15,del:1.5},{left:"14%",sz:20,dur:9,del:3},
    {left:"26%",sz:30,dur:13,del:5},{left:"39%",sz:44,dur:16,del:2},
    {left:"52%",sz:24,dur:11,del:3.5},{left:"65%",sz:36,dur:14,del:.5},
    {left:"5%",sz:28,dur:12,del:6},{left:"72%",sz:30,dur:18,del:4.5},
    {left:"82%",sz:26,dur:13,del:2.8},{left:"92%",sz:22,dur:10,del:5.5},
  ];
  return (
    <div style={{...base,opacity:.11}} aria-hidden>
      {boxes.map(({left,sz,dur,del},i) => {
        const h = sz*.75;
        return (
          <div key={i} style={{position:"absolute",left,bottom:0,opacity:0,
            animation:`floatBox ${dur}s linear infinite`,animationDelay:`${del}s`}}>
            <svg width={sz} height={h} viewBox={`0 0 ${sz} ${h}`} fill="none"
              stroke="#6009FF" strokeWidth="1.2" style={{display:"block"}}>
              <rect x={.6} y={.6} width={sz-1.2} height={h-1.2}/>
              <line x1={.6} y1={h*.82} x2={sz-.6} y2={h*.82}/>
              <line x1={sz/2} y1={.6} x2={sz/2} y2={h*.82} stroke="#F4B249"/>
            </svg>
          </div>
        );
      })}
    </div>
  );
}

/* ── AVIATION: dashed curved arcs (flight paths) ── */
function Aviation() {
  const arcs = [
    {d:"M 50 620 Q 380 80 900 380",dur:8,del:0},
    {d:"M 0 430 Q 420 160 980 520",dur:10,del:2},
    {d:"M 150 560 Q 550 60 1200 300",dur:12,del:1},
    {d:"M 300 600 Q 650 120 1100 460",dur:9,del:3.5},
    {d:"M -50 360 Q 300 200 700 580",dur:11,del:1.5},
    {d:"M 500 620 Q 800 100 1400 410",dur:13,del:.5},
    {d:"M 100 490 Q 500 300 1000 540",dur:15,del:4},
  ];
  const dots:[number,number][] = [
    [50,620],[900,380],[0,430],[980,520],[150,560],[1200,300],[300,600],[1100,460],
  ];
  return (
    <div style={base} aria-hidden>
      <svg width="100%" height="100%" style={{opacity:.10}}>
        {arcs.map(({d,dur,del},i) => (
          <path key={i} d={d} fill="none" stroke="#6009FF" strokeWidth="1.4"
            strokeDasharray="12 8"
            style={{animation:`arcFlow ${dur}s linear infinite`,animationDelay:`${del}s`}}/>
        ))}
        {dots.map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="4" fill="none"
            stroke="#6009FF" strokeWidth="1.5" opacity=".5"/>
        ))}
      </svg>
    </div>
  );
}

/* ── MANUFACTURING: counter-rotating gear outlines ── */
function Manufacturing() {
  function gear(rIn:number,rOut:number,teeth:number):string {
    const step=(2*Math.PI)/teeth;
    let d="";
    for(let i=0;i<teeth;i++){
      const a=i*step;
      const pts=[
        [rIn*Math.cos(a-step*.35), rIn*Math.sin(a-step*.35)],
        [rOut*Math.cos(a-step*.12),rOut*Math.sin(a-step*.12)],
        [rOut*Math.cos(a+step*.12),rOut*Math.sin(a+step*.12)],
        [rIn*Math.cos(a+step*.35), rIn*Math.sin(a+step*.35)],
      ];
      if(i===0) d+=`M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
      else       d+=` L ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
      pts.slice(1).forEach(p=>{ d+=` L ${p[0].toFixed(1)} ${p[1].toFixed(1)}`; });
    }
    return d+" Z";
  }
  const gStyle=(dur:number,dir:"CW"|"CCW"):React.CSSProperties=>({
    transformBox:"fill-box",transformOrigin:"center",
    animation:`gear${dir} ${dur}s linear infinite`,
  });
  return (
    <div style={base} aria-hidden>
      <svg width="100%" height="100%" style={{opacity:.08}}>
        {/* top-right large gear */}
        <g transform="translate(820,0)">
          <g style={gStyle(30,"CW")}>
            <path d={gear(88,112,14)} fill="none" stroke="#6009FF" strokeWidth="1.5"/>
            <circle r={44} fill="none" stroke="#6009FF" strokeWidth="1.5"/>
            <circle r={9} fill="#6009FF"/>
          </g>
        </g>
        {/* bottom-left large gear */}
        <g transform="translate(-50,510)">
          <g style={gStyle(42,"CCW")}>
            <path d={gear(128,162,18)} fill="none" stroke="#6009FF" strokeWidth="1.5"/>
            <circle r={64} fill="none" stroke="#6009FF" strokeWidth="1.5"/>
            <circle r={13} fill="#6009FF"/>
          </g>
        </g>
        {/* small accent gear */}
        <g transform="translate(620,480)">
          <g style={gStyle(18,"CW")}>
            <path d={gear(48,60,10)} fill="none" stroke="#F4B249" strokeWidth="1.2"/>
            <circle r={24} fill="none" stroke="#F4B249" strokeWidth="1.2"/>
            <circle r={6} fill="#F4B249"/>
          </g>
        </g>
      </svg>
    </div>
  );
}

export function IndustryHeroBg({ industry }: { industry: Industry }) {
  switch (industry) {
    case "gaming":        return <Gaming />;
    case "forex":         return <Forex />;
    case "banking":       return <Banking />;
    case "ecommerce":     return <Ecommerce />;
    case "aviation":      return <Aviation />;
    case "manufacturing": return <Manufacturing />;
    default:              return null;
  }
}
