import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/templates";
import { NewsletterSection } from "@/components/organisms";
import { Container, Icon } from "@/components/atoms";
import { BlogCard } from "@/components/molecules";
import { blogPosts, siteConfig } from "@/lib/config/site";
import { generateBlogPostJsonLd, generateBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each post
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${siteConfig.name}`,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <PageTemplate>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBlogPostJsonLd({
              title: post.title,
              description: post.excerpt,
              url: `${siteConfig.url}/blog/${post.slug}`,
              image: `${siteConfig.url}${post.image}`,
              datePublished: post.date,
              author: post.author,
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
              { name: "Blog", url: `${siteConfig.url}/blog` },
              { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
            ])
          ),
        }}
      />

      {/* Article Header */}
      <section className="py-16 md:py-24">
        <Container className="max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <Icon name="chevron-right" size={14} />
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
            <Icon name="chevron-right" size={14} />
            <span className="text-foreground">{post.title}</span>
          </nav>

          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-semibold">
                  {post.author.charAt(0)}
                </span>
              </div>
              <span className="font-medium text-foreground">{post.author}</span>
            </div>
            <span className="flex items-center gap-1">
              <Icon name="calendar" size={14} />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            {post.readTime && (
              <span className="flex items-center gap-1">
                <Icon name="clock" size={14} />
                {post.readTime}
              </span>
            )}
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-lg overflow-hidden mb-12">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground mb-8">
              {post.excerpt}
            </p>

            <h2>Introduction</h2>
            <p>
              In today's rapidly evolving digital landscape, organizations are increasingly
              turning to ServiceNow to streamline their IT operations and drive digital
              transformation. This article explores the key considerations and best practices
              for successful implementation.
            </p>

            <h2>Key Benefits</h2>
            <p>
              ServiceNow offers a comprehensive platform that enables organizations to:
            </p>
            <ul>
              <li>Automate routine tasks and workflows</li>
              <li>Improve service delivery and user satisfaction</li>
              <li>Gain visibility into operations with real-time analytics</li>
              <li>Reduce costs through process optimization</li>
              <li>Enable better decision-making with data-driven insights</li>
            </ul>

            <h2>Implementation Approach</h2>
            <p>
              A successful ServiceNow implementation requires careful planning and execution.
              Our proven methodology includes discovery, design, build, test, and deployment
              phases, each with specific deliverables and milestones.
            </p>

            <h2>Conclusion</h2>
            <p>
              By following industry best practices and partnering with experienced
              implementation experts, organizations can maximize their ServiceNow investment
              and achieve their digital transformation goals.
            </p>
          </article>

          {/* Share */}
          <div className="mt-12 pt-8 border-t">
            <p className="font-semibold mb-4">Share this article</p>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon">
                <Icon name="twitter" size={18} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="linkedin" size={18} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="facebook" size={18} />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-24 bg-muted/30">
          <Container>
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Newsletter */}
      <NewsletterSection />
    </PageTemplate>
  );
}
