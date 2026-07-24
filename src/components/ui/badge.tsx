import * as React from "react";
import { cn } from "@/lib/utils";

const Badge = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & { variant?: "default" | "outline" | "concept" }
>(({ className, variant = "default", ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-medium transition-colors",
      variant === "default" &&
        "bg-frost/10 text-frost border border-frost/20",
      variant === "outline" &&
        "border border-border text-muted bg-surface/40",
      variant === "concept" &&
        "bg-coral/10 text-coral border border-coral/25",
      className
    )}
    {...props}
  />
));
Badge.displayName = "Badge";

export { Badge };
