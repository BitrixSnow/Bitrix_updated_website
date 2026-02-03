import { Container, SectionTitle } from "@/components/atoms";
import { StatCard } from "@/components/molecules";
import type { Stat } from "@/lib/types";
import { cn } from "@/lib/utils";

interface StatsSectionProps {
  title?: string;
  highlight?: string;
  stats: Stat[];
  className?: string;
}

export function StatsSection({
  title = "Our numbers",
  highlight = "speak",
  stats,
  className,
}: StatsSectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <Container>
        <SectionTitle
          title={title}
          highlight={highlight}
          align="center"
          className="mb-12"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
