import type { SVGProps } from "react";

interface SparkTicksProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export function SparkTicks({
  size = 28,
  color = "var(--sun, #FFC83D)",
  className = "",
  ...props
}: SparkTicksProps) {
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
      {/* 3 lively hand-drawn spark ticks radiating outward */}
      <path d="M6 26C11 22 17 19 26 18" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M9 17C14 12 21 8 29 6" stroke={color} strokeWidth="3.2" strokeLinecap="round" />
      <path d="M17 11C20 6 22 4 23 2" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  );
}
