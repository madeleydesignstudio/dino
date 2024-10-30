import { ProjectInquiryEmail } from "./ProjectInquiryEmail";
import { render } from "@react-email/render";

export async function renderProjectInquiryEmail(
  fullname: string,
  company: string,
  budget: string,
  projectName: string,
  projectDescription: string
) {
  const emailHtml = render(
    <ProjectInquiryEmail
      fullname={fullname}
      company={company}
      budget={budget}
      projectName={projectName}
      projectDescription={projectDescription}
    />
  );

  return emailHtml;
}
