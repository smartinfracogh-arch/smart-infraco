import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">SI</span>
              </div>
              <span className="text-lg font-bold text-secondary-foreground">
                Smart Infraco
              </span>
            </div>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed">
              Powering Ghana's digital backbone with secure, scalable, and carrier-grade national infrastructure.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground/80 mb-4">
              Solutions
            </h4>
            <ul className="space-y-2">
              {["Fibre Connectivity", "Data Centres", "Cloud Services", "Managed IT", "Dedicated Internet"].map((item) => (
                <li key={item}>
                  <Link to="/connectivity" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground/80 mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Industries", href: "/industries" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground/80 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/60">
                <Mail className="w-4 h-4 text-primary" />
                info@smartinfraco.com
              </li>
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/60">
                <Phone className="w-4 h-4 text-primary" />
                +233 (0) 302 000 000
              </li>
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/60">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                Accra, Ghana
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-foreground/40">
            © {new Date().getFullYear()} Smart Infraco. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-secondary-foreground/40 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-secondary-foreground/40 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
