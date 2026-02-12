"use client";

import { useRef } from "react";
import { Container, Icon } from "@/components/atoms";
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
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    const node = scrollerRef.current;
    if (!node) return;
    const amount = Math.round(node.clientWidth * 0.8);
    node.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className={cn("py-16 md:py-24 bg-white", className)}>
      <Container>
        <div className="flex items-center justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Testimonials
          </span>
        </div>

        <div className="mt-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            {title} <span className="text-primary">{highlight}</span> {subtitle}
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground">
            Real feedback from teams we&apos;ve helped succeed
          </p>
        </div>

        <div className="mt-10 flex items-center justify-end gap-3">
          <button
            type="button"
            aria-label="Scroll testimonials left"
            onClick={() => scrollByAmount("left")}
            className="h-10 w-10 rounded-full border border-foreground/15 text-foreground/70 transition hover:text-foreground"
          >
            <Icon name="arrow-left" size={18} className="mx-auto" />
          </button>
          <button
            type="button"
            aria-label="Scroll testimonials right"
            onClick={() => scrollByAmount("right")}
            className="h-10 w-10 rounded-full border border-foreground/15 text-foreground/70 transition hover:text-foreground"
          >
            <Icon name="arrow-right" size={18} className="mx-auto" />
          </button>
        </div>

        <div
          ref={scrollerRef}
          className="mt-6 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 hide-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-[280px] max-w-[360px] flex-1 snap-start">
              <TestimonialCard
                testimonial={testimonial}
                className="h-full"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
