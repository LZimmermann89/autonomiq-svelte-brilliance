import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  privacy: boolean;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

const initialForm: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
  privacy: false,
};

function validate(form: FormState): Partial<Record<keyof FormState, string>> {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!form.name.trim()) errors.name = "Bitte geben Sie Ihren Namen ein.";
  if (!form.company.trim()) errors.company = "Bitte geben Sie Ihr Unternehmen ein.";
  if (!form.email.trim()) errors.email = "Bitte geben Sie Ihre E-Mail ein.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
  if (!form.privacy) errors.privacy = "Bitte stimmen Sie der Datenschutzerklärung zu.";
  return errors;
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("loading");
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: form.name.trim(),
          company: form.company.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
        },
      });

      if (error) throw new Error(error.message);
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
    }
  };

  const field = (id: keyof FormState) => ({
    value: form[id] as string,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [id]: e.target.value }));
      if (errors[id]) setErrors((prev) => ({ ...prev, [id]: undefined }));
    },
  });

  return (
    <section id="kontakt" className="py-24 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute inset-0 dot-bg opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-6">
              <span className="text-xs font-medium tracking-widest uppercase text-primary">
                Pilotprogramm
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Werden Sie{" "}
              <span className="text-gradient">Pilotanwender</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Sie sind Fertigungsbetrieb und möchten als einer der ersten Pilotanwender von
              autonomIQ profitieren? Wir suchen Industriepartner, die gemeinsam mit uns die
              Fertigung von morgen gestalten.
            </p>

            <div className="space-y-4">
              {[
                "Frühzeitiger Zugang zur autonomIQ-Technologie",
                "Enge Begleitung durch das PTW-Forschungsteam",
                "Individuelle Anpassung an Ihre Maschinen und Prozesse",
                "Direkter Einfluss auf die Produktentwicklung",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </span>
                  <span className="text-sm text-foreground leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-border/40 space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">PTW · TU Darmstadt</span>
              </p>
              <p className="text-sm text-muted-foreground">Otto-Berndt-Straße 2, 64287 Darmstadt</p>
              <p className="text-sm text-muted-foreground">
                <a href="tel:+4961518229758" className="hover:text-primary transition-colors">+49 6151 8229-758</a>
              </p>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:info@autonomiq.de" className="hover:text-primary transition-colors">info@autonomiq.de</a>
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="surface-card rounded-xl p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full gap-5 py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <CheckCircle size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Anfrage gesendet!</h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Vielen Dank! Sie erhalten sofort eine Bestätigung per E-Mail. Wir melden uns in Kürze bei Ihnen.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-xs text-primary hover:underline"
                >
                  Weitere Anfrage senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {status === "error" && (
                  <div className="flex items-start gap-3 rounded-sm border border-destructive/40 bg-destructive/10 p-3">
                    <AlertCircle size={16} className="flex-shrink-0 text-destructive mt-0.5" />
                    <p className="text-xs text-destructive">
                      Fehler beim Senden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt unter{" "}
                      <a href="mailto:info@autonomiq.de" className="underline">info@autonomiq.de</a>.
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField label="Name *" error={errors.name}>
                    <input
                      type="text"
                      placeholder="Max Mustermann"
                      autoComplete="name"
                      className={inputClass(!!errors.name)}
                      {...field("name")}
                    />
                  </FormField>
                  <FormField label="Unternehmen *" error={errors.company}>
                    <input
                      type="text"
                      placeholder="Musterfirma GmbH"
                      autoComplete="organization"
                      className={inputClass(!!errors.company)}
                      {...field("company")}
                    />
                  </FormField>
                </div>

                <FormField label="E-Mail *" error={errors.email}>
                  <input
                    type="email"
                    placeholder="max@musterfirma.de"
                    autoComplete="email"
                    className={inputClass(!!errors.email)}
                    {...field("email")}
                  />
                </FormField>

                <FormField label="Telefon" error={undefined}>
                  <input
                    type="tel"
                    placeholder="+49 6151 000 000"
                    autoComplete="tel"
                    className={inputClass(false)}
                    {...field("phone")}
                  />
                </FormField>

                <FormField label="Nachricht / Ihr Anwendungsfall" error={undefined}>
                  <textarea
                    rows={4}
                    placeholder="Beschreiben Sie kurz Ihren Fertigungsbereich und Ihr Interesse an autonomIQ..."
                    className={inputClass(false) + " resize-none"}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  />
                </FormField>

                {/* DSGVO Privacy checkbox */}
                <div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={form.privacy}
                      onChange={(e) => {
                        setForm((f) => ({ ...f, privacy: e.target.checked }));
                        if (errors.privacy) setErrors((prev) => ({ ...prev, privacy: undefined }));
                      }}
                      className="mt-0.5 accent-primary w-4 h-4 flex-shrink-0 cursor-pointer"
                    />
                    <label htmlFor="privacy" className="text-xs text-muted-foreground leading-snug cursor-pointer">
                      Ich stimme der Verarbeitung meiner personenbezogenen Daten gemäß der{" "}
                      <a href="#datenschutz" className="text-primary hover:underline">
                        Datenschutzerklärung
                      </a>{" "}
                      zum Zweck der Bearbeitung meiner Anfrage zu (Art. 6 Abs. 1 lit. a DSGVO).
                      Die Einwilligung kann jederzeit widerrufen werden. *
                    </label>
                  </div>
                  {errors.privacy && (
                    <p className="mt-1.5 text-xs text-destructive ml-7">{errors.privacy}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-all animate-pulse-glow"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Wird gesendet…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Anfrage senden
                    </>
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function inputClass(hasError: boolean) {
  return `w-full px-4 py-2.5 rounded-sm bg-muted border ${
    hasError ? "border-destructive/60" : "border-border"
  } text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors`;
}

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
