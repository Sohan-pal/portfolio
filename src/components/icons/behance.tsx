// Custom Behance icon matching the Lucide icon API (accepts size prop).
export function BehanceIcon({ size = 24, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      {/* Behance "Bē" logomark */}
      <path d="M7.5 11C8.88 11 10 9.88 10 8.5S8.88 6 7.5 6H3v5h4.5zM3 18h5a3 3 0 0 0 0-6H3v6zM15 6h5v1.5h-5V6zm2.5 4c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5c1.52 0 2.87-.76 3.69-1.92l-1.53-1.03a2.5 2.5 0 0 1-2.16 1.2 2.5 2.5 0 0 1-2.39-1.75h6.52c.08-.32.12-.65.12-1 0-2.49-2.01-4.5-4.5-4.5zm-2.39 3.75a2.5 2.5 0 0 1 4.78 0h-4.78z" />
    </svg>
  );
}
