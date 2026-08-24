import IndustryPage from "../../../IndustryPage";
import JsonLd from "../../../JsonLd";
import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from "../../../seo";
import { IndustryBlock } from "../../../IndustryBlocks";

export const metadata = pageMetadata({
  title: "Passerelle de paiement pour les entreprises de jeux et paris en ligne en Afrique",
  description: "Prenez en charge les encaissements, les décaissements et un règlement plus rapide pour les jeux et paris en ligne à travers les marchés africains, grâce à une infrastructure de paiement conçue pour les flux de paiement à haute fréquence.",
  path: "/fr/industries/gaming",
  locale: "fr",
  alternatePath: "/industries/gaming",
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", path: "/fr" },
  { name: "Jeux & Paris en ligne", path: "/fr/industries/gaming" },
]);

const faqs = [
  { q: "Quels types d'entreprises de jeux et paris en ligne Payonus peut-il prendre en charge ?", a: "Payonus peut prendre en charge des entreprises à travers l'écosystème du jeu, notamment les paris sportifs, les casinos, les loteries, le fantasy sport, l'esport et d'autres plateformes de jeu pertinentes." },
  { q: "Payonus peut-il prendre en charge des paiements de jeu à haute fréquence ?", a: "Oui. Payonus est conçu pour prendre en charge des flux de paiement à haute fréquence, y compris les encaissements et décaissements liés aux jeux, avec des capacités de règlement plus rapide." },
  { q: "Payonus peut-il prendre en charge des entreprises opérant sur les marchés africains ?", a: "Payonus opère au Nigeria, au Ghana, au Kenya, en Côte d'Ivoire, en Afrique du Sud, en Zambie, au Sénégal et au Cameroun." },
  { q: "Pouvons-nous intégrer Payonus à notre plateforme existante ?", a: "Oui. Payonus peut être intégré aux plateformes et flux de paiement existants via l'API de paiement." },
  { q: "Payonus peut-il prendre en charge des flux de paiement avec des exigences métier spécifiques ?", a: "Oui. Lorsqu'une configuration standard ne répond pas pleinement aux exigences opérationnelles d'une entreprise, Payonus peut prendre en charge des flux de paiement sur mesure." },
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
    kind: "marqueeList", id: "relevance",
    heading: "Conçu autour du fonctionnement des entreprises de jeux et paris en ligne",
    intro: "Les entreprises de jeux et paris en ligne gèrent un flux d'argent constant. Les joueurs doivent déposer des fonds, retirer leurs gains et finaliser leurs transactions sans délais inutiles. Que vous exploitiez un site de paris sportifs, un casino, une loterie, une plateforme de fantasy sport ou une autre entreprise de jeu, votre configuration de paiement doit suivre le rythme de votre activité.",
    items: ["Paris sportifs", "Casinos", "Loteries", "Fantasy sport", "Esport", "Plateformes de jeu"],
  },
  {
    kind: "bento", id: "challenges", leadMock: "chuka",
    heading: "Quand les paiements ralentissent, l'entreprise en ressent l'impact",
    intro: "Des dépôts échoués peuvent interrompre le jeu. Des retraits retardés peuvent frustrer les clients. Un règlement lent peut affecter la trésorerie.",
    items: [
      { icon: "alert", title: "Dépôts échoués ou interrompus", desc: "Peuvent perturber l'expérience du joueur et affecter le flux de paiements entrant dans l'entreprise." },
      { icon: "route", title: "Demandes de retrait fréquentes", desc: "Les processus de décaissement doivent suivre le rythme lorsque les clients s'attendent à accéder à leurs fonds." },
      { icon: "clock", title: "Règlement lent", desc: "Des cycles longs peuvent retarder l'accès aux fonds et compliquer la gestion de la trésorerie." },
      { icon: "eye", title: "Visibilité limitée sur les paiements", desc: "Résoudre les problèmes et comprendre la performance prend plus de temps." },
      { icon: "globe", title: "Davantage de complexité entre les marchés", desc: "Des exigences de paiement et opérationnelles différentes doivent fonctionner ensemble." },
      { icon: "layers", title: "Volumes de paiement croissants", desc: "Les processus doivent suivre le rythme sans créer davantage de travail pour l'équipe." },
    ],
  },
  {
    kind: "list", id: "help",
    heading: "Gardez le volet paiement de votre activité en mouvement",
    intro: "Payonus rassemble les capacités de paiement dont les entreprises de jeux et paris en ligne ont besoin pour encaisser de l'argent, effectuer des décaissements, gérer le règlement et comprendre ce qui se passe dans leur activité de paiement.",
    items: [
      { icon: "card", title: "Gardez les dépôts en mouvement", desc: "Une infrastructure de paiement conçue pour prendre en charge des transactions à haute fréquence.", href: "/collections", linkLabel: "Encaissement" },
      { icon: "route", title: "Gérez les retraits au rythme de votre entreprise", desc: "Des capacités de décaissement conçues pour les entreprises qui font circuler l'argent régulièrement.", href: "/payouts", linkLabel: "Décaissement" },
      { icon: "clock", title: "Accédez plus rapidement aux fonds réglés", desc: "Un règlement plus rapide conçu autour du rythme des paiements de jeu.", href: "/settlements", linkLabel: "Règlement instantané" },
      { icon: "chart", title: "Voyez ce qui se passe dans vos paiements", desc: "Suivez l'activité transactionnelle et la performance des paiements.", href: "/analytics", linkLabel: "Analytique & Rapports" },
    ],
  },
  {
    kind: "split", id: "differentiation", icon: "bolt", mock: "dele",
    heading: "Conçu pour le rythme des paiements de jeu",
    body: [
      "Les paiements de jeu ne s'arrêtent pas au moment du paiement. Les dépôts et retraits peuvent avoir lieu tout au long de la journée, souvent en grand volume. Payonus prend en charge ces flux de paiement à haute fréquence avec un règlement plus rapide, pour aider les entreprises à faire circuler l'argent à mesure que leurs opérations se développent.",
      "De l'encaissement des paiements et de la réalisation des décaissements au règlement et à la visibilité des paiements, Payonus offre aux entreprises de jeux et paris en ligne des capacités de paiement connectées, sans traiter chaque étape du parcours de paiement comme un problème isolé.",
    ],
  },
  {
    kind: "showcase", id: "why",
    heading: "Une configuration de paiement capable de suivre le rythme de votre activité",
    items: [
      { icon: "gauge", title: "Activité de paiement fréquente", desc: "Prend en charge des dépôts et retraits réguliers.", illustration: "dele" },
      { icon: "clock", title: "Règlement plus rapide", desc: "Faites circuler les fonds efficacement après l'activité de paiement.", illustration: "bankApp" },
      { icon: "globe", title: "Conçu pour les marchés africains", desc: "Nigeria, Ghana, Kenya, Côte d'Ivoire, Afrique du Sud, Zambie, Sénégal, Cameroun.", illustration: "aisha" },
      { icon: "plug", title: "Flux de travail flexibles", desc: "Implémentations basées sur API ou sur mesure.", illustration: "yusuf" },
    ],
  },
  {
    kind: "list", id: "business-fit",
    heading: "Des flux de paiement adaptés à votre entreprise",
    intro: "Payonus peut se connecter aux plateformes existantes via son API de paiement et prendre en charge des flux de paiement sur mesure lorsque vos exigences dépassent une configuration standard.",
    items: [
      { icon: "plug", title: "Connectez-vous à votre plateforme existante", desc: "Intégrez Payonus à votre plateforme et vos flux de paiement existants via l'API de paiement.", href: "/payment-api", linkLabel: "API de paiement" },
      { icon: "scale", title: "Accompagnez votre entreprise dans sa croissance", desc: "Votre configuration de paiement peut s'adapter à l'évolution des exigences de paiement et opérationnelles à mesure que votre entreprise se développe." },
    ],
  },
  {
    kind: "textCta", id: "custom-workflow",
    heading: "Construisez autour de vos exigences opérationnelles",
    copy: "Lorsque votre entreprise a besoin de plus qu'une configuration standard, Payonus peut travailler avec vous pour configurer des flux de paiement adaptés à vos exigences opérationnelles.",
    cta: { label: "Parler à notre équipe", href: "/sales" },
  },
  {
    kind: "trust", id: "trust", split: true,
    heading: "Conçu pour des opérations de paiement sûres et fiables",
    intro: "Choisir un prestataire de paiement, c'est confier une partie de votre entreprise à l'infrastructure qui la soutient.",
    items: [
      { title: "ISO 27001", desc: "Sécurité de l'information alignée sur les exigences ISO 27001." },
      { title: "PCI DSS niveau 1", desc: "Sécurité des paiements alignée sur les exigences PCI DSS niveau 1." },
      { title: "KYC et pistes d'audit des transactions", desc: "Plus grande visibilité et traçabilité de l'activité de paiement." },
      { title: "Chiffrement", desc: "Les données de paiement sont protégées à travers l'infrastructure." },
      { title: "Surveillance 24/7", desc: "Des opérations de paiement fiables à toute heure." },
      { title: "SLA de disponibilité de 99 %", desc: "Une infrastructure de paiement fiable." },
    ],
  },
  {
    kind: "faq", id: "faq",
    heading: "Questions fréquentes",
    items: faqs,
  },
  {
    kind: "cta", id: "final-cta",
    heading: "Prêt à améliorer vos opérations de paiement pour le jeu ?",
    subtext: "Dites-nous comment votre entreprise encaisse les paiements, gère les retraits et gère le règlement. Nous discuterons de la configuration de paiement adaptée à votre activité.",
    primaryCta: { label: "Demander une démo", href: "/sales" },
    secondaryCta: { label: "Parler à notre équipe", href: "/sales" },
  },
];

export default function GamingPageFr() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqSchema} />
      <IndustryPage
        industryName="Gaming"
        locale="fr"
        hero={{
          eyebrow: "Secteurs / Jeux & Paris en ligne",
          heading: "Infrastructure de paiement conçue pour les entreprises de jeux et paris en ligne en Afrique",
          subtext: "Gardez les dépôts, retraits et règlements en mouvement à mesure que votre entreprise se développe. Payonus aide les entreprises de jeux et paris en ligne à gérer des flux de paiement à haute fréquence à travers les marchés africains.",
          primaryCta: { label: "Demander une démo", href: "/sales" },
        }}
        blocks={blocks}
        relatedLinks={[
          { label: "API de paiement", href: "/payment-api" },
          { label: "Décaissements", href: "/payouts" },
          { label: "Sécurité", href: "/security" },
        ]}
      />
    </>
  );
}
