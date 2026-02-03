import { Container, SectionTitle } from "@/components/atoms";
import type { TimelineItem } from "@/lib/types";
import { cn } from "@/lib/utils";

interface TimelineSectionProps {
  title?: string;
  highlight?: string;
  items: TimelineItem[];
  className?: string;
}

export function TimelineSection({
  title = "Our",
  highlight = "Journey",
  items,
  className,
}: TimelineSectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <Container>
        <SectionTitle
          title={title}
          highlight={highlight}
          align="center"
          className="mb-12"
        />
        <div className="grid md:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={item.year} className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px flex-1 bg-border" />
                <span className="text-3xl font-bold text-primary">|</span>
                <span className="text-2xl font-bold">{item.year}</span>
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
              {index < items.length - 1 && (
                <div className="hidden md:block absolute top-6 right-0 w-full h-px bg-border -z-10" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
