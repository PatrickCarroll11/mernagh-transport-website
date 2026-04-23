import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 flex items-center justify-between py-2.5">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/80 hidden sm:block">
            Kilkenny Haulage — On Time, Every Time
          </p>
          <a
            href="tel:0868366151"
            className="flex items-center gap-2 text-sm font-semibold text-primary-foreground hover:text-accent transition-colors duration-200 ml-auto sm:ml-0"
          >
            <Phone className="h-4 w-4" />
            086 836 6151
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Brand mark */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={logo}
              alt="Paul Mernagh Transport"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 pb-1 ${
                  isActive(link.href)
                    ? "text-accent border-b-2 border-accent"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              className="bg-accent text-accent-foreground px-7 py-3.5 font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-200"
            >
              <a href="tel:0868366151">
                <Phone className="h-4 w-4 mr-2 shrink-0" />
                Get a Quote
              </a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl text-foreground hover:bg-muted transition-colors duration-200"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border shadow-lg">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-semibold px-4 py-3.5 rounded-xl transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-accent bg-accent/10 border-l-4 border-accent"
                    : "text-foreground hover:text-accent hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-5 pb-1">
              <Button
                asChild
                className="w-full bg-accent text-accent-foreground px-6 py-4 font-bold rounded-xl shadow-lg hover:opacity-90 transition-opacity duration-200"
              >
                <a href="tel:0868366151" onClick={() => setMobileOpen(false)}>
                  <Phone className="h-4 w-4 mr-2 shrink-0" />
                  086 836 6151
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}