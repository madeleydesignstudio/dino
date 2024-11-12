import NewsletterForm from "@/components/landing-page/newsletter-signup";
import ProjectInquiryForm from "@/components/landing-page/project-inquiry-form";

const ContactPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <NewsletterForm />
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <ProjectInquiryForm />
      </div>
    </div>
  );
};

export default ContactPage;
