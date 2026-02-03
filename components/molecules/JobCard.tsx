import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/atoms";
import { cn } from "@/lib/utils";
import type { JobPosition } from "@/lib/types";

interface JobCardProps {
  job: JobPosition;
  className?: string;
}

export function JobCard({ job, className }: JobCardProps) {
  return (
    <Card className={cn("group", className)}>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                {job.title}
              </h3>
              <Badge variant="secondary">{job.type}</Badge>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
              <span className="flex items-center gap-1">
                <Icon name="briefcase" size={14} />
                {job.department}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="map-pin" size={14} />
                {job.location}
              </span>
            </div>
            <p className="mt-3 text-muted-foreground text-sm line-clamp-2">
              {job.description}
            </p>
          </div>
          <Link href={`/careers/${job.slug}`}>
            <Button variant="outline" className="shrink-0 bg-transparent">
              View Details
              <Icon name="arrow-right" size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
