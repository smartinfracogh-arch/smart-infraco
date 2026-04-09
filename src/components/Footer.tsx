import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  services: [
    { label: "Connectivity Solutions", href: "/connectivity" },
    { label: "Data Centres", href: "/data-centres" },
    { label: "Cloud Solutions", href: "/cloud-services" },
    { label: "Cybersecurity", href: "/cybersecurity" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "Media & News", href: "/media" },
    { label: "Contact", href: "/contact" },
  ],
  support: [
    { label: "Customer Service", href: "/customer-service" },
    { label: "Request a Quote", href: "/contact" },
    { label: "Resources & Downloads", href: "/resources" },
    { label: "FAQs", href: "/resources" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-card text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Smart Infraco" className="h-56" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              A leading provider of innovative technology solutions, specialising in Cloud Services, Data Centre Solutions, Connectivity Solutions, and Cybersecurity Services.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                info@smartinfraco.com
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                +233 27 482 2222
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                Marina Mall Building, 6th Floor, Airport City, Accra, Ghana
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              {footerLinks.support.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Smart Infraco Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
