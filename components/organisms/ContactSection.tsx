"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container, Icon } from "@/components/atoms";
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
  className?: string;
}

export function ContactSection({ className }: ContactSectionProps) {
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
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center max-w-md mx-auto">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="check" size={28} className="text-primary" />
            </div>
            <h3 className="text-2xl font-semibold">Thank you!</h3>
            <p className="mt-2 text-muted-foreground">
              We’ll get back to you within 24 hours.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className={cn("py-24 bg-white", className)}>
      <Container>
        <div className="grid lg:grid-cols-[1fr_1fr] gap-14 items-start">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Contact us
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight">
              <span className="text-primary">Request</span> a quote
            </h2>

            <p className="mt-4 max-w-lg text-muted-foreground leading-relaxed">
              At Bitrix, we leverage IT security and automation to help you.
              If you have any questions or need help, feel free to contact
              our team or call <strong>+91 78076 29154</strong>.
            </p>

            <div className="relative mt-10 h-[340px]">
              <Image
                src="/Telecommuting-pana 1.svg"
                alt="Contact illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="rounded-2xl bg-[#f8f9fb] p-10 lg:p-12 shadow-sm min-h-[540px]">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label>Name</Label>
                  <Input
                    placeholder="Your name"
                    value={formData.name || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Company name</Label>
                  <Input
                    placeholder="Your company"
                    value={formData.company || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={formData.email || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Phone</Label>
                  <Input
                    placeholder="Your phone"
                    value={formData.phone || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label className="mb-2">Which ServiceNow services do you need?</Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, service: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="ServiceNow Consulting" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consulting">ServiceNow Consulting</SelectItem>
                    <SelectItem value="itsm">IT Service Management</SelectItem>
                    <SelectItem value="workflows">Business Workflows</SelectItem>
                    <SelectItem value="csm">Customer Service</SelectItem>
                    <SelectItem value="hr">HR Service Delivery</SelectItem>
                    <SelectItem value="security">Security Operations</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Message</Label>
                <Textarea
                  rows={6}
                  placeholder="What can we help you with?"
                  value={formData.message || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="mt-2 h-32"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full mt-4 bg-black text-white hover:bg-black/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Get a free quote"}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
