// Données pour la section "Notre équipe"
import type { JobOffer, Service, TeamMember, ValueItem } from "~/lib/types/features/componentTypes/types";

export const teamMembers: TeamMember[] = [
  {
    name: "Amélie Laurent",
    position: "Founder & CEO",
    description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    image: "/Avatar/Avatar -1.svg",
    alt: "",
  },
  {
    name: "Nikolas Gibbons",
    position: "Engineering Manager",
    description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    image: "/Avatar/Avatar -2.svg",
    alt: "",
  },
  {
    name: "Sienna Hewitt",
    position: "Product Manager",
    description: "Former PM for Linear, Lambda School, and On Deck.",
    image: "/Avatar/Avatar -3.svg",
    alt: "",
  },
  {
    name: "Lily-Rose Chedjou",
    position: "Frontend Developer",
    description: "Former frontend dev for Linear, Coinbase, and Postscript.",
    image: "/Avatar/Avatar -4.svg",
    alt: "",
  },
  {
    name: "Zahra Christensen",
    position: "Backend Developer",
    description: "Lead backend dev at Clearbit. Former Clearlist and Loom.",
    image: "/Avatar/Avatar -3.svg",
    alt: "",
  },
  {
    name: "Caitlyn King",
    position: "Product Designer",
    description: "Founding design team at Figma. Former Plio, Stripe, and Tile.",
    image: "/Avatar/Avatar -4.svg",
    alt: "",
  },
  {
    name: "Zaid Schwartz",
    position: "UX Researcher",
    description: "Lead user research for Slack. Contractor for Netflix and Udacity.",
    image: "/Avatar/Avatar -1.svg",
    alt: "",
  },
  {
    name: "Marco Kelly",
    position: "Customer Success",
    description: "Lead CX at Wealthsimple. Former PagerDuty and Screen.",
    image: "/Avatar/Avatar -1.svg",
    alt: "",
  },
];

// Données pour la section "Nos valeurs"
export const valuesData: ValueItem[] = [
  {
    title: "Accessibilité en priorité",
    description:
      "Nous créons des sites à la fois élégants et accessibles, permettant à tous de naviguer sans obstacle.",
    icon: "/Icons/coeur.svg",
    alt: "",
  },
  {
    title: "Rigueur et passion",
    description:
      "Une équipe jeune, experte et dévouée qui place la qualité et l'innovation au cœur de chaque projet numérique.",
    icon: "/Icons/fleche.svg",
    alt: "",
  },
  {
    title: "Esthétique et inclusion",
    description:
      "Nos designs allient beauté et accessibilité, garantissant une expérience optimale pour tous les utilisateurs.",
    icon: "/Icons/fichier.svg",
    alt: "",
  },
  {
    title: "Audit d'accessibilité",
    description:
      "Nous réalisons des audits complets pour identifier les barrières et fournir des solutions sur mesure, conformes aux normes.",
    icon: "/Icons/coeur.svg",
    alt: "",
  },
  {
    title: "Formations spécialisées",
    description:
      "Nous proposons des formations adaptées pour sensibiliser vos équipes aux meilleures pratiques en accessibilité numérique.",
    icon: "/Icons/fleche.svg",
    alt: "",
  },
  {
    title: "Expertise inclusive",
    description:
      "Grâce à notre savoir-faire, nous vous accompagnons dans la création de solutions digitales accessibles et inclusives.",
    icon: "/Icons/fichier.svg",
    alt: "",
  },
];

//Questions et réponses pour la sections FAQ
export const faqs = [
  {
    question: "Combien coûte un audit de conformité RGAA ?",
    answer:
      "Le coût dépend de la complexité et du nombre de pages à auditer. Contactez-nous pour un devis personnalisé.",
  },
  {
    question: "Quelle est la durée de réalisation de l’audit ?",
    answer: "Un audit prend généralement entre 3 et 15 jours.",
  },
  {
    question: "Pourquoi réaliser un audit de conformité ?",
    answer:
      "<p>L'accessibilité numérique est une exigence légale, avec des pénalités pouvant atteindre <strong>20 000 euros</strong> par an et par application en cas de non-respect. Depuis le 1er janvier, cette amende a été portée à <strong>50 000 euros</strong> pour les services publics en cas de non-conformité. En utilisant nos services, vous minimisez le risque juridique en France et à l'international, tout en promouvant l'inclusion des personnes en situation de handicap.</p>" +
      "<p>La loi de 2005 sur l'accessibilité numérique s'applique aux entités suivantes :</p>" +
      "<ul> <li>Les <strong>personnes morales de droit public</strong>.</li>" +
      "<li>Les <strong>personnes morales de droit privé</strong> exerçant une mission de service public ou d'intérêt général.</li>" +
      "<li>Depuis 2019, les <strong>entreprises réalisant un chiffre d'affaires supérieur à 250 millions d'euros</strong> en France.</li> </ul>" +
      " <p>À partir de 2025, la réglementation européenne sur l'accessibilité numérique sera renforcée et s'appliquera à <strong>toutes les entreprises ayant un chiffre d'affaires supérieur à 2 millions d'euros</strong> et employant au moins <strong>10 collaborateurs</strong>.</p>",
  },
];

// données sur les services proposées par inolib
export const services: Service[] = [
  {
    title: "Accompagnement",
    description:
      "Intégration de nos conseils dans votre stratégie de développement et la mise en œuvre des corrections.",
    icon: "/Icons/coeur.svg",
    alt: "",
  },
  {
    title: "Coordination",
    description:
      "Création et suivi des tickets d'anomalies dans votre outil de gestion de projets (Redmine, Jira, Trello, Asana, etc.) pour une conformité optimale.",
    icon: "/Icons/fleche.svg",
    alt: "",
  },
  {
    title: "Coaching",
    description:
      "Profitez pour chaque réalisation d'audit de trois heures de coaching en accessibilité numérique pour sensibiliser et booster vos équipes.",
    icon: "/Icons/fichier.svg",
    alt: "",
  },
];

// données pour le composant Testimonial
export const testimonials = [
  {
    name: "Sienna Hewitt",
    role: "Project Manager, Layers",
    image: "/Testimonials/Avatar.svg",
    text: "Inolib nous a permis d'atteindre les standards d'accessibilité et ainsi d'améliorer notre SEO",
  }, // text a changer , mettre les mot clé sur  l'accebilité pour optimiser le SEO
  {
    name: "John Doe",
    role: "CEO, Company",
    image: "/path_to_images/john.jpg",
    text: "Un service exceptionnel qui a transformé notre approche de l'accessibilité.",
  },
  {
    name: "Jane Smith",
    role: "Marketing Director, Brand",
    image: "/path_to_images/jane.jpg",
    text: "Grâce à Inolib, notre site est désormais accessible à tous et notre SEO s'est considérablement amélioré.",
  },
];

// donnes pour le composant SocialProof
export const texts = [
  "L'inclusivité est la clé - Accessibilité rime avec beauté",
  "L'inclusivité est la clé - Accessibilité rime avec beauté",
  "L'inclusivité est la clé - Accessibilité rime avec beauté",
  "L'inclusivité est la clé - Accessibilité rime avec beauté",
  "L'inclusivité est la clé - Accessibilité rime avec beauté",
  "L'inclusivité est la clé - Accessibilité rime avec beauté",
];

export const Logos = [
  { src: "/ParLogo/laposte.svg", width: 500, height: 200, alt: "logo de nos clients : la poste" },

  {
    src: "/ParLogo/atomoto.svg",
    width: 200,
    height: 200,
    alt: "logo de nos clients : atomoto",
  },

  { src: "/ParLogo/med.svg", width: 150, height: 100, alt: "logo de nos clients : " },

  { src: "/ParLogo/3lurryAds.svg", width: 150, height: 200, alt: "logo de nos clients : 3lurryAds" },
];

// données pour le composant CarrerSection
export const jobOffers: JobOffer[] = [
  {
    title: "Product Designer",
    location: "Lyon, France",
    type: "Full-time",
    salaryRange: "80k - 100k",
  },
  {
    title: "UX Designer",
    location: "Lyon, France",
    type: "Full-time",
    salaryRange: "80k - 100k",
  },
  {
    title: "Frontend Developer",
    location: "Lyon, France",
    type: "Full-time",
    salaryRange: "$80k - $100k",
  },
];
