'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const createNewsletterSchema = (showFirstName: boolean) =>
  z.object({
    email: z.string().email({
      message: 'Please enter a valid email address.',
    }),
    firstName: showFirstName
      ? z.string().min(1, {
          message: 'Please enter your first name.',
        })
      : z.string().optional(),
  });

interface NewsletterSignupProps {
  className?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  showFirstName?: boolean;
}

export const NewsletterSignup = ({
  className = '',
  title = 'Stay Updated',
  description = 'Get the latest design insights and project updates delivered to your inbox.',
  buttonText = 'Subscribe',
  showFirstName = true,
}: NewsletterSignupProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const newsletterSchema = createNewsletterSchema(showFirstName);

  const form = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: '',
      firstName: '',
    },
  });

  async function onSubmit(values: z.infer<typeof newsletterSchema>) {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Welcome to our newsletter! 🎉', {
          description:
            'Check your email for a welcome message. You&apos;ll receive our latest updates soon.',
          duration: 5000,
        });
        form.reset();
      } else {
        throw new Error(data.error || 'Failed to subscribe');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.';

      toast.error('Subscription failed', {
        description: errorMessage,
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="mb-6">
        <h3 className="mb-2 font-semibold text-gray-900 text-lg">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          {showFirstName && (
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-gray-700 text-sm">
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-full"
                      placeholder="Enter your first name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem suppressHydrationWarning={true}>
                <FormLabel className="font-medium text-gray-700 text-sm">
                  Email Address
                </FormLabel>
                <FormControl suppressHydrationWarning={true}>
                  <Input
                    className="w-full"
                    placeholder="Enter your email"
                    suppressHydrationWarning={true}
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="w-full bg-neutral-800 text-white hover:bg-neutral-900"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? 'Subscribing...' : buttonText}
          </Button>
        </form>
      </Form>

      <p className="mt-4 text-gray-500 text-xs">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};
