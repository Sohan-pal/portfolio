import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-xl border-2 border-[var(--ink)] bg-[var(--paper)] px-3.5 py-1 text-base text-[var(--ink)] shadow-[3px_3px_0px_var(--sky)] placeholder:text-[var(--ink-soft)]/60 focus-visible:outline-none focus-visible:border-[var(--blue)] focus-visible:shadow-[4px_4px_0px_var(--blue)] transition-all disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
