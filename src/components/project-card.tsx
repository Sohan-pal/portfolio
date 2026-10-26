import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reverse = index % 2 === 1;
  const isImage = project.cover.includes("/") || project.cover.includes(".");

  const cardImage = (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[var(--line)] ${
        isImage ? "bg-[var(--paper-deep)]" : `bg-gradient-to-br ${project.cover}`
      }`}
      style={{ boxShadow: "0 2px 10px rgba(14,26,58,0.07)" }}
    >
      {isImage && (
        <img
          src={project.cover}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 flex items-end justify-between p-4 pointer-events-none">
        <span className="rounded-full border border-[var(--line)] bg-[var(--paper)]/90 px-2.5 py-0.5 text-xs font-semibold text-[var(--ink-soft)]">
          {project.year}
        </span>
      </div>
      {!isImage && (
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-display text-4xl text-[var(--ink)] font-bold text-center px-4">
            {project.shortTitle || project.title.split(" ")[0]}
          </span>
        </div>
      )}
      <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-xl border border-[var(--line)] bg-[var(--paper)] text-[var(--blue)] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:rotate-45">
        <ArrowUpRight size={16} />
      </div>
    </div>
  );

  const cardContent = (
    <div className="col-span-5 space-y-3.5">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink-soft)]">
        {project.category} · {project.year}
      </p>
      <h3 className="font-display text-2xl font-bold tracking-tight text-[var(--ink)] group-hover:text-[var(--blue)] transition-colors md:text-3xl">
        {project.title}
      </h3>
      <p className="text-sm text-[var(--ink-soft)] leading-relaxed">{project.summary}</p>
      <div className="flex flex-wrap gap-2 pt-1">
        {project.tools.map((t) => (
          <span
            key={t}
            className="rounded-full border border-[var(--line)] bg-[var(--paper-deep)] px-2.5 py-0.5 text-xs font-medium text-[var(--ink-soft)]"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="pt-2">
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--blue)] transition-transform group-hover:translate-x-1">
          {project.externalUrl ? "Open project" : "Read case study"}
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group mx-auto w-full max-w-[840px] rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-5 md:p-6 transition-all duration-300 hover:-translate-y-2"
      style={{ boxShadow: "0 2px 12px rgba(14,26,58,0.08)" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(14,26,58,0.13)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(14,26,58,0.08)";
      }}
    >
      {project.externalUrl ? (
        <a
          href={project.externalUrl}
          target="_blank"
          rel="noreferrer"
          className={`grid w-full items-center gap-6 md:grid-cols-12 ${
            reverse ? "md:[&>div:first-child]:order-2" : ""
          }`}
        >
          <div className="col-span-7">{cardImage}</div>
          {cardContent}
        </a>
      ) : (
        <Link
          to="/work/$slug"
          params={{ slug: project.slug }}
          className={`grid w-full items-center gap-6 md:grid-cols-12 ${
            reverse ? "md:[&>div:first-child]:order-2" : ""
          }`}
        >
          <div className="col-span-7">{cardImage}</div>
          {cardContent}
        </Link>
      )}
    </motion.div>
  );
}
