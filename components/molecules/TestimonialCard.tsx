import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@/components/atoms";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/lib/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 flex items-center gap-1">
          {testimonial.rating &&
            Array.from({ length: testimonial.rating }).map((_, i) => (
              <Icon
                key={i}
                name="star"
                size={16}
                className="text-yellow-500 fill-yellow-500"
              />
            ))}
        </div>
        <Icon name="quote" size={32} className="text-primary/20 mb-4" />
        <p className="text-foreground leading-relaxed mb-6 flex-1">
          {testimonial.content}
        </p>
        <div className="flex items-center gap-3 pt-4 border-t">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
            {testimonial.author.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-sm">{testimonial.author}</p>
            <p className="text-muted-foreground text-xs">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
