import type { Metadata } from "next";
import Link from "next/link";
import { PageTemplate } from "@/components/templates";
import { HeroSection } from "@/components/organisms";
import { Container, SectionTitle, Icon } from "@/components/atoms";
import { industrySolutions, siteConfig } from "@/lib/config/site";
import { generateBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Solutions by Industry",
  description: "Industry-specific ServiceNow solutions for healthcare, financial services, manufacturing, government, and more.",
  openGraph: {
    title: `Solutions | ${siteConfig.name}`,
    description: "Industry-specific ServiceNow solutions tailored to your needs.",
    url: `${siteConfig.url}/solutions`,
  },
};

export default function SolutionsPage() {
  return (
    <PageTemplate>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Solutions", url: `${siteConfig.url}/solutions` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <HeroSection
        title="SOLUTIONS BY"
        highlight="INDUSTRIES"
        description="We deliver tailored ServiceNow solutions that address the unique challenges of your industry."
        variant="simple"
      />

      {/* Solutions Grid */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrySolutions.map((solution) => (
              <Link key={solution.id} href={solution.href}>
                <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon name={solution.icon} size={24} className="text-primary group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground text-sm flex-1">
                      {solution.description}
                    </p>
                    <div className="mt-4 flex items-center text-primary text-sm font-medium">
                      Learn more
                      <Icon
                        name="arrow-right"
                        size={16}
                        className="ml-2 transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="We move your business forward with"
                highlight="the best solutions"
                className="mb-6"
              />
              <p className="text-muted-foreground mb-8">
                Our industry expertise combined with ServiceNow's powerful platform enables
                us to deliver solutions that drive real business outcomes.
              </p>
              <ul className="space-y-4">
                {[
                  "Deep industry knowledge and expertise",
                  "Proven implementation methodology",
                  "Dedicated support and training",
                  "Continuous innovation and improvement",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="check" size={14} className="text-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
              <Icon name="building" size={64} className="text-muted-foreground/30" />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to transform your <span className="text-primary">industry?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us to learn how our industry-specific solutions can help your organization.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Get Started
              <Icon name="arrow-right" size={18} className="ml-2" />
            </Link>
          </Button>
        </Container>
      </section>
    </PageTemplate>
  );
}
