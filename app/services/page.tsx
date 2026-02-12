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
        image="./images/img.svg"
        
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
    </PageTemplate>
  );
}
