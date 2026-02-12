import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageTemplate } from "@/components/templates";
import { NewsletterSection } from "@/components/organisms";
import { Container, Icon } from "@/components/atoms";
import { BlogCard } from "@/components/molecules";
import { blogPosts, siteConfig } from "@/lib/config/site";
import { generateBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
            <span className="font-medium text-foreground/70">Blog</span>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                READ OUR LATEST{" "}
                <span className="block text-primary">BLOG POSTS</span>
              </h1>
              <p className="mt-5 text-muted-foreground max-w-xl">
                Stay informed with the latest insights subscribe to receive updates
                straight to your inbox.
              </p>
              <div className="mt-6 flex w-full max-w-md items-center gap-3">
                <Input placeholder="Email" />
                <Button className="bg-foreground text-background hover:bg-foreground/90">
                  Subscribe
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl bg-[#f6f7fb] p-8 aspect-[5/4]">
                <Image
                  src="/img (7).svg"
                  alt="Blog illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="pb-6 bg-white">
        <Container>
          <div className="flex flex-wrap gap-2">
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

      {/* Blog Grid */}
      <section className="pb-16 md:pb-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </Container>
      </section>
    </PageTemplate>
  );
}
