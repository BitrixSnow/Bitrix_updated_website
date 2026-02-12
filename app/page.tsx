import { PageTemplate } from "@/components/templates";
import {
  HeroSection,
  ServicesSection,
  StatsSection,
  TestimonialsSection,
  ContactSection,
  NewsletterSection,
} from "@/components/organisms";
import { Container, SectionTitle, Icon } from "@/components/atoms";
import { services, testimonials, stats, siteConfig } from "@/lib/config/site";
import {
  generateOrganizationJsonLd,
  generateWebsiteJsonLd,
} from "@/lib/seo/jsonld";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Service workflow items for the home page
const workflowItems = [
  {
    icon: "./icons-images/Vector.svg",
    title: "Deliver Long-Term Strategic Value",
    description: "We provide the business solutions that amplify your revenue.",
    iconBgClass: "bg-[#FEEEE6]",
  },
  {
    icon: "./icons-images/icon-2.svg",
    title: "Secure and Resilient Tech Delivery",
    description: "Embed new technologies to upgrade the ecosystem with the current marketplace.",
    iconBgClass: "bg-[#E2E3FE]",
  },
  {
    icon: "./icons-images/icon-3.svg",
    title: "Enhance Employee Productivity",
    description: "Simplifying IT operations with automation of recursive processes.",
    iconBgClass: "bg-[#FEE9CE]",
  },
  {
    icon: "./icons-images/icon-4.svg",
    title: "Effortless Customer Experience",
    description: "Focus on delivering high-quality solutions to our customer.",
    iconBgClass: "bg-[#FEEBF1]",
  },
];

const helpItems = [
  {
    label: "IT",
    title: "IT workflows",
    description:
      "We offer workflows that transform IT into a fully-fledged growth engine. Take advantage of the benefits of operational flexibility by increasing workforce adaptability.",
    icon: "workflow",
  },
  {
    label: "Employee",
    title: "Employee workflows",
    description:
      "Make employee experiences more integrated and engaging with ServiceNow Employee Workflows. Motivate your staff by making it simple for them to obtain what they require when they require it.",
    icon: "users",
  },
  {
    label: "Business",
    title: "Business workflows",
    description:
      "Transform your business operations with our comprehensive workflow solutions. Streamline processes and enhance productivity across all departments.",
    icon: "briefcase",
  },
  {
    label: "Technical",
    title: "Technical workflows",
    description:
      "Implement robust technical workflows that ensure smooth operation of your systems. Automate complex processes and reduce manual intervention.",
    icon: "settings",
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

export default function HomePage() {
  return (
    <PageTemplate>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebsiteJsonLd()),
        }}
      />

      {/* Hero Section */}
      <HeroSection
        title="WE"
        highlight="COLLABORATE"
        titleSuffix="TO"
        highlightSecond="INNOVATE"
        description="Partnerships are at the heart of bussiness success, we're proud to have teamed up with some of the best solution providers in the world."
        image="/images/hero-img.svg"
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Book a Meeting", href: "/services" }}
      />

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

      {/* Capabilities Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container className="max-w-[90rem]">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 justify-center mb-6 border border-muted-foreground/30 rounded-full px-3 py-1">
              <img
                src="/Rectange.svg"
                alt="Objective Image"
                className="h-2 w-2"
              />
              <p className="text-sm text-muted-foreground">OUR OBJECTIVE</p>
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              We provide the best <span className="text-primary">ServiceNow Solutions</span>
              <br />
              with out-of-the-box <span className="text-primary">capabilities</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-slate/100">We have technology experts to help you manage business processess.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 p-6 rounded-2xl border border-border bg-background shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.iconBgClass}`}
                >
                  <img src={item.icon} alt="icons" className="text-primary h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Help Section */}
      <section className="py-16 md:py-24 bg-white text-foreground">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1 text-xs uppercase tracking-wide text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-rose-500" />
              How can we help
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black/100">
              A complete suite of ServiceNow workflows that{" "}
              <span className="bg-gradient-to-r from-rose-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                connect IT, employees, and business operations
              </span>{" "}
              into one seamless ecosystem.
            </h2>
            <div className="mt-8">
              <Button asChild className="bg-foreground text-background hover:bg-foreground/90 p-5 pl-6 pr-6">
                <Link href="/contact">Book a call</Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-6">
            {helpItems.map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-[120px_1fr] rounded-2xl border border-border bg-background overflow-hidden"
              >
                <div className="flex flex-col items-center justify-center gap-3 bg-muted p-6 text-center">
                  <div className="w-11 h-11 rounded-xl bg-background flex items-center justify-center">
                    <Icon name={item.icon} size={20} className="text-foreground" />
                  </div>
                  <p className="text-sm font-medium text-foreground/70">
                    {item.label}
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ServiceNow Assessment Section */}
      <section className="py-16 md:py-24 bg-white text-foreground">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center mt-0 gap-2 rounded-full border border-border px-4 py-1 text-xs uppercase tracking-wide text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-rose-500" />
                ServiceNow
              </span>
              <div className="mt-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-black/90">
                  <span className="text-black/60">ServiceNow</span>{" "}
                  <span className="text-rose-500">Micro Assessment</span>
                </h2>
              </div>
              <p className="mt-5 text-muted-foreground max-w-xl">
                We help you assess existing ServiceNow implementation with a prioritized
                roadmap that scales with business needs over time, a strategic solution for
                expanding digital excellence.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Assess existing ServiceNow implementations",
                  "Evaluation of existing ITSM tool",
                  "Understand the process gaps",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 flex items-center justify-center">
                      <Icon name="check" size={12} className="text-rose-500" />
                    </div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              {[
                {
                  icon: "/cpu-line.svg",
                  title: "Technology Adoption",
                  description:
                    "We provide actionable insights on adopting the latest technologies without any obstacles.",
                  color: "text-amber-400",
                },
                {
                  icon: "/Vector (1).svg",
                  title: "Digital excellence",
                  description:
                    "Superior solutions are provided to understand the process gaps for expanding Digital Excellence.",
                  color: "text-sky-400",
                },
                {
                  icon: "/puzzle-2-line.svg",
                  title: "Strategic solution",
                  description:
                    "We ensure seamless integration of ServiceNow with your business processes.",
                  color: "text-amber-300",
                },
                {
                  icon: "/line-chart-line.svg",
                  title: "Cost Optimisation",
                  description:
                    "We ensure seamless integration of ServiceNow with your business processes.",
                  color: "text-fuchsia-400",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-white p-5 md:p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center">
                      <img
                        src={item.icon}
                        alt={`${item.title} icon`}
                        className="h-5 w-5"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-black/90">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Section */}
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

      {/* Our Impact Section */}
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


      {/* Testimonials Section */}
      <TestimonialsSection
        title="What our"
        highlight="customers"
        subtitle="have to say"
        testimonials={testimonials}
        className="bg-background"
      />

      {/* Contact/Quote Section */}
      <ContactSection/>

      {/* Newsletter Section */}
      <NewsletterSection />
    </PageTemplate>
  );
}
