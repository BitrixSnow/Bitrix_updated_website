import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
  { icon: "/icon-3 (2).svg", title: "Customer Satisfaction" }, 
  { icon: "/hand-coin-line.svg", title: "Cost Optimisation" },
  { icon: "/shield-check-line.svg", title: "Assured Commitment" },
  { icon: "/icon (1).svg", title: "Technical Excellence" }, 
  { icon: "/icon (2).svg", title: "Skilled Experts" }, 
];

const whatWeDoItems = [
  "Chalking out future roadmap",
  "System sizing and landscape design",
  "Business blueprint and realization",
  "Integration with third-party systems",
  "3PL through EDI integration",
  "Data cleansing and migration",
  "Documentation and user training",
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
      <section className="py-12 md:py-18 bg-white">
        <Container>
          <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href="/"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 bg-white/80 shadow-sm"
              aria-label="Home"
            >
              <Icon name="home" size={16} />
            </Link>
            <span className="text-foreground/40">›</span>
            <span className="font-medium text-foreground/70">SAP</span>
          </div>

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
                  src="/img (2).svg"
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

      {/* What We Do */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" />
                What We Do
              </div>
              <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">
                What we do <span className="text-primary">&amp; how we do?</span>
              </h2>
              <ul className="mt-6 space-y-3">
                {whatWeDoItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm md:text-base text-foreground/80">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                      <Icon name="check" size={12} className="text-primary" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                For successful implementations, it is essential for businesses to
                consider and follow a plan. We at Bitrix can help you with this
                planning and execute the project for a successful rollout.
              </p>
              <p>
                Right from helping you with project planning, designing business
                blueprints, rolling out implementation, to testing integrations and
                helping you with final preparations, we stand by your side assisting
                you in Go Live and continuing providing support services post Go Live as well.
              </p>
              <p>
                Since there is no one-size-fits-all, we can help you customize the
                solutions to suit your business requirements.
              </p>
              <p>
                Our expertise, agility, project deployment capabilities, and affordable
                pricing are an advantageous and profitable combination for any modern
                company that wants to harness the power of technology.
              </p>
            </div>
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
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={`${item.title} icon`}
                    className="h-8 w-8"
                  />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-black/90">
                  {item.title}
                </h3>
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
