import type { Metadata } from "next";
import Image from "next/image";
import { PageTemplate } from "@/components/templates";
import { HeroSection, ContactSection } from "@/components/organisms";
import { Container, SectionTitle, Icon } from "@/components/atoms";
import { JobCard } from "@/components/molecules";
import { jobPositions, teamMembers, siteConfig } from "@/lib/config/site";
import { generateBreadcrumbJsonLd, generateJobPostingJsonLd } from "@/lib/seo/jsonld";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the BITRIX team! Explore exciting career opportunities in ServiceNow consulting and implementation.",
  openGraph: {
    title: `Careers | ${siteConfig.name}`,
    description: "Join the BITRIX team! Explore exciting career opportunities.",
    url: `${siteConfig.url}/careers`,
  },
};

const benefits = [
  {
    title: "Competitive Salary",
    description: "Industry-leading compensation packages",
    icon: "briefcase",
  },
  {
    title: "Remote Flexibility",
    description: "Work from anywhere with flexible hours",
    icon: "map-pin",
  },
  {
    title: "Learning & Growth",
    description: "Certification support and training programs",
    icon: "graduation-cap",
  },
  {
    title: "Health Benefits",
    description: "Comprehensive health and wellness coverage",
    icon: "heart",
  },
];

export default function CareersPage() {
  return (
    <PageTemplate>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Careers", url: `${siteConfig.url}/careers` },
            ])
          ),
        }}
      />
      {jobPositions.map((job) => (
        <script
          key={job.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateJobPostingJsonLd({
                title: job.title,
                description: job.description,
                employmentType: job.type,
                location: job.location,
              })
            ),
          }}
        />
      ))}

      {/* Hero */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-muted-foreground mb-4">JOIN OUR TEAM</p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                BUILD <span className="text-primary">YOUR CAREER</span> WITH US
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Join a team of passionate professionals dedicated to transforming businesses
                through innovative ServiceNow solutions. We're always looking for talented
                individuals to grow with us.
              </p>
              <Button asChild size="lg">
                <Link href="#positions">
                  View Open Positions
                  <Icon name="arrow-right" size={18} className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/team/member-1.jpg"
                alt="Join our team"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Why Join Us */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <SectionTitle
            title="Why join"
            highlight="BITRIX?"
            subtitle="We offer more than just a job - we offer a career with purpose."
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center p-6 bg-background rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon} size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-16 md:py-24">
        <Container>
          <SectionTitle
            title="Open"
            highlight="Positions"
            subtitle="Explore our current job openings and find your perfect role."
            className="mb-12"
          />
          <div className="space-y-4">
            {jobPositions.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Don't see a position that fits? We're always interested in hearing from talented professionals.
            </p>
            <Button asChild variant="outline">
              <Link href="/contact">
                Send Your Resume
                <Icon name="arrow-right" size={18} className="ml-2" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Culture */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Our"
                highlight="Culture"
                className="mb-6"
              />
              <p className="text-muted-foreground mb-6">
                At BITRIX, we believe in fostering a culture of innovation, collaboration,
                and continuous learning. Our team members are empowered to take ownership,
                share ideas, and grow both personally and professionally.
              </p>
              <ul className="space-y-3">
                {[
                  "Collaborative and inclusive environment",
                  "Regular team events and activities",
                  "Open communication and feedback",
                  "Work-life balance focus",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Icon name="check" size={16} className="text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {teamMembers.slice(0, 4).map((member, index) => (
                <div
                  key={member.id}
                  className="relative aspect-square rounded-lg overflow-hidden bg-muted"
                >
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to start your <span className="text-primary">journey?</span>
          </h2>
          <p className="text-background/70 mb-8 max-w-2xl mx-auto">
            Take the next step in your career and join our team of ServiceNow experts.
          </p>
          <Button asChild size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-foreground bg-transparent">
            <Link href="#positions">
              Apply Now
              <Icon name="arrow-right" size={18} className="ml-2" />
            </Link>
          </Button>
        </Container>
      </section>
    </PageTemplate>
  );
}
