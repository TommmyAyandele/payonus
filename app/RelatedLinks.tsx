import { T } from "./Navbar";

export default function RelatedLinks({ links }: { links: { label: string; href: string }[] }) {
  if (links.length === 0) return null;
  return (
    <section style={{ width: "100%", background: T.bg, borderTop: `1px solid ${T.borderLight}` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "32px 80px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 20 }}>
        <span style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 13, color: T.muted }}>Related:</span>
        {links.map(link => (
          <a key={link.href} href={link.href} style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 14, color: T.primary, textDecoration: "none" }}>
            {link.label} →
          </a>
        ))}
      </div>
    </section>
  );
}
