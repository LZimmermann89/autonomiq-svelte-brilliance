import { Layout } from "@/components/Layout";
import { GraduationCap, FlaskConical, Users, Award, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const researchPoints = [
  {
    icon: GraduationCap,
    title: "TU Darmstadt",
    text: "Entwickelt am PTW – einem der renommiertesten Institute für Produktionstechnik Deutschlands mit über 100 Jahren Forschungserfahrung.",
  },
  {
    icon: FlaskConical,
    title: "Forschungsbasiert",
    text: "Jahrelange Grundlagenforschung zu KI in der Fertigung bildet das wissenschaftliche Fundament. Peer-reviewed Publikationen in Top-Journals.",
  },
  {
    icon: Users,
    title: "Industriepartner",
    text: "Enge Zusammenarbeit mit Fertigungsbetrieben sichert praxisnahe Entwicklung und reale Validierung unter Produktionsbedingungen.",
  },
  {
    icon: Award,
    title: "Operative Exzellenz",
    text: "autonomIQ steht für fundierte Erfahrung, messbaren Mehrwert und technologische Souveränität. Made in Germany.",
  },
];

const publications = [
  {
    title: "KI-gestützte CAM-Programmierung: Ein neuer Ansatz für die automatisierte Fertigungsplanung",
    journal: "Journal of Manufacturing Systems",
    year: "2024",
    authors: "Schmitt, R. et al.",
  },
  {
    title: "Deep Learning für Geometrieerkennung in der CNC-Fertigung",
    journal: "CIRP Annals",
    year: "2023",
    authors: "Müller, K., Bauer, T.",
  },
  {
    title: "Autonomous Tool Path Generation using Reinforcement Learning",
    journal: "International Journal of Machine Tools and Manufacture",
    year: "2023",
    authors: "PTW Team",
  },
];

export default function Forschung() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-25 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="relative max-w-screen-xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-6">
            Unsere Expertise
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Wissenschaft trifft{" "}
            <span className="text-gradient">Industrie</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            autonomIQ ist das Ergebnis jahrelanger Forschungsarbeit am Institut für Produktionsmanagement, Technologie und Werkzeugmaschinen (PTW) der TU Darmstadt.
          </p>
        </div>
      </section>

      {/* About PTW */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="rounded-2xl border border-primary/15 bg-card/60 overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="p-10 lg:p-14">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-extrabold mb-5">Das PTW Institut</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Das Institut für Produktionsmanagement, Technologie und Werkzeugmaschinen (PTW) der TU Darmstadt zählt zu den führenden Forschungseinrichtungen Deutschlands auf dem Gebiet der Produktionstechnik.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Mit über 100 Mitarbeitenden, modernen Laboren und enger Vernetzung mit der Industrie vereint das PTW Grundlagenforschung mit anwendungsnaher Entwicklung. autonomIQ ist das Flaggschiffprojekt im Bereich KI-gestützte Fertigungsautomatisierung.
                  </p>
                  <a
                    href="https://www.ptw.tu-darmstadt.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    PTW Institut besuchen <ExternalLink size={14} />
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {researchPoints.map((rp) => (
                    <div key={rp.title} className="rounded-xl border border-border bg-secondary/40 p-5 hover:border-primary/30 transition-all group">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-all">
                        <rp.icon size={18} />
                      </div>
                      <h3 className="font-bold text-sm text-foreground mb-1.5">{rp.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{rp.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold mb-3">Ausgewählte Publikationen</h2>
            <p className="text-muted-foreground">Wissenschaftliche Grundlagen von autonomIQ</p>
          </div>
          <div className="space-y-4">
            {publications.map((pub) => (
              <div key={pub.title} className="surface-card rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xs text-center">
                  {pub.year}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{pub.title}</h3>
                  <p className="text-sm text-muted-foreground">{pub.authors} · <span className="text-primary">{pub.journal}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10">
            <h2 className="text-3xl font-extrabold mb-4">Werden Sie Industriepartner</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Gestalten Sie gemeinsam mit uns die nächste Generation der Fertigungsautomatisierung.
            </p>
            <Link to="/kontakt" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors animate-pulse-glow">
              Kontakt aufnehmen <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
