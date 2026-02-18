import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Technologie", href: "/technologie" },
  { label: "Vorteile", href: "/vorteile" },
  { label: "Anwendung", href: "/anwendung" },
  { label: "Forschung", href: "/forschung" },
  { label: "Kontakt", href: "/kontakt" },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="#ffffff" strokeWidth="1.5" fill="none"/>
          <circle cx="8" cy="8" r="2.5" fill="#ffffff"/>
        </svg>
      </span>
      <span className="font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
        autono<span className="text-primary">IQ</span>
      </span>
    </Link>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => {
              const active = location.pathname === l.href;
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Pilotanwender werden
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menü"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-md px-4 py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((l) => {
                const active = location.pathname === l.href;
                return (
                  <li key={l.href}>
                    <Link
                      to={l.href}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        active
                          ? "bg-primary/15 text-primary"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                      <ChevronRight size={14} className="opacity-40" />
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2 border-t border-border mt-2">
                <Link
                  to="/kontakt"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold"
                  onClick={() => setOpen(false)}
                >
                  Pilotanwender werden
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* ── Breadcrumb (für Unterseiten) ── */}
      {location.pathname !== "/" && (
        <div className="border-b border-border bg-secondary/20">
          <div className="max-w-screen-xl mx-auto px-4 py-2.5 flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} className="opacity-40" />
            <span className="text-foreground font-medium">
              {navLinks.find((l) => l.href === location.pathname)?.label ?? "Seite"}
            </span>
          </div>
        </div>
      )}

      {/* ── Page content ── */}
      <main className="flex-1">{children}</main>

      {/* ── Footer ── */}
      <footer className="border-t border-border bg-card/40">
        <div className="max-w-screen-xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <Logo />
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
                Intelligente CAM-Software für die CNC-Fertigung. Entwickelt am PTW Institut der TU Darmstadt.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Navigation</h4>
              <ul className="space-y-2">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link to={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Rechtliches</h4>
              <ul className="space-y-2">
                <li><Link to="/impressum" className="text-sm text-muted-foreground hover:text-primary transition-colors">Impressum</Link></li>
                <li><Link to="/datenschutz" className="text-sm text-muted-foreground hover:text-primary transition-colors">Datenschutzerklärung</Link></li>
              </ul>
              <div className="mt-5 space-y-1">
                <p className="text-xs text-muted-foreground">Otto-Berndt-Straße 2, 64287 Darmstadt</p>
                <a href="mailto:info@autonomiq.de" className="text-xs text-primary hover:underline block">info@autonomiq.de</a>
                <a href="tel:+4961518229758" className="text-xs text-muted-foreground hover:text-primary transition-colors block">+49 6151 8229-758</a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border/50">
          <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} autonomIQ · TU Darmstadt PTW. Alle Rechte vorbehalten.</p>
            <p>Haftungshinweis: Keine Haftung für externe Links.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
