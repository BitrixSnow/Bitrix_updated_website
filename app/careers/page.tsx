import type { Metadata } from "next";
import Link from "next/link";
import { PageTemplate } from "@/components/templates";
import { Container, Icon } from "@/components/atoms";
import { JobCard } from "@/components/molecules";
import { jobPositions, siteConfig } from "@/lib/config/site";
import { generateBreadcrumbJsonLd, generateJobPostingJsonLd } from "@/lib/seo/jsonld";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build your career with BITRIX. Explore open positions and join our ServiceNow experts.",
  openGraph: {
    title: `Careers | ${siteConfig.name}`,
    description:
      "Build your career with BITRIX. Explore open positions and join our ServiceNow experts.",
    url: `${siteConfig.url}/careers`,
  },
};

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
            <span className="font-medium text-foreground/70">Careers</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Careers
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
            BUILD <span className="text-primary">YOUR CAREER</span> WITH US
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Join a team where innovation, collaboration, and growth shape everything we do.
          </p>
        </Container>
      </section>

      {/* Open Positions */}
      <section id="positions" className="pb-16 md:pb-24 bg-white">
        <Container>
          <div className="text-2xl font-semibold mb-6">Open positions</div>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {["All locations", "All employment types", "All work types"].map((label) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-xl border bg-white px-4 py-2 text-sm text-muted-foreground"
              >
                <span>{label}</span>
                <Icon name="chevron-down" size={16} />
              </div>
            ))}
          </div>

          <div className="space-y-10">
            {["Department name", "Department name"].map((dept, index) => (
              <div key={`${dept}-${index}`}>
                <h3 className="text-lg font-semibold mb-4">{dept}</h3>
                <div className="space-y-4">
                  {jobPositions.map((job) => (
                    <div
                      key={`${dept}-${job.id}`}
                      className="rounded-2xl border bg-white px-5 py-4 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                    >
                      <div>
                        <p className="font-semibold">Position name</p>
                        <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-2">
                            <Icon name="map-pin" size={14} />
                            Location
                          </span>
                          <span className="inline-flex items-center gap-2">
                            <Icon name="briefcase" size={14} />
                            Employment type
                          </span>
                          <span className="inline-flex items-center gap-2">
                            <Icon name="clock" size={14} />
                            Work type
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </PageTemplate>
  );
}
