'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRightIcon,
  CheckIcon,
  StarIcon,
  BotIcon,
  BrainIcon,
  ZapIcon,
  ShieldIcon,
  BarChart3Icon,
  CogIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const AgenticAI = () => {
  const features = [
    'Custom AI Agent Development',
    'Process Automation',
    'Natural Language Processing',
    'Machine Learning Integration',
    'Data Analytics & Insights',
    'API & System Integration',
    'Intelligent Decision Making',
    'Continuous Learning Systems',
  ]

  const services = [
    {
      name: 'AI Process Automation',
      icon: <CogIcon className="h-6 w-6" />,
      description: 'Automate repetitive tasks and workflows with intelligent AI agents',
    },
    {
      name: 'Intelligent Analytics',
      icon: <BarChart3Icon className="h-6 w-6" />,
      description: 'Transform data into actionable insights with AI-powered analytics',
    },
    {
      name: 'Custom AI Models',
      icon: <BrainIcon className="h-6 w-6" />,
      description: 'Develop specialized AI models tailored to your specific business needs',
    },
    {
      name: 'AI Integration',
      icon: <ZapIcon className="h-6 w-6" />,
      description: 'Seamlessly integrate AI capabilities into your existing systems',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'AI Strategy & Assessment',
      description:
        'We analyze your business processes to identify optimal AI implementation opportunities.',
      duration: '1-2 weeks',
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'We architect custom AI solutions that align with your specific requirements.',
      duration: '2-3 weeks',
    },
    {
      step: '03',
      title: 'AI Development',
      description:
        'We build and train your AI agents using state-of-the-art machine learning technologies.',
      duration: '4-6 weeks',
    },
    {
      step: '04',
      title: 'Integration & Optimization',
      description:
        'We deploy your AI solution and continuously optimize its performance for maximum impact.',
      duration: '2-3 weeks',
    },
  ]

  const portfolioItems = [
    {
      title: 'Customer Service AI Agent',
      category: 'Customer Support',
      image: 'https://storage.dev-0af.workers.dev/portfolio-ai-customer-service.png',
      description: 'Intelligent chatbot reducing support tickets by 70%',
      deliverables: ['Natural Language Processing', 'Multi-channel Support', 'Analytics Dashboard'],
    },
    {
      title: 'Sales Intelligence Platform',
      category: 'Sales & Marketing',
      image: 'https://storage.dev-0af.workers.dev/portfolio-ai-sales.png',
      description: 'AI-powered lead scoring and sales forecasting system',
      deliverables: ['Predictive Analytics', 'Lead Scoring', 'Sales Automation'],
    },
    {
      title: 'Document Processing AI',
      category: 'Operations',
      image: 'https://storage.dev-0af.workers.dev/portfolio-ai-documents.png',
      description: 'Automated document extraction and classification system',
      deliverables: ['OCR Technology', 'Data Extraction', 'Workflow Automation'],
    },
  ]

  const testimonials = [
    {
      name: 'Jennifer Adams',
      company: 'TechCorp Solutions',
      role: 'Chief Operations Officer',
      quote:
        'The AI automation solution reduced our processing time by 80% while improving accuracy. ROI was achieved within 6 months.',
      rating: 5,
    },
    {
      name: 'Robert Kim',
      company: 'DataFlow Industries',
      role: 'VP of Technology',
      quote:
        'Their AI expertise transformed our data analysis capabilities. We now make decisions based on real-time insights.',
      rating: 5,
    },
  ]

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Intelligent chatbots and support automation',
      benefits: ['24/7 Availability', 'Instant Response', 'Cost Reduction'],
    },
    {
      title: 'Sales & Marketing',
      description: 'Lead scoring, forecasting, and personalization',
      benefits: ['Higher Conversion', 'Better Targeting', 'Predictive Insights'],
    },
    {
      title: 'Operations',
      description: 'Process automation and optimization',
      benefits: ['Efficiency Gains', 'Error Reduction', 'Resource Optimization'],
    },
    {
      title: 'Data Analytics',
      description: 'Advanced analytics and business intelligence',
      benefits: ['Real-time Insights', 'Pattern Recognition', 'Predictive Analysis'],
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
                Agentic AI
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Intelligent AI Solutions That Transform Your Business
              </h1>
              <p className="text-lg text-neutral-600 mb-8">
                Harness the power of artificial intelligence to automate processes, enhance
                decision-making, and unlock new possibilities for your business. Our custom AI
                agents work 24/7 to optimize your operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/start-project">
                    Start Your AI Project
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/case-studies">View AI Solutions</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="https://storage.dev-0af.workers.dev/agentic-ai-hero.png"
                  alt="Agentic AI Solutions Showcase"
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our AI Services</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive AI solutions designed to solve real business challenges.
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
              What's Included in Our AI Solutions
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Every AI project includes these essential components for successful implementation.
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

      {/* AI Benefits */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Our AI Solutions</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Advanced AI technology designed for real-world business applications.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BrainIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Intelligent & Adaptive</h3>
              <p className="text-neutral-600 text-sm">
                AI agents that learn and improve over time, adapting to changing business needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure & Reliable</h3>
              <p className="text-neutral-600 text-sm">
                Enterprise-grade security with data privacy and compliance built-in.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ZapIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast & Scalable</h3>
              <p className="text-neutral-600 text-sm">
                High-performance AI solutions that scale with your business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Use Cases Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">AI Use Cases</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Discover how AI can transform different aspects of your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white border border-neutral-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">{useCase.title}</h3>
                <p className="text-neutral-600 text-sm mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-xs text-neutral-600">{benefit}</span>
                    </div>
                  ))}
                </div>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our AI Development Process</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A systematic approach to implementing AI solutions that deliver measurable results.
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Recent AI Projects</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Explore some of our latest AI implementations across different industries.
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
              <Link href="/case-studies">View All AI Projects</Link>
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
              Hear from businesses that have transformed their operations with our AI solutions.
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
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            AI solution projects start from $4,000. Get a custom quote based on your specific AI
            requirements and implementation scope.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/start-project">
                Get AI Consultation
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule AI Assessment</Link>
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
                How long does an AI implementation take?
              </h3>
              <p className="text-neutral-600">
                AI projects typically take 6-12 weeks depending on complexity. Simple automation
                projects may be completed faster, while complex custom AI models require more time.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                What data do you need to build AI solutions?
              </h3>
              <p className="text-neutral-600">
                We work with your existing data sources. The amount and quality of data needed
                depends on the specific AI application. We can also help you identify and collect
                the right data.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                How do you ensure AI solutions are secure?
              </h3>
              <p className="text-neutral-600">
                We implement enterprise-grade security including data encryption, access controls,
                and compliance with industry standards. All AI models can be deployed on-premises or
                in secure cloud environments.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Do you provide ongoing AI model maintenance?
              </h3>
              <p className="text-neutral-600">
                Yes! AI models require continuous monitoring and updates. We offer maintenance
                packages that include performance monitoring, model retraining, and feature updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AgenticAI
