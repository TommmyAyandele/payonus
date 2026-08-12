import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Collections",
  description: "A unified checkout and collections API for card, bank transfer, USSD, and mobile money across 8 African markets — in one integration.",
  path: "/collections",
});

export default function CollectionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
