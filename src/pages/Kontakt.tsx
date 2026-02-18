import { Layout } from "@/components/Layout";
import { ContactSection } from "@/components/ContactSection";

export default function Kontakt() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-16 pb-4 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="relative max-w-screen-xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-6">
            Pilotprogramm
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Werden Sie{" "}
            <span className="text-gradient">Pilotanwender</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Fertigungsbetrieb und Interesse an autonomIQ? Wir suchen Industriepartner, die gemeinsam mit uns die Fertigung von morgen gestalten.
          </p>
        </div>
      </section>
      <ContactSection />
    </Layout>
  );
}
