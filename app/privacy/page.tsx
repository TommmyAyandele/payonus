"use client";
import React from "react";
import LegalPage, { LegalSection } from "../LegalPage";

const SECTIONS: LegalSection[] = [
  {
    id: "information-we-collect",
    heading: "1. Information We Collect",
    content: (
      <>
        <p>We collect information you provide directly to us when you create an account, complete our KYC process, or contact support. This includes:</p>
        <ul>
          <li><strong>Identity information:</strong> Full name, date of birth, government-issued ID</li>
          <li><strong>Contact information:</strong> Email address, phone number, business address</li>
          <li><strong>Financial information:</strong> Bank account details, transaction history</li>
          <li><strong>Business information:</strong> Company name, registration number, directors</li>
        </ul>
        <p>We also collect information automatically when you use our platform, including IP addresses, device identifiers, browser type, and usage logs.</p>
      </>
    ),
  },
  {
    id: "how-we-use",
    heading: "2. How We Use Your Information",
    content: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, operate, and improve our payment services</li>
          <li>Verify your identity and comply with KYC/AML regulations</li>
          <li>Process transactions and send related notifications</li>
          <li>Detect, prevent, and investigate fraud and security incidents</li>
          <li>Respond to your support requests and communications</li>
          <li>Send you product updates, compliance notices, and account alerts</li>
          <li>Analyse usage patterns to improve our platform</li>
        </ul>
        <p>We do not sell your personal data to third parties. We only share data as described in this Privacy Policy.</p>
      </>
    ),
  },
  {
    id: "information-sharing",
    heading: "3. Information Sharing",
    content: (
      <>
        <p>We may share your information with:</p>
        <ul>
          <li><strong>Financial partners:</strong> Banks, payment networks, and processors required to execute your transactions</li>
          <li><strong>Compliance authorities:</strong> Regulatory bodies such as the CBN where required by law</li>
          <li><strong>Service providers:</strong> Cloud infrastructure, fraud detection, and analytics providers under data processing agreements</li>
          <li><strong>Professional advisors:</strong> Legal, accounting, and audit firms, bound by confidentiality obligations</li>
        </ul>
        <p>Any third party we share data with is required to handle it in a manner consistent with this policy and applicable law.</p>
      </>
    ),
  },
  {
    id: "data-security",
    heading: "4. Data Security",
    content: (
      <>
        <p>We implement industry-standard security measures to protect your personal data, including:</p>
        <ul>
          <li>AES-256 encryption for data at rest</li>
          <li>TLS 1.2+ encryption for all data in transit</li>
          <li>Role-based access controls and audit logging</li>
          <li>Regular penetration testing and security audits</li>
          <li>PCI-DSS compliant infrastructure for payment data</li>
        </ul>
        <p>Despite these measures, no security system is impenetrable. If you believe your account has been compromised, please contact us immediately at <a href="mailto:security@payonus.com">security@payonus.com</a>.</p>
      </>
    ),
  },
  {
    id: "data-retention",
    heading: "5. Data Retention",
    content: (
      <>
        <p>We retain your personal data for as long as your account is active and as required to comply with our legal obligations. Specifically:</p>
        <ul>
          <li>Transaction records are retained for a minimum of 7 years in compliance with Nigerian financial regulations</li>
          <li>KYC documents are retained for 5 years after account closure</li>
          <li>Usage logs are retained for 12 months</li>
        </ul>
        <p>When data is no longer required, it is securely deleted or anonymised.</p>
      </>
    ),
  },
  {
    id: "your-rights",
    heading: "6. Your Rights",
    content: (
      <>
        <p>Subject to applicable law, you have the right to:</p>
        <ul>
          <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
          <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data</li>
          <li><strong>Erasure:</strong> Request deletion of your data where we have no legal basis to retain it</li>
          <li><strong>Restriction:</strong> Request that we limit how we use your data</li>
          <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
          <li><strong>Objection:</strong> Object to processing of your data for direct marketing purposes</li>
        </ul>
        <p>To exercise any of these rights, contact us at <a href="mailto:privacy@payonus.com">privacy@payonus.com</a>. We will respond within 30 days.</p>
      </>
    ),
  },
  {
    id: "cookies-section",
    heading: "7. Cookies",
    content: (
      <>
        <p>We use cookies and similar tracking technologies on our web platform. For full details on how we use cookies and how to manage them, please read our <a href="/cookies">Cookie Policy</a>.</p>
      </>
    ),
  },
  {
    id: "third-party",
    heading: "8. Third-Party Links",
    content: (
      <>
        <p>Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of those third parties. We encourage you to review their privacy policies before providing any personal information.</p>
      </>
    ),
  },
  {
    id: "changes",
    heading: "9. Changes to This Policy",
    content: (
      <>
        <p>We may update this Privacy Policy from time to time. We will notify you of material changes via email or a prominent notice on our platform. The updated policy will take effect 14 days after notification unless otherwise required by law.</p>
      </>
    ),
  },
  {
    id: "contact",
    heading: "10. Contact Us",
    content: (
      <>
        <p>For questions, concerns, or requests relating to your privacy, contact our Data Protection Officer:</p>
        <ul>
          <li>Email: <a href="mailto:privacy@payonus.com">privacy@payonus.com</a></li>
          <li>Address: Lagos, Nigeria</li>
          <li>Support: <a href="/support">payonus.com/support</a></li>
        </ul>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="Your privacy matters to us. This policy explains what data we collect, how we use it, and your rights."
      updated="1 May 2026"
      sections={SECTIONS}
    />
  );
}
