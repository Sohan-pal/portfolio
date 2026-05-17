import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { timeline } from "@/data/experience";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="relative pt-40 pb-24">
      <div className="mx-auto max-w-5xl px-5">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">About</p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 font-display text-5xl leading-tight md:text-7xl"
        >
          A designer who treats <span className="text-gradient italic">small details</span> like they matter.
        </motion.h1>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2 space-y-5 text-lg leading-relaxed text-foreground/90">
            <p>{profile.bio}</p>
            <p className="text-muted-foreground">
              From typography to bold visual graphics, I enjoy designing experiences that feel polished, expressive, and human.
            </p>
            <p className="text-muted-foreground">
              Currently I am exploring UI/UX design systems, branding, and visual design through personal projects, collaborating with other designers and constant experimentation.
            </p>
          </div>
          <aside className="space-y-6 rounded-3xl border border-border p-6">
            <Row label="Based in" value={profile.location} />
            <Row label="Email" value={profile.email} />
            <Row label="Status" value={profile.available ? "Open to work" : "Currently booked"} />
            <Row label="Focus" value="UI/UX · Visual Design · Branding" />
          </aside>
        </div>

        <section className="mt-32">
          <h2 className="font-display text-4xl md:text-5xl">Timeline.</h2>
          <ol className="mt-12 space-y-2">
            {timeline.map((t, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group grid grid-cols-12 items-baseline gap-4 border-b border-border py-6 transition-colors hover:bg-secondary/30"
              >
                <span className="col-span-2 font-mono text-sm text-primary">{t.year}</span>
                <div className="col-span-10 md:col-span-7">
                  <p className="font-display text-xl">{t.title}</p>
                  <p className="text-sm text-muted-foreground">{t.detail}</p>
                </div>
                <span className="col-span-12 text-xs text-muted-foreground md:col-span-3 md:text-right">
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

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm">{value}</p>
    </div>
  );
}
