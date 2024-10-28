import { client, EmailSchema } from "../../../lib/postmark";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { to, subject, body } = EmailSchema.parse(data);

    await client.sendEmail({
      From: "daniel@madeleydesignstudio.org",
      To: to,
      Subject: subject,
      TextBody: body,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Invalid input" }, { status: 400 });
  }
}
