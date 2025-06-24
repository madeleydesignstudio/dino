import CaseStudies from '@/components/homepage/case-studies';
import Hero from '@/components/homepage/hero';
import News from '@/components/homepage/news';
import Pricing from '@/components/homepage/pricing';
import Questions from '@/components/homepage/questions-testimonials';
import Resources from '@/components/homepage/resources';
import Studio from '@/components/homepage/studio-services';
import Footer from '@/components/navs/footer';
import { Separator } from '@/components/ui/separator';

export default async function HomePage() {
  return (
    <div>
      <Hero />
      <Separator className="my-8" />
      <Studio />
      <Separator className="my-8" />
      <CaseStudies />
      <Separator className="my-8" />
      <Pricing />
      <Separator className="my-8" />
      <Resources />
      <Separator className="my-8" />
      <Questions />
      <Separator className="my-8" />
      <News />
      <Separator className="my-8" />
    </div>
  );
}
