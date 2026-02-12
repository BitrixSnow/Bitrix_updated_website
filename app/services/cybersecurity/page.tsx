import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageTemplate } from "@/components/templates";
import { ContactSection } from "@/components/organisms";
import { Container, Icon } from "@/components/atoms";
import { siteConfig } from "@/lib/config/site";
import { generateServiceJsonLd, generateBreadcrumbJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Cybersecurity",
  description:
    "Protect your business with BITRIX cybersecurity services. Get SOC-as-a-Service and 24/7 monitoring without the overhead.",
  openGraph: {
    title: `Cybersecurity | ${siteConfig.name}`,
    description: "SOC-as-a-Service and cybersecurity protection tailored to your business.",
    url: `${siteConfig.url}/services/cybersecurity`,
  },
};

export default function CybersecurityPage() {
  return (
    <PageTemplate>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceJsonLd({
              name: "Cybersecurity",
              description:
                "SOC-as-a-Service and cybersecurity protection tailored to your business.",
              url: `${siteConfig.url}/services/cybersecurity`,
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
              { name: "Cybersecurity", url: `${siteConfig.url}/services/cybersecurity` },
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
            <span className="font-medium text-foreground/70">Cybersecurity</span>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Cybersecurity
              </div>

              <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                THE <span className="text-primary">SOC YOU NEED</span>, WHENEVER
                YOU WANT
              </h1>

              <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                With cyber attacks surging, every company could use the protection
                of a Security Operations Center (SOC) - but building your own is easier
                said than done.
              </p>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl bg-[#f6f7fb] p-8 aspect-[5/4]">
                <Image
                  src="/img (1).svg"
                  alt="SOC monitoring illustration"
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-3xl bg-white shadow-sm p-8">
              <Image
                src="/imgContainer.svg"
                alt="Cybersecurity service illustration"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Get <span className="text-primary">started the fast, easy,
                and economical way </span> with Bitrix.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Skip the time, hassle, and expense of setting up a SOC and rely on
                Bitrix instead. With Security Operations Center as a Service (SOCaaS),
                you get the exact level of oversight, protection, and compliance your
                cybersecurity needs without the overhead. Your SOC is staffed by top
                cybersecurity talent 24/7, and your service can scale up or down at a
                moment's notice.
              </p>
              <p className="mt-4 text-muted-foreground">
                Choosing SOCaaS over the alternatives is better for your cybersecurity
                and your business.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <ContactSection />
    </PageTemplate>
  );
}
