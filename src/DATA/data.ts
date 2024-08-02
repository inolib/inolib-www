
// Données pour la section "Notre équipe"
import { TeamMember } from '~/lib/types/features/componentTypes/types';
export const teamMembers: TeamMember[] = [
  {
    name: 'Amélie Laurent',
    position: 'Founder & CEO',
    description: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
    image: '/Avatar/Avatar -1.svg',
    alt: 'Amélie Laurent'
  },
  {
    name: 'Nikolas Gibbons',
    position: 'Engineering Manager',
    description: 'Lead engineering teams at Figma, Pitch, and Protocol Labs.',
    image: '/Avatar/Avatar -2.svg',
    alt: 'Nikolas Gibbons'
  },
  {
    name: 'Sienna Hewitt',
    position: 'Product Manager',
    description: 'Former PM for Linear, Lambda School, and On Deck.',
    image: '/Avatar/Avatar -3.svg',
    alt: 'Sienna Hewitt'
  },
  {
    name: 'Lily-Rose Chedjou',
    position: 'Frontend Developer',
    description: 'Former frontend dev for Linear, Coinbase, and Postscript.',
    image: '/Avatar/Avatar -4.svg',
    alt: 'Lily-Rose Chedjou'
  },
  {
    name: 'Zahra Christensen',
    position: 'Backend Developer',
    description: 'Lead backend dev at Clearbit. Former Clearlist and Loom.',
    image: '/Avatar/Avatar -3.svg',
    alt: 'Zahra Christensen'
  },
  {
    name: 'Caitlyn King',
    position: 'Product Designer',
    description: 'Founding design team at Figma. Former Plio, Stripe, and Tile.',
    image: '/Avatar/Avatar -4.svg',
    alt: 'Caitlyn King'
  },
  {
    name: 'Zaid Schwartz',
    position: 'UX Researcher',
    description: 'Lead user research for Slack. Contractor for Netflix and Udacity.',
    image: '/Avatar/Avatar -1.svg',
    alt: 'Zaid Schwartz'
  },
  {
    name: 'Marco Kelly',
    position: 'Customer Success',
    description: 'Lead CX at Wealthsimple. Former PagerDuty and Screen.',
    image: '/Avatar/Avatar -1.svg',
    alt: 'Marco Kelly'
  },
];
export interface ValueItem {
  title: string;
  description: string;
  icon: string;
  alt: string;
}
// Données pour la section "Nos valeurs"
export const valuesData: ValueItem[] = [
  {
    title: 'Share team inboxes',
    description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
    icon: '/Icons/coeur.svg',
    alt: 'Share team inboxes icon'
  },
  {
    title: 'Deliver instant answers',
    description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
    icon: '/Icons/fleche.svg',
    alt: 'Deliver instant answers icon'
  },
  {
    title: 'Manage your team with reports',
    description: 'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.',
    icon: '/Icons/fichier.svg',
    alt: 'Manage your team with reports icon'
  },
  {
    title: 'Connect with customers',
    description: 'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.',
    icon: '/Icons/coeur.svg',
    alt: 'Connect with customers icon'
  },
  {
    title: 'Connect the tools you already use',
    description: 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
    icon: '/Icons/fleche.svg',
    alt: 'Connect the tools you already use icon'
  },
  {
    title: 'Our people make the difference',
    description: 'We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.',
    icon: '/Icons/fichier.svg',
    alt: 'Our people make the difference icon'
  },
];

//Questions et réponses pour la sections FAQ
export const faqs = [
  {
    question: 'Is there a free trial available?',
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
  },
  {
    question: 'Can I change my plan later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will take effect immediately.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'You can cancel your subscription at any time. Your subscription will remain active until the end of the current billing period.'
  }
];
// données sur les services proposées par inolib 
export const services: Service[] = [
  {
    title: 'Accompagnement',
    description: 'Intégration de nos conseils dans votre stratégie de développement et la mise en œuvre des corrections.',
    icon: '/icons/coeur.svg',
    alt: 'Icone d\'accompagnement'
  },
  {
    title: 'Coordination',
    description: 'Création et suivi des tickets d\'anomalies dans votre outil de gestion de projets (Redmine, Jira, Trello, Asana, etc.) pour une conformité optimale.',
    icon: '/icons/fleche.svg',
    alt: 'Icone de coordination'
  },
  {
    title: 'Coaching',
    description: 'Profitez pour chaque réalisation d\'audit de trois heures de coaching en accessibilité numérique pour sensibiliser et booster vos équipes.',
    icon: '/icons/fichier.svg',
    alt: 'Icone de coaching'
  }
];
// données pour le composant Testimonial
export const testimonials = [
  {
    name: 'Sienna Hewitt',
    role: 'Project Manager, Layers',
    image: '/Testimonials/Avatar.svg', 
    text: "Inolib nous a permis d'atteindre les standards d'accessibilité et ainsi d'améliorer notre SEO",
  },// text a changer , mettre les mot clé sur  l'accebilité pour optimiser le SEO 
  {
    name: 'John Doe',
    role: 'CEO, Company',
    image: '/path_to_images/john.jpg', 
    text: "Un service exceptionnel qui a transformé notre approche de l'accessibilité.",
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Director, Brand',
    image: '/path_to_images/jane.jpg', 
    text: "Grâce à Inolib, notre site est désormais accessible à tous et notre SEO s'est considérablement amélioré.",
  },
];

// donnes pour le composant SocialProof
export const texts =[
           "L'inclusivité est la clé - Accessibilité rime avec beauté",
           "L'inclusivité est la clé - Accessibilité rime avec beauté",
           "L'inclusivité est la clé - Accessibilité rime avec beauté",
           "L'inclusivité est la clé - Accessibilité rime avec beauté",
           "L'inclusivité est la clé - Accessibilité rime avec beauté",
           "L'inclusivité est la clé - Accessibilité rime avec beauté"
];

export const Logos =[
  
      {  src:'/ParLogo/laposte.svg', 
        width:500 ,
        height:200,
        alt:'logo de nos clients : la poste'},
    
    {
        src:'/ParLogo/atomoto.svg', 
        width:500 ,
        height:200,
        alt:'logo de nos clients : atomoto'},
   
    {   src:'/ParLogo/med.svg' ,
        width:500 ,
        height:200,
        alt:'logo de nos clients : '},
   
    
       {src:'/ParLogo/3lurryAds.svg', 
        width:500 ,
        height:200, 
        alt:'logo de nos clients : 3lurryAds'}
    
]