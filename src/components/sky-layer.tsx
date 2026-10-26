import { CloudCluster, Sparkle, BrushWash } from "@/components/doodles";

/**
 * SkyLayer: Illustrated background framing the site with painterly clouds,
 * sky washes, sparkles, and birds at the edges and corners, matching the reference.
 * Strictly positioned off text with pointer-events: none and aria-hidden.
 */
export function SkyLayer() {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* Top-Left Sky Wash & Cloud Framing */}
      <div className="absolute -top-16 -left-20 opacity-90 transition-opacity">
        <BrushWash variant="oval" size={360} color="var(--sky-light, #D6ECFF)" />
      </div>
      <div className="absolute -top-12 -left-16">
        <CloudCluster variant="compact" size={240} />
      </div>

      {/* Top-Right Sky Accents */}
      <div className="absolute -top-10 -right-12 opacity-85">
        <BrushWash variant="oval" size={320} color="var(--sky-light, #D6ECFF)" />
      </div>
      <div className="absolute top-40 right-28">
        <Sparkle size={18} color="var(--sun, #FFC83D)" />
      </div>

      {/* Left Margin Accent (subtle puff) */}
      <div className="absolute top-1/2 -left-24 -translate-y-1/2 opacity-70 hidden lg:block">
        <CloudCluster variant="puff" size={160} />
      </div>

      {/* Right Margin Accent (sparkle + streak) */}
      <div className="absolute top-2/3 -right-16 opacity-60 hidden lg:block">
        <CloudCluster variant="compact" size={180} />
      </div>
      <div className="absolute top-[45%] right-10 hidden md:block">
        <Sparkle size={16} color="var(--sky, #A9D6FA)" />
      </div>
      <div className="absolute top-[68%] left-12 hidden md:block">
        <Sparkle size={14} color="var(--sun, #FFC83D)" />
      </div>
    </div>
  );
}
