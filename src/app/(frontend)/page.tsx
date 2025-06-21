import CaseStudies from './components/homepage/case-studies'
import Hero from './components/homepage/hero'
import News from './components/homepage/news'
import Pricing from './components/homepage/pricing'
import Questions from './components/homepage/questions-testimonials'
import Resources from './components/homepage/resources'
import Studio from './components/homepage/studio-services'
import Footer from './components/navs/footer'

export default async function HomePage() {
  return (
    <div>
      <Hero />
      <Studio />
      <CaseStudies />
      <Pricing />
      <Resources />
      <Questions />
      <News />
      <Footer />
    </div>
  )
}
