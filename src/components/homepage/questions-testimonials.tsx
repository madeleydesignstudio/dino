import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const Questions = () => {
  const testimonials = [
    {
      quote:
        "Working with Kieran and MONOLIF was a complete joy. Not only did he bring to your startup an incredible eye with impeccable taste, but also an uncompromising work ethic that went well beyond the brief. In short, he's an indispensable team member from start to finish. Can't wait to work with him again.",
      author: 'Jack Burke',
      title: 'Founder & CEO of RINkL',
    },
    {
      quote:
        'The attention to detail and creative vision exceeded our expectations. Every aspect of the project was handled with professionalism and care, resulting in a website that truly represents our brand.',
      author: 'Sarah Chen',
      title: 'Co-founder of TechFlow',
    },
    {
      quote:
        "From concept to launch, the process was seamless. The team's ability to translate our ideas into a stunning digital experience was remarkable. Highly recommend for any startup looking to make an impact.",
      author: 'Michael Torres',
      title: 'CEO of Nexus Labs',
    },
    {
      quote:
        'Outstanding work and exceptional communication throughout the project. The final result was exactly what we envisioned and more. A true partner in our digital transformation.',
      author: 'Emily Rodriguez',
      title: 'Marketing Director at Evolve',
    },
  ]

  return (
    <div className="mx-4 flex flex-col gap-6 lg:gap-4">
      {/* Header Section - Mobile Stacked, Desktop Side by Side */}
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-4">
        <h2 className="text-xl lg:w-1/3 lg:text-2xl">
          Questions <br /> & Testimonials
        </h2>
        <p className="text-base text-neutral-500 lg:w-2/3 lg:text-xl">
          Starting a web design project often comes with plenty of questions — and rightly so.
          It&apos;s a big move for any startup. That&apos;s why we prioritise clarity and openness,
          giving you all the details you need to feel confident and make the right choice for your
          business.
        </p>
      </div>

      {/* Content Section - Mobile Stacked, Desktop Side by Side */}
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-4">
        {/* Testimonials - Mobile: Top, Desktop: Left */}
        <div className="order-2 w-full lg:order-1 lg:w-1/3">
          {/* Mobile Testimonials - Horizontal Scroll */}
          <div className="block lg:hidden">
            <h3 className="mb-3 text-sm font-medium text-neutral-900 xs:mb-4">
              What Our Clients Say
            </h3>
            <div className="flex gap-2 overflow-x-auto pb-4 xs:gap-4">
              {testimonials.slice(0, 2).map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-[240px] rounded-lg border border-neutral-200 bg-neutral-50 p-3 xs:min-w-[280px] xs:p-4"
                >
                  <p className="mb-2 text-xs leading-tight text-neutral-600 xs:mb-3 xs:leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="text-xs text-neutral-400">
                    <div className="font-medium">{testimonial.author}</div>
                    <div>{testimonial.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Testimonials - Two Column Layout */}
          <div className="hidden lg:flex lg:items-end lg:gap-4 lg:text-[8px] lg:text-neutral-400">
            <div className="flex flex-col gap-4">
              {testimonials.slice(0, 2).map((testimonial, index) => (
                <div key={index} className="leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo; {testimonial.author} {testimonial.title}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {testimonials.slice(2, 4).map((testimonial, index) => (
                <div key={index} className="leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo; {testimonial.author} {testimonial.title}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section - Mobile: Bottom, Desktop: Right */}
        <div className="order-1 w-full lg:order-2 lg:w-2/3">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 lg:mb-8 lg:text-3xl">
            You Asked, We Answered
          </h2>

          <Accordion className="w-full" collapsible type="single">
            <AccordionItem className="border-b border-gray-200" value="timeline">
              <AccordionTrigger className="py-3 text-left text-sm font-medium text-gray-900 hover:no-underline xs:py-4 xs:text-base lg:py-6 lg:text-lg">
                What&apos;s the typical timeline for designing and building my website?
              </AccordionTrigger>
              <AccordionContent className="pb-3 text-xs text-gray-600 xs:pb-4 xs:text-sm lg:pb-6 lg:text-base">
                <p className="leading-relaxed">
                  Most projects take 4-8 weeks from start to launch, depending on complexity and
                  scope. Here&apos;s our typical timeline:
                </p>
                <ul className="ml-4 mt-4 space-y-2">
                  <li>
                    • <strong>Week 1-2:</strong> Discovery, strategy, and wireframing
                  </li>
                  <li>
                    • <strong>Week 3-4:</strong> Design concepts and revisions
                  </li>
                  <li>
                    • <strong>Week 5-6:</strong> Development and content integration
                  </li>
                  <li>
                    • <strong>Week 7-8:</strong> Testing, refinements, and launch
                  </li>
                </ul>
                <p className="mt-4">
                  We&apos;ll provide a detailed timeline during our initial consultation based on
                  your specific requirements.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem className="border-b border-gray-200" value="journey">
              <AccordionTrigger className="py-3 text-left text-sm font-medium text-gray-900 hover:no-underline xs:py-4 xs:text-base lg:py-6 lg:text-lg">
                What&apos;s the journey from idea to finished website?
              </AccordionTrigger>
              <AccordionContent className="pb-3 text-xs text-gray-600 xs:pb-4 xs:text-sm lg:pb-6 lg:text-base">
                <p className="mb-4 leading-relaxed">
                  We follow a proven process that turns your vision into a powerful website:
                </p>
                <div className="space-y-3 lg:space-y-4">
                  <div>
                    <strong>1. Discovery & Strategy</strong> - We dive deep into your business
                    goals, target audience, and competitive landscape.
                  </div>
                  <div>
                    <strong>2. Wireframing & Planning</strong> - We map out the user journey and
                    site structure before any design begins.
                  </div>
                  <div>
                    <strong>3. Design & Prototyping</strong> - We create stunning designs that
                    reflect your brand and engage your audience.
                  </div>
                  <div>
                    <strong>4. Development & Testing</strong> - We build your site with clean code
                    and test across all devices and browsers.
                  </div>
                  <div>
                    <strong>5. Launch & Support</strong> - We handle the launch and provide ongoing
                    support to ensure your success.
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem className="border-b border-gray-200" value="service">
              <AccordionTrigger className="py-3 text-left text-sm font-medium text-gray-900 hover:no-underline xs:py-4 xs:text-base lg:py-6 lg:text-lg">
                What&apos;s part of the complete design and build service?
              </AccordionTrigger>
              <AccordionContent className="pb-3 text-xs text-gray-600 xs:pb-4 xs:text-sm lg:pb-6 lg:text-base">
                <p className="mb-4 leading-relaxed">
                  Our complete service includes everything you need for a professional website:
                </p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <strong>Design & UX</strong>
                    <ul className="mt-2 space-y-1 text-xs lg:text-sm">
                      <li>• Custom visual design</li>
                      <li>• User experience optimization</li>
                      <li>• Mobile-first approach</li>
                      <li>• Brand integration</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Development & Technical</strong>
                    <ul className="mt-2 space-y-1 text-xs lg:text-sm">
                      <li>• Clean, modern code</li>
                      <li>• SEO optimization</li>
                      <li>• Performance optimization</li>
                      <li>• Security implementation</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4">
                  Plus: Project management, quality assurance, launch support, and documentation.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem className="border-b border-gray-200" value="brand">
              <AccordionTrigger className="py-3 text-left text-sm font-medium text-gray-900 hover:no-underline xs:py-4 xs:text-base lg:py-6 lg:text-lg">
                Will the website reflect my brand identity?
              </AccordionTrigger>
              <AccordionContent className="pb-3 text-xs text-gray-600 xs:pb-4 xs:text-sm lg:pb-6 lg:text-base">
                <p className="mb-4 leading-relaxed">
                  Absolutely! Your brand is at the heart of everything we design. Here&apos;s how we
                  ensure brand consistency:
                </p>
                <ul className="space-y-2 lg:space-y-3">
                  <li>
                    <strong>Brand Discovery:</strong> We start by understanding your brand values,
                    personality, and visual identity.
                  </li>
                  <li>
                    <strong>Custom Design:</strong> Every element is crafted to reflect your unique
                    brand - from colors and typography to imagery and tone.
                  </li>
                  <li>
                    <strong>Brand Guidelines:</strong> If you don&apos;t have established brand
                    guidelines, we can help develop them as part of the project.
                  </li>
                  <li>
                    <strong>Consistency:</strong> We ensure your website seamlessly integrates with
                    your existing marketing materials and brand presence.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem className="border-b border-gray-200" value="responsive">
              <AccordionTrigger className="py-3 text-left text-sm font-medium text-gray-900 hover:no-underline xs:py-4 xs:text-base lg:py-6 lg:text-lg">
                Do you design for responsiveness across all devices?
              </AccordionTrigger>
              <AccordionContent className="pb-3 text-xs text-gray-600 xs:pb-4 xs:text-sm lg:pb-6 lg:text-base">
                <p className="mb-4 leading-relaxed">
                  Yes, every website we create is fully responsive and optimized for all devices.
                  Here&apos;s what that means:
                </p>
                <div className="space-y-2 lg:space-y-3">
                  <div>
                    <strong>Mobile-First Design:</strong> We start with mobile and scale up,
                    ensuring perfect experiences on smartphones and tablets.
                  </div>
                  <div>
                    <strong>Desktop Optimization:</strong> Your site will look stunning and function
                    flawlessly on desktop computers and large screens.
                  </div>
                  <div>
                    <strong>Cross-Browser Compatibility:</strong> We test across Chrome, Safari,
                    Firefox, and Edge to ensure consistency.
                  </div>
                  <div>
                    <strong>Performance Focus:</strong> Fast loading times and smooth interactions
                    on every device.
                  </div>
                </div>
                <p className="mt-4 text-xs italic lg:text-sm">
                  With over 60% of web traffic coming from mobile devices, responsive design
                  isn&apos;t optional—it&apos;s essential.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem className="border-b border-gray-200" value="content">
              <AccordionTrigger className="py-3 text-left text-sm font-medium text-gray-900 hover:no-underline xs:py-4 xs:text-base lg:py-6 lg:text-lg">
                Is content creation included, or do I need to provide it myself?
              </AccordionTrigger>
              <AccordionContent className="pb-3 text-xs text-gray-600 xs:pb-4 xs:text-sm lg:pb-6 lg:text-base">
                <p className="mb-4 leading-relaxed">
                  We offer flexible content solutions to match your needs and budget:
                </p>
                <div className="space-y-3 lg:space-y-4">
                  <div className="rounded-lg bg-blue-50 p-3 lg:p-4">
                    <strong className="text-blue-900">Content Creation Service</strong>
                    <p className="mt-2 text-xs text-blue-800 lg:text-sm">
                      We can handle all your content needs - from copywriting and photography to
                      video production and graphic design.
                    </p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-3 lg:p-4">
                    <strong className="text-green-900">Client-Provided Content</strong>
                    <p className="mt-2 text-xs text-green-800 lg:text-sm">
                      If you prefer to provide your own content, we&apos;ll guide you on
                      specifications and help optimize it for web use.
                    </p>
                  </div>
                  <div className="rounded-lg bg-amber-50 p-3 lg:p-4">
                    <strong className="text-amber-900">Hybrid Approach</strong>
                    <p className="mt-2 text-xs text-amber-800 lg:text-sm">
                      Mix and match - you provide some content while we create others. Perfect for
                      businesses with existing materials.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem className="border-b border-gray-200" value="support">
              <AccordionTrigger className="py-3 text-left text-sm font-medium text-gray-900 hover:no-underline xs:py-4 xs:text-base lg:py-6 lg:text-lg">
                Do you provide ongoing support after launch?
              </AccordionTrigger>
              <AccordionContent className="pb-3 text-xs text-gray-600 xs:pb-4 xs:text-sm lg:pb-6 lg:text-base">
                <p className="mb-4 leading-relaxed">
                  Yes! We believe in long-term partnerships and offer comprehensive post-launch
                  support:
                </p>
                <div className="space-y-3 lg:space-y-4">
                  <div>
                    <strong>30-Day Launch Support (Included):</strong>
                    <ul className="ml-4 mt-2 space-y-1">
                      <li>• Bug fixes and technical issues</li>
                      <li>• Minor content updates</li>
                      <li>• Performance monitoring</li>
                      <li>• Training on content management</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Ongoing Maintenance Plans:</strong>
                    <ul className="ml-4 mt-2 space-y-1">
                      <li>• Regular security updates</li>
                      <li>• Performance optimization</li>
                      <li>• Content updates and changes</li>
                      <li>• Analytics and reporting</li>
                      <li>• Feature enhancements</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4">
                  We&apos;ll discuss support options during our consultation to find the right plan
                  for your needs.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default Questions
