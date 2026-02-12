import type { Metadata } from "next";
import { PageTemplate } from "@/components/templates";
import { HeroSection, ServicesSection, ContactSection } from "@/components/organisms";
import { Container, SectionTitle, Icon } from "@/components/atoms";
import { services, siteConfig } from "@/lib/config/site";
import { generateServiceJsonLd, generateBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our comprehensive ServiceNow implementation services including ITSM, business workflows, customer service, and more.",
  openGraph: {
    title: `Services | ${siteConfig.name}`,
    description: "Explore our comprehensive ServiceNow implementation services.",
    url: `${siteConfig.url}/services`,
  },
};

const serviceDetails = [
  {
    id: "itsm",
    title: "IT Service Management",
    description: "Transform your IT operations with our comprehensive ITSM solutions.",
    features: [
      "Incident Management",
      "Problem Management",
      "Change Management",
      "Asset Management",
      "Service Catalog",
      "Knowledge Management",
    ],
    href: "/services/itsm",
  },
  {
    id: "workflows",
    title: "Business Workflows",
    description: "Automate and optimize your business processes across the enterprise.",
    features: [
      "Process Automation",
      "Document Management",
      "Approval Workflows",
      "Integration Hub",
      "Performance Analytics",
      "Predictive Intelligence",
    ],
    href: "/services/workflows",
  },
  {
    id: "csm",
    title: "Customer Service Management",
    description: "Deliver exceptional customer experiences with integrated service solutions.",
    features: [
      "Omni-Channel Support",
      "Case Management",
      "Self-Service Portal",
      "Customer Communities",
      "Field Service Management",
      "Agent Workspace",
    ],
    href: "/services/customer-service",
  },
];

export default function ServicesPage() {
  return (
    <PageTemplate>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Services", url: `${siteConfig.url}/services` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <HeroSection
        title="SERVICES THAT"
        highlight="DRIVE BUSINESS"
        titleSuffix="IMPACT"
        description="We deliver scalable digital solutions that help businesses streamline operations and accelerate sustainable growth."
        variant="default"
        image="/img (4).svg"
        
      />

      {/* Tabs */}
      <section className="bg-white">
        <Container className="pt-4">
          <div className="w-fit rounded-full border border-black/10 bg-white p-1 shadow-sm">
            <div className="flex items-center gap-1">
              <button
                type="button"
                className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white"
              >
                Implement
              </button>
              <button
                type="button"
                className="rounded-full px-5 py-2 text-sm font-medium text-black/70 hover:text-black"
              >
                Consult
              </button>
              <button
                type="button"
                className="rounded-full px-5 py-2 text-sm font-medium text-black/70 hover:text-black"
              >
                Support
              </button>
              <button
                type="button"
                className="rounded-full px-5 py-2 text-sm font-medium text-black/70 hover:text-black"
              >
                Optimise
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <ServicesSection
        title="Our"
        highlight="Services"
        subtitle="Comprehensive ServiceNow solutions tailored to your business needs"
        services={services}
        showAll={true}
        columns={3}
      />

      <ContactSection/>

      {/* Nhi chahiye */}
      {/* Detailed Services */}
      {/* <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <SectionTitle
            title="What we"
            highlight="offer"
            align="center"
            className="mb-16"
          />
          <div className="space-y-16">
            {serviceDetails.map((service, index) => (
              <div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Icon name="check" size={16} className="text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild>
                    <Link href={service.href}>
                      Learn More
                      <Icon name="arrow-right" size={18} className="ml-2" />
                    </Link>
                  </Button>
                </div>
                <div
                  className={`bg-muted rounded-lg aspect-video flex items-center justify-center ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <Icon name="settings" size={64} className="text-muted-foreground/30" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section> */}
      

      {/* nhi chahiye */}
      {/* CTA */}
      {/* <section className="py-16 md:py-24">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="text-primary">transform</span> your business?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our ServiceNow expertise can help you achieve your goals.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Get Started Today
              <Icon name="arrow-right" size={18} className="ml-2" />
            </Link>
          </Button>
        </Container>
      </section> */}
    </PageTemplate>
  );
}
