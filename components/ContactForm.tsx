"use client";

import { useState, type FormEvent } from "react";
import type { UIStrings } from "@/lib/i18n";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/50 hover:border-white/25 focus:border-red/60 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(255,34,51,0.12)]";

export function ContactForm({
  t,
  locale,
}: {
  t: UIStrings["contact"]["form"];
  locale: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, company, locale }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean };
      if (res.ok && data.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {/* Honeypot — hidden from real users */}
      <div className="absolute h-0 w-0 overflow-hidden" aria-hidden>
        <label>
          Company
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
            {t.name}
          </span>
          <input
            type="text"
            required
            maxLength={120}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            autoComplete="name"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
            {t.email}
          </span>
          <input
            type="email"
            required
            maxLength={200}
            dir="ltr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            autoComplete="email"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
          {t.message}
        </span>
        <textarea
          required
          rows={5}
          maxLength={4000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-y`}
        />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full border border-red/60 bg-red/10 px-7 py-3 font-mono text-xs uppercase tracking-widest text-red-bright transition-all hover:bg-red/20 hover:shadow-[0_0_24px_-4px_rgba(255,34,51,0.7)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? t.sending : t.send}
        </button>

        {status === "success" ? (
          <p className="text-sm text-red-bright" role="status">
            {t.success}
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm text-red-bright/90" role="alert">
            {t.error}
          </p>
        ) : null}
      </div>
    </form>
  );
}
