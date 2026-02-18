import { GraduationCap, FlaskConical, Users, Award } from "lucide-react";

const researchPoints = [
  {
    icon: GraduationCap,
    title: "TU Darmstadt",
    text: "Entwickelt am PTW – einem der renommiertesten Institute für Produktionstechnik Deutschlands.",
  },
  {
    icon: FlaskConical,
    title: "Forschungsbasiert",
    text: "Jahrelange Grundlagenforschung zu KI in der Fertigung bildet das wissenschaftliche Fundament.",
  },
  {
    icon: Users,
    title: "Industriepartner",
    text: "Enge Zusammenarbeit mit Fertigungsbetrieben sichert praxisnahe Entwicklung und reale Validierung.",
  },
  {
    icon: Award,
    title: "Operative Exzellenz",
    text: "autonomIQ steht für fundierte Erfahrung, messbaren Mehrwert und technologische Souveränität.",
  },
];

export function ResearchSection() {
  return (
    <section id="forschung" className="py-24 relative bg-gradient-to-b from-transparent via-secondary/20 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl border border-primary/15 bg-card/60 backdrop-blur-sm overflow-hidden">
          {/* Top accent */}
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

          <div className="p-10 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-6">
                  <span className="text-xs font-medium tracking-widest uppercase text-primary">
                    Unsere Expertise
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                  Wissenschaft trifft{" "}
                  <span className="text-gradient">Industrie</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  autonomIQ ist das Ergebnis jahrelanger Forschungsarbeit am{" "}
                  <strong className="text-foreground">
                    Institut für Produktionsmanagement, Technologie und Werkzeugmaschinen (PTW)
                  </strong>{" "}
                  der TU Darmstadt.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Unsere Mission: Die CAM-Programmierung so weit zu automatisieren, dass Unternehmen
                  aller Größen von intelligenter Fertigung profitieren können – ohne spezialisiertes
                  CAM-Know-how voraussetzen zu müssen.
                </p>
              </div>

              {/* Right: cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {researchPoints.map((rp) => (
                  <div
                    key={rp.title}
                    className="rounded-lg border border-border bg-secondary/40 p-5 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-all">
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
  );
}
