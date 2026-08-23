export const site = {
  name: "Sarvsmit Global Enterprise",
  shortName: "SARVSMIT",
  subName: "GLOBAL ENTERPRISE",
  tagline: "Engineering the Future of Consumption",
  positioning: "FMCG R&D & Commercialization Consultancy",
  headline: "Developing the best products from Ideation to Commercialization.",
  supportingCopy:
    "Sarvsmit Global Enterprise is a product innovation and commercialization consultancy focused on helping brands build scalable, differentiated FMCG products.",
  url: "https://sarvsmitglobalenterprise.com",
  email: "info@sarvsmitglobalenterprise.com",
  childCompany: {
    name: "Cultured Cookie Co.",
    url: "https://www.culturedcookieco.com/",
    description: "New York-style slow-fermented sourdough cookies. Incubated & scaled by Sarvsmit.",
  },
} as const;

export type NavSubItem = {
  label: string;
  href: string;
  description?: string;
  isExternal?: boolean;
};

export type BrandPreview = {
  name: string;
  tagline: string;
  badge: string;
  description: string;
  url: string;
  highlights: string[];
};

export type NavItem = {
  label: string;
  href: string;
  isMegaMenu?: boolean;
  brandPreview?: BrandPreview;
  children?: NavSubItem[];
};

export const corporateNavItems: NavItem[] = [
  {
    label: "Brands",
    href: "#case-studies",
    isMegaMenu: true,
    brandPreview: {
      name: "Cultured Cookie Co.",
      tagline: "New York-Style Sourdough Cookies",
      badge: "Flagship Sarvsmit Venture",
      description:
        "Incubated and commercialized by Sarvsmit. Slow-fermented 72-hour sourdough cookies engineered for shelf-life stability, distinct chunky texture, and turnkey manufacturing.",
      url: "https://www.culturedcookieco.com/",
      highlights: [
        "72-Hour Sourdough Culture",
        "Ambient Moisture Barrier",
        "Pan-India Delivery",
      ],
    },
    children: [
      {
        label: "Cultured Cookie Co. ↗",
        href: "https://www.culturedcookieco.com/",
        description: "Visit official live brand website",
        isExternal: true,
      },
      {
        label: "Venture Case Study",
        href: "#case-studies",
        description: "Formulation and scale-up blueprint",
      },
    ],
  },
  {
    label: "Company",
    href: "#about",
    children: [
      { label: "About Sarvsmit", href: "#about", description: "Our mission & 5 disciplines" },
      { label: "Our Approach", href: "#approach", description: "Science-led 5-step process" },
      { label: "Our Vision", href: "#vision", description: "Global FMCG innovation vision" },
    ],
  },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Core Consultancy", href: "#services", description: "4 integrated service pillars" },
      { label: "End-to-End Innovation", href: "#innovation-process", description: "From ideation to launch" },
      { label: "Innovation Framework", href: "#framework", description: "6-stage execution model" },
    ],
  },
  {
    label: "Capabilities",
    href: "#capabilities",
    children: [
      { label: "R&D & Manufacturing", href: "#capabilities", description: "9 core competencies & EPS / CCM" },
      { label: "Categories", href: "#categories", description: "10 specialized food & drink sectors" },
      { label: "6 Gates Viability", href: "#six-gates", description: "Pre-launch commercial verification" },
    ],
  },
  {
    label: "Case Studies",
    href: "#case-studies",
    children: [
      { label: "Featured Case Studies", href: "#case-studies", description: "Platform innovations" },
      { label: "Who We Work With", href: "#who-we-work-with", description: "Startups to global enterprises" },
      { label: "What Makes Us Different", href: "#differentiation", description: "6 core differentiators" },
    ],
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#categories", label: "Categories" },
  { href: "#approach", label: "Approach" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#who-we-work-with", label: "Who We Work With" },
  { href: "#contact", label: "Contact" },
] as const;
