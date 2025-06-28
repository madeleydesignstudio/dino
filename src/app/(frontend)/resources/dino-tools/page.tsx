import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Tool {
  name: string;
  description: string;
  category: string;
  pricing: 'Free' | 'Paid' | 'Freemium';
  rating: number;
  website: string;
  features: string[];
  isRecommended?: boolean;
  logo?: string;
}

interface ToolCategory {
  name: string;
  description: string;
  icon: string;
  tools: Tool[];
}

const toolCategories: ToolCategory[] = [
  {
    name: 'Development',
    description: 'Code editors, IDEs, and development environments',
    icon: '💻',
    tools: [
      {
        name: 'Cursor',
        description: 'AI-powered code editor built for productivity with intelligent code completion and generation.',
        category: 'Development',
        pricing: 'Freemium',
        rating: 4.8,
        website: 'https://cursor.sh',
        features: ['AI Code Generation', 'Intelligent Autocomplete', 'Multi-language Support', 'Git Integration'],
        isRecommended: true
      },
      {
        name: 'Visual Studio Code',
        description: 'Popular, lightweight code editor with extensive extension ecosystem.',
        category: 'Development',
        pricing: 'Free',
        rating: 4.7,
        website: 'https://code.visualstudio.com',
        features: ['Extensions Marketplace', 'Integrated Terminal', 'Debugging', 'Git Integration']
      },
      {
        name: 'GitHub',
        description: 'Essential platform for version control, collaboration, and code hosting.',
        category: 'Development',
        pricing: 'Freemium',
        rating: 4.6,
        website: 'https://github.com',
        features: ['Version Control', 'Issue Tracking', 'CI/CD', 'Team Collaboration']
      },
      {
        name: 'Vercel',
        description: 'The best platform for deploying frontend applications with zero configuration.',
        category: 'Development',
        pricing: 'Freemium',
        rating: 4.8,
        website: 'https://vercel.com',
        features: ['Instant Deployments', 'Preview URLs', 'Edge Functions', 'Analytics'],
        isRecommended: true
      }
    ]
  },
  {
    name: 'Design',
    description: 'Creative tools for UI/UX design, graphics, and visual content',
    icon: '🎨',
    tools: [
      {
        name: 'Figma',
        description: 'Collaborative interface design tool that runs in the browser with real-time collaboration.',
        category: 'Design',
        pricing: 'Freemium',
        rating: 4.9,
        website: 'https://figma.com',
        features: ['Real-time Collaboration', 'Component Systems', 'Prototyping', 'Design Handoff'],
        isRecommended: true
      },
      {
        name: 'Adobe Illustrator',
        description: 'Industry-standard vector graphics software for logos, icons, and illustrations.',
        category: 'Design',
        pricing: 'Paid',
        rating: 4.5,
        website: 'https://adobe.com/products/illustrator',
        features: ['Vector Graphics', 'Typography Tools', 'Color Management', 'Export Options']
      },
      {
        name: 'Adobe Photoshop',
        description: 'Professional image editing and manipulation software used worldwide.',
        category: 'Design',
        pricing: 'Paid',
        rating: 4.4,
        website: 'https://adobe.com/products/photoshop',
        features: ['Photo Editing', 'Digital Painting', 'Compositing', 'Retouching']
      },
      {
        name: 'Framer',
        description: 'Advanced prototyping tool for creating interactive and animated designs.',
        category: 'Design',
        pricing: 'Freemium',
        rating: 4.6,
        website: 'https://framer.com',
        features: ['Interactive Prototypes', 'Animations', 'Component Library', 'Code Generation']
      }
    ]
  },
  {
    name: 'Project Management',
    description: 'Tools for organizing tasks, managing teams, and tracking progress',
    icon: '📋',
    tools: [
      {
        name: 'Linear',
        description: 'Modern issue tracker designed for software development teams with elegant interface.',
        category: 'Project Management',
        pricing: 'Freemium',
        rating: 4.8,
        website: 'https://linear.app',
        features: ['Issue Tracking', 'Sprint Planning', 'Keyboard Shortcuts', 'Git Integration'],
        isRecommended: true
      },
      {
        name: 'Notion',
        description: 'All-in-one workspace for notes, tasks, wikis, and databases.',
        category: 'Project Management',
        pricing: 'Freemium',
        rating: 4.5,
        website: 'https://notion.so',
        features: ['Documentation', 'Task Management', 'Databases', 'Team Collaboration']
      },
      {
        name: 'Slack',
        description: 'Team communication platform with channels, direct messages, and integrations.',
        category: 'Project Management',
        pricing: 'Freemium',
        rating: 4.3,
        website: 'https://slack.com',
        features: ['Team Chat', 'File Sharing', 'App Integrations', 'Video Calls']
      },
      {
        name: 'Asana',
        description: 'Work management platform for teams to organize, track, and manage their work.',
        category: 'Project Management',
        pricing: 'Freemium',
        rating: 4.4,
        website: 'https://asana.com',
        features: ['Task Management', 'Timeline View', 'Custom Fields', 'Reporting']
      }
    ]
  },
  {
    name: 'Analytics & SEO',
    description: 'Tools for tracking performance, understanding users, and optimizing for search',
    icon: '📊',
    tools: [
      {
        name: 'Google Analytics',
        description: 'Comprehensive web analytics service that tracks and reports website traffic.',
        category: 'Analytics',
        pricing: 'Free',
        rating: 4.2,
        website: 'https://analytics.google.com',
        features: ['Traffic Analysis', 'User Behavior', 'Conversion Tracking', 'Custom Reports']
      },
      {
        name: 'Hotjar',
        description: 'Behavior analytics tool providing heatmaps, recordings, and user feedback.',
        category: 'Analytics',
        pricing: 'Freemium',
        rating: 4.3,
        website: 'https://hotjar.com',
        features: ['Heatmaps', 'Session Recordings', 'User Surveys', 'Conversion Funnels'],
        isRecommended: true
      },
      {
        name: 'SEMrush',
        description: 'All-in-one digital marketing toolkit for SEO, PPC, and content marketing.',
        category: 'SEO',
        pricing: 'Paid',
        rating: 4.4,
        website: 'https://semrush.com',
        features: ['Keyword Research', 'Competitor Analysis', 'Site Audit', 'Rank Tracking']
      },
      {
        name: 'Ahrefs',
        description: 'Comprehensive SEO toolset for keyword research, backlink analysis, and site auditing.',
        category: 'SEO',
        pricing: 'Paid',
        rating: 4.6,
        website: 'https://ahrefs.com',
        features: ['Backlink Analysis', 'Keyword Explorer', 'Content Gap', 'Site Explorer']
      }
    ]
  },
  {
    name: 'Productivity',
    description: 'Tools to enhance workflow, automate tasks, and boost productivity',
    icon: '⚡',
    tools: [
      {
        name: 'Raycast',
        description: 'Extensible launcher that lets you complete tasks, calculate, share common links, and much more.',
        category: 'Productivity',
        pricing: 'Freemium',
        rating: 4.9,
        website: 'https://raycast.com',
        features: ['Quick Actions', 'Extensions', 'Clipboard History', 'Calculator'],
        isRecommended: true
      },
      {
        name: 'Alfred',
        description: 'Productivity app for macOS that boosts efficiency with hotkeys and keywords.',
        category: 'Productivity',
        pricing: 'Freemium',
        rating: 4.7,
        website: 'https://alfredapp.com',
        features: ['Quick Search', 'Workflows', 'Clipboard History', 'File Navigation']
      },
      {
        name: 'Loom',
        description: 'Video messaging tool for quick screen recordings and async communication.',
        category: 'Productivity',
        pricing: 'Freemium',
        rating: 4.5,
        website: 'https://loom.com',
        features: ['Screen Recording', 'Video Messages', 'Team Libraries', 'Analytics']
      },
      {
        name: 'CleanMyMac X',
        description: 'System optimization tool for Mac that cleans, protects, and speeds up your computer.',
        category: 'Productivity',
        pricing: 'Paid',
        rating: 4.6,
        website: 'https://cleanmymac.com',
        features: ['System Cleanup', 'Malware Protection', 'Performance Monitor', 'Uninstaller']
      }
    ]
  },
  {
    name: 'Content & Marketing',
    description: 'Tools for creating content, managing social media, and marketing automation',
    icon: '📢',
    tools: [
      {
        name: 'Canva',
        description: 'User-friendly graphic design platform with templates for social media, presentations, and more.',
        category: 'Content',
        pricing: 'Freemium',
        rating: 4.4,
        website: 'https://canva.com',
        features: ['Design Templates', 'Stock Photos', 'Brand Kit', 'Team Collaboration']
      },
      {
        name: 'Buffer',
        description: 'Social media management platform for scheduling posts and analyzing performance.',
        category: 'Marketing',
        pricing: 'Freemium',
        rating: 4.2,
        website: 'https://buffer.com',
        features: ['Post Scheduling', 'Analytics', 'Team Management', 'Content Calendar']
      },
      {
        name: 'Mailchimp',
        description: 'Email marketing platform with automation, analytics, and audience management.',
        category: 'Marketing',
        pricing: 'Freemium',
        rating: 4.1,
        website: 'https://mailchimp.com',
        features: ['Email Campaigns', 'Automation', 'Audience Segmentation', 'A/B Testing']
      },
      {
        name: 'Grammarly',
        description: 'AI-powered writing assistant that helps improve grammar, clarity, and style.',
        category: 'Content',
        pricing: 'Freemium',
        rating: 4.3,
        website: 'https://grammarly.com',
        features: ['Grammar Check', 'Style Suggestions', 'Plagiarism Detection', 'Browser Extension'],
        isRecommended: true
      }
    ]
  }
];

const getPricingColor = (pricing: string) => {
  switch (pricing) {
    case 'Free':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'Paid':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'Freemium':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={i} className="text-yellow-400">★</span>);
  }
  
  if (hasHalfStar) {
    stars.push(<span key="half" className="text-yellow-400">☆</span>);
  }
  
  const remainingStars = 5 - Math.ceil(rating);
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
  }
  
  return stars;
};

const DinoTools = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/5 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <span className="text-2xl">🛠️</span>
              <span className="text-sm font-medium text-primary">Dino Tools</span>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Essential Tools for Digital Success
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover the industry-standard tools that power our workflow and help us deliver exceptional digital experiences. 
              From development to design, project management to analytics.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Carefully curated</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Industry-tested</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Team-approved</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {toolCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-4xl">{category.icon}</div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {category.name}
                  </h2>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className={`bg-card border rounded-lg p-6 hover:shadow-lg transition-all duration-200 ${
                      tool.isRecommended ? 'ring-2 ring-primary/20 border-primary/50' : 'border-border'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-foreground">
                            {tool.name}
                          </h3>
                          {tool.isRecommended && (
                            <Badge className="bg-primary text-primary-foreground text-xs">
                              Recommended
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="outline" className={getPricingColor(tool.pricing)}>
                            {tool.pricing}
                          </Badge>
                          <div className="flex items-center gap-1">
                            {renderStars(tool.rating)}
                            <span className="text-sm text-muted-foreground ml-1">
                              ({tool.rating})
                            </span>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          {tool.description}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-medium text-foreground mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {tool.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1">
                        Visit Website
                      </Button>
                      <Button variant="ghost" size="sm">
                        Learn More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why These Tools */}
      <div className="bg-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why We Choose These Tools
              </h2>
              <p className="text-lg text-muted-foreground">
                Our tool selection is based on real-world experience building hundreds of successful projects
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Battle-Tested</h3>
                <p className="text-sm text-muted-foreground">
                  Every tool has been thoroughly tested in real client projects and proven to deliver results.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Productivity Focused</h3>
                <p className="text-sm text-muted-foreground">
                  We choose tools that maximize efficiency and help us deliver projects faster without compromising quality.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Team Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  All tools support seamless collaboration between our team members and with our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tool Recommendations */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Top Recommendations
            </h2>
            <p className="text-lg text-muted-foreground">
              If you&apos;re just starting out, these are the essential tools we recommend first
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolCategories.flatMap(category => 
              category.tools.filter(tool => tool.isRecommended)
            ).map((tool, index) => (
              <div key={index} className="bg-card border border-primary/50 rounded-lg p-6 text-center ring-2 ring-primary/20">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-primary">{tool.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{tool.name}</h3>
                <Badge variant="outline" className={getPricingColor(tool.pricing)} >
                  {tool.pricing}
                </Badge>
                <p className="text-sm text-muted-foreground mt-2">
                  {tool.description.split('.')[0]}
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
              Need Help Choosing the Right Tools?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team can help you select the best tools for your specific needs and budget. 
              Get personalized recommendations based on your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Get Tool Recommendations
              </Button>
              <Button variant="outline" size="lg">
                Book a Consultation
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Free consultation • Personalized advice • No commitment required
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DinoTools;