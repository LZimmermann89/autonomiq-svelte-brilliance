import { z } from "npm:zod@3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Input validation schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name fehlt").max(100),
  company: z.string().trim().min(1, "Unternehmen fehlt").max(150),
  email: z.string().trim().email("Ungültige E-Mail").max(255),
  phone: z.string().trim().max(50).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
});

Deno.serve(async (req: Request) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: "Validierungsfehler", details: parsed.error.flatten() }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { name, company, email, phone, message } = parsed.data;

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "E-Mail-Dienst nicht konfiguriert" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Recipient: autonomIQ team
    const RECIPIENT = Deno.env.get("CONTACT_EMAIL") ?? "info@autonomiq.de";

    const emailHtml = `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Inter', Arial, sans-serif; background: #050d1a; color: #e2e8f0; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; background: #0d1a2e; border-radius: 8px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #0d1a2e, #0a1628); padding: 32px 32px 24px; border-bottom: 2px solid #00d4ff; }
    .logo { font-size: 22px; font-weight: 800; color: #e2e8f0; margin-bottom: 6px; }
    .logo span { color: #00d4ff; }
    .badge { font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #00d4ff; }
    .body { padding: 32px; }
    .title { font-size: 20px; font-weight: 700; color: #f1f5f9; margin-bottom: 24px; }
    .field { margin-bottom: 18px; }
    .label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #64748b; margin-bottom: 6px; }
    .value { font-size: 15px; color: #e2e8f0; background: #131f33; padding: 10px 14px; border-radius: 4px; border-left: 3px solid #00d4ff; }
    .footer { padding: 20px 32px; border-top: 1px solid #1e3450; font-size: 12px; color: #475569; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">autono<span>IQ</span></div>
      <div class="badge">Neue Pilotanwender-Anfrage</div>
    </div>
    <div class="body">
      <div class="title">📬 Neue Kontaktanfrage eingegangen</div>
      
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${escapeHtml(name)}</div>
      </div>
      <div class="field">
        <div class="label">Unternehmen</div>
        <div class="value">${escapeHtml(company)}</div>
      </div>
      <div class="field">
        <div class="label">E-Mail</div>
        <div class="value"><a href="mailto:${escapeHtml(email)}" style="color:#00d4ff">${escapeHtml(email)}</a></div>
      </div>
      ${
        phone
          ? `<div class="field">
        <div class="label">Telefon</div>
        <div class="value">${escapeHtml(phone)}</div>
      </div>`
          : ""
      }
      ${
        message
          ? `<div class="field">
        <div class="label">Nachricht / Anwendungsfall</div>
        <div class="value" style="white-space: pre-wrap">${escapeHtml(message)}</div>
      </div>`
          : ""
      }
    </div>
    <div class="footer">
      autonomIQ · TU Darmstadt · PTW Institut · info@autonomiq.de<br>
      Diese E-Mail wurde automatisch von der Kontaktformular-Integration generiert.
    </div>
  </div>
</body>
</html>`;

    // Confirmation email to the sender
    const confirmHtml = `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; background: #050d1a; color: #e2e8f0; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; background: #0d1a2e; border-radius: 8px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #0d1a2e, #0a1628); padding: 32px; border-bottom: 2px solid #00d4ff; }
    .logo { font-size: 22px; font-weight: 800; color: #e2e8f0; }
    .logo span { color: #00d4ff; }
    .body { padding: 32px; }
    .greeting { font-size: 18px; font-weight: 700; color: #f1f5f9; margin-bottom: 16px; }
    p { color: #94a3b8; line-height: 1.7; margin: 0 0 16px; }
    .highlight { color: #00d4ff; font-weight: 600; }
    .footer { padding: 20px 32px; border-top: 1px solid #1e3450; font-size: 12px; color: #475569; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">autono<span>IQ</span></div>
    </div>
    <div class="body">
      <div class="greeting">Vielen Dank, ${escapeHtml(name)}!</div>
      <p>Ihre Anfrage als Pilotanwender ist bei uns eingegangen. Wir freuen uns über Ihr Interesse an <span class="highlight">autonomIQ</span>.</p>
      <p>Unser Team vom PTW Institut der TU Darmstadt wird sich in Kürze bei Ihnen melden, um die nächsten Schritte zu besprechen.</p>
      <p>Mit freundlichen Grüßen,<br><strong style="color:#f1f5f9">Das autonomIQ-Team</strong></p>
    </div>
    <div class="footer">
      autonomIQ · TU Darmstadt PTW · Otto-Berndt-Straße 2, 64287 Darmstadt<br>
      Tel.: +49 6151 8229-758 · info@autonomiq.de · www.autonomiq.de
    </div>
  </div>
</body>
</html>`;

    // Send notification to the team
    const teamRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "autonomIQ Kontaktformular <onboarding@resend.dev>",
        to: [RECIPIENT],
        subject: `[autonomIQ] Neue Pilotanfrage von ${name} – ${company}`,
        html: emailHtml,
        reply_to: email,
      }),
    });

    if (!teamRes.ok) {
      const err = await teamRes.text();
      console.error("Resend team email error:", err);
      return new Response(JSON.stringify({ error: "E-Mail-Versand fehlgeschlagen" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Send confirmation to the user
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "autonomIQ <onboarding@resend.dev>",
        to: [email],
        subject: "Ihre Anfrage bei autonomIQ – Bestätigung",
        html: confirmHtml,
      }),
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(JSON.stringify({ error: "Interner Fehler" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
