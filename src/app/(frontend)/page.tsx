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
import SlidingText from "@/components/homepage/SlidingText";
import { NewsUpdates } from "@/components/homepage/news-updates";

export default async function Home() {
  return (
    <div className="max-w-7xl w-full mx-auto border-x border-[#D9E0C1]">
      <Hero />
      <SlidingText />
      <Intro />
      <Clients />
      <ArtOfSimplicity />
      <StudioServices />
      <DesignDevelopmentStudio />
      <SelectedWorkCaseStudies />
      <BenefitsPricing />
      <Resources />
      <QuestionsTestimonials />
      <NewsUpdates />
    </div>
  );
}
