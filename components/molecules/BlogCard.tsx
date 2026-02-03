import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/atoms";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/lib/types";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
  variant?: "default" | "featured";
}

export function BlogCard({ post, className, variant = "default" }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card
        className={cn(
          "group h-full overflow-hidden transition-all duration-300 hover:shadow-lg",
          className
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden bg-muted",
            variant === "featured" ? "aspect-video" : "aspect-[16/10]"
          )}
        >
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
            {post.category}
          </Badge>
        </div>
        <CardContent className="p-5">
          <div className="flex items-center gap-4 text-muted-foreground text-xs mb-3">
            <span className="flex items-center gap-1">
              <Icon name="calendar" size={14} />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
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
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {post.excerpt}
          </p>
          <div className="mt-4 flex items-center text-primary text-sm font-medium">
            Read more
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
