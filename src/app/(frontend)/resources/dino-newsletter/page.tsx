import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface NewsletterBenefit {
  title: string;
  description: string;
  icon: string;
}

interface NewsletterIssue {
  id: string;
  title: string;
  date: string;
  description: string;
  topics: string[];
  isHighlight?: boolean;
}

const benefits: NewsletterBenefit[] = [
  {
    title: 'Industry Insights',
    description: 'Get the latest trends, best practices, and emerging technologies in web development and design.',
    icon: '📊'
  },
  {
    title: 'Behind the Scenes',
    description: 'Exclusive content about our projects, team updates, and company developments.',
    icon: '🎬'
  },
  {
    title: 'Tips & Tutorials',
    description: 'Practical advice, code snippets, and step-by-step guides from our expert team.',
    icon: '💡'
  },
  {
    title: 'Early Access',
    description: 'Be the first to know about new tools, resources, and opportunities.',
    icon: '🚀'
  }
];

const recentIssues: NewsletterIssue[] = [
  {
    id: '1',
    title: 'The Future of Web Performance: Core Web Vitals in 2025',
    date: '2025-01-15',
    description: 'Deep dive into Google&apos;s latest Core Web Vitals updates and how they impact your website&apos;s ranking and user experience.',
    topics: ['Performance', 'SEO', 'User Experience'],
    isHighlight: true
  },
  {
    id: '2',
    title: 'React Server Components: What You Need to Know',
    date: '2025-01-08',
    description: 'Comprehensive guide to React Server Components, their benefits, and practical implementation strategies.',
    topics: ['React', 'Next.js', 'Development']
  },
  {
    id: '3',
    title: 'Design System Evolution: Our Journey with Dino UI',
    date: '2025-01-01',
    description: 'How we built and evolved our design system, lessons learned, and best practices for scalable UI components.',
    topics: ['Design Systems', 'UI/UX', 'Component Libraries']
  },
  {
    id: '4',
    title: 'Accessibility First: Building Inclusive Web Experiences',
    date: '2024-12-25',
    description: 'Practical steps to improve web accessibility, common pitfalls to avoid, and tools that make a difference.',
    topics: ['Accessibility', 'Inclusive Design', 'Best Practices']
  }
];

const stats = [
  { label: 'Subscribers', value: '2,500+' },
  { label: 'Issues Sent', value: '48' },
  { label: 'Open Rate', value: '67%' },
  { label: 'Countries Reached', value: '23' }
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

const DinoNewsletter = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/5 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <span className="text-2xl">📧</span>
              <span className="text-sm font-medium text-primary">Weekly Newsletter</span>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Stay Ahead with Dino Insights
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of developers, designers, and business owners who rely on our weekly newsletter 
              for the latest trends, insights, and practical advice in digital innovation.
            </p>
            
            {/* Newsletter Signup Form */}
            <div className="bg-card border border-border rounded-lg p-8 max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Subscribe Today
              </h3>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <input
                  type="text"
                  placeholder="Your name (optional)"
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button className="w-full" size="lg">
                  Subscribe for Free
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                No spam, ever. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Stats */}
      <div className="border-b border-border py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What You&apos;ll Get
            </h2>
            <p className="text-lg text-muted-foreground">
              Every week, we deliver valuable content directly to your inbox
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-3xl flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Issues */}
      <div className="bg-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Recent Issues
              </h2>
              <p className="text-lg text-muted-foreground">
                See what our subscribers have been reading
              </p>
            </div>

            <div className="space-y-6">
              {recentIssues.map((issue) => (
                <div
                  key={issue.id}
                  className={`bg-card border border-border rounded-lg p-6 ${
                    issue.isHighlight ? 'ring-2 ring-primary/20 bg-primary/5' : ''
                  } hover:shadow-lg transition-all duration-200`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <time className="text-sm font-medium text-muted-foreground">
                          {formatDate(issue.date)}
                        </time>
                        {issue.isHighlight && (
                          <Badge variant="default" className="bg-primary">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {issue.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {issue.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {issue.topics.map((topic, topicIndex) => (
                          <Badge key={topicIndex} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Button variant="outline" size="sm">
                        Read Issue
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline">
                View All Issues
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What Subscribers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-yellow-500">★★★★★</div>
              </div>
              <p className="text-muted-foreground mb-4">
                &quot;The Dino newsletter is the first email I read every week. 
                The insights are always practical and help me stay ahead of industry trends.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-primary">SM</span>
                </div>
                <div>
                  <div className="font-medium text-foreground">Sarah Mitchell</div>
                  <div className="text-sm text-muted-foreground">Frontend Developer</div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-yellow-500">★★★★★</div>
              </div>
              <p className="text-muted-foreground mb-4">
                &quot;Fantastic content that&apos;s always relevant and actionable. 
                I&apos;ve implemented several tips that have significantly improved our website performance.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-primary">DT</span>
                </div>
                <div>
                  <div className="font-medium text-foreground">David Thompson</div>
                  <div className="text-sm text-muted-foreground">Product Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Level Up?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our community of forward-thinking professionals and get weekly insights 
              that will help you build better digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button size="lg">
                Subscribe Now
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Free forever • Weekly delivery • Unsubscribe anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DinoNewsletter;