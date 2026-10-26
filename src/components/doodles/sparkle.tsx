import type { SVGProps } from "react";

interface SparkleProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  secondary?: boolean;
}

export function Sparkle({
  size = 24,
  color = "var(--sun, #FFC83D)",
  secondary = false,
  className = "",
  ...props
}: SparkleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* 4-point hand-drawn star sparkle with ink outline and warm fill */}
      <path
        d="M16 2 C16 9 20 13 27 15 C20 17 16 21 16 29 C16 21 12 17 5 15 C12 13 16 9 16 2 Z"
        fill={color}
        stroke="var(--ink, #0E1A3A)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {secondary && (
        <circle
          cx="26"
          cy="6"
          r="2"
          fill={color}
          stroke="var(--ink, #0E1A3A)"
          strokeWidth="1"
        />
      )}
    </svg>
  );
}
