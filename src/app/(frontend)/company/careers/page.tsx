import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface JobRole {
  id: string;
  title: string;
  department: string;
  location: string;
  salary: string;
  skillLevel: 'Junior' | 'Mid-Level' | 'Senior' | 'Lead' | 'Principal';
  type: 'Full-time' | 'Part-time' | 'Contract';
  description: string;
  requirements: string[];
  benefits: string[];
}

const jobRoles: JobRole[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    department: 'Engineering',
    location: 'London, UK (Hybrid)',
    salary: '£28,000 - £35,000',
    skillLevel: 'Junior',
    type: 'Full-time',
    description: 'Join our dynamic frontend team to build exceptional user experiences using React, TypeScript, and modern web technologies.',
    requirements: [
      '1-2 years of React experience',
      'Strong knowledge of HTML, CSS, JavaScript',
      'Experience with TypeScript',
      'Understanding of responsive design principles'
    ],
    benefits: [
      'Flexible working hours',
      'Learning & development budget',
      'Modern tech stack',
      'Mentorship program'
    ]
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Manchester, UK (Remote)',
    salary: '£45,000 - £55,000',
    skillLevel: 'Mid-Level',
    type: 'Full-time',
    description: 'Work across our entire technology stack, building scalable applications with Node.js, React, and cloud technologies.',
    requirements: [
      '3-5 years full-stack development experience',
      'Proficiency in Node.js and React',
      'Database design experience (PostgreSQL/MongoDB)',
      'Cloud platform experience (AWS/GCP)',
      'API design and development'
    ],
    benefits: [
      'Competitive salary',
      '25 days holiday + bank holidays',
      'Private healthcare',
      'Stock options',
      'Remote work flexibility'
    ]
  },
  {
    id: '3',
    title: 'Senior Backend Engineer',
    department: 'Engineering',
    location: 'Edinburgh, UK (Hybrid)',
    salary: '£65,000 - £80,000',
    skillLevel: 'Senior',
    type: 'Full-time',
    description: 'Lead the development of our core backend services, mentoring junior developers while architecting scalable solutions.',
    requirements: [
      '5+ years backend development experience',
      'Expert knowledge of Node.js, Python, or Go',
      'Microservices architecture experience',
      'Database optimization and scaling',
      'Team leadership and mentoring experience'
    ],
    benefits: [
      'Excellent salary package',
      'Equity participation',
      'Professional development budget',
      'Conference attendance',
      'Sabbatical leave options'
    ]
  },
  {
    id: '4',
    title: 'Technical Lead',
    department: 'Engineering',
    location: 'Birmingham, UK (Hybrid)',
    salary: '£75,000 - £95,000',
    skillLevel: 'Lead',
    type: 'Full-time',
    description: 'Drive technical strategy and lead cross-functional teams to deliver high-impact products and features.',
    requirements: [
      '7+ years software development experience',
      '3+ years in technical leadership roles',
      'Strong architecture and system design skills',
      'Experience with agile methodologies',
      'Excellent communication and stakeholder management'
    ],
    benefits: [
      'Leadership development programs',
      'Significant equity package',
      'Flexible working arrangements',
      'Executive coaching',
      'Innovation time allocation'
    ]
  },
  {
    id: '5',
    title: 'Principal Engineer',
    department: 'Engineering',
    location: 'London, UK (Flexible)',
    salary: '£95,000 - £130,000',
    skillLevel: 'Principal',
    type: 'Full-time',
    description: 'Shape the technical vision of our platform, leading architectural decisions and driving engineering excellence across the organization.',
    requirements: [
      '10+ years software engineering experience',
      'Proven track record in system architecture',
      'Experience scaling engineering teams',
      'Strategic thinking and technical vision',
      'Open source contributions preferred'
    ],
    benefits: [
      'Top-tier compensation package',
      'Substantial equity allocation',
      'Research and development time',
      'Speaking opportunities',
      'Ultimate flexibility in work arrangements'
    ]
  }
];

const getSkillLevelColor = (level: JobRole['skillLevel']) => {
  switch (level) {
    case 'Junior':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'Mid-Level':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'Senior':
      return 'bg-purple-100 text-purple-800 border-purple-200';
    case 'Lead':
      return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'Principal':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const CareersPage = () => {
  return (
    <div className="min-h-screen ">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary/5 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Join Our Team
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We&apos;re looking for talented individuals to help us build the future of digital experiences. 
              Find your next opportunity and grow with us.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Remote-first culture</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Competitive benefits</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Growth opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Open Positions
            </h2>
            <p className="text-muted-foreground">
              {jobRoles.length} positions available across different skill levels
            </p>
          </div>

          <div className="space-y-6">
            {jobRoles.map((job) => (
              <div
                key={job.id}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {job.title}
                      </h3>
                      <Badge 
                        variant="outline" 
                        className={getSkillLevelColor(job.skillLevel)}
                      >
                        {job.skillLevel}
                      </Badge>
                      <Badge variant="secondary">
                        {job.type}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                    </div>
                    <p className="text-foreground mb-4">
                      {job.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-xl font-bold text-primary">
                      {job.salary}
                    </div>
                    <Button className="whitespace-nowrap">
                      Apply Now
                    </Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-border">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Requirements</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Benefits</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-secondary/50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Don&apos;t see a perfect match?
            </h3>
            <p className="text-muted-foreground mb-4">
              We&apos;re always looking for talented individuals. Send us your CV and we&apos;ll get in touch when something suitable comes up.
            </p>
            <Button variant="outline">
              Send General Application
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;