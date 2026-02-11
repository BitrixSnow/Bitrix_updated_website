import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageTemplate } from "@/components/templates";
import { ContactSection } from "@/components/organisms";
import { Container, Icon } from "@/components/atoms";
import { siteConfig } from "@/lib/config/site";
import { generateServiceJsonLd, generateBreadcrumbJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Salesforce Services",
  description:
    "Scalable Salesforce implementations, integrations, and custom solutions for growing businesses.",
  openGraph: {
    title: `Salesforce Services | ${siteConfig.name}`,
    description:
      "Scalable Salesforce implementations, integrations, and custom solutions for growing businesses.",
    url: `${siteConfig.url}/services/salesforce`,
  },
};

const salesforceServices = [
  {
    title: "Salesforce Admin & Developer Support",
    description:
      "Ongoing administrative and development support to keep Salesforce running smoothly.",
    icon: "settings",
    href: "/services/salesforce/admin-developer-support",
  },
  {
    title: "Salesforce Lightning",
    description:
      "Modern Salesforce Lightning interfaces designed for better performance and usability.",
    icon: "workflow",
    href: "/services/salesforce/salesforce-lightning",
  },
  {
    title: "Salesforce Consulting Services",
    description:
      "Expert guidance to optimize Salesforce strategy, setup, and usage.",
    icon: "briefcase",
    href: "/services/salesforce/consulting-services",
  },
  {
    title: "Salesforce Integration",
    description:
      "Seamless integration of Salesforce with third-party systems and tools.",
    icon: "arrow-right",
    href: "/services/salesforce/integration",
  },
  {
    title: "Salesforce Data Migration",
    description:
      "Secure and accurate migration of data into Salesforce with minimal downtime.",
    icon: "check",
    href: "/services/salesforce/data-migration",
  },
  {
    title: "Salesforce Implementation",
    description:
      "End-to-end Salesforce setup tailored to your business processes.",
    icon: "building",
    href: "/services/salesforce/implementation",
  },
  {
    title: "Salesforce CPQ",
    description:
      "Configure, price, and quote solutions to streamline complex sales processes.",
    icon: "shopping-cart",
    href: "/services/salesforce/cpq",
  },
  {
    title: "Salesforce Release Management",
    description:
      "Controlled deployment of Salesforce updates, features, and enhancements.",
    icon: "calendar",
    href: "/services/salesforce/release-management",
  },
  {
    title: "Salesforce Agentforce",
    description:
      "Intelligent agent solutions to automate customer interactions and workflows.",
    icon: "users",
    href: "/services/salesforce/agentforce",
  },
  {
    title: "AppExchange App Development",
    description:
      "Custom Salesforce apps built and published for the AppExchange marketplace.",
    icon: "code",
    href: "/services/salesforce/appexchange-app-development",
  },
  {
    title: "Salesforce Einstein Development",
    description:
      "AI-powered Salesforce solutions using Einstein analytics and automation.",
    icon: "star",
    href: "/services/salesforce/einstein-development",
  },
];

export default function SalesforcePage() {
  return (
    <PageTemplate>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceJsonLd({
              name: "Salesforce Services",
              description:
                "Scalable Salesforce implementations, integrations, and custom solutions for growing businesses.",
              url: `${siteConfig.url}/services/salesforce`,
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
              { name: "Salesforce", url: `${siteConfig.url}/services/salesforce` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href="/"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 bg-white/80 shadow-sm"
              aria-label="Home"
            >
              <Icon name="home" size={16} />
            </Link>
            <span className="text-foreground/40">›</span>
            <span className="font-medium text-foreground/70">Salesforce services</span>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                <span className="text-primary">SALESFORCE</span>{" "}
                <span className="block">SERVICES</span>
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                Scalable Salesforce implementations and integrations for
                growing businesses.
              </p>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl bg-[#f6f7fb] p-8 aspect-[5/4]">
                <Image
                  src="/images/img.svg"
                  alt="Salesforce services illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="pb-10 md:pb-16 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-5">
            {salesforceServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="rounded-2xl border bg-white p-5 shadow-sm flex gap-4"
              >
                <div className="h-11 w-11 rounded-xl border bg-[#f6f7fb] flex items-center justify-center">
                  <Icon name={service.icon} size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact */}
      <ContactSection />
    </PageTemplate>
  );
}
