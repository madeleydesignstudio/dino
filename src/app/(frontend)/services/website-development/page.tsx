'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRightIcon,
  CheckIcon,
  StarIcon,
  CodeIcon,
  DatabaseIcon,
  ShieldIcon,
  ZapIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const WebsiteDevelopment = () => {
  const features = [
    'Custom Web Applications',
    'Responsive Development',
    'Performance Optimization',
    'SEO Implementation',
    'Database Integration',
    'API Development',
    'Security Best Practices',
    'Content Management Systems',
  ]

  const technologies = [
    {
      name: 'Next.js',
      icon: <CodeIcon className="h-6 w-6" />,
      description: 'React framework for production-grade applications',
    },
    {
      name: 'TypeScript',
      icon: <CodeIcon className="h-6 w-6" />,
      description: 'Type-safe JavaScript development',
    },
    {
      name: 'Tailwind CSS',
      icon: <CodeIcon className="h-6 w-6" />,
      description: 'Utility-first CSS framework',
    },
    {
      name: 'Node.js',
      icon: <DatabaseIcon className="h-6 w-6" />,
      description: 'Server-side JavaScript runtime',
    },
    {
      name: 'PostgreSQL',
      icon: <DatabaseIcon className="h-6 w-6" />,
      description: 'Advanced relational database',
    },
    {
      name: 'Security',
      icon: <ShieldIcon className="h-6 w-6" />,
      description: 'Enterprise-grade security measures',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Technical Planning',
      description:
        'We analyze requirements and create a detailed technical architecture plan for your project.',
      duration: '1 week',
    },
    {
      step: '02',
      title: 'Development Setup',
      description: 'We set up development environments, databases, and establish coding standards.',
      duration: '2-3 days',
    },
    {
      step: '03',
      title: 'Core Development',
      description: 'We build your application with clean, scalable code using modern technologies.',
      duration: '3-6 weeks',
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description:
        'We thoroughly test, optimize performance, and deploy your application securely.',
      duration: '1-2 weeks',
    },
  ]

  const portfolioItems = [
    {
      title: 'E-learning Platform',
      category: 'Education',
      image: 'https://storage.dev-0af.workers.dev/portfolio-elearning.png',
      description: 'Custom LMS with video streaming and progress tracking',
      tech: ['Next.js', 'PostgreSQL', 'Stripe'],
    },
    {
      title: 'Fintech Dashboard',
      category: 'Finance',
      image: 'https://storage.dev-0af.workers.dev/portfolio-fintech.png',
      description: 'Real-time financial data platform with advanced analytics',
      tech: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Healthcare Portal',
      category: 'Healthcare',
      image: 'https://storage.dev-0af.workers.dev/portfolio-healthcare.png',
      description: 'Patient management system with HIPAA compliance',
      tech: ['Next.js', 'PostgreSQL', 'AWS'],
    },
  ]

  const testimonials = [
    {
      name: 'David Thompson',
      company: 'EduTech Solutions',
      role: 'CTO',
      quote:
        'The development team delivered a robust platform that scales beautifully. Performance exceeded all our expectations.',
      rating: 5,
    },
    {
      name: 'Lisa Martinez',
      company: 'FinanceFlow',
      role: 'Product Manager',
      quote:
        'Clean code, excellent documentation, and delivered on time. Our application handles thousands of concurrent users flawlessly.',
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
                Website Development
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                High-Performance Web Applications That Scale
              </h1>
              <p className="text-lg text-neutral-600 mb-8">
                We build lightning-fast, secure web applications using cutting-edge technologies.
                From simple websites to complex platforms, we deliver solutions that grow with your
                business and provide exceptional user experiences.
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
                  src="https://storage.dev-0af.workers.dev/website-development-hero.png"
                  alt="Website Development Showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Technologies Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Modern Technologies We Use</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We leverage the latest and most reliable technologies to build your web applications.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-neutral-50 rounded-lg p-6 text-center">
                <div className="text-neutral-700 mb-4 flex justify-center">{tech.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{tech.name}</h3>
                <p className="text-neutral-600 text-sm">{tech.description}</p>
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
              What&apos;s Included in Our Development Service
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Every development project includes these essential elements for success.
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

      {/* Performance Benefits */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Built for Performance</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We prioritize speed, security, and scalability in every line of code.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ZapIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Lightning Fast</h3>
              <p className="text-neutral-600 text-sm">
                Optimized for speed with 95+ PageSpeed scores and sub-second load times.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure by Default</h3>
              <p className="text-neutral-600 text-sm">
                Enterprise-grade security with SSL, CSRF protection, and data encryption.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DatabaseIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Scalable Architecture</h3>
              <p className="text-neutral-600 text-sm">
                Built to handle growth from hundreds to millions of users seamlessly.
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A systematic approach to building robust, maintainable applications.
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Recent Development Projects</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Explore some of our latest web development projects across different industries.
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
                  {item.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
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
              Hear from businesses that have transformed their operations with our development
              expertise.
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-lg text-neutral-600 mb-8">
            Web development projects start from $5,000. Get a custom quote based on your specific
            requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/start-project">
                Get Custom Quote
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Schedule Consultation</Link>
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
                How long does a web development project take?
              </h3>
              <p className="text-neutral-600">
                Development timelines vary based on complexity. Simple websites take 4-6 weeks,
                while complex applications can take 12-16 weeks or more.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Do you provide hosting and maintenance?
              </h3>
              <p className="text-neutral-600">
                Yes! We offer managed hosting solutions and ongoing maintenance packages to ensure
                your application stays secure, updated, and performing optimally.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Can you integrate with existing systems?
              </h3>
              <p className="text-neutral-600">
                Absolutely. We specialize in API integrations and can connect your new application
                with existing databases, CRMs, payment systems, and third-party services.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">What about mobile responsiveness?</h3>
              <p className="text-neutral-600">
                All our applications are built with responsive design principles, ensuring they work
                perfectly across desktop, tablet, and mobile devices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WebsiteDevelopment
