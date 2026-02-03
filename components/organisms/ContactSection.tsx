"use client";

import React from "react"

import { useState } from "react";
import Image from "next/image";
import { Container, SectionTitle, Icon } from "@/components/atoms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ContactFormSchema, type ContactFormData } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ContactSectionProps {
  title?: string;
  highlight?: string;
  className?: string;
  showImage?: boolean;
}

export function ContactSection({
  title = "Request a",
  highlight = "quote",
  className,
  showImage = true,
}: ContactSectionProps) {
  const [formData, setFormData] = useState<Partial<ContactFormData>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = ContactFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className={cn("py-16 md:py-24", className)}>
        <Container>
          <div className="text-center max-w-md mx-auto">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="check" size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
            <p className="text-muted-foreground">
              We've received your message and will get back to you within 24 hours.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <Container>
        <div className={cn("grid gap-12", showImage && "lg:grid-cols-2")}>
          <div>
            <SectionTitle
              title={title}
              highlight={highlight}
              className="mb-8"
            />
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    placeholder="Your company"
                    value={formData.company || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service</Label>
                  <Select
                    onValueChange={(value) =>
                      setFormData({ ...formData, service: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="itsm">IT Service Management</SelectItem>
                      <SelectItem value="workflows">Business Workflows</SelectItem>
                      <SelectItem value="customer-service">Customer Service</SelectItem>
                      <SelectItem value="hr">HR Service Delivery</SelectItem>
                      <SelectItem value="security">Security Operations</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formData.message || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message}</p>
                )}
              </div>
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Icon name="arrow-right" size={18} className="ml-2" />
              </Button>
            </form>
          </div>
          {showImage && (
            <div className="relative hidden lg:block">
              <Image
                src="/images/contact-illustration.svg"
                alt="Contact us"
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
