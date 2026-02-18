import { Layout } from "@/components/Layout";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Erkut Sarikaya",
    role: "Geschäftsführer / CEO",
    img: "https://autonomiq.de/wp-content/uploads/2025/12/erkut-sarikaya-600x450-1.jpg",
    email: "e.sarikaya@autonomiq.de",
    linkedin: "https://www.linkedin.com/in/erkut-sarikaya/",
  },
  {
    name: "Dr.-Ing. Felix Hoffmann",
    role: "Operative Leitung / COO",
    img: "https://autonomiq.de/wp-content/uploads/2025/12/Felix-Hoffmann-600x450-1.jpg",
    email: "f.hoffmann@autonomiq.de",
    linkedin: "https://www.linkedin.com/in/dr-felix-hoffmann/",
  },
  {
    name: "Eduardo Reis",
    role: "Softwareentwicklung / Künstliche Intelligenz",
    img: "https://autonomiq.de/wp-content/uploads/2025/12/Eduardo-Reis-600x450-1.jpg",
    email: null,
    linkedin: "https://www.linkedin.com/company/autonomiq-gmbh/",
  },
  {
    name: "Julius Frenzel",
    role: "Softwareentwicklung / Prozessmodellierung",
    img: "https://autonomiq.de/wp-content/uploads/2025/12/Julius-Frenzel-600x450-1.jpg",
    email: null,
    linkedin: "https://www.linkedin.com/company/autonomiq-gmbh/",
  },
  {
    name: "Young-Min Kong",
    role: "Softwareentwicklung / Bahnplanung",
    img: "https://autonomiq.de/wp-content/uploads/2025/12/Young-Min-Kong-600x450-1.jpg",
    email: null,
    linkedin: "https://www.linkedin.com/in/young-min-kong-1a4722206/",
  },
  {
    name: "Erik Ebert",
    role: "Softwareentwicklung / Bahnplanung",
    img: "https://autonomiq.de/wp-content/uploads/2025/12/Erik-Ebert-600x450-1.jpg",
    email: null,
    linkedin: "https://www.linkedin.com/in/erik-ebert-448467336/",
  },
];

const expertiseAreas = [
  { label: "Zerspanungstechnologie", color: "bg-fb-blue-900/60 border-fb-blue-700/50 text-fb-blue-300" },
  { label: "Informatik", color: "bg-violet-900/60 border-violet-700/50 text-violet-300" },
  { label: "KI-Entwicklung", color: "bg-emerald-900/60 border-emerald-700/50 text-emerald-300" },
  { label: "Produktionsmanagement", color: "bg-amber-900/60 border-amber-700/50 text-amber-300" },
  { label: "Werkzeugmaschinen", color: "bg-rose-900/60 border-rose-700/50 text-rose-300" },
  { label: "Datenbasierte Optimierung", color: "bg-teal-900/60 border-teal-700/50 text-teal-300" },
];

export default function UeberUns() {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative py-20 px-6 overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            TU Darmstadt · PTW Institut
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
            Unser <span className="text-gradient">Team</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Wir sind ein junges Team, das aus gemeinsamen Arbeiten zur digitalen Verbesserung von Prozessen
            in der zerspanenden Fertigung an der Technischen Universität Darmstadt hervorgegangen ist.
            Mit unserer jahrelangen Erfahrung aus dem Bereich Werkzeugmaschinen und datenbasierter
            Optimierung arbeiten wir daran, unsere Erkenntnisse aus der Forschung in die industrielle
            Praxis zu überführen.
          </p>

          {/* Expertise tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {expertiseAreas.map((area) => (
              <span
                key={area.label}
                className={`inline-flex items-center rounded-full border px-3.5 py-1 text-xs font-medium ${area.color}`}
              >
                {area.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission Statement ── */}
      <section className="py-16 px-6 bg-card/30 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Unsere Mission",
                text: "Erkenntnisse aus der Forschung in die industrielle Praxis zu überführen und die Wettbewerbsfähigkeit unserer Partner durch innovative Lösungen zu stärken.",
                icon: "🎯",
              },
              {
                title: "Unser Ursprung",
                text: "Entstanden aus gemeinsamen Forschungsarbeiten am Institut für Produktionsmanagement, Technologie und Werkzeugmaschinen (PTW) der TU Darmstadt.",
                icon: "🏛️",
              },
              {
                title: "Unser Ansatz",
                text: "Wir vereinen Expertise aus Zerspanungstechnologie, Informatik, KI-Entwicklung und Produktionsmanagement in einem interdisziplinären Team.",
                icon: "🤝",
              },
            ].map((item) => (
              <div key={item.title} className="surface-card rounded-xl p-7">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Grid ── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Die Menschen hinter autonomIQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">Lernen Sie uns kennen</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="group surface-card rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Photo */}
                <div className="relative overflow-hidden aspect-[4/3] bg-muted">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-bold text-foreground text-base mb-1">{member.name}</h3>
                  <p className="text-xs text-primary font-medium mb-4 leading-snug">{member.role}</p>

                  {/* Links */}
                  <div className="flex items-center gap-2">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                        aria-label={`E-Mail an ${member.name}`}
                      >
                        <Mail size={14} />
                      </a>
                    )}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted border border-border text-muted-foreground hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-all"
                      aria-label={`LinkedIn von ${member.name}`}
                    >
                      <Linkedin size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TU Darmstadt / PTW Callout ── */}
      <section className="py-16 px-6 bg-card/30 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="surface-card rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-5">
                🏛️ Forschungspartner
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Institut für Produktionsmanagement,<br />Technologie und Werkzeugmaschinen
              </h2>
              <p className="text-muted-foreground mb-2 text-base">
                <strong className="text-foreground">TU Darmstadt · PTW</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
                autonomIQ ist aus jahrelanger Forschungsarbeit am PTW-Institut hervorgegangen.
                Die enge Verbindung zur Wissenschaft sichert den technologischen Vorsprung unserer Lösung.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-xs">
                {["Otto-Berndt-Straße 2", "64287 Darmstadt", "Deutschland"].map((item) => (
                  <span key={item} className="px-3 py-1.5 rounded-lg bg-muted border border-border text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
