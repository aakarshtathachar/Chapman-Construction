import {
  Car,
  Droplets,
  Fence,
  Hammer,
  Home,
  Layers,
  LayoutGrid,
  LifeBuoy,
  Palette,
  ShieldCheck,
  Sparkles,
  Timer,
  Waves,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export const BUSINESS = {
  name: 'Chapman Construction',
  shortName: 'Chapman',
  poolsDivision: 'Chapman Pools and Spas',
  title: 'Pools · Septic · Homes',
  tagline: 'For over 40 years, a one-stop shop for any construction project, from start to finish.',
  phone: '508-277-8864',
  phoneHref: 'tel:+15082778864',
  years: '40+',
};

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Pools', to: '/pools' },
  { label: 'Septic', to: '/septic' },
  { label: 'Homes & Remodels', to: '/homes' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export const PAGE_TITLES: Record<string, string> = {
  '/': 'Chapman Construction | Fiberglass Pools, Septic Systems, Custom Homes & Remodels',
  '/pools': 'Fiberglass Pools | Chapman Pools and Spas',
  '/septic': 'Septic Systems | Chapman Construction',
  '/homes': 'Custom Homes, Additions & Remodels | Chapman Construction',
  '/about': 'About Us | Chapman Construction',
  '/contact': 'Contact Us | Chapman Construction',
};

export type ImageSize = 800 | 1600 | 2400;

export const workImage = (slug: string, size: ImageSize) => `/images/work/${slug}-${size}.webp`;

export interface Division {
  name: string;
  short: string;
  to: string;
  icon: LucideIcon;
  image: string;
  description: string;
  highlights: string[];
}

export const DIVISIONS: Division[] = [
  {
    name: 'Fiberglass Pools & Spas',
    short: 'Pools',
    to: '/pools',
    icon: Waves,
    image: 'pool-2',
    description:
      'Chapman Pools and Spas Div. installs handcrafted fiberglass pools that are durable, easy to maintain, and built to turn your backyard into a place for joy and relaxation.',
    highlights: ['Fiberglass pools', 'Built-in spas', 'Patios and backyard redesign'],
  },
  {
    name: 'Septic Systems',
    short: 'Septic',
    to: '/septic',
    icon: Droplets,
    image: 'septic-2',
    description:
      'New septic systems and replacements, installed by a crew with the equipment and site-work experience to handle the job from excavation to final grading.',
    highlights: ['New installations', 'System replacements', 'Excavation and site work'],
  },
  {
    name: 'Homes, Additions & Remodels',
    short: 'Homes',
    to: '/homes',
    icon: Home,
    image: 'home-after',
    description:
      'From custom multimillion-dollar homes to additions, basements, garages, and decks, we take your ideas and turn them into reality.',
    highlights: ['Custom homes', 'Additions', 'Basements, garages and decks'],
  },
];

export const STATS = [
  { value: '40+', label: 'Years in construction' },
  { value: '3', label: 'Specialties: pools, septic and homes' },
  { value: '1', label: 'Team from design to final walkthrough' },
];

export const ABOUT = {
  whatWeDo:
    'For over 40 years, Chapman Construction has built a reputation for handling construction projects from start to finish. The company has the resources, skills, equipment, and knowledge to handle any project, from custom multimillion-dollar homes to custom backyard space redesign. Chapman Construction is a one-stop shop for any construction project.',
  workingTogether:
    'Chapman Construction offers an end-to-end client experience, including seamless communication, budgeting, staffing, on-site organization, and quality craftsmanship.',
};

export const WORKING_TOGETHER = [
  { title: 'Seamless communication', description: 'You always know where your project stands and who to call.' },
  { title: 'Budgeting', description: 'Clear planning up front so your project stays on track.' },
  { title: 'Staffing', description: 'The right crew and the right equipment, scheduled for every phase.' },
  { title: 'On-site organization', description: 'A clean, well-run job site from the first dig to the final walkthrough.' },
  { title: 'Quality craftsmanship', description: 'Four decades of experience in every detail we build.' },
];

export const PROCESS = [
  { title: 'Tell us about it', description: 'Call or send a message with a few details about your project.' },
  { title: 'Plan and design', description: 'We walk the site, talk through your goals, and put together a plan and budget.' },
  { title: 'Build', description: 'Our crew, equipment, and project management take it from groundbreaking on.' },
  { title: 'Enjoy', description: 'We walk through the finished project with you, so you can start enjoying it.' },
];

/* ---------------- Pools ---------------- */

export const POOLS_INTRO =
  "With Chapman Construction's experience and the quality of these fiberglass pools, Chapman Pools and Spas Div. provides a superior product and service to enhance your home and lifestyle. Chapman Pools and Spas builds relationships and creates spaces for joy and relaxation. Our company's knowledge, staff, and resources can truly turn your dream into a reality.";

export interface Feature {
  title: string;
  icon: LucideIcon;
  description: string;
}

export const POOL_BENEFITS: Feature[] = [
  {
    title: 'Exceptional Quality and Durability',
    icon: ShieldCheck,
    description:
      'The pools are handcrafted with meticulous hand-laid fiberglass construction, featuring multiple layers of fiberglass and a thick gel coat for protection and longevity. Fiberglass is known for its strength, durability, and resistance to cracking, fading, harsh weather, and chemicals.',
  },
  {
    title: 'Ease of Maintenance',
    icon: Sparkles,
    description:
      'Fiberglass pools have a smooth, non-porous surface that inhibits algae growth and requires less cleaning. The non-porous surface reduces the need for chemicals, saving on maintenance costs and promoting a healthier swimming environment.',
  },
  {
    title: 'Swift Installation',
    icon: Timer,
    description:
      'Fiberglass pools arrive pre-manufactured, reducing installation time and minimizing disruption to your home and yard.',
  },
  {
    title: 'Design Flexibility and Customization',
    icon: Palette,
    description:
      'Fiberglass pools come in many shapes, sizes, and colors, including classic or free-form designs. Personalize yours with built-in spas, tanning ledges, water features, and LED lighting.',
  },
  {
    title: 'Enhanced Safety',
    icon: LifeBuoy,
    description:
      'Fiberglass pools include features like non-slip surfaces, shallow areas, and built-in steps and benches. Pool covers, alarms, and fencing can also be added.',
  },
];

export const POOL_COMPARISON = {
  intro:
    "Concrete pools crack and have a much rougher surface. In contrast, a fiberglass pool's slick feel offers a more enjoyable swimming experience, with no scratches on sensitive hands and feet, and helps minimize algae growth. Other pool alternatives can tear, whereas a fiberglass pool will maintain its flawless finish over time.",
  dog: 'Have a dog? No problem. Relax and be worry-free while your furry friend enjoys the water, knowing no punctures or damage will occur.',
  rows: [
    { label: 'Surface feel', fiberglass: 'Smooth and slick, gentle on hands and feet', other: 'Concrete is rough and can scratch' },
    { label: 'Cracking', fiberglass: 'Resists cracking and fading', other: 'Concrete pools are prone to cracking' },
    { label: 'Tears and punctures', fiberglass: 'No tears, even with dogs in the pool', other: 'Liner alternatives can tear' },
    { label: 'Algae', fiberglass: 'Non-porous surface inhibits algae', other: 'Porous surfaces hold algae' },
    { label: 'Installation', fiberglass: 'Arrives pre-manufactured for a swift install', other: 'Built on site over a longer schedule' },
  ],
};

/* ---------------- Septic ---------------- */

export const SEPTIC_SERVICES: Feature[] = [
  {
    title: 'New Septic Installations',
    icon: LayoutGrid,
    description:
      'Complete septic systems for new homes and new builds, from excavation and tank placement to the leach field and final grading.',
  },
  {
    title: 'System Replacements',
    icon: Wrench,
    description:
      'When an older system is failing or no longer up to the job, we remove and replace it with a new system built to last.',
  },
  {
    title: 'Leach Fields',
    icon: Layers,
    description:
      'Properly built distribution and leach fields, laid out carefully with clean stone, piping, and the right materials for your site.',
  },
  {
    title: 'Excavation & Site Work',
    icon: Hammer,
    description:
      'Our own equipment and experienced operators handle the digging, backfill, and restoration, so your yard is put back together when we leave.',
  },
];

/* ---------------- Homes ---------------- */

export interface Project {
  title: string;
  icon: LucideIcon;
  description: string;
}

export const HOME_PROJECTS: Project[] = [
  {
    title: 'Building Your Dream Home',
    icon: Home,
    description:
      'We take your thoughts, ideas, needs, and DREAMS and turn them into reality. When working with us, we start by designing your home in a 3D rendering program, so in no time you can see everything about the house before we even break ground: colors, room sizes, interior trim design, kitchen layouts, window styles, and beyond.',
  },
  {
    title: 'Creating a Beautiful Addition',
    icon: LayoutGrid,
    description:
      'When you have a beautiful home but want to add just a little more, or a lot more, an addition is always perfect. Anything from a sunroom to a game room to an amazing family great room to host family gatherings in. We can add that missing piece to make your home complete and put a smile on your face every time you walk in the front door.',
  },
  {
    title: 'Finishing Your Unused Basement',
    icon: Layers,
    description:
      'Finishing a basement adds usable space to the home. An otherwise dark and dreary space can be transformed into a recreation area, a kids play area, organized storage, or a little retreat for visiting guests. It is an unexpected area that adds so much to an existing home.',
  },
  {
    title: 'Building That Dream Garage',
    icon: Car,
    description:
      "Maybe you have more vehicles than your current garage can hold, or you don't have one at all. Or maybe you want a new shop for your hobby or your next project. A garage can never be big enough, and adding on or building another one is always something to look forward to.",
  },
  {
    title: 'Adding or Replacing a Deck',
    icon: Fence,
    description:
      'If you have an older deck that is starting to splinter or you just want a new look, replacing it will add value and curb appeal to your home. Or maybe you want a new spot to sit in the sun and have friends over for a cookout. We install all deck types, including but not limited to AZEK composite decking, cedar, and pressure treated.',
  },
];

/* ---------------- Gallery ---------------- */

export type WorkCategory = 'Pools' | 'Septic' | 'Homes';

export interface WorkPhoto {
  slug: string;
  category: WorkCategory;
  title: string;
  alt: string;
  orientation: 'landscape' | 'portrait';
  featured?: boolean;
}

export const WORK: WorkPhoto[] = [
  {
    slug: 'pool-3',
    category: 'Pools',
    title: 'Free-form pool with attached spa',
    alt: 'Free-form fiberglass pool with a raised spa, stamped concrete patio, and white stone border',
    orientation: 'landscape',
    featured: true,
  },
  {
    slug: 'home-after',
    category: 'Homes',
    title: 'Waterfront custom home',
    alt: 'Finished three-story gray waterfront home with large windows and a wide deck facing the beach',
    orientation: 'portrait',
  },
  {
    slug: 'pool-2',
    category: 'Pools',
    title: 'Rectangular pool with built-in steps',
    alt: 'Rectangular blue fiberglass pool with built-in steps, a concrete deck, and lounge chairs behind a black fence',
    orientation: 'landscape',
  },
  {
    slug: 'septic-2',
    category: 'Septic',
    title: 'Pressure distribution system',
    alt: 'Septic pressure distribution piping laid out in a rectangle over a prepared sand bed',
    orientation: 'portrait',
  },
  {
    slug: 'pool-1',
    category: 'Pools',
    title: 'Pool and patio',
    alt: 'Kidney-shaped fiberglass pool with a brown coping edge and a wide concrete patio with lounge chairs',
    orientation: 'landscape',
  },
  {
    slug: 'pool-4',
    category: 'Pools',
    title: 'Pool with paver patio at sunset',
    alt: 'Rectangular fiberglass pool surrounded by a large gray paver patio with trees behind',
    orientation: 'landscape',
  },
  {
    slug: 'home-framing',
    category: 'Homes',
    title: 'Waterfront home, framing',
    alt: 'Two-story waterfront home being framed on raised pilings above the beach',
    orientation: 'landscape',
    featured: true,
  },
  {
    slug: 'septic-1',
    category: 'Septic',
    title: 'Leach field installation',
    alt: 'Septic leach field with white distribution pipes running over crushed stone',
    orientation: 'portrait',
  },
  {
    slug: 'pool-install',
    category: 'Pools',
    title: 'Pool installation underway',
    alt: 'Excavator digging in a backyard while a fiberglass pool shell is set into the ground',
    orientation: 'landscape',
  },
  {
    slug: 'home-before',
    category: 'Homes',
    title: 'Waterfront home, sheathed and wrapped',
    alt: 'Three-story home wrapped in house wrap on pilings, with the ocean in the background',
    orientation: 'landscape',
  },
];

export const workByCategory = (category: WorkCategory) => WORK.filter((photo) => photo.category === category);

export const PROJECT_TYPES = [
  'Fiberglass Pool',
  'Septic System',
  'New Custom Home',
  'Addition',
  'Basement Finishing',
  'Garage',
  'Deck',
  'Other',
];
