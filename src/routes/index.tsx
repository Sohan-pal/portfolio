import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { skillGroups } from "@/data/skills";
import { ProjectCard } from "@/components/project-card";
import { Magnetic } from "@/components/magnetic";
import { Tape } from "@/components/tape";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <Hero />
      <SelectedWork />
      <SkillsSection />
      <Testimonials />
    </div>
  );
}

function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [isSettled, setIsSettled] = useState(false);

  return (
    <section className="relative flex lg:min-h-[100svh] items-center justify-center pt-32 pb-24 overflow-x-clip">
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 flex flex-col items-center text-center gap-8 md:gap-10">
        {/* Name Strip with Sellotape and "Hi, I'm" */}
        <div className="relative inline-block my-2">
          {/* Sellotape sticking the strip to the page */}
          <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.25, delay: 0.45, ease: "easeOut" }}
            className="absolute -top-3 md:-top-5 left-[42%] -translate-x-1/2 z-30 pointer-events-none"
          >
            <Tape
              color="blue"
              rotation={-7}
              className="w-[90px] h-[26px] md:w-[130px] md:h-[36px]"
            />
          </motion.div>

          {/* Semantic Heading wrapping "Hi, I'm" and "Sohan" */}
          <h1 className="relative inline-block m-0 p-0">
            {/* "Hi, I'm" small, in --ink, above left part of strip, rotated about -3deg, overlapping top edge */}
            <span className="absolute -top-5 left-2 sm:-top-7 sm:left-4 md:-top-8 md:left-6 z-20 -rotate-[3deg] text-base sm:text-lg md:text-xl font-bold tracking-tight text-[var(--ink)] font-display pointer-events-none select-none">
              Hi, I'm
            </span>

            {/* Strip Wrapper with torn-edge SVG and text */}
            <motion.div
              initial={{ y: -24, rotate: -4 }}
              animate={
                isSettled && !shouldReduceMotion
                  ? { rotate: [-1.5, -1.9, -1.1, -1.5], y: 0 }
                  : { y: 0, rotate: -1.5 }
              }
              transition={
                isSettled && !shouldReduceMotion
                  ? {
                      rotate: {
                        duration: 6,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "mirror",
                      },
                    }
                  : { type: "spring", stiffness: 120, damping: 14 }
              }
              onAnimationComplete={() => setIsSettled(true)}
              className="relative inline-block px-8 py-4 md:px-14 md:py-6"
              style={{
                transformOrigin: "42% 0%",
                transform: "rotate(-1.5deg)",
              }}
            >
              {/* Torn-edge SVG with hard offset shadow path drawn first */}
              <svg
                className="absolute inset-0 h-full w-full pointer-events-none"
                viewBox="0 0 500 120"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {/* Offset shadow path */}
                <path
                  d="M 4 4 L 40 2 L 80 5 L 130 1 L 180 5 L 240 2 L 300 6 L 360 2 L 420 5 L 460 2 L 496 4 L 497 25 L 495 50 L 498 75 L 496 95 L 497 116 L 460 117 L 410 114 L 350 119 L 290 115 L 230 118 L 170 114 L 110 118 L 60 115 L 4 116 L 5 95 L 2 70 L 6 45 L 3 20 Z"
                  transform="translate(4, 5)"
                  fill="color-mix(in srgb, var(--ink) 25%, transparent)"
                />
                {/* Main torn paper path */}
                <path
                  d="M 4 4 L 40 2 L 80 5 L 130 1 L 180 5 L 240 2 L 300 6 L 360 2 L 420 5 L 460 2 L 496 4 L 497 25 L 495 50 L 498 75 L 496 95 L 497 116 L 460 117 L 410 114 L 350 119 L 290 115 L 230 118 L 170 114 L 110 118 L 60 115 L 4 116 L 5 95 L 2 70 L 6 45 L 3 20 Z"
                  fill="#FBE76C"
                  style={{ fill: "color-mix(in srgb, var(--sun) 85%, var(--paper))" }}
                />
              </svg>

              {/* Text: relative z-10 above the SVG */}
              <span
                className="relative z-10 block uppercase font-bold text-[clamp(3.5rem,16vw,11rem)] leading-[0.9] tracking-[-0.02em] text-[var(--ink)] select-none whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-name, var(--font-display))",
                }}
              >
                Sohan
              </span>
            </motion.div>
          </h1>
        </div>

        {/* Existing Paragraph Copy, centered */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="max-w-xl mx-auto text-center text-base md:text-lg text-[var(--ink-soft)] leading-relaxed"
        >
          I'm <span className="text-[var(--ink)] font-semibold">{profile.name}</span> — a{" "}
          {profile.role.toLowerCase()} based in {profile.location}. {profile.shortBio}
        </motion.p>

        {/* Action Buttons, centered */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
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

        {/* Desktop-only "Scroll to explore" with Lucide ArrowDown */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="hidden md:flex flex-col items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-soft)] select-none pt-2"
        >
          <ArrowDown size={16} className="animate-bounce text-[var(--ink-soft)]" />
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[var(--ink)]">
                Featured <span className="highlight">Projects</span>
              </h2>
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
    <section className="relative bg-[color-mix(in_srgb,var(--paper-deep)_55%,transparent)] border-y-2 border-[var(--ink)] py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14 flex items-center justify-center text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[var(--ink)]">
            What's in my <span className="highlight">bag ?</span>
          </h2>
        </div>
        <div className="mx-auto max-w-3xl">
          {skillGroups.map((g, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl border border-[var(--line)] bg-[var(--paper)] p-8 md:p-10"
              style={{ boxShadow: "0 2px 10px rgba(14,26,58,0.07)" }}
            >
              <div className="flex flex-wrap justify-center gap-3">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[var(--line)] bg-[var(--paper-deep)] px-4.5 py-2 text-sm font-semibold text-[var(--ink-soft)] transition-colors hover:bg-[color-mix(in_srgb,var(--sun)_60%,transparent)]"
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
            <span className="highlight">Testimonials</span>.
          </h2>
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
              <Tape
                color="sun"
                rotation={i % 2 === 0 ? -6 : 5}
                className="hidden sm:block absolute -top-2.5 right-6 w-[70px] h-[20px] z-10"
              />
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
