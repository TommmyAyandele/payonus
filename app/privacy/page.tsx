"use client";
import React from "react";
import LegalPage, { LegalSection } from "../LegalPage";

const SECTIONS: LegalSection[] = [
  {
    id: "introduction",
    heading: "Introduction",
    content: (
      <>
        <p>At Onus Financial Services, we are committed to protecting the privacy and security of our customers' personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard the information provided to us when using our payment processing services and digital banking platform. By accessing or using our services, you agree to the terms outlined in this Privacy Policy.</p>
      </>
    ),
  },
  {
    id: "information-collection",
    heading: "1. Information Collection",
    content: (
      <>
        <p><strong>1.1 Personal Information.</strong> We may collect personal information from you when you use our payment processing services or digital banking platform. This information may include, but is not limited to, your name, address, email address, phone number, financial account information, and any other information necessary to provide our services.</p>
        <p><strong>1.2 Usage Information.</strong> We may also collect non-personal information about how you use our services, such as your IP address, browser type, device information, and browsing patterns. This information is collected to improve our services, troubleshoot issues, and ensure the security of our systems.</p>
      </>
    ),
  },
  {
    id: "use-of-information",
    heading: "2. Use of Information",
    content: (
      <>
        <p><strong>2.1 Service Provision.</strong> We use the collected information to provide and improve our payment processing services and digital banking platform. This includes processing transactions, verifying identities, managing accounts, and addressing customer inquiries or issues.</p>
        <p><strong>2.2 Communication.</strong> We may use your contact information to communicate with you about our services, updates, promotions, and relevant news. You have the option to opt-out of these communications at any time by following the instructions provided in the communication.</p>
        <p><strong>2.3 Analytics and Research.</strong> We may aggregate and anonymize collected information to perform data analysis, research, and develop insights to enhance our services, security, and user experience. These aggregated insights do not identify you personally.</p>
        <p><strong>2.4 Legal Obligations.</strong> We may disclose your information when required by law or if we believe in good faith that such disclosure is necessary to comply with legal obligations, protect our rights, or investigate and prevent fraudulent activities.</p>
      </>
    ),
  },
  {
    id: "information-security",
    heading: "3. Information Security",
    content: (
      <>
        <p>We employ industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission or electronic storage is entirely secure, and we cannot guarantee absolute security.</p>
      </>
    ),
  },
  {
    id: "data-retention",
    heading: "4. Data Retention",
    content: (
      <>
        <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by law. When your information is no longer needed, we will securely dispose of it.</p>
      </>
    ),
  },
  {
    id: "third-party-disclosure",
    heading: "5. Third-Party Disclosure",
    content: (
      <>
        <p>We may share your personal information with trusted third parties who assist us in providing our services, such as payment processors, financial institutions, and service providers. These third parties are obligated to maintain the confidentiality and security of your information.</p>
      </>
    ),
  },
  {
    id: "childrens-privacy",
    heading: "6. Children's Privacy",
    content: (
      <>
        <p>Our services are not directed towards individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected information from a child, we will promptly delete it.</p>
      </>
    ),
  },
  {
    id: "changes",
    heading: "7. Changes to this Privacy Policy",
    content: (
      <>
        <p>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised policy on our website. We encourage you to review this policy periodically to stay informed about how we collect, use, and protect your information.</p>
      </>
    ),
  },
  {
    id: "contact",
    heading: "8. Contact Us",
    content: (
      <>
        <p>If you have any questions, concerns, or requests regarding this Privacy Policy or the use of your personal information, please contact us:</p>
        <ul>
          <li>Email: <a href="mailto:compliance@payonus.com">compliance@payonus.com</a></li>
          <li>Phone: <a href="tel:+2349132222249">+234 913 222 2249</a></li>
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
      subtitle="At Onus Financial Services, we are committed to protecting the privacy and security of your personal information."
      updated="23 June 2026"
      sections={SECTIONS}
    />
  );
}
