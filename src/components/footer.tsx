import { ArrowUp } from "lucide-react";
import { socials } from "@/data/socials";
import { profile } from "@/data/profile";
import { Sparkle, WavyDivider } from "@/components/doodles";

export function Footer() {
  return (
    <footer className="relative mt-32 bg-[var(--paper-deep)] border-t-2 border-[var(--ink)]">
      {/* Cloud / Hill SVG Edge at top of footer */}
      <div className="absolute -top-7 inset-x-0 overflow-hidden leading-none pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 1200 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-8"
        >
          {/* Sky shadow under crest */}
          <path
            d="M0 24 C100 12 180 10 280 22 C380 12 480 8 580 20 C680 10 780 12 880 22 C980 10 1080 14 1200 24 L1200 32 L0 32 Z"
            fill="var(--sky, #A9D6FA)"
            transform="translate(0, 3)"
          />
          {/* Main cream hill crest */}
          <path
            d="M0 22 C100 10 180 8 280 20 C380 10 480 6 580 18 C680 8 780 10 880 20 C980 8 1080 12 1200 22 L1200 32 L0 32 Z"
            fill="var(--paper-deep, #F3EEDF)"
            stroke="var(--ink, #0E1A3A)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-5 pt-16 pb-12">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-2">
              <p className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[var(--ink)]">
                let's <span className="text-[var(--blue)]">design.</span>
              </p>
              <Sparkle size={24} color="var(--sun)" />
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
          <p>© {new Date().getFullYear()} {profile.name}.</p>
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
