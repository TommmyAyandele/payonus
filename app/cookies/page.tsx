"use client";
import React from "react";
import LegalPage, { LegalSection } from "../LegalPage";

const SECTIONS: LegalSection[] = [
  {
    id: "what-are-cookies",
    heading: "1. What Are Cookies",
    content: (
      <>
        <p>Cookies are small text files placed on your device when you visit a website. They allow the site to recognise your device and remember information about your visit — such as your preferences, session state, and how you interact with the platform.</p>
        <p>Cookies are widely used to make websites work efficiently and to provide reporting information to site owners. They do not contain executable code and cannot access other data on your device.</p>
      </>
    ),
  },
  {
    id: "how-we-use",
    heading: "2. How We Use Cookies",
    content: (
      <>
        <p>Payonus uses cookies to:</p>
        <ul>
          <li>Keep you signed in securely during your session</li>
          <li>Remember your settings and preferences</li>
          <li>Understand how you navigate and use our platform</li>
          <li>Detect and prevent fraudulent or abnormal activity</li>
          <li>Measure the performance of our pages and features</li>
          <li>Improve and personalise your experience over time</li>
        </ul>
      </>
    ),
  },
  {
    id: "types",
    heading: "3. Types of Cookies We Use",
    content: (
      <>
        <h3>Strictly Necessary</h3>
        <p>These cookies are essential for the platform to function. They enable core features like authentication, session management, and security. You cannot opt out of these cookies.</p>

        <h3>Analytics & Performance</h3>
        <p>These cookies collect anonymised information about how visitors use our platform — which pages are visited most, how long sessions last, and where errors occur. This helps us improve overall performance. We use tools such as a self-hosted analytics platform that does not share data with third-party ad networks.</p>

        <h3>Functional</h3>
        <p>These cookies remember choices you make — such as your preferred language, currency display, or dashboard layout — so you don't have to reset them on every visit.</p>

        <h3>Security</h3>
        <p>We use cookies to support fraud detection and to protect your account. These cookies help us identify unusual activity patterns and flag potentially compromised sessions.</p>
      </>
    ),
  },
  {
    id: "managing",
    heading: "4. Managing Cookies",
    content: (
      <>
        <p>You can control and manage cookies in several ways:</p>
        <ul>
          <li><strong>Cookie consent banner:</strong> When you first visit our platform, you can accept or decline non-essential cookies via our consent banner</li>
          <li><strong>Browser settings:</strong> Most browsers allow you to block or delete cookies through their settings menu</li>
          <li><strong>Opt-out tools:</strong> You may use third-party tools to opt out of certain analytics tracking</li>
        </ul>
        <p>Please note that disabling strictly necessary cookies will affect the functionality of the platform and may prevent you from accessing core features such as your dashboard or API keys.</p>
      </>
    ),
  },
  {
    id: "third-party",
    heading: "5. Third-Party Cookies",
    content: (
      <>
        <p>Some of our pages may include content or links from third-party services (such as embedded maps or support chat widgets). These third parties may set their own cookies, which are governed by their respective privacy policies. Payonus does not control or have access to these cookies.</p>
        <p>We do not use third-party advertising cookies or allow ad networks to place cookies on our platform.</p>
      </>
    ),
  },
  {
    id: "updates",
    heading: "6. Updates to This Policy",
    content: (
      <>
        <p>We may update this Cookie Policy as our practices change or as required by law. When we make material changes, we will update the "Last updated" date and display a new consent notice where appropriate.</p>
      </>
    ),
  },
  {
    id: "contact",
    heading: "7. Contact Us",
    content: (
      <>
        <p>If you have any questions about our use of cookies, please contact us:</p>
        <ul>
          <li>Email: <a href="mailto:privacy@payonus.com">privacy@payonus.com</a></li>
          <li>Support: <a href="/support">payonus.com/support</a></li>
        </ul>
      </>
    ),
  },
];

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      subtitle="This policy explains how Payonus uses cookies and similar technologies on our platform."
      updated="1 May 2026"
      sections={SECTIONS}
    />
  );
}
