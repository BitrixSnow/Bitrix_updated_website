import { Container, SectionTitle } from "@/components/atoms";
import { TestimonialCard } from "@/components/molecules";
import type { Testimonial } from "@/lib/types";
import { cn } from "@/lib/utils";

interface TestimonialsSectionProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  className?: string;
}

export function TestimonialsSection({
  title = "What our",
  highlight = "customers",
  subtitle = "have to say",
  testimonials,
  className,
}: TestimonialsSectionProps) {
  return (
    <section className={cn("py-16 md:py-24 bg-muted/30", className)}>
      <Container>
        <SectionTitle
          title={`${title} ${highlight}`}
          subtitle={subtitle}
          align="center"
          className="mb-12"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
