import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-xs font-medium uppercase tracking-[0.18em] transition-all duration-400 transform-gpu focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-none",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-[0_4px_16px_rgba(139,58,58,0.2)] hover:scale-[1.04] hover:shadow-[0_8px_30px_rgba(139,58,58,0.32)] active:scale-[0.98]",
        secondary:
          "border border-border/60 bg-transparent text-foreground/65 hover:scale-[1.04] hover:text-foreground hover:border-primary/30 hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] active:scale-[0.98]",
        ghost: "text-foreground/55 hover:text-foreground hover:bg-accent/12"
      },
      size: {
        default: "h-11 px-7 py-2",
        sm: "h-9 px-5",
        lg: "h-12 px-9"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
