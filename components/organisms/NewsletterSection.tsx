"use client";

import React from "react"

import { useState } from "react";
import { Container, Icon } from "@/components/atoms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    <section className={cn("py-16 md:py-24 bg-muted/30", className)}>
      <Container className="max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Get <span className="text-primary">out of the box</span> in your inbox
        </h2>
        <p className="text-muted-foreground mb-8">
          Subscribe to our newsletter for the latest insights, updates, and industry news.
        </p>
        {isSubmitted ? (
          <div className="flex items-center justify-center gap-2 text-primary">
            <Icon name="check" size={20} />
            <span>Thanks for subscribing!</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={error ? "border-destructive" : ""}
              />
              {error && (
                <p className="text-sm text-destructive text-left mt-1">{error}</p>
              )}
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        )}
      </Container>
    </section>
  );
}
