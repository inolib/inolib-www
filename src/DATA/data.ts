export interface TeamMember {
  name: string;
  position: string;
  description: string;
  image: string;
  alt: string;
}

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
