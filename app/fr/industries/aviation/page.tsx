import IndustryPage from "../../../IndustryPage";
import JsonLd from "../../../JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "../../../seo";
import { IndustryBlock } from "../../../IndustryBlocks";

export const metadata = pageMetadata({
  title: "Infrastructure et solutions de paiement pour l'aviation",
  description: "Infrastructure de paiement pour les compagnies aériennes, opérateurs d'avions d'affaires, FBO, MRO et entreprises du secteur aéronautique gérant des paiements complexes, de grande valeur et transfrontaliers.",
  path: "/fr/industries/aviation",
  locale: "fr",
  alternatePath: "/industries/aviation",
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", path: "/fr" },
  { name: "Aviation", path: "/fr/industries/aviation" },
]);

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
    kind: "showcase", id: "payment-flows",
    heading: "Facilitez la gestion des paiements dans votre entreprise aéronautique",
    intro: "Réservations, services d'affrètement, paiements d'agences et autres services peuvent tous générer des flux de paiement différents. Payonus aide à réunir le volet paiement de ces opérations au sein d'une seule infrastructure.",
    items: [
      { icon: "card", title: "Réservations", desc: "Gérez les paiements liés aux réservations des passagers.", illustration: "qrLink" },
      { icon: "layers", title: "Services annexes", desc: "Gérez les paiements des services additionnels proposés en complément de vos réservations principales.", illustration: "zainab" },
      { icon: "building", title: "Paiements corporate", desc: "Prenez en charge les modalités de paiement pour les clients corporate et les comptes professionnels.", illustration: "tunde" },
      { icon: "bolt", title: "Opérations d'affrètement", desc: "Gérez les exigences de paiement pour les services d'affrètement et les réservations de grande valeur.", illustration: "chidi" },
      { icon: "users", title: "Canaux agences", desc: "Gérez les paiements impliquant des agences de voyage et des partenaires commerciaux.", illustration: "milestoneDeal" },
      { icon: "globe", title: "Paiements transfrontaliers", desc: "Prenez en charge l'activité de paiement lorsque vous encaissez auprès de clients situés dans différents marchés.", illustration: "aisha" },
    ],
  },
  {
    kind: "bento", id: "complexity", leadMock: "chidi",
    heading: "Des paiements complexes génèrent plus de travail",
    intro: "La transaction n'est qu'une partie du travail. Des canaux, marchés et processus de règlement fragmentés peuvent générer davantage de travail derrière chaque paiement.",
    items: [
      { icon: "alert", title: "Paiements échoués", desc: "Les transactions échouées peuvent entraîner des réservations perdues et du travail supplémentaire." },
      { icon: "layers", title: "Canaux fragmentés", desc: "La multiplicité des canaux peut compliquer les rapports et le rapprochement." },
      { icon: "globe", title: "Complexité transfrontalière", desc: "Des marchés différents peuvent complexifier la gestion des encaissements et du règlement." },
      { icon: "eye", title: "Visibilité du règlement", desc: "Des données fragmentées compliquent le suivi de l'activité de paiement et du règlement." },
      { icon: "refresh", title: "Remboursements et changements de réservation", desc: "Les modifications de réservation ajoutent de la complexité aux opérations de paiement." },
      { icon: "shield", title: "Fraude et rétrofacturations", desc: "Les paiements de grande valeur nécessitent des contrôles solides sans friction inutile." },
    ],
  },
  {
    kind: "list", id: "outcomes", numbered: true,
    heading: "De meilleurs paiements. De meilleures opérations.",
    intro: "Réduisez la friction des paiements et donnez à votre équipe une meilleure visibilité sur l'opération de paiement.",
    items: [
      { icon: "check", title: "Plus de réservations finalisées", desc: "Réduisez la friction entre l'intention de paiement et l'achat." },
      { icon: "bolt", title: "Un meilleur taux de réussite des paiements", desc: "Aidez les clients à finaliser leurs transactions avec moins d'obstacles." },
      { icon: "eye", title: "Une visibilité de trésorerie plus claire", desc: "Visualisez plus clairement l'activité de paiement et de règlement." },
      { icon: "layers", title: "Moins de travail manuel", desc: "Réduisez la complexité des processus de paiement fragmentés." },
      { icon: "users", title: "Une meilleure expérience client", desc: "Facilitez les paiements sur l'ensemble des canaux clients." },
      { icon: "globe", title: "Prêt pour de nouveaux marchés", desc: "Prenez en charge les opérations de paiement à mesure que votre entreprise se développe." },
    ],
  },
  {
    kind: "cards", id: "capabilities", columns: 3, tint: true,
    heading: "Des opérations de paiement plus connectées",
    intro: "Réunissez les principales capacités de paiement au sein d'une infrastructure qui prend en charge la façon dont l'argent circule dans votre entreprise.",
    items: [
      { icon: "card", title: "Encaissements", desc: "Encaissez des paiements dans toute votre entreprise et prenez en charge les transactions clients sur les canaux pertinents.", href: "/collections", linkLabel: "En savoir plus" },
      { icon: "route", title: "Décaissements", desc: "Faites circuler l'argent là où il doit aller. Prenez en charge les flux de paiement sortants dans votre opération commerciale.", href: "/payouts", linkLabel: "En savoir plus" },
      { icon: "plug", title: "API de paiement", desc: "Utilisez une infrastructure basée sur des API lorsque les capacités de paiement doivent se connecter à votre environnement numérique.", href: "/payment-api", linkLabel: "En savoir plus" },
      { icon: "clock", title: "Règlement instantané", desc: "Réduisez le délai entre les transactions réussies et la visibilité sur les fonds disponibles.", href: "/settlements", linkLabel: "En savoir plus" },
      { icon: "chart", title: "Analytique & Rapports", desc: "Facilitez le suivi, l'analyse et le rapprochement de l'activité de paiement.", href: "/analytics", linkLabel: "En savoir plus" },
      { icon: "globe", title: "Infrastructure multi-marchés", desc: "Nigéria, Ghana, Kenya, Côte d'Ivoire, Afrique du Sud, Zambie, Sénégal et Cameroun." },
    ],
  },
  {
    kind: "split", id: "operational-fit", icon: "route", mock: "yusuf",
    heading: "Faites en sorte que les paiements s'intègrent à la façon dont votre entreprise fonctionne déjà",
    body: [
      "Votre entreprise aéronautique dispose déjà de ses propres systèmes, canaux de paiement et méthodes de gestion des réservations et de l'activité financière. Votre configuration de paiement doit s'intégrer à cet environnement sans créer de travail inutile pour votre équipe.",
    ],
    bullets: [
      "Vos flux de travail — s'articulent autour de la façon dont les paiements circulent déjà à travers les réservations, l'affrètement et les autres opérations.",
      "Vos canaux de paiement — prennent en charge les moyens de paiement des clients, agences et partenaires.",
      "Vos systèmes — connectent les fonctionnalités de paiement là où l'intégration est nécessaire.",
      "Vos rapports — maintiennent la visibilité sur l'activité de paiement et de règlement.",
      "Votre croissance — évite de traiter chaque nouveau marché comme une configuration de paiement distincte.",
    ],
  },
  {
    kind: "list", id: "business-fit",
    heading: "Un accompagnement des paiements pour les différents segments du secteur aéronautique",
    intro: "Les entreprises aéronautiques n'encaissent et ne gèrent pas toutes les paiements de la même façon. Votre configuration de paiement doit refléter le fonctionnement de votre entreprise.",
    items: [
      { icon: "plane", title: "Compagnies aériennes", desc: "Prenez en charge les paiements liés aux réservations, services annexes, voyages d'affaires et clients dans différents marchés." },
      { icon: "bolt", title: "Opérateurs d'affrètement", desc: "Gérez des paiements de grande valeur et des modalités pouvant varier d'une réservation ou d'un client à l'autre." },
      { icon: "building", title: "FBO", desc: "Prenez en charge les paiements pour les services aéronautiques, l'assistance en escale et les autres transactions clients." },
      { icon: "route", title: "Gestion d'aéronefs", desc: "Prenez en charge les paiements pour les services aéronautiques, l'assistance en escale et les autres transactions clients." },
      { icon: "shield", title: "Prestataires MRO", desc: "Gérez des paiements B2B de grande valeur liés à la maintenance, la réparation et les autres services aéronautiques." },
      { icon: "users", title: "Services aéronautiques", desc: "Prenez en charge les paiements auprès des clients, partenaires et canaux commerciaux avec lesquels votre entreprise travaille." },
    ],
  },
  {
    kind: "trust", id: "trust", split: true,
    heading: "Une infrastructure sur laquelle vous pouvez compter",
    intro: "Sécurité, disponibilité et visibilité comptent lorsque les paiements soutiennent des opérations critiques pour l'entreprise.",
    items: [
      { title: "ISO 27001", desc: "Des pratiques de sécurité de l'information reconnues pour la gestion des données de paiement." },
      { title: "PCI DSS niveau 1", desc: "Des normes conçues pour le traitement des transactions par carte." },
      { title: "SLA de disponibilité de 99 %", desc: "Un engagement de disponibilité défini pour l'infrastructure dont dépend votre entreprise." },
      { title: "Surveillance 24/7", desc: "Une surveillance continue qui soutient la fiabilité des opérations de paiement critiques." },
      { title: "Chiffrement", desc: "Protège les informations de paiement sensibles à mesure qu'elles circulent dans vos processus." },
      { title: "KYC & pistes d'audit", desc: "Vérification et un enregistrement plus clair de l'activité de paiement." },
    ],
  },
  {
    kind: "marqueeList", id: "growth",
    heading: "Conçu pour évoluer avec vous",
    intro: "De nouveaux marchés, des volumes plus élevés et des besoins de paiement changeants ne devraient pas nécessiter une configuration de paiement entièrement nouvelle.",
    items: ["Nouveaux marchés", "Besoins de paiement accrus", "Volumes plus élevés", "Complexité accrue", "Opérations étendues", "Exigences changeantes"],
  },
  {
    kind: "cta", id: "final-cta",
    heading: "Parlons de vos paiements",
    subtext: "Dites-nous comment les paiements circulent dans votre entreprise et où vous avez besoin de plus de soutien. Nous pouvons discuter de vos canaux, marchés, profil transactionnel, besoins de règlement et environnement d'intégration.",
    primaryCta: { label: "Parler aux ventes", href: "/sales" },
  },
];

export default function AviationPageFr() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <IndustryPage
        locale="fr"
        hero={{
          eyebrow: "Secteurs / Aviation",
          heading: "Des paiements conçus pour la complexité de l'aviation",
          subtext: "Gérez des paiements de grande valeur et transfrontaliers dans toute votre entreprise sans ajouter de complexité à votre opération.",
          primaryCta: { label: "Parler aux ventes", href: "/sales" },
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
