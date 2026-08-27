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

/* Container is chosen at runtime by hostname (see the inline script below) so testing on
   payonus.vercel.app / previews never mixes into the production container, and no code
   change is needed when payonus.com goes live. */
const GTM_ID_PRODUCTION = "GTM-NPZK45W9"; // payonus.com / www.payonus.com only
const GTM_ID_STAGING = "GTM-NPHWJ2NK"; // everywhere else (vercel.app, previews, localhost)
// G-KLBGC7GGSZ is the measurement ID GA4 has bound to the payonus.vercel.app stream
// ("payonustest") — confirmed accessible in the account being used to check GA4, unlike
// G-8W11DS3Q5K from the spec doc, which couldn't be located under that account.
const GA4_MEASUREMENT_ID = "G-KLBGC7GGSZ";

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
            __html: `(function(w,d,s,l){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
var gtmId=(window.location.hostname==='payonus.com'||window.location.hostname==='www.payonus.com')?'${GTM_ID_PRODUCTION}':'${GTM_ID_STAGING}';
j.src='https://www.googletagmanager.com/gtm.js?id='+gtmId+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer');`,
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
        {/* No-JS fallback can't branch by hostname like the script above does — points at the
            staging container for now. Flip to GTM_ID_PRODUCTION when payonus.com goes live. */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID_STAGING}`}
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
