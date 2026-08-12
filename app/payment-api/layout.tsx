import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Payment API",
  description: "A single, well-designed REST API to send and receive money across cards, bank transfers, USSD, and mobile money — in 8 markets, with one integration.",
  path: "/payment-api",
});

export default function PaymentApiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
