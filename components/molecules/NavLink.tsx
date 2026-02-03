"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/atoms";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { NavItem } from "@/lib/types";

interface NavLinkProps {
  item: NavItem;
  className?: string;
  variant?: "default" | "light";
}

export function NavLink({ item, className, variant = "default" }: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    pathname === item.href || pathname.startsWith(`${item.href}/`);

  if (item.children && item.children.length > 0) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn(
            "flex items-center gap-1 text-sm font-medium transition-colors outline-none",
            isActive
              ? "text-primary"
              : variant === "light"
                ? "text-white/80 hover:text-white"
                : "text-muted-foreground hover:text-foreground",
            className
          )}
        >
          {item.label}
          <Icon name="chevron-down" size={14} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          {item.children.map((child) => (
            <DropdownMenuItem key={child.href} asChild>
              <Link href={child.href} className="flex flex-col items-start">
                <span className="font-medium">{child.label}</span>
                {child.description && (
                  <span className="text-xs text-muted-foreground">
                    {child.description}
                  </span>
                )}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        "text-sm font-medium transition-colors",
        isActive
          ? "text-primary"
          : variant === "light"
            ? "text-white/80 hover:text-white"
            : "text-muted-foreground hover:text-foreground",
        className
      )}
    >
      {item.label}
    </Link>
  );
}
