import { pageMetadata, faqJsonLd } from "../seo";
import JsonLd from "../JsonLd";

export const metadata = pageMetadata({
  title: "Pricing",
  description: "Simple pricing. No surprises. Pay only for what you use — no setup fees, no monthly minimums on Starter. Upgrade when you need more.",
  path: "/pricing",
});

const FAQS = [
  { q: "Are there setup fees?", a: "No. There are no setup fees, activation fees, or minimum commitments on our Starter plan. You only pay for what you process." },
  { q: "Can I switch plans mid-month?", a: "Yes. You can upgrade or downgrade at any time. Changes take effect immediately and billing is prorated for the remainder of the billing cycle." },
  { q: "Are there volume discounts?", a: "Yes. Enterprise customers and high-volume businesses are eligible for custom pricing. Reach out to our sales team to discuss your volume and get a tailored rate." },
  { q: "What currencies are fees charged in?", a: "Fees are charged in the local currency of each transaction. For international transfers, fees are calculated in the transaction currency before settlement." },
];

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQS)} />
      {children}
    </>
  );
}
