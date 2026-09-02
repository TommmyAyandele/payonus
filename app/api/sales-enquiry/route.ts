interface LeadPayload {
  // Full "Talk to sales" modal / sales page
  firstName?: string;
  lastName?: string;
  company?: string;
  role?: string;
  volume?: string;
  message?: string;
  subject?: string;
  // Compact lead-capture card
  business?: string;
  // Lead-magnet tool pages
  leadMagnetName?: string;
  vertical?: string;
  // Shared
  email: string;
  pageIndustry?: string;
  formName?: string;
}

export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("GOOGLE_SHEET_WEBHOOK_URL is not set");
    return Response.json({ ok: false, error: "Not configured" }, { status: 500 });
  }

  let payload: LeadPayload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  const email = payload.email?.trim();
  const name = [payload.firstName, payload.lastName].filter(Boolean).join(" ").trim();
  const company = (payload.company || payload.business)?.trim();

  // Email is the one thing every form collects; require it plus at least one identifier.
  if (!email || (!name && !company)) {
    return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const messageParts = [
    payload.subject ? `Subject: ${payload.subject}` : null,
    payload.message?.trim(),
    payload.leadMagnetName ? `Lead magnet: ${payload.leadMagnetName}` : null,
    payload.vertical ? `Vertical: ${payload.vertical}` : null,
  ].filter(Boolean);

  try {
    const sheetRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        pageIndustry: payload.pageIndustry ?? "",
        formName: payload.formName ?? "",
        firstName: payload.firstName ?? name,
        lastName: payload.lastName ?? "",
        email,
        company: company ?? "",
        role: payload.role ?? "",
        volume: payload.volume ?? "",
        message: messageParts.join(" | "),
      }),
    });
    if (!sheetRes.ok) throw new Error(`Sheet webhook responded ${sheetRes.status}`);
  } catch (err) {
    console.error("Failed to record sales enquiry:", err);
    return Response.json({ ok: false, error: "Failed to record enquiry" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
