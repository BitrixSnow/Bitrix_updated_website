import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageTemplate } from "@/components/templates";
import { ContactSection, TestimonialsSection } from "@/components/organisms";
import { Container, Icon } from "@/components/atoms";
import { siteConfig } from "@/lib/config/site";
import { generateServiceJsonLd, generateBreadcrumbJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "AngularJS Development Services",
  description:
    "Empower your web applications with scalable AngularJS development and expert engineering.",
  openGraph: {
    title: `AngularJS Development Services | ${siteConfig.name}`,
    description:
      "Empower your web applications with scalable AngularJS development and expert engineering.",
    url: `${siteConfig.url}/services/website-application-development/angular-js-development-service`,
  },
};

const angularServices = [
  {
    title: "Custom website",
    description:
      "Develop a unique and engaging online presence with custom website solutions.",
    icon: "code",
  },
  {
    title: "Web portal development",
    description:
      "Streamline operations with secure, efficient web portals tailored to your needs.",
    icon: "workflow",
  },
  {
    title: "Mobile application development",
    description:
      "Build fast, responsive mobile apps integrated with AngularJS.",
    icon: "phone",
  },
  {
    title: "User-friendly UI/UX development",
    description:
      "Create intuitive, engaging interfaces that improve usability and conversions.",
    icon: "heart",
  },
  {
    title: "Interactive plug-in development",
    description:
      "Enhance your website with rich, interactive features for better engagement.",
    icon: "star",
  },
];

const processSteps = [
  {
    title: "Consultation & Planning",
    description:
      "Define your AngularJS project scope and align on goals, timelines, and features.",
    color: "bg-[#ff4d6d]",
  },
  {
    title: "Design & Development",
    description:
      "Craft beautiful UI and build robust AngularJS components with modern best practices.",
    color: "bg-[#ff8c42]",
  },
  {
    title: "Testing & Optimization",
    description:
      "Rigorous testing to ensure performance, security, and high quality delivery.",
    color: "bg-[#6c5ce7]",
  },
  {
    title: "Launch & Deployment",
    description:
      "Go live with confidence and monitor performance to ensure seamless adoption.",
    color: "bg-[#00b894]",
  },
];

const specialties = [
  { title: "Customer Satisfaction", icon: "users" },
  { title: "Cost Optimisation", icon: "briefcase" },
  { title: "Assured Commitment", icon: "shield" },
  { title: "Technical Excellence", icon: "settings" },
  { title: "Skilled Experts", icon: "check" },
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

const testimonials = [
  {
    id: "angular-testimonial-1",
    content:
      "Working with the team has been an absolute pleasure. Their attention to detail and commitment to excellence is unmatched.",
    author: "Jane Smith",
    role: "Tech Lead",
    company: "GrowthLabs",
  },
];

export default function AngularJsDevelopmentServicePage() {
  return (
    <PageTemplate>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceJsonLd({
              name: "AngularJS Development Services",
              description:
                "Empower your web applications with scalable AngularJS development and expert engineering.",
              url: `${siteConfig.url}/services/website-application-development/angular-js-development-service`,
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
                url: `${siteConfig.url}/services/website-application-development`,
              },
              {
                name: "AngularJS Development Services",
                url: `${siteConfig.url}/services/website-application-development/angular-js-development-service`,
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
            <span className="text-foreground/40">›</span>
            <span className="font-medium text-foreground/70">
              AngularJS Development Services
            </span>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                EMPOWER YOUR WEB{" "}
                <span className="block text-primary">
                  APPLICATIONS WITH ANGULARJS
                </span>{" "}
                EXCELLENCE
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                Bitrix delivers expert AngularJS development, crafting tailored
                solutions that boost user experience and application performance.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white"
                >
                  Talk to us
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl bg-[#f6f7fb] p-8 aspect-[5/4]">
                <Image
                  src="/images/img.svg"
                  alt="AngularJS development illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-12 md:py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Services
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">
              <span className="text-primary">AngularJS Development Services</span>{" "}
              provided by Bitrix
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {angularServices.map((service) => (
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

      {/* Flow */}
      <section className="py-12 md:py-20 bg-[#fafbfc]">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Our flow
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">
              Revolutionary <span className="text-primary">AngularJS</span>{" "}
              shaping the future of Web development today
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border bg-white p-4 shadow-sm"
              >
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <span className={`h-6 w-1 rounded-full ${step.color}`} />
                  {index + 1}. {step.title}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Specialities */}
      <section className="py-16 md:py-24 bg-white text-foreground">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1 text-xs uppercase tracking-wide text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-rose-500" />
              Our Specialities
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold text-black/90">
              Why choose <span className="text-rose-500">Bitrix</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our expertise allows your business to streamline workflow and increase
              productivity. We believe in providing the best services to our customers with
              maximum efficiency.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "/icon-3 (2).svg", title: "Customer Satisfaction" }, 
              { icon: "/hand-coin-line.svg", title: "Cost Optimisation" },
              { icon: "/shield-check-line.svg", title: "Assured Commitment" },
              { icon: "/icon (1).svg", title: "Technical Excellence" }, 
              { icon: "/icon (2).svg", title: "Skilled Experts" }, 
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm"
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


      {/* Impact */}
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
