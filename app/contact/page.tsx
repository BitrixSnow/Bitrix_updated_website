import type { Metadata } from "next";
import { PageTemplate } from "@/components/templates";
import { ContactSection } from "@/components/organisms";
import { Container, Icon } from "@/components/atoms";
import { siteConfig } from "@/lib/config/site";
import { generateBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with BITRIX. Contact us for ServiceNow implementation, consulting, and support services.",
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description: "Get in touch with BITRIX for ServiceNow services.",
    url: `${siteConfig.url}/contact`,
  },
};

const contactInfo = [
  {
    title: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    icon: "mail",
  },
  {
    title: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone}`,
    icon: "phone",
  },
  {
    title: "Address",
    value: siteConfig.contact.address,
    href: "#",
    icon: "map-pin",
  },
];

export default function ContactPage() {
  return (
    <PageTemplate>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Contact", url: `${siteConfig.url}/contact` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our services? Ready to start your digital transformation journey?
            We'd love to hear from you.
          </p>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info) => (
              <Card key={info.title}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={info.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <a
                    href={info.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Form */}
      <ContactSection className="bg-muted/30" />

      {/* Map placeholder */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="bg-muted rounded-lg aspect-[16/6] flex items-center justify-center">
            <div className="text-center">
              <Icon name="map-pin" size={48} className="text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">Map integration placeholder</p>
            </div>
          </div>
        </Container>
      </section>
    </PageTemplate>
  );
}
