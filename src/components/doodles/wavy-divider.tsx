import type { SVGProps } from "react";

interface WavyDividerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  strokeWidth?: number;
}

export function WavyDivider({
  color = "var(--line, rgba(14,26,58,0.15))",
  strokeWidth = 2,
  className = "",
  ...props
}: WavyDividerProps) {
  return (
    <div className={`w-full overflow-hidden py-4 ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-4"
        {...props}
      >
        <path
          d="M0 8 Q 50 2, 100 8 T 200 8 T 300 8 T 400 8 T 500 8 T 600 8 T 700 8 T 800 8 T 900 8 T 1000 8 T 1100 8 T 1200 8"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
