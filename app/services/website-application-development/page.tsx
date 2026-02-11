import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageTemplate } from "@/components/templates";
import { ContactSection } from "@/components/organisms";
import { Container, Icon } from "@/components/atoms";
import { siteConfig } from "@/lib/config/site";
import { generateServiceJsonLd, generateBreadcrumbJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Website & Application Development",
  description:
    "Custom web and application solutions designed for performance, security, and growth.",
  openGraph: {
    title: `Website & Application Development | ${siteConfig.name}`,
    description:
      "Custom web and application solutions designed for performance, security, and growth.",
    url: `${siteConfig.url}/services/web-application-development`,
  },
};

const webAppServices = [
  {
    title: "Angular Js Development Services",
    description:
      "Robust Angular applications for dynamic, maintainable user experiences.",
    icon: "code",
    href: "/services/website-application-development/angular-js-development-services",
  },
  {
    title: "Node Js Development Services",
    description:
      "Scalable back-end services that power reliable and secure web apps.",
    icon: "settings",
    href: "/services/website-application-development/node-js-development-services",
  },
  {
    title: "React Js Development Services",
    description:
      "Fast, component-driven interfaces built for modern web performance.",
    icon: "workflow",
    href: "/services/website-application-development/react-js-development-services",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps that keep users engaged on the go.",
    icon: "phone",
    href: "/services/website-application-development/mobile-app-development",
  },
  {
    title: "Android App Development",
    description:
      "Native Android apps optimized for speed, security, and UX.",
    icon: "shopping-cart",
    href: "/services/website-application-development/android-app-development",
  },
  {
    title: "Cross Platform App Development",
    description:
      "Build once, deploy everywhere with efficient cross-platform stacks.",
    icon: "briefcase",
    href: "/services/website-application-development/cross-platform-app-development",
  },
  {
    title: "iOS App Development Services",
    description:
      "High-performance iOS apps designed for the Apple ecosystem.",
    icon: "heart",
    href: "/services/website-application-development/ios-app-development-services",
  },
  {
    title: "Flutter App Development",
    description:
      "Beautiful, performant Flutter apps with a single codebase.",
    icon: "star",
    href: "/services/website-application-development/flutter-app-development",
  },
];

export default function WebApplicationDevelopmentPage() {
  return (
    <PageTemplate>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceJsonLd({
              name: "Website & Application Development",
              description:
                "Custom web and application solutions designed for performance, security, and growth.",
              url: `${siteConfig.url}/services/web-application-development`,
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
              {
                name: "Website & Application Development",
                url: `${siteConfig.url}/services/web-application-development`,
              },
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
            <span className="font-medium text-foreground/70">
              Website &amp; application development
            </span>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                WEBSITE &amp; APPLICATION{" "}
                <span className="block text-primary">DEVELOPMENT</span>
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                Custom web and application solutions designed for performance,
                security, and growth.
              </p>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl bg-[#f6f7fb] p-8 aspect-[5/4]">
                <Image
                  src="/images/img.svg"
                  alt="Website and application development illustration"
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
      <section className="pb-12 md:pb-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {webAppServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="rounded-2xl border bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="h-10 w-10 rounded-xl bg-[#f6f7fb] flex items-center justify-center">
                    <Icon name={service.icon} size={18} className="text-primary" />
                  </div>
                  <div className="h-8 w-8 rounded-full border flex items-center justify-center text-muted-foreground">
                    <Icon name="arrow-right" size={14} />
                  </div>
                </div>
                <h3 className="mt-4 text-sm font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <ContactSection />
    </PageTemplate>
  );
}
