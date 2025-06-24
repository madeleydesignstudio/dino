'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
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
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';

// Enhanced form schema with all project details
const projectFormSchema = z.object({
  // Basic Information
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  jobTitle: z.string().min(2, 'Job title must be at least 2 characters'),

  // Project Overview
  projectName: z.string().min(2, 'Project name must be at least 2 characters'),
  projectDescription: z
    .string()
    .min(
      50,
      'Please provide a detailed project description (at least 50 characters)'
    ),
  projectGoals: z
    .array(z.string())
    .min(1, 'Please select at least one project goal'),
  targetAudience: z.string().min(20, 'Please describe your target audience'),

  // Website Specifications
  pageCount: z.string().min(1, 'Please select a page count'),
  serviceType: z.string().min(1, 'Please select what you need'),
  brandStatus: z.string().min(1, 'Please select your brand status'),
  websiteType: z.string().min(1, 'Please select your website type'),
  industryType: z.string().min(1, 'Please select your industry'),

  // Design & Features
  designStyle: z
    .array(z.string())
    .min(1, 'Please select at least one design style'),
  colorPreferences: z.string().optional(),
  existingWebsite: z
    .string()
    .min(1, 'Please specify if you have an existing website'),
  currentWebsiteUrl: z.string().url().optional().or(z.literal('')),
  competitorUrls: z.string().optional(),

  // Functionality Requirements
  requiredFeatures: z
    .array(z.string())
    .min(1, 'Please select at least one required feature'),
  ecommerceNeeds: z.boolean(),
  ecommerceDetails: z.string().optional(),
  cmsNeeds: z.boolean(),
  integrationNeeds: z.array(z.string()),

  // Content & Media
  contentReady: z.string().min(1, 'Please specify your content readiness'),
  contentHelp: z.array(z.string()),
  photographyNeeds: z.string().min(1, 'Please specify your photography needs'),
  logoStatus: z.string().min(1, 'Please specify your logo status'),

  // Technical Requirements
  hostingNeeds: z.string().min(1, 'Please specify your hosting needs'),
  domainStatus: z.string().min(1, 'Please specify your domain status'),
  analyticsNeeds: z.boolean(),
  seoImportance: z.string().min(1, 'Please rate SEO importance'),
  performanceRequirements: z.array(z.string()),

  // Project Timeline & Budget
  projectTimeline: z.string().min(1, 'Please select your project timeline'),
  launchDate: z.date().optional(),
  isLaunchDateFlexible: z.boolean(),
  budgetRange: z.string().min(1, 'Please select your budget range'),
  paymentPreference: z.string().min(1, 'Please select your payment preference'),

  // Additional Information
  additionalRequirements: z.string().optional(),
  inspiration: z.string().optional(),
  concerns: z.string().optional(),
  howDidYouHear: z.string().min(1, 'Please tell us how you heard about us'),

  // Communication Preferences
  preferredContactMethod: z
    .string()
    .min(1, 'Please select your preferred contact method'),
  bestTimeToCall: z.string().optional(),
  timezone: z.string().min(1, 'Please select your timezone'),
});

type ProjectFormData = z.infer<typeof projectFormSchema>;

// Step validation schemas
const stepValidationSchemas = {
  0: z.object({
    fullName: z.string().min(2, 'Full name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    phone: z.string().min(10, 'Please enter a valid phone number'),
    company: z.string().min(2, 'Company name must be at least 2 characters'),
    jobTitle: z.string().min(2, 'Job title must be at least 2 characters'),
    timezone: z.string().min(1, 'Please select your timezone'),
  }),
  1: z.object({
    projectName: z
      .string()
      .min(2, 'Project name must be at least 2 characters'),
    projectDescription: z
      .string()
      .min(
        50,
        'Please provide a detailed project description (at least 50 characters)'
      ),
    projectGoals: z
      .array(z.string())
      .min(1, 'Please select at least one project goal'),
    targetAudience: z.string().min(20, 'Please describe your target audience'),
  }),
  2: z.object({
    pageCount: z.string().min(1, 'Please select a page count'),
    serviceType: z.string().min(1, 'Please select what you need'),
    brandStatus: z.string().min(1, 'Please select your brand status'),
    websiteType: z.string().min(1, 'Please select your website type'),
    industryType: z.string().min(1, 'Please select your industry'),
  }),
  3: z.object({
    designStyle: z
      .array(z.string())
      .min(1, 'Please select at least one design style'),
    existingWebsite: z
      .string()
      .min(1, 'Please specify if you have an existing website'),
  }),
  4: z.object({
    requiredFeatures: z
      .array(z.string())
      .min(1, 'Please select at least one required feature'),
  }),
  5: z.object({
    projectTimeline: z.string().min(1, 'Please select your project timeline'),
    budgetRange: z.string().min(1, 'Please select your budget range'),
    paymentPreference: z
      .string()
      .min(1, 'Please select your payment preference'),
  }),
  6: z.object({
    contentReady: z.string().min(1, 'Please specify your content readiness'),
    photographyNeeds: z
      .string()
      .min(1, 'Please specify your photography needs'),
    logoStatus: z.string().min(1, 'Please specify your logo status'),
  }),
  7: z.object({
    hostingNeeds: z.string().min(1, 'Please specify your hosting needs'),
    domainStatus: z.string().min(1, 'Please specify your domain status'),
    seoImportance: z.string().min(1, 'Please rate SEO importance'),
  }),
  8: z.object({
    howDidYouHear: z.string().min(1, 'Please tell us how you heard about us'),
    preferredContactMethod: z
      .string()
      .min(1, 'Please select your preferred contact method'),
  }),
};

const STEPS = [
  { id: 'basic', title: 'Basic Info', description: 'Contact details' },
  { id: 'project', title: 'Project Overview', description: 'Goals & audience' },
  {
    id: 'specifications',
    title: 'Website Specs',
    description: 'Type & requirements',
  },
  { id: 'design', title: 'Design & Style', description: 'Visual preferences' },
  {
    id: 'functionality',
    title: 'Functionality',
    description: 'Features & integrations',
  },
  {
    id: 'content',
    title: 'Content & Media',
    description: 'Assets & materials',
  },
  { id: 'technical', title: 'Technical', description: 'Hosting & performance' },
  {
    id: 'timeline',
    title: 'Timeline & Budget',
    description: 'Schedule & investment',
  },
  { id: 'additional', title: 'Additional Info', description: 'Final details' },
];

const StartProject = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isValidating, setIsValidating] = useState(false);

  const form = useForm<ProjectFormData>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      jobTitle: '',
      projectName: '',
      projectDescription: '',
      projectGoals: [],
      targetAudience: '',
      pageCount: '',
      serviceType: '',
      brandStatus: '',
      websiteType: '',
      industryType: '',
      designStyle: [],
      colorPreferences: '',
      existingWebsite: '',
      currentWebsiteUrl: '',
      competitorUrls: '',
      requiredFeatures: [],
      ecommerceNeeds: false,
      ecommerceDetails: '',
      cmsNeeds: false,
      integrationNeeds: [],
      contentReady: '',
      contentHelp: [],
      photographyNeeds: '',
      logoStatus: '',
      hostingNeeds: '',
      domainStatus: '',
      analyticsNeeds: false,
      seoImportance: '',
      performanceRequirements: [],
      projectTimeline: '',
      isLaunchDateFlexible: false,
      budgetRange: '',
      paymentPreference: '',
      additionalRequirements: '',
      inspiration: '',
      concerns: '',
      howDidYouHear: '',
      preferredContactMethod: '',
      bestTimeToCall: '',
      timezone: '',
    },
  });

  const currentProgress = ((currentStep + 1) / STEPS.length) * 100;

  const nextStep = async () => {
    if (currentStep < STEPS.length - 1) {
      setIsValidating(true);

      try {
        // Get current step's required field names
        const currentStepSchema =
          stepValidationSchemas[
            currentStep as keyof typeof stepValidationSchemas
          ];
        const fieldNames = Object.keys(currentStepSchema.shape) as Array<
          keyof ProjectFormData
        >;

        // Validate current step's fields
        const isValid = await form.trigger(fieldNames);

        if (isValid) {
          setCompletedSteps((prev) => [...prev, currentStep]);
          setCurrentStep(currentStep + 1);
        } else {
          // Show validation errors for current step
          toast.error('Please complete all required fields', {
            description:
              'Fill in all required information before proceeding to the next step.',
            duration: 4000,
          });
        }
      } finally {
        setIsValidating(false);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: ProjectFormData) => {
    console.log('Form submitted with data:', data);
    try {
      const response = await fetch('/api/send-project-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        toast.success('Project request submitted! 🎉', {
          description:
            'We&apos;ll review your requirements and get back to you within 24 hours.',
          duration: 8000,
        });
        form.reset();
        setCurrentStep(0);
        setCompletedSteps([]);
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
  };

  return (
    <div className="min-h-[calc(100vh-40px)] bg-neutral-50 py-8">
      <div className="mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 font-bold text-4xl text-neutral-900">
            Start Your Project
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600">
            Tell us about your project requirements so we can create the perfect
            solution for you.
          </p>
        </div>

        {/* Progress & Breadcrumb */}
        <div className="mb-8">
          <Progress className="mb-4" value={currentProgress} />
          <Breadcrumb className="justify-center">
            <BreadcrumbList>
              {STEPS.map((step, index) => (
                <div className="flex items-center" key={step.id}>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      className={`${
                        index === currentStep
                          ? 'font-semibold text-neutral-900 text-xs'
                          : completedSteps.includes(index)
                            ? 'text-green-600'
                            : 'text-neutral-500'
                      }`}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (
                          completedSteps.includes(index) ||
                          index < currentStep
                        ) {
                          setCurrentStep(index);
                        }
                      }}
                    >
                      {completedSteps.includes(index) && (
                        <Check className="mr-1 inline h-4 w-4 text-xs" />
                      )}
                      {step.title}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {index < STEPS.length - 1 && <BreadcrumbSeparator />}
                </div>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Form */}
        <div className=" border-neutral-200 p-8">
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              {/* Step 1: Basic Information */}
              {currentStep === 0 && (
                <div className="space-y-6">
                  <div className="mb-6 text-center">
                    <h2 className="mb-2 font-semibold text-2xl text-neutral-900">
                      Basic Information
                    </h2>
                    <p className="text-neutral-600">
                      Let&apos;s start with your contact details
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="john@example.com"
                              type="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Corp" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="jobTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Job Title</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="CEO, Marketing Manager, etc."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="timezone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Timezone</FormLabel>
                          <Select
                            defaultValue={field.value}
                            onValueChange={field.onChange}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your timezone" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="PST">Pacific (PST)</SelectItem>
                              <SelectItem value="MST">
                                Mountain (MST)
                              </SelectItem>
                              <SelectItem value="CST">Central (CST)</SelectItem>
                              <SelectItem value="EST">Eastern (EST)</SelectItem>
                              <SelectItem value="GMT">GMT</SelectItem>
                              <SelectItem value="CET">
                                Central European (CET)
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Project Overview */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="mb-6 text-center">
                    <h2 className="mb-2 font-semibold text-2xl text-neutral-900">
                      Project Overview
                    </h2>
                    <p className="text-neutral-600">
                      Tell us about your project goals and target audience
                    </p>
                  </div>

                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="projectName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="My Amazing Website"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="projectDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Description</FormLabel>
                          <FormDescription>
                            Describe your project in detail - what you want to
                            achieve, why this project is important
                          </FormDescription>
                          <FormControl>
                            <Textarea
                              className="min-h-[120px]"
                              placeholder="We need a modern, professional website that showcases our services and converts visitors into customers..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="projectGoals"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Project Goals (Select all that apply)
                          </FormLabel>
                          <div className="mt-2 grid grid-cols-2 gap-4">
                            {[
                              'Increase brand awareness',
                              'Generate more leads',
                              'Improve user experience',
                              'Boost online sales',
                              'Establish credibility',
                              'Expand market reach',
                              'Improve SEO rankings',
                              'Modernize existing site',
                            ].map((goal) => (
                              <div
                                className="flex items-center space-x-2"
                                key={goal}
                              >
                                <Checkbox
                                  checked={field.value?.includes(goal)}
                                  id={goal}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      field.onChange([...field.value, goal]);
                                    } else {
                                      field.onChange(
                                        field.value?.filter(
                                          (value) => value !== goal
                                        )
                                      );
                                    }
                                  }}
                                />
                                <Label
                                  className="font-normal text-sm"
                                  htmlFor={goal}
                                >
                                  {goal}
                                </Label>
                              </div>
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="targetAudience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Target Audience</FormLabel>
                          <FormDescription>
                            Who is your ideal customer? Include demographics,
                            interests, pain points
                          </FormDescription>
                          <FormControl>
                            <Textarea
                              className="min-h-[100px]"
                              placeholder="Small business owners aged 25-45 who need professional services..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Website Specifications */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="mb-6 text-center">
                    <h2 className="mb-2 font-semibold text-2xl text-neutral-900">
                      Website Specifications
                    </h2>
                    <p className="text-neutral-600">
                      Define the type and scope of your website
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="pageCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Page Count (excluding homepage)</FormLabel>
                          <Select
                            defaultValue={field.value}
                            onValueChange={field.onChange}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select page count" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1-3">1-3 pages</SelectItem>
                              <SelectItem value="4-6">4-6 pages</SelectItem>
                              <SelectItem value="7-10">7-10 pages</SelectItem>
                              <SelectItem value="10+">10+ pages</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="serviceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Type</FormLabel>
                          <Select
                            defaultValue={field.value}
                            onValueChange={field.onChange}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="design-only">
                                Design Only
                              </SelectItem>
                              <SelectItem value="design-development">
                                Design & Development
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="websiteType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website Type</FormLabel>
                          <Select
                            defaultValue={field.value}
                            onValueChange={field.onChange}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select website type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="business">
                                Business/Corporate
                              </SelectItem>
                              <SelectItem value="ecommerce">
                                E-commerce
                              </SelectItem>
                              <SelectItem value="portfolio">
                                Portfolio
                              </SelectItem>
                              <SelectItem value="blog">Blog/Content</SelectItem>
                              <SelectItem value="nonprofit">
                                Non-profit
                              </SelectItem>
                              <SelectItem value="saas">
                                SaaS/Software
                              </SelectItem>
                              <SelectItem value="landing">
                                Landing Page
                              </SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="industryType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Industry</FormLabel>
                          <Select
                            defaultValue={field.value}
                            onValueChange={field.onChange}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your industry" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="technology">
                                Technology
                              </SelectItem>
                              <SelectItem value="healthcare">
                                Healthcare
                              </SelectItem>
                              <SelectItem value="finance">Finance</SelectItem>
                              <SelectItem value="education">
                                Education
                              </SelectItem>
                              <SelectItem value="retail">Retail</SelectItem>
                              <SelectItem value="professional-services">
                                Professional Services
                              </SelectItem>
                              <SelectItem value="real-estate">
                                Real Estate
                              </SelectItem>
                              <SelectItem value="hospitality">
                                Hospitality
                              </SelectItem>
                              <SelectItem value="nonprofit">
                                Non-profit
                              </SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="brandStatus"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Brand Status</FormLabel>
                          <Select
                            defaultValue={field.value}
                            onValueChange={field.onChange}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select brand status" />
                              </SelectTrigger>
                            </FormControl>
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
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Design & Style */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="mb-6 text-center">
                    <h2 className="mb-2 font-semibold text-2xl text-neutral-900">
                      Design & Style
                    </h2>
                    <p className="text-neutral-600">
                      Help us understand your visual preferences
                    </p>
                  </div>

                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="designStyle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Design Style Preferences (Select all that apply)
                          </FormLabel>
                          <div className="mt-2 grid grid-cols-2 gap-4">
                            {[
                              'Modern & Clean',
                              'Bold & Creative',
                              'Minimalist',
                              'Professional & Corporate',
                              'Playful & Fun',
                              'Luxury & Premium',
                              'Tech & Futuristic',
                              'Warm & Friendly',
                            ].map((style) => (
                              <div
                                className="flex items-center space-x-2"
                                key={style}
                              >
                                <Checkbox
                                  checked={field.value?.includes(style)}
                                  id={style}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      field.onChange([...field.value, style]);
                                    } else {
                                      field.onChange(
                                        field.value?.filter(
                                          (value) => value !== style
                                        )
                                      );
                                    }
                                  }}
                                />
                                <Label
                                  className="font-normal text-sm"
                                  htmlFor={style}
                                >
                                  {style}
                                </Label>
                              </div>
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="existingWebsite"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Do you have an existing website?
                          </FormLabel>
                          <Select
                            defaultValue={field.value}
                            onValueChange={field.onChange}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select option" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="yes-redesign">
                                Yes, needs redesign
                              </SelectItem>
                              <SelectItem value="yes-keep">
                                Yes, keep some elements
                              </SelectItem>
                              <SelectItem value="no">
                                No, starting fresh
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="currentWebsiteUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Current Website URL (if applicable)
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="https://yourwebsite.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}

              {/* Step 5: Functionality */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="mb-6 text-center">
                    <h2 className="mb-2 font-semibold text-2xl text-neutral-900">
                      Functionality
                    </h2>
                    <p className="text-neutral-600">
                      What features do you need?
                    </p>
                  </div>

                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="requiredFeatures"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Required Features (Select all that apply)
                          </FormLabel>
                          <div className="mt-2 grid grid-cols-2 gap-4">
                            {[
                              'Contact Forms',
                              'Online Booking',
                              'Blog/News',
                              'Image Gallery',
                              'Video Integration',
                              'Social Media Integration',
                              'Newsletter Signup',
                              'Live Chat',
                              'Search Functionality',
                              'User Accounts',
                              'Payment Processing',
                              'Multi-language Support',
                            ].map((feature) => (
                              <div
                                className="flex items-center space-x-2"
                                key={feature}
                              >
                                <Checkbox
                                  checked={field.value?.includes(feature)}
                                  id={feature}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      field.onChange([...field.value, feature]);
                                    } else {
                                      field.onChange(
                                        field.value?.filter(
                                          (value) => value !== feature
                                        )
                                      );
                                    }
                                  }}
                                />
                                <Label
                                  className="font-normal text-sm"
                                  htmlFor={feature}
                                >
                                  {feature}
                                </Label>
                              </div>
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex items-center space-x-2">
                      <FormField
                        control={form.control}
                        name="ecommerceNeeds"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                E-commerce functionality needed
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>

                    {form.watch('ecommerceNeeds') && (
                      <FormField
                        control={form.control}
                        name="ecommerceDetails"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-commerce Details</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe your e-commerce needs: product types, payment methods, inventory management, etc."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    <div className="flex items-center space-x-2">
                      <FormField
                        control={form.control}
                        name="cmsNeeds"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                Content Management System (CMS) needed
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 6: Timeline & Budget */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div className="mb-6 text-center">
                    <h2 className="mb-2 font-semibold text-2xl text-neutral-900">
                      Timeline & Budget
                    </h2>
                    <p className="text-neutral-600">
                      When do you need this completed and what&apos;s your
                      budget?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="projectTimeline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Timeline</FormLabel>
                          <Select
                            defaultValue={field.value}
                            onValueChange={field.onChange}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select timeline" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="asap">
                                ASAP (Rush job)
                              </SelectItem>
                              <SelectItem value="1-month">
                                Within 1 month
                              </SelectItem>
                              <SelectItem value="2-months">
                                1-2 months
                              </SelectItem>
                              <SelectItem value="3-months">
                                2-3 months
                              </SelectItem>
                              <SelectItem value="flexible">
                                Flexible timeline
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="budgetRange"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Budget Range</FormLabel>
                          <Select
                            defaultValue={field.value}
                            onValueChange={field.onChange}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="under-5k">
                                Under $5,000
                              </SelectItem>
                              <SelectItem value="5k-10k">
                                $5,000 - $10,000
                              </SelectItem>
                              <SelectItem value="10k-20k">
                                $10,000 - $20,000
                              </SelectItem>
                              <SelectItem value="20k-50k">
                                $20,000 - $50,000
                              </SelectItem>
                              <SelectItem value="50k-plus">$50,000+</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="paymentPreference"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Payment Preference</FormLabel>
                        <Select
                          defaultValue={field.value}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select payment preference" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="upfront">
                              Full payment upfront
                            </SelectItem>
                            <SelectItem value="50-50">
                              50% upfront, 50% on completion
                            </SelectItem>
                            <SelectItem value="installments">
                              Monthly installments
                            </SelectItem>
                            <SelectItem value="milestones">
                              Payment by milestones
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="launchDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Target Launch Date (Optional)</FormLabel>
                          <FormDescription>
                            When would you ideally like to launch?
                          </FormDescription>
                          <div className="flex items-center space-x-4">
                            <Calendar
                              className="rounded-md border"
                              disabled={(date) => date < new Date()}
                              mode="single"
                              onSelect={field.onChange}
                              selected={field.value}
                            />
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex items-center space-x-2">
                      <FormField
                        control={form.control}
                        name="isLaunchDateFlexible"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Launch date is flexible</FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 7: Content & Media */}
              {currentStep === 6 && (
                <div className="space-y-6">
                  <div className="mb-6 text-center">
                    <h2 className="mb-2 font-semibold text-2xl text-neutral-900">
                      Content & Media
                    </h2>
                    <p className="text-neutral-600">
                      Tell us about your content and media needs
                    </p>
                  </div>

                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="contentReady"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Content Readiness</FormLabel>
                          <Select
                            defaultValue={field.value}
                            onValueChange={field.onChange}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select content status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="ready">
                                Content is ready
                              </SelectItem>
                              <SelectItem value="partial">
                                Some content ready
                              </SelectItem>
                              <SelectItem value="need-help">
                                Need help creating content
                              </SelectItem>
                              <SelectItem value="none">
                                No content ready
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="contentHelp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Content Help Needed (Select all that apply)
                          </FormLabel>
                          <div className="mt-2 grid grid-cols-2 gap-4">
                            {[
                              'Copywriting',
                              'Photography',
                              'Video Production',
                              'Graphic Design',
                              'Product Descriptions',
                              'Blog Content',
                              'SEO Content',
                              'Social Media Content',
                            ].map((help) => (
                              <div
                                className="flex items-center space-x-2"
                                key={help}
                              >
                                <Checkbox
                                  checked={field.value?.includes(help)}
                                  id={help}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      field.onChange([...field.value, help]);
                                    } else {
                                      field.onChange(
                                        field.value?.filter(
                                          (value) => value !== help
                                        )
                                      );
                                    }
                                  }}
                                />
                                <Label
                                  className="font-normal text-sm"
                                  htmlFor={help}
                                >
                                  {help}
                                </Label>
                              </div>
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="photographyNeeds"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Photography Needs</FormLabel>
                          <Select
                            defaultValue={field.value}
                            onValueChange={field.onChange}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select photography needs" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="have-photos">
                                Have all photos needed
                              </SelectItem>
                              <SelectItem value="need-some">
                                Need some photography
                              </SelectItem>
                              <SelectItem value="need-all">
                                Need all photography
                              </SelectItem>
                              <SelectItem value="stock-photos">
                                Use stock photos
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="logoStatus"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Logo Status</FormLabel>
                          <Select
                            defaultValue={field.value}
                            onValueChange={field.onChange}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select logo status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="have-logo">
                                Have professional logo
                              </SelectItem>
                              <SelectItem value="need-redesign">
                                Have logo, needs redesign
                              </SelectItem>
                              <SelectItem value="need-logo">
                                Need logo created
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="colorPreferences"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Color Preferences</FormLabel>
                          <FormDescription>
                            Any specific colors you want to use or avoid?
                          </FormDescription>
                          <FormControl>
                            <Textarea
                              className="min-h-[80px]"
                              placeholder="e.g., Brand colors are blue and white, avoid red..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}

              {/* Step 8: Technical Requirements */}
              {currentStep === 7 && (
                <div className="space-y-6">
                  <div className="mb-6 text-center">
                    <h2 className="mb-2 font-semibold text-2xl text-neutral-900">
                      Technical Requirements
                    </h2>
                    <p className="text-neutral-600">
                      Let&apos;s discuss hosting and technical needs
                    </p>
                  </div>

                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="hostingNeeds"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Hosting Needs</FormLabel>
                          <Select
                            defaultValue={field.value}
                            onValueChange={field.onChange}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select hosting option" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="have-hosting">
                                Have hosting sorted
                              </SelectItem>
                              <SelectItem value="need-hosting">
                                Need hosting recommendations
                              </SelectItem>
                              <SelectItem value="manage-hosting">
                                Want you to manage hosting
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="domainStatus"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Domain Status</FormLabel>
                          <Select
                            defaultValue={field.value}
                            onValueChange={field.onChange}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select domain status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="have-domain">
                                Have domain registered
                              </SelectItem>
                              <SelectItem value="need-domain">
                                Need domain registered
                              </SelectItem>
                              <SelectItem value="need-help">
                                Need help choosing domain
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="seoImportance"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>SEO Importance</FormLabel>
                          <Select
                            defaultValue={field.value}
                            onValueChange={field.onChange}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Rate SEO importance" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="critical">
                                Critical - Top priority
                              </SelectItem>
                              <SelectItem value="important">
                                Important - Should be optimized
                              </SelectItem>
                              <SelectItem value="moderate">
                                Moderate - Basic SEO is fine
                              </SelectItem>
                              <SelectItem value="low">Low priority</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex items-center space-x-2">
                      <FormField
                        control={form.control}
                        name="analyticsNeeds"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                Analytics & tracking setup needed
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="performanceRequirements"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Performance Requirements (Select all that apply)
                          </FormLabel>
                          <div className="mt-2 grid grid-cols-2 gap-4">
                            {[
                              'Fast loading speed',
                              'Mobile optimization',
                              'SEO optimization',
                              'Security features',
                              'Regular backups',
                              'SSL certificate',
                              'CDN setup',
                              'Database optimization',
                            ].map((requirement) => (
                              <div
                                className="flex items-center space-x-2"
                                key={requirement}
                              >
                                <Checkbox
                                  checked={field.value?.includes(requirement)}
                                  id={requirement}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      field.onChange([
                                        ...field.value,
                                        requirement,
                                      ]);
                                    } else {
                                      field.onChange(
                                        field.value?.filter(
                                          (value) => value !== requirement
                                        )
                                      );
                                    }
                                  }}
                                />
                                <Label
                                  className="font-normal text-sm"
                                  htmlFor={requirement}
                                >
                                  {requirement}
                                </Label>
                              </div>
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="integrationNeeds"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Integration Needs (Select all that apply)
                          </FormLabel>
                          <div className="mt-2 grid grid-cols-2 gap-4">
                            {[
                              'Google Analytics',
                              'Social Media APIs',
                              'Payment Gateways',
                              'Email Marketing',
                              'CRM Systems',
                              'Booking Systems',
                              'Inventory Management',
                              'Third-party APIs',
                            ].map((integration) => (
                              <div
                                className="flex items-center space-x-2"
                                key={integration}
                              >
                                <Checkbox
                                  checked={field.value?.includes(integration)}
                                  id={integration}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      field.onChange([
                                        ...field.value,
                                        integration,
                                      ]);
                                    } else {
                                      field.onChange(
                                        field.value?.filter(
                                          (value) => value !== integration
                                        )
                                      );
                                    }
                                  }}
                                />
                                <Label
                                  className="font-normal text-sm"
                                  htmlFor={integration}
                                >
                                  {integration}
                                </Label>
                              </div>
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}

              {/* Step 9: Additional Information */}
              {currentStep === 8 && (
                <div className="space-y-6">
                  <div className="mb-6 text-center">
                    <h2 className="mb-2 font-semibold text-2xl text-neutral-900">
                      Additional Information
                    </h2>
                    <p className="text-neutral-600">
                      Any final details to help us understand your needs?
                    </p>
                  </div>

                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="howDidYouHear"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>How did you hear about us?</FormLabel>
                          <Select
                            defaultValue={field.value}
                            onValueChange={field.onChange}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select option" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="google">
                                Google Search
                              </SelectItem>
                              <SelectItem value="social-media">
                                Social Media
                              </SelectItem>
                              <SelectItem value="referral">Referral</SelectItem>
                              <SelectItem value="portfolio">
                                Saw our portfolio
                              </SelectItem>
                              <SelectItem value="linkedin">LinkedIn</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="preferredContactMethod"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Contact Method</FormLabel>
                          <Select
                            defaultValue={field.value}
                            onValueChange={field.onChange}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select contact method" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="email">Email</SelectItem>
                              <SelectItem value="phone">Phone</SelectItem>
                              <SelectItem value="video-call">
                                Video Call
                              </SelectItem>
                              <SelectItem value="text">Text Message</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="bestTimeToCall"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Best Time to Call (Optional)</FormLabel>
                          <FormDescription>
                            If you prefer phone calls, when is the best time to
                            reach you?
                          </FormDescription>
                          <FormControl>
                            <Input
                              placeholder="e.g., Weekdays 9am-5pm EST"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="additionalRequirements"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Requirements</FormLabel>
                          <FormDescription>
                            Any specific requirements, features, or
                            considerations we should know about?
                          </FormDescription>
                          <FormControl>
                            <Textarea
                              className="min-h-[100px]"
                              placeholder="Tell us about any specific needs, integrations, or special requirements..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="inspiration"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Inspiration & References</FormLabel>
                          <FormDescription>
                            Share any websites, designs, or ideas that inspire
                            you
                          </FormDescription>
                          <FormControl>
                            <Textarea
                              className="min-h-[80px]"
                              placeholder="Share URLs or describe designs you like..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="concerns"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Concerns or Questions</FormLabel>
                          <FormDescription>
                            Any concerns or questions about the project?
                          </FormDescription>
                          <FormControl>
                            <Textarea
                              className="min-h-[80px]"
                              placeholder="Share any concerns or questions you have..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between border-neutral-200 border-t pt-6">
                <Button
                  className="flex items-center gap-2"
                  disabled={currentStep === 0}
                  onClick={prevStep}
                  type="button"
                  variant="outline"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </Button>

                {currentStep === STEPS.length - 1 ? (
                  <Button
                    className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-900"
                    disabled={form.formState.isSubmitting}
                    type="submit"
                  >
                    {form.formState.isSubmitting
                      ? 'Submitting...'
                      : 'Submit Project'}
                    <Check className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-900"
                    disabled={isValidating}
                    onClick={nextStep}
                    type="button"
                  >
                    {isValidating ? 'Validating...' : 'Next'}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default StartProject;
