import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reverse = index % 2 === 1;
  const isImage = project.cover.includes("/") || project.cover.includes(".");

  const cardImage = (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden ${
        isImage ? "bg-muted" : `bg-gradient-to-br ${project.cover}`
      }`}
    >
      {isImage && (
        <img
          src={project.cover}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}
      <motion.div
        className="absolute inset-0 flex items-end justify-between p-6 text-primary-foreground"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <span className="rounded-full bg-background/30 px-3 py-1 text-xs backdrop-blur">
          {project.year}
        </span>
      </motion.div>
      {!isImage && (
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-display text-4xl text-white/90 mix-blend-overlay md:text-6xl text-center px-4">
            {project.shortTitle || project.title.split(" ")[0]}
          </span>
        </div>
      )}
      <div className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-background/60 text-foreground opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-45 backdrop-blur">
        <ArrowUpRight size={18} />
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group grid items-center gap-8 md:grid-cols-12 ${
        reverse ? "md:[&>div:first-child]:order-2" : ""
      }`}
    >
      {project.externalUrl ? (
        <a
          href={project.externalUrl}
          target="_blank"
          rel="noreferrer"
          className="relative col-span-7 block overflow-hidden rounded-3xl"
        >
          {cardImage}
        </a>
      ) : (
        <Link
          to="/work/$slug"
          params={{ slug: project.slug }}
          className="relative col-span-7 block overflow-hidden rounded-3xl"
        >
          {cardImage}
        </Link>
      )}

      <div className="col-span-5 space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {project.category} · {project.year}
        </p>
        <h3 className="font-display text-3xl md:text-4xl">{project.title}</h3>
        <p className="text-muted-foreground">{project.summary}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tools.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        {project.externalUrl ? (
          <a
            href={project.externalUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 pt-3 text-sm font-medium text-primary"
          >
            Open project
            <ArrowUpRight size={16} />
          </a>
        ) : (
          <Link
            to="/work/$slug"
            params={{ slug: project.slug }}
            className="inline-flex items-center gap-2 pt-3 text-sm font-medium text-primary"
          >
            Read case study
            <ArrowUpRight size={16} />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
