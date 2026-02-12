import type { Metadata } from "next";
import { PageTemplate } from "@/components/templates";
import { ContactSection, HeroSection } from "@/components/organisms";
import { Container, Icon } from "@/components/atoms";
import { siteConfig } from "@/lib/config/site";
import { generateServiceJsonLd, generateBreadcrumbJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Salesforce Admin & Developer Support",
  description:
    "Expert Salesforce admin and developer support services to keep your platform stable, secure, and scalable.",
  openGraph: {
    title: `Salesforce Admin & Developer Support | ${siteConfig.name}`,
    description:
      "Expert Salesforce admin and developer support services to keep your platform stable, secure, and scalable.",
    url: `${siteConfig.url}/services/salesforce/admin-developer-support`,
  },
};

const supportPillars = [
  { title: "Support", icon: "shield" },
  { title: "Customization", icon: "settings" },
  { title: "Maintenance", icon: "check" },
  { title: "Release management", icon: "calendar" },
  { title: "Bug fixing", icon: "code" },
];

const offerings = [
  {
    title: "Salesforce administration",
    description:
      "Ensure smooth operation, data management, and user support with certified Salesforce admins.",
    icon: "users",
  },
  {
    title: "Custom development solutions",
    description:
      "From creating custom apps to integrating third-party systems, we’ve got everything covered.",
    icon: "code",
  },
  {
    title: "System configuration and optimization",
    description:
      "Streamline Salesforce setup for improved workflow, automation, and security.",
    icon: "settings",
  },
  {
    title: "Data Migration and Integration",
    description:
      "Seamlessly transfer and integrate data for a unified view of business information.",
    icon: "arrow-right",
  },
  {
    title: "Platform Upgrades and Enhancements",
    description:
      "Stay updated with the latest features by integrating new extensions and upgrades.",
    icon: "workflow",
  },
  {
    title: "Security and Compliance",
    description:
      "Implement strong security measures and monitoring systems to protect data and ensure compliance.",
    icon: "shield",
  },
  {
    title: "Ongoing Support & Troubleshooting",
    description:
      "Offering quick resolutions and comprehensive advice for Salesforce-related issues.",
    icon: "briefcase",
  },
];

const impactStats = [
  {
    value: "25+",
    label: "Customer Satisfaction",
    description: "We are focused on creating a customer-centric environment.",
  },
  {
    value: "10+",
    label: "Projects Completed",
    description: "Successfully delivered projects for IT & software industries.",
  },
];

export default function AdminDeveloperSupportPage() {
  return (
    <PageTemplate>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceJsonLd({
              name: "Salesforce Admin & Developer Support",
              description:
                "Expert Salesforce admin and developer support services to keep your platform stable, secure, and scalable.",
              url: `${siteConfig.url}/services/salesforce/admin-developer-support`,
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
              {
                name: "Admin & Developer Support",
                url: `${siteConfig.url}/services/salesforce/admin-developer-support`,
              },
            ])
          ),
        }}
      />

      <HeroSection
        title="SALESFORCE"
        highlight="SUPPORT"
        titleSuffix="& MAINTENANCE"
        highlightSecond="SERVICES"
        description="Unlock seamless Salesforce deployment with top-tier admin and development support services for maximum efficiency."
        image="/salesforce.svg"
        primaryCta={{ label: "Talk to us", href: "/contact" }}
      />

      {/* Partner Section */}
      <section className="py-12 md:py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Salesforce support
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">
              Bitrix as your <span className="text-primary">Salesforce support & Maintenance partner</span>{" "}
              
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              While you focus on driving business growth, our dedicated team takes
              care of the flawless functionality of your Salesforce org. Trust Bitrix
              for all your Salesforce needs - expert admin support, comprehensive
              training, integrations, data security, and performance optimization.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {supportPillars.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border bg-white p-4 text-center shadow-sm"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f6f7fb]">
                  <Icon name={item.icon} size={18} className="text-primary" />
                </div>
                <p className="text-sm font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Offerings */}
      <section className="py-12 md:py-20 bg-[#fafbfc]">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Our offer
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">
              Our Salesforce <span className="text-primary">admin & developer support</span>{" "}
              offerings
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our team delivers end-to-end Salesforce admin and development support
              designed to maintain performance, security, and scalability.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {offerings.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border bg-white p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-lg bg-[#f6f7fb]">
                    <Icon name={item.icon} size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Impact */}
      {/* <section className="py-12 md:py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Our impact
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">
              We <span className="text-primary">Innovate</span> and{" "}
              <span className="text-primary">Transform</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Trusted by many best organizations, we deliver solutions that help
              teams operate faster and smarter across Salesforce platforms.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-8">
            {impactStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border bg-white p-6">
                <div className="text-5xl font-bold tracking-tight text-black">
                  {stat.value}
                </div>
                <div className="mt-2 text-lg font-semibold">{stat.label}</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section> */}
      <section className="py-16 md:py-24 bg-white text-foreground">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1 text-xs uppercase tracking-wide text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-rose-500" />
              Our Impact
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold text-black/90">
              We <span className="text-rose-500">Innovate</span> and{" "}
              <span className="text-rose-500">Transform</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Trusted by many leading organizations, we delivered 40+ ServiceNow instances
              with 180+ modules, 12 scoped applications, 3 CRM applications, and 25+ web
              applications. We have a customer base of 30+ and 9 partners across the globe.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-10">
            {[
              {
                metric: "25",
                title: "Customer Satisfaction",
                description:
                  "We are focused on creating a customer-centric environment.",
              },
              {
                metric: "10",
                title: "Projects Completed",
                description:
                  "Successfully delivered projects for IT & software industries.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-6 pl-2 md:pl-12"
              >
                <div className="relative ">
                  <div className="text-6xl md:text-7xl lg:text-8xl font-semibold text-black/90 leading-none">
                    {item.metric}
                  </div>
                  <span className="absolute -top-8 -right-8 text-8xl md:text-7xl font-bold text-rose-500 leading-none">
                    +
                  </span>
                </div>
                <div className="max-w-xs">
                  <h3 className="text-base md:text-lg font-semibold text-black/90">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactSection />
    </PageTemplate>
  );
}
