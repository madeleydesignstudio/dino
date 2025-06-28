import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// All projects data from the comprehensive JSON
const allProjects = [
  {
    name: "Huly",
    forks: 1433,
    stars: 21645,
    tagline: "Open Source Alternative to: Monday",
    description: "An open-source platform that combines project management, team communication, document collaboration, and virtual office spaces in one integrated solution.",
    alternatives_to: ["Monday"]
  },
  {
    name: "Twenty",
    forks: 3343,
    stars: 28528,
    tagline: "Open Source Alternative to HubSpot",
    description: "Open-source CRM platform for efficient customer data management, collaboration, and relationship nurturing",
    alternatives_to: ["HubSpot"]
  },
  {
    name: "ERPNext",
    forks: 8609,
    stars: 25899,
    tagline: "Open Source Alternative to HubSpot",
    description: "Open-source ERP solution offering modules for accounting, inventory, HR, CRM, and more. Customizable and scalable for businesses of all sizes.",
    alternatives_to: ["HubSpot"]
  },
  {
    name: "EspoCRM",
    forks: 680,
    stars: 2291,
    tagline: "Open Source Alternative to HubSpot",
    description: "Open-source CRM software for managing customers, companies, projects and opportunities. Intuitive interface with cloud and self-hosted options available.",
    alternatives_to: ["HubSpot"]
  },
  {
    name: "Atomic CRM",
    forks: 233,
    stars: 409,
    tagline: "Open Source Alternative to HubSpot",
    description: "Build a customizable CRM that matches your company's vision, designed for developers and loved by end users.",
    alternatives_to: ["HubSpot"]
  },
  {
    name: "Pythagora",
    forks: 0,
    stars: 0,
    tagline: "Transform the way developers build internal tools with AI assistance.",
    description: "A VS Code extension that uses AI to help developers plan, write, test, and deploy full-stack web applications with minimal coding required.",
    alternatives_to: ["Replit", "Lovable"]
  },
  {
    name: "Bolt.new",
    forks: 0,
    stars: 0,
    tagline: "Streamline the process of building and deploying web applications.",
    description: "A platform that enables developers to quickly create, modify, and deploy full-stack web applications using various popular frameworks and technologies.",
    alternatives_to: ["Replit", "Lovable"]
  },
  {
    name: "Reflex",
    forks: 170,
    stars: 21500,
    tagline: "Build powerful web applications using 100% Python without touching JavaScript.",
    description: "Create complete web applications using pure Python code. Features AI-powered generation, built-in components, and one-click deployment with automatic scaling.",
    alternatives_to: ["Replit", "Lovable"]
  },
  {
    name: "Dropbase",
    forks: 0,
    stars: 0,
    tagline: "Revolutionize software development with AI-powered natural language processing.",
    description: "A natural language-driven development platform that combines AI, drag-and-drop interfaces, and code customization to build web apps and automation tools.",
    alternatives_to: ["Replit", "Lovable"]
  },
  {
    name: "Logseq",
    forks: null,
    stars: null,
    tagline: "Your knowledge, your way.",
    description: "A privacy-first, open-source knowledge base that works on top of your local plain-text Markdown and Org-mode files, suitable for note-taking and task management.",
    alternatives_to: []
  },
  {
    name: "Notesnook",
    forks: null,
    stars: null,
    tagline: "Secure your notes, anywhere.",
    description: "End-to-end encrypted note-taking app with cross-platform sync, rich text editing, and offline support for ultimate privacy and productivity.",
    alternatives_to: []
  },
  {
    name: "AppFlowy",
    forks: null,
    stars: null,
    tagline: "Your Notion, your way.",
    description: "An open-source alternative to Notion, offering powerful note-taking, task management, and database features in a customizable interface.",
    alternatives_to: []
  },
  {
    name: "Joplin",
    forks: null,
    stars: null,
    tagline: "Your notes, your control.",
    description: "A free, cross-platform note-taking and to-do application with end-to-end encryption for seamless organization and productivity.",
    alternatives_to: []
  },
  {
    name: "SiYuan",
    forks: null,
    stars: null,
    tagline: "Your knowledge, your structure.",
    description: "A personal knowledge management system that prioritizes privacy, supports Markdown, and offers block-level referencing and bidirectional linking.",
    alternatives_to: []
  },
  {
    name: "Docmost",
    forks: null,
    stars: null,
    tagline: "Collaborate and document seamlessly.",
    description: "A feature-rich wiki platform with real-time collaboration, rich-text editing, advanced permissions, and support for diagrams, translations, and file management.",
    alternatives_to: []
  },
  {
    name: "Reor",
    forks: null,
    stars: null,
    tagline: "Your ideas, connected.",
    description: "A private, local AI app for managing personal knowledge, featuring semantic search, auto-connected ideas, and WYSIWYG Markdown editing.",
    alternatives_to: []
  },
  {
    name: "AnyType",
    forks: null,
    stars: null,
    tagline: "Your thoughts, organized.",
    description: "A versatile, open-source tool for organizing thoughts, notes, and data with customizable objects and relational structures.",
    alternatives_to: []
  },
  {
    name: "Blinko",
    forks: null,
    stars: null,
    tagline: "Capture your ideas, effortlessly.",
    description: "The next generation of open-source AI-powered card notes designed to help you quickly capture and organize inspiration so that ideas never run out.",
    alternatives_to: []
  },
  {
    name: "XWiki",
    forks: null,
    stars: null,
    tagline: "Your knowledge, structured.",
    description: "A flexible, feature-rich wiki software that helps organizations structure and share knowledge efficiently.",
    alternatives_to: []
  },
  {
    name: "OpenNotas",
    forks: null,
    stars: null,
    tagline: "Your notes, your privacy.",
    description: "A multi-platform, end-to-end encrypted note-taking app that offers simplicity, synchronization, and offline functionality.",
    alternatives_to: []
  },
  {
    name: "Orgnise",
    forks: null,
    stars: null,
    tagline: "Manage your projects, effortlessly.",
    description: "A versatile project management platform that combines task organization, team collaboration, and workflow automation in one intuitive interface.",
    alternatives_to: []
  },
  {
    name: "Justnote",
    forks: null,
    stars: null,
    tagline: "Your notes, your control.",
    description: "A secure note-taking app that lets you easily create and sync notes across devices while maintaining full control of your data.",
    alternatives_to: []
  },
  {
    name: "Gitea",
    forks: null,
    stars: null,
    tagline: "A powerful, open-source Git service that puts you in control of your code.",
    description: "A lightweight, fast, and customizable Git service that simplifies code hosting and collaboration for teams of all sizes.",
    alternatives_to: ["GitHub"]
  },
  {
    name: "Gogs",
    forks: null,
    stars: null,
    tagline: "A lightweight Git service designed for effortless self-hosting on your own infrastructure.",
    description: "Lightweight, cross-platform Git service for self-hosting. Easy installation, minimal requirements, runs on Raspberry Pi. 100% open source and free.",
    alternatives_to: ["GitHub"]
  },
  {
    name: "Harness",
    forks: null,
    stars: null,
    tagline: "A comprehensive software delivery platform that empowers developers to streamline their entire development workflow.",
    description: "Streamline code delivery with an open-source CI/CD platform featuring Git integration, fast pipelines, and hosted development environments.",
    alternatives_to: ["GitHub"]
  },
  {
    name: "GitLab",
    forks: null,
    stars: null,
    tagline: "The leading AI-powered DevSecOps platform, designed to revolutionize software development from planning to production.",
    description: "A comprehensive AI-powered DevSecOps platform that integrates development, security, and operations, streamlining software delivery and enhancing productivity.",
    alternatives_to: ["GitHub"]
  },
  {
    name: "GitButler",
    forks: null,
    stars: null,
    tagline: "An innovative Git client that transforms the way developers manage their version control workflow.",
    description: "GitButler is a powerful Git client that enables seamless work on multiple branches concurrently, enhancing your existing workflow.",
    alternatives_to: ["GitHub"]
  },
  {
    name: "Tegon",
    forks: null,
    stars: null,
    tagline: "A powerful, open-source issue tracking tool designed for modern development teams.",
    description: "Open-source, customizable, and lightweight issue tracker with AI-powered features and seamless integrations.",
    alternatives_to: ["GitHub"]
  },
  {
    name: "Coolify",
    forks: null,
    stars: null,
    tagline: "Empower developers with self-hosted cloud computing.",
    description: "Open-source, self-hosted PaaS for seamless application deployment, database management, and service orchestration",
    alternatives_to: ["Netlify"]
  },
  {
    name: "Dokploy",
    forks: null,
    stars: null,
    tagline: "Simplifies deployment and management of applications on any VPS.",
    description: "Streamline your deployment process with Dokploy. Manage applications and databases on any VPS using Docker and Traefik for improved performance and security.",
    alternatives_to: ["Netlify"]
  },
  {
    name: "Quantum",
    forks: null,
    stars: null,
    tagline: "Centralized solution for hosting multiple applications and services.",
    description: "Open-source alternative to Vercel, Heroku, and Netlify for hosting applications on your own infrastructure",
    alternatives_to: ["Netlify"]
  },
  {
    name: "Ptah.sh",
    forks: null,
    stars: null,
    tagline: "Revolutionizes the way developers deploy and manage applications.",
    description: "Ptah.sh simplifies hosting databases, services, and applications on your own servers with SSL and backups, offering a cost-effective Heroku alternative.",
    alternatives_to: ["Netlify"]
  },
  // Continue with the rest of the data...
  {
    name: "Apache Superset",
    forks: null,
    stars: null,
    tagline: "Powerful, open-source data exploration and visualization platform.",
    description: "Open-source solution for fast, intuitive data exploration and visualization, supporting various databases and skill levels.",
    alternatives_to: ["Tableau"]
  },
  {
    name: "Splitpro",
    forks: 71,
    stars: 672,
    tagline: "Open Source Alternative to Splitwise",
    description: "Free, open-source expense sharing app with multi-currency support, unequal splits, and receipt uploads. Import from Splitwise and enjoy PWA functionality.",
    alternatives_to: ["Splitwise"]
  },
  {
    name: "Monetr",
    forks: 36,
    stars: 416,
    tagline: "Open Source Alternative to YNAB",
    description: "Manage your money confidently with monetr, putting aside what you need and spending what you want.",
    alternatives_to: ["YNAB"]
  },
  {
    name: "Erxes",
    forks: 1147,
    stars: 3639,
    tagline: "Open-source growth platform for customer-centric teams",
    description: "All-in-one solution for marketing, sales, and customer service. Boost engagement, streamline workflows, and drive growth.",
    alternatives_to: ["FreshDesk"]
  },
  {
    name: "Komiser",
    forks: 444,
    stars: 4058,
    tagline: "Open Source Alternative to BetterStack",
    description: "Discover, analyze, and optimize your multi-cloud infrastructure for enhanced efficiency and cost savings",
    alternatives_to: ["BetterStack"]
  },
  {
    name: "FleetBase",
    forks: 370,
    stars: 853,
    tagline: "Open Source Alternative to Shipsy",
    description: "Fleetbase is a comprehensive open source logistics suite offering API, TMS, driver and customer apps for streamlined operations and development.",
    alternatives_to: ["Shipsy"]
  }
];

// Helper functions
const formatNumber = (num: number | null | undefined): string => {
  if (num === null || num === undefined) return 'N/A';
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
};

const createSlug = (name: string): string => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

const findProjectBySlug = (slug: string) => {
  return allProjects.find(project => createSlug(project.name) === slug);
};

const getSimilarProjects = (currentProject: any) => {
  return allProjects.filter(project => 
    project.name !== currentProject.name &&
    project.alternatives_to.some((alt: string) => currentProject.alternatives_to.includes(alt))
  ).slice(0, 3);
};

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const project = findProjectBySlug(params.slug);
  
  if (!project) {
    notFound();
  }

  const similarProjects = getSimilarProjects(project);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-neutral-200">
        <div className="px-8 py-4">
          <div className="mx-auto max-w-4xl">
            <nav className="flex items-center space-x-2 text-sm text-neutral-600">
              <Link href="/resources/dino-opensource" className="hover:text-neutral-900">
                Open Source
              </Link>
              <span>/</span>
              <span className="text-neutral-900">{project.name}</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Project Header */}
      <div className="px-8 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-green-100">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h1 className="font-bold text-3xl text-neutral-900 mb-2">{project.name}</h1>
                <p className="text-neutral-600 text-lg">{project.tagline}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-neutral-600">
              {project.stars && (
                <div className="flex items-center gap-1">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>{formatNumber(project.stars)} stars</span>
                </div>
              )}
              {project.forks && (
                <div className="flex items-center gap-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  <span>{formatNumber(project.forks)} forks</span>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-neutral-700 text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Alternatives */}
          {project.alternatives_to && project.alternatives_to.length > 0 && (
            <div className="mb-8">
              <h3 className="font-semibold text-neutral-900 mb-3">Alternative to:</h3>
              <div className="flex flex-wrap gap-2">
                {project.alternatives_to.map((alternative, index) => (
                  <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    {alternative}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mb-12">
            <Button className="bg-green-600 hover:bg-green-700">
              View on GitHub
            </Button>
            <Button variant="outline">
              Visit Website
            </Button>
            <Button variant="outline">
              Documentation
            </Button>
          </div>
        </div>
      </div>

      {/* Similar Projects */}
      {similarProjects.length > 0 && (
        <div className="border-t border-neutral-200 bg-neutral-50">
          <div className="px-8 py-16">
            <div className="mx-auto max-w-4xl">
              <h2 className="font-bold text-2xl text-neutral-900 mb-8">
                Similar Projects
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {similarProjects.map((similarProject, index) => (
                  <Link key={index} href={`/resources/dino-opensource/${createSlug(similarProject.name)}`}>
                    <div className="rounded-lg border border-neutral-200 bg-white p-6 hover:shadow-md transition-shadow cursor-pointer">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-neutral-900">{similarProject.name}</h3>
                        <div className="flex items-center gap-2 text-xs text-neutral-500">
                          {similarProject.stars && <span>★ {formatNumber(similarProject.stars)}</span>}
                        </div>
                      </div>
                      <p className="text-neutral-600 text-sm mb-3 line-clamp-2">
                        {similarProject.description}
                      </p>
                      <div className="text-xs text-neutral-500">
                        {similarProject.tagline}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Back to Directory */}
      <div className="border-t border-neutral-200">
        <div className="px-8 py-8">
          <div className="mx-auto max-w-4xl">
            <Link href="/resources/dino-opensource">
              <Button variant="outline" className="flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Open Source Directory
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage; 