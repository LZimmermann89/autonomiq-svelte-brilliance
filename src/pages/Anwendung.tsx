import { Layout } from "@/components/Layout";
import { ArrowRight, Upload, ScanLine, Settings, FileCode } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    step: "01",
    icon: Upload,
    title: "CAD-Modell importieren",
    description:
      "Laden Sie Ihr 3D-CAD-Modell in autonomIQ. Das System unterstützt alle gängigen Formate: STEP, IGES, STL, Parasolid und native Formate führender CAD-Systeme wie CATIA, SolidWorks, NX und Creo.",
    detail: "Unterstützte Formate: STEP · IGES · STL · Parasolid · CATIA · SolidWorks · NX · Creo",
  },
  {
    step: "02",
    icon: ScanLine,
    title: "KI analysiert Geometrie",
    description:
      "Die KI erkennt automatisch alle relevanten Geometriemerkmale – Flächen, Bohrungen, Taschen, Konturen und Freiformflächen. Jedes Feature wird klassifiziert, toleriert und für die Bearbeitung priorisiert.",
    detail: "Erkennungsrate: >98% bei Standardgeometrien, lernfähig für Spezialgeometrien",
  },
  {
    step: "03",
    icon: Settings,
    title: "Strategie & Werkzeuge werden gewählt",
    description:
      "Basierend auf Material, Toleranzen und Ihrer Werkzeugdatenbank entwickelt autonomIQ optimale Bearbeitungsstrategien. Schnittstiefen, Vorschübe und Werkzeugpfade werden vollautomatisch berechnet.",
    detail: "Kompatibel mit Werkzeugdatenbanken aller führenden Hersteller",
  },
  {
    step: "04",
    icon: FileCode,
    title: "NC-Code wird generiert",
    description:
      "Maschinenspezifischer, kollisionsgeprüfter NC-Code wird automatisch erstellt und ist sofort für Ihre CNC-Maschine einsatzbereit. Postprozessoren für Siemens, Fanuc und Heidenhain inklusive.",
    detail: "Export-Formate: ISO 6983 · Siemens SINUMERIK · Fanuc · Heidenhain iTNC",
  },
];

const useCases = [
  {
    industry: "Präzisionstechnik",
    example: "Komplexe Dreh- und Frästeile mit engen Toleranzen",
    benefit: "Programmierzeit von 6h auf 12min reduziert",
  },
  {
    industry: "Formenbau",
    example: "Freiformflächen, Elektroden, Kavitäten",
    benefit: "Konsistente Oberflächenqualität Ra < 0,8 µm",
  },
  {
    industry: "Lohnfertigung",
    example: "Variantenreiche Kleinserien, Losgröße 1",
    benefit: "3× höherer Durchsatz bei gleicher Belegschaft",
  },
];

export default function Anwendung() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="relative max-w-screen-xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-6">
            Workflow
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Von CAD zu <span className="text-gradient">NC-Code</span>{" "}
            in vier Schritten
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Vollautomatisch. Ohne manuelle Eingriffe. Ohne CAM-Expertise erforderlich.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="space-y-6">
            {steps.map((s, i) => (
              <div key={s.step} className="surface-card rounded-xl p-8 flex flex-col lg:flex-row gap-8 group hover:border-glow transition-all duration-300">
                {/* Step number */}
                <div className="flex-shrink-0 flex lg:flex-col items-center lg:items-start gap-4">
                  <div className="w-16 h-16 rounded-xl border border-primary/30 bg-primary/8 flex items-center justify-center group-hover:border-primary/60 group-hover:bg-primary/15 transition-all">
                    <span className="text-2xl font-extrabold text-gradient mono">{s.step}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block w-px flex-1 bg-gradient-to-b from-primary/30 to-transparent mt-2 min-h-[2rem]" />
                  )}
                </div>
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <s.icon size={16} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{s.description}</p>
                  <div className="text-xs text-primary/70 bg-primary/5 border border-primary/15 rounded-lg px-4 py-2.5 font-medium">
                    {s.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold mb-3">Anwendungsbranchen</h2>
            <p className="text-muted-foreground">autonomIQ in der Praxis</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {useCases.map((uc) => (
              <div key={uc.industry} className="rounded-xl border border-border bg-card/60 p-6 hover:border-primary/30 transition-all">
                <h3 className="font-bold text-foreground mb-2">{uc.industry}</h3>
                <p className="text-sm text-muted-foreground mb-4">{uc.example}</p>
                <div className="text-sm font-semibold text-primary">{uc.benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10">
            <h2 className="text-3xl font-extrabold mb-4">Testen Sie autonomIQ in Ihrer Fertigung</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Als Pilotanwender erhalten Sie frühzeitigen Zugang und enge Begleitung durch unser Forschungsteam.
            </p>
            <Link to="/kontakt" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors animate-pulse-glow">
              Pilotprogramm anfragen <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
