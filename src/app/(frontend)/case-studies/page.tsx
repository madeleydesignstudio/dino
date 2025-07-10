'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon, ExternalLinkIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { getAllCaseStudies } from './data/case-studies'

const CaseStudies = () => {
  const caseStudies = getAllCaseStudies()

  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '35+' },
    { label: 'Years of Experience', value: '8+' },
    { label: 'Industries Served', value: '15+' },
  ]

  return (
    <div className="w-full">
      {/* Interactive Gallery Section */}
      <section className="relative h-[calc(100vh-40px)] overflow-hidden">
        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center z-10 bg-white/90 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-4">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">Our Work</h1>
            <p className="text-lg text-neutral-600 mb-8">
              Explore our portfolio of successful projects across design, development, and digital
              innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
              <Button size="lg" asChild>
                <Link href="#projects">
                  View All Projects
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/start-project">Start Your Project</Link>
              </Button>
            </div>
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

      {/* Projects Section */}
      <section id="projects" className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Discover how we&apos;ve helped businesses transform their digital presence and achieve
              their goals.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((project, index) => (
              <div key={project.slug} className="group">
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <Badge variant="outline" className="mb-4">
                      {project.category}
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-lg text-neutral-600 mb-6">{project.subtitle}</p>
                    <p className="text-neutral-600 mb-6">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="space-y-2 mb-8">
                      {project.results.slice(0, 2).map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-sm text-neutral-600">{result}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild>
                        <Link href={`/case-studies/${project.slug}`}>
                          View Case Study
                          <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      {project.liveUrl && (
                        <Button variant="outline" asChild>
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            Live Project
                            <ExternalLinkIcon className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <Link href={`/case-studies/${project.slug}`} className="block">
                      <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                        <Image
                          src={project.images.hero}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </Link>
                  </div>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Every project follows our proven methodology to ensure exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description:
                  'We understand your business, goals, and challenges through comprehensive research and analysis.',
              },
              {
                step: '02',
                title: 'Strategy',
                description:
                  'We develop a strategic plan that aligns with your objectives and defines the project roadmap.',
              },
              {
                step: '03',
                title: 'Design & Build',
                description:
                  'We bring your vision to life with thoughtful design and robust development practices.',
              },
              {
                step: '04',
                title: 'Launch & Optimize',
                description:
                  'We ensure a successful launch and provide ongoing optimization for continued success.',
              },
            ].map((step, index) => (
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

      {/* CTA Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-neutral-600 mb-8">
            Let&apos;s discuss how we can help transform your business with exceptional design and
            development.
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

      <Separator />

      {/* FAQ Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">What types of projects do you work on?</h3>
              <p className="text-neutral-600">
                We work on a wide range of projects including web design, web development, mobile
                apps, brand identity, and digital product design. Our expertise spans across
                multiple industries and project sizes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">How long does a typical project take?</h3>
              <p className="text-neutral-600">
                Project timelines vary depending on scope and complexity. Simple websites typically
                take 4-6 weeks, while complex applications can take 12-20 weeks. We provide detailed
                timelines during our initial consultation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Do you provide ongoing support after project completion?
              </h3>
              <p className="text-neutral-600">
                Yes! We offer various maintenance and support packages to ensure your project
                continues to perform optimally. This includes updates, security monitoring, and
                feature enhancements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Can you work with our existing team or systems?
              </h3>
              <p className="text-neutral-600">
                Absolutely. We&apos;re experienced in collaborating with existing teams and
                integrating with current systems. We adapt our workflow to complement your existing
                processes and tools.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
