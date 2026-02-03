import Link from "next/link";
import { Logo, Container, Icon } from "@/components/atoms";
import { siteConfig } from "@/lib/config/site";

const footerLinks = {
  services: [
    { label: "IT Service Management", href: "/services/itsm" },
    { label: "Business Workflows", href: "/services/workflows" },
    { label: "Customer Service", href: "/services/customer-service" },
    { label: "HR Service Delivery", href: "/services/hr" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
  solutions: [
    { label: "Healthcare", href: "/solutions/healthcare" },
    { label: "Financial Services", href: "/solutions/financial" },
    { label: "Manufacturing", href: "/solutions/manufacturing" },
    { label: "Government", href: "/solutions/government" },
  ],
  contact: [
    { label: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}`, icon: "mail" },
    { label: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}`, icon: "phone" },
    { label: siteConfig.contact.address, href: "#", icon: "map-pin" },
  ],
};

const socialLinks = [
  { icon: "twitter", href: siteConfig.links.twitter, label: "Twitter" },
  { icon: "linkedin", href: siteConfig.links.linkedin, label: "LinkedIn" },
  { icon: "facebook", href: siteConfig.links.facebook, label: "Facebook" },
  { icon: "instagram", href: siteConfig.links.instagram, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-foreground">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" className="mb-4" />
            <p className="text-sm text-footer-foreground/70 mb-6">
              We are a ServiceNow implementation partner dedicated to transforming businesses through innovative IT solutions.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-footer-foreground/60 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <Icon name={social.icon} size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-footer-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-footer-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-footer-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-start gap-2 text-sm text-footer-foreground/70 hover:text-primary transition-colors"
                  >
                    <Icon name={link.icon} size={16} className="mt-0.5 shrink-0" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-footer-foreground/60">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-footer-foreground/60 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-footer-foreground/60 hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
