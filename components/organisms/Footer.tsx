import Link from "next/link";
import { Logo, Container, Icon } from "@/components/atoms";
import { siteConfig } from "@/lib/config/site";

const footerLinks = {
  services: [
    // { label: "IT Service Management", href: "/services/itsm" },
    // { label: "Business Workflows", href: "/services/workflows" },
    // { label: "Customer Service", href: "/services/customer-service" },
    // { label: "HR Service Delivery", href: "/services/hr" },
    { label: "IT Workflows", href: "/services/consulting" },
    { label: "Service Now", href: "/services/consulting" },
    { label: "Creator Workflows", href: "/services/consulting" },
    { label: "Customer Workflows", href: "/services/consulting" },
    { label: "Product Engineering", href: "/services/consulting" },
    { label: "Employee Workflows", href: "/services/consulting" },
    { label: "Digital Transformation", href: "/services/consulting" },
  ],
  company: [
    { label: "Blog", href: "/blog" },
    { label: "Career", href: "/careers" },
    { label: "About us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Contact us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
  solutions: [
    { label: "Healthcare", href: "/solutions/healthcare" },
    { label: "Financial Services", href: "/solutions/financial" },
    { label: "Manufacturing", href: "/solutions/manufacturing" },
    { label: "Government", href: "/solutions/government" },
  ],
  contact: [
    { label: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}`, icon: "phone" },
    { label: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}`, icon: "mail" },
    // { label: siteConfig.contact.address, href: "#", icon: "map-pin" },
  ],
};

const socialLinks = [
  { icon: "twitter", href: siteConfig.links.twitter, label: "X" },
  { icon: "instagram", href: siteConfig.links.instagram, label: "Instagram" },
  { icon: "facebook", href: siteConfig.links.facebook, label: "Facebook" },
  { icon: "linkedin", href: siteConfig.links.linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-foreground">
      <Container className="py-12 lg:py-16 max-w-none px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:flex lg:items-start lg:justify-between gap-10 lg:gap-16">
          {/* Brand */}
          <div className="max-w-xl">
            <Logo variant="light" className="mb-4" />
            <p className="text-sm text-footer-foreground/70 mb-6 leading-relaxed">
              Bitrix Innovations Pvt Ltd is a ServiceNow implementation company
              which combines transformation capabilities with a customer-centric
              approach. We provide end-to-end solutions across ServiceNow ITSM
              Process, ServiceNow implementation, consulting, software development,
              and support. We design empirical processes that help customers reduce
              operating costs and unlock productivity.
            </p>
            {/* <div className="flex items-center gap-4">
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
            </div> */}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-16">
            {/* Services */}
            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={`${link.href}-${link.label}`}>
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

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-white mb-4">Contact us</h3>
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

              <div className="flex items-center gap-4 mt-6">
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
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-footer-foreground/60">
            (c) {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
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



