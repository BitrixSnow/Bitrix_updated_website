import { Container, SectionTitle } from "@/components/atoms";
import { ServiceCard } from "@/components/molecules";
import type { Service } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ServicesSectionProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  services: Service[];
  className?: string;
  columns?: 2 | 3 | 4;
  showAll?: boolean;
}

export function ServicesSection({
  title,
  highlight,
  subtitle, 
  services,
  className,
  columns = 3,
  showAll = false,
}: ServicesSectionProps) {
  const displayedServices = showAll ? services : services.slice(0, 6);

  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <Container>
        <div className={cn("grid gap-6", gridCols[columns])}>
          {displayedServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
