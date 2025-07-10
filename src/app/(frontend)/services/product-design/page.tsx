'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  ArrowRightIcon,
  CheckIcon,
  LayersIcon,
  PenToolIcon,
  SmartphoneIcon,
  StarIcon,
  TargetIcon,
  UsersIcon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const ProductDesign = () => {
  const features = [
    'User Experience Research',
    'Product Strategy & Planning',
    'Interactive Prototyping',
    'Design System Creation',
    'Usability Testing',
    'Information Architecture',
    'User Journey Mapping',
    'Accessibility Compliance',
  ]

  const services = [
    {
      name: 'UX Research',
      icon: <UsersIcon className="h-6 w-6" />,
      description: 'Deep user insights to inform design decisions and product strategy',
    },
    {
      name: 'Product Strategy',
      icon: <TargetIcon className="h-6 w-6" />,
      description: 'Strategic product planning aligned with business goals and user needs',
    },
    {
      name: 'UI/UX Design',
      icon: <PenToolIcon className="h-6 w-6" />,
      description: 'Beautiful, intuitive interfaces that enhance user experience',
    },
    {
      name: 'Design Systems',
      icon: <LayersIcon className="h-6 w-6" />,
      description: 'Scalable design systems that ensure consistency across products',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Research & Discovery',
      description:
        'We conduct user research, market analysis, and stakeholder interviews to understand your product vision.',
      duration: '2-3 weeks',
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description:
        'We define product strategy, user personas, and create detailed project roadmaps.',
      duration: '1-2 weeks',
    },
    {
      step: '03',
      title: 'Design & Prototyping',
      description:
        'We create wireframes, high-fidelity designs, and interactive prototypes for testing.',
      duration: '3-4 weeks',
    },
    {
      step: '04',
      title: 'Testing & Iteration',
      description:
        'We conduct usability testing and refine the design based on user feedback and data.',
      duration: '2-3 weeks',
    },
  ]

  const portfolioItems = [
    {
      title: 'FinTech Mobile App',
      category: 'Mobile App',
      image: 'https://storage.dev-0af.workers.dev/portfolio-fintech-mobile.png',
      description: 'Complete UX redesign resulting in 40% increase in user engagement',
      deliverables: ['User Research', 'UI/UX Design', 'Prototyping', 'Testing'],
    },
    {
      title: 'Healthcare Dashboard',
      category: 'Web Application',
      image: 'https://storage.dev-0af.workers.dev/portfolio-healthcare-dashboard.png',
      description: 'Complex data visualization platform for medical professionals',
      deliverables: ['Information Architecture', 'Design System', 'Accessibility', 'Testing'],
    },
    {
      title: 'E-learning Platform',
      category: 'EdTech',
      image: 'https://storage.dev-0af.workers.dev/portfolio-elearning-platform.png',
      description: 'Intuitive learning management system for online education',
      deliverables: [
        'User Journey Mapping',
        'Interactive Design',
        'Mobile Design',
        'Usability Testing',
      ],
    },
  ]

  const testimonials = [
    {
      name: 'Alexandra Thompson',
      company: 'InnovateFlow',
      role: 'Product Manager',
      quote:
        'The product design team transformed our complex workflow into an intuitive experience. User satisfaction increased by 65%.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      company: 'HealthTech Solutions',
      role: 'CEO',
      quote:
        'Outstanding design work that perfectly balanced functionality with aesthetics. The user research insights were invaluable.',
      rating: 5,
    },
  ]

  const designPrinciples = [
    {
      title: 'User-Centered Design',
      description: 'Every decision is driven by user needs and validated through research',
      icon: <UsersIcon className="h-8 w-8" />,
    },
    {
      title: 'Data-Driven Decisions',
      description: 'We use analytics and testing to inform design choices',
      icon: <TargetIcon className="h-8 w-8" />,
    },
    {
      title: 'Accessible Design',
      description: 'Products that work for everyone, regardless of ability',
      icon: <SmartphoneIcon className="h-8 w-8" />,
    },
  ]

  const methodologies = [
    {
      name: 'Design Thinking',
      description: 'Human-centered approach to innovation and problem-solving',
    },
    {
      name: 'Agile UX',
      description: 'Iterative design process that adapts to changing requirements',
    },
    {
      name: 'Lean UX',
      description: 'Rapid experimentation and validation of design hypotheses',
    },
    {
      name: 'Design Systems',
      description: 'Scalable and consistent design language across products',
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
                Product Design
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                User-Centered Product Design That Drives Engagement
              </h1>
              <p className="text-lg text-neutral-600 mb-8">
                We create exceptional digital products through research-driven design, strategic
                thinking, and user-centered methodologies. From initial concept to final
                implementation, we ensure your product delivers value to users and achieves business
                objectives.
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
                  src="https://storage.dev-0af.workers.dev/product-design-hero.png"
                  alt="Product Design Showcase"
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Product Design Services</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive design services that cover every aspect of product development.
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
              What&apos;s Included in Our Product Design Service
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Every product design project includes these essential elements for success.
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

      {/* Design Principles */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Design Principles</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The foundational principles that guide every design decision we make.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {designPrinciples.map((principle, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">{principle.icon}</div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{principle.title}</h3>
                <p className="text-neutral-600 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Methodologies Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Design Methodologies We Use</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Proven frameworks and methodologies that ensure successful product outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((methodology, index) => (
              <div key={index} className="bg-white border border-neutral-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">{methodology.name}</h3>
                <p className="text-neutral-600 text-sm">{methodology.description}</p>
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
              A systematic approach to creating products that users love and businesses need.
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Recent Product Design Projects</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Explore some of our latest product design work across different industries.
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
              Hear from product teams that have achieved success with our design expertise.
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
                <blockquote className="text-neutral-800 mb-4">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
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
            Ready to Create an Amazing Product?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Product design projects start from $3,000. Get a custom quote based on your specific
            product requirements and scope.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/start-project">
                Get Custom Quote
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Schedule Design Review</Link>
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
                How long does a product design project take?
              </h3>
              <p className="text-neutral-600">
                Product design projects typically take 6-12 weeks depending on complexity and scope.
                Simple redesigns may be completed faster, while comprehensive product strategy and
                design can take longer.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Do you conduct user research as part of the design process?
              </h3>
              <p className="text-neutral-600">
                Yes! User research is a core component of our design process. We conduct interviews,
                surveys, usability testing, and data analysis to ensure our designs meet real user
                needs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Can you work with our existing design system?
              </h3>
              <p className="text-neutral-600">
                Absolutely. We can work within your existing design system or help you create a new
                one. We&apos;re experienced with various design tools and can adapt to your
                workflow.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">What deliverables do you provide?</h3>
              <p className="text-neutral-600">
                Deliverables include user research reports, wireframes, high-fidelity designs,
                interactive prototypes, design systems, and comprehensive design documentation for
                development teams.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDesign
