'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'

const formSchema = z.object({
  pageCount: z.string().min(1, {
    message: 'Please select a page count.',
  }),
  serviceType: z.string().min(1, {
    message: 'Please select what you need.',
  }),
  brandStatus: z.string().min(1, {
    message: 'Please select your brand status.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
})

const Pricing = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pageCount: '',
      serviceType: '',
      brandStatus: '',
      email: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Here you would typically send the data to your API endpoint
      // For now, we'll just log the values and show a success message
      console.log('Form submitted:', values)

      // TODO: Replace with actual API call to send emails
      const response = await fetch('/api/send-quote-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        toast.success('Quote sent! 📧', {
          description: 'Your estimate is on its way! Check your email within 5 minutes.',
          duration: 6000,
        })
        form.reset()
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error('Submission failed', {
        description: 'Sorry, there was an error submitting your request. Please try again.',
        duration: 5000,
      })
    }
  }

  return (
    <div className="mx-4 flex flex-col gap-6 lg:gap-4">
      {/* Header Section - Mobile Stacked, Desktop Side by Side */}
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
        <h2 className="text-xl lg:w-1/3 lg:text-2xl">
          Benefits <br /> & Pricing
        </h2>
        <p className="text-base text-neutral-500 lg:w-2/3 lg:max-w-3xl lg:text-lg">
          Web design pricing can feel confusing and opaque — especially for startups. We&apos;ve
          made it simple with a transparent, per-page pricing model. No hidden fees, no guesswork —
          just a clear quote you can trust, making budgeting easy and stress-free.
        </p>
      </div>

      {/* Benefits Grid - Ultra-small 1 Column, Mobile 2 Columns, Desktop 3 Columns */}
      <div className="grid grid-cols-1 gap-2 py-2 xs:grid-cols-2 xs:gap-3 xs:py-4 lg:w-2/3 lg:max-w-2xl lg:grid-cols-3 lg:grid-rows-2 lg:gap-4 lg:self-end">
        <div className="flex aspect-square items-center justify-center border border-neutral-300 p-2 xs:p-3 lg:p-6">
          <p className="text-center text-xs leading-tight lg:text-sm">
            Get a clear price from day one
          </p>
        </div>
        <div className="flex aspect-square items-center justify-center border border-neutral-300 p-2 xs:p-3 lg:p-6">
          <p className="text-center text-xs leading-tight lg:text-sm">
            End-to-end websites, zero complications.
          </p>
        </div>
        <div className="flex aspect-square items-center justify-center border border-neutral-300 p-2 xs:p-3 lg:p-6">
          <p className="text-center text-xs leading-tight lg:text-sm">
            Tailored from scratch and crafted with style.
          </p>
        </div>
        <div className="flex aspect-square items-center justify-center border border-neutral-300 p-2 xs:p-3 lg:p-6">
          <p className="text-center text-xs leading-tight lg:text-sm">
            Kick things off on your timeline.
          </p>
        </div>
        <div className="flex aspect-square items-center justify-center border border-neutral-300 p-2 xs:p-3 lg:p-6">
          <p className="text-center text-xs leading-tight lg:text-sm">Scale at your own pace.</p>
        </div>
        <div className="flex aspect-square items-center justify-center border border-neutral-300 p-2 xs:p-3 lg:p-6">
          <p className="text-center text-xs leading-tight lg:text-sm">
            Less time talking, more time building.
          </p>
        </div>
      </div>

      {/* Form Section - Mobile Stacked, Desktop Side by Side */}
      <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
        {/* Glossary - Hidden on Mobile, Visible on Desktop */}
        <div className="hidden w-1/3 max-w-xs lg:block">
          <h3 className="mb-4 text-sm font-medium text-neutral-900">Estimate Glossary</h3>
          <div className="space-y-4 text-xs text-neutral-500">
            <div>
              <h4 className="font-medium text-neutral-700">Page Count</h4>
              <p>
                An approximate number of pages your site will include (not counting the homepage).
                Common examples: About Us, Contact, How It Works, Our Team, Support.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-neutral-700">What We Deliver</h4>
              <p>
                You can choose from two delivery options: <strong>Design Only</strong> - Perfect if
                you've got the skills to build it yourself. <strong>Design & Development</strong> -
                Best for those who want a complete, done-for-you solution.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="w-full lg:w-2/3">
          <Form {...form}>
            <form className="flex flex-col gap-4 lg:gap-6" onSubmit={form.handleSubmit(onSubmit)}>
              <h2 className="text-xl text-neutral-400 lg:text-2xl">See your estimate right away</h2>
              <Separator />

              <FormField
                control={form.control}
                name="pageCount"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-col gap-3 lg:w-full lg:flex-row lg:items-start lg:justify-between lg:gap-4">
                      <div className="flex flex-col">
                        <FormLabel className="mb-1 text-base text-neutral-900 lg:text-lg">
                          Page count?
                        </FormLabel>
                        <FormDescription className="text-neutral-500 text-sm">
                          (Excluding your homepage)
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Select defaultValue={field.value} onValueChange={field.onChange}>
                          <SelectTrigger className="h-[44px] min-h-[44px] w-full bg-neutral-100 text-sm lg:h-[50px] lg:w-[200px]">
                            <SelectValue placeholder="Select page count" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-3">1-3 pages</SelectItem>
                            <SelectItem value="4-6">4-6 pages</SelectItem>
                            <SelectItem value="7-10">7-10 pages</SelectItem>
                            <SelectItem value="10+">10+ pages</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Separator />

              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-col gap-3 lg:w-full lg:flex-row lg:items-start lg:justify-between lg:gap-4">
                      <div className="flex flex-col">
                        <FormLabel className="mb-1 text-base text-neutral-900 lg:text-lg">
                          Pick what you need
                        </FormLabel>
                        <FormDescription className="text-neutral-500 text-sm">
                          Design only or full build — your choice.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Select defaultValue={field.value} onValueChange={field.onChange}>
                          <SelectTrigger className="h-[44px] min-h-[44px] w-full bg-neutral-100 text-sm lg:h-[50px] lg:w-[200px]">
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="design-only">Design Only</SelectItem>
                            <SelectItem value="design-development">Design & Development</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Separator />

              <FormField
                control={form.control}
                name="brandStatus"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-col gap-3 lg:w-full lg:flex-row lg:items-start lg:justify-between lg:gap-4">
                      <div className="flex flex-col">
                        <FormLabel className="mb-1 text-base text-neutral-900 lg:text-lg">
                          Where&apos;s your brand at right now?
                        </FormLabel>
                        <FormDescription className="text-neutral-500 text-sm">
                          Need help defining your style? We&apos;re here to guide you.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Select defaultValue={field.value} onValueChange={field.onChange}>
                          <SelectTrigger className="h-[44px] min-h-[44px] w-full bg-neutral-100 text-sm lg:h-[50px] lg:w-[200px]">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="no-brand">No brand yet</SelectItem>
                            <SelectItem value="basic-brand">Basic brand elements</SelectItem>
                            <SelectItem value="established-brand">Established brand</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Separator />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-col gap-3 lg:w-full lg:flex-row lg:items-start lg:justify-between lg:gap-4">
                      <div className="flex flex-col">
                        <FormLabel className="mb-1 text-base text-neutral-900 lg:text-lg">
                          Tell us where to send your estimate.
                        </FormLabel>
                        <FormDescription className="text-neutral-500 text-sm">
                          Your quote will arrive within 5 minutes.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Input
                          className="h-[44px] min-h-[44px] w-full bg-neutral-100 text-sm lg:h-[50px] lg:w-[200px]"
                          placeholder="your@email.com"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Separator />

              <div className="flex justify-center lg:justify-end">
                <Button
                  className="w-full min-h-[44px] rounded-md bg-neutral-800 px-4 py-3 text-sm text-white hover:bg-neutral-900 lg:w-auto lg:px-8"
                  disabled={form.formState.isSubmitting}
                  type="submit"
                >
                  {form.formState.isSubmitting ? 'Sending...' : 'Send me my quote'}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>

      {/* Mobile Glossary - Visible only on Mobile */}
      <div className="block lg:hidden">
        <h3 className="mb-3 text-sm font-medium text-neutral-900">Estimate Glossary</h3>
        <div className="space-y-3 text-xs text-neutral-500">
          <div>
            <h4 className="font-medium text-neutral-700">Page Count</h4>
            <p>
              An approximate number of pages your site will include (not counting the homepage).
              Common examples: About Us, Contact, How It Works, Our Team, Support.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-neutral-700">What We Deliver</h4>
            <p>
              You can choose from two delivery options: <strong>Design Only</strong> - Perfect if
              you've got the skills to build it yourself. <strong>Design & Development</strong> -
              Best for those who want a complete, done-for-you solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
