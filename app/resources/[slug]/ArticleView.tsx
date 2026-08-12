"use client";

import React from "react";
import { useBreakpoint } from "../../use-breakpoint";
import Navbar, { T } from "../../Navbar";
import Footer from "../../Footer";
import HeroBg from "../../HeroBg";
import type { Post } from "../../lib/blog";

export default function ArticleView({ post }: { post: Post }) {
  const { isMobile, isTablet } = useBreakpoint();
  const [scrolled, setScrolled] = React.useState(false);
  const hPad = isMobile ? 20 : isTablet ? 48 : 80;

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: T.bg }}>
      <style>{`
        .blog-body h2 { font-family:"Rubik",sans-serif; font-style:italic; font-weight:500; font-size:${isMobile ? 20 : 24}px; color:${T.headingBlack}; margin:36px 0 12px; }
        .blog-body h3 { font-family:"Rubik",sans-serif; font-style:italic; font-weight:500; font-size:17px; color:${T.headingBlack}; margin:28px 0 8px; }
        .blog-body p  { font-family:"DM Sans",sans-serif; font-weight:400; font-size:15px; line-height:1.75; color:${T.muted}; margin:0 0 16px; }
        .blog-body ul { font-family:"DM Sans",sans-serif; font-weight:400; font-size:15px; line-height:1.75; color:${T.muted}; margin:0 0 16px; padding-left:22px; }
        .blog-body ul li { margin-bottom:6px; }
        .blog-body a  { color:${T.primary}; text-decoration:none; }
        .blog-body a:hover { text-decoration:underline; }
        .blog-body strong { color:${T.dark}; }
      `}</style>

      <Navbar scrolled={scrolled} />

      <section style={{ position: "relative", width: "100%", background: T.bg, overflow: "hidden", padding: isMobile ? "64px 0 48px" : "88px 0 64px" }}>
        <HeroBg />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 780, margin: "0 auto", padding: `0 ${hPad}px` }}>
          <span className="fade-up" style={{ display: "block", marginBottom: isMobile ? 20 : 24, fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "0.04em", textTransform: "uppercase", color: T.primary }}>
            {post.category}
          </span>
          <h1 className="fade-up d1" style={{
            margin: "0 0 16px",
            fontFamily: "Rubik, sans-serif", fontStyle: "italic", fontWeight: 500,
            fontSize: isMobile ? 32 : isTablet ? 40 : 46,
            lineHeight: 1.15, letterSpacing: "-0.01em", color: T.headingBlack,
          }}>
            {post.title}
          </h1>
          {post.date && (
            <span style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 13, color: "#9CA3AF" }}>
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
          )}
        </div>
      </section>

      <div style={{ flex: 1, maxWidth: 780, margin: "0 auto", padding: `0 ${hPad}px ${isMobile ? 64 : 96}px`, width: "100%", boxSizing: "border-box" }}>
        <div className="blog-body" dangerouslySetInnerHTML={{ __html: post.html }} />

        {post.relatedHref && (
          <div style={{ marginTop: 32, paddingTop: 24, borderTop: `1px solid ${T.borderLight}` }}>
            <a href={post.relatedHref} style={{ display: "inline-flex", alignItems: "center", gap: 4, fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 15, color: T.primary, textDecoration: "none" }}>
              {post.relatedLabel ?? "Learn more"}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke={T.primary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
