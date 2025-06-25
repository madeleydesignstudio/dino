import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface NewsItem {
  id: string;
  date: string;
  title: string;
  category: 'Product' | 'Company' | 'Partnership' | 'Achievement' | 'Launch';
  description: string;
  details?: string[];
  link?: string;
  isHighlight?: boolean;
}

const newsUpdates: NewsItem[] = [
  {
    id: '1',
    date: '2025-01-15',
    title: 'Dino UI Component Library v2.0 Released',
    category: 'Product',
    description: 'We&apos;ve launched the next generation of our design system with over 50 new components, improved accessibility, and enhanced performance.',
    details: [
      'Added 25 new React components',
      'Improved accessibility compliance (WCAG 2.1 AA)',
      'Reduced bundle size by 30%',
      'Dark mode support across all components',
      'TypeScript definitions for better developer experience'
    ],
    link: '/resources/dino-ui',
    isHighlight: true
  },
  {
    id: '2',
    date: '2025-01-08',
    title: 'New Partnership with TechCorp Solutions',
    category: 'Partnership',
    description: 'Strategic partnership formed to deliver enterprise-grade digital solutions to Fortune 500 companies.',
    details: [
      'Joint development initiatives',
      'Shared technology resources',
      'Extended market presence',
      'Enhanced client offerings'
    ]
  },
  {
    id: '3',
    date: '2024-12-20',
    title: 'Team Expansion: Welcome 5 New Developers',
    category: 'Company',
    description: 'Our development team has grown by 5 talented developers specializing in React, Node.js, and cloud architecture.',
    details: [
      '2 Senior Frontend Developers',
      '2 Backend Engineers',
      '1 DevOps Specialist',
      'Expanded capacity for client projects',
      'Enhanced technical expertise'
    ]
  },
  {
    id: '4',
    date: '2024-12-15',
    title: 'Award: Best Digital Agency 2024',
    category: 'Achievement',
    description: 'Recognized as &quot;Best Digital Agency 2024&quot; by the UK Web Design Awards for our innovative approach and client satisfaction.',
    details: [
      'Based on client testimonials',
      'Innovation in web technologies',
      'Outstanding project delivery',
      'Industry-leading customer satisfaction scores'
    ],
    isHighlight: true
  },
  {
    id: '5',
    date: '2024-11-30',
    title: 'Open Source Initiative Launch',
    category: 'Product',
    description: 'Launched our open-source initiative with 3 key projects now available to the developer community.',
    details: [
      'React component library',
      'Next.js starter templates',
      'Design system tokens',
      'Community contribution guidelines',
      'Regular maintenance and updates'
    ],
    link: '/resources/dino-opensource'
  },
  {
    id: '6',
    date: '2024-11-15',
    title: 'New Office Opening in Manchester',
    category: 'Company',
    description: 'Opened our second office in Manchester to better serve clients in the North and expand our regional presence.',
    details: [
      'State-of-the-art workspace',
      'Capacity for 20 team members',
      'Local client support',
      'Regional partnership opportunities'
    ]
  },
  {
    id: '7',
    date: '2024-10-22',
    title: 'Dino API Platform Beta Launch',
    category: 'Launch',
    description: 'Beta version of our API platform is now available for select clients, enabling faster integrations and better performance.',
    details: [
      'RESTful API endpoints',
      'GraphQL support',
      'Real-time webhooks',
      'Comprehensive documentation',
      'Developer-friendly SDKs'
    ],
    link: '/resources/dino-api',
    isHighlight: true
  },
  {
    id: '8',
    date: '2024-09-30',
    title: 'Sustainability Commitment Announced',
    category: 'Company',
    description: 'Announced our commitment to carbon neutrality by 2026 with new green hosting partnerships and sustainable development practices.',
    details: [
      'Carbon-neutral hosting providers',
      'Optimized code for energy efficiency',
      'Remote-first work policy',
      'Sustainable office practices',
      'Client sustainability consultations'
    ]
  }
];

const getCategoryColor = (category: NewsItem['category']) => {
  switch (category) {
    case 'Product':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'Company':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'Partnership':
      return 'bg-purple-100 text-purple-800 border-purple-200';
    case 'Achievement':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'Launch':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

const UpdatesNewsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary/5 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              News & Updates
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Stay up to date with the latest developments, product launches, and company milestones. 
              Follow our journey as we continue to innovate and grow.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Product Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Company News</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Industry Insights</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Timeline of Events
            </h2>
            <p className="text-muted-foreground">
              Chronicling our journey through key milestones and achievements
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {newsUpdates.map((item, index) => (
                <div key={item.id} className="relative flex items-start gap-8">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div 
                      className={`w-4 h-4 rounded-full border-4 ${
                        item.isHighlight 
                          ? 'bg-primary border-primary shadow-lg' 
                          : 'bg-background border-border'
                      }`}
                    ></div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 bg-card border border-border rounded-lg p-6 ${
                    item.isHighlight ? 'ring-2 ring-primary/20 bg-primary/5' : ''
                  } hover:shadow-lg transition-all duration-200`}>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <time className="text-sm font-medium text-muted-foreground">
                            {formatDate(item.date)}
                          </time>
                          <Badge 
                            variant="outline" 
                            className={getCategoryColor(item.category)}
                          >
                            {item.category}
                          </Badge>
                          {item.isHighlight && (
                            <Badge variant="default" className="bg-primary">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {item.title}
                        </h3>
                        <p className="text-foreground mb-4">
                          {item.description}
                        </p>
                      </div>
                      {item.link && (
                        <div className="flex-shrink-0">
                          <Button variant="outline" size="sm">
                            Learn More
                          </Button>
                        </div>
                      )}
                    </div>

                    {/* Details List */}
                    {item.details && item.details.length > 0 && (
                      <div className="pt-4 border-t border-border">
                        <h4 className="font-medium text-foreground mb-3">Key Highlights:</h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {item.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline End */}
            <div className="relative flex items-center gap-8 mt-8">
              <div className="relative z-10 flex-shrink-0">
                <div className="w-4 h-4 rounded-full bg-muted border-4 border-border"></div>
              </div>
              <div className="flex-1 text-center py-8">
                <p className="text-muted-foreground text-sm">
                  This is just the beginning of our story...
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 text-center bg-secondary/50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Stay in the Loop
            </h3>
            <p className="text-muted-foreground mb-4">
              Get the latest updates delivered straight to your inbox. No spam, just the good stuff.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatesNewsPage;