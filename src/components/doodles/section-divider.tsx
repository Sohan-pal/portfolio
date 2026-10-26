interface SectionCloudDividerProps {
  fill?: "paper" | "paper-deep";
  flip?: boolean;
  className?: string;
}

export function SectionCloudDivider({
  fill = "paper",
  flip = false,
  className = "",
}: SectionCloudDividerProps) {
  const fillColor = fill === "paper-deep" ? "var(--paper-deep, #F3EEDF)" : "var(--paper, #FBF8F0)";

  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none py-2 ${
        flip ? "rotate-180" : ""
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-9"
      >
        {/* Sky shadow under crests */}
        <path
          d="M0 26 C120 12 220 10 340 24 C460 12 560 8 680 22 C800 10 920 12 1040 24 C1120 16 1160 18 1200 26 L1200 36 L0 36 Z"
          fill="var(--sky, #A9D6FA)"
          transform="translate(0, 3)"
        />
        {/* Main cloud / hill crest */}
        <path
          d="M0 24 C120 10 220 8 340 22 C460 10 560 6 680 20 C800 8 920 10 1040 22 C1120 14 1160 16 1200 24 L1200 36 L0 36 Z"
          fill={fillColor}
          stroke="var(--ink, #0E1A3A)"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        {/* Subtle cloud puff marks */}
        <path
          d="M310 14 C330 8 360 8 380 14"
          stroke="var(--ink, #0E1A3A)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M650 12 C670 6 700 6 720 12"
          stroke="var(--ink, #0E1A3A)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
