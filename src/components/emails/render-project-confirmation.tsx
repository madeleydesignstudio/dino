import { ProjectInquiryConfirmationEmail } from "./ProjectInquiryConfirmationEmail";
import { render } from "@react-email/render";

export async function renderProjectConfirmationEmail(
  fullname: string,
  projectName: string,
  budget: string
) {
  const emailHtml = render(
    <ProjectInquiryConfirmationEmail
      fullname={fullname}
      projectName={projectName}
      budget={budget}
    />
  );

  return emailHtml;
}
