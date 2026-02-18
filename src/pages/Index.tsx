import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import heroCNC from "@/assets/hero-cnc.jpg";
import { ArrowRight, Cpu, Zap, BarChart3, FlaskConical, Users, Mail } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "KI-gestützte Geometrieerkennung",
    desc: "Automatische Analyse von 3D-CAD-Modellen und Identifikation aller Fertigungsmerkmale.",
    href: "/technologie",
  },
  {
    icon: Zap,
    title: "Automatische NC-Code-Generierung",
    desc: "Direkte Ausgabe optimierter NC-Programme für Ihre CNC-Maschinen ohne manuelle Programmierung.",
    href: "/technologie",
  },
  {
    icon: BarChart3,
    title: "Messbare Vorteile",
    desc: "Signifikante Reduktion der Programmierzeit und Steigerung der Effizienz in der Fertigung.",
    href: "/vorteile",
  },
  {
    icon: FlaskConical,
    title: "Forschungsbasiert",
    desc: "Entwickelt am PTW Institut der TU Darmstadt – fundiert durch jahrelange Forschung.",
    href: "/forschung",
  },
];

const navCards = [
  { label: "Technologie", desc: "KI-Architektur, CAD-Analyse, NC-Generierung", href: "/technologie", color: "from-fb-blue-900/50 to-fb-blue-800/20" },
  { label: "Vorteile", desc: "Effizienzgewinne, Vergleich & Kennzahlen", href: "/vorteile", color: "from-violet-900/50 to-violet-800/20" },
  { label: "Anwendung", desc: "Workflow vom CAD bis zum NC-Code", href: "/anwendung", color: "from-emerald-900/50 to-emerald-800/20" },
  { label: "Forschung", desc: "Publikationen & TU Darmstadt PTW", href: "/forschung", color: "from-amber-900/50 to-amber-800/20" },
  { label: "Über uns", desc: "Unser Team & Hintergrund", href: "/ueber-uns", color: "from-rose-900/50 to-rose-800/20" },
  { label: "Kontakt", desc: "Pilotanwender werden", href: "/kontakt", color: "from-teal-900/50 to-teal-800/20" },
];

export default function Index() {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* BG image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroCNC}
            alt="CNC Maschine mit KI-gesteuerter Bahnplanung"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </div>
        <div className="absolute inset-0 z-0 grid-bg opacity-50" />

        {/* Scan line */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-full h-0.5 opacity-0"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.4), transparent)",
              animation: "scan-line 8s ease-in-out infinite",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium tracking-widest uppercase text-primary">
                TU Darmstadt · PTW Institut
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up delay-100 mb-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
              Intelligente{" "}
              <span className="text-gradient">CAM-Software</span>
              <br />
              für die{" "}
              <span className="text-gradient-accent glow-text">CNC-Fertigung</span>
            </h1>

            <p className="animate-fade-in-up delay-200 mb-10 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              autonomIQ automatisiert Ihre Fertigung auf einem neuen Niveau. Unsere KI analysiert
              3D-CAD-Modelle, wählt eigenständig Werkzeuge, berechnet optimale Werkzeugwege und
              generiert direkt den NC-Code für Ihre CNC-Maschinen – ohne manuelle Programmierung.
            </p>

            <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-all animate-pulse-glow"
              >
                Pilotanwender werden
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/technologie"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border text-foreground font-medium text-base hover:border-primary/60 hover:text-primary transition-all"
              >
                Technologie entdecken
              </Link>
            </div>

            {/* Stats */}
            <div className="animate-fade-in delay-500 mt-16 flex flex-wrap gap-8 pt-8 border-t border-border/40">
              {[
                { value: "100%", label: "Automatische NC-Code-Generierung" },
                { value: "KI-gestützt", label: "Geometrieerkennung & Strategie" },
                { value: "TU Darmstadt", label: "Forschungsinstitut PTW" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-2xl font-bold text-primary">{stat.value}</span>
                  <span className="text-xs text-muted-foreground max-w-[140px] leading-snug">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* ── Was ist autonomIQ? ── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3">Überblick</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Was ist autonomIQ?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Eine KI-gestützte Plattform, die den gesamten Prozess von der CAD-Datei bis zum fertig programmierten NC-Code automatisiert –
              entwickelt am Institut für Produktionsmanagement, Technologie und Werkzeugmaschinen (PTW) der TU Darmstadt.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <Link
                key={f.title}
                to={f.href}
                className="group surface-card rounded-xl p-6 hover:border-primary/40 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon size={18} />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm leading-snug">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Mehr erfahren <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Navigation Cards ── */}
      <section className="py-20 px-6 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mx-auto text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3">Navigation</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Erkunden Sie autonomIQ</h2>
            <p className="text-muted-foreground">Alle Informationen zu unserer Lösung auf einen Blick.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {navCards.map((card) => (
              <Link
                key={card.href}
                to={card.href}
                className={`group relative rounded-xl border border-border overflow-hidden bg-gradient-to-br ${card.color} p-7 hover:border-primary/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl`}
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{card.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0">
                  <ArrowRight size={18} className="text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="surface-card rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Jetzt Pilotanwender werden
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Bereit, Ihre Fertigung zu automatisieren?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Werden Sie einer unserer ersten Pilotanwender und gestalten Sie die Zukunft der CNC-Fertigung mit.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all animate-pulse-glow"
                >
                  <Mail size={16} />
                  Kontakt aufnehmen
                </Link>
                <Link
                  to="/ueber-uns"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border text-foreground font-medium hover:border-primary/60 hover:text-primary transition-all"
                >
                  <Users size={16} />
                  Unser Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
