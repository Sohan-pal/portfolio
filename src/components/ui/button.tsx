import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--blue)] text-white border border-transparent shadow-[0_2px_12px_rgba(22,119,255,0.32)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(22,119,255,0.4)] active:translate-y-0.5 transition-all rounded-xl",
        destructive:
          "bg-destructive text-destructive-foreground border border-transparent shadow-[0_2px_8px_rgba(229,62,62,0.3)] hover:bg-destructive/90 rounded-xl",
        outline:
          "border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] shadow-[0_2px_8px_rgba(14,26,58,0.08)] hover:bg-[var(--paper-deep)] hover:-translate-y-0.5 rounded-xl transition-all",
        secondary:
          "bg-[var(--paper)] text-[var(--ink)] border border-[var(--line)] shadow-[0_2px_8px_rgba(14,26,58,0.08)] hover:-translate-y-0.5 hover:bg-[var(--paper-deep)] active:translate-y-0.5 transition-all rounded-xl",
        ghost: "hover:bg-[var(--paper-deep)] text-[var(--ink)] rounded-xl",
        link: "text-[var(--blue)] underline-offset-4 hover:underline hover:decoration-wavy font-medium",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
