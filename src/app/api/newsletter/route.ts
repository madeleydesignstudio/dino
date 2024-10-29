import { client, EmailSchema } from "@/lib/postmark";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, fullname } = await request.json();

    // Validate email payload using the schema
    const emailPayload = EmailSchema.parse({
      to: email,
      subject: "Welcome!",
      body: `Hi ${fullname}, thank you for your message!`,
    });

    await client.sendEmail({
      From: "daniel@madeleydesignstudio.org", // Replace with your verified sender
      To: emailPayload.to,
      Subject: emailPayload.subject,
      TextBody: emailPayload.body,
      MessageStream: "outbound",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
