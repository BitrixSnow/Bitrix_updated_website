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
  const isServicesMenu = item.label === "Services" || item.href === "/services";

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
        <DropdownMenuContent
          align="start"
          className={cn(
            isServicesMenu ? "w-[340px] rounded-2xl p-0" : "w-56",
            "overflow-hidden"
          )}
        >
          {isServicesMenu ? (
            <div>
              <div className="px-5 py-4 border-b">
                <p className="text-sm font-semibold">Our services</p>
              </div>
              <div className="grid grid-cols-2 gap-2 p-4">
                {item.children.map((child) => (
                  <DropdownMenuItem key={child.href} asChild>
                    <Link
                      href={child.href}
                      className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-foreground/80 hover:bg-muted/60 focus:bg-muted/60"
                    >
                      <div className="h-9 w-9 rounded-xl bg-[#f6f7fb] flex items-center justify-center">
                        <Icon
                          name={
                            child.label === "Cybersecurity"
                              ? "shield"
                              : child.label === "SAP"
                                ? "briefcase"
                                : child.label === "Salesforce"
                                  ? "users"
                                  : child.label === "ServiceNow"
                                    ? "settings"
                                    : "code"
                          }
                          size={18}
                          className="text-primary"
                        />
                      </div>
                      <span className="leading-snug">{child.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </div>
            </div>
          ) : (
            item.children.map((child) => (
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
            ))
          )}
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
