// Persian (Farsi) resume content — mirrors lib/resume.ts structure.
// Tech names, brands, URLs and dates stay Latin; prose is translated.
import type { Experience, Project, SkillGroup, Reference } from "./resume";

export const profile = {
  name: "فرید فهرستی",
  brand: "FARIDTECH",
  title: "توسعه‌دهنده فول‌استک · سرپرست فنی · یکپارچه‌سازی هوش مصنوعی",
  tagline:
    "محصولاتی می‌سازم که درآمد ایجاد می‌کنند و در محیط واقعی باقی می‌مانند — از سیستم‌های فروش CRM تا پلتفرم‌های سازمانی بین‌المللی.",
  summary:
    "بیش از پنج سال تجربه‌ی کار روی پروژه‌هایی که مستقیماً درآمدزایی می‌کنند — از سیستم‌های فروش CRM تا پلتفرم‌های سازمانی بین‌المللی. آنچه همیشه برایم مهم بوده این است که کدی که می‌نویسم یک مشکل واقعی را حل کند، نه اینکه فقط اجرا شود. تیم رهبری کرده‌ام، مستقیماً کدنویسی کرده‌ام و محصولاتی ساخته‌ام که امروز هم در حال استفاده‌اند.",
} as const;

export const contact = {
  email: "faridfehresti1234@gmail.com",
  phone: "09369310420",
  location: "تهران، ایران",
  github: "https://github.com/FaridFehresti",
  githubLabel: "github.com/FaridFehresti",
  twitter: "https://twitter.com/farid_fehresti",
  twitterLabel: "@farid_fehresti",
} as const;

export const stats: { value: string; label: string }[] = [
  { value: "5+", label: "سال ساخت محصولات درآمدزا" },
  { value: "10+", label: "اپلیکیشن منتشرشده در محیط واقعی" },
  { value: "4", label: "پروژه‌ی بین‌المللی تحویل‌شده" },
  { value: "2025", label: "بهترین بروکر — Forex Expo دبی" },
];

export const experience: Experience[] = [
  {
    role: "توسعه‌دهنده فول‌استک",
    company: "تندیس ماندگار پردیس ایران",
    location: "تهران",
    period: "Dec 2025 — Present",
    current: true,
  },
  {
    role: "توسعه‌دهنده ارشد فرانت‌اند",
    company: "MondFX و FeneFX",
    location: "تهران",
    period: "Jun — Nov 2024 · 4 mos",
  },
  {
    role: "سرپرست تیم فرانت‌اند",
    company: "کارن سیستم",
    location: "تهران",
    period: "Apr 2023 — Jun 2024 · 1 yr",
  },
  {
    role: "توسعه‌دهنده فول‌استک (فریلنسر بین‌المللی)",
    company: "Freelancer.com",
    location: "دورکاری",
    period: "Dec 2023 — Jun 2024 · 5 mos",
  },
  {
    role: "توسعه‌دهنده وب (فریلنس)",
    company: "Carlancer",
    location: "تهران",
    period: "Aug 2022 — Dec 2023 · 1 yr 5 mos",
  },
  {
    role: "برنامه‌نویس فرانت‌اند",
    company: "نایان فناور آریا",
    location: "زنجان",
    period: "Mar 2021 — Jul 2022 · 1 yr",
  },
];

export const projects: Project[] = [
  {
    name: "MondFX",
    tagline: "بروکر بین‌المللی فارکس و CFD",
    url: "https://mondfx.com",
    display: "mondfx.com",
    cover: "/projects/mondfx.webp",
    stack: ["React", "TypeScript", "RxJS", "TailwindCSS", "Real-time"],
    description:
      "پلتفرم کارگزاری بین‌المللی با بیش از 350 ابزار معاملاتی (فارکس، کریپتو، طلا، شاخص‌ها)، اهرم تا 1:500 و اسپرد از 0.0. برنده‌ی بهترین بروکر 2025 در Forex Expo دبی و Money Expo هند.",
  },
  {
    name: "FeneFX",
    tagline: "پلتفرم پراپ‌تریدینگ فارسی",
    url: "https://fenefx.com",
    display: "fenefx.com",
    cover: "/projects/fenefx.webp",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Material-UI"],
    description:
      "پلتفرم پراپ‌تریدینگ فارسی‌زبان با سیستم خرید چالش، پنل تریدر، آکادمی آموزشی و پشتیبانی 24 ساعته. ساخته‌شده برای تریدرهای ایرانی.",
  },
  {
    name: "OneTapCard",
    tagline: "پلتفرم کارت دیجیتال NFC",
    url: "https://onetapcard.uk",
    display: "onetapcard.uk",
    cover: "/projects/onetapcard.webp",
    stack: ["Next.js", "NestJS", "PostgreSQL", "HubSpot API", "Zapier"],
    description:
      "پلتفرم کامل کارت NFC: فرایند سفارش، پنل مدیریت، یکپارچه‌سازی با HubSpot و Zapier و سیستم اشتراک. مستقر روی Nginx + Linux.",
  },
  {
    name: "House of Traders",
    tagline: "بزرگ‌ترین مسابقه‌ی تریدینگ ایران",
    url: "https://house-of-traders.ir",
    display: "house-of-traders.ir",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Payments", "Real-time"],
    description:
      "پلتفرم رویداد استعدادیابی تریدرها: ثبت‌نام، قرعه‌کشی زنده، کیف پول کریپتو و تایمر بلادرنگ برای مسابقات فصلی.",
  },
  {
    name: "MadTalk",
    tagline: "پلتفرم LMS سازمانی",
    url: "https://panel.beta.madtalk.ir",
    display: "panel.beta.madtalk.ir",
    stack: ["Next.js", "React", "Material-UI", "Ant Design", "RxJS"],
    description:
      "رابط کاربری LMS سازمانی — ماژول‌های اصلی، پنل مدیریت و سیستم فروش دوره. از مشتریان: دانشگاه زنجان.",
  },
  {
    name: "Ahangari Holding",
    tagline: "هلدینگ خدمات مالی و سرمایه‌گذاری",
    url: "https://ahangariholding.com",
    display: "ahangariholding.com",
    stack: ["Next.js", "TypeScript", "GSAP", "TailwindCSS"],
    description:
      "وب‌سایت یک هلدینگ با دفاتری در Business Bay دبی — خدمات مالی، دوره‌های آموزش بازار و محتوای تخصصی فارکس، همراه با انیمیشن‌های غنی GSAP.",
  },
  {
    name: "BestInform",
    tagline: "رزرو سفر بین‌المللی",
    display: "eu.bestinform",
    cover: "/projects/bestinform.webp",
    stack: ["Angular", "Angular Material", "RxJS", "NgRx", "Sass"],
    description:
      "رهبری تیمی سه‌نفره از فریلنسرها برای ساخت کامل پنل مدیریت و رابط کاربری از روی طرح‌های Figma.",
  },
  {
    name: "Deadlock Tools",
    tagline: "آمار بازی‌های رقابتی",
    url: "https://deadlocktools.com",
    display: "deadlocktools.com",
    stack: ["Angular", "NestJS", "PostgreSQL", "Nginx", "Linux"],
    description:
      "توسعه‌ی فول‌استک همراه با مدیریت زیرساخت — استقرار Nginx و گواهی‌های SSL روی سرور لینوکس.",
  },
  {
    name: "TuningCompany",
    tagline: "محاسبه‌ی تیونینگ خودرو",
    url: "https://tuningcompany.co.uk",
    display: "tuningcompany.co.uk",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Material-UI"],
    description:
      "سیستم محاسبه‌ی تأثیر ارتقای قطعات خودرو، همراه با پنل مدیریت محتوا برای ادمین‌ها.",
  },
  {
    name: "Asato",
    tagline: "پلتفرم یکپارچه‌ی بیمه",
    display: "ir.to.asa",
    stack: ["Angular 17", "TypeScript", "Ant Design", "RxJS"],
    description:
      "رابط کاربری پلتفرم بیمه و ارتقای Angular از نسخه‌ی 13 به 17 با بهینه‌سازی کامل معماری.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "هوش مصنوعی · ایجنت‌ها · اتوماسیون",
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
    title: "فرانت‌اند",
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
    title: "API · بک‌اند",
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
    title: "پایگاه داده · زیرساخت",
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
    title: "یکپارچه‌سازی‌ها",
    items: ["HubSpot CRM", "Zapier", "Payment Gateway", "Ethers.js", "Figma", "UI/UX"],
  },
];

export const languages: { name: string; level: string }[] = [
  { name: "انگلیسی", level: "پیشرفته / نزدیک به زبان مادری" },
  { name: "فارسی", level: "زبان مادری" },
  { name: "ترکی آذربایجانی", level: "زبان مادری" },
];

export const education: { title: string; org: string; year: string }[] = [
  { title: "دیپلم دبیرستان — ریاضی", org: "", year: "2019" },
  { title: "گواهی تدریس زبان انگلیسی (TTC)", org: "موسسه زبان کیش", year: "2021" },
  { title: "کارآموزی فرانت‌اند", org: "نایان فناور آریا", year: "2022" },
];

export const references: Reference[] = [
  { name: "رضا سبزی", role: "همکار ارشد", org: "FeneFX و MondFX" },
  { name: "سروش غلامی", role: "همکار ارشد", org: "تندیس ماندگار پردیس ایران" },
  { name: "بهراد جعفری", role: "همکار", org: "نایان فناور آریا" },
  { name: "محمد اسدی", role: "همکار", org: "کارن سیستم" },
];

export const interests: string[] = ["تنیس", "گیتار الکتریک", "بازی‌های کامپیوتری"];
