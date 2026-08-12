import { pageMetadata, faqJsonLd } from "../seo";
import JsonLd from "../JsonLd";

export const metadata = pageMetadata({
  title: "Support",
  description: "Payments don't stop at 5pm — and neither do we. Every plan includes access to our support team across chat, email, and phone.",
  path: "/support",
});

const FAQS = [
  { q: "How long does a payout take to settle?", a: "Our standard payout settlement window is T+1 for verified merchant accounts. International payouts may take 2–3 business days depending on the destination bank and intermediary routing." },
  { q: "Which countries does Payonus currently support?", a: "Payonus currently supports 8 African markets: Nigeria, Ghana, Kenya, South Africa, Zambia, Cameroon, Côte d'Ivoire, and Senegal. We are actively expanding to additional markets." },
  { q: "How do I integrate Payonus into my website or app?", a: "You can integrate using our REST APIs or one of our official SDKs (JavaScript, Python, PHP). Sign up, generate your API keys from the dashboard, and follow our step-by-step guide at payonus.com/docs. Most integrations are completed in under a day." },
  { q: "What is the process for handling a dispute or chargeback?", a: "When a dispute is raised, we notify you via email and your dashboard. You have 5 business days to submit evidence. Our disputes team reviews submissions and resolves cases in line with card network rules and CBN guidelines." },
  { q: "How do I get or rotate my API keys?", a: "Log in to your Payonus merchant dashboard and navigate to Settings → API Keys. You can generate new keys for sandbox and live environments at any time. Old keys are invalidated immediately upon rotation." },
  { q: "How do I reach Payonus support?", a: "You can reach us via email at Support@payonus.com or by phone at +234 913 222 2249. Our support team is available Monday–Friday, 9 am–6 pm WAT. Enterprise clients have access to dedicated account managers." },
];

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQS)} />
      {children}
    </>
  );
}
