import Link from "next/link";
import { Icon } from "@/components/atoms";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/types";

interface ServiceCardProps {
  service: Service;
  className?: string;
  variant?: "default" | "compact";
  index?: number;
}

export function ServiceCard({
  service,
  className,
  variant = "default",
  index = 0,
}: ServiceCardProps) {
  const iconTones = [
    "bg-orange-100 text-orange-700",
    "bg-amber-100 text-amber-700",
    "bg-blue-100 text-blue-700",
    "bg-fuchsia-100 text-fuchsia-700",
    "bg-rose-100 text-rose-700",
    "bg-yellow-100 text-yellow-700",
    "bg-sky-100 text-sky-700",
    "bg-violet-100 text-violet-700",
    "bg-emerald-100 text-emerald-700",
  ];
  const toneClass = iconTones[index % iconTones.length];

  if (variant === "compact") {
    return (
      <Link href={service.href}>
        <Card
          className={cn(
            "group h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20",
            className
          )}
        >
          <CardContent className="flex flex-col p-4">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon name={service.icon} size={24} />
            </div>
            <h3 className="mb-2 font-semibold text-lg group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <div className="mt-auto pt-4 flex items-center text-primary text-sm font-medium">
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
    );
  }

  return (
    <Link href={service.href}>
      <Card
        className={cn(
          "group relative h-full gap-0 overflow-hidden rounded-2xl border-border/60 bg-card/80 py-0 shadow-none transition-all duration-300 hover:border-primary/30 hover:shadow-sm",
          className
        )}
      >
        <CardContent
          className={cn(
            "flex h-full flex-col p-6"
          )}
        >
          <div className="flex items-start justify-between gap-4">
            <div
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-lg transition-colors",
                toneClass
              )}
            >
              <Icon name={service.icon} size={20} />
            </div>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-all group-hover:border-primary/40 group-hover:text-primary">
              <Icon
                name="arrow-right"
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </span>
          </div>
          <h3 className="mt-6 text-base font-semibold text-foreground">
            {service.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {service.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
