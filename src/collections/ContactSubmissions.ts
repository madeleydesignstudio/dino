import type { CollectionConfig } from "payload";

export const ContactSubmissions: CollectionConfig = {
  slug: "contact-submissions",
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "message",
      type: "textarea",
      required: true,
    },
    {
      name: "status",
      type: "select",
      defaultValue: "new",
      options: [
        { label: "New", value: "new" },
        { label: "In Progress", value: "in-progress" },
        { label: "Resolved", value: "resolved" },
      ],
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc, req, operation }) => {
        // Only send emails for new submissions
        if (operation === "create") {
          try {
            // Send confirmation email to the user
            await req.payload.sendEmail({
              to: doc.email,
              from: "daniel@madeleydesignstudio.com",
              subject: "We received your message - Madeley Design Studio",
              html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                  <h2 style="color: #333;">Thank you for contacting us!</h2>
                  <p>Hi there,</p>
                  <p>We've received your message and will get back to you as soon as possible.</p>

                  <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
                    <p style="margin: 0;"><strong>Your message:</strong></p>
                    <p style="margin: 10px 0 0 0;">${doc.message.replace(/\n/g, "<br>")}</p>
                  </div>

                  <p>Best regards,<br/>
                  <strong>Dan</strong><br/>
                  Madeley Design Studio</p>

                  <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
                  <p style="color: #666; font-size: 12px;">
                    If you have any questions, feel free to reply to this email.
                  </p>
                </div>
              `,
            });

            // Send notification email to daniel@madeleydesignstudio.com
            await req.payload.sendEmail({
              to: "daniel@madeleydesignstudio.com",
              from: "daniel@madeleydesignstudio.com",
              subject: `New Contact Form Submission from ${doc.email}`,
              html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                  <h2 style="color: #333;">New Contact Form Submission</h2>

                  <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
                    <p style="margin: 0;"><strong>From:</strong> ${doc.email}</p>
                    <p style="margin: 10px 0 0 0;"><strong>Submitted:</strong> ${new Date(doc.createdAt).toLocaleString()}</p>
                  </div>

                  <div style="background-color: #fff; border: 1px solid #ddd; padding: 15px; border-radius: 5px; margin: 20px 0;">
                    <p style="margin: 0;"><strong>Message:</strong></p>
                    <p style="margin: 10px 0 0 0;">${doc.message.replace(/\n/g, "<br>")}</p>
                  </div>

                  <p style="color: #666; font-size: 12px;">
                    Reply to this email to respond to ${doc.email}
                  </p>
                </div>
              `,
              replyTo: doc.email,
            });
          } catch (error) {
            req.payload.logger.error(
              `Failed to send contact emails: ${error instanceof Error ? error.message : String(error)}`,
            );
          }
        }
      },
    ],
  },
};
