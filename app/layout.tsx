import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "./CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Payonus",
    default: "Payonus – Pan-African Payment Infrastructure",
  },
  description: "Settle payments across 14+ African markets in seconds. Enterprise-grade compliance built in. PCI DSS Level 1, ISO 27001, CBN Licensed.",
  keywords: ["payment infrastructure", "Africa payments", "payouts", "collections", "fintech Africa"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
