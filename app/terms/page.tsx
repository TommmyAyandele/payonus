"use client";
import React from "react";
import LegalPage, { LegalSection } from "../LegalPage";

const SECTIONS: LegalSection[] = [

  /* ══════════════════════════════════════
     PART I — PAYMENT PROCESSING
  ══════════════════════════════════════ */
  {
    id: "pp-intro",
    heading: "Payment Processing — 1. Introduction",
    content: (
      <>
        <p>These Terms and Conditions ("Agreement") govern your use of the payment processing services provided by Onus Financial Services ("Payonus"), located in Lagos, Nigeria. By accessing or using our services, you agree to comply with and be bound by these terms. Please read this Agreement carefully before using our services.</p>
      </>
    ),
  },
  {
    id: "pp-registration",
    heading: "Payment Processing — 2. Account Registration",
    content: (
      <>
        <p><strong>2.1. Eligibility.</strong> In order to use our payment processing services, you must be at least 18 years old and have the legal authority to enter into binding agreements.</p>
        <p><strong>2.2. Registration Information.</strong> You are required to provide accurate and complete information during the registration process. It is your responsibility to keep your account information updated.</p>
        <p><strong>2.3. Account Security.</strong> You are responsible for maintaining the confidentiality of your account credentials, including your password. You agree not to disclose your account information to any third party and to notify us immediately of any unauthorized use of your account.</p>
      </>
    ),
  },
  {
    id: "pp-services",
    heading: "Payment Processing — 3. Payment Processing Services",
    content: (
      <>
        <p><strong>3.1. Transaction Processing.</strong> Our services allow you to process payments from your customers using various payment methods. We strive to provide a secure and reliable payment processing system; however, we cannot guarantee uninterrupted or error-free service.</p>
        <p><strong>3.2. Fees and Charges.</strong> You agree to pay the applicable fees and charges for using our payment processing services. The fees will be clearly communicated to you, and you are responsible for any taxes associated with your transactions.</p>
        <p><strong>3.3. Disputes and Chargebacks.</strong> In the event of a dispute or chargeback, you agree to cooperate with us and provide any necessary documentation or information to resolve the issue. We reserve the right to investigate and resolve disputes in our sole discretion.</p>
      </>
    ),
  },
  {
    id: "pp-data",
    heading: "Payment Processing — 4. Data Protection and Privacy",
    content: (
      <>
        <p><strong>4.1. Privacy Policy.</strong> We value your privacy and handle your personal information in accordance with our Privacy Policy. By using our services, you consent to the collection, use, and disclosure of your personal information as described in our Privacy Policy.</p>
        <p><strong>4.2. Data Security.</strong> We employ industry-standard security measures to protect your data; however, we cannot guarantee absolute security. You are responsible for maintaining the security of your account and any data transmitted through our services.</p>
      </>
    ),
  },
  {
    id: "pp-ip",
    heading: "Payment Processing — 5. Intellectual Property",
    content: (
      <>
        <p><strong>5.1. Ownership.</strong> All intellectual property rights related to our services, including but not limited to trademarks, logos, and software, are owned by the Company or its licensors. You may not use our intellectual property without our prior written consent.</p>
      </>
    ),
  },
  {
    id: "pp-liability",
    heading: "Payment Processing — 6. Limitation of Liability",
    content: (
      <>
        <p><strong>6.1. Disclaimer of Warranties.</strong> Our payment processing services are provided on an "as is" and "as available" basis. We make no warranties, whether expressed or implied, regarding the reliability, accuracy, or availability of our services.</p>
        <p><strong>6.2. Limitation of Liability.</strong> To the extent permitted by applicable law, the Company and its affiliates shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services, even if we have been advised of the possibility of such damages.</p>
      </>
    ),
  },
  {
    id: "pp-termination",
    heading: "Payment Processing — 7. Termination",
    content: (
      <>
        <p><strong>7.1. Termination by Company.</strong> We reserve the right to terminate or suspend your access to our services at any time, with or without cause, without prior notice.</p>
      </>
    ),
  },
  {
    id: "pp-governing-law",
    heading: "Payment Processing — 8. Governing Law and Jurisdiction",
    content: (
      <>
        <p>This Agreement shall be governed by and construed in accordance with the laws of Nigeria. Any disputes arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts in Lagos, Nigeria.</p>
      </>
    ),
  },
  {
    id: "pp-modifications",
    heading: "Payment Processing — 9. Modifications to the Agreement",
    content: (
      <>
        <p>We reserve the right to modify or update these Terms and Conditions at any time. Any changes will be effective upon posting the revised Agreement on our website. Your continued use of our services after the changes will constitute your acceptance of the modified terms.</p>
      </>
    ),
  },

  /* ══════════════════════════════════════
     PART II — DIGITAL BANK
  ══════════════════════════════════════ */
  {
    id: "db-intro",
    heading: "Digital Bank — 1. Introduction",
    content: (
      <>
        <p>These Terms and Conditions ("Agreement") govern your use of the digital banking services provided by Onus Financial Services ("BankOnUs"), located in Lagos, Nigeria. By accessing or using our services, you agree to comply with and be bound by these terms. Please read this Agreement carefully before using our services.</p>
      </>
    ),
  },
  {
    id: "db-registration",
    heading: "Digital Bank — 2. Account Registration",
    content: (
      <>
        <p><strong>2.1. Eligibility.</strong> In order to use our digital banking services, you must be at least 18 years old and have the legal authority to enter into binding agreements.</p>
        <p><strong>2.2. Registration Information.</strong> You are required to provide accurate and complete information during the registration process. It is your responsibility to keep your account information updated.</p>
        <p><strong>2.3. Account Security.</strong> You are responsible for maintaining the confidentiality of your account credentials, including your password. You agree not to disclose your account information to any third party and to notify us immediately of any unauthorized use of your account.</p>
      </>
    ),
  },
  {
    id: "db-services",
    heading: "Digital Bank — 3. Account Services",
    content: (
      <>
        <p><strong>3.1. Deposit and Withdrawal.</strong> Our digital banking services allow you to deposit funds into your account and make withdrawals, subject to any transaction limits and fees that may apply.</p>
        <p><strong>3.2. Fund Transfers.</strong> You may transfer funds to other accounts within our digital banking system or to external accounts, subject to any applicable transfer limits and fees.</p>
        <p><strong>3.3. Account Statements.</strong> We provide regular account statements, which reflect your account activity and balances. It is your responsibility to review your statements promptly and notify us of any errors or discrepancies.</p>
      </>
    ),
  },
  {
    id: "db-data",
    heading: "Digital Bank — 4. Data Protection and Privacy",
    content: (
      <>
        <p><strong>4.1. Privacy Policy.</strong> We value your privacy and handle your personal information in accordance with our Privacy Policy. By using our services, you consent to the collection, use, and disclosure of your personal information as described in our Privacy Policy.</p>
        <p><strong>4.2. Data Security.</strong> We employ industry-standard security measures to protect your data; however, we cannot guarantee absolute security. You are responsible for maintaining the security of your account and any data transmitted through our services.</p>
      </>
    ),
  },
  {
    id: "db-ip",
    heading: "Digital Bank — 5. Intellectual Property",
    content: (
      <>
        <p><strong>5.1. Ownership.</strong> All intellectual property rights related to our digital banking services, including but not limited to trademarks, logos, and software, are owned by the Bank or its licensors. You may not use our intellectual property without our prior written consent.</p>
      </>
    ),
  },
  {
    id: "db-liability",
    heading: "Digital Bank — 6. Limitation of Liability",
    content: (
      <>
        <p><strong>6.1. Disclaimer of Warranties.</strong> Our digital banking services are provided on an "as is" and "as available" basis. We make no warranties, whether expressed or implied, regarding the reliability, accuracy, or availability of our services.</p>
        <p><strong>6.2. Limitation of Liability.</strong> To the extent permitted by applicable law, the Bank and its affiliates shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services, even if we have been advised of the possibility of such damages.</p>
      </>
    ),
  },
  {
    id: "db-termination",
    heading: "Digital Bank — 7. Termination",
    content: (
      <>
        <p><strong>7.1. Termination by Bank.</strong> We reserve the right to terminate or suspend your access to our digital banking services at any time, with or without cause, without prior notice.</p>
        <p><strong>7.2. Termination by User.</strong> You may terminate your account with us at any time by providing written notice to the Bank. Upon termination, you will remain responsible for any outstanding fees or charges.</p>
      </>
    ),
  },
  {
    id: "db-governing-law",
    heading: "Digital Bank — 8. Governing Law and Jurisdiction",
    content: (
      <>
        <p>This Agreement shall be governed by and construed in accordance with the laws of Nigeria. Any disputes arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts in Lagos, Nigeria.</p>
      </>
    ),
  },
  {
    id: "db-modifications",
    heading: "Digital Bank — 9. Modifications to the Agreement",
    content: (
      <>
        <p>We reserve the right to modify or update these Terms and Conditions at any time. Any changes will be effective upon posting the revised Agreement on our website. Your continued use of our services after the changes will constitute your acceptance of the modified terms.</p>
      </>
    ),
  },

  /* ══════════════════════════════════════
     CONTACT
  ══════════════════════════════════════ */
  {
    id: "contact",
    heading: "Contact Us",
    content: (
      <>
        <p>If you have any questions about these Terms and Conditions, please contact us:</p>
        <ul>
          <li>Email: <a href="mailto:Support@payonus.com">Support@payonus.com</a></li>
          <li>Phone: <a href="tel:+2349132222249">+234 913 222 2249</a></li>
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
      title="Terms & Conditions"
      subtitle="These terms govern your use of Payonus payment processing and digital banking services. Please read carefully before using our services."
      updated="23 June 2026"
      sections={SECTIONS}
    />
  );
}
