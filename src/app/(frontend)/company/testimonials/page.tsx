'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowRightIcon, QuoteIcon, StarIcon } from 'lucide-react'
import Link from 'next/link'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO & Founder',
      image: 'https://storage.dev-0af.workers.dev/testimonial-sarah-johnson.jpg',
      quote:
        'Working with Dino has been transformative for our business. The website design exceeded our expectations and our conversion rate increased by 150% after launch. Their attention to detail and professionalism is unmatched.',
      rating: 5,
      project: 'Website Design & Development',
      result: '150% increase in conversions',
    },
    {
      name: 'Marcus Chen',
      company: 'Bloom Retail',
      role: 'Marketing Director',
      image: 'https://storage.dev-0af.workers.dev/testimonial-marcus-chen.jpg',
      quote:
        'The team delivered exceptional results across multiple services. Our digital presence has never looked better, and the creative design perfectly captures our brand essence. Professional service from start to finish.',
      rating: 5,
      project: 'Brand Identity & Creative Design',
      result: 'Brand recognition up 200%',
    },
    {
      name: 'Jennifer Adams',
      company: 'TechCorp Solutions',
      role: 'Chief Operations Officer',
      image: 'https://storage.dev-0af.workers.dev/testimonial-jennifer-adams.jpg',
      quote:
        'The AI automation solution reduced our processing time by 80% while improving accuracy. ROI was achieved within 6 months. Their AI expertise transformed our entire workflow.',
      rating: 5,
      project: 'Agentic AI Solution',
      result: '80% reduction in processing time',
    },
    {
      name: 'David Thompson',
      company: 'EduTech Solutions',
      role: 'CTO',
      image: 'https://storage.dev-0af.workers.dev/testimonial-david-thompson.jpg',
      quote:
        'The development team delivered a robust platform that scales beautifully. Performance exceeded all our expectations, and the clean code makes maintenance a breeze. Highly recommended.',
      rating: 5,
      project: 'Web Development',
      result: 'Handles 10x more users',
    },
    {
      name: 'Lisa Martinez',
      company: 'FinanceFlow',
      role: 'Product Manager',
      image: 'https://storage.dev-0af.workers.dev/testimonial-lisa-martinez.jpg',
      quote:
        'Clean code, excellent documentation, and delivered on time. Our application handles thousands of concurrent users flawlessly. The team&apos;s expertise in scalable architecture is impressive.',
      rating: 5,
      project: 'Full-Stack Development',
      result: 'Zero downtime since launch',
    },
    {
      name: 'Robert Kim',
      company: 'DataFlow Industries',
      role: 'VP of Technology',
      image: 'https://storage.dev-0af.workers.dev/testimonial-robert-kim.jpg',
      quote:
        'Their AI expertise transformed our data analysis capabilities. We now make decisions based on real-time insights instead of gut feelings. The implementation was smooth and the results speak for themselves.',
      rating: 5,
      project: 'AI Analytics Platform',
      result: 'Data processing speed up 400%',
    },
    {
      name: 'Alexandra Thompson',
      company: 'InnovateFlow',
      role: 'Product Manager',
      image: 'https://storage.dev-0af.workers.dev/testimonial-alexandra-thompson.jpg',
      quote:
        'The product design team transformed our complex workflow into an intuitive experience. User satisfaction increased by 65% and our support tickets dropped significantly. Outstanding work.',
      rating: 5,
      project: 'Product Design & UX',
      result: '65% increase in user satisfaction',
    },
    {
      name: 'Michael Rodriguez',
      company: 'GreenTech Innovations',
      role: 'Founder',
      image: 'https://storage.dev-0af.workers.dev/testimonial-michael-rodriguez.jpg',
      quote:
        'From concept to launch, the team was professional, creative, and delivered beyond expectations. Our new brand identity has helped us stand out in a crowded market and attract high-quality clients.',
      rating: 5,
      project: 'Complete Brand Identity',
      result: '300% increase in leads',
    },
    {
      name: 'Emma Wilson',
      company: 'CreativeStudio Plus',
      role: 'Creative Director',
      image: 'https://storage.dev-0af.workers.dev/testimonial-emma-wilson.jpg',
      quote:
        'The creative design work exceeded our expectations. Every element was thoughtfully crafted and aligned with our vision. The collaborative process was smooth and the final results are stunning.',
      rating: 5,
      project: 'Creative Design & Branding',
      result: 'Won 3 design awards',
    },
  ]

  const stats = [
    { label: 'Happy Clients', value: '100+' },
    { label: 'Projects Completed', value: '200+' },
    { label: 'Average Rating', value: '4.9/5' },
    { label: 'Client Retention', value: '95%' },
  ]

  const industries = [
    'Technology',
    'E-commerce',
    'Healthcare',
    'Finance',
    'Education',
    'Manufacturing',
    'Real Estate',
    'Non-Profit',
    'Startups',
    'Enterprise',
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">
            Client Testimonials
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">What Our Clients Say About Us</h1>
          <p className="text-lg text-neutral-600 mb-8">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about
            working with us and the results we&apos;ve achieved together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/start-project">
                Start Your Project
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Featured Testimonial */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-violet-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <QuoteIcon className="h-12 w-12 text-violet-600 mx-auto mb-6" />
            <blockquote className="text-xl lg:text-2xl font-medium text-neutral-800 mb-6">
              &quot;{testimonials[0].quote}&quot;
            </blockquote>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(testimonials[0].rating)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold">{testimonials[0].name[0]}</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-neutral-900">{testimonials[0].name}</div>
                <div className="text-sm text-neutral-600">
                  {testimonials[0].role} at {testimonials[0].company}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* All Testimonials Grid */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Real results from real clients across various industries and project types.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(1).map((testimonial, index) => (
              <div key={index} className="bg-white border border-neutral-200 rounded-lg p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-neutral-800 mb-4 text-sm leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="border-t pt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-neutral-600">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-neutral-500">Project:</span>
                      <span className="text-xs font-medium">{testimonial.project}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-neutral-500">Result:</span>
                      <span className="text-xs font-medium text-green-600">
                        {testimonial.result}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Industries We Serve */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We&apos;ve worked with clients across diverse industries, delivering tailored
              solutions for each unique market.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-neutral-50 rounded-lg p-4 text-center hover:bg-neutral-100 transition-colors"
              >
                <span className="text-sm font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Review Process */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Commitment to Excellence</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We&apos;re committed to delivering exceptional results and building lasting
              relationships with our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality Focused</h3>
              <p className="text-neutral-600 text-sm">
                We maintain high standards and deliver exceptional quality in every project.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <QuoteIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Client Satisfaction</h3>
              <p className="text-neutral-600 text-sm">
                Our clients&apos; success is our success. We go above and beyond to exceed
                expectations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRightIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Long-term Partnership</h3>
              <p className="text-neutral-600 text-sm">
                We build lasting relationships and provide ongoing support for continued success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* CTA Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Let&apos;s work together to create something amazing. Start your project today and
            experience the difference.
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

export default Testimonials
