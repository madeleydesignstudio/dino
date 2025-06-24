'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

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
});

const Pricing = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pageCount: '',
      serviceType: '',
      brandStatus: '',
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Here you would typically send the data to your API endpoint
      // For now, we'll just log the values and show a success message
      console.log('Form submitted:', values);

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
      });

      if (response.ok) {
        toast.success('Quote sent! 📧', {
          description:
            'Your estimate is on its way! Check your email within 5 minutes.',
          duration: 6000,
        });
        form.reset();
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Submission failed', {
        description:
          'Sorry, there was an error submitting your request. Please try again.',
        duration: 5000,
      });
    }
  }

  return (
    <div className="mx-4 flex flex-col gap-4">
      <div className="flex justify-between">
        <h2 className="w-1/3">
          Benefits <br /> & Pricing
        </h2>
        <p className="w-2/3 max-w-3xl text-lg text-neutral-500">
          Web design pricing can feel confusing and opaque — especially for
          startups. We&apos;ve made it simple with a transparent, per-page
          pricing model. No hidden fees, no guesswork — just a clear quote you
          can trust, making budgeting easy and stress-free.
        </p>
      </div>
      <div className="grid w-2/3 max-w-2xl grid-cols-3 grid-rows-2 gap-4 self-end py-4">
        <div className="flex aspect-square items-center justify-center border border-neutral-300 p-6">
          <p className="text-center text-sm">Get a clear price from day one</p>
        </div>
        <div className="flex aspect-square items-center justify-center border border-neutral-300 p-6">
          <p className="text-center text-sm">
            End-to-end websites, zero complications.
          </p>
        </div>
        <div className="flex aspect-square items-center justify-center border border-neutral-300 p-6">
          <p className="text-center text-sm">
            Tailored from scratch and crafted with style.
          </p>
        </div>
        <div className="flex aspect-square items-center justify-center border border-neutral-300 p-6">
          <p className="text-center text-sm">
            Kick things off on your timeline.
          </p>
        </div>
        <div className="flex aspect-square items-center justify-center border border-neutral-300 p-6">
          <p className="text-center text-sm">Scale at your own pace.</p>
        </div>
        <div className="flex aspect-square items-center justify-center border border-neutral-300 p-6">
          <p className="text-center text-sm">
            Less time talking, more time building.
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/3 max-w-xs">
          <h2 className="text-neutral-500 text-sm">
            Estimate Glossary Page Count An approximate number of pages your
            site will include (not counting the homepage). Common examples:
            About Us, Contact, How It Works, Our Team, Support. What We Deliver
            You can choose from two delivery options: Design Only Perfect if
            you&apos;ve got the skills to build it yourself. Design &
            Development Best for those who want a complete, done-for-you
            solution.
          </h2>
        </div>
        <div className="w-2/3">
          <Form {...form}>
            <form
              className="flex flex-col gap-6"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <h2 className="text-2xl text-neutral-400">
                See your estimate right away
              </h2>
              <Separator />

              <FormField
                control={form.control}
                name="pageCount"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex w-full items-start justify-between gap-4">
                      <div className="flex flex-col">
                        <FormLabel className="mb-1 text-lg text-neutral-900">
                          Page count?
                        </FormLabel>
                        <FormDescription className="text-neutral-500 text-sm">
                          (Excluding your homepage)
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Select
                          defaultValue={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="h-[50px] w-[200px] bg-neutral-100">
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
                    <div className="flex w-full items-start justify-between gap-4">
                      <div className="flex flex-col">
                        <FormLabel className="mb-1 text-lg text-neutral-900">
                          Pick what you need
                        </FormLabel>
                        <FormDescription className="text-neutral-500 text-sm">
                          Design only or full build — your choice.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Select
                          defaultValue={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="h-[50px] w-[200px] bg-neutral-100">
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="design-only">
                              Design Only
                            </SelectItem>
                            <SelectItem value="design-development">
                              Design & Development
                            </SelectItem>
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
                    <div className="flex w-full items-start justify-between gap-4">
                      <div className="flex flex-col">
                        <FormLabel className="mb-1 text-lg text-neutral-900">
                          Where&apos;s your brand at right now?
                        </FormLabel>
                        <FormDescription className="text-neutral-500 text-sm">
                          Need help defining your style? We&apos;re here to
                          guide you.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Select
                          defaultValue={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="h-[50px] w-[200px] bg-neutral-100">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="no-brand">
                              No brand yet
                            </SelectItem>
                            <SelectItem value="basic-brand">
                              Basic brand elements
                            </SelectItem>
                            <SelectItem value="established-brand">
                              Established brand
                            </SelectItem>
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
                    <div className="flex w-full items-start justify-between gap-4">
                      <div className="flex flex-col">
                        <FormLabel className="mb-1 text-lg text-neutral-900">
                          Tell us where to send your estimate.
                        </FormLabel>
                        <FormDescription className="text-neutral-500 text-sm">
                          Your quote will arrive within 5 minutes.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <div>
                          {' '}
                          <Input
                            className="h-[50px] w-[200px] bg-neutral-100"
                            placeholder="your@email.com"
                            type="email"
                            {...field}
                          />
                        </div>
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Separator />

              <div className="flex justify-end">
                <Button
                  className="rounded-md bg-neutral-800 px-8 py-3 text-white hover:bg-neutral-900"
                  disabled={form.formState.isSubmitting}
                  type="submit"
                >
                  {form.formState.isSubmitting
                    ? 'Sending...'
                    : 'Send me my quote'}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
