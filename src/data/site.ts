/**
 * Single source of truth for site-wide content and SEO.
 * Update SITE_URL to your production domain before deploying.
 */
export const SITE_URL = 'https://ankushkumar.dev';

export const site = {
  name: 'Ankush Kumar',
  title: 'Ankush Kumar — Frontend & Product Engineer in Ottawa',
  description:
    "Frontend and product engineer in Ottawa. At Trend Micro I'm building the frontend of trendaisecurity.com, the new home of its TrendAI brand, and ship my own products after hours: Hatching, BillingOS, Invitation Day and DeskOS.",
  role: 'Product engineer',
  location: 'Ottawa, ON',
  timeZone: 'America/Toronto',
  email: 'ankushk2507@gmail.com',
  resume: '/Ankush-Kumar-Resume.pdf',
  openToWork: true,
  locale: 'en_CA',
  current: {
    company: 'Trend Micro',
    blurb: 'Building trendaisecurity.com for the TrendAI rebrand',
  },
} as const;

export interface SocialLink {
  label: string;
  href: string;
}

/** Links with an empty href are hidden. Add your GitHub profile URL here. */
export const socials: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ankushkumar0007' },
  { label: 'GitHub', href: '' },
].filter((s) => s.href);

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
];
