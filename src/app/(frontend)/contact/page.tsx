'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import {
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon,
} from 'lucide-react'
import Link from 'next/link'

const Contact = () => {
  const contactInfo = [
    {
      icon: <MailIcon className="h-6 w-6" />,
      title: 'Email Us',
      description: 'Send us a message and we&apos;ll respond within 24 hours',
      value: 'hello@dino.com',
      href: 'mailto:hello@dino.com',
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      title: 'Call Us',
      description: 'Speak directly with our team during business hours',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      title: 'Visit Us',
      description: 'Schedule a meeting at our design studio',
      value: 'San Francisco, CA',
      href: '#',
    },
    {
      icon: <ClockIcon className="h-6 w-6" />,
      title: 'Business Hours',
      description: 'Monday to Friday, we&apos;re here to help',
      value: '9:00 AM - 6:00 PM PST',
      href: '#',
    },
  ]

  const services = [
    'Website Design',
    'Website Development',
    'Art & Creative Design',
    'Product Design',
    'Agentic AI',
    'Brand Identity',
    'Consulting',
    'Other',
  ]

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
    'I&apos;m not sure',
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">
            Get In Touch
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Let&apos;s Build Something Amazing Together
          </h1>
          <p className="text-lg text-neutral-600 mb-8">
            Ready to start your project? We&apos;d love to hear about your vision and discuss how we
            can help bring it to life. Get in touch with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#contact-form">
                Start Your Project
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/case-studies">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Choose the way that works best for you. We&apos;re here to help with your project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-violet-600">{info.icon}</div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                <p className="text-neutral-600 text-sm mb-3">{info.description}</p>
                {info.href !== '#' ? (
                  <Link
                    href={info.href}
                    className="font-medium text-violet-600 hover:text-violet-700"
                  >
                    {info.value}
                  </Link>
                ) : (
                  <div className="font-medium text-neutral-900">{info.value}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact Form */}
      <section id="contact-form" className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Start Your Project</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Tell us about your project and we&apos;ll get back to you within 24 hours with a
              detailed proposal.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-lg p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone" className="mt-2" />
                </div>
              </div>

              <div>
                <Label htmlFor="company">Company / Organization</Label>
                <Input id="company" placeholder="Enter your company name" className="mt-2" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="service">Service Needed *</Label>
                  <Select required>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service.toLowerCase()}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map((range) => (
                        <SelectItem key={range} value={range.toLowerCase()}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="timeline">Project Timeline</Label>
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="When do you need this completed?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">ASAP</SelectItem>
                    <SelectItem value="1-month">Within 1 month</SelectItem>
                    <SelectItem value="2-3-months">2-3 months</SelectItem>
                    <SelectItem value="3-6-months">3-6 months</SelectItem>
                    <SelectItem value="6-months-plus">6+ months</SelectItem>
                    <SelectItem value="not-sure">I&apos;m not sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="project">Project Description *</Label>
                <Textarea
                  id="project"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  required
                  className="mt-2 min-h-[120px]"
                />
              </div>

              <div>
                <Label htmlFor="additional">Additional Information</Label>
                <Textarea
                  id="additional"
                  placeholder="Any additional details, references, or questions..."
                  className="mt-2"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Project Details
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Separator />

      {/* Quick Actions */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Other Ways to Connect</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Prefer a different approach? Here are other ways to get in touch with us.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 text-center">
              <CalendarIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Schedule a Call</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Book a 30-minute consultation to discuss your project in detail.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="#">Book Consultation</Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 text-center">
              <MessageCircleIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Get instant answers to your questions through our live chat.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="#">Start Chat</Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-6 text-center">
              <MailIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Email Directly</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Send us an email and we&apos;ll respond within 24 hours.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="mailto:hello@dino.com">Send Email</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* FAQ Preview */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Quick Questions?</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Before reaching out, you might find answers to common questions here.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">How long does a typical project take?</h3>
              <p className="text-neutral-600 text-sm">
                Project timelines vary based on complexity. Simple websites take 4-6 weeks, while
                complex applications can take 12-20 weeks. We&apos;ll provide a detailed timeline
                during consultation.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">
                What information do you need to get started?
              </h3>
              <p className="text-neutral-600 text-sm">
                We need details about your project goals, target audience, timeline, and budget. Any
                existing materials or references are also helpful.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">
                Do you work with international clients?
              </h3>
              <p className="text-neutral-600 text-sm">
                Yes! We work with clients worldwide and are experienced in remote collaboration
                across different time zones.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/company/questions">View All Questions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
