export type Category =
  | "brandable"
  | "geo"
  | "tech"
  | "commerce"
  | "wellness"
  | "creative";

export type Tier = "buy" | "offer" | "inquire";

export type DomainListing = {
  slug: string;
  name: string;
  tld: string;
  price: number | null;
  category: Category;
  length: number;
  keywords: string[];
  summary: string;
  why: string[];
  comparable: string;
  featured?: boolean;
  views: number;
};

export const CATEGORIES: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All names" },
  { id: "brandable", label: "Brandable" },
  { id: "geo", label: "Place" },
  { id: "tech", label: "Technology" },
  { id: "commerce", label: "Commerce" },
  { id: "wellness", label: "Wellness" },
  { id: "creative", label: "Creative" },
];

export const TLDS = ["all", ".monster", ".com", ".gold", ".ing", ".ltd"] as const;

export const domains: DomainListing[] = [
  {
    slug: "desigr-monster",
    name: "desigr",
    tld: ".monster",
    price: 24800,
    category: "brandable",
    length: 6,
    keywords: ["design", "studio", "brand", "premium"],
    summary:
      "A short, invented brand for a design house, product studio, or creative agency that wants a name nobody else can occupy.",
    why: [
      "Six letters, one syllable shape, easy to spell once heard.",
      "The .monster TLD is still uncrowded — the exact brand is available as a clean identity.",
      "Works as a studio, marketplace, or product line without locking you into one industry.",
    ],
    comparable: "Invented six-letter brands in this class commonly clear five figures when the TLD is memorable.",
    featured: true,
    views: 184,
  },
  {
    slug: "digitalrealestate-gold",
    name: "digitalrealestate",
    tld: ".gold",
    price: 18500,
    category: "geo",
    length: 18,
    keywords: ["real estate", "digital", "investment", "gold"],
    summary:
      "A category-defining name for a digital property desk, domain fund, or luxury listing brand.",
    why: [
      "States the business in the second-level name.",
      ".gold signals asset quality without a slogan.",
      "Fits a brokerage, a fund, or a media property covering domain and land assets.",
    ],
    comparable: "Exact-match commercial names with a premium TLD are priced as brand assets, not registrations.",
    featured: true,
    views: 96,
  },
  {
    slug: "phxwax-ing",
    name: "phxwax",
    tld: ".ing",
    price: 4200,
    category: "geo",
    length: 6,
    keywords: ["phoenix", "wax", "spa", "local"],
    summary:
      "A local brand for a Phoenix waxing studio. Short, spoken the way the service is booked.",
    why: [
      "City code plus service in six letters.",
      ".ing reads as an action — booking language, not a brochure.",
      "Ready for a single-location spa or a small Valley group.",
    ],
    comparable: "Geo-service names in the low thousands move when the city and trade are both obvious.",
    views: 41,
  },
  {
    slug: "waxmy-hair",
    name: "waxmy",
    tld: ".hair",
    price: 2800,
    category: "wellness",
    length: 5,
    keywords: ["wax", "hair", "beauty", "salon"],
    summary:
      "A direct booking name for hair removal. The extension does half the explaining.",
    why: [
      "Five-letter stem, one clear service.",
      ".hair removes ambiguity that a .com would still have to spell out.",
      "Useful as a campaign domain or a permanent studio brand.",
    ],
    comparable: "Action-plus-extension pairs in beauty typically price as brandables, not as expired inventory.",
    views: 33,
  },
  {
    slug: "script-monster",
    name: "script",
    tld: ".monster",
    price: 9600,
    category: "tech",
    length: 6,
    keywords: ["script", "software", "automation", "developer"],
    summary:
      "A developer-facing brand for tooling, agents, or a writing product that wants more personality than another .dev.",
    why: [
      "Dictionary word. Instant meaning for engineers and writers.",
      ".monster separates it from the crowded script.com aftermarket.",
      "Fits CLI tools, a studio, or an AI writing product.",
    ],
    comparable: "Single English words on new gTLDs with clear product fit sit in the mid four to low five figures.",
    featured: true,
    views: 72,
  },
  {
    slug: "5gar-monster",
    name: "5gar",
    tld: ".monster",
    price: 6400,
    category: "tech",
    length: 4,
    keywords: ["5g", "augmented reality", "telecom", "network"],
    summary:
      "A compact telecom and spatial-computing name. Four characters, two industries, one memorable string.",
    why: [
      "4-character names stay scarce even on new TLDs.",
      "Reads as 5G plus AR without a hyphen.",
      "Fits a lab, a consultancy, or a product launch in connectivity.",
    ],
    comparable: "Short acronyms with a technology reading outperform generic dictionary leftovers.",
    views: 58,
  },
  {
    slug: "5gcloud-monster",
    name: "5gcloud",
    tld: ".monster",
    price: 5100,
    category: "tech",
    length: 7,
    keywords: ["5g", "cloud", "edge", "network"],
    summary:
      "An edge-and-cloud name for operators, integrators, and infrastructure content.",
    why: [
      "Two buyer keywords in one token.",
      "No hyphen, no number-word clash.",
      "Works as a product, a publication, or a services firm.",
    ],
    comparable: "Compound infrastructure names in this range sell to operators who need the keyword in the URL.",
    views: 27,
  },
  {
    slug: "dwntwnphx",
    name: "dwntwnphx",
    tld: ".com",
    price: 3200,
    category: "geo",
    length: 9,
    keywords: ["downtown", "phoenix", "city", "guide"],
    summary:
      "A city guide or downtown brand for Phoenix. Spoken as “downtown phx,” typed without the vowels.",
    why: [
      ".com still matters for local media and civic brands.",
      "Compresses a two-word place name into something ownable.",
      "Useful for events, guides, retail districts, or a membership club.",
    ],
    comparable: "Compressed city names on .com in secondary markets usually clear the low thousands.",
    views: 22,
  },
  {
    slug: "sewerlinerenewal",
    name: "sewerlinerenewal",
    tld: ".com",
    price: 7500,
    category: "commerce",
    length: 17,
    keywords: ["sewer", "liner", "renewal", "contractor"],
    summary:
      "An exact-match commercial name for trenchless contractors. The search query is the domain.",
    why: [
      "Matches how facility managers and homeowners search.",
      ".com exact match still converts in home services.",
      "No branding translation required — the name is the offer.",
    ],
    comparable: "Exact-match service .coms with local intent price on lead value, not on length.",
    views: 19,
  },
  {
    slug: "medicalsmarketing",
    name: "medicalsmarketing",
    tld: ".com",
    price: 8900,
    category: "commerce",
    length: 17,
    keywords: ["medical", "marketing", "clinic", "agency"],
    summary:
      "A category name for a healthcare marketing practice. Clear to a clinic administrator on first read.",
    why: [
      "Buyer language, not agency jargon.",
      "Works as the firm name or as a campaign property.",
      ".com keeps it credible next to a compliance-sensitive client list.",
    ],
    comparable: "Professional-service exact matches in healthcare marketing hold mid-four to low-five pricing.",
    views: 31,
  },
  {
    slug: "agriculturalrobotics-ltd",
    name: "agriculturalrobotics",
    tld: ".ltd",
    price: 12000,
    category: "tech",
    length: 20,
    keywords: ["agriculture", "robotics", "agtech", "company"],
    summary:
      "A company-grade name for an agtech venture. The extension already says limited company.",
    why: [
      "Category plus technology in one string.",
      ".ltd reads as a registered firm, useful in the UK and Commonwealth.",
      "Serious enough for investors, specific enough for customers.",
    ],
    comparable: "Sector-defining names on corporate TLDs are acquired as the company, not as a redirect.",
    featured: true,
    views: 44,
  },
  {
    slug: "cognitiondesk",
    name: "cognitiondesk",
    tld: ".com",
    price: null,
    category: "creative",
    length: 13,
    keywords: ["cognition", "ai", "research", "brand"],
    summary:
      "An open name for an AI research desk or editorial brand. Price is by conversation — the fit matters more than a sticker.",
    why: [
      "Two real words, no hyphen.",
      ".com, so it can sit on a letterhead.",
      "Broad enough for a lab, a newsletter, or a product.",
    ],
    comparable: "Two-word .coms in this class are negotiated. Inquire for a written range.",
    views: 15,
  },
];

export function fqdn(d: Pick<DomainListing, "name" | "tld">) {
  return `${d.name}${d.tld}`;
}

export function formatPrice(price: number | null) {
  if (price == null) return "Make offer";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export function tierOf(price: number | null): Tier {
  if (price == null) return "inquire";
  if (price >= 10000) return "offer";
  return "buy";
}

export function getDomain(slug: string) {
  return domains.find((d) => d.slug === slug);
}

export const recentSales = [
  { name: "cenpho.wax", price: 1800, when: "Aug 2026" },
  { name: "valleyair.clinic", price: 2400, when: "Jun 2026" },
  { name: "quietgrid.com", price: 6100, when: "Mar 2026" },
];
