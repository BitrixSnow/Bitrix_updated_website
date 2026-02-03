import { Container, SectionTitle } from "@/components/atoms";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQItem } from "@/lib/types";
import { cn } from "@/lib/utils";

interface FAQSectionProps {
  title?: string;
  highlight?: string;
  faqs: FAQItem[];
  className?: string;
}

export function FAQSection({
  title = "Got questions?",
  highlight = "FAQ",
  faqs,
  className,
}: FAQSectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <Container className="max-w-3xl">
        <SectionTitle
          title={title}
          highlight={highlight}
          align="center"
          className="mb-12"
        />
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
