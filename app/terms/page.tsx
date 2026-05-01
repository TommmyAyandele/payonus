"use client";
import React from "react";
import LegalPage, { LegalSection } from "../LegalPage";

const SECTIONS: LegalSection[] = [
  {
    id: "acceptance",
    heading: "1. Acceptance of Terms",
    content: (
      <>
        <p>By accessing or using any Payonus product, platform, or API, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.</p>
        <p>These Terms apply to all users, including businesses, developers, and individuals who access Payonus services directly or through our API. Your continued use of our services constitutes your acceptance of any changes we make to these Terms.</p>
      </>
    ),
  },
  {
    id: "services",
    heading: "2. Description of Services",
    content: (
      <>
        <p>Payonus provides payment infrastructure for businesses operating across Africa, including but not limited to:</p>
        <ul>
          <li>Bulk and single payouts to bank accounts and mobile wallets</li>
          <li>Payment collections via various payment methods</li>
          <li>Instant settlements to local bank accounts</li>
          <li>Payment APIs and developer tools</li>
          <li>Analytics and reporting dashboards</li>
        </ul>
        <p>We reserve the right to modify, suspend, or discontinue any part of our services at any time with reasonable notice.</p>
      </>
    ),
  },
  {
    id: "obligations",
    heading: "3. User Obligations",
    content: (
      <>
        <p>As a user of Payonus services, you agree to:</p>
        <ul>
          <li>Provide accurate, complete, and current information during registration and ongoing use</li>
          <li>Maintain the security of your API keys and account credentials</li>
          <li>Use our services only for lawful purposes and in compliance with all applicable regulations</li>
          <li>Not attempt to reverse-engineer, copy, or replicate our platform or APIs</li>
          <li>Promptly notify us of any unauthorised access to your account</li>
          <li>Comply with all applicable anti-money laundering (AML) and know-your-customer (KYC) requirements</li>
        </ul>
      </>
    ),
  },
  {
    id: "payments",
    heading: "4. Payment Processing",
    content: (
      <>
        <p>All transactions processed through Payonus are subject to verification and compliance checks. We reserve the right to hold, delay, or reverse any transaction that we reasonably believe to be fraudulent, in violation of these Terms, or in breach of applicable law.</p>
        <p>You are responsible for ensuring that all payment instructions submitted through our platform are accurate. Payonus is not liable for losses arising from incorrect payment details provided by you or your end users.</p>
        <h3>Settlement timelines</h3>
        <p>Settlement timelines vary by market and payment method. Specific timelines are communicated within your dashboard and API documentation. Payonus does not guarantee settlement times where delays are caused by third-party financial institutions.</p>
      </>
    ),
  },
  {
    id: "fees",
    heading: "5. Fees and Charges",
    content: (
      <>
        <p>Our pricing is transparent and per-transaction. Current fees are available on our <a href="/pricing">Pricing page</a>. Fees may vary by country, payment method, and transaction volume.</p>
        <p>We reserve the right to update our fee structure with 30 days' written notice. Continued use of our services after such notice constitutes acceptance of the new fees.</p>
        <ul>
          <li>Fees are deducted automatically at the time of transaction settlement</li>
          <li>VAT or applicable taxes may be charged in addition to stated fees</li>
          <li>Volume discounts are available — contact our sales team for details</li>
        </ul>
      </>
    ),
  },
  {
    id: "ip",
    heading: "6. Intellectual Property",
    content: (
      <>
        <p>All content, trademarks, logos, APIs, and technology on the Payonus platform are the exclusive property of Payonus or its licensors. Nothing in these Terms grants you any right to use our intellectual property without express written permission.</p>
        <p>Subject to these Terms, we grant you a limited, non-exclusive, non-transferable licence to access and use our APIs and platform solely for the purpose of integrating and using our payment services.</p>
      </>
    ),
  },
  {
    id: "liability",
    heading: "7. Limitation of Liability",
    content: (
      <>
        <p>To the maximum extent permitted by law, Payonus shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, goodwill, or business interruption, arising out of or in connection with your use of our services.</p>
        <p>Our total liability to you for any claims arising under these Terms shall not exceed the total fees paid by you to Payonus in the three (3) months preceding the claim.</p>
      </>
    ),
  },
  {
    id: "termination",
    heading: "8. Termination",
    content: (
      <>
        <p>Either party may terminate these Terms at any time by providing 30 days' written notice. We may suspend or terminate your access immediately if we reasonably believe you have breached these Terms, engaged in fraudulent activity, or pose a risk to the platform or other users.</p>
        <p>Upon termination, all outstanding settlements owed to you will be processed in accordance with our standard settlement procedures, subject to any applicable holds or deductions.</p>
      </>
    ),
  },
  {
    id: "governing-law",
    heading: "9. Governing Law",
    content: (
      <>
        <p>These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Lagos State, Nigeria.</p>
      </>
    ),
  },
  {
    id: "changes",
    heading: "10. Changes to Terms",
    content: (
      <>
        <p>We may update these Terms from time to time. When we do, we will revise the "Last updated" date at the top of this page and notify you via email or an in-platform notice. Your continued use of our services after changes take effect constitutes your acceptance of the revised Terms.</p>
      </>
    ),
  },
  {
    id: "contact",
    heading: "11. Contact Us",
    content: (
      <>
        <p>If you have any questions about these Terms of Service, please contact us:</p>
        <ul>
          <li>Email: <a href="mailto:legal@payonus.com">legal@payonus.com</a></li>
          <li>Address: Lagos, Nigeria</li>
          <li>Support: <a href="/support">payonus.com/support</a></li>
        </ul>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      subtitle="Please read these terms carefully before using any Payonus product or service."
      updated="1 May 2026"
      sections={SECTIONS}
    />
  );
}
