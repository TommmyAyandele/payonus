import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "./JsonLd";
import { organizationJsonLd, websiteJsonLd } from "./seo";
import { SalesModalProvider } from "./SalesModalContext";
import LeadCaptureCard from "./LeadCaptureCard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://payonus.com"),
  title: "Payonus — African Payments Infrastructure",
  description: "Send and receive payments across 8 African markets. Fast, compliant, and built for scale.",
};

// Same container and measurement ID on payonus.vercel.app and payonus.com — the container
// already has the full tag/trigger/variable setup built and confirmed working, so no
// per-domain split or config transfer is needed at domain cutover.
const GTM_ID = "GTM-NPHWJ2NK";
// G-8W11DS3Q5K is the spec doc's measurement ID. G-KLBGC7GGSZ (tried previously, see git
// history) 404s at googletagmanager.com/gtag/js — it is not a live GA4 stream, regardless of
// which Google account's admin UI it appears under. Verify this ID in GA4 Admin > Data Streams
// before changing it again: confirm the "Measurement ID" field (G-XXXXXXX), not the Stream ID.
const GA4_MEASUREMENT_ID = "G-8W11DS3Q5K";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Archivo:wght@600&display=swap"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* Sends our custom dataLayer events (cta_click, form_submit, etc.) straight to GA4,
            independent of GTM trigger config. send_page_view is off so page_view isn't double-counted
            against GTM's own GA4 config tag. */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_MEASUREMENT_ID}', { send_page_view: false });`,
          }}
        />
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SalesModalProvider>
          {children}
          <LeadCaptureCard />
        </SalesModalProvider>
      </body>
    </html>
  );
}
