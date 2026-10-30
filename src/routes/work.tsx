import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export const Route = createFileRoute("/work")({
  component: Work,
});

function Work() {
  return (
    <div className="relative pt-36 pb-24">
      <div className="mx-auto max-w-6xl px-5">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-[var(--ink)]">
            Selected <span className="highlight">work</span>.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-5 max-w-xl text-[var(--ink-soft)] text-base leading-relaxed"
        >
          A small archive of things I've made — student briefs, concept work and the occasional
          client project.
        </motion.p>

        {/* Project list */}
        <div className="mt-16 md:mt-20 space-y-20 md:space-y-24">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
