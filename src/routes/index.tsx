import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { skillGroups } from "@/data/skills";
import { ProjectCard } from "@/components/project-card";
import { Magnetic } from "@/components/magnetic";
import {
  SparkTicks,
  Sparkle,
  CloudCluster,
  BrushWash,
  CurvedArrow,
  ScribbleUnderline,
  WobblyFrame,
  SectionCloudDivider,
} from "@/components/doodles";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <Hero />
      <Marquee />
      <SectionCloudDivider fill="paper" className="-mt-1" />
      <SelectedWork />
      <SkillsSection />
      <SectionCloudDivider fill="paper" className="-mt-1" />
      <Testimonials />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-20">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Stacked Headline & Info */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Line 1: "Hi, I'm" */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.5rem,6.5vw,4.8rem)] font-bold leading-tight tracking-tight text-[var(--ink)]"
            >
              Hi, I'm
            </motion.div>

            {/* Line 2: "Sohan" with 3-tick spark at top-right & underline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative inline-block mt-1 self-start"
            >
              <div className="relative inline-flex items-center">
                <span className="font-display text-[clamp(3.5rem,9.5vw,6.8rem)] font-bold leading-[0.95] tracking-tight text-[var(--blue)]">
                  Sohan
                </span>
                <span className="absolute -top-3 -right-8 md:-top-4 md:-right-10 pointer-events-none">
                  <SparkTicks size={38} color="var(--sun, #FFC83D)" />
                </span>
              </div>
              <div className="w-full max-w-[280px] -mt-1 md:-mt-2">
                <ScribbleUnderline variant="single" height={14} color="var(--blue, #1677FF)" />
              </div>
            </motion.div>

            {/* Subtext: Current copy kept exactly as is */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-8 max-w-lg text-base md:text-lg text-[var(--ink-soft)] leading-relaxed"
            >
              I'm <span className="text-[var(--ink)] font-semibold">{profile.name}</span> — a {profile.role.toLowerCase()} based in {profile.location}. {profile.shortBio}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Magnetic>
                <Link
                  to="/work"
                  className="btn-primary px-6 py-3 text-sm font-semibold inline-flex items-center gap-2 group"
                >
                  View Work
                  <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  to="/contact"
                  className="btn-secondary px-6 py-3 text-sm font-semibold inline-flex items-center gap-2"
                >
                  Contact Me
                </Link>
              </Magnetic>
            </motion.div>

            {/* "Scroll to explore" with doodle arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-14 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[var(--ink-soft)]"
            >
              <CurvedArrow direction="down" size={18} color="var(--blue)" className="animate-bounce" />
              <span>Scroll to explore</span>
            </motion.div>
          </div>

          {/* Right Column: Sketch Portrait with Sky Wash, Overlapping Clouds, Dove & Sparkles */}
          <div className="lg:col-span-5 relative flex justify-center items-end mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[400px] flex flex-col items-center"
            >
              {/* Sky-blue brush wash behind portrait */}
              <div className="absolute -inset-10 -top-16 pointer-events-none -z-10 flex items-center justify-center opacity-90">
                <BrushWash variant="backdrop" size={480} color="var(--sky-light, #D6ECFF)" />
              </div>

              {/* Twinkling Sparkles */}
              <motion.div
                className="absolute top-8 -left-6 z-20 pointer-events-none"
                animate={{ scale: [0.9, 1.15, 0.9], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkle size={26} color="var(--sun, #FFC83D)" secondary />
              </motion.div>
              <motion.div
                className="absolute top-4 -right-6 z-20 pointer-events-none"
                animate={{ scale: [1, 0.85, 1], rotate: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Sparkle size={20} color="var(--sky, #A9D6FA)" />
              </motion.div>

              {/* Portrait Image inside wobbly frame with soft shadow */}
              <div style={{ boxShadow: "0 4px 20px rgba(14,26,58,0.12)", borderRadius: "16px 14px 18px 13px" }}>
                <WobblyFrame
                  fill="paper"
                  shadow="none"
                  tilt={-0.6}
                  strokeWidth={3}
                  className="w-full aspect-[4/4.5] overflow-hidden border border-[var(--line)]"
                >
                  <img
                    src="/fonts/sohan illustration 2.png"
                    alt="Sohan sketch portrait"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      // Fallback to root public if path resolution differs
                      if (!e.currentTarget.src.includes("public")) {
                        e.currentTarget.src = "/sohan illustration 2.png";
                      }
                    }}
                  />
                </WobblyFrame>
              </div>

              {/* Cream clouds overlapping lower edge of portrait */}
              <div className="absolute -bottom-7 -left-10 z-30 pointer-events-none">
                <CloudCluster variant="compact" size={240} />
              </div>
              <div className="absolute -bottom-5 -right-6 z-30 pointer-events-none">
                <CloudCluster variant="puff" size={150} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["UI/UX", "Branding", "Motion", "Prototyping", "Design systems"];
  return (
    <div className="relative overflow-hidden border-y-2 border-[var(--ink)] bg-[var(--paper-deep)] py-7 shadow-[inset_0_2px_0_rgba(14,26,58,0.06)]">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-10 pr-10">
            {words.map((w, idx) => (
              <div key={w + i + idx} className="flex items-center gap-10">
                <span className="font-display text-2xl md:text-4xl font-bold tracking-tight text-[var(--ink)]">
                  {w}
                </span>
                <Sparkle size={18} color="var(--sun, #FFC83D)" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="mb-2.5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--ink-soft)]">
              <Sparkle size={14} color="var(--blue)" /> Selected work
            </p>
            <div className="flex items-center gap-3">
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[var(--ink)]">
                Featured Projects
              </h2>
              <span className="inline-block translate-y-1">
                <ScribbleUnderline variant="wave" width={64} height={12} color="var(--blue)" />
              </span>
            </div>
          </div>
          <Link
            to="/work"
            className="hidden text-sm font-semibold text-[var(--blue)] hover:text-[var(--blue-deep)] hover:underline hover:decoration-wavy md:inline-flex items-center gap-1"
          >
            View all <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="space-y-12 md:space-y-16">
          {projects.slice(0, 3).map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="relative bg-[var(--paper-deep)] border-y-2 border-[var(--ink)] py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14 flex items-center gap-3">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[var(--ink)]">
            Creative <span className="text-[var(--blue)]">stack</span>.
          </h2>
          <SparkTicks size={30} color="var(--sun)" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((g, idx) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-6 transition-all hover:-translate-y-1"
              style={{ boxShadow: "0 2px 10px rgba(14,26,58,0.07)" }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink-soft)]">
                {g.label}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[var(--line)] bg-[var(--paper-deep)] px-3.5 py-1.5 text-xs font-semibold text-[var(--ink-soft)] transition-all hover:scale-105 hover:bg-[var(--sky-light)] hover:text-[var(--blue)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14 flex items-center gap-3">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[var(--ink)]">
            Testimonials.
          </h2>
          <Sparkle size={22} color="var(--blue)" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-6 transition-all hover:-translate-y-1"
              style={{ boxShadow: "0 2px 10px rgba(14,26,58,0.07)" }}
            >
              <span className="font-display text-6xl leading-none text-[var(--blue)] font-bold select-none -mb-3">
                “
              </span>
              <blockquote className="text-sm font-medium leading-relaxed text-[var(--ink)]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-[var(--line)] text-xs text-[var(--ink-soft)]">
                <span className="font-semibold text-[var(--ink)] block text-sm">{t.name}</span>
                <span>{t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
