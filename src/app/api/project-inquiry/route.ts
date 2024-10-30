// import { client, EmailSchema } from "@/lib/postmark";
// import { NextResponse } from "next/server";
// import { renderProjectInquiryEmail } from "@/components/emails/render-project-inquiry-email";

// export async function POST(request: Request) {
//   try {
//     const {
//       email,
//       fullname,
//       company,
//       budget,
//       projectName,
//       projectDescription,
//     } = await request.json();

//     const emailHtml = await renderProjectInquiryEmail(
//       fullname,
//       company,
//       budget,
//       projectName,
//       projectDescription
//     );

//     // Send email to the admin
//     const adminEmailPayload = EmailSchema.parse({
//       to: "daniel@madeleydesignstudio.org", // Replace with admin email
//       subject: `New Project Inquiry: ${projectName}`,
//       body: emailHtml,
//     });

//     await client.sendEmail({
//       From: "daniel@madeleydesignstudio.org", // Replace with your verified sender
//       To: adminEmailPayload.to,
//       Subject: adminEmailPayload.subject,
//       HtmlBody: adminEmailPayload.body,
//       MessageStream: "outbound",
//     });

//     // Send confirmation email to the client
//     const clientEmailPayload = EmailSchema.parse({
//       to: email,
//       subject: "We've received your project inquiry",
//       body: `
//         <h1>Thank you for your inquiry, ${fullname}!</h1>
//         <p>We've received your project inquiry and will get back to you shortly.</p>
//         <p>Project Details:</p>
//         <ul>
//           <li>Project Name: ${projectName}</li>
//           <li>Budget: ${budget}</li>
//         </ul>
//         <p>Best regards,<br>Your Team</p>
//       `,
//     });

//     await client.sendEmail({
//       From: "daniel@madeleydesignstudio.org", // Replace with your verified sender
//       To: clientEmailPayload.to,
//       Subject: clientEmailPayload.subject,
//       HtmlBody: clientEmailPayload.body,
//       MessageStream: "outbound",
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Email sending failed:", error);
//     return NextResponse.json(
//       { error: "Failed to send email" },
//       { status: 500 }
//     );
//   }
// }

import { client, EmailSchema } from "@/lib/postmark";
import { NextResponse } from "next/server";
import { renderProjectInquiryEmail } from "@/components/emails/render-project-inquiry-email";
import { renderProjectConfirmationEmail } from "@/components/emails/render-project-confirmation";

export async function POST(request: Request) {
  try {
    const {
      email,
      fullname,
      company,
      budget,
      projectName,
      projectDescription,
    } = await request.json();

    // Send email to the admin
    const adminEmailHtml = await renderProjectInquiryEmail(
      fullname,
      company,
      budget,
      projectName,
      projectDescription
    );

    const adminEmailPayload = EmailSchema.parse({
      to: "daniel@madeleydesignstudio.org",
      subject: `New Project Inquiry: ${projectName}`,
      body: adminEmailHtml,
    });

    await client.sendEmail({
      From: "daniel@madeleydesignstudio.org",
      To: adminEmailPayload.to,
      Subject: adminEmailPayload.subject,
      HtmlBody: adminEmailPayload.body,
      MessageStream: "outbound",
    });

    // Send confirmation email to the client using the render function
    const clientEmailHtml = await renderProjectConfirmationEmail(
      fullname,
      projectName,
      budget
    );

    const clientEmailPayload = EmailSchema.parse({
      to: email,
      subject: "We've received your project inquiry",
      body: clientEmailHtml,
    });

    await client.sendEmail({
      From: "daniel@madeleydesignstudio.org",
      To: clientEmailPayload.to,
      Subject: clientEmailPayload.subject,
      HtmlBody: clientEmailPayload.body,
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
