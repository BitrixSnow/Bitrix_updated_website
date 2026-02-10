import type { Metadata } from "next";
import Image from "next/image";
import { PageTemplate } from "@/components/templates";
import { ContactSection } from "@/components/organisms";
import { Container, Icon } from "@/components/atoms";
import { siteConfig } from "@/lib/config/site";
import { generateServiceJsonLd, generateBreadcrumbJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "SAP Implementation Services",
  description:
    "SAP implementation services to streamline operations, accelerate insights, and enable data-driven decisions.",
  openGraph: {
    title: `SAP Implementation Services | ${siteConfig.name}`,
    description: "From data to decisions, SAP makes it possible.",
    url: `${siteConfig.url}/services/sap`,
  },
};

const sapChallenges = [
  {
    title: "Are your employees burning out from redundant routine tasks?",
    description:
      "SAP is here to automate them with RPA and re-evaluate your business model.",
  },
  {
    title:
      "Is there a communication gap between your supply and delivery teams?",
    description:
      "SAP implementation will enhance your collaboration with business partners.",
  },
  {
    title: "Are you tired of inaccurate results and process inefficiencies?",
    description:
      "SAP tracks every process of your supply chain to identify fallacies and alerts you to correct them.",
  },
  {
    title: "Do you have scattered operations on multiple channels?",
    description:
      "With SAP implementation you can centralize your marketing, sales, service, and streamline your operations.",
  },
  {
    title: "Do you need predictions for taking strategic decisions?",
    description:
      "SAP’s predictive analysis will show you the current trends and your capacity to make the right call.",
  },
];

const specialties = [
  { title: "Customer Satisfaction", icon: "users" },
  { title: "Cost Optimisation", icon: "briefcase" },
  { title: "Assured Commitment", icon: "shield" },
  { title: "Technical Excellence", icon: "settings" },
  { title: "Skilled Experts", icon: "check" },
];

export default function SAPPage() {
  return (
    <PageTemplate>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceJsonLd({
              name: "SAP Implementation Services",
              description:
                "SAP implementation services to streamline operations, accelerate insights, and enable data-driven decisions.",
              url: `${siteConfig.url}/services/sap`,
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
              { name: "SAP", url: `${siteConfig.url}/services/sap` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" />
                SAP Implementation
              </div>

              <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                <span className="text-primary">SAP</span> IMPLEMENTATION
                <span className="block text-primary">SERVICES</span>
              </h1>

              <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                We excel at bringing your vision to life.
              </p>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl bg-[#f6f7fb] p-8 aspect-[5/4]">
                <Image
                  src="/images/hero-img.svg"
                  alt="SAP implementation illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-24 bg-[#fafbfc]">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              SAP Implementation
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">
              From data to decisions, <span className="text-primary">SAP makes it possible</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Designed to help businesses run in a simple digital and networked
              world, SAP is an ERP which provides companies with the capabilities
              for fast adoption, realize value, boost business performance, allowing
              businesses to embrace digitization and achieve their desired goals.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {sapChallenges.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border bg-white p-5 shadow-sm"
              >
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Specialties */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Our Specialities
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">
              Why choose <span className="text-primary">Bitrix</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our expertise allows your business to streamline workflow and
              increase productivity. We believe in providing the best services
              to our customers with maximum efficiency.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialties.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border bg-white p-4 flex items-center gap-3 shadow-sm"
              >
                <div className="h-10 w-10 rounded-lg bg-[#f6f7fb] flex items-center justify-center">
                  <Icon name={item.icon} size={18} className="text-primary" />
                </div>
                <p className="text-sm font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact */}
      <ContactSection />
    </PageTemplate>
  );
}
