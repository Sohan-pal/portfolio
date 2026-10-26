import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Sparkle, ScribbleUnderline, SparkTicks } from "@/components/doodles";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },

  notFoundComponent: () => (
    <div className="grid min-h-[60vh] place-items-center pt-32 text-center">
      <div>
        <p className="font-display text-4xl font-bold text-[var(--ink)]">
          Project not found.
        </p>
        <Link
          to="/work"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--blue)] hover:text-[var(--blue-deep)] underline-offset-4 hover:underline"
        >
          <ArrowLeft size={14} /> Back to work
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="grid min-h-[60vh] place-items-center pt-32 text-center">
      <div>
        <p className="font-display text-3xl font-bold text-[var(--ink)]">
          Something went sideways.
        </p>
        <p className="mt-2 text-sm text-[var(--ink-soft)]">{error.message}</p>
        <button
          onClick={reset}
          className="btn-primary mt-5 px-5 py-2 text-sm"
        >
          Try again
        </button>
      </div>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData() as {
    project: (typeof projects)[number];
  };
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="relative pt-32 pb-24">
      <div className="mx-auto max-w-5xl px-5">
        {/* Back link */}
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink-soft)] hover:text-[var(--blue)] transition-colors"
        >
          <ArrowLeft size={14} /> All work
        </Link>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7"
        >
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--ink-soft)]">
            <Sparkle size={12} color="var(--blue)" />
            {project.category} · {project.year}
          </p>
          <h1 className="mt-3 font-display text-5xl md:text-7xl font-bold tracking-tight text-[var(--ink)]">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--ink-soft)] leading-relaxed">
            {project.description}
          </p>
          {/* Tool tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[var(--line)] bg-[var(--paper-deep)] px-3.5 py-1 text-xs font-semibold text-[var(--ink-soft)]"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.header>

        {/* Cover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`mt-12 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[var(--line)] bg-gradient-to-br ${project.cover}`}
          style={{ boxShadow: "0 4px 20px rgba(14,26,58,0.10)" }}
        />

        {/* Problem / Process / Outcome */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          <Section label="Problem" body={project.problem} />
          <Section
            label="Process"
            body={
              <ol className="space-y-3">
                {project.process.map((p, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[var(--ink-soft)]">
                    <span className="font-mono font-bold text-[var(--blue)]">
                      0{i + 1}
                    </span>
                    <span className="text-[var(--ink)]">{p}</span>
                  </li>
                ))}
              </ol>
            }
          />
          <Section label="Outcome" body={project.outcome} />
        </div>

        {/* Gallery */}
        <div className="mt-20 grid gap-5 md:grid-cols-2">
          {project.gallery.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--line)] bg-gradient-to-br ${g} ${
                i === 0 ? "md:col-span-2 md:aspect-[16/8]" : ""
              }`}
              style={{ boxShadow: "0 2px 10px rgba(14,26,58,0.08)" }}
            />
          ))}
        </div>

        {/* Next project link */}
        <Link
          to="/work/$slug"
          params={{ slug: next.slug }}
          className="group mt-24 flex items-center justify-between rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-8 transition-all hover:-translate-y-1"
          style={{ boxShadow: "0 2px 12px rgba(14,26,58,0.08)" }}
        >
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--ink-soft)]">
              <SparkTicks size={16} color="var(--sun)" />
              Next project
            </p>
            <p className="mt-2 font-display text-3xl font-bold tracking-tight text-[var(--ink)] group-hover:text-[var(--blue)] transition-colors">
              {next.title}
            </p>
          </div>
          <ArrowUpRight
            size={28}
            className="text-[var(--ink)] transition-transform group-hover:rotate-45 group-hover:text-[var(--blue)]"
          />
        </Link>
      </div>
    </article>
  );
}

function Section({ label, body }: { label: string; body: React.ReactNode }) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--ink-soft)]">
          {label}
        </p>
        <span className="flex-1 h-[2px] bg-[var(--line)] rounded" />
      </div>
      <div className="text-[var(--ink)] text-sm leading-relaxed">{body}</div>
    </div>
  );
}
