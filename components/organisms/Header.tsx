"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo, Container, Icon } from "@/components/atoms";
import { NavLink } from "@/components/molecules";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigation } from "@/lib/config/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileSheetId = "mobile-nav-sheet";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild className="bg-black/100">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Book a Meeting</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger
            asChild
            className="md:hidden"
            aria-controls={mobileSheetId}
          >
            <Button variant="ghost" size="icon">
              <Icon name="menu" size={24} />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            id={mobileSheetId}
            side="right"
            className="w-[300px] sm:w-[400px]"
          >
            <nav className="flex flex-col gap-4 mt-8">
              {navigation.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button asChild className="mt-4">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
