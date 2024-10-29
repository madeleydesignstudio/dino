import * as postmark from "postmark";
import { z } from "zod";

const serverToken = process.env.NEXT_PUBLIC_POSTMARK_SERVER_TOKEN!;
const client = new postmark.ServerClient(serverToken);

export const EmailSchema = z.object({
  to: z.string().email(),
  subject: z.string().min(1),
  body: z.string().min(1),
});

export type EmailPayload = z.infer<typeof EmailSchema>;

export { client };
