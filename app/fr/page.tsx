import PayonUsLandingPage from "../LandingPage";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Infrastructure de paiement africaine",
  description: "Envoyez et recevez des paiements dans 8 marchés africains. Rapide, conforme et conçu pour l'échelle.",
  path: "/fr",
  locale: "fr",
  alternatePath: "/",
});

export default function HomeFr() {
  return <PayonUsLandingPage locale="fr" />;
}
