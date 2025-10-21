import { Hero } from "@/components/homepage/hero";
import { Intro } from "@/components/homepage/intro";
import { Clients } from "@/components/homepage/clients";
import { ArtOfSimplicity } from "@/components/homepage/art-of-simplicity";
import { StudioServices } from "@/components/homepage/studio-and-services";
import { DesignDevelopmentStudio } from "@/components/homepage/design-development-studio";
import { SelectedWorkCaseStudies } from "@/components/homepage/selected-work-case-studies";
import { BenefitsPricing } from "@/components/homepage/benefits-pricing";
import { Resources } from "../../components/homepage/resources";
import { QuestionsTestimonials } from "@/components/homepage/questions-testimonials";

export default async function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <Clients />
      <ArtOfSimplicity />
      <StudioServices />
      <DesignDevelopmentStudio />
      <SelectedWorkCaseStudies />
      <BenefitsPricing />
      <Resources />
      <QuestionsTestimonials />
    </div>
  );
}
