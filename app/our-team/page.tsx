import type { Metadata } from "next";
import Link from "next/link";
import { PageTemplate } from "@/components/templates";
import { ContactSection, TestimonialsSection } from "@/components/organisms";
import { Container, Icon } from "@/components/atoms";
import { TeamMemberCard } from "@/components/molecules";
import { teamMembers, testimonials, siteConfig } from "@/lib/config/site";
import { generateBreadcrumbJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Bitrix team of certified experts with years of experience in ServiceNow.",
  openGraph: {
    title: `Our Team | ${siteConfig.name}`,
    description:
      "Meet the Bitrix team of certified experts with years of experience in ServiceNow.",
    url: `${siteConfig.url}/our-team`,
  },
};

export default function OurTeamPage() {
  return (
    <PageTemplate>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Our Team", url: `${siteConfig.url}/our-team` },
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
            <span className="font-medium text-foreground/70">Our team</span>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Our team
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
              MEET <span className="text-primary">THE TEAM</span>
            </h1>
            <p className="mt-4 text-muted-foreground">
              We have the best teams of certified experts with years of experience
              in ServiceNow.
            </p>
          </div>
        </Container>
      </section>

      {/* Team Grid */}
      <section className="pb-12 md:pb-20 bg-white">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                className="rounded-2xl border border-foreground/10"
              />
            ))}
          </div>
        </Container>
      </section>


      <ContactSection />
    </PageTemplate>
  );
}
