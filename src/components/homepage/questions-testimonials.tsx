import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const Questions = () => {
  return (
    <div className="flex flex-col gap-4 mx-4">
      <div className="flex gap-4">
        <h2 className="w-1/3">
          Questions <br /> & Testimonials
        </h2>
        <p className="w-2/3 text-neutral-500 text-xl">
          Starting a web design project often comes with plenty of questions — and rightly so.
          It&apos;s a big move for any startup. That&apos;s why we prioritise clarity and openness,
          giving you all the details you need to feel confident and make the right choice for your
          business.
        </p>
      </div>
      <div className="flex gap-4">
        <div className="w-1/3 flex items-end  text-[8px] gap-4 text-neutral-400">
          <div className="flex flex-col gap-4">
            {' '}
            <div>
              &ldquo;Working with Kieran and MONOLIF was a complete joy. Not only did he bring to
              your startup an incredible eye with impeccable taste, but also an uncompromising work
              ethic that went well beyond the brief. In short, he&apos;s an indispensable team
              member from start to finish. Can&apos;t wait to work with him again.&rdquo; Jack Burke
              Founder & CEO of RINkL
            </div>
            <div>
              &ldquo;Working with Kieran and MONOLIF was a complete joy. Not only did he bring to
              your startup an incredible eye with impeccable taste, but also an uncompromising work
              ethic that went well beyond the brief. In short, he&apos;s an indispensable team
              member from start to finish. Can&apos;t wait to work with him again.&rdquo; Jack Burke
              Founder & CEO of RINkL
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {' '}
            <div>
              &ldquo;Working with Kieran and MONOLIF was a complete joy. Not only did he bring to
              your startup an incredible eye with impeccable taste, but also an uncompromising work
              ethic that went well beyond the brief. In short, he&apos;s an indispensable team
              member from start to finish. Can&apos;t wait to work with him again.&rdquo; Jack Burke
              Founder & CEO of RINkL
            </div>
            <div>
              &ldquo;Working with Kieran and MONOLIF was a complete joy. Not only did he bring to
              your startup an incredible eye with impeccable taste, but also an uncompromising work
              ethic that went well beyond the brief. In short, he&apos;s an indispensable team
              member from start to finish. Can&apos;t wait to work with him again.&rdquo; Jack Burke
              Founder & CEO of RINkL
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">You Asked, We Answered</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="timeline" className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-lg font-medium text-gray-900 py-6 hover:no-underline">
                What&apos;s the typical timeline for designing and building my website?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                <p className="leading-relaxed">
                  Most projects take 4-8 weeks from start to launch, depending on complexity and
                  scope. Here&apos;s our typical timeline:
                </p>
                <ul className="mt-4 space-y-2 ml-4">
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

            <AccordionItem value="journey" className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-lg font-medium text-gray-900 py-6 hover:no-underline">
                What&apos;s the journey from idea to finished website?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                <p className="leading-relaxed mb-4">
                  We follow a proven process that turns your vision into a powerful website:
                </p>
                <div className="space-y-4">
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

            <AccordionItem value="service" className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-lg font-medium text-gray-900 py-6 hover:no-underline">
                What&apos;s part of the complete design and build service?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                <p className="leading-relaxed mb-4">
                  Our complete service includes everything you need for a professional website:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <strong>Design & UX</strong>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• Custom visual design</li>
                      <li>• User experience optimization</li>
                      <li>• Mobile-first approach</li>
                      <li>• Brand integration</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Development & Technical</strong>
                    <ul className="mt-2 space-y-1 text-sm">
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

            <AccordionItem value="brand" className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-lg font-medium text-gray-900 py-6 hover:no-underline">
                Will the website reflect my brand identity?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                <p className="leading-relaxed mb-4">
                  Absolutely! Your brand is at the heart of everything we design. Here&apos;s how we
                  ensure brand consistency:
                </p>
                <ul className="space-y-3">
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

            <AccordionItem value="responsive" className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-lg font-medium text-gray-900 py-6 hover:no-underline">
                Do you design for responsiveness across all devices?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                <p className="leading-relaxed mb-4">
                  Yes, every website we create is fully responsive and optimized for all devices.
                  Here&apos;s what that means:
                </p>
                <div className="space-y-3">
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
                <p className="mt-4 text-sm italic">
                  With over 60% of web traffic coming from mobile devices, responsive design
                  isn&apos;t optional—it&apos;s essential.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="content" className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-lg font-medium text-gray-900 py-6 hover:no-underline">
                Is content creation included, or do I need to provide it myself?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                <p className="leading-relaxed mb-4">
                  We offer flexible content solutions to match your needs and budget:
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <strong className="text-blue-900">Content Creation Service</strong>
                    <p className="text-blue-800 mt-2">
                      We can handle all your content needs - from copywriting and photography to
                      video production and graphic design.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <strong className="text-green-900">Client-Provided Content</strong>
                    <p className="text-green-800 mt-2">
                      If you prefer to provide your own content, we&apos;ll guide you on
                      specifications and help optimize it for web use.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <strong className="text-amber-900">Hybrid Approach</strong>
                    <p className="text-amber-800 mt-2">
                      Mix and match - you provide some content while we create others. Perfect for
                      businesses with existing materials.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="support" className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-lg font-medium text-gray-900 py-6 hover:no-underline">
                Do you provide ongoing support after launch?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                <p className="leading-relaxed mb-4">
                  Yes! We believe in long-term partnerships and offer comprehensive post-launch
                  support:
                </p>
                <div className="space-y-4">
                  <div>
                    <strong>30-Day Launch Support (Included):</strong>
                    <ul className="mt-2 space-y-1 ml-4">
                      <li>• Bug fixes and technical issues</li>
                      <li>• Minor content updates</li>
                      <li>• Performance monitoring</li>
                      <li>• Training on content management</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Ongoing Maintenance Plans:</strong>
                    <ul className="mt-2 space-y-1 ml-4">
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
