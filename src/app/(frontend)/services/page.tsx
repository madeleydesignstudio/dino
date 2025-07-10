'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRightIcon,
  PaletteIcon,
  CodeIcon,
  MonitorIcon,
  BrushIcon,
  BotIcon,
  BoxIcon,
  StarIcon,
  CheckIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const Services = () => {
  const services = [
    {
      title: 'Website Design',
      description:
        'Beautiful, user-focused websites that convert visitors into customers with stunning visual design and optimal user experience.',
      icon: <MonitorIcon className="h-8 w-8" />,
      features: [
        'Custom UI/UX Design',
        'Mobile-First Approach',
        'Brand Integration',
        'User Testing',
      ],
      startingPrice: '$2,500',
      duration: '4-6 weeks',
      href: '/services/website-design',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Website Development',
      description:
        'High-performance web applications built with cutting-edge technologies that scale with your business growth.',
      icon: <CodeIcon className="h-8 w-8" />,
      features: [
        'Custom Development',
        'Modern Tech Stack',
        'API Integration',
        'Performance Optimization',
      ],
      startingPrice: '$5,000',
      duration: '6-12 weeks',
      href: '/services/website-development',
      color: 'bg-green-50 text-green-600',
    },
    {
      title: 'Art & Creative Design',
      description:
        'Complete visual identity systems and creative assets that capture your brand essence and tell your story.',
      icon: <PaletteIcon className="h-8 w-8" />,
      features: ['Brand Identity', 'Digital Illustrations', 'Print Design', 'Creative Direction'],
      startingPrice: '$1,500',
      duration: '3-5 weeks',
      href: '/services/art-creative-design',
      color: 'bg-pink-50 text-pink-600',
    },
    {
      title: 'Product Design',
      description:
        'User-centered product design that creates intuitive experiences and drives engagement across digital platforms.',
      icon: <BoxIcon className="h-8 w-8" />,
      features: ['UX Research', 'Product Strategy', 'Prototyping', 'Design Systems'],
      startingPrice: '$3,000',
      duration: '4-8 weeks',
      href: '/services/product-design',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      title: 'Agentic AI',
      description:
        'Intelligent AI solutions that automate processes, enhance decision-making, and transform your business operations.',
      icon: <BotIcon className="h-8 w-8" />,
      features: ['AI Integration', 'Process Automation', 'Custom AI Models', 'Data Analytics'],
      startingPrice: '$4,000',
      duration: '6-10 weeks',
      href: '/services/agentic-ai',
      color: 'bg-orange-50 text-orange-600',
    },
  ]

  const benefits = [
    {
      title: 'Full-Service Approach',
      description:
        'From initial concept to final launch, we handle every aspect of your digital project.',
      icon: <CheckIcon className="h-6 w-6" />,
    },
    {
      title: 'Expert Team',
      description:
        'Our skilled designers and developers bring years of experience to every project.',
      icon: <CheckIcon className="h-6 w-6" />,
    },
    {
      title: 'Modern Technologies',
      description: 'We use the latest tools and frameworks to ensure your project stays current.',
      icon: <CheckIcon className="h-6 w-6" />,
    },
    {
      title: 'Proven Results',
      description: 'Our portfolio demonstrates successful projects across diverse industries.',
      icon: <CheckIcon className="h-6 w-6" />,
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      quote:
        'The team delivered exceptional results across multiple services. Our digital presence has never looked better.',
      rating: 5,
      image: 'https://storage.dev-0af.workers.dev/testimonial-sarah.jpg',
    },
    {
      name: 'Marcus Chen',
      company: 'Creative Solutions',
      role: 'Marketing Director',
      quote:
        'Professional service from start to finish. They understood our vision and brought it to life perfectly.',
      rating: 5,
      image: 'https://storage.dev-0af.workers.dev/testimonial-marcus.jpg',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description:
        'We learn about your business, goals, and challenges to create the perfect solution.',
    },
    {
      step: '02',
      title: 'Strategy',
      description:
        'We develop a comprehensive plan tailored to your specific needs and objectives.',
    },
    {
      step: '03',
      title: 'Execution',
      description:
        'Our expert team brings your vision to life with meticulous attention to detail.',
    },
    {
      step: '04',
      title: 'Launch',
      description: 'We ensure a smooth launch and provide ongoing support for continued success.',
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-4 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Our Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Complete Digital Solutions for Modern Businesses
            </h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-8">
              From stunning website design to intelligent AI solutions, we provide comprehensive
              digital services that transform your business and drive growth. Partner with us to
              bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/start-project">
                  Start Your Project
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/company/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Services Grid */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of digital services designed to meet your business
              needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  {service.icon}
                </div>
                <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-4">{service.description}</p>

                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-neutral-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-sm text-neutral-600">Starting from</div>
                    <div className="font-semibold text-lg">{service.startingPrice}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-neutral-600">Timeline</div>
                    <div className="font-semibold">{service.duration}</div>
                  </div>
                </div>

                <Button asChild className="w-full">
                  <Link href={service.href}>
                    Learn More
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Benefits Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Our Services</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results for
              every project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-neutral-600 text-sm">{benefit.description}</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-neutral-900 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-neutral-600 text-sm">{step.description}</p>
              </div>
            ))}
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
              Hear from businesses that have transformed their digital presence with our services.
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
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-neutral-600">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* CTA Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-neutral-600 mb-8">
            Let's discuss your project and create a custom solution that meets your specific needs
            and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/start-project">
                Start Your Project
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule Free Consultation</Link>
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
                How do you determine which services I need?
              </h3>
              <p className="text-neutral-600">
                We start with a comprehensive consultation to understand your business goals, target
                audience, and current challenges. Based on this, we recommend the most effective
                combination of services.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Can you handle multiple services for one project?
              </h3>
              <p className="text-neutral-600">
                Absolutely! We often combine services like website design and development, or
                creative design and product design for cohesive, integrated solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                What's included in your project management?
              </h3>
              <p className="text-neutral-600">
                Every project includes dedicated project management, regular progress updates,
                milestone reviews, and clear communication throughout the entire process.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Do you offer ongoing support after project completion?
              </h3>
              <p className="text-neutral-600">
                Yes! We provide various support and maintenance packages to ensure your digital
                assets continue to perform optimally and stay current with industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
