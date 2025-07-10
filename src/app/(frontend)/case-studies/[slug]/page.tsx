import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  CalendarIcon,
  ClockIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { getCaseStudyBySlug, getAllCaseStudies } from '../data/case-studies'

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies()
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudyBySlug(params.slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="w-full">
      {/* Back Navigation */}
      <div className="px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Case Studies
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                {caseStudy.category}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{caseStudy.title}</h1>
              <p className="text-lg text-neutral-600 mb-8">{caseStudy.subtitle}</p>

              {/* Project Details */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CalendarIcon className="h-4 w-4 text-neutral-500" />
                    <span className="text-sm text-neutral-500">Year</span>
                  </div>
                  <div className="font-medium">{caseStudy.year}</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <ClockIcon className="h-4 w-4 text-neutral-500" />
                    <span className="text-sm text-neutral-500">Duration</span>
                  </div>
                  <div className="font-medium">{caseStudy.duration}</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {caseStudy.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* CTA */}
              {caseStudy.liveUrl && (
                <Button asChild>
                  <Link href={caseStudy.liveUrl} target="_blank" rel="noopener noreferrer">
                    View Live Project
                    <ExternalLinkIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>

            <div className="relative">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src={caseStudy.images.hero}
                  alt={caseStudy.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Project Overview */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
          <p className="text-neutral-600 leading-relaxed text-lg">{caseStudy.description}</p>
        </div>
      </section>

      <Separator />

      {/* Challenge & Solution */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
              <p className="text-neutral-600 leading-relaxed">{caseStudy.challenge}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Solution</h3>
              <p className="text-neutral-600 leading-relaxed">{caseStudy.solution}</p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Project Gallery */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Project Gallery</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudy.images.gallery.map((image, index) => (
              <div key={index} className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${caseStudy.title} - Gallery ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Results */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Results & Impact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="bg-neutral-50 rounded-lg p-6">
                <div className="text-lg font-semibold text-neutral-900">{result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <>
          <Separator />
          <section className="px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-xl italic text-neutral-800 mb-6">
                &quot;{caseStudy.testimonial.quote}&quot;
              </blockquote>
              <div className="text-neutral-600">
                <div className="font-semibold">{caseStudy.testimonial.author}</div>
                <div className="text-sm">
                  {caseStudy.testimonial.role} at {caseStudy.testimonial.company}
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Next Project */}
      {caseStudy.nextProject && (
        <>
          <Separator />
          <section className="px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Next Project</h2>
              <Link
                href={`/case-studies/${caseStudy.nextProject.slug}`}
                className="group block bg-neutral-50 rounded-lg p-6 hover:bg-neutral-100 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-neutral-700">
                      {caseStudy.nextProject.title}
                    </h3>
                    <div className="flex items-center gap-2 text-neutral-600">
                      <span>View Project</span>
                      <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  <div className="w-20 h-20 relative rounded-lg overflow-hidden">
                    <Image
                      src={caseStudy.nextProject.image}
                      alt={caseStudy.nextProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </>
      )}

      <Separator />

      {/* CTA Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-neutral-600 mb-8">
            Let&apos;s discuss how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/start-project">
                Start Your Project
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/case-studies">View More Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
