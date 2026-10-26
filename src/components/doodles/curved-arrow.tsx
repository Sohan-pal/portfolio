import type { SVGProps } from "react";

interface CurvedArrowProps extends SVGProps<SVGSVGElement> {
  direction?: "right" | "down" | "up-right";
  color?: string;
  size?: number;
}

export function CurvedArrow({
  direction = "right",
  color = "var(--ink, #0E1A3A)",
  size,
  className = "",
  ...props
}: CurvedArrowProps) {
  if (direction === "down") {
    return (
      <svg
        width={size || 32}
        height={size ? size * 1.5 : 48}
        viewBox="0 0 32 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        {...props}
      >
        <path
          d="M12 4 C18 14 18 28 15 40"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M7 32 C10 36 14 41 15 42 C17 39 21 34 24 31"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (direction === "up-right") {
    return (
      <svg
        width={size || 36}
        height={size || 36}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        {...props}
      >
        <path
          d="M8 28 C12 20 18 14 28 8"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M18 7 C23 7 27 7.5 28.5 8 C28 9.5 28 14 27.5 19"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Right curved arrow (matching center arch arrow in reference)
  return (
    <svg
      width={size || 48}
      height={size ? size * 0.6 : 30}
      viewBox="0 0 56 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M6 24 C14 8 32 6 48 18"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M38 10 C42 13 47 17 49 19 C48 24 45 29 42 32"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
