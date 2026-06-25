// Locale config + dictionary assembly for the bilingual (EN/FA) site.
import type { Experience, Project, SkillGroup, Reference } from "./resume";
import * as en from "./resume";
import * as fa from "./resume.fa";

export const locales = ["en", "fa"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function dir(locale: Locale): "ltr" | "rtl" {
  return locale === "fa" ? "rtl" : "ltr";
}

export type UIStrings = {
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
    resume: string;
  };
  hero: { viewWork: string; downloadResume: string; scrollAria: string };
  sections: Record<
    "about" | "experience" | "projects" | "skills" | "contact",
    { kicker: string; title: string }
  >;
  about: { line: string };
  skills: { languages: string; education: string };
  contact: {
    intro: string;
    channels: { email: string; github: string; twitter: string; location: string };
    download: string;
    references: string;
    refereeNote: string;
    form: {
      heading: string;
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  footer: { github: string; twitter: string; email: string };
  skipToContent: string;
  langName: string;
};

const ui: Record<Locale, UIStrings> = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      viewWork: "View Work",
      downloadResume: "Download Resume",
      scrollAria: "Scroll to about",
    },
    sections: {
      about: { kicker: "Who I am", title: "About" },
      experience: { kicker: "Where I've worked", title: "Experience" },
      projects: { kicker: "Selected work", title: "Projects" },
      skills: { kicker: "What I work with", title: "Skills" },
      contact: { kicker: "Let's talk", title: "Contact" },
    },
    about: { line: "Code should solve real problems — not just run." },
    skills: { languages: "Languages", education: "Education" },
    contact: {
      intro:
        "Open to full-stack, technical-lead and AI-integration work. The fastest way to reach me:",
      channels: { email: "Email", github: "GitHub", twitter: "Twitter / X", location: "Location" },
      download: "Download Full Resume (PDF)",
      references: "References",
      refereeNote: "Referee contact details available on request.",
      form: {
        heading: "Send a message",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        sending: "Sending…",
        success: "Thanks — your message was sent. I'll get back to you soon.",
        error: "Something went wrong. Please try again, or email me directly.",
      },
    },
    footer: { github: "GitHub", twitter: "Twitter", email: "Email" },
    skipToContent: "Skip to content",
    langName: "English",
  },
  fa: {
    nav: {
      about: "درباره",
      experience: "تجربه",
      projects: "پروژه‌ها",
      skills: "مهارت‌ها",
      contact: "تماس",
      resume: "رزومه",
    },
    hero: {
      viewWork: "مشاهده نمونه‌کارها",
      downloadResume: "دانلود رزومه",
      scrollAria: "اسکرول به بخش درباره",
    },
    sections: {
      about: { kicker: "من کی هستم", title: "درباره" },
      experience: { kicker: "جاهایی که کار کرده‌ام", title: "تجربه کاری" },
      projects: { kicker: "نمونه‌کارهای منتخب", title: "پروژه‌ها" },
      skills: { kicker: "با چه چیزهایی کار می‌کنم", title: "مهارت‌ها" },
      contact: { kicker: "بیایید صحبت کنیم", title: "تماس" },
    },
    about: { line: "کد باید یک مشکل واقعی را حل کند — نه اینکه فقط اجرا شود." },
    skills: { languages: "زبان‌ها", education: "تحصیلات و دوره‌ها" },
    contact: {
      intro:
        "آماده‌ی همکاری در حوزه‌ی فول‌استک، سرپرستی فنی و یکپارچه‌سازی هوش مصنوعی هستم. سریع‌ترین راه ارتباط با من:",
      channels: { email: "ایمیل", github: "گیت‌هاب", twitter: "توییتر / X", location: "موقعیت" },
      download: "دانلود رزومه‌ی کامل (PDF)",
      references: "معرف‌ها",
      refereeNote: "اطلاعات تماس معرف‌ها در صورت درخواست ارائه می‌شود.",
      form: {
        heading: "ارسال پیام",
        name: "نام",
        email: "ایمیل",
        message: "پیام",
        send: "ارسال پیام",
        sending: "در حال ارسال…",
        success: "ممنون — پیام شما ارسال شد. به‌زودی پاسخ می‌دهم.",
        error: "مشکلی پیش آمد. لطفاً دوباره تلاش کنید یا مستقیماً ایمیل بزنید.",
      },
    },
    footer: { github: "گیت‌هاب", twitter: "توییتر", email: "ایمیل" },
    skipToContent: "رفتن به محتوا",
    langName: "فارسی",
  },
};

export type Dictionary = {
  locale: Locale;
  profile: { name: string; brand: string; title: string; tagline: string; summary: string };
  contact: {
    email: string;
    phone: string;
    location: string;
    github: string;
    githubLabel: string;
    twitter: string;
    twitterLabel: string;
  };
  stats: { value: string; label: string }[];
  experience: Experience[];
  projects: Project[];
  skillGroups: SkillGroup[];
  languages: { name: string; level: string }[];
  education: { title: string; org: string; year: string }[];
  references: Reference[];
  interests: string[];
  ui: UIStrings;
};

export function getDictionary(locale: Locale): Dictionary {
  const src = locale === "fa" ? fa : en;
  return {
    locale,
    profile: src.profile,
    contact: src.contact,
    stats: src.stats,
    experience: src.experience,
    projects: src.projects,
    skillGroups: src.skillGroups,
    languages: src.languages,
    education: src.education,
    references: src.references,
    interests: src.interests,
    ui: ui[locale],
  };
}
