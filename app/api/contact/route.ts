import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const recipient = "rams7729@koc.k12.tr";
const resend = new Resend(process.env.RESEND_API_KEY);

type ContactBody = {
  name?: unknown;
  email?: unknown;
  topic?: unknown;
  message?: unknown;
  website?: unknown;
};

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[character];
  });
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Email service is not configured." }, { status: 503 });
  }

  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Quietly accept bot submissions without sending them.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 100);
  const email = clean(body.email, 254).toLowerCase();
  const topic = clean(body.topic, 140) || "General inquiry";
  const message = clean(body.message, 5000);

  if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Name, a valid email, and message are required." }, { status: 400 });
  }

  const domain = process.env.RESEND_EMAIL_DOMAIN || "frcrams.com";
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeTopic = escapeHtml(topic);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  const { data, error } = await resend.emails.send({
    from: `RAMS 7729 Website <contact@${domain}>`,
    to: [recipient],
    replyTo: email,
    subject: `[frcrams.com] ${topic}`,
    text: `New website message\n\nName: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`,
    html: `<h2>New website message</h2><p><strong>Name:</strong> ${safeName}<br><strong>Email:</strong> ${safeEmail}<br><strong>Topic:</strong> ${safeTopic}</p><p>${safeMessage}</p>`,
  });

  if (error) {
    console.error("Contact email failed", error);
    return NextResponse.json({ error: "Message could not be sent." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, id: data?.id });
}
