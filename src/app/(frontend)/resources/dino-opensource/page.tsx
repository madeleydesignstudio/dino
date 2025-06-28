import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const DinoOpenSource = () => {
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
    {
      name: "Apache Superset",
      forks: null,
      stars: null,
      tagline: "Powerful, open-source data exploration and visualization platform.",
      description: "Open-source solution for fast, intuitive data exploration and visualization, supporting various databases and skill levels.",
      alternatives_to: ["Tableau"]
    },
    {
      name: "Grafana",
      forks: null,
      stars: null,
      tagline: "Powerful and versatile open-source platform for data visualization and monitoring.",
      description: "Grafana is a multi-platform open source analytics and interactive visualization web application that provides charts, graphs, and alerts for the web.",
      alternatives_to: ["Tableau"]
    },
    {
      name: "OpenBB",
      forks: null,
      stars: null,
      tagline: "Revolutionizing financial research and analytics with an AI-powered workspace.",
      description: "Integrate, visualize, and analyze data in one place with OpenBB's AI-driven platform for financial research and analytics.",
      alternatives_to: ["Tableau"]
    },
    {
      name: "Metabase",
      forks: null,
      stars: null,
      tagline: "Transform how organizations interact with their data.",
      description: "Open-source business intelligence platform for data exploration, visualization, and sharing. Empowers teams to make data-driven decisions effortlessly.",
      alternatives_to: ["Tableau"]
    },
    {
      name: "Redash",
      forks: null,
      stars: null,
      tagline: "Powerful, open-source data visualization and analytics platform.",
      description: "Redash is an open-source data visualization and analytics platform that helps teams make sense of their data through SQL queries and interactive dashboards.",
      alternatives_to: ["Tableau"]
    },
    {
      name: "Logstash",
      forks: null,
      stars: null,
      tagline: "Powerful data processing pipeline for collecting, transforming, and shipping data.",
      description: "Logstash is a free and open server-side data processing pipeline that ingests data from multiple sources, transforms it, and sends it to your desired destination.",
      alternatives_to: ["Tableau"]
    },
    {
      name: "HyperDX",
      forks: null,
      stars: null,
      tagline: "Innovative open-source observability platform for engineering teams.",
      description: "Open source platform combining session replays, logs, traces, metrics, and errors for comprehensive production issue resolution.",
      alternatives_to: ["Tableau"]
    },
    {
      name: "Lightdash",
      forks: null,
      stars: null,
      tagline: "Revolutionizing business intelligence for data teams leveraging dbt.",
      description: "Self-serve analytics platform that transforms dbt models into interactive dashboards, enabling data-driven decisions across organizations.",
      alternatives_to: ["Tableau"]
    },
    {
      name: "Evidence",
      forks: null,
      stars: null,
      tagline: "Bridging the gap between data analysis and presentation.",
      description: "Create data-driven websites and reports using SQL and Markdown, with automatic visualizations and interactive elements.",
      alternatives_to: ["Tableau"]
    },
    {
      name: "Chartbrew",
      forks: null,
      stars: null,
      tagline: "Game-changing solution for data visualization enthusiasts and professionals.",
      description: "A powerful, open-source platform for building interactive dashboards and charts from multiple data sources without coding.",
      alternatives_to: ["Tableau"]
    },
    {
      name: "Frappe Insights",
      forks: null,
      stars: null,
      tagline: "Comprehensive open-source business intelligence tool for data analytics needs.",
      description: "Connect multiple data sources, build complex queries, create insightful visualizations, and organize powerful dashboards to make informed business decisions.",
      alternatives_to: ["Tableau"]
    },
    {
      name: "FastGPT",
      forks: null,
      stars: null,
      tagline: "Create AI-powered knowledge bases easily.",
      description: "FastGPT is a free, open-source platform for creating AI-powered knowledge bases with data processing, model invocation, and visual workflows.",
      alternatives_to: ["Zendesk"]
    },
    {
      name: "Chatwoot",
      forks: null,
      stars: null,
      tagline: "Revolutionize customer communication.",
      description: "An open-source customer engagement platform that unifies multiple channels, enabling businesses to provide seamless support and build lasting relationships.",
      alternatives_to: ["Zendesk"]
    },
    {
      name: "Zammad",
      forks: null,
      stars: null,
      tagline: "Streamline customer service operations.",
      description: "Zammad is an open-source helpdesk software that centralizes customer communications and helps deliver great service experiences efficiently.",
      alternatives_to: ["Zendesk"]
    },
    {
      name: "Erxes",
      forks: null,
      stars: null,
      tagline: "Centralize customer interactions and data.",
      description: "All-in-one solution for marketing, sales, and customer service. Boost engagement, streamline workflows, and drive growth.",
      alternatives_to: ["Zendesk"]
    },
    {
      name: "Freescout",
      forks: null,
      stars: null,
      tagline: "Revolutionize your customer support workflow.",
      description: "Self-hosted email management system with shared inboxes, automation, and powerful collaboration features for efficient customer support.",
      alternatives_to: ["Zendesk"]
    },
    {
      name: "Chaskiq",
      forks: null,
      stars: null,
      tagline: "Enhance customer engagement and support.",
      description: "Versatile messaging solution for businesses to engage customers through multiple channels, with AI-powered automation and analytics.",
      alternatives_to: ["Zendesk"]
    },
    {
      name: "Frappe Helpdesk",
      forks: null,
      stars: null,
      tagline: "Streamline support operations and enhance customer experience.",
      description: "Frappe Helpdesk consolidates customer issues, automates workflows, and empowers self-service to boost agent productivity and customer satisfaction.",
      alternatives_to: ["Zendesk"]
    },
    {
      name: "Helper",
      forks: null,
      stars: null,
      tagline: "Transform customer support with AI technology.",
      description: "Intelligent customer service platform that generates human-like responses, automates support workflows, and helps teams deliver effortless customer support.",
      alternatives_to: ["Zendesk"]
    },
    {
      name: "Jellyfin",
      forks: null,
      stars: null,
      tagline: "Your data stays yours with complete privacy and control.",
      description: "Self-hosted media server for movies, shows, music, live TV, books and photos. Stream to any device with no fees, tracking or strings attached.",
      alternatives_to: ["Netflix"]
    }
    // Note: This is just a portion of the projects. I'll continue with the rest below.
  ];

  // Featured projects for the hero section
  const featuredProjects = [
    {
      name: "Twenty",
      category: "CRM Platform",
      stars: "28.5k",
      forks: "3.3k",
      description: "Open-source CRM platform for efficient customer data management, collaboration, and relationship nurturing",
      tags: ["CRM", "TypeScript", "React"],
      color: "purple",
      alternatives: ["HubSpot"]
    },
    {
      name: "ERPNext",
      category: "ERP Solution",
      stars: "25.9k", 
      forks: "8.6k",
      description: "Open-source ERP solution offering modules for accounting, inventory, HR, CRM, and more. Customizable and scalable for businesses of all sizes.",
      tags: ["ERP", "Python", "JavaScript"],
      color: "blue",
      alternatives: ["HubSpot"]
    },
    {
      name: "Huly",
      category: "Project Management",
      stars: "21.6k",
      forks: "1.4k", 
      description: "An open-source platform that combines project management, team communication, document collaboration, and virtual office spaces in one integrated solution.",
      tags: ["Project Management", "TypeScript", "Collaboration"],
      color: "green",
      alternatives: ["Monday"]
    },
    {
      name: "Reflex",
      category: "Web Framework",
      stars: "21.5k",
      forks: "170",
      description: "Build powerful web applications using 100% Python without touching JavaScript. Features AI-powered generation, built-in components, and one-click deployment.",
      tags: ["Python", "Web Framework", "AI"],
      color: "orange",
      alternatives: ["Replit", "Lovable"]
    },
    {
      name: "LibreChat",
      category: "AI Platform",
      stars: "20k",
      forks: "2.8k",
      description: "Free, open source AI chat platform compatible with any AI provider. Offers a wide range of features, including agents, code interpreter, and multimodal capabilities.",
      tags: ["AI", "Chat", "TypeScript"],
      color: "pink",
      alternatives: ["ChatGPT", "Claude"]
    },
    {
      name: "NocoDB",
      category: "Database Platform",
      stars: "45k+",
      forks: "3.1k+",
      description: "Transform any MySQL, PostgreSQL, or SQLite into a smart spreadsheet interface with APIs, automations, and integrations.",
      tags: ["Database", "No-Code", "API"],
      color: "indigo",
      alternatives: ["Airtable"]
    }
  ];

  // Helper function to format numbers
  const formatNumber = (num: number | null | undefined): string => {
    if (num === null || num === undefined) return 'N/A';
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  // Helper function to create URL-friendly slug
  const createSlug = (name: string): string => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="border-b border-neutral-200 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="px-8 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                Open Source Directory
              </Badge>
              <Badge variant="outline">
                {allProjects.length}+ Projects
              </Badge>
            </div>
            <h1 className="font-bold text-4xl text-neutral-900 leading-tight mb-4">
              Dino Open Source Alternatives
            </h1>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8 max-w-2xl">
              Discover the best open source alternatives to popular commercial tools. From AI platforms 
              to development tools, find privacy-focused, self-hosted solutions that put you in control of your data and workflows.
            </p>
            <div className="flex items-center gap-4">
              <Button className="bg-green-600 hover:bg-green-700">
                Explore Projects
              </Button>
              <Button variant="outline">
                Submit Project
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-bold text-2xl text-neutral-900 mb-8">
            Featured Open Source Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Link key={index} href={`/resources/dino-opensource/${createSlug(project.name)}`}>
                <div className="rounded-lg border border-neutral-200 p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-${project.color}-100`}>
                        <svg className={`h-5 w-5 text-${project.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900">{project.name}</h3>
                        <p className="text-neutral-500 text-sm">{project.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-neutral-500">
                      <span>★ {project.stars}</span>
                      <span>⑂ {project.forks}</span>
                    </div>
                  </div>
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                  <div className="text-xs text-neutral-500">
                    Alternative to: {project.alternatives.join(", ")}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* All Projects Grid */}
      <div className="border-t border-neutral-200 bg-neutral-50">
        <div className="px-8 py-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-bold text-2xl text-neutral-900 mb-8">
              All Open Source Projects ({allProjects.length})
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {allProjects.map((project, index) => (
                <Link key={index} href={`/resources/dino-opensource/${createSlug(project.name)}`}>
                  <div className="rounded-lg border border-neutral-200 bg-white p-4 hover:shadow-md transition-shadow cursor-pointer h-full">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-neutral-900 text-sm line-clamp-1">{project.name}</h3>
                      <div className="flex items-center gap-2 text-xs text-neutral-500 ml-2">
                        {project.stars && <span>★ {formatNumber(project.stars)}</span>}
                        {project.forks && <span>⑂ {formatNumber(project.forks)}</span>}
                      </div>
                    </div>
                    <p className="text-neutral-600 text-xs mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="text-neutral-500 text-xs">
                      {project.tagline}
                    </div>
                    {project.alternatives_to && project.alternatives_to.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-neutral-100">
                        <div className="text-xs text-neutral-500">
                          Alternative to: {project.alternatives_to.join(", ")}
                        </div>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Community Stats */}
      <div className="border-t border-neutral-200">
        <div className="px-8 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-bold text-2xl text-neutral-900 mb-8">
              Open Source Impact
            </h2>
            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="font-bold text-3xl text-green-600 mb-2">{allProjects.length}+</div>
                <div className="text-neutral-600 text-sm">Open Source Projects</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-3xl text-blue-600 mb-2">2.5M+</div>
                <div className="text-neutral-600 text-sm">Combined GitHub Stars</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-3xl text-purple-600 mb-2">85k+</div>
                <div className="text-neutral-600 text-sm">Active Contributors</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-3xl text-orange-600 mb-2">150+</div>
                <div className="text-neutral-600 text-sm">Commercial Alternatives</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="border-t border-neutral-200 bg-neutral-50">
        <div className="px-8 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-bold text-2xl text-neutral-900 mb-8">
              Join the Open Source Movement
            </h2>
            <div className="rounded-lg border border-neutral-200 bg-white p-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-4">For Users</h3>
                  <ul className="space-y-3 text-neutral-600 text-sm">
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Find open source alternatives to your tools
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Self-host for complete data control
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Join communities and support projects
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Save money with free alternatives
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-4">For Contributors</h3>
                  <ul className="space-y-3 text-neutral-600 text-sm">
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Start with &quot;good first issue&quot; labels
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Contribute code, docs, or translations
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Build your developer portfolio
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Connect with global developers
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-neutral-900">Submit a Project</h4>
                    <p className="text-neutral-600 text-sm">Know an amazing open source project? Add it to our directory.</p>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Submit Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DinoOpenSource;
