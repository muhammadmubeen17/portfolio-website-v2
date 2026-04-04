import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL!,
    replyTo: email,
    subject: `New message from ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
        <h2 style="color:#00d4ff;margin-bottom:4px">New Contact Form Submission</h2>
        <p style="color:#64748b;font-size:13px;margin-top:0">From your portfolio at mubeendev.site</p>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0"/>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <p style="background:#f8fafc;padding:16px;border-radius:8px;white-space:pre-wrap">${message}</p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
