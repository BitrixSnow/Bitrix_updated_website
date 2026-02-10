"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Container, Icon } from "@/components/atoms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { NewsletterFormSchema } from "@/lib/types";
import { cn } from "@/lib/utils";

interface NewsletterSectionProps {
  className?: string;
}

export function NewsletterSection({ className }: NewsletterSectionProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = NewsletterFormSchema.safeParse({ email });

    if (!result.success) {
      setError(result.error.errors[0]?.message || "Invalid email");
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className={cn("py-16 md:py-24 bg-white", className)}>
      <Container className="max-w-4xl">
        <div className="flex items-center justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Newsletter
          </span>
        </div>

        <div className="mt-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Get <span className="text-primary">Out-of-The-Box</span> in your inbox
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground">
            Out-of-the-box will keep you informed with the latest innovations,
            inspiration, and insights across the tech world.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6 md:p-8 shadow-sm">
          {isSubmitted ? (
            <div className="flex items-center justify-center gap-2 text-primary">
              <Icon name="check" size={20} />
              <span>Thanks for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="newsletter-email">Email</Label>
                <Input
                  id="newsletter-email"
                  type="email"
                  placeholder="Provide your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={error ? "border-destructive" : ""}
                />
                {error && (
                  <p className="text-sm text-destructive">{error}</p>
                )}
              </div>

              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <Checkbox
                  id="newsletter-consent"
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(Boolean(checked))}
                />
                <Label
                  htmlFor="newsletter-consent"
                  className="text-xs text-muted-foreground leading-relaxed"
                >
                  You allow us to contact you via email, and to send you marketing
                  content from Bitrix. Opt out anytime. View our privacy policy.
                </Label>
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={isSubmitting || !consent}
                  className="px-10 bg-foreground text-background hover:bg-foreground/90"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
            </form>
          )}
        </div>

        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            Or book a <span className="text-primary">free</span>
            <br />
            <span className="text-primary">consultation</span> with us
          </h3>

          <div className="flex flex-col items-start md:items-end gap-2">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-foreground/20 text-foreground hover:bg-foreground hover:text-background"
            >
              <Link href="/contact">
                Schedule a call
                <Icon name="arrow-right" size={18} className="ml-2" />
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground">
              No commitment. 30-minute call.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
