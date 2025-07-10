'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRightIcon,
  CheckIcon,
  StarIcon,
  PaletteIcon,
  ImageIcon,
  BrushIcon,
  SparklesIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const ArtCreativeDesign = () => {
  const features = [
    'Brand Identity Design',
    'Logo & Visual Identity',
    'Marketing Materials',
    'Digital Illustrations',
    'Print Design',
    'Packaging Design',
    'Social Media Graphics',
    'Creative Direction',
  ]

  const services = [
    {
      name: 'Brand Identity',
      icon: <BrushIcon className="h-6 w-6" />,
      description: 'Complete visual identity systems that capture your brand essence',
    },
    {
      name: 'Digital Art',
      icon: <ImageIcon className="h-6 w-6" />,
      description: 'Custom illustrations and digital artwork for any medium',
    },
    {
      name: 'Print Design',
      icon: <PaletteIcon className="h-6 w-6" />,
      description: 'Professional print materials from business cards to billboards',
    },
    {
      name: 'Creative Direction',
      icon: <SparklesIcon className="h-6 w-6" />,
      description: 'Strategic creative guidance for cohesive brand experiences',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Creative Brief',
      description:
        'We dive deep into your brand story, target audience, and creative vision to establish direction.',
      duration: '1 week',
    },
    {
      step: '02',
      title: 'Concept Development',
      description: 'We explore multiple creative concepts and develop initial design directions.',
      duration: '1-2 weeks',
    },
    {
      step: '03',
      title: 'Design Execution',
      description:
        'We craft polished designs with attention to every detail and brand consistency.',
      duration: '2-3 weeks',
    },
    {
      step: '04',
      title: 'Refinement & Delivery',
      description: 'We refine based on feedback and deliver final assets in all required formats.',
      duration: '1 week',
    },
  ]

  const portfolioItems = [
    {
      title: 'Organic Beauty Brand',
      category: 'Brand Identity',
      image: 'https://storage.dev-0af.workers.dev/portfolio-beauty-brand.png',
      description: 'Complete brand identity for sustainable skincare company',
      deliverables: ['Logo Design', 'Packaging', 'Website'],
    },
    {
      title: 'Tech Startup Illustrations',
      category: 'Digital Art',
      image: 'https://storage.dev-0af.workers.dev/portfolio-tech-illustrations.png',
      description: 'Custom illustration suite for SaaS platform',
      deliverables: ['Hero Graphics', 'Icons', 'Marketing'],
    },
    {
      title: 'Restaurant Brand System',
      category: 'Print Design',
      image: 'https://storage.dev-0af.workers.dev/portfolio-restaurant-brand.png',
      description: 'Complete visual identity for farm-to-table restaurant',
      deliverables: ['Menu Design', 'Signage', 'Packaging'],
    },
  ]

  const testimonials = [
    {
      name: 'Emily Rodriguez',
      company: 'GreenLeaf Organics',
      role: 'Founder',
      quote:
        'The creative team captured our brand essence perfectly. Our new identity increased brand recognition by 300%.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'TechFlow Solutions',
      role: 'Marketing Director',
      quote:
        'Outstanding creative work that elevated our entire marketing presence. The attention to detail is remarkable.',
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
                Art & Creative Design
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Creative Design That Tells Your Story
              </h1>
              <p className="text-lg text-neutral-600 mb-8">
                We bring your brand to life through stunning visual design that captivates audiences
                and communicates your message with impact. From brand identity to digital art, we
                create visuals that resonate and inspire action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/start-project">
                    Start Your Project
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/case-studies">View Our Portfolio</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="https://storage.dev-0af.workers.dev/art-creative-design-hero.png"
                  alt="Art & Creative Design Showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Services Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Creative Services</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              From concept to completion, we offer comprehensive creative design services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-neutral-50 rounded-lg p-6 text-center">
                <div className="text-neutral-700 mb-4 flex justify-center">{service.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                <p className="text-neutral-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Features Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What's Included in Our Creative Design Service
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Every creative project includes these essential elements for brand success.
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

      {/* Creative Benefits */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Our Creative Team</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We combine artistic vision with strategic thinking to create designs that work.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Original & Unique</h3>
              <p className="text-neutral-600 text-sm">
                Every design is crafted from scratch to ensure your brand stands out from the
                competition.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PaletteIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Strategic Design</h3>
              <p className="text-neutral-600 text-sm">
                Beautiful designs that align with your business goals and target audience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BrushIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Versatile Formats</h3>
              <p className="text-neutral-600 text-sm">
                Designs optimized for all mediums - digital, print, web, and social media.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Process Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Creative Process</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A proven approach to creating designs that resonate with your audience.
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Recent Creative Projects</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Explore some of our latest creative design work across different industries.
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
                <p className="text-neutral-600 text-sm mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-1">
                  {item.deliverables.map((deliverable, deliverableIndex) => (
                    <Badge key={deliverableIndex} variant="secondary" className="text-xs">
                      {deliverable}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/case-studies">View Full Portfolio</Link>
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
              Hear from brands that have transformed their visual presence with our creative design.
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Creative design projects start from $1,500. Get a custom quote based on your specific
            creative needs.
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
                How long does a creative design project take?
              </h3>
              <p className="text-neutral-600">
                Most creative projects take 4-6 weeks from concept to completion, depending on scope
                and complexity. Brand identity projects may take longer.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">What file formats do you provide?</h3>
              <p className="text-neutral-600">
                We deliver all designs in multiple formats including high-resolution PNG, JPEG, PDF,
                and vector files (AI, EPS) suitable for both print and digital use.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Do you offer revisions during the design process?
              </h3>
              <p className="text-neutral-600">
                Yes! We include 3 rounds of revisions in all our packages to ensure you're
                completely satisfied with the final design.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Can you match an existing brand style?</h3>
              <p className="text-neutral-600">
                Absolutely. We can work within your existing brand guidelines or help evolve your
                current style to better meet your business goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ArtCreativeDesign
