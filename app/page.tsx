import PayonUsLandingPage from "./LandingPage";
import { pageMetadata } from "./seo";

export const metadata = pageMetadata({
  title: "African Payments Infrastructure",
  description: "Send and receive payments across 8 African markets. Fast, compliant, and built for scale.",
  path: "/",
});

export default function Home() {
  return <PayonUsLandingPage />;
}
