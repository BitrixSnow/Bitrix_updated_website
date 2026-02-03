import type { Metadata } from "next";
import { PageTemplate } from "@/components/templates";
import { HeroSection, NewsletterSection } from "@/components/organisms";
import { Container, SectionTitle } from "@/components/atoms";
import { BlogCard } from "@/components/molecules";
import { blogPosts, siteConfig } from "@/lib/config/site";
import { generateBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read the latest insights, news, and articles about ServiceNow, ITSM, digital transformation, and industry best practices.",
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description: "Read the latest insights about ServiceNow and digital transformation.",
    url: `${siteConfig.url}/blog`,
  },
};

const categories = [
  "All",
  "ITSM",
  "Implementation",
  "Digital Transformation",
  "Best Practices",
  "News",
];

export default function BlogPage() {
  return (
    <PageTemplate>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Blog", url: `${siteConfig.url}/blog` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground mb-4">OUR BLOG</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              READ OUR LATEST <span className="text-primary">BLOG POSTS</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay up to date with the latest insights, trends, and best practices
              in ServiceNow and digital transformation.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <Badge
                key={category}
                variant={index === 0 ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Post */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle
            title="Featured"
            highlight="Article"
            className="mb-8"
          />
          {blogPosts[0] && (
            <BlogCard post={blogPosts[0]} variant="featured" className="mb-12" />
          )}
        </Container>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <SectionTitle
            title="Latest"
            highlight="Articles"
            subtitle="Explore our collection of articles and insights"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination placeholder */}
          <div className="mt-12 flex justify-center gap-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-lg ${
                  page === 1
                    ? "bg-primary text-primary-foreground"
                    : "bg-background border hover:bg-muted"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <NewsletterSection />
    </PageTemplate>
  );
}
