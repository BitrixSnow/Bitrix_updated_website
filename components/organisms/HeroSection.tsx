 "use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Icon } from "@/components/atoms";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  highlight?: string;
  titleSuffix?: string;
  highlightSecond?: string;
  description?: string;
  image?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  className?: string;
  variant?: "default" | "centered" | "simple";
  showBreadcrumb?: boolean;
}

export function HeroSection({
  title,
  highlight,
  titleSuffix,
  highlightSecond,
  description,
  image,
  primaryCta,
  secondaryCta,
  className,
  variant = "default",
  showBreadcrumb = true,
}: HeroSectionProps) {
  const pathname = usePathname();
  const breadcrumbLabel = (() => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return "Home";
    const last = segments[segments.length - 1];
    return last
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  })();

  const Breadcrumb = showBreadcrumb ? (
    <div className="mb-0 flex items-center gap-2 text-sm text-muted-foreground">
      <Link
        href="/"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 bg-white/80 shadow-sm"
        aria-label="Home"
      >
        <Icon name="home" size={16} />
      </Link>
      <span className="text-foreground/40">›</span>
      <span className="font-medium text-foreground/70">{breadcrumbLabel}</span>
    </div>
  ) : null;

  if (variant === "simple") {
    return (
      <section className={cn("py-16 md:py-24 bg-muted/30", className)}>
        <Container className="text-center">
          <div className="text-left mt-0">{Breadcrumb}</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            {title}{" "}
            {highlight && (
              <span className="text-primary">{highlight}</span>
            )}
            {titleSuffix && <> {titleSuffix}</>}
            {highlightSecond && (
              <>
                {" "}
                <span className="text-primary">
                  {highlightSecond}
                </span>
              </>
            )}
          </h1>
          {description && (
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </Container>
      </section>
    );
  }

  if (variant === "centered") {
    return (
      <section className={cn("py-20 md:py-32", className)}>
        <Container className="text-center">
          <div className="text-left">{Breadcrumb}</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance max-w-4xl mx-auto">
            {title}{" "}
            {highlight && (
              <span className="text-primary">{highlight}</span>
            )}
            {titleSuffix && <> {titleSuffix}</>}
            {highlightSecond && (
              <>
                {" "}
                <span className="text-primary">
                  {highlightSecond}
                </span>
              </>
            )}
          </h1>
          {description && (
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              {primaryCta && (
                <Button asChild size="lg" className="bg-black/100">
                  <Link href={primaryCta.href}>
                    {primaryCta.label}
                  </Link>
                </Button>
              )}
              {secondaryCta && (
                <Button asChild variant="outline" size="lg" className="border-black">
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          )}
        </Container>
      </section>
    );
  }

  return (
    <section className={cn("py-16 md:py-10", className)}>
      <Container>
        {Breadcrumb}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              {title}{" "}
              {highlight && (
                <span className="text-primary">{highlight}</span>
              )}
              {titleSuffix && <> {titleSuffix}</>}
              {highlightSecond && (
                <>
                  {" "}
                  <span className="text-primary">
                    {highlightSecond}
                  </span>
                </>
              )}
            </h1>
            {description && (
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
                {description}
              </p>
            )}
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                {primaryCta && (
                  <Button asChild size="lg" className="bg-black/100">
                    <Link href={primaryCta.href}>
                      {primaryCta.label}
                    </Link>
                  </Button>
                )}
                {secondaryCta && (
                  <Button asChild variant="outline" size="lg" className="border-black">
                    <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                  </Button>
                )}
              </div>
            )}
          </div>
          {image && (
            <div className="relative aspect-square lg:aspect-[4/3] w-full">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                fill
                className="object-contain"
                priority
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
