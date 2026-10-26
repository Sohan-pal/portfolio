import type { SVGProps } from "react";

interface BirdProps extends SVGProps<SVGSVGElement> {
  variant?: "dove" | "silhouette";
  size?: number;
}

export function Bird({
  variant = "dove",
  size,
  className = "",
  ...props
}: BirdProps) {
  if (variant === "silhouette") {
    return (
      <svg
        width={size || 28}
        height={size ? size * 0.6 : 18}
        viewBox="0 0 28 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        {...props}
      >
        {/* Simple hand-drawn soaring bird silhouette in blue/ink */}
        <path
          d="M2 12 C7 4 11 4 14 9 C17 4 21 4 26 12 C21 9 17 9 14 13 C11 9 7 9 2 12 Z"
          fill="var(--blue, #1677FF)"
        />
      </svg>
    );
  }

  // Detailed sketchbook dove matching top-right of reference
  return (
    <svg
      width={size || 68}
      height={size ? size * 0.75 : 52}
      viewBox="0 0 68 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Back wing shadow */}
      <path
        d="M28 18 L48 4 C51 3 53 7 50 11 L42 22 Z"
        fill="var(--sky, #A9D6FA)"
        stroke="var(--ink, #0E1A3A)"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Main body & tail */}
      <path
        d="M10 28 C6 28 4 34 8 36 L18 35 L26 38 C32 40 40 38 46 32 C52 26 56 22 55 18 C54 16 50 16 46 19 C38 24 30 25 24 25 L10 28 Z"
        fill="var(--cloud, #FFF6DC)"
        stroke="var(--ink, #0E1A3A)"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* Front wing with feathers */}
      <path
        d="M32 26 C36 20 44 8 54 2 C56 1 58 4 56 7 L44 26 C48 24 54 19 56 22 C54 25 48 30 42 32 C38 34 34 32 32 26 Z"
        fill="var(--cloud, #FFF6DC)"
        stroke="var(--ink, #0E1A3A)"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* Wing tip blue highlight */}
      <path
        d="M48 6 C50 5 52 4 54 2 C56 1 58 4 56 7 L50 12 Z"
        fill="var(--blue, #1677FF)"
      />
      {/* Beak & eye */}
      <circle cx="53" cy="18" r="1.5" fill="var(--ink, #0E1A3A)" />
      <path
        d="M55 18 L60 17 L56 20 Z"
        fill="var(--sun, #FFC83D)"
        stroke="var(--ink, #0E1A3A)"
        strokeWidth="1.2"
      />
    </svg>
  );
}
