import { Layout } from "@/components/Layout";

export default function Impressum() {
  return (
    <Layout>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          {/* Header */}
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-5">
              Rechtliches
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">Impressum</h1>
            <p className="text-muted-foreground text-sm">Angaben gemäß § 5 TMG</p>
          </div>

          <div className="space-y-5 text-sm text-muted-foreground leading-relaxed">

            {/* Anbieter */}
            <div className="surface-card rounded-xl p-6">
              <h2 className="text-base font-bold text-foreground mb-4">Anbieter</h2>
              <div className="space-y-1">
                <p className="font-semibold text-foreground">Technische Universität Darmstadt</p>
                <p className="font-medium text-foreground/80">Institut für Produktionsmanagement, Technologie und Werkzeugmaschinen (PTW)</p>
                <p className="font-semibold text-primary mt-2">autonomIQ</p>
                <p className="mt-3">Otto-Berndt-Straße 2</p>
                <p>64287 Darmstadt</p>
                <p>Deutschland</p>
                <div className="mt-4 space-y-1.5 pt-4 border-t border-border/50">
                  <p>Tel.: <a href="tel:+4961518229758" className="text-primary hover:underline">+49 6151 8229-758</a></p>
                  <p>E-Mail: <a href="mailto:info@autonomiq.de" className="text-primary hover:underline">info@autonomiq.de</a></p>
                  <p>Web: <a href="https://www.autonomiq.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.autonomiq.de</a></p>
                </div>
              </div>
            </div>

            {/* Haftung für Inhalte */}
            <div className="surface-card rounded-xl p-6">
              <h2 className="text-base font-bold text-foreground mb-3">Haftung für Inhalte</h2>
              <p className="mb-3">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            {/* Haftung für Links */}
            <div className="surface-card rounded-xl p-6">
              <h2 className="text-base font-bold text-foreground mb-3">Haftung für Links</h2>
              <p className="mb-3">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            {/* Urheberrecht */}
            <div className="surface-card rounded-xl p-6">
              <h2 className="text-base font-bold text-foreground mb-3">Urheberrecht</h2>
              <p className="mb-3">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
