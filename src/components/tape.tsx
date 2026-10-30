import React from "react";

interface TapeProps {
  color?: "blue" | "sun" | string;
  className?: string;
  style?: React.CSSProperties;
  rotation?: number;
  children?: React.ReactNode;
}

export function Tape({ color = "blue", className = "", style, rotation, children }: TapeProps) {
  const bgColor =
    color === "blue"
      ? "color-mix(in srgb, var(--blue) 40%, transparent)"
      : color === "sun"
        ? "color-mix(in srgb, var(--sun) 70%, transparent)"
        : color;

  return (
    <div
      className={`relative pointer-events-none select-none ${className}`}
      style={{
        backgroundColor: bgColor,
        mixBlendMode: "multiply",
        clipPath:
          "polygon(4px 0%, calc(100% - 4px) 0%, 100% 16%, calc(100% - 4px) 33%, 100% 50%, calc(100% - 4px) 66%, 100% 83%, calc(100% - 4px) 100%, 4px 100%, 0% 83%, 4px 66%, 0% 50%, 4px 33%, 0% 16%)",
        transform: rotation !== undefined ? `rotate(${rotation}deg)` : undefined,
        boxShadow: "none",
        border: "none",
        ...style,
      }}
      aria-hidden="true"
    >
      {/* Faint lighter sheen using --paper at ~35% opacity */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in srgb, var(--paper) 35%, transparent) 0%, transparent 65%)",
        }}
      />
      {children}
    </div>
  );
}
