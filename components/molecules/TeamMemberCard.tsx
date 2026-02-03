import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@/components/atoms";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/lib/types";

interface TeamMemberCardProps {
  member: TeamMember;
  className?: string;
}

export function TeamMemberCard({ member, className }: TeamMemberCardProps) {
  return (
    <Card className={cn("group overflow-hidden", className)}>
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg">{member.name}</h3>
        <p className="text-muted-foreground text-sm mb-2">{member.role}</p>
        {member.bio && (
          <p className="text-muted-foreground text-sm mb-3">{member.bio}</p>
        )}
        {member.linkedin && (
          <Link
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline text-sm"
          >
            <Icon name="linkedin" size={16} className="mr-1" />
            Connect
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
