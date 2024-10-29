import { render } from "@react-email/render";
import { WelcomeEmail } from "./WelcomeEmail";

export async function renderEmail(fullname: string) {
  return await render(<WelcomeEmail fullname={fullname} />);
}
