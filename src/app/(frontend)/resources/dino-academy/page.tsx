import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface LearningTrack {
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  modules: number;
  isPopular?: boolean;
}

interface Course {
  id: string;
  title: string;
  description: string;
  category: 'Development' | 'Design' | 'Business' | 'Strategy';
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  lessons: number;
  isFree: boolean;
  topics: string[];
}

interface Resource {
  title: string;
  description: string;
  type: 'Guide' | 'Template' | 'Checklist' | 'Tool';
  downloadUrl?: string;
}

const learningTracks: LearningTrack[] = [
  {
    id: '1',
    title: 'Web Development Fundamentals',
    description: 'Master the core technologies and best practices for modern web development.',
    icon: '💻',
    difficulty: 'Beginner',
    duration: '6 weeks',
    modules: 8,
    isPopular: true
  },
  {
    id: '2',
    title: 'UI/UX Design Mastery',
    description: 'Learn design thinking, user research, and create stunning user interfaces.',
    icon: '🎨',
    difficulty: 'Intermediate',
    duration: '8 weeks',
    modules: 10
  },
  {
    id: '3',
    title: 'Digital Strategy & Growth',
    description: 'Understand how to leverage digital tools for business growth and success.',
    icon: '🚀',
    difficulty: 'Intermediate',
    duration: '4 weeks',
    modules: 6
  },
  {
    id: '4',
    title: 'Advanced Performance Optimization',
    description: 'Deep dive into web performance, Core Web Vitals, and optimization techniques.',
    icon: '⚡',
    difficulty: 'Advanced',
    duration: '5 weeks',
    modules: 7
  }
];

const featuredCourses: Course[] = [
  {
    id: '1',
    title: 'Building Your First React Website',
    description: 'A comprehensive guide to creating modern, interactive websites using React and Next.js.',
    category: 'Development',
    duration: '3 hours',
    level: 'Beginner',
    lessons: 12,
    isFree: true,
    topics: ['React Basics', 'Component Architecture', 'State Management', 'Deployment']
  },
  {
    id: '2',
    title: 'Design Systems That Scale',
    description: 'Learn how to create and maintain design systems that grow with your organization.',
    category: 'Design',
    duration: '2.5 hours',
    level: 'Intermediate',
    lessons: 8,
    isFree: false,
    topics: ['Component Libraries', 'Tokens', 'Documentation', 'Governance']
  },
  {
    id: '3',
    title: 'SEO & Performance Optimization',
    description: 'Master the art of making websites fast, accessible, and search engine friendly.',
    category: 'Strategy',
    duration: '4 hours',
    level: 'Intermediate',
    lessons: 15,
    isFree: true,
    topics: ['Core Web Vitals', 'Technical SEO', 'Accessibility', 'Analytics']
  },
  {
    id: '4',
    title: 'Client Communication & Project Management',
    description: 'Essential skills for managing client relationships and delivering successful projects.',
    category: 'Business',
    duration: '2 hours',
    level: 'Beginner',
    lessons: 10,
    isFree: false,
    topics: ['Client Onboarding', 'Scope Management', 'Communication', 'Delivery']
  }
];

const freeResources: Resource[] = [
  {
    title: 'Website Launch Checklist',
    description: 'Complete checklist to ensure your website is ready for launch.',
    type: 'Checklist'
  },
  {
    title: 'UI Component Library Template',
    description: 'Starter template for building your own component library.',
    type: 'Template'
  },
  {
    title: 'Performance Audit Guide',
    description: 'Step-by-step guide to auditing and improving website performance.',
    type: 'Guide'
  },
  {
    title: 'Client Brief Template',
    description: 'Professional template for gathering client requirements.',
    type: 'Template'
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'Intermediate':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'Advanced':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Development':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'Design':
      return 'bg-purple-100 text-purple-800 border-purple-200';
    case 'Business':
      return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'Strategy':
      return 'bg-teal-100 text-teal-800 border-teal-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const DinoAcademy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/5 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <span className="text-2xl">🎓</span>
              <span className="text-sm font-medium text-primary">Dino Academy</span>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Level Up Your Digital Skills
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Learn from industry experts with our comprehensive courses, guides, and resources. 
              Master the skills that drive successful digital projects and grow your expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Browse Courses
              </Button>
              <Button variant="outline" size="lg">
                Download Free Resources
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-b border-border py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Courses</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">1,200+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Completion Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">4.8★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Tracks */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Learning Tracks
            </h2>
            <p className="text-lg text-muted-foreground">
              Structured learning paths to help you master specific skills and advance your career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningTracks.map((track) => (
              <div
                key={track.id}
                className={`bg-card border rounded-lg p-6 hover:shadow-lg transition-all duration-200 ${
                  track.isPopular ? 'ring-2 ring-primary/20 border-primary/50' : 'border-border'
                }`}
              >
                {track.isPopular && (
                  <div className="mb-4">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{track.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {track.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {track.description}
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Level:</span>
                    <Badge variant="outline" className={getDifficultyColor(track.difficulty)}>
                      {track.difficulty}
                    </Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{track.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Modules:</span>
                    <span className="font-medium">{track.modules}</span>
                  </div>
                </div>

                <Button className="w-full" variant={track.isPopular ? 'default' : 'outline'}>
                  Start Learning
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="bg-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Featured Courses
              </h2>
              <p className="text-lg text-muted-foreground">
                Hand-picked courses covering essential skills for modern digital professionals
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant="outline" className={getCategoryColor(course.category)}>
                          {course.category}
                        </Badge>
                        <Badge variant="outline" className={getDifficultyColor(course.level)}>
                          {course.level}
                        </Badge>
                        {course.isFree && (
                          <Badge className="bg-green-600 text-white">
                            Free
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {course.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {course.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Duration: </span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Lessons: </span>
                      <span className="font-medium">{course.lessons}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-foreground mb-2">What you&apos;ll learn:</h4>
                    <div className="flex flex-wrap gap-1">
                      {course.topics.map((topic, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full">
                    {course.isFree ? 'Start Free Course' : 'Enroll Now'}
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline">
                View All Courses
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Free Resources */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Free Resources
            </h2>
            <p className="text-lg text-muted-foreground">
              Download our comprehensive guides, templates, and checklists to kickstart your projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {freeResources.map((resource, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-200"
              >
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-semibold">
                      {resource.type === 'Guide' && '📚'}
                      {resource.type === 'Template' && '📄'}
                      {resource.type === 'Checklist' && '✅'}
                      {resource.type === 'Tool' && '🛠️'}
                    </span>
                  </div>
                  <Badge variant="outline" className="mb-2">
                    {resource.type}
                  </Badge>
                </div>
                
                <h3 className="font-semibold text-foreground mb-2 text-center">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  {resource.description}
                </p>
                
                <Button variant="outline" className="w-full">
                  Download Free
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expert Insights Section */}
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Learn from Industry Experts
              </h2>
              <p className="text-lg text-muted-foreground">
                Our courses are created by professionals with years of experience in building successful digital products
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍💻</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Real-World Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Learn from experts who have built and launched hundreds of successful websites and applications.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Practical Approach</h3>
                <p className="text-sm text-muted-foreground">
                  Every lesson includes hands-on exercises and real project examples you can apply immediately.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Career Growth</h3>
                <p className="text-sm text-muted-foreground">
                  Develop skills that are in high demand and advance your career in the digital industry.
                </p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Ready to Start Your Learning Journey?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of professionals who have advanced their careers through Dino Academy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Explore All Courses
                </Button>
                <Button variant="outline" size="lg">
                  Book a Consultation
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Not sure where to start? Our experts can help you choose the right learning path.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DinoAcademy;