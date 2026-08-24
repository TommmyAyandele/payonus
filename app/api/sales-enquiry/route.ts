interface SalesEnquiryPayload {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  volume: string;
  message: string;
  pageIndustry?: string;
  formName?: string;
}

export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("GOOGLE_SHEET_WEBHOOK_URL is not set");
    return Response.json({ ok: false, error: "Not configured" }, { status: 500 });
  }

  let payload: SalesEnquiryPayload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  if (!payload.email || !payload.firstName || !payload.lastName || !payload.company) {
    return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  try {
    const sheetRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        pageIndustry: payload.pageIndustry ?? "",
        formName: payload.formName ?? "",
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        company: payload.company,
        role: payload.role ?? "",
        volume: payload.volume ?? "",
        message: payload.message ?? "",
      }),
    });
    if (!sheetRes.ok) throw new Error(`Sheet webhook responded ${sheetRes.status}`);
  } catch (err) {
    console.error("Failed to record sales enquiry:", err);
    return Response.json({ ok: false, error: "Failed to record enquiry" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
