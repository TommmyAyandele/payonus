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
  // Shared
  email: string;
  pageIndustry?: string;
  formName?: string;
}

function field(label: string, value?: string) {
  const v = value?.trim();
  if (!v) return null;
  return { type: "mrkdwn", text: `*${label}:*\n${v}` };
}

export async function POST(request: Request) {
  const webhookUrl = process.env.SLACK_LEADS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("SLACK_LEADS_WEBHOOK_URL is not set");
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
  const business = (payload.company || payload.business)?.trim();

  // Email is the one thing every form collects; require it plus at least one identifier.
  if (!email || (!name && !business)) {
    return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const source = payload.formName?.trim() || "Website enquiry";
  const fields = [
    field("Business", business),
    field("Email", email),
    field("Name", name),
    field("Role", payload.role),
    field("Monthly volume", payload.volume),
    field("Industry", payload.pageIndustry),
    field("Subject", payload.subject),
  ].filter(Boolean);

  const blocks: unknown[] = [
    {
      type: "header",
      text: { type: "plain_text", text: `🚀 New lead — ${source}`, emoji: true },
    },
    { type: "section", fields },
  ];

  if (payload.message?.trim()) {
    blocks.push({
      type: "section",
      text: { type: "mrkdwn", text: `*Message:*\n${payload.message.trim()}` },
    });
  }

  blocks.push({
    type: "context",
    elements: [{ type: "mrkdwn", text: `Source: payonus.com • ${source}` }],
  });

  try {
    const slackRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `New lead: ${business || name} (${email})`, // notification fallback
        blocks,
      }),
    });
    if (!slackRes.ok) throw new Error(`Slack webhook responded ${slackRes.status}`);
  } catch (err) {
    console.error("Failed to post lead to Slack:", err);
    return Response.json({ ok: false, error: "Failed to record enquiry" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
