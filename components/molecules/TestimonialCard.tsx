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
    <Card className={cn("h-full rounded-2xl border border-foreground/10 bg-white", className)}>
      <CardContent className="p-6 md:p-8 flex flex-col h-full">
        <Icon name="quote" size={36} className="text-rose-500 mb-5" />
        <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-6 flex-1">
          {testimonial.content}
        </p>
        <div className="flex items-center gap-3">
          {testimonial.avatar ? (
            <img
              src={testimonial.avatar}
              alt={testimonial.author}
              className="h-11 w-11 rounded-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="h-11 w-11 rounded-full bg-muted flex items-center justify-center text-foreground font-semibold">
              {testimonial.author.charAt(0)}
            </div>
          )}
          <div>
            <p className="font-semibold text-sm text-foreground">{testimonial.author}</p>
            <p className="text-muted-foreground text-xs">
              {testimonial.role}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
