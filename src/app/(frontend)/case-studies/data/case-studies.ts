export interface CaseStudy {
  slug: string
  title: string
  subtitle: string
  client: string
  year: string
  duration: string
  category: string
  tags: string[]
  description: string
  challenge: string
  solution: string
  results: string[]
  testimonial?: {
    quote: string
    author: string
    role: string
    company: string
  }
  images: {
    hero: string
    gallery: string[]
  }
  liveUrl?: string
  nextProject?: {
    slug: string
    title: string
    image: string
  }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'structopia',
    title: 'Structopia',
    subtitle: 'Modern web platform for architectural design',
    client: 'Structopia Inc.',
    year: '2024',
    duration: '12 weeks',
    category: 'Web Development',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    description:
      'A comprehensive web platform that revolutionizes how architects collaborate, design, and manage their projects. Built with modern technologies to handle complex architectural workflows.',
    challenge:
      'Structopia needed a platform that could handle complex architectural drawings, real-time collaboration, and project management while maintaining exceptional performance and user experience.',
    solution:
      'We developed a full-stack application using React and Node.js, implementing real-time collaboration features, advanced file management, and an intuitive interface that streamlines architectural workflows.',
    results: [
      '300% increase in project completion speed',
      '85% reduction in collaboration errors',
      '95% user satisfaction rating',
      'Deployed across 50+ architectural firms',
    ],
    testimonial: {
      quote:
        'The platform has transformed how our team works. What used to take weeks now takes days, and the collaboration features are game-changing.',
      author: 'Sarah Mitchell',
      role: 'Lead Architect',
      company: 'Structopia Inc.',
    },
    images: {
      hero: 'https://storage.dev-0af.workers.dev/structopia-hero.png',
      gallery: [
        'https://storage.dev-0af.workers.dev/structopia-dashboard.png',
        'https://storage.dev-0af.workers.dev/structopia-collaboration.png',
        'https://storage.dev-0af.workers.dev/structopia-mobile.png',
        'https://storage.dev-0af.workers.dev/structopia-analytics.png',
      ],
    },
    liveUrl: 'https://structopia.com',
    nextProject: {
      slug: 'ordo',
      title: 'Ordo',
      image: 'https://storage.dev-0af.workers.dev/ordo-preview.png',
    },
  },
  {
    slug: 'ordo',
    title: 'Ordo',
    subtitle: 'Task management and productivity application',
    client: 'Ordo Technologies',
    year: '2024',
    duration: '8 weeks',
    category: 'Product Design',
    tags: ['UI/UX Design', 'Figma', 'Prototyping', 'User Research', 'Design System'],
    description:
      'A next-generation task management application that combines beautiful design with powerful productivity features. Designed to help teams stay organized and focused.',
    challenge:
      'Ordo needed a task management solution that could compete with established players while offering unique features that would differentiate them in the crowded productivity market.',
    solution:
      'We conducted extensive user research and created a clean, intuitive interface that makes complex project management feel simple. The design system we developed ensures consistency across all touchpoints.',
    results: [
      '40% increase in daily active users',
      '60% improvement in task completion rates',
      '4.8/5 App Store rating',
      'Featured in Apple App Store',
    ],
    testimonial: {
      quote:
        'The design is not just beautiful—it&apos;s functional. Our team productivity has increased significantly since switching to Ordo.',
      author: 'Michael Chen',
      role: 'Product Manager',
      company: 'Ordo Technologies',
    },
    images: {
      hero: 'https://storage.dev-0af.workers.dev/ordo-hero.png',
      gallery: [
        'https://storage.dev-0af.workers.dev/ordo-dashboard.png',
        'https://storage.dev-0af.workers.dev/ordo-tasks.png',
        'https://storage.dev-0af.workers.dev/ordo-calendar.png',
        'https://storage.dev-0af.workers.dev/ordo-team.png',
      ],
    },
    liveUrl: 'https://ordo.app',
    nextProject: {
      slug: 'form-function',
      title: 'Form + Function',
      image: 'https://storage.dev-0af.workers.dev/form-function-preview.png',
    },
  },
  {
    slug: 'form-function',
    title: 'Form + Function',
    subtitle: 'Design studio portfolio and brand identity',
    client: 'Form + Function Studio',
    year: '2023',
    duration: '10 weeks',
    category: 'Brand Identity',
    tags: ['Brand Design', 'Web Design', 'Creative Direction', 'Photography', 'Print Design'],
    description:
      'A complete brand identity and digital presence for a boutique design studio specializing in architectural and interior design projects.',
    challenge:
      'Form + Function needed a brand identity that would reflect their sophisticated approach to design while appealing to high-end residential and commercial clients.',
    solution:
      'We created a minimalist brand identity that emphasizes clean lines and thoughtful typography, complemented by a portfolio website that showcases their work in an elegant, gallery-like format.',
    results: [
      '200% increase in qualified leads',
      '50% higher project values',
      '90% client retention rate',
      'Featured in Design Awards 2023',
    ],
    testimonial: {
      quote:
        'The new brand identity perfectly captures our design philosophy. We&apos;ve seen a significant increase in high-quality inquiries.',
      author: 'Emma Rodriguez',
      role: 'Creative Director',
      company: 'Form + Function Studio',
    },
    images: {
      hero: 'https://storage.dev-0af.workers.dev/form-function-hero.png',
      gallery: [
        'https://storage.dev-0af.workers.dev/form-function-logo.png',
        'https://storage.dev-0af.workers.dev/form-function-website.png',
        'https://storage.dev-0af.workers.dev/form-function-business-cards.png',
        'https://storage.dev-0af.workers.dev/form-function-portfolio.png',
      ],
    },
    liveUrl: 'https://formfunction.studio',
    nextProject: {
      slug: 'structopia',
      title: 'Structopia',
      image: 'https://storage.dev-0af.workers.dev/structopia-preview.png',
    },
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug)
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies
}
