import type { ImageMetadata } from 'astro';
import hatchingLogo from '../assets/logos/hatching-mark.svg';
import billingosLogo from '../assets/logos/billingos-mark.svg';
import invitationLogo from '../assets/logos/invitation-day.png';
import deskosLogo from '../assets/logos/deskos-light.svg';
import curtesiLogo from '../assets/logos/curtesi.webp';

export interface Project {
  name: string;
  kind: string;
  desc: string;
  brand: string;
  logo?: ImageMetadata;
  logoSize: string;
  blend: 'normal' | 'multiply';
  stack: string[];
  /** Omit for products that haven't launched yet. */
  live?: string;
  /** Shown in place of the Visit button when there's no live URL. */
  soon?: string;
  more: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    name: 'Hatching',
    kind: 'Personal finance · AI copilot',
    desc: "Budgeting apps turn you into a bookkeeper. Hatching connects your accounts through Plaid, finds the subscriptions you forgot about, and lets you just ask \"can I afford this?\". The AI copilot answers from your real transactions and goals, and remembers what you told it last week.",
    brand: '#8045E2',
    logo: hatchingLogo,
    logoSize: '26%',
    blend: 'normal',
    stack: ['iOS', 'OpenAI SDK', 'RAG', 'pgvector', 'Plaid'],
    live: 'https://hatchingapp.com',
    more: [{ label: 'App Store', href: 'https://apps.apple.com/us/app/hatching-ai-personal-finance/id6744309218' }],
  },
  {
    name: 'BillingOS',
    kind: 'Open-source SaaS billing',
    desc: 'Every SaaS ends up rebuilding the same billing plumbing: plans, usage meters, checkout, a portal where customers can upgrade or cancel. BillingOS is that whole layer, open source, with embedded checkout and multi-currency support, so the next founder can skip it.',
    brand: '#1570EF',
    logo: billingosLogo,
    logoSize: '24%',
    blend: 'normal',
    stack: ['TypeScript', 'Open source'],
    live: 'https://billingos.dev',
    more: [
      { label: 'Docs', href: 'https://docs.billingos.dev' },
      { label: 'GitHub', href: 'https://github.com/tranquilitybase07/billingos' },
    ],
  },
  {
    name: 'Invitation Day',
    kind: 'Digital wedding invitations',
    desc: "Wedding invites moved to WhatsApp, but the RSVPs still end up in somebody's spreadsheet. Couples design an invite with a live preview, share one link, and track every RSVP, meal choice and plus-one from one dashboard. Free to design, one payment to publish.",
    brand: '#000000',
    logo: invitationLogo,
    logoSize: '42%',
    blend: 'normal',
    stack: ['Web', 'Payments'],
    live: 'https://theinvitation.day',
    more: [],
  },
  {
    name: 'DeskOS',
    kind: 'macOS app',
    desc: 'Checking that everything is fine shouldn\'t take nine browser tabs. DeskOS lives in the Mac notch and turns Linear, GitHub, Stripe, PostHog, Sentry and Slack into rings you can read at a glance. Hover for the detail.',
    brand: '#FBFBFD',
    logo: deskosLogo,
    logoSize: '30%',
    blend: 'normal',
    stack: ['macOS'],
    live: 'https://trydeskos.com',
    more: [],
  },
  {
    name: 'Curtesi',
    kind: 'AI photo editing · iOS',
    desc: 'Good edits take either skill or hours of fiddling with sliders. Curtesi lets you describe the change you want and does the editing for you, right on your iPhone. In the final stretch before launch.',
    brand: '#000000',
    logo: curtesiLogo,
    logoSize: '46%',
    blend: 'normal',
    stack: ['iOS', 'AI'],
    soon: 'Launching soon on iOS',
    more: [],
  },
];

export interface Belief {
  n: string;
  title: string;
  body: string;
  bg: string;
  ink: string;
}

export const beliefs: Belief[] = [
  { n: '01', title: 'Fall for the problem', body: "Not the stack, not the idea. If I can't say who's stuck and why in one sentence, I'm not ready to open the editor.", bg: '#93FA5B', ink: '#0E3B27' },
  { n: '02', title: 'Cut until it hurts', body: 'Every screen, setting and step has to earn its place. The best feature is often the one I deleted.', bg: '#0E3B27', ink: '#FFFFFF' },
  { n: '03', title: "Build like I'll maintain it", body: 'Because I usually do. Typed, tested, readable code is how a small team stays fast in month six.', bg: '#FFFFFF', ink: '#0E3B27' },
  { n: '04', title: 'The last 10% is the product', body: 'Empty states, loading, errors, motion. Nobody screenshots them, but everyone feels them.', bg: '#174A34', ink: '#FFFFFF' },
  { n: '05', title: 'Ship, then watch', body: 'Real usage beats my opinion every time. Release small, see what people actually do, fix that.', bg: '#E2E9E3', ink: '#0E3B27' },
];

export const experience = [
  {
    role: 'Frontend Engineer',
    company: 'Trend Micro · Ottawa, ON',
    years: 'Sep 2025 — now',
    note: "Trend Micro rebranded its enterprise business as TrendAI, and I'm building the frontend of its new website, trendaisecurity.com. I build the shared components and design-system patterns other teams build on, and work with design and product from first sketch to launch.",
  },
  {
    role: 'Senior Frontend Developer',
    company: 'Josh Technology Group (POD.AI) · Gurugram',
    years: 'Oct 2020 — Apr 2024',
    note: 'Three and a half years shipping React, TypeScript and Angular products. Made pages up to 60% faster with code splitting, lazy loading and rendering fixes, extended the component library every team used, and led 8 engineers through reviews, pairing and mentoring.',
  },
];

export const education = [
  { title: 'Postgraduate Diploma, Full-Stack Software Development', school: 'Lambton College', years: '2024 — 26' },
  { title: 'Bachelor of Technology, Computer Science', school: 'Bhagwan Parshuram Institute of Technology', years: '2017 — 21' },
];

export const toolGroups = [
  { label: 'Languages & frameworks', items: ['TypeScript', 'JavaScript', 'React', 'Angular', 'Python', 'Node.js', 'HTML', 'CSS'] },
  { label: 'Product engineering', items: ['Design systems', 'Performance', 'Accessibility', 'REST APIs', 'Cypress'] },
  { label: 'AI & data', items: ['OpenAI SDK', 'RAG', 'pgvector', 'MongoDB', 'Firebase'] },
  { label: 'Tools & platforms', items: ['AWS', 'Docker', 'Webpack', 'Git'] },
];
