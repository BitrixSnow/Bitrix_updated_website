import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageTemplate } from "@/components/templates";
import { TimelineSection, TestimonialsSection, ContactSection } from "@/components/organisms";
import { Container, SectionTitle, Icon } from "@/components/atoms";
import { services, testimonials, timeline, siteConfig } from "@/lib/config/site";
import { generateOrganizationJsonLd, generateBreadcrumbJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about BITRIX - your trusted ServiceNow implementation partner. Discover our mission, team, and commitment to innovation.",
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description: "Learn about BITRIX - your trusted ServiceNow implementation partner.",
    url: `${siteConfig.url}/about`,
  },
};

const logoStrip = [
  "QBrainX",
  "Dyooti",
  "Yash",
  "Kodiva.ai",
  "Red",
  "ZCROOT",
  "H4DRN",
];

const serviceHighlights = [
  {
    title: "ServiceNow",
    description:
      "We help enterprises streamline IT operations with customer-centric ServiceNow implementations.",
    icon: "settings",
  },
  {
    title: "Product Engineering",
    description:
      "From concept to launch, we build scalable digital products with modern stacks.",
    icon: "code",
  },
  {
    title: "Digital Transformation",
    description:
      "Accelerate growth with automation, data-driven decisions, and connected workflows.",
    icon: "workflow",
  },
];

const partnerLogos = [
  { src: "/partner-logos/image 1.svg", alt: "Partner logo 1" },
  { src: "/partner-logos/image 2.svg", alt: "Partner logo 2" },
  { src: "/partner-logos/image 3.svg", alt: "Partner logo 3" },
  { src: "/partner-logos/image 4.svg", alt: "Partner logo 4" },
  { src: "/partner-logos/image 6.svg", alt: "Partner logo 6" },
  { src: "/partner-logos/image 7.svg", alt: "Partner logo 7" },
  { src: "/partner-logos/image 8.svg", alt: "Partner logo 8" },
];

export default function AboutPage() {
  return (
    <PageTemplate>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "About", url: `${siteConfig.url}/about` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="py-12 md:py-18 bg-white">
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
            <span className="font-medium text-foreground/70">About us</span>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                WHO <span className="text-primary">WE ARE</span>
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                We help organizations adopt better work practices and unlock their
                enterprise potential to elevate experiences across the world of work.
              </p>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl bg-[#f6f7fb] p-8 aspect-[5/4]">
                <Image
                  src="/img (6).svg"
                  alt="About Bitrix illustration"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Logo Strip */}
      {/* <section className="pb-12 md:pb-16 bg-white">
        <Container>
          <div className="rounded-2xl border bg-white px-6 py-4 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
              {logoStrip.map((logo) => (
                <span key={logo} className="font-semibold tracking-wide">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section> */}

      {/* Partners Carousel */}
      <section className="pb-8 bg-white">
        <div className="mx-auto w-full px-6">
          <div className="rounded-2xl border bg-white px-6 py-4 shadow-sm overflow-hidden">
            <div className="partners-track inline-flex items-center gap-10 whitespace-nowrap">
              {partnerLogos.map((logo) => (
                <div
                  key={`partner-${logo.src}`}
                  className="flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 md:h-10 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
              {partnerLogos.map((logo) => (
                <div
                  key={`partner-dup-${logo.src}`}
                  aria-hidden="true"
                  className="flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 md:h-10 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          .partners-track {
            animation: partners-scroll 28s linear infinite;
            min-width: max-content;
          }
          .partners-track:hover {
            animation-play-state: paused;
          }
          @keyframes partners-scroll {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }
        `}</style>
      </section>

      {/* About */}
      <section className="py-12 md:py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              About us
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">
              We build the <span className="text-primary">best strategy</span> to grow
            </h2>
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-10 text-sm text-muted-foreground leading-relaxed">
            <p>
              Bitrix Consulting is a premier ServiceNow implementation partner that
              combines transformational capabilities with a customer-centric approach.
              We provide end-to-end solutions around ServiceNow ITSM, implementation,
              consulting, software development, and support.
            </p>
            <div>
              <p>
                We have extensive experience in designing empirical processes for
                valuable customers that can reduce operating costs. As an Elite
                ServiceNow Partner, we create great employee experiences and unlock
                productivity.
              </p>
              <p className="mt-4 text-foreground font-semibold">Komal Gupta</p>
              <p className="text-xs text-muted-foreground">CEO & Founder</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Services */}
      <section className="py-12 md:py-20 bg-[#fafbfc]">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Our services
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">
              We <span className="text-primary">move your business</span> forward with
              the best solutions
            </h2>
            <p className="mt-4 text-muted-foreground">
              We offer a sophisticated mix of innovative and effective solutions.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {serviceHighlights.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="h-10 w-10 rounded-xl bg-[#f6f7fb] flex items-center justify-center">
                    <Icon name={service.icon} size={18} className="text-primary" />
                  </div>
                </div>
                <h3 className="mt-4 text-sm font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ServiceNow Implementation Partner */}
      <section className="py-12 md:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                <span className="text-primary">ServiceNow</span> implementation <span className="text-primary">partner</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                As a ServiceNow Premier Partner, we have implemented the platform
                in many enterprises. We deliver scalable solutions that improve
                service management and unlock productivity for teams.
              </p>
              <p className="mt-4 text-muted-foreground">
                With our user-friendly ServiceNow deployments, you can accelerate
                your transformation process.
              </p>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl bg-[#f6f7fb] p-8 aspect-[5/4]">
                <Image
                  src="/imgContainer (1).svg"
                  alt="ServiceNow implementation illustration"
                  fill
                  className="object-cover h-5 w-5"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 md:py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              What we implement
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">
              Our ServiceNow <span className="text-primary">Solutions</span>
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {services.map((service) => (
              <div
                key={service.id}
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
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <TimelineSection
        title="Our"
        highlight="Journey"
        items={timeline}
        className="bg-[#fafbfc]"
      />

      <ContactSection />
    </PageTemplate>
  );
}
