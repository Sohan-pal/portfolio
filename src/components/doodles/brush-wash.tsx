import type { SVGProps } from "react";

interface BrushWashProps extends SVGProps<SVGSVGElement> {
  variant?: "oval" | "backdrop" | "streak";
  size?: number;
  color?: string;
}

export function BrushWash({
  variant = "backdrop",
  size,
  color = "var(--sky-light, #D6ECFF)",
  className = "",
  ...props
}: BrushWashProps) {
  if (variant === "streak") {
    return (
      <svg
        width={size || 200}
        height={size ? size * 0.2 : 40}
        viewBox="0 0 200 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        {...props}
      >
        <path
          d="M8 22 C24 16 68 18 102 15 C136 12 178 18 194 22 C184 28 140 26 102 28 C64 30 18 28 8 22 Z"
          fill={color}
          opacity="0.85"
        />
        <path
          d="M16 26 C42 22 96 23 138 21 C168 19 186 24 180 27 C152 29 88 31 16 26 Z"
          fill="var(--sky, #A9D6FA)"
          opacity="0.5"
        />
      </svg>
    );
  }

  if (variant === "oval") {
    return (
      <svg
        width={size || 320}
        height={size ? size * 0.75 : 240}
        viewBox="0 0 320 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        {...props}
      >
        <path
          d="M50 110 C40 60 90 25 160 20 C230 15 280 55 285 110 C290 170 240 220 160 225 C80 230 45 180 50 110 Z"
          fill={color}
          opacity="0.7"
        />
        <path
          d="M70 120 C60 80 100 45 160 40 C215 35 255 70 260 120 C265 170 225 205 160 210 C95 215 65 175 70 120 Z"
          fill="var(--sky, #A9D6FA)"
          opacity="0.35"
        />
      </svg>
    );
  }

  // Large portrait backdrop wash with organic painterly lobes
  return (
    <svg
      width={size || 480}
      height={size ? size * 1.1 : 520}
      viewBox="0 0 480 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Outer soft sky blue stroke wash */}
      <path
        d="M60 260 C40 160 100 70 220 50 C330 30 420 90 440 200 C460 320 410 440 280 470 C160 500 80 420 60 260 Z"
        fill={color}
      />
      {/* Inner wash layer with hand-drawn brush streak texture */}
      <path
        d="M90 250 C75 170 130 95 230 80 C320 65 390 115 410 210 C425 310 380 410 270 435 C170 460 105 385 90 250 Z"
        fill="var(--sky, #A9D6FA)"
        opacity="0.45"
      />
      {/* Soft painterly sky accents */}
      <path
        d="M130 140 C190 110 270 115 320 150 C290 180 230 170 170 175 C140 175 125 155 130 140 Z"
        fill="var(--sky, #A9D6FA)"
        opacity="0.6"
      />
    </svg>
  );
}
