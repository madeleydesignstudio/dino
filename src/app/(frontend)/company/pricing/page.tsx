import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface PricingTier {
  name: string;
  description: string;
  startingPrice: string;
  priceDescription: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and startups looking to establish their digital presence.',
    startingPrice: '£2,500',
    priceDescription: 'Starting from',
    features: [
      'Custom responsive design',
      'Up to 5 pages',
      'Basic SEO optimization',
      'Contact forms',
      'Mobile optimization',
      '30 days support',
      'Basic analytics setup'
    ],
    ctaText: 'Get Started'
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses that need advanced features and functionality.',
    startingPrice: '£5,000',
    priceDescription: 'Starting from',
    features: [
      'Everything in Starter',
      'Up to 15 pages',
      'Advanced SEO & performance',
      'Content management system',
      'E-commerce integration',
      'Advanced animations',
      '90 days support',
      'Training & documentation'
    ],
    isPopular: true,
    ctaText: 'Most Popular'
  },
  {
    name: 'Enterprise',
    description: 'Comprehensive solutions for large organizations with complex requirements.',
    startingPrice: '£15,000',
    priceDescription: 'Starting from',
    features: [
      'Everything in Professional',
      'Unlimited pages',
      'Custom integrations',
      'Advanced security features',
      'Multi-language support',
      'Priority support',
      '1 year maintenance',
      'Dedicated project manager'
    ],
    ctaText: 'Contact Us'
  }
];

const principles = [
  {
    title: 'Transparent Pricing',
    description: 'No hidden fees, no surprises. Every cost is clearly outlined before we begin.',
    icon: '💎'
  },
  {
    title: 'Value-Based Approach',
    description: 'Our pricing reflects the value we deliver, not just the hours we spend.',
    icon: '⚖️'
  },
  {
    title: 'Fair & Flexible',
    description: 'We adapt our pricing to fit your budget and timeline without compromising quality.',
    icon: '🤝'
  },
  {
    title: 'Long-term Partnership',
    description: 'We build lasting relationships, not just websites. Our pricing reflects our commitment.',
    icon: '🌱'
  }
];

const faqs = [
  {
    question: 'How do you determine project pricing?',
    answer: 'We consider project complexity, timeline, features required, and the value delivered to your business. Each project gets a custom quote based on your specific needs.'
  },
  {
    question: 'Are there any additional costs?',
    answer: 'All costs are outlined upfront. The only additional costs might be third-party services like premium hosting, specialized plugins, or ongoing maintenance if requested.'
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer flexible payment plans. Typically 50% upfront and 50% on completion, but we can discuss alternatives that work for your cash flow.'
  },
  {
    question: 'What\'s included in ongoing support?',
    answer: 'Support includes bug fixes, security updates, and technical assistance. Content updates and new features are quoted separately.'
  },
  {
    question: 'Can I upgrade my package later?',
    answer: 'Absolutely! We can add features and functionality as your business grows. We\'ll provide a clear quote for any additions.'
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/5 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We believe in honest pricing that reflects the true value we deliver. 
              No hidden fees, no surprises - just exceptional websites at fair prices.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Fixed-price projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>No hidden costs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Flexible payment plans</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Philosophy */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Pricing Philosophy
            </h2>
            <p className="text-lg text-muted-foreground">
              We&apos;ve built our pricing around four core principles that ensure 
              you get maximum value for your investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {principles.map((principle, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="bg-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Choose Your Package
              </h2>
              <p className="text-lg text-muted-foreground">
                Select the package that best fits your needs. All packages include our core quality standards.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`bg-card border rounded-lg p-8 relative ${
                    tier.isPopular 
                      ? 'border-primary ring-2 ring-primary/20 scale-105' 
                      : 'border-border'
                  } hover:shadow-lg transition-all duration-200`}
                >
                  {tier.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {tier.description}
                    </p>
                    <div className="mb-4">
                      <span className="text-sm text-muted-foreground">
                        {tier.priceDescription}
                      </span>
                      <div className="text-3xl font-bold text-primary">
                        {tier.startingPrice}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full" 
                    variant={tier.isPopular ? 'default' : 'outline'}
                  >
                    {tier.ctaText}
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Need something custom? We&apos;d love to discuss your unique requirements.
              </p>
              <Button variant="outline">
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our pricing and process.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-border pb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a detailed quote tailored to your specific needs. 
              We&apos;ll discuss your requirements and provide transparent pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Free consultation • No obligation • Quick response
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
