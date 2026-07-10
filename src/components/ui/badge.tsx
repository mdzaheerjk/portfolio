import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "accent" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-white/10 text-white border-white/20",
    secondary: "bg-card text-secondary border-border",
    accent: "bg-card text-white border-border",
    outline: "bg-transparent text-muted border-border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-all duration-500",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
