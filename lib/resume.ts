// Typed resume content for the FARIDTECH site.
// Source: source/resume-farid-english.txt — kept as data so components map over it.

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
};

export type Project = {
  name: string;
  tagline: string;
  url?: string;
  display?: string; // shown link label when url differs / is partial
  stack: string[];
  description: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Reference = {
  name: string;
  role: string;
  org: string;
};

export const profile = {
  name: "Farid Fehresti",
  brand: "FARIDTECH",
  title: "Full Stack Developer · Technical Lead · AI Integration",
  tagline:
    "I build products that generate revenue and stay in production — from CRM sales systems to international enterprise platforms.",
  summary:
    "Over four years of experience working on projects that directly generate revenue — from CRM sales systems to international enterprise platforms. What has always mattered to me is that the code I write solves a real problem, not just runs. I've led teams, coded directly, and built products that are still in use today.",
} as const;

export const contact = {
  email: "faridfehresti1234@gmail.com",
  phone: "09369310420",
  location: "Tehran, Iran",
  github: "https://github.com/FaridFehresti",
  githubLabel: "github.com/FaridFehresti",
  twitter: "https://twitter.com/farid_fehresti",
  twitterLabel: "@farid_fehresti",
} as const;

export const stats: { value: string; label: string }[] = [
  { value: "4+", label: "Years building revenue products" },
  { value: "10+", label: "Apps shipped to production" },
  { value: "4", label: "International projects delivered" },
  { value: "1:500", label: "Leverage broker UI shipped" },
];

export const experience: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Tandis Mandegar Pardis Iran",
    location: "Tehran",
    period: "Dec 2025 — Present",
    current: true,
  },
  {
    role: "Senior Frontend Developer",
    company: "MondFX & FeneFX",
    location: "Tehran",
    period: "Jun — Nov 2024 · 4 mos",
  },
  {
    role: "Frontend Team Lead",
    company: "Karen System",
    location: "Tehran",
    period: "Apr 2023 — Jun 2024 · 1 yr",
  },
  {
    role: "Full Stack Developer (International Freelancer)",
    company: "Freelancer.com",
    location: "Remote",
    period: "Dec 2023 — Jun 2024 · 5 mos",
  },
  {
    role: "Web Developer (Freelance)",
    company: "Carlancer",
    location: "Tehran",
    period: "Aug 2022 — Dec 2023 · 1 yr 5 mos",
  },
  {
    role: "Frontend Programmer",
    company: "Nayan Fanavar Aria",
    location: "Zanjan",
    period: "Mar 2021 — Jul 2022 · 1 yr",
  },
];

export const projects: Project[] = [
  {
    name: "MondFX",
    tagline: "International Forex & CFD Broker",
    url: "https://mondfx.com",
    display: "mondfx.com",
    stack: ["React", "TypeScript", "RxJS", "TailwindCSS", "Real-time"],
    description:
      "International brokerage platform with 350+ trading instruments (Forex, crypto, gold, indices), leverage up to 1:500 and spreads from 0.0. Winner of Best Broker 2025 at Forex Expo Dubai & Money Expo India.",
  },
  {
    name: "FeneFX",
    tagline: "Persian Prop Trading Platform",
    url: "https://fenefx.com",
    display: "fenefx.com",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Material-UI"],
    description:
      "Persian-language prop trading platform with a challenge purchase system, trader panel, educational academy and 24-hour support. Built for Iranian traders.",
  },
  {
    name: "OneTapCard",
    tagline: "Digital NFC Card Platform",
    url: "https://onetapcard.uk",
    display: "onetapcard.uk",
    stack: ["Next.js", "NestJS", "PostgreSQL", "HubSpot API", "Zapier"],
    description:
      "End-to-end NFC card platform: ordering flow, management panel, HubSpot & Zapier integration and a subscription system. Deployed on Nginx + Linux.",
  },
  {
    name: "House of Traders",
    tagline: "Iran's Largest Trading Competition",
    url: "https://house-of-traders.ir",
    display: "house-of-traders.ir",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Payments", "Real-time"],
    description:
      "Trader talent-identification event platform: registration, live draw, crypto wallet and a real-time timer for seasonal competitions.",
  },
  {
    name: "MadTalk",
    tagline: "Organizational LMS Platform",
    url: "https://panel.beta.madtalk.ir",
    display: "panel.beta.madtalk.ir",
    stack: ["Next.js", "React", "Material-UI", "Ant Design", "RxJS"],
    description:
      "Organizational LMS UI — main modules, admin panel and a course sales system. Clients include the University of Zanjan.",
  },
  {
    name: "Ahangari Holding",
    tagline: "Financial Services & Investment Holding",
    url: "https://ahangariholding.com",
    display: "ahangariholding.com",
    stack: ["Next.js", "TypeScript", "GSAP", "TailwindCSS"],
    description:
      "Website for a holding with offices in Business Bay Dubai — financial services, market education courses and specialized Forex content, with rich GSAP motion.",
  },
  {
    name: "BestInform",
    tagline: "International Travel Booking",
    display: "eu.bestinform",
    stack: ["Angular", "Angular Material", "RxJS", "NgRx", "Sass"],
    description:
      "Led a team of three freelancers to fully build the admin panel and user interface from Figma designs.",
  },
  {
    name: "Deadlock Tools",
    tagline: "Competitive Games Statistics",
    url: "https://deadlocktools.com",
    display: "deadlocktools.com",
    stack: ["Angular", "NestJS", "PostgreSQL", "Nginx", "Linux"],
    description:
      "Full stack development with infrastructure management — Nginx deployment and SSL certificates on a Linux server.",
  },
  {
    name: "TuningCompany",
    tagline: "Car Tuning Calculation",
    url: "https://tuningcompany.co.uk",
    display: "tuningcompany.co.uk",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Material-UI"],
    description:
      "Car parts upgrade-impact calculation system with a content-management panel for admins.",
  },
  {
    name: "Asato",
    tagline: "Insurance Unified Platform",
    display: "ir.to.asa",
    stack: ["Angular 17", "TypeScript", "Ant Design", "RxJS"],
    description:
      "Insurance platform UI and an Angular upgrade from v13 to v17 with complete architectural optimization.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "AI · Agents · Automation",
    items: [
      "Claude Code CLI",
      "AI Agents",
      "LLM Integration",
      "n8n",
      "Prompt Engineering",
      "Webhook Automation",
      "CRM Automation",
      "Parallel Context",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript ES6+",
      "Zustand",
      "Redux",
      "RxJS",
      "NgRx",
      "TailwindCSS",
      "Sass",
      "Material UI",
      "Ant Design",
      "GSAP",
      "Framer Motion",
      "Three.js",
    ],
  },
  {
    title: "API · Backend",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Python",
      "FastAPI",
      "Django",
      "Go",
      "REST",
      "GraphQL",
      "WebHooks",
      "Bash",
    ],
  },
  {
    title: "Database · Infrastructure",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Docker",
      "Nginx",
      "Redis",
      "Git / GitHub",
      "CI/CD",
      "SSL",
      "Linux",
    ],
  },
  {
    title: "Integrations",
    items: ["HubSpot CRM", "Zapier", "Payment Gateway", "Ethers.js", "Figma", "UI/UX"],
  },
];

export const languages: { name: string; level: string }[] = [
  { name: "English", level: "Advanced / Near-Native" },
  { name: "Persian", level: "Native" },
  { name: "Azerbaijani Turkish", level: "Native" },
];

export const education: { title: string; org: string; year: string }[] = [
  { title: "High School Diploma — Mathematics", org: "", year: "2019" },
  { title: "Teaching English Certification (TTC)", org: "Kish Language Institute", year: "2021" },
  { title: "Frontend Internship", org: "Nayan Fanavar Aria", year: "2022" },
];

// Third-party referee phone numbers intentionally omitted from the public site.
export const references: Reference[] = [
  { name: "Reza Sabzi", role: "Senior Colleague", org: "FeneFX & MondFX" },
  { name: "Sorosh Gholami", role: "Senior Colleague", org: "Tandis Mandegar Pardis Iran" },
  { name: "Behrad Jafari", role: "Colleague", org: "Nayan Fanavar Aria" },
  { name: "Mohammad Asadi", role: "Colleague", org: "Karen System" },
];

export const interests: string[] = ["Tennis", "Electric Guitar", "Computer Games"];
