import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageTemplate } from "@/components/templates";
import { ContactSection } from "@/components/organisms";
import { Container, Icon } from "@/components/atoms";
import { siteConfig } from "@/lib/config/site";
import { generateBreadcrumbJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Industry-specific solutions that unlock enterprise potential with ServiceNow expertise.",
  openGraph: {
    title: `Industries | ${siteConfig.name}`,
    description:
      "Industry-specific solutions that unlock enterprise potential with ServiceNow expertise.",
    url: `${siteConfig.url}/industries`,
  },
};

const industries = [
  {
    title: "Healthcare & Life Science",
    description:
      "Deliver better care with digital workflows built for clinical teams.",
    icon: "heart",
  },
  {
    title: "Manufacturing",
    description:
      "Connect operations and set a new standard for modern manufacturing.",
    icon: "factory",
  },
  {
    title: "BFSI",
    description:
      "Deliver seamless experiences to customers and agents with compliance.",
    icon: "landmark",
  },
  {
    title: "Retail",
    description:
      "Enhance customer experiences with digitized and automated workflows.",
    icon: "shopping-cart",
  },
];

export default function IndustriesPage() {
  return (
    <PageTemplate>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Industries", url: `${siteConfig.url}/industries` },
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
            <span className="font-medium text-foreground/70">Industries</span>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                SOLUTIONS <span className="text-primary">BY</span>{" "}
                <span className="block text-primary">INDUSTRIES</span>
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                Embrace better work practices with ServiceNow. Our team unlocks
                enterprise potential based on industry needs to boost experiences
                across the world for employees and customers.
              </p>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl bg-[#f6f7fb] p-8 aspect-[5/4]">
                <Image
                  src="/img (5).svg"
                  alt="Industry solutions illustration"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Industry Grid */}
      <section className="pb-12 md:pb-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-5">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="rounded-2xl border bg-white p-5 shadow-sm flex gap-4"
              >
                <div className="h-11 w-11 rounded-xl border bg-[#f6f7fb] flex items-center justify-center">
                  <Icon name={industry.icon} size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{industry.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {industry.description}
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
