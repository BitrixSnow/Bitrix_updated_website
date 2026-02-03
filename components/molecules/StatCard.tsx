import { cn } from "@/lib/utils";
import type { Stat } from "@/lib/types";

interface StatCardProps {
  stat: Stat;
  className?: string;
}

export function StatCard({ stat, className }: StatCardProps) {
  return (
    <div className={cn("text-center", className)}>
      <div className="flex items-baseline justify-center">
        <span className="text-5xl md:text-6xl font-bold text-foreground">
          {stat.value}
        </span>
        {stat.suffix && (
          <span className="text-3xl md:text-4xl font-bold text-primary">
            {stat.suffix}
          </span>
        )}
      </div>
      <p className="mt-2 text-muted-foreground text-sm">{stat.label}</p>
    </div>
  );
}
