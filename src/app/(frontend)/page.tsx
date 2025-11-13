import { Hero } from "@/components/homepage/hero";
import { Intro } from "@/components/homepage/intro";
import { Clients } from "@/components/homepage/clients";
import { ArtOfSimplicity } from "@/components/homepage/art-of-simplicity";
import { StudioServices } from "@/components/homepage/studio-and-services";
import DesignDevelopmentStudio from "@/components/homepage/design-development-studio";
import { SelectedWorkCaseStudies } from "@/components/homepage/selected-work-case-studies";
import { BenefitsPricing } from "@/components/homepage/benefits-pricing";
import { Resources } from "../../components/homepage/resources";
import { QuestionsTestimonials } from "@/components/homepage/questions-testimonials";
import SlidingText from "@/components/homepage/SlidingText";
import { NewsUpdates } from "@/components/homepage/news-updates";
import SevenMaxWidth from "@/components/providers/7-max-width";
import { Separator } from "@/components/universal/separator";
import { Footer } from "@/components/homepage/Footer";

export default async function Home() {
  return (
    <div>
      <SevenMaxWidth>
        <Hero />
      </SevenMaxWidth>

      <SlidingText />
      <SevenMaxWidth>
        <Intro />
      </SevenMaxWidth>
      {/*<Separator className=" bg-[#D9E0C1] w-full" />*/}
      <SevenMaxWidth>
        <Clients />

        {/*<ArtOfSimplicity />*/}
      </SevenMaxWidth>
      <Separator className=" bg-[#D9E0C1] w-full" />
      <SevenMaxWidth>
        <StudioServices />
      </SevenMaxWidth>

      <Separator className=" bg-[#D9E0C1] w-full" />

      <SevenMaxWidth>
        <SelectedWorkCaseStudies />
      </SevenMaxWidth>
      <Separator className=" bg-[#D9E0C1] w-full" />
      <SevenMaxWidth>
        <BenefitsPricing />
      </SevenMaxWidth>
      <Separator className=" bg-[#D9E0C1] w-full" />
      <div id="red-resources-section" className="bg-neutral-500">
        <SevenMaxWidth>
          <Resources />
        </SevenMaxWidth>
      </div>
      <Separator className=" bg-[#D9E0C1] w-full" />

      <SevenMaxWidth>
        <QuestionsTestimonials />
      </SevenMaxWidth>
      <Separator className=" bg-[#D9E0C1] w-full" />

      <SevenMaxWidth>
        <NewsUpdates />
      </SevenMaxWidth>
      <Separator className=" bg-[#D9E0C1] w-full" />
      <div className="bg-accent">
        <SevenMaxWidth>
          <Footer />
        </SevenMaxWidth>
      </div>
    </div>
  );
}
