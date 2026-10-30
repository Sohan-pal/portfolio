import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { timeline } from "@/data/experience";
import { Tape } from "@/components/tape";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="relative pt-36 pb-24">
      <div className="mx-auto max-w-5xl px-5">
        {/* Section label */}

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 font-display text-5xl leading-tight md:text-7xl font-bold tracking-tight text-[var(--ink)]"
        >
          <span className="highlight">small details</span>.
        </motion.h1>

        {/* Body + Info Card */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {/* Bio copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-2 space-y-5 text-lg leading-relaxed text-[var(--ink)]"
          >
            <p>{profile.bio}</p>
            <p className="text-[var(--ink-soft)]">
              From typography to bold visual graphics, I enjoy designing experiences that feel
              polished, expressive, and human.
            </p>
            <p className="text-[var(--ink-soft)]">
              Currently I am exploring UI/UX design systems, branding, and visual design through
              personal projects, collaborating with other designers and constant experimentation.
            </p>
          </motion.div>

          {/* Info aside card */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-6 space-y-5 h-fit"
            style={{ boxShadow: "0 2px 12px rgba(14,26,58,0.08)" }}
          >
            {/* Yellow Tape on About info card */}
            <Tape
              color="sun"
              rotation={5}
              className="hidden sm:block absolute -top-2.5 right-6 w-[70px] h-[20px] z-10"
            />
            <Row label="Based in" value={profile.location} />
            <Row label="Email" value={profile.email} />
            <Row
              label="Status"
              value={profile.available ? "Open to work" : "Currently booked"}
              highlight={profile.available}
            />
            <Row label="Focus" value="UI/UX · Visual Design · Branding" />
          </motion.aside>
        </div>

        {/* Timeline */}
        <section className="mt-32">
          <div className="flex items-center gap-3 mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[var(--ink)]">
              <span className="highlight">Timeline</span>.
            </h2>
          </div>

          <ol className="space-y-0">
            {timeline.map((t, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group grid grid-cols-12 items-baseline gap-4 border-b-2 border-[var(--line)] py-6 transition-all hover:bg-[var(--paper-deep)] hover:px-3 rounded-lg"
              >
                <span className="col-span-2 font-mono text-sm font-bold text-[var(--blue)]">
                  {t.year}
                </span>
                <div className="col-span-10 md:col-span-7">
                  <p className="font-display text-xl font-semibold text-[var(--ink)]">{t.title}</p>
                  <p className="mt-1 text-sm text-[var(--ink-soft)]">{t.detail}</p>
                </div>
                <span className="col-span-12 text-xs text-[var(--ink-soft)] font-medium md:col-span-3 md:text-right">
                  {t.org}
                </span>
              </motion.li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}

function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-soft)] font-semibold">
        {label}
      </p>
      <p
        className={`mt-1 text-sm font-medium ${highlight ? "text-[var(--blue)]" : "text-[var(--ink)]"}`}
      >
        {value}
      </p>
    </div>
  );
}
