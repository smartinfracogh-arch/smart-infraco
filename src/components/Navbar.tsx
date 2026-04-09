import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const solutions = [
  { label: "Connectivity Solutions", href: "/connectivity" },
  { label: "Data Centres", href: "/data-centres" },
  { label: "Cloud Solutions", href: "/cloud-services" },
  { label: "Cybersecurity", href: "/cybersecurity" },
];

const customerServiceLinks = [
  { label: "Report an Issue", href: "/customer-service" },
  { label: "Request a Quote", href: "/contact" },
];

const resourceLinks = [
  { label: "Downloads", href: "/resources" },
  { label: "FAQs", href: "/resources" },
];

const mediaLinks = [
  { label: "News", href: "/media" },
  { label: "Videos", href: "/media" },
];

type DropdownKey = "solutions" | "customerService" | "resources" | "media";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "#", dropdownKey: "solutions" as DropdownKey, children: solutions },
  { label: "Customer Service", href: "#", dropdownKey: "customerService" as DropdownKey, children: customerServiceLinks },
  { label: "Resources", href: "#", dropdownKey: "resources" as DropdownKey, children: resourceLinks },
  { label: "Media", href: "#", dropdownKey: "media" as DropdownKey, children: mediaLinks },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 lg:h-20 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Smart Infraco" className="h-56" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.dropdownKey!)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg">
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {openDropdown === link.dropdownKey && (
                  <div className="absolute top-full left-0 w-64 bg-card rounded-xl shadow-xl border border-border p-3 mt-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === link.href
                    ? "text-primary bg-primary/5"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact">
            <Button variant="default" size="default">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="flex flex-col">
                  <span className="px-4 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    {link.label}
                  </span>
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className="px-6 py-2 text-sm text-foreground/80 hover:text-primary"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link to="/contact" className="mt-3" onClick={() => setMobileOpen(false)}>
              <Button variant="default" className="w-full">
                Contact Us
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
