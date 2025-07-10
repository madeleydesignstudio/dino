'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowRightIcon, MailIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react'
import Link from 'next/link'

const Questions = () => {
  const faqCategories = [
    {
      category: 'General',
      questions: [
        {
          question: 'What services do you offer?',
          answer:
            'We offer a comprehensive range of digital services including website design, website development, art & creative design, product design, and agentic AI solutions. Each service is tailored to meet your specific business needs and goals.',
        },
        {
          question: 'How long does a typical project take?',
          answer:
            'Project timelines vary depending on scope and complexity. Simple websites typically take 4-6 weeks, while complex applications can take 12-20 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the process.',
        },
        {
          question: 'What is your pricing structure?',
          answer:
            'Our pricing depends on project scope, complexity, and timeline. We offer transparent, fixed-price quotes with no hidden fees. Contact us for a custom quote based on your specific requirements.',
        },
        {
          question: 'Do you work with businesses of all sizes?',
          answer:
            'Yes! We work with startups, small businesses, and large enterprises. Our approach is scalable and we tailor our services to fit your budget and business stage.',
        },
      ],
    },
    {
      category: 'Process & Timeline',
      questions: [
        {
          question: 'What is your design and development process?',
          answer:
            'Our process consists of four main phases: Discovery (understanding your needs), Strategy (planning and roadmap), Execution (design and development), and Launch (deployment and optimization). We maintain clear communication throughout each phase.',
        },
        {
          question: 'How do you handle project revisions?',
          answer:
            'We include revision rounds in all our packages. The number of revisions depends on the project scope, but we typically include 2-3 rounds of revisions. Additional revisions can be accommodated with transparent pricing.',
        },
        {
          question: 'What happens if my project needs change mid-way?',
          answer:
            'We understand that requirements can evolve. We&apos;re flexible and can accommodate changes with clear communication about timeline and cost implications. We&apos;ll work with you to find the best solution.',
        },
        {
          question: 'How do you ensure projects stay on schedule?',
          answer:
            'We use project management tools, regular check-ins, and milestone-based delivery. You&apos;ll receive regular updates and have access to project progress through our client portal.',
        },
      ],
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'What technologies do you use?',
          answer:
            'We use modern, industry-standard technologies including React, Next.js, TypeScript, Node.js, PostgreSQL, and various cloud platforms. We choose the best tech stack for each project based on your specific needs.',
        },
        {
          question: 'Do you provide hosting and maintenance?',
          answer:
            'Yes! We offer managed hosting solutions and ongoing maintenance packages. This includes security updates, performance monitoring, backups, and technical support to keep your project running smoothly.',
        },
        {
          question: 'Can you integrate with our existing systems?',
          answer:
            'Absolutely. We&apos;re experienced in API integrations and can connect your new project with existing databases, CRMs, payment systems, and third-party services.',
        },
        {
          question: 'How do you handle data security and privacy?',
          answer:
            'We implement enterprise-grade security measures including SSL certificates, data encryption, secure hosting, and follow industry best practices for data protection and privacy compliance.',
        },
      ],
    },
    {
      category: 'Collaboration',
      questions: [
        {
          question: 'How do you communicate during projects?',
          answer:
            'We use multiple communication channels including email, video calls, project management tools, and a dedicated client portal. You&apos;ll have direct access to your project team and regular status updates.',
        },
        {
          question: 'Can you work with our existing team?',
          answer:
            'Yes! We&apos;re experienced in collaborating with existing teams and can integrate with your current workflows. We adapt our process to complement your team&apos;s existing tools and procedures.',
        },
        {
          question: 'Do you provide training after project completion?',
          answer:
            'Yes, we provide comprehensive training sessions to ensure your team can effectively use and maintain the delivered solution. We also provide documentation and ongoing support.',
        },
        {
          question: 'What if we need support after launch?',
          answer:
            'We offer various support packages including bug fixes, feature updates, security monitoring, and technical support. We&apos;re committed to your long-term success.',
        },
      ],
    },
  ]

  const supportOptions = [
    {
      title: 'Live Chat',
      description: 'Get instant answers to your questions',
      icon: <MessageCircleIcon className="h-6 w-6" />,
      action: 'Start Chat',
      href: '#',
    },
    {
      title: 'Schedule a Call',
      description: 'Book a consultation with our team',
      icon: <PhoneIcon className="h-6 w-6" />,
      action: 'Book Call',
      href: '/contact',
    },
    {
      title: 'Email Support',
      description: 'Send us your detailed questions',
      icon: <MailIcon className="h-6 w-6" />,
      action: 'Send Email',
      href: 'mailto:hello@dino.com',
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">
            Questions & Support
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-neutral-600 mb-8">
            Find answers to common questions about our services, process, and how we work.
            Can&apos;t find what you&apos;re looking for? We&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/start-project">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* FAQ Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Support Options */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Need More Help?</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Still have questions? Choose the support option that works best for you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-neutral-50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-neutral-700">{option.icon}</div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
                <p className="text-neutral-600 text-sm mb-4">{option.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={option.href}>{option.action}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Popular Resources */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Popular Resources</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Explore our most helpful resources and guides.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href="/services"
              className="group block bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-lg mb-2 group-hover:text-violet-600">
                Our Services
              </h3>
              <p className="text-neutral-600 text-sm">
                Explore our complete range of digital services and solutions.
              </p>
            </Link>
            <Link
              href="/case-studies"
              className="group block bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-lg mb-2 group-hover:text-violet-600">
                Case Studies
              </h3>
              <p className="text-neutral-600 text-sm">
                See examples of our work and the results we&apos;ve achieved for clients.
              </p>
            </Link>
            <Link
              href="/company/pricing"
              className="group block bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-lg mb-2 group-hover:text-violet-600">
                Pricing Guide
              </h3>
              <p className="text-neutral-600 text-sm">
                Learn about our transparent pricing structure and get estimates.
              </p>
            </Link>
            <Link
              href="/company/blog"
              className="group block bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-lg mb-2 group-hover:text-violet-600">
                Blog & Insights
              </h3>
              <p className="text-neutral-600 text-sm">
                Read our latest articles on design, development, and digital trends.
              </p>
            </Link>
            <Link
              href="/company/careers"
              className="group block bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-lg mb-2 group-hover:text-violet-600">Careers</h3>
              <p className="text-neutral-600 text-sm">
                Join our team and work on exciting projects with talented people.
              </p>
            </Link>
            <Link
              href="/company/testimonials"
              className="group block bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-lg mb-2 group-hover:text-violet-600">
                Testimonials
              </h3>
              <p className="text-neutral-600 text-sm">
                Read what our clients say about working with us.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Separator />

      {/* CTA Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-neutral-600 mb-8">
            Have a project in mind? Let&apos;s discuss how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/start-project">
                Start Your Project
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Questions
