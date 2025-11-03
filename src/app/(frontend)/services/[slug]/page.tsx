import { notFound } from "next/navigation";
import { Metadata } from "next";
import SevenMaxWidth from "@/components/providers/7-max-width";
import { Separator } from "@/components/universal/separator";
import { ServerImage } from "@/components/universal/ServerImage";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

// Define the available services with their content
const servicesData = {
  "website-design": {
    title: "Website Design",
    description: "Beautiful, user-centric web designs that captivate and convert",
    imageId: 17,
    content: `
      <div class="space-y-8">
        <p class="text-lg text-gray-600">We create stunning, user-focused web designs that not only look beautiful but also drive results for your business.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-2xl font-semibold mb-4">Our Design Process</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <span class="text-accent font-bold mr-3">01.</span>
                <div>
                  <strong>Discovery & Research</strong>
                  <p class="text-sm mt-1">Understanding your brand, audience, and goals</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-accent font-bold mr-3">02.</span>
                <div>
                  <strong>Wireframing & Prototyping</strong>
                  <p class="text-sm mt-1">Creating the structural foundation of your site</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-accent font-bold mr-3">03.</span>
                <div>
                  <strong>Visual Design</strong>
                  <p class="text-sm mt-1">Crafting beautiful, on-brand visual experiences</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-accent font-bold mr-3">04.</span>
                <div>
                  <strong>Testing & Refinement</strong>
                  <p class="text-sm mt-1">Ensuring optimal user experience across devices</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-2xl font-semibold mb-4">What You Get</h3>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-center">
                <span class="text-accent mr-3">✓</span>
                Custom, responsive web designs
              </li>
              <li class="flex items-center">
                <span class="text-accent mr-3">✓</span>
                Mobile-first approach
              </li>
              <li class="flex items-center">
                <span class="text-accent mr-3">✓</span>
                Brand-consistent visual identity
              </li>
              <li class="flex items-center">
                <span class="text-accent mr-3">✓</span>
                User experience optimization
              </li>
              <li class="flex items-center">
                <span class="text-accent mr-3">✓</span>
                Design system documentation
              </li>
              <li class="flex items-center">
                <span class="text-accent mr-3">✓</span>
                Cross-browser compatibility
              </li>
            </ul>
          </div>
        </div>
      </div>
    `,
  },
  "website-development": {
    title: "Website Development",
    description: "Fast, secure, and scalable web development solutions",
    imageId: 22,
    content: `
      <div class="space-y-8">
        <p class="text-lg text-gray-600">We build high-performance websites using modern technologies and best practices to ensure your site is fast, secure, and scalable.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-2xl font-semibold mb-4">Technologies We Use</h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="border border-[#D9E0C1] p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Frontend</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>GSAP Animations</li>
                </ul>
              </div>
              <div class="border border-[#D9E0C1] p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Backend</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>Node.js</li>
                  <li>PostgreSQL</li>
                  <li>Payload CMS</li>
                  <li>GraphQL APIs</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-semibold mb-4">Development Features</h3>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-center">
                <span class="text-accent mr-3">⚡</span>
                Lightning-fast performance
              </li>
              <li class="flex items-center">
                <span class="text-accent mr-3">🔒</span>
                Enterprise-grade security
              </li>
              <li class="flex items-center">
                <span class="text-accent mr-3">📱</span>
                Fully responsive design
              </li>
              <li class="flex items-center">
                <span class="text-accent mr-3">🔍</span>
                SEO optimized
              </li>
              <li class="flex items-center">
                <span class="text-accent mr-3">♿</span>
                WCAG accessibility compliant
              </li>
              <li class="flex items-center">
                <span class="text-accent mr-3">📊</span>
                Analytics integration
              </li>
            </ul>
          </div>
        </div>
      </div>
    `,
  },
  "creative-design": {
    title: "Creative Design",
    description: "Innovative creative solutions that bring your brand to life",
    imageId: 21,
    content: `
      <div class="space-y-8">
        <p class="text-lg text-gray-600">We create compelling visual identities and creative assets that tell your brand's story and connect with your audience.</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border border-[#D9E0C1] p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-3">Brand Identity</h3>
            <ul class="text-sm text-gray-600 space-y-2">
              <li>Logo design</li>
              <li>Brand guidelines</li>
              <li>Color palettes</li>
              <li>Typography systems</li>
              <li>Brand voice & messaging</li>
            </ul>
          </div>

          <div class="border border-[#D9E0C1] p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-3">Marketing Materials</h3>
            <ul class="text-sm text-gray-600 space-y-2">
              <li>Business cards</li>
              <li>Brochures & flyers</li>
              <li>Social media graphics</li>
              <li>Email templates</li>
              <li>Presentation decks</li>
            </ul>
          </div>

          <div class="border border-[#D9E0C1] p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-3">Digital Assets</h3>
            <ul class="text-sm text-gray-600 space-y-2">
              <li>Website graphics</li>
              <li>Icons & illustrations</li>
              <li>UI/UX elements</li>
              <li>Motion graphics</li>
              <li>Interactive designs</li>
            </ul>
          </div>
        </div>

        <div class="bg-gray-50 p-6 rounded-lg">
          <h3 class="text-2xl font-semibold mb-4">Our Creative Philosophy</h3>
          <p class="text-gray-600 mb-4">We believe great design is the intersection of strategy, creativity, and functionality. Every creative decision we make is purposeful and aligned with your business objectives.</p>
          <blockquote class="border-l-4 border-accent pl-4 italic text-gray-700">
            "Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs
          </blockquote>
        </div>
      </div>
    `,
  },
  "agentic-ai": {
    title: "Agentic AI",
    description: "Intelligent AI solutions that automate and enhance your business processes",
    imageId: 20,
    content: `
      <div class="space-y-8">
        <p class="text-lg text-gray-600">Harness the power of artificial intelligence to automate complex tasks, enhance decision-making, and create intelligent user experiences.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-2xl font-semibold mb-4">AI Solutions We Offer</h3>
            <div class="space-y-4">
              <div class="border-l-4 border-accent pl-4">
                <h4 class="font-semibold mb-2">Intelligent Chatbots</h4>
                <p class="text-gray-600 text-sm">Custom AI assistants that understand context and provide personalized responses</p>
              </div>
              <div class="border-l-4 border-accent pl-4">
                <h4 class="font-semibold mb-2">Process Automation</h4>
                <p class="text-gray-600 text-sm">Automate repetitive tasks and complex workflows with intelligent decision-making</p>
              </div>
              <div class="border-l-4 border-accent pl-4">
                <h4 class="font-semibold mb-2">Predictive Analytics</h4>
                <p class="text-gray-600 text-sm">AI-powered insights to predict trends and optimize business outcomes</p>
              </div>
              <div class="border-l-4 border-accent pl-4">
                <h4 class="font-semibold mb-2">Content Generation</h4>
                <p class="text-gray-600 text-sm">Intelligent content creation for marketing, documentation, and communication</p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-semibold mb-4">Implementation Process</h3>
            <ol class="space-y-3">
              <li class="flex items-start">
                <span class="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</span>
                <div>
                  <strong>Assessment</strong>
                  <p class="text-sm text-gray-600 mt-1">Analyze your current processes and identify AI opportunities</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</span>
                <div>
                  <strong>Strategy</strong>
                  <p class="text-sm text-gray-600 mt-1">Develop a comprehensive AI implementation strategy</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</span>
                <div>
                  <strong>Development</strong>
                  <p class="text-sm text-gray-600 mt-1">Build and train custom AI models for your specific needs</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">4</span>
                <div>
                  <strong>Integration</strong>
                  <p class="text-sm text-gray-600 mt-1">Seamlessly integrate AI solutions into your existing systems</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">5</span>
                <div>
                  <strong>Optimization</strong>
                  <p class="text-sm text-gray-600 mt-1">Continuous monitoring and improvement of AI performance</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    `,
  },
  "product-design": {
    title: "Product Design",
    description: "User-centered product design that drives engagement and growth",
    imageId: 19,
    content: `
      <div class="space-y-8">
        <p class="text-lg text-gray-600">We design digital products that users love and businesses thrive with, focusing on usability, functionality, and delightful experiences.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-2xl font-semibold mb-4">Design Methodology</h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="bg-accent text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">UX</div>
                <div>
                  <h4 class="font-semibold">User Experience Design</h4>
                  <p class="text-gray-600 text-sm mt-1">Research-driven design that prioritizes user needs and business goals</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="bg-accent text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">UI</div>
                <div>
                  <h4 class="font-semibold">User Interface Design</h4>
                  <p class="text-gray-600 text-sm mt-1">Beautiful, intuitive interfaces that enhance user interaction</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="bg-accent text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">IA</div>
                <div>
                  <h4 class="font-semibold">Information Architecture</h4>
                  <p class="text-gray-600 text-sm mt-1">Logical structure and organization of content and features</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="bg-accent text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">IxD</div>
                <div>
                  <h4 class="font-semibold">Interaction Design</h4>
                  <p class="text-gray-600 text-sm mt-1">Thoughtful interactions that guide users through their journey</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-semibold mb-4">Deliverables</h3>
            <div class="grid grid-cols-1 gap-4">
              <div class="border border-[#D9E0C1] p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Research & Strategy</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• User personas & journey maps</li>
                  <li>• Competitive analysis</li>
                  <li>• Product requirements documentation</li>
                </ul>
              </div>
              <div class="border border-[#D9E0C1] p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Design Assets</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• High-fidelity mockups</li>
                  <li>• Interactive prototypes</li>
                  <li>• Design system components</li>
                </ul>
              </div>
              <div class="border border-[#D9E0C1] p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Testing & Validation</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• Usability testing reports</li>
                  <li>• A/B testing recommendations</li>
                  <li>• Performance metrics analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
          <h3 class="text-2xl font-semibold mb-4">Why Product Design Matters</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div class="text-3xl font-bold text-accent mb-2">75%</div>
              <p class="text-sm text-gray-600">increase in user engagement with good UX design</p>
            </div>
            <div>
              <div class="text-3xl font-bold text-accent mb-2">200%</div>
              <p class="text-sm text-gray-600">ROI improvement with user-centered design</p>
            </div>
            <div>
              <div class="text-3xl font-bold text-accent mb-2">50%</div>
              <p class="text-sm text-gray-600">reduction in development costs with proper planning</p>
            </div>
          </div>
        </div>
      </div>
    `,
  },
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = params;

  // Check if the service exists
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16">
      <SevenMaxWidth>
        {/* Header Section */}
        <div className="mb-12">
          <div className="text-sm text-gray-500 mb-4">
            <a href="/services" className="hover:underline">
              Services
            </a>{" "}
            / {service.title}
          </div>
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{service.description}</p>
              <div className="flex gap-4">
                <a
                  href="/start"
                  className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold"
                >
                  Get Started
                </a>
                <a
                  href="/company/contact"
                  className="border border-[#D9E0C1] px-6 py-3 rounded-lg hover:bg-gray-50 transition-all font-semibold"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-96">
              <ServerImage
                id={service.imageId}
                width={400}
                height={235}
                priority
                quality={100}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <Separator className="bg-[#D9E0C1] w-full mb-12" />

        {/* Content Section */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: service.content }}
        />

        <Separator className="bg-[#D9E0C1] w-full mt-12 mb-8" />

        {/* Call to Action */}
        <div className="text-center bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss how our {service.title.toLowerCase()} services can help bring your vision to life and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/start"
              className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold"
            >
              Start Your Project
            </a>
            <a
              href="/casestudies"
              className="border border-[#D9E0C1] px-8 py-3 rounded-lg hover:bg-white transition-all font-semibold"
            >
              View Our Work
            </a>
          </div>
        </div>

        {/* Back to Services */}
        <div className="text-center mt-8">
          <a
            href="/services"
            className="inline-flex items-center text-accent hover:underline font-semibold"
          >
            ← Back to Services
          </a>
        </div>
      </SevenMaxWidth>
    </div>
  );
}

// Generate static params for all available services
export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

// Add metadata for SEO
export function generateMetadata({ params }: ServicePageProps): Metadata {
  const { slug } = params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} - Services`,
    description: service.description,
  };
}
