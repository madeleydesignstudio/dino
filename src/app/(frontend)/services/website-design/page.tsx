'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon, CheckIcon, StarIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const WebsiteDesign = () => {
  const features = [
    'Custom UI/UX Design',
    'Responsive Mobile Design',
    'Brand Identity Integration',
    'User Experience Optimization',
    'Interactive Prototypes',
    'Design System Creation',
    'Accessibility Standards',
    'Modern Design Trends',
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Research',
      description:
        'We dive deep into your brand, audience, and goals to understand what makes your business unique.',
      duration: '1-2 weeks',
    },
    {
      step: '02',
      title: 'Wireframes & Concepts',
      description:
        'We create initial wireframes and design concepts to establish the foundation of your website.',
      duration: '1 week',
    },
    {
      step: '03',
      title: 'Visual Design',
      description:
        'We craft beautiful, on-brand designs that capture your essence and engage your audience.',
      duration: '2-3 weeks',
    },
    {
      step: '04',
      title: 'Prototype & Refine',
      description:
        'We build interactive prototypes and refine based on your feedback to perfect the experience.',
      duration: '1 week',
    },
  ]

  const portfolioItems = [
    {
      title: 'E-commerce Platform',
      category: 'Retail',
      image: 'https://storage.dev-0af.workers.dev/portfolio-ecommerce.png',
      description: 'Modern e-commerce design with seamless shopping experience',
    },
    {
      title: 'SaaS Dashboard',
      category: 'Technology',
      image: 'https://storage.dev-0af.workers.dev/portfolio-saas.png',
      description: 'Clean, data-driven interface for B2B software platform',
    },
    {
      title: 'Creative Agency',
      category: 'Creative',
      image: 'https://storage.dev-0af.workers.dev/portfolio-agency.png',
      description: 'Bold, artistic design showcasing creative portfolio',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      quote:
        'The website design exceeded our expectations. Our conversion rate increased by 150% after launch.',
      rating: 5,
    },
    {
      name: 'Marcus Chen',
      company: 'Bloom Retail',
      role: 'Marketing Director',
      quote:
        'Professional, creative, and delivered on time. The design perfectly captures our brand essence.',
      rating: 5,
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-4 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Website Design
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Beautiful Websites That Convert Visitors Into Customers
              </h1>
              <p className="text-lg text-neutral-600 mb-8">
                We create stunning, user-focused websites that not only look amazing but drive real
                business results. From concept to launch, we'll transform your vision into a digital
                experience that captivates and converts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/start-project">
                    Start Your Project
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/case-studies">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="https://storage.dev-0af.workers.dev/website-design-hero.png"
                  alt="Website Design Showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Features Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What's Included in Our Website Design Service
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Every website design project includes these essential elements to ensure your success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckIcon className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Process Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Design Process</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A proven methodology that delivers exceptional results every time.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-neutral-900 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-neutral-600 text-sm mb-2">{step.description}</p>
                <Badge variant="secondary" className="text-xs">
                  {step.duration}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Portfolio Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Recent Website Designs</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Explore some of our latest website design projects across different industries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <Badge variant="outline" className="mb-2">
                  {item.category}
                </Badge>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/case-studies">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* Testimonials Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our website
              designs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-neutral-50 rounded-lg p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-neutral-800 mb-4">"{testimonial.quote}"</blockquote>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-neutral-600">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Pricing Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-neutral-600 mb-8">
            Website design packages start from $2,500. Get a custom quote based on your specific
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/start-project">
                Get Custom Quote
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* FAQ Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                How long does a website design project take?
              </h3>
              <p className="text-neutral-600">
                Most website design projects take 4-6 weeks from start to finish, depending on
                complexity and the number of pages required.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Do you provide ongoing support after launch?
              </h3>
              <p className="text-neutral-600">
                Yes! We offer maintenance packages and ongoing support to keep your website running
                smoothly and up-to-date.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Will my website be mobile-friendly?</h3>
              <p className="text-neutral-600">
                Absolutely. All our websites are designed with a mobile-first approach to ensure
                they look and work perfectly on all devices.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                What if I need changes during the design process?
              </h3>
              <p className="text-neutral-600">
                We include 2 rounds of revisions in all our packages. Additional changes can be
                accommodated with transparent pricing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WebsiteDesign
