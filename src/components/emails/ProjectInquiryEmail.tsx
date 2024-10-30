import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
  Hr,
} from "@react-email/components";
import * as React from "react";

interface ProjectInquiryEmailProps {
  fullname: string;
  company: string;
  budget: string;
  projectName: string;
  projectDescription: string;
}

export const ProjectInquiryEmail = ({
  fullname,
  company,
  budget,
  projectName,
  projectDescription,
}: ProjectInquiryEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Project Inquiry from {fullname}</Preview>
      <Tailwind>
        <Body className="bg-stone-950 font-karla">
          <Container className="mx-auto py-10 px-5">
            {/* Header Section */}
            <Section className="border-b border-stone-800 pb-8">
              <Text className="text-7xl font-bold font-karla text-stone-50">
                DINO
              </Text>
              <Text className="text-xs text-stone-500">
                51.5072° N, 0.1276° W
                <br />
                UK DESIGN STUDIO
              </Text>
            </Section>

            {/* Project Inquiry Header */}
            <Section className="mt-12">
              <Text className="font-nanum text-4xl font-normal mb-6 text-stone-100">
                New Project Inquiry
              </Text>
            </Section>

            {/* Client Details */}
            <Section className="mt-8 bg-stone-900/50 p-6 rounded-lg">
              <Text className="font-nanum text-2xl text-stone-100 mb-4">
                Client Information
              </Text>
              <Hr className="border-stone-800 mb-4" />
              <Text className="text-stone-300 mb-2">
                <span className="text-stone-500">Name:</span> {fullname}
              </Text>
              <Text className="text-stone-300 mb-2">
                <span className="text-stone-500">Company:</span> {company}
              </Text>
            </Section>

            {/* Project Details */}
            <Section className="mt-8 bg-stone-900/50 p-6 rounded-lg">
              <Text className="font-nanum text-2xl text-stone-100 mb-4">
                Project Details
              </Text>
              <Hr className="border-stone-800 mb-4" />
              <Text className="text-stone-300 mb-2">
                <span className="text-stone-500">Project Name:</span>{" "}
                {projectName}
              </Text>
              <Text className="text-stone-300 mb-2">
                <span className="text-stone-500">Budget Range:</span> {budget}
              </Text>
              <Text className="text-stone-300 mt-4">
                <span className="text-stone-500">Project Description:</span>
              </Text>
              <Text className="text-stone-300 mt-2 p-4 bg-stone-900 rounded-md">
                {projectDescription}
              </Text>
            </Section>

            {/* Footer */}
            <Section className="mt-12 border-t border-stone-800 pt-8">
              <Text className="text-xs text-stone-500 text-center">
                This is an automated email from the Digital Dinosaur project
                inquiry system. For any questions, contact{" "}
                <span className="text-stone-400">hello@thedigitaldino.com</span>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ProjectInquiryEmail;
