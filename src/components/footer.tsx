import { ArrowUp } from "lucide-react";
import { socials } from "@/data/socials";
import { profile } from "@/data/profile";
import { WavyDivider } from "@/components/doodles";

export function Footer() {
  return (
    <footer className="relative mt-32 bg-[color-mix(in_srgb,var(--paper-deep)_55%,transparent)] border-t-2 border-[var(--ink)]">
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-12">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-2">
              <p className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[var(--ink)]">
                let's <span className="highlight">design.</span>
              </p>
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 inline-block text-base text-[var(--ink-soft)] hover:text-[var(--blue)] hover:underline hover:decoration-wavy underline-offset-4 font-medium transition-colors"
            >
              {profile.email}
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] transition-all hover:-translate-y-1 hover:text-[var(--blue)]"
                style={{ boxShadow: "0 1px 6px rgba(14,26,58,0.08)" }}
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Wavy Divider */}
        <div className="my-8">
          <WavyDivider strokeWidth={2} />
        </div>

        {/* Bottom Metadata & Back to top */}
        <div className="flex flex-col items-start justify-between gap-4 text-xs font-medium text-[var(--ink-soft)] md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {profile.name}.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 rounded-xl border border-[var(--line)] bg-[var(--paper)] px-3.5 py-1.5 text-[var(--ink)] transition-all hover:-translate-y-0.5 hover:text-[var(--blue)]"
            style={{ boxShadow: "0 1px 6px rgba(14,26,58,0.08)" }}
          >
            Back to top
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
