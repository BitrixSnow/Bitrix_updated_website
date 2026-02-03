import type { Metadata } from "next";
import Image from "next/image";
import { PageTemplate } from "@/components/templates";
import { HeroSection, TimelineSection, TestimonialsSection, ContactSection } from "@/components/organisms";
import { Container, SectionTitle, Icon } from "@/components/atoms";
import { TeamMemberCard } from "@/components/molecules";
import { teamMembers, testimonials, timeline, siteConfig } from "@/lib/config/site";
import { generateOrganizationJsonLd, generateBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about BITRIX - your trusted ServiceNow implementation partner. Discover our mission, team, and commitment to innovation.",
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description: "Learn about BITRIX - your trusted ServiceNow implementation partner.",
    url: `${siteConfig.url}/about`,
  },
};

const values = [
  {
    title: "Innovation",
    description: "We continuously explore new technologies and methodologies to deliver cutting-edge solutions.",
    icon: "code",
  },
  {
    title: "Excellence",
    description: "We strive for excellence in every project, ensuring the highest quality outcomes.",
    icon: "star",
  },
  {
    title: "Collaboration",
    description: "We work closely with our clients as partners, not just vendors.",
    icon: "users",
  },
  {
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical practices.",
    icon: "shield",
  },
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
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-muted-foreground mb-4">ABOUT US</p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                WHO <span className="text-primary">WE ARE</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                We build the <span className="text-primary font-semibold">best solutions</span> to grow
                your business and transform your IT operations.
              </p>
              <p className="text-muted-foreground mb-8">
                BITRIX is a leading ServiceNow implementation partner dedicated to helping
                organizations transform their operations through innovative technology solutions.
                With years of experience and a team of certified experts, we deliver results
                that drive real business value.
              </p>
              <Button asChild>
                <Link href="/contact">
                  Request a quote
                  <Icon name="arrow-right" size={18} className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/images/about-illustration.jpg"
                alt="About BITRIX"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="We move your business forward with"
              highlight="the best solutions"
              align="center"
              className="mb-8"
            />
            <p className="text-lg text-muted-foreground">
              Our mission is to empower organizations to achieve their digital transformation
              goals through expert ServiceNow implementation and consulting services. We believe
              in building lasting partnerships that drive sustainable growth and innovation.
            </p>
          </div>
        </Container>
      </section>

      {/* ServiceNow Implementation Partner */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-sm text-muted-foreground mb-2">ServiceNow</p>
                <h3 className="text-2xl font-bold">
                  <span className="text-primary">Implementation</span> partner
                </h3>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Our ServiceNow <span className="text-primary">Expertise</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                As an elite ServiceNow partner, we bring deep expertise in implementing
                and optimizing ServiceNow solutions across all modules. Our certified
                professionals have successfully delivered hundreds of implementations
                across diverse industries.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Elite Partner Status",
                  "100+ Certifications",
                  "500+ Implementations",
                  "24/7 Support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Icon name="check" size={16} className="text-primary" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <TimelineSection
        title="Our"
        highlight="Journey"
        items={timeline}
        className="bg-muted/30"
      />

      {/* Values */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle
            title="Our Core"
            highlight="Values"
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={value.icon} size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Preview */}
      <section id="team" className="py-16 md:py-24 bg-muted/30">
        <Container>
          <SectionTitle
            title="MEET"
            highlight="THE TEAM"
            subtitle="Our team of experts brings decades of combined experience in ServiceNow implementation."
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonial CTA */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                We'll guide you, work with you and <span className="text-primary">deliver the best</span>
              </h2>
              <p className="text-background/70 mb-8">
                Partner with us to transform your business operations.
              </p>
              <Button asChild size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-foreground bg-transparent">
                <Link href="/contact">
                  Get in Touch
                  <Icon name="arrow-right" size={18} className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="quote" size={32} className="text-primary-foreground" />
                </div>
                <p className="text-background/80 italic mb-4">
                  "The best ServiceNow partner we've worked with. Professional, knowledgeable, and truly committed to our success."
                </p>
                <p className="text-sm text-background/60">- IT Director, HealthFirst Medical</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageTemplate>
  );
}
