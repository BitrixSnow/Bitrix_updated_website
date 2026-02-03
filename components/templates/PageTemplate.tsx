import React from "react"
import { Header, Footer } from "@/components/organisms";

interface PageTemplateProps {
  children: React.ReactNode;
}

export function PageTemplate({ children }: PageTemplateProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
