import { notFound } from 'next/navigation'

// This would typically come from a database or CMS
const projects = [
  {
    slug: 'ocean-dynamics',
    title: 'Ocean Dynamics',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop',
    description: 'A comprehensive study of ocean wave patterns and their environmental impact.',
    client: 'Marine Research Institute',
    year: '2024',
    technologies: ['React', 'Next.js', 'Three.js', 'WebGL'],
    overview:
      'This project explores the dynamic patterns of ocean waves through interactive visualization and data analysis.',
  },
  {
    slug: 'forest-ecosystem',
    title: 'Forest Ecosystem',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
    description:
      'An interactive platform for understanding forest biodiversity and conservation efforts.',
    client: 'Environmental Conservation Society',
    year: '2024',
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    overview:
      'Digital platform showcasing forest conservation through immersive storytelling and data visualization.',
  },
  {
    slug: 'mountain-explorer',
    title: 'Mountain Explorer',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    description:
      'A virtual reality experience for exploring mountain landscapes and geological formations.',
    client: 'Adventure Travel Co.',
    year: '2024',
    technologies: ['Unity', 'VR', 'C#', 'Blender'],
    overview:
      'Immersive VR experience allowing users to explore mountain terrains and learn about geological processes.',
  },
  {
    slug: 'lake-serenity',
    title: 'Lake Serenity',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
    description: 'A meditation and wellness app inspired by tranquil lake environments.',
    client: 'Wellness Retreats Inc.',
    year: '2024',
    technologies: ['React Native', 'Firebase', 'WebRTC', 'Audio API'],
    overview:
      'Mobile application combining meditation practices with nature sounds and visual experiences.',
  },
  {
    slug: 'desert-mirage',
    title: 'Desert Mirage',
    image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop',
    description: 'An artistic exploration of optical phenomena in desert landscapes.',
    client: 'Digital Art Museum',
    year: '2024',
    technologies: ['p5.js', 'WebGL', 'Shaders', 'JavaScript'],
    overview: 'Interactive art installation exploring the science and beauty of desert mirages.',
  },
  {
    slug: 'coastal-views',
    title: 'Coastal Views',
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop',
    description: 'A photography portfolio showcasing coastal landscapes and marine life.',
    client: 'Nature Photographer Portfolio',
    year: '2024',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Contentful'],
    overview:
      'Elegant portfolio website featuring coastal photography with smooth animations and responsive design.',
  },
]

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[60vh] object-cover rounded-lg mb-8"
          />
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">{project.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{project.description}</p>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                  Client
                </h3>
                <p className="text-gray-600">{project.client}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                  Year
                </h3>
                <p className="text-gray-600">{project.year}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Overview */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{project.overview}</p>
            </div>

            {/* Back Button */}
            <div className="pt-8 border-t border-gray-200">
              <a
                href="/case-studies"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                ← Back to Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
