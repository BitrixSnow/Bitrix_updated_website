import type { Metadata } from "next";
import Image from "next/image";
import { PageTemplate } from "@/components/templates";
import { HeroSection, FAQSection, ContactSection } from "@/components/organisms";
import { Container, SectionTitle, Icon } from "@/components/atoms";
import { faqItems, siteConfig } from "@/lib/config/site";
import {
  generateServiceJsonLd,
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
} from "@/lib/seo/jsonld";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "IT Service Management (ITSM)",
  description: "Transform your IT operations with ServiceNow ITSM. Streamline incident, problem, and change management for improved efficiency.",
  openGraph: {
    title: `IT Service Management | ${siteConfig.name}`,
    description: "Transform your IT operations with ServiceNow ITSM solutions.",
    url: `${siteConfig.url}/services/itsm`,
  },
};

const itsmFeatures = [
  {
    title: "Incident Management",
    description: "Quickly restore normal service operations and minimize business impact.",
    icon: "shield",
  },
  {
    title: "Problem Management",
    description: "Identify root causes and prevent recurring incidents.",
    icon: "settings",
  },
  {
    title: "Change Management",
    description: "Manage changes with minimal risk and disruption.",
    icon: "workflow",
  },
  {
    title: "Request Management",
    description: "Streamline service requests with self-service capabilities.",
    icon: "users",
  },
];

const implementationSteps = [
  { step: "01", title: "Discovery", description: "Assess current state and define requirements" },
  { step: "02", title: "Design", description: "Create solution architecture and workflows" },
  { step: "03", title: "Build", description: "Configure and customize the platform" },
  { step: "04", title: "Test", description: "Validate solution meets requirements" },
  { step: "05", title: "Deploy", description: "Go-live with training and support" },
];

const benefits = [
  "Reduce incident resolution time by up to 40%",
  "Improve service availability and reliability",
  "Enhance visibility with real-time dashboards",
  "Automate routine tasks and workflows",
  "Enable self-service for end users",
  "Ensure compliance with ITIL best practices",
];

export default function ITSMPage() {
  return (
    <PageTemplate>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceJsonLd({
              name: "IT Service Management",
              description: "Transform your IT operations with ServiceNow ITSM solutions.",
              url: `${siteConfig.url}/services/itsm`,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Services", url: `${siteConfig.url}/services` },
              { name: "ITSM", url: `${siteConfig.url}/services/itsm` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateFAQJsonLd(
              faqItems.map((faq) => ({
                question: faq.question,
                answer: faq.answer,
              }))
            )
          ),
        }}
      />

      {/* Hero */}
      <section className="py-12 md:py-18">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">
                <Link
                  href="/"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-foreground/15 bg-white text-foreground"
                  aria-label="Home"
                >
                  <Icon name="home" size={14} />
                </Link>
                <Icon name="chevron-right" size={14} className="text-foreground/50" />
                <Link href="/services/servicenow" className="text-sm font-medium text-foreground/75 hover:text-foreground">
                  ServiceNow
                </Link>
                <Icon name="chevron-right" size={14} className="text-foreground/50" />
                <span className="text-sm font-medium text-foreground/75">IT service management</span>
              </div> */} 
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                IT SERVICE <span className="text-primary">MANAGEMENT</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Transform your IT operations with our comprehensive ITSM solutions. We help organizations
                streamline service delivery, reduce costs, and improve user satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get Started
                    <Icon name="arrow-right" size={18} className="ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/serviceNow.svg"
                alt="IT Service Management"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ServiceNow ITSM Implementation */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <div className="text-center mb-12">
            <p className="text-sm text-muted-foreground mb-4">SERVICENOW</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-primary">ITSM</span> Implementation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                What is ServiceNow ITSM Implementation
              </h3>
              <p className="text-muted-foreground mb-6">
                ServiceNow ITSM Implementation is the process of deploying and configuring
                ServiceNow's IT Service Management module to streamline your IT operations.
                Our expert team ensures a smooth transition with minimal disruption.
              </p>
              <ul className="space-y-3">
                {benefits.slice(0, 3).map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Icon name="check" size={20} className="text-primary mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                ITSM Implementation <span className="text-primary">Approach</span>
              </h3>
              <div className="space-y-4">
                {implementationSteps.slice(0, 3).map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <span className="text-2xl font-bold text-primary">{step.step}</span>
                    <div>
                      <h4 className="font-semibold">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section id="features" className="py-16 md:py-24">
        <Container>
          <SectionTitle
            title="Strategic"
            highlight="ITSM Components"
            subtitle="Core modules that drive IT service excellence"
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {itsmFeatures.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Benefits of"
                highlight="ITSM Implementation"
                className="mb-8"
              />
              <div className="grid gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                    <Icon name="check" size={20} className="text-primary" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
              <Icon name="play" size={64} className="text-primary" />
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <FAQSection
        title="Got questions?"
        highlight="FAQ"
        faqs={faqItems}
      />

      {/* CTA */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                We'll guide you, work with you and <span className="text-primary">deliver the best</span>
              </h2>
              <p className="text-background/70 mb-8">
                Our team of certified ServiceNow experts will help you every step of the way.
              </p>
              <Button asChild size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-foreground bg-transparent">
                <Link href="/contact">
                  Schedule a Consultation
                  <Icon name="arrow-right" size={18} className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="quote" size={32} className="text-primary-foreground" />
                </div>
                <p className="text-background/80 italic mb-4">
                  "BITRIX transformed our IT operations completely. Their expertise in ServiceNow is unmatched."
                </p>
                <p className="text-sm text-background/60">- CIO, Fortune 500 Company</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageTemplate>
  );
}
