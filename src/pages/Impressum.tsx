import { Layout } from "@/components/Layout";

export default function Impressum() {
  return (
    <Layout>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-2">Impressum</h1>
          <p className="text-muted-foreground mb-10">Angaben gemäß § 5 TMG</p>

          <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
            <div className="surface-card rounded-xl p-6">
              <h2 className="text-base font-bold text-foreground mb-3">Anbieter</h2>
              <p>Technische Universität Darmstadt</p>
              <p>Institut für Produktionsmanagement, Technologie und Werkzeugmaschinen (PTW)</p>
              <p className="font-semibold text-foreground mt-2">autonomIQ</p>
              <p>Otto-Berndt-Straße 2</p>
              <p>64287 Darmstadt</p>
              <p>Deutschland</p>
            </div>

            <div className="surface-card rounded-xl p-6">
              <h2 className="text-base font-bold text-foreground mb-3">Kontakt</h2>
              <p>Telefon: <a href="tel:+4961518229758" className="text-primary hover:underline">+49 6151 8229-758</a></p>
              <p>E-Mail: <a href="mailto:info@autonomiq.de" className="text-primary hover:underline">info@autonomiq.de</a></p>
              <p>Web: <a href="https://www.autonomiq.de" className="text-primary hover:underline">www.autonomiq.de</a></p>
            </div>

            <div className="surface-card rounded-xl p-6">
              <h2 className="text-base font-bold text-foreground mb-3">Vertreten durch</h2>
              <p>Die TU Darmstadt ist eine Körperschaft des öffentlichen Rechts. Sie wird gesetzlich vertreten durch den Präsidenten der Technischen Universität Darmstadt.</p>
            </div>

            <div className="surface-card rounded-xl p-6">
              <h2 className="text-base font-bold text-foreground mb-3">Zuständige Aufsichtsbehörde</h2>
              <p>Hessisches Ministerium für Wissenschaft und Forschung, Kunst und Kultur</p>
              <p>Rheinstraße 23–25</p>
              <p>65185 Wiesbaden</p>
            </div>

            <div className="surface-card rounded-xl p-6">
              <h2 className="text-base font-bold text-foreground mb-3">Haftungsausschluss</h2>
              <h3 className="font-semibold text-foreground mb-1">Haftung für Inhalte</h3>
              <p className="mb-3">Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.</p>
              <h3 className="font-semibold text-foreground mb-1">Haftung für Links</h3>
              <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
            </div>

            <div className="surface-card rounded-xl p-6">
              <h2 className="text-base font-bold text-foreground mb-3">Urheberrecht</h2>
              <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
