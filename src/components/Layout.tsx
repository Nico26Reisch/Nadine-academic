import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Linkedin, Mail } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Research", path: "/research" },
  { label: "About Me", path: "/about" },
  { label: "Get in Touch", path: "/contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="bg-foreground text-background text-[10px] sm:text-xs py-1.5 px-3 sm:px-4 md:px-6">
        <div className="container mx-auto flex flex-wrap items-center justify-center md:justify-end gap-x-3 sm:gap-x-5 gap-y-1">
          <a href="mailto:planken@essb.eur.nl" className="flex items-center gap-1 sm:gap-1.5 hover:opacity-75 transition-opacity">
            <Mail size={11} className="shrink-0" /> <span>planken@essb.eur.nl</span>
          </a>
          <a href="https://www.linkedin.com/in/nadine-planken" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 sm:gap-1.5 hover:opacity-75 transition-opacity">
            <Linkedin size={11} className="shrink-0" /> LinkedIn
          </a>
        </div>
      </div>
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link to="/" className="font-heading text-xl font-semibold tracking-tight text-foreground">
            Nadine Planken
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-foreground ${
                    location.pathname === item.path
                      ? "text-foreground border-b border-foreground pb-0.5"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background animate-fade-in">
            <ul className="flex flex-col py-4 px-6 gap-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                      location.pathname === item.path
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nadine Planken. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/imprint" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Imprint
            </Link>
            <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
