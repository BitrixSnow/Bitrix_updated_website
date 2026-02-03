import Link from "next/link";
import { Icon } from "@/components/atoms";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/types";

interface ServiceCardProps {
  service: Service;
  className?: string;
  variant?: "default" | "compact";
}

export function ServiceCard({
  service,
  className,
  variant = "default",
}: ServiceCardProps) {
  return (
    <Link href={service.href}>
      <Card
        className={cn(
          "group h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20",
          className
        )}
      >
        <CardContent
          className={cn(
            "flex flex-col",
            variant === "compact" ? "p-4" : "p-6"
          )}
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon name={service.icon} size={24} />
          </div>
          <h3 className="mb-2 font-semibold text-lg group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          {variant === "default" && (
            <p className="text-muted-foreground text-sm leading-relaxed">
              {service.description}
            </p>
          )}
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
