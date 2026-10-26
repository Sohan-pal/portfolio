import type { SVGProps } from "react";

interface CloudClusterProps extends SVGProps<SVGSVGElement> {
  variant?: "hero" | "compact" | "puff";
  size?: number;
}

export function CloudCluster({
  variant = "hero",
  size,
  className = "",
  ...props
}: CloudClusterProps) {
  if (variant === "puff") {
    return (
      <svg
        width={size || 120}
        height={size ? size * 0.6 : 72}
        viewBox="0 0 120 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        {...props}
      >
        {/* Sky shadow under cloud */}
        <path
          d="M20 54C28 62 88 64 104 54C112 48 108 38 100 36C98 22 84 14 70 18C62 10 46 10 38 20C24 18 12 28 14 42C12 48 16 52 20 54Z"
          fill="var(--sky, #A9D6FA)"
          transform="translate(4, 5)"
        />
        {/* Main cream cloud */}
        <path
          d="M20 52C14 52 10 46 11 38C12 28 22 20 34 22C40 12 56 11 66 18C78 14 92 22 94 34C102 36 108 44 102 52C96 58 26 58 20 52Z"
          fill="var(--cloud, #FFF6DC)"
          stroke="var(--ink, #0E1A3A)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* Soft internal cloud puff lines */}
        <path
          d="M32 30C36 24 46 22 52 26"
          stroke="var(--ink, #0E1A3A)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M68 25C74 20 84 22 88 28"
          stroke="var(--ink, #0E1A3A)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (variant === "compact") {
    return (
      <svg
        width={size || 180}
        height={size ? size * 0.55 : 100}
        viewBox="0 0 180 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        {...props}
      >
        {/* Sky shadow wash */}
        <path
          d="M25 78 C15 78 8 68 12 55 C16 40 32 32 46 38 C56 20 82 16 100 28 C118 18 142 26 148 44 C164 46 172 60 164 74 C156 84 35 84 25 78 Z"
          fill="var(--sky, #A9D6FA)"
          transform="translate(4, 5)"
        />
        {/* Cream cloud body */}
        <path
          d="M25 74 C16 74 10 65 14 53 C18 39 33 31 46 36 C56 18 80 15 98 26 C116 16 140 24 146 41 C161 44 169 57 161 70 C153 79 33 79 25 74 Z"
          fill="var(--cloud, #FFF6DC)"
          stroke="var(--ink, #0E1A3A)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* Hand-drawn inner curves */}
        <path
          d="M44 42 C50 32 64 30 74 36"
          stroke="var(--ink, #0E1A3A)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M96 32 C106 24 122 28 128 38"
          stroke="var(--ink, #0E1A3A)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Hero variant - rich multi-puff cloud cluster
  return (
    <svg
      width={size || 340}
      height={size ? size * 0.5 : 170}
      viewBox="0 0 340 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Underlying sky wash */}
      <path
        d="M38 135 C18 135 10 115 16 95 C22 72 45 60 66 68 C80 38 120 30 152 48 C180 28 225 35 240 65 C265 55 298 70 306 95 C320 108 322 128 308 142 C290 155 55 152 38 135 Z"
        fill="var(--sky, #A9D6FA)"
        transform="translate(6, 6)"
      />
      {/* Back cloud puff for depth */}
      <path
        d="M170 85 C180 50 220 42 248 65 C275 60 300 80 302 110 C290 135 220 140 170 130 Z"
        fill="var(--sky-light, #D6ECFF)"
        stroke="var(--ink, #0E1A3A)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Main cream cloud */}
      <path
        d="M38 132 C20 132 12 114 18 96 C24 74 46 63 66 70 C80 40 118 34 148 51 C176 32 218 39 232 68 C256 60 285 74 292 98 C306 110 308 128 295 140 C280 150 54 148 38 132 Z"
        fill="var(--cloud, #FFF6DC)"
        stroke="var(--ink, #0E1A3A)"
        strokeWidth="2.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Hand-drawn puffy crease marks */}
      <path
        d="M62 76 C72 62 92 60 106 68"
        stroke="var(--ink, #0E1A3A)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M144 58 C160 46 186 50 196 66"
        stroke="var(--ink, #0E1A3A)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M230 76 C245 68 266 74 274 88"
        stroke="var(--ink, #0E1A3A)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
