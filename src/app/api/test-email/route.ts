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
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
    return Response.json(
      { error: "An unknown error occurred" },
      { status: 400 }
    );
  }
}
