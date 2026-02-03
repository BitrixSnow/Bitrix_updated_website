import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg";
}

export function SectionTitle({
  title,
  highlight,
  subtitle,
  className,
  align = "left",
  size = "md",
}: SectionTitleProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const sizeClasses = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl",
  };

  return (
    <div className={cn("space-y-4", alignmentClasses[align], className)}>
      <h2
        className={cn(
          "font-bold tracking-tight text-balance",
          sizeClasses[size]
        )}
      >
        {title}{" "}
        {highlight && <span className="text-primary">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl text-lg">{subtitle}</p>
      )}
    </div>
  );
}
