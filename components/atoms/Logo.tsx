import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-1", className)}>
      {/* <span className="text-primary font-bold text-2xl">:</span> */}
      <img  
        src="/logo-1.svg"
        alt="Logo"
        className="h-8 w-8"
      />
      <span
        className={cn(
          "font-bold text-2xl tracking-tight",
          variant === "light" ? "text-white" : "text-foreground"
        )}
      >
        BIT
      </span>
      <span className="text-primary font-bold text-2xl">R</span>
      <span
        className={cn(
          "font-bold text-2xl tracking-tight",
          variant === "light" ? "text-white" : "text-foreground"
        )}
      >
        IX
      </span>
    </Link>
  );
}
