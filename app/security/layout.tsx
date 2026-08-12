import { pageMetadata, faqJsonLd } from "../seo";
import JsonLd from "../JsonLd";

export const metadata = pageMetadata({
  title: "Security",
  description: "Every payment Payonus processes is protected by multiple independent layers of security — from the moment a transaction is initiated to the moment funds settle.",
  path: "/security",
});

const FAQS = [
  { q: "Is Payonus licensed and regulated?", a: "Yes. Payonus is licensed by the Central Bank of Nigeria (CBN) and certified under ISO 27001, PCIDSS Level 1, and the NDPC Trust Mark. These certifications represent the highest standards of financial and data security compliance in the industry." },
  { q: "How does Payonus protect my transaction data?", a: "All transaction data is encrypted end-to-end using AES-256 and TLS 1.2+. Our infrastructure is ISO 27001 certified, and we undergo regular third-party penetration testing. No unencrypted card data is ever stored on our systems." },
  { q: "What happens if there is a security incident?", a: "We follow a documented incident response plan. Affected customers are notified within 72 hours of confirmation in accordance with NDPC requirements. A post-incident report is published for significant events, and we work swiftly to contain, remediate, and prevent recurrence." },
  { q: "How are API keys and secrets managed?", a: "API keys are hashed before storage using a one-way function — we cannot recover them. Secrets are managed through a dedicated secrets manager with audit logging on every read. Key rotation is available on demand from your dashboard." },
  { q: "What is your data retention and deletion policy?", a: "Transaction records are retained for 7 years to meet CBN and NDPC regulatory requirements. All other data is deleted within 30 days of account closure. You can request immediate deletion of non-regulatory data at any time by contacting compliance@payonus.com." },
];

export default function SecurityLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQS)} />
      {children}
    </>
  );
}
