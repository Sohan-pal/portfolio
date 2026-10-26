import { createFileRoute } from "@tanstack/react-router";
import {
  SparkTicks,
  Sparkle,
  CloudCluster,
  BrushWash,
  Bird,
  CurvedArrow,
  ScribbleUnderline,
  WavyDivider,
  WobblyFrame,
} from "@/components/doodles";

export const Route = createFileRoute("/design-preview")({
  component: DesignPreview,
});

const tokens = [
  { name: "--paper", value: "#FBF8F0", label: "Page background", textColor: "#0E1A3A" },
  { name: "--paper-deep", value: "#F3EEDF", label: "Card / Section fill", textColor: "#0E1A3A" },
  { name: "--ink", value: "#0E1A3A", label: "Text + outlines (deep navy)", textColor: "#FFFFFF" },
  { name: "--ink-soft", value: "#4A5578", label: "Body / secondary text", textColor: "#FFFFFF" },
  { name: "--blue", value: "#1677FF", label: "Primary accent / headline", textColor: "#FFFFFF" },
  { name: "--blue-deep", value: "#0B4FC4", label: "Hover / active blue", textColor: "#FFFFFF" },
  { name: "--sky", value: "#A9D6FA", label: "Sky wash / cloud shadow", textColor: "#0E1A3A" },
  { name: "--sky-light", value: "#D6ECFF", label: "Illustrated background", textColor: "#0E1A3A" },
  { name: "--cloud", value: "#FFF6DC", label: "Cream cloud fill", textColor: "#0E1A3A" },
  { name: "--sun", value: "#FFC83D", label: "Sparkle / tiny highlights", textColor: "#0E1A3A" },
  { name: "--line", value: "rgba(14,26,58,0.15)", label: "Hairline divider", textColor: "#0E1A3A" },
];

function DesignPreview() {
  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] pt-32 pb-24 px-5">
      <div className="mx-auto max-w-5xl space-y-16">
        {/* Header */}
        <header className="border-b border-[var(--line)] pb-8">
          <div className="flex items-center gap-3">
            <span className="inline-block rounded-full bg-[var(--blue)] px-3 py-1 text-xs font-medium text-white shadow-[2px_2px_0px_var(--ink)]">
              Phase 0
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--ink-soft)]">
              Design System & Token Preview
            </span>
          </div>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Hand-Illustrated <span className="text-[var(--blue)]">Sketchbook</span> System
          </h1>
          <p className="mt-2 text-base text-[var(--ink-soft)] max-w-2xl">
            Light theme token audit, reusable SVG doodles, hard paper shadows, and typography.
            This route is temporary and will be removed in Phase 5.
          </p>
        </header>

        {/* 1. Color Palette Tokens */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Sparkle size={18} color="var(--blue)" />
            <h2 className="font-display text-2xl font-bold">1. Color Palette Tokens</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {tokens.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border-2 border-[var(--ink)] p-4 shadow-[3px_3px_0px_var(--ink)] transition-transform hover:-translate-y-1"
                style={{ backgroundColor: t.value === "rgba(14,26,58,0.15)" ? "var(--paper-deep)" : t.value }}
              >
                <div
                  className="text-xs font-mono font-bold"
                  style={{ color: t.textColor }}
                >
                  {t.name}
                </div>
                <div
                  className="mt-1 text-sm font-semibold"
                  style={{ color: t.textColor }}
                >
                  {t.value}
                </div>
                <div
                  className="mt-2 text-xs opacity-80"
                  style={{ color: t.textColor }}
                >
                  {t.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <WavyDivider />

        {/* 2. Typography & Headings */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <Sparkle size={18} color="var(--sun)" />
            <h2 className="font-display text-2xl font-bold">2. Typography (Existing Fonts Only)</h2>
          </div>
          <div className="rounded-2xl border-2 border-[var(--ink)] bg-[var(--paper-deep)] p-6 shadow-[4px_4px_0px_var(--ink)] space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-4xl md:text-6xl font-bold text-[var(--ink)]">
                  Hi, I'm <span className="text-[var(--blue)]">Sohan</span>
                </span>
                <SparkTicks size={32} />
              </div>
              <ScribbleUnderline width={220} height={14} className="mt-1" />
              <p className="mt-2 text-xs font-mono text-[var(--ink-soft)]">
                Heading 1: Space Grotesk Bold, 2px ink outline doodle, sun tick marks
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--ink)]">
                Featured Projects
              </h3>
              <p className="mt-1 text-base text-[var(--ink-soft)] leading-relaxed max-w-prose">
                Body text in Inter regular, 1.6 line-height, constrained measure. The sketchbook theme uses warm cream paper, deep navy ink, and soft sky accents to feel friendly, calm, and handcrafted.
              </p>
            </div>
          </div>
        </section>

        <WavyDivider />

        {/* 3. Reusable SVG Doodles */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 mb-2">
            <Sparkle size={18} color="var(--blue)" />
            <h2 className="font-display text-2xl font-bold">3. Reusable SVG Doodles (src/components/doodles/)</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Cloud Clusters */}
            <div className="rounded-2xl border-2 border-[var(--ink)] bg-[var(--paper)] p-6 shadow-[4px_4px_0px_var(--sky)]">
              <h3 className="font-display text-lg font-bold mb-3 flex items-center justify-between">
                <span>CloudCluster</span>
                <span className="text-xs font-mono text-[var(--ink-soft)]">hero / compact / puff</span>
              </h3>
              <div className="flex flex-col items-center gap-6 bg-[var(--sky-light)] rounded-xl p-6 border border-[var(--line)]">
                <CloudCluster variant="hero" size={280} />
                <div className="flex gap-4 items-center">
                  <CloudCluster variant="compact" size={150} />
                  <CloudCluster variant="puff" size={100} />
                </div>
              </div>
            </div>

            {/* Brush Washes */}
            <div className="rounded-2xl border-2 border-[var(--ink)] bg-[var(--paper)] p-6 shadow-[4px_4px_0px_var(--sky)]">
              <h3 className="font-display text-lg font-bold mb-3 flex items-center justify-between">
                <span>BrushWash</span>
                <span className="text-xs font-mono text-[var(--ink-soft)]">backdrop / oval / streak</span>
              </h3>
              <div className="flex flex-col items-center gap-4 bg-[var(--paper-deep)] rounded-xl p-6 border border-[var(--line)] overflow-hidden">
                <BrushWash variant="oval" size={200} />
                <BrushWash variant="streak" size={220} />
              </div>
            </div>

            {/* Bird & Sparkles */}
            <div className="rounded-2xl border-2 border-[var(--ink)] bg-[var(--paper)] p-6 shadow-[4px_4px_0px_var(--sky)]">
              <h3 className="font-display text-lg font-bold mb-3 flex items-center justify-between">
                <span>Bird & Sparkles</span>
                <span className="text-xs font-mono text-[var(--ink-soft)]">dove / silhouette / star</span>
              </h3>
              <div className="flex items-center justify-around bg-[var(--sky-light)] rounded-xl p-8 border border-[var(--line)]">
                <div className="text-center">
                  <Bird variant="dove" size={72} />
                  <span className="text-xs font-mono mt-2 block">Dove</span>
                </div>
                <div className="text-center">
                  <Bird variant="silhouette" size={36} />
                  <span className="text-xs font-mono mt-2 block">Silhouette</span>
                </div>
                <div className="text-center">
                  <Sparkle size={32} color="var(--sun)" secondary />
                  <span className="text-xs font-mono mt-2 block">Sparkle</span>
                </div>
                <div className="text-center">
                  <SparkTicks size={36} />
                  <span className="text-xs font-mono mt-2 block">SparkTicks</span>
                </div>
              </div>
            </div>

            {/* Arrows & Underlines */}
            <div className="rounded-2xl border-2 border-[var(--ink)] bg-[var(--paper)] p-6 shadow-[4px_4px_0px_var(--sky)]">
              <h3 className="font-display text-lg font-bold mb-3 flex items-center justify-between">
                <span>CurvedArrow & ScribbleUnderline</span>
                <span className="text-xs font-mono text-[var(--ink-soft)]">curved strokes</span>
              </h3>
              <div className="flex flex-col gap-6 bg-[var(--paper-deep)] rounded-xl p-6 border border-[var(--line)]">
                <div className="flex justify-around items-center">
                  <div className="text-center">
                    <CurvedArrow direction="right" size={48} />
                    <span className="text-xs font-mono mt-1 block">right arch</span>
                  </div>
                  <div className="text-center">
                    <CurvedArrow direction="down" size={32} />
                    <span className="text-xs font-mono mt-1 block">down</span>
                  </div>
                  <div className="text-center">
                    <CurvedArrow direction="up-right" size={36} />
                    <span className="text-xs font-mono mt-1 block">up-right</span>
                  </div>
                </div>
                <div className="space-y-3 pt-2">
                  <div className="w-48 mx-auto">
                    <span className="text-sm font-semibold">Single underline:</span>
                    <ScribbleUnderline variant="single" height={10} />
                  </div>
                  <div className="w-48 mx-auto">
                    <span className="text-sm font-semibold">Double underline:</span>
                    <ScribbleUnderline variant="double" height={14} />
                  </div>
                  <div className="w-48 mx-auto">
                    <span className="text-sm font-semibold">Wave underline:</span>
                    <ScribbleUnderline variant="wave" height={12} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WavyDivider />

        {/* 4. Component Primitives (Buttons, Cards, Inputs) */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <Sparkle size={18} color="var(--sun)" />
            <h2 className="font-display text-2xl font-bold">4. Component Specs & Hard Offset Shadows</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Buttons */}
            <div className="rounded-2xl border-2 border-[var(--ink)] bg-[var(--paper-deep)] p-6 shadow-[4px_4px_0px_var(--ink)] space-y-4">
              <h3 className="font-display text-lg font-bold">Buttons</h3>
              <div>
                <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[var(--ink)] bg-[var(--blue)] px-5 py-3 font-medium text-white shadow-[4px_4px_0px_var(--ink)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_var(--ink)] active:translate-y-1 active:shadow-[1px_1px_0px_var(--ink)] -rotate-0.5">
                  Primary Button →
                </button>
                <p className="mt-2 text-xs font-mono text-[var(--ink-soft)]">
                  --blue fill, 2px ink border, 4px hard shadow, -0.5deg tilt
                </p>
              </div>

              <div>
                <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[var(--ink)] bg-[var(--paper)] px-5 py-3 font-medium text-[var(--ink)] shadow-[4px_4px_0px_var(--ink)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_var(--ink)] active:translate-y-1 active:shadow-[1px_1px_0px_var(--ink)]">
                  Secondary Button
                </button>
                <p className="mt-2 text-xs font-mono text-[var(--ink-soft)]">
                  --paper fill, 2px ink border, 4px hard shadow
                </p>
              </div>
            </div>

            {/* Wobbly Card Frame */}
            <div className="rounded-2xl border-2 border-[var(--ink)] bg-[var(--paper-deep)] p-6 shadow-[4px_4px_0px_var(--ink)] space-y-4">
              <h3 className="font-display text-lg font-bold">Wobbly Frame Card</h3>
              <WobblyFrame fill="paper" shadow="ink" tilt={-0.6} className="p-4 border-2">
                <div className="aspect-video w-full rounded-lg bg-[var(--sky-light)] border border-[var(--ink)] flex items-center justify-center text-xs font-mono text-[var(--ink-soft)]">
                  [ Thumbnail Frame ]
                </div>
                <h4 className="mt-3 font-display text-base font-bold text-[var(--ink)]">
                  Project Card Title
                </h4>
                <p className="mt-1 text-xs text-[var(--ink-soft)]">
                  Hand-drawn wobbly corner radii with 4px hard paper shadow.
                </p>
              </WobblyFrame>
            </div>

            {/* Form Input */}
            <div className="rounded-2xl border-2 border-[var(--ink)] bg-[var(--paper-deep)] p-6 shadow-[4px_4px_0px_var(--ink)] space-y-4">
              <h3 className="font-display text-lg font-bold">Form Input</h3>
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[var(--ink-soft)] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  defaultValue="Sohan"
                  className="w-full rounded-xl border-2 border-[var(--ink)] bg-[var(--paper)] px-4 py-2.5 text-sm text-[var(--ink)] shadow-[3px_3px_0px_var(--sky)] outline-none focus:border-[var(--blue)] focus:shadow-[4px_4px_0px_var(--blue)]"
                />
              </div>
              <div className="flex gap-2">
                <span className="rounded-full border border-[var(--ink)] bg-[var(--cloud)] px-3 py-1 text-xs font-medium text-[var(--ink)] shadow-[2px_2px_0px_var(--ink)]">
                  UI/UX
                </span>
                <span className="rounded-full border border-[var(--ink)] bg-[var(--sky-light)] px-3 py-1 text-xs font-medium text-[var(--ink)] shadow-[2px_2px_0px_var(--ink)]">
                  Motion
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Portrait Reference Check */}
        <section className="rounded-2xl border-2 border-[var(--ink)] bg-[var(--sky-light)] p-8 shadow-[6px_6px_0px_var(--ink)]">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-48 h-48 shrink-0">
              <img
                src="/sohan illustration 2.png"
                alt="Sohan sketch portrait"
                className="w-full h-full object-cover rounded-2xl border-2 border-[var(--ink)] shadow-[4px_4px_0px_var(--ink)]"
              />
              <div className="absolute -top-3 -right-3">
                <Bird variant="silhouette" size={32} />
              </div>
            </div>
            <div>
              <span className="inline-block rounded-full bg-[var(--paper)] px-3 py-1 text-xs font-medium border border-[var(--ink)] text-[var(--ink)] mb-2">
                Portrait File Verified
              </span>
              <h3 className="font-display text-2xl font-bold text-[var(--ink)]">
                /sohan illustration 2.png
              </h3>
              <p className="mt-2 text-sm text-[var(--ink-soft)] max-w-xl leading-relaxed">
                Matches the character sketch in the reference image (blue sweater, ink outline, sky and clouds backdrop). Will be anchored to the bottom hero right-column in Phase 2 with overlapping cloud clusters and bird doodle.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
