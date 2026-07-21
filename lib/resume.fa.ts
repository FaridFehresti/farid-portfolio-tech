// Persian (Farsi) resume content — mirrors lib/resume.ts structure.
// Tech names, brands, URLs and dates stay Latin; prose is translated.
import type { Experience, Project, SkillGroup, Reference } from "./resume";

export const profile = {
  name: "فرید فهرستی",
  brand: "FARIDTECH",
  metaTitle: "فرید فهرستی — مهندس ارشد رابط کاربری و معمار هوش مصنوعی",
  title: "مهندس رابط کاربری پرفورمنس‌بالا برای FinTech · معمار جریان کاری هوش مصنوعی",
  tagline:
    "طراحی داشبوردهای معاملاتی با تأخیر پایین و ساخت اتوماسیون‌های امن بر بستر PostgreSQL برای کاهش عملیات دستی.",
  summary:
    "بیش از پنج سال تجربه مهندسی رابط‌های کاربری پربازده و مبتنی بر داده برای پلتفرم‌های مالی بین‌المللی و هماهنگ‌سازی جریان‌های کاری خودکار هوش مصنوعی. تخصص من در مدیریت استیت‌های پیچیده (RxJS/NgRx/Zustand) برای برنامه‌های بلادرنگ و ساخت معماری‌های مقیاس‌پذیر API (n8n/NestJS) است که مستقیماً باعث افزایش درآمد و بهره‌وری عملیاتی می‌شوند.",
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
  { value: "5+", label: "سال ساخت رابط کاربری معاملاتی با تأخیر پایین" },
  { value: "10+", label: "جریان کاری خودکار و هوش مصنوعی منتشرشده" },
  { value: "4", label: "پروژه‌ی بین‌المللی تحویل‌شده" },
  { value: "2025", label: "بهترین بروکر — Forex Expo دبی" },
];

export const experience: Experience[] = [
  {
    role: "توسعه‌دهنده فول‌استک",
    company: "تندیس ماندگار پردیس ایران",
    location: "تهران",
    period: "دی ۱۴۰۴ — اکنون",
    current: true,
    cover: "/experience/tm.webp",
  },
  {
    role: "توسعه‌دهنده ارشد فرانت‌اند",
    company: "MondFX & FeneFX",
    location: "تهران",
    period: "خرداد — آبان ۱۴۰۳ · ۴ ماه",
    cover: "/experience/mf.webp",
  },
  {
    role: "تیم لید فرانت‌اند",
    company: "کارن سیستم",
    location: "تهران",
    period: "اردیبهشت ۱۴۰۲ — خرداد ۱۴۰۳ · ۱ سال",
    cover: "/experience/ks.webp",
  },
  {
    role: "توسعه‌دهنده فول‌استک (فریلنسر بین‌المللی)",
    company: "Freelancer.com",
    location: "ریموت",
    period: "آذر ۱۴۰۲ — خرداد ۱۴۰۳ · ۵ ماه",
    cover: "/experience/fr.webp",
  },
  {
    role: "توسعه‌دهنده وب (فریلنس)",
    company: "کارلنسر",
    location: "تهران",
    period: "مرداد ۱۴۰۱ — آذر ۱۴۰۲ · ۱ سال و ۵ ماه",
    cover: "/experience/ca.webp",
  },
  {
    role: "برنامه‌نویس فرانت‌اند",
    company: "نیان فناور آریا",
    location: "زنجان",
    period: "اسفند ۱۳۹۹ — تیر ۱۴۰۱ · ۱ سال",
    cover: "/experience/nf.webp",
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
      "پلتفرم کارگزاری بین‌المللی با بیش از 350 ابزار معاملاتی مبتنی بر داده. مهندسی داشبوردهای معاملاتی با بازده بالا و تأخیر پایین با استفاده از مدیریت استیت پیچیده (RxJS) برای بهینه‌سازی پرفورمنس رابط کاربری در محیط‌های سنگین داده‌ای. برنده‌ی بهترین بروکر 2025 در Forex Expo دبی.",
  },
  {
    name: "FeneFX",
    tagline: "پلتفرم پراپ‌تریدینگ فارسی",
    url: "https://fenefx.com",
    display: "fenefx.com",
    cover: "/projects/fenefx.webp",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Material-UI"],
    description:
      "طراحی رابط و تجربه کاربری پراپ‌تریدینگ با Next.js، همراه با سیستم خرید چالش، پنل تریدر و آکادمی آموزشی. تمرکز بر مدیریت یکپارچه‌ی داده‌های بلادرنگ برای تریدرهای ایرانی.",
  },
  {
    name: "OneTapCard",
    tagline: "پلتفرم کارت دیجیتال NFC",
    url: "https://onetapcard.uk",
    display: "onetapcard.uk",
    cover: "/projects/onetapcard.webp",
    stack: ["Next.js", "NestJS", "PostgreSQL", "HubSpot API", "Zapier"],
    description:
      "پلتفرم کامل کارت NFC بر بستر PostgreSQL. پیاده‌سازی دریافت‌کننده‌های وب‌هوک اختصاصی و اتوماسیون فرآیندهای تجاری از طریق HubSpot و Zapier برای کاهش عملیات دستی.",
  },
  {
    name: "House of Traders",
    tagline: "بزرگ‌ترین مسابقه‌ی تریدینگ ایران",
    url: "https://ahangariholding.com/house-of-traders",
    display: "ahangariholding.com/house-of-traders",
    cover: "/projects/house-of-traders.webp",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Payments", "Real-time"],
    description:
      "پلتفرم امن بر بستر PostgreSQL برای رویداد استعدادیابی. ساخت یکپارچه‌سازی‌های خودکار کیف پول کریپتو و تایمرهای بلادرنگ برای مسابقات فصلی.",
  },
  {
    name: "MadTalk",
    tagline: "پلتفرم LMS سازمانی",
    url: "https://madtalk.ir",
    display: "madtalk.ir",
    cover: "/projects/madtalk.webp",
    stack: ["Next.js", "React", "Material-UI", "Ant Design", "RxJS"],
    description:
      "رابط کاربری LMS سازمانی — ماژول‌های اصلی، پنل مدیریت و سیستم فروش دوره. از مشتریان: دانشگاه زنجان.",
  },
  {
    name: "Ahangari Holding",
    tagline: "هلدینگ خدمات مالی و سرمایه‌گذاری",
    url: "https://ahangariholding.com",
    display: "ahangariholding.com",
    cover: "/projects/ahangariholding.webp",
    stack: ["Next.js", "TypeScript", "GSAP", "TailwindCSS"],
    description:
      "وب‌سایت یک هلدینگ با دفاتری در Business Bay دبی — خدمات مالی، دوره‌های آموزش بازار و محتوای تخصصی فارکس، همراه با انیمیشن‌های غنی GSAP.",
  },
  {
    name: "Travel Theme",
    tagline: "رزرو سفر بین‌المللی",
    url: "https://traveltheme.com/ro/",
    display: "traveltheme.com",
    cover: "/projects/traveltheme.webp",
    stack: ["Angular", "Angular Material", "RxJS", "NgRx", "Sass"],
    description:
      "رهبری تیمی سه‌نفره از فریلنسرها برای ساخت کامل پنل مدیریت و رابط کاربری از روی طرح‌های Figma.",
  },
  {
    name: "Deadlock Tools",
    tagline: "آمار بازی‌های رقابتی",
    display: "deadlocktools.com",
    status: "down",
    stack: ["Angular", "NestJS", "PostgreSQL", "Nginx", "Linux"],
    description:
      "توسعه‌ی فول‌استک همراه با مدیریت زیرساخت — استقرار Nginx و گواهی‌های SSL روی سرور لینوکس.",
  },
  {
    name: "Tuning Tech",
    tagline: "محاسبه‌ی تیونینگ خودرو",
    url: "https://tuningtech.co.uk",
    display: "tuningtech.co.uk",
    cover: "/projects/tunningcompany.webp",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Material-UI"],
    description:
      "سیستم محاسبه‌ی تأثیر ارتقای قطعات خودرو، همراه با پنل مدیریت محتوا برای ادمین‌ها.",
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
