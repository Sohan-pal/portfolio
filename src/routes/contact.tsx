import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check, Download, Send } from "lucide-react";
import { z } from "zod";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { Sparkle, ScribbleUnderline, SparkTicks } from "@/components/doodles";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(5, "Tell me a little more").max(1000),
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setPending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "981f622c-1b81-45be-a921-8521b54580f7",
          subject: `New message from ${parsed.data.name} via portfolio`,
          from_name: parsed.data.name,
          ...parsed.data,
        }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setErrors({
          message: "Something went wrong. Please try again or email me directly.",
        });
      }
    } catch {
      setErrors({
        message: "Network error. Please try again or email me directly.",
      });
    } finally {
      setPending(false);
    }
  }

  const cardCls = "rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-5 transition-all hover:-translate-y-1";
  const cardStyle = { boxShadow: "0 2px 10px rgba(14,26,58,0.07)" };
  const cardHoverStyle = { boxShadow: "0 8px 24px rgba(14,26,58,0.13)" };

  return (
    <div className="relative pt-36 pb-24">
      <div className="mx-auto max-w-5xl px-5">
        {/* Section label */}
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--ink-soft)]">
          <Sparkle size={13} color="var(--blue)" />
          Contact
        </p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 font-display text-5xl md:text-7xl font-bold tracking-tight text-[var(--ink)]"
        >
          Say{" "}
          <span className="relative inline-block">
            <span className="text-[var(--blue)] italic">hi</span>
            <span className="absolute -bottom-2 left-0 w-full">
              <ScribbleUnderline variant="wave" height={10} color="var(--blue)" />
            </span>
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-5 max-w-xl text-[var(--ink-soft)] text-base leading-relaxed"
        >
          Briefs, internships, collaborations or just nice notes about typography
          — my inbox is open.
        </motion.p>

        {/* Grid: Aside + Form */}
        <div className="mt-14 grid gap-8 md:grid-cols-5">
          {/* Info Cards */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-2 space-y-4"
          >
            {/* Email */}
            <a
              href={`mailto:${profile.email}`}
              className={`group block ${cardCls}`}
              style={cardStyle}
              onMouseEnter={(e) => Object.assign((e.currentTarget as HTMLElement).style, cardHoverStyle)}
              onMouseLeave={(e) => Object.assign((e.currentTarget as HTMLElement).style, cardStyle)}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink-soft)]">
                Email
              </p>
              <p className="mt-2 font-display text-xl font-bold text-[var(--ink)] group-hover:text-[var(--blue)] transition-colors break-all">
                {profile.email}
              </p>
            </a>

            {/* Resume */}
            <a
              href={profile.resumeUrl}
              download
              className={`group flex items-center justify-between ${cardCls}`}
              style={cardStyle}
              onMouseEnter={(e) => Object.assign((e.currentTarget as HTMLElement).style, cardHoverStyle)}
              onMouseLeave={(e) => Object.assign((e.currentTarget as HTMLElement).style, cardStyle)}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink-soft)]">
                  Resume
                </p>
                <p className="mt-2 font-display text-xl font-bold text-[var(--ink)] group-hover:text-[var(--blue)] transition-colors">
                  Download (PDF)
                </p>
              </div>
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--line)] bg-[var(--paper-deep)] group-hover:bg-[var(--sky-light)] transition-colors">
                <Download size={18} className="text-[var(--ink)]" />
              </div>
            </a>

            {/* Socials */}
            <div
              className="rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-5"
              style={cardStyle}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink-soft)]">
                Elsewhere
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--paper-deep)] px-3.5 py-1.5 text-xs font-semibold text-[var(--ink-soft)] transition-all hover:-translate-y-0.5 hover:text-[var(--blue)] hover:bg-[var(--sky-light)]"
                  >
                    <s.icon size={13} />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-3"
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="grid place-items-center rounded-2xl border border-[var(--line)] bg-[var(--sky-light)] p-14 text-center"
                  style={{ boxShadow: "0 4px 20px rgba(169,214,250,0.3)" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-14 w-14 place-items-center rounded-xl border border-[var(--line)] bg-[var(--blue)]"
                      style={{ boxShadow: "0 2px 12px rgba(22,119,255,0.3)" }}
                    >
                      <Check size={26} className="text-white" />
                    </div>
                    <SparkTicks size={28} color="var(--sun)" />
                  </div>
                  <p className="mt-6 font-display text-2xl font-bold text-[var(--ink)]">
                    Message sent!
                  </p>
                  <p className="mt-2 text-sm text-[var(--ink-soft)]">
                    Thanks for reaching out! I'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5 rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-7"
                  style={{ boxShadow: "0 2px 14px rgba(14,26,58,0.08)" }}
                  noValidate
                >
                  <Field label="Name" name="name" error={errors.name} />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    error={errors.email}
                  />
                  <Field
                    label="Message"
                    name="message"
                    textarea
                    error={errors.message}
                  />
                  <button
                    type="submit"
                    disabled={pending}
                    className="btn-primary px-6 py-3 text-sm font-semibold inline-flex items-center gap-2 group disabled:opacity-60"
                  >
                    {pending ? "Sending…" : "Send message"}
                    <Send
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink-soft)]">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={5}
          className="input-sketch mt-2 w-full px-4 py-3 text-sm"
          maxLength={1000}
        />
      ) : (
        <input
          name={name}
          type={type}
          className="input-sketch mt-2 w-full px-4 py-3 text-sm"
          maxLength={255}
        />
      )}
      {error && (
        <span className="mt-2 block text-xs font-semibold text-[var(--destructive)]">
          {error}
        </span>
      )}
    </label>
  );
}
