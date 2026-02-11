import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactFormSchema } from "@/lib/types";
import { siteConfig } from "@/lib/config/site";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = ContactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data" },
        { status: 400 }
      );
    }

    const { name, email, company, phone, message, service } = parsed.data;

    const resend = new Resend(process.env.RESEND_API_KEY);
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      phone ? `Phone: ${phone}` : null,
      service ? `Service: ${service}` : null,
      "",
      "Message:",
      message,
    ].filter(Boolean);

    await resend.emails.send({
      from: "Bitrix Contact <onboarding@resend.dev>",
      to: siteConfig.contact.email,
      replyTo: email,
      subject: `New contact request from ${name}`,
      text: lines.join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
