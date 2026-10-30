import type { ReactNode } from "react";

interface WobblyFrameProps {
  children?: ReactNode;
  className?: string;
  fill?: "paper" | "paper-deep" | "sky-light" | "transparent";
  shadow?: "ink" | "sky" | "blue" | "none";
  tilt?: boolean | number;
  strokeWidth?: 2 | 3;
}

export function WobblyFrame({
  children,
  className = "",
  fill = "paper",
  shadow = "ink",
  tilt = false,
  strokeWidth = 2,
}: WobblyFrameProps) {
  const fillClass =
    fill === "paper"
      ? "bg-[var(--paper,#FBF8F0)]"
      : fill === "paper-deep"
        ? "bg-[var(--paper-deep,#F3EEDF)]"
        : fill === "sky-light"
          ? "bg-[var(--sky-light,#D6ECFF)]"
          : "bg-transparent";

  const shadowClass =
    shadow === "ink"
      ? "shadow-[4px_4px_0px_var(--ink,#0E1A3A)]"
      : shadow === "sky"
        ? "shadow-[4px_4px_0px_var(--sky,#A9D6FA)]"
        : shadow === "blue"
          ? "shadow-[4px_4px_0px_var(--blue-deep,#0B4FC4)]"
          : "";

  // Organic uneven border radius for sketchbook feel
  const organicRadius = "rounded-[16px_14px_18px_13px]";

  const tiltStyle =
    tilt === true
      ? { transform: "rotate(-0.6deg)" }
      : typeof tilt === "number"
        ? { transform: `rotate(${tilt}deg)` }
        : undefined;

  return (
    <div
      style={tiltStyle}
      className={`relative border-[var(--ink,#0E1A3A)] ${organicRadius} ${fillClass} ${shadowClass} ${className}`}
      data-stroke={strokeWidth}
    >
      <div className="w-full h-full overflow-hidden" style={{ borderRadius: "inherit" }}>
        {children}
      </div>
    </div>
  );
}
