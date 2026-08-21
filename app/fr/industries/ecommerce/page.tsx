import IndustryPage from "../../../IndustryPage";
import JsonLd from "../../../JsonLd";
import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from "../../../seo";
import { IndustryBlock } from "../../../IndustryBlocks";

export const metadata = pageMetadata({
  title: "Passerelle de paiement e-commerce pour l'Afrique",
  description: "Aidez vos clients à payer tout en gérant les encaissements, décaissements et opérations de paiement dans 8 marchés africains avec Payonus.",
  path: "/fr/industries/ecommerce",
  locale: "fr",
  alternatePath: "/industries/ecommerce",
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", path: "/fr" },
  { name: "E-commerce", path: "/fr/industries/ecommerce" },
]);

const faqs = [
  { q: "Payonus peut-il prendre en charge des entreprises opérant dans plusieurs marchés ?", a: "Oui. Payonus opère dans 8 marchés africains, à savoir le Nigéria, le Ghana, le Kenya, la Côte d'Ivoire, l'Afrique du Sud, la Zambie, le Sénégal et le Cameroun. La disponibilité des paiements et les exigences peuvent varier selon le marché ; discutez de vos besoins spécifiques avec l'équipe Payonus." },
  { q: "Payonus peut-il prendre en charge les flux de paiement des marketplaces ?", a: "Oui. Payonus peut prendre en charge des flux de type marketplace lorsqu'une entreprise doit encaisser des paiements et gérer des décaissements vers plusieurs bénéficiaires, sous réserve de ses exigences spécifiques et de la configuration approuvée." },
  { q: "Pouvons-nous connecter Payonus à notre plateforme existante ?", a: "Oui. Payonus propose une API de paiement permettant d'intégrer les capacités de paiement disponibles à vos plateformes et flux existants. L'approche appropriée dépend de vos exigences techniques et commerciales." },
  { q: "Devons-nous remplacer notre configuration de paiement existante ?", a: "Pas nécessairement. Payonus peut discuter de la façon dont ses capacités de paiement pourraient s'intégrer à votre technologie et à votre opération de paiement existantes." },
  { q: "Que se passe-t-il si nos exigences de paiement sont plus complexes ?", a: "Payonus peut discuter d'implémentations sur mesure et de flux de paiement lorsqu'une configuration standard ne répond pas entièrement à vos exigences opérationnelles." },
  { q: "Que se passe-t-il lorsque nous parlons à Payonus ?", a: "La conversation porte sur votre entreprise, vos marchés, vos flux de paiement, votre configuration existante et vos exigences techniques afin de déterminer si Payonus est adapté." },
];
const faqSchema = faqJsonLd(faqs);

const blocks: IndustryBlock[] = [
  {
    kind: "stats", id: "stats",
    items: [
      { value: "8", label: "Marchés africains" },
      { value: "99%", label: "SLA de disponibilité" },
      { value: "24/7", label: "Surveillance de l'infrastructure" },
    ],
  },
  {
    kind: "bento", id: "problems", leadMock: "ngozi",
    heading: "Lorsque les paiements deviennent plus difficiles à gérer, votre entreprise en ressent l'impact",
    intro: "Encaisser des paiements n'est qu'une partie de la gestion d'une entreprise en ligne. À mesure que les transactions et les marchés se développent, il peut devenir plus difficile de suivre ce qui entre, ce qui sort et ce qui est en attente de règlement.",
    items: [
      { icon: "card", title: "Ventes perdues au paiement", desc: "Lorsque les clients ne peuvent pas finaliser un paiement, une vente potentielle peut être perdue." },
      { icon: "alert", title: "Paiements échoués", desc: "Les tentatives infructueuses peuvent interrompre l'expérience d'achat." },
      { icon: "wallet", title: "Moyens de paiement limités", desc: "Les clients ont besoin d'options de paiement adaptées aux marchés où vous vendez." },
      { icon: "route", title: "Complexité des décaissements", desc: "Payer vendeurs, partenaires ou autres bénéficiaires ajoute une couche supplémentaire à votre opération." },
      { icon: "eye", title: "Suivi des paiements plus difficile", desc: "À mesure que les volumes augmentent, il devient plus difficile de voir ce qui a été encaissé, décaissé et réglé." },
      { icon: "globe", title: "Complexité multi-marchés", desc: "De nouveaux pays peuvent apporter des exigences de paiement et opérationnelles différentes." },
    ],
  },
  {
    kind: "list", id: "manage",
    heading: "Gérez les flux de paiement derrière votre entreprise",
    intro: "Payonus réunit les capacités de paiement dont les entreprises e-commerce peuvent avoir besoin pour encaisser de l'argent, payer des tiers, gérer le règlement, connecter les paiements à leurs systèmes et suivre l'activité de paiement.",
    items: [
      { icon: "card", title: "Encaissez les paiements clients", desc: "Aidez votre entreprise à gérer les paiements clients à mesure que les volumes de transactions augmentent.", href: "/collections", linkLabel: "Infrastructure d'encaissement" },
      { icon: "route", title: "Payez vendeurs, partenaires ou autres bénéficiaires", desc: "Gérez l'activité de paiement entrante et sortante au sein d'une même opération globale.", href: "/payouts", linkLabel: "Infrastructure de décaissement" },
      { icon: "clock", title: "Accédez au règlement", desc: "Gardez un meilleur contrôle sur la circulation des fonds au sein de votre opération de paiement.", href: "/settlements", linkLabel: "Règlement instantané" },
      { icon: "plug", title: "Connectez les paiements à vos systèmes", desc: "Utilisez l'API de paiement Payonus pour connecter les capacités de paiement disponibles à votre plateforme et vos flux existants.", href: "/payment-api", linkLabel: "API de paiement" },
      { icon: "chart", title: "Visualisez ce qui se passe dans vos paiements", desc: "Facilitez la compréhension des transactions que votre entreprise doit gérer.", href: "/analytics", linkLabel: "Analytique & rapports" },
    ],
  },
  {
    kind: "flow", id: "differentiator",
    heading: "Plus qu'un simple moyen d'encaisser des paiements",
    intro: "Le paiement en caisse n'est qu'une partie de votre opération de paiement. Payonus réunit ces capacités afin que la conversation puisse porter sur la façon dont votre entreprise gère les paiements — pas seulement sur la façon dont les clients payent.",
    steps: ["Paiement client", "Encaissements", "Règlement", "Décaissements", "Rapports", "Opérations de l'entreprise"],
  },
  {
    kind: "quote", id: "quote",
    text: "Encaisser des paiements n'est qu'une partie de la gestion d'une entreprise e-commerce.",
  },
  {
    kind: "showcase", id: "fit",
    heading: "Conçu autour de la façon dont votre entreprise fonctionne",
    intro: "Aucune entreprise e-commerce ne gère les paiements exactement de la même façon qu'une autre. Votre modèle économique, vos clients, vos bénéficiaires, vos marchés et votre technologie influencent tous la configuration dont vous avez besoin.",
    items: [
      { icon: "bolt", title: "Entreprises en ligne en croissance", desc: "Une configuration adaptée aux besoins d'encaissement, de décaissement et de rapports qui évoluent avec vous.", illustration: "amara" },
      { icon: "scale", title: "Opérations de plus grande envergure", desc: "Des volumes de transactions plus élevés et des exigences plus complexes.", illustration: "tunde" },
      { icon: "users", title: "Marketplaces", desc: "Encaissez des paiements et gérez des décaissements vers plusieurs bénéficiaires.", illustration: "zainab" },
      { icon: "plug", title: "Votre technologie existante", desc: "Connectez-vous via l'API de paiement à votre plateforme existante.", illustration: "yusuf" },
      { icon: "globe", title: "Opérations multi-marchés", desc: "Les marchés où vous avez besoin d'un accompagnement de paiement.", illustration: "aisha" },
    ],
  },
  {
    kind: "textCta", id: "existing-setup",
    heading: "Vous avez déjà une configuration de paiement ?",
    copy: "Payonus peut s'adapter à la façon dont votre entreprise gère déjà les paiements. Et si vos besoins de paiement sont plus complexes, parlez-nous d'une configuration adaptée au fonctionnement de votre entreprise.",
    cta: { label: "Discuter de vos exigences de paiement", href: "/sales" },
  },
  {
    kind: "trust", id: "trust", split: true,
    heading: "Une infrastructure sur laquelle votre opération de paiement peut compter",
    intro: "Lorsque les paiements sont au cœur de votre entreprise, vous avez besoin de confiance dans l'infrastructure qui les soutient.",
    items: [
      { title: "ISO 27001", desc: "Fait partie du cadre de sécurité de l'information de Payonus." },
      { title: "PCI DSS niveau 1", desc: "Soutient son infrastructure de paiement." },
      { title: "Chiffrement", desc: "Conçu pour protéger les données dans l'ensemble de l'environnement de paiement." },
      { title: "Surveillance de l'infrastructure 24/7", desc: "Soutient la fiabilité de l'environnement de paiement." },
      { title: "SLA de disponibilité de 99 %", desc: "Pour l'infrastructure Payonus." },
      { title: "KYC et pistes d'audit des transactions", desc: "Soutiennent la visibilité et la responsabilisation dans les opérations de paiement." },
    ],
  },
  {
    kind: "textCta", id: "talk",
    heading: "Commencez par votre opération de paiement",
    copy: "Une conversation utile commence par la façon dont votre entreprise gère les paiements aujourd'hui et ce que vous devrez gérer ensuite.",
    cta: { label: "Parler aux ventes", href: "/sales" },
  },
  {
    kind: "faq", id: "faq",
    heading: "Questions fréquentes",
    items: faqs,
  },
  {
    kind: "cta", id: "final-cta",
    heading: "Prêt à discuter de votre configuration de paiement ?",
    subtext: "Que vous soyez prêt à démarrer ou que vous ayez besoin de discuter d'une configuration plus complexe, Payonus peut vous aider à explorer les capacités de paiement et l'approche d'implémentation adaptées à votre entreprise.",
    primaryCta: { label: "Commencer", href: "https://merchantv2.payonus.com/signup", external: true },
    secondaryCta: { label: "Parler aux ventes", href: "/sales" },
  },
];

export default function EcommercePageFr() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqSchema} />
      <IndustryPage
        locale="fr"
        hero={{
          eyebrow: "Secteurs / E-commerce",
          heading: "Passerelle de paiement e-commerce pour les entreprises à travers l'Afrique",
          subtext: "Aidez vos clients à payer tout en gérant les flux de paiement derrière votre entreprise. Payonus prend en charge les encaissements, décaissements, le règlement, l'intégration et la visibilité des paiements dans ses marchés d'opération.",
          primaryCta: { label: "Commencer", href: "https://merchantv2.payonus.com/signup", external: true },
          secondaryCta: { label: "Parler aux ventes", href: "/sales" },
          geoLine: "Présent au Nigéria, au Ghana, au Kenya, en Côte d'Ivoire, en Afrique du Sud, en Zambie, au Sénégal et au Cameroun.",
        }}
        blocks={blocks}
        relatedLinks={[
          { label: "Encaissements", href: "/collections" },
          { label: "API de paiement", href: "/payment-api" },
          { label: "Décaissements", href: "/payouts" },
        ]}
      />
    </>
  );
}
