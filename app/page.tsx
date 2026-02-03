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
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="ServiceNow"
                highlight="Micro Assessment"
                className="mb-6"
              />
              <p className="text-muted-foreground mb-6">
                Our comprehensive assessment helps identify opportunities to optimize your
                ServiceNow investment and accelerate your digital transformation journey.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Evaluate current implementation maturity",
                  "Identify optimization opportunities",
                  "Develop strategic roadmap",
                  "Prioritize high-impact initiatives",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="check" size={12} className="text-primary" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href="/contact">
                  Request Assessment
                  <Icon name="arrow-right" size={18} className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">
                Why choose <span className="text-primary">Bitrix?</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "check", title: "Detailed ServiceNow" },
                  { icon: "check", title: "Cost-Optimized Approach" },
                  { icon: "check", title: "Cloud Service Expertise" },
                  { icon: "check", title: "Extended Workbench" },
                  { icon: "check", title: "Technical Assistance" },
                  { icon: "check", title: "Skilled Experts" },
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-2">
                    <Icon name={item.icon} size={16} className="text-primary" />
                    <span className="text-sm">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <StatsSection
        title="Our numbers and"
        highlight="Excellence"
        stats={stats}
        className="bg-muted/30"
      />

      {/* Testimonials Section */}
      <TestimonialsSection
        title="What our"
        highlight="customers"
        subtitle="have to say"
        testimonials={testimonials}
        className="bg-background"
      />

      {/* Contact/Quote Section */}
      <ContactSection
        title="Request a"
        highlight="quote"
        showImage={true}
      />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <Container className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Or book a <span className="text-primary">free call</span>
          </h2>
          <p className="text-background/70 mb-8">
            Schedule a consultation with our experts
          </p>
          <Button asChild variant="outline" size="lg" className="border-background text-background hover:bg-background hover:text-foreground bg-transparent">
            <Link href="/contact">
              Schedule a Call
              <Icon name="arrow-right" size={18} className="ml-2" />
            </Link>
          </Button>
        </Container>
      </section>
    </PageTemplate>
  );
}
