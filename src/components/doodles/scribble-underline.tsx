import type { SVGProps } from "react";

interface ScribbleUnderlineProps extends SVGProps<SVGSVGElement> {
  variant?: "single" | "double" | "wave";
  color?: string;
  width?: number | string;
  height?: number;
}

export function ScribbleUnderline({
  variant = "single",
  color = "var(--blue, #1677FF)",
  width = "100%",
  height = 12,
  className = "",
  ...props
}: ScribbleUnderlineProps) {
  if (variant === "double") {
    return (
      <svg
        width={width}
        height={height * 1.5}
        viewBox="0 0 160 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={className}
        aria-hidden="true"
        {...props}
      >
        <path
          d="M4 8 C35 4 85 10 156 6"
          stroke={color}
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M12 14 C48 11 105 16 148 12"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
        />
      </svg>
    );
  }

  if (variant === "wave") {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 160 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={className}
        aria-hidden="true"
        {...props}
      >
        <path
          d="M3 8 C15 3 25 12 38 7 C50 3 62 11 75 7 C88 3 100 11 113 7 C126 3 138 11 157 7"
          stroke={color}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Single dynamic hand-drawn underline
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 140 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2 7 C28 4 68 8 102 5 C118 4 132 6 138 6"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
