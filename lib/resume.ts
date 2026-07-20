// Typed resume content for the FARIDTECH site.
// Source: source/resume-farid-english.txt — kept as data so components map over it.

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  cover?: string;
};

export type Project = {
  name: string;
  tagline: string;
  url?: string;
  display?: string; // shown link label when url differs / is partial
  stack: string[];
  description: string;
  cover?: string; // optional cover image in /public (locale-invariant)
  status?: "live" | "down";
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
  title: "High-Performance FinTech UI Engineer · AI Workflow Architect",
  tagline:
    "I design low-latency trading dashboards and build secure, PostgreSQL-backed workflow automations to reduce manual operations.",
  summary:
    "Over five years of experience engineering high-throughput, data-heavy interfaces for international financial platforms and orchestrating automated AI workflows. I specialize in complex state management (RxJS/NgRx/Zustand) for real-time applications, and building scalable API architectures (n8n/NestJS) that directly drive revenue and operational efficiency.",
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
  { value: "5+", label: "Years building low-latency trading UI" },
  { value: "10+", label: "AI & automated workflows shipped" },
  { value: "4", label: "International projects delivered" },
  { value: "2025", label: "Best Broker — Forex Expo Dubai" },
];

export const experience: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Tandis Mandegar Pardis Iran",
    location: "Tehran",
    period: "Dec 2025 — Present",
    current: true,
    cover: "/experience/tm.webp",
  },
  {
    role: "Senior Frontend Developer",
    company: "MondFX & FeneFX",
    location: "Tehran",
    period: "Jun — Nov 2024 · 4 mos",
    cover: "/experience/mf.webp",
  },
  {
    role: "Frontend Team Lead",
    company: "Karen System",
    location: "Tehran",
    period: "Apr 2023 — Jun 2024 · 1 yr",
    cover: "/experience/ks.webp",
  },
  {
    role: "Full Stack Developer (International Freelancer)",
    company: "Freelancer.com",
    location: "Remote",
    period: "Dec 2023 — Jun 2024 · 5 mos",
    cover: "/experience/fr.webp",
  },
  {
    role: "Web Developer (Freelance)",
    company: "Carlancer",
    location: "Tehran",
    period: "Aug 2022 — Dec 2023 · 1 yr 5 mos",
    cover: "/experience/ca.webp",
  },
  {
    role: "Frontend Programmer",
    company: "Nayan Fanavar Aria",
    location: "Zanjan",
    period: "Mar 2021 — Jul 2022 · 1 yr",
    cover: "/experience/nf.webp",
  },
];

export const projects: Project[] = [
  {
    name: "MondFX",
    tagline: "International Forex & CFD Broker",
    url: "https://mondfx.com",
    display: "mondfx.com",
    cover: "/projects/mondfx.webp",
    stack: ["React", "TypeScript", "RxJS", "TailwindCSS", "Real-time"],
    description:
      "International brokerage platform with 350+ data-heavy trading instruments. Engineered high-throughput, low-latency trading dashboards utilizing complex state management (RxJS) to optimize UI performance in heavy data environments. Winner of Best Broker 2025 at Forex Expo Dubai.",
  },
  {
    name: "FeneFX",
    tagline: "Persian Prop Trading Platform",
    url: "https://fenefx.com",
    display: "fenefx.com",
    cover: "/projects/fenefx.webp",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Material-UI"],
    description:
      "Next.js prop trading UI/UX with a challenge purchase system, trader panel, and educational academy. Focused on seamless real-time data handling for Iranian traders.",
  },
  {
    name: "OneTapCard",
    tagline: "Digital NFC Card Platform",
    url: "https://onetapcard.uk",
    display: "onetapcard.uk",
    cover: "/projects/onetapcard.webp",
    stack: ["Next.js", "NestJS", "PostgreSQL", "HubSpot API", "Zapier"],
    description:
      "End-to-end NFC card platform backed by PostgreSQL. Implemented custom webhook receivers and automated business processes via HubSpot & Zapier to reduce manual operations.",
  },
  {
    name: "House of Traders",
    tagline: "Iran's Largest Trading Competition",
    url: "https://ahangariholding.com/house-of-traders",
    display: "ahangariholding.com/house-of-traders",
    cover: "/projects/house-of-traders.webp",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Payments", "Real-time"],
    description:
      "Secure, PostgreSQL-backed talent-identification event platform. Built automated crypto wallet integrations and real-time timers for seasonal competitions.",
  },
  {
    name: "MadTalk",
    tagline: "Organizational LMS Platform",
    url: "https://madtalk.ir",
    display: "madtalk.ir",
    cover: "/projects/madtalk.webp",
    stack: ["Next.js", "React", "Material-UI", "Ant Design", "RxJS"],
    description:
      "Organizational LMS UI — main modules, admin panel and a course sales system. Clients include the University of Zanjan.",
  },
  {
    name: "Ahangari Holding",
    tagline: "Financial Services & Investment Holding",
    url: "https://ahangariholding.com",
    display: "ahangariholding.com",
    cover: "/projects/ahangariholding.webp",
    stack: ["Next.js", "TypeScript", "GSAP", "TailwindCSS"],
    description:
      "Website for a holding with offices in Business Bay Dubai — financial services, market education courses and specialized Forex content, with rich GSAP motion.",
  },
  {
    name: "Travel Theme",
    tagline: "International Travel Booking",
    url: "https://traveltheme.com/ro/",
    display: "traveltheme.com",
    cover: "/projects/traveltheme.webp",
    stack: ["Angular", "Angular Material", "RxJS", "NgRx", "Sass"],
    description:
      "Led a team of three freelancers to fully build the admin panel and user interface from Figma designs.",
  },
  {
    name: "Deadlock Tools",
    tagline: "Competitive Games Statistics",
    display: "deadlocktools.com",
    status: "down",
    stack: ["Angular", "NestJS", "PostgreSQL", "Nginx", "Linux"],
    description:
      "Full stack development with infrastructure management — Nginx deployment and SSL certificates on a Linux server.",
  },
  {
    name: "Tuning Tech",
    tagline: "Car Tuning Calculation",
    url: "https://tuningtech.co.uk",
    display: "tuningtech.co.uk",
    cover: "/projects/tunningcompany.webp",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Material-UI"],
    description:
      "Car parts upgrade-impact calculation system with a content-management panel for admins.",
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
