import { notFound } from "next/navigation";
import { Metadata } from "next";
import SevenMaxWidth from "@/components/providers/7-max-width";
import { Separator } from "@/components/universal/separator";

interface ResourcePageProps {
  params: {
    slug: string;
  };
}

// Define the available resources with their content
const resourcesData = {
  opensource: {
    title: "Open Source",
    description:
      "Explore our open source projects and contributions to the community",
    content: `
      <div class="space-y-6">
        <p class="text-lg">We believe in giving back to the development community through open source contributions.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="border border-[#D9E0C1] p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-3">Component Library</h3>
            <p class="mb-4">A collection of reusable React components built with modern best practices.</p>
            <a href="#" class="text-accent hover:underline">View on GitHub →</a>
          </div>

          <div class="border border-[#D9E0C1] p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-3">Design Tokens</h3>
            <p class="mb-4">Standardized design tokens for consistent styling across projects.</p>
            <a href="#" class="text-accent hover:underline">View on GitHub →</a>
          </div>
        </div>
      </div>
    `,
  },
  ui: {
    title: "UI Components",
    description:
      "Beautiful, accessible UI components for modern web applications",
    content: `
      <div class="space-y-6">
        <p class="text-lg">Our UI component library provides a comprehensive set of accessible, customizable components.</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="border border-[#D9E0C1] p-4 rounded-lg text-center">
            <h3 class="font-semibold mb-2">Buttons</h3>
            <button class="bg-accent text-white px-4 py-2 rounded">Example Button</button>
          </div>

          <div class="border border-[#D9E0C1] p-4 rounded-lg text-center">
            <h3 class="font-semibold mb-2">Forms</h3>
            <input type="text" placeholder="Input field" class="border border-gray-300 px-3 py-2 rounded w-full" />
          </div>

          <div class="border border-[#D9E0C1] p-4 rounded-lg text-center">
            <h3 class="font-semibold mb-2">Cards</h3>
            <div class="bg-gray-100 p-3 rounded text-sm">Card Component</div>
          </div>
        </div>
      </div>
    `,
  },
  api: {
    title: "API Documentation",
    description: "Comprehensive API documentation and integration guides",
    content: `
      <div class="space-y-6">
        <p class="text-lg">Complete API documentation with examples and best practices.</p>

        <div class="space-y-4">
          <div class="border-l-4 border-accent pl-4">
            <h3 class="text-xl font-semibold mb-2">REST API</h3>
            <p>RESTful API endpoints for all core functionality.</p>
            <code class="bg-gray-100 px-2 py-1 rounded text-sm">GET /api/v1/resources</code>
          </div>

          <div class="border-l-4 border-accent pl-4">
            <h3 class="text-xl font-semibold mb-2">GraphQL</h3>
            <p>Flexible GraphQL API for complex queries and mutations.</p>
            <code class="bg-gray-100 px-2 py-1 rounded text-sm">query { resources { id, name } }</code>
          </div>

          <div class="border-l-4 border-accent pl-4">
            <h3 class="text-xl font-semibold mb-2">Webhooks</h3>
            <p>Real-time event notifications via webhooks.</p>
            <code class="bg-gray-100 px-2 py-1 rounded text-sm">POST /webhooks/resource-updated</code>
          </div>
        </div>
      </div>
    `,
  },
  compare: {
    title: "Comparison Tools",
    description:
      "Compare different solutions and find the best fit for your project",
    content: `
      <div class="space-y-6">
        <p class="text-lg">Compare our solutions with alternatives to make informed decisions.</p>

        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-[#D9E0C1]">
            <thead>
              <tr class="bg-gray-50">
                <th class="border border-[#D9E0C1] p-3 text-left">Feature</th>
                <th class="border border-[#D9E0C1] p-3 text-center">Our Solution</th>
                <th class="border border-[#D9E0C1] p-3 text-center">Alternative A</th>
                <th class="border border-[#D9E0C1] p-3 text-center">Alternative B</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-[#D9E0C1] p-3">Performance</td>
                <td class="border border-[#D9E0C1] p-3 text-center">✅ Excellent</td>
                <td class="border border-[#D9E0C1] p-3 text-center">⚠️ Good</td>
                <td class="border border-[#D9E0C1] p-3 text-center">❌ Poor</td>
              </tr>
              <tr>
                <td class="border border-[#D9E0C1] p-3">Support</td>
                <td class="border border-[#D9E0C1] p-3 text-center">✅ 24/7</td>
                <td class="border border-[#D9E0C1] p-3 text-center">⚠️ Business Hours</td>
                <td class="border border-[#D9E0C1] p-3 text-center">❌ Limited</td>
              </tr>
              <tr>
                <td class="border border-[#D9E0C1] p-3">Customization</td>
                <td class="border border-[#D9E0C1] p-3 text-center">✅ Full</td>
                <td class="border border-[#D9E0C1] p-3 text-center">⚠️ Partial</td>
                <td class="border border-[#D9E0C1] p-3 text-center">❌ None</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
  },
  blog: {
    title: "Blog",
    description: "Insights, tutorials, and updates from our team",
    content: `
      <div class="space-y-6">
        <p class="text-lg">Stay updated with the latest insights, tutorials, and company news.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article class="border border-[#D9E0C1] p-6 rounded-lg">
            <div class="text-sm text-gray-500 mb-2">March 15, 2024</div>
            <h3 class="text-xl font-semibold mb-3">Building Scalable Design Systems</h3>
            <p class="text-gray-600 mb-4">Learn how to create and maintain design systems that scale with your organization...</p>
            <a href="#" class="text-accent hover:underline">Read more →</a>
          </article>

          <article class="border border-[#D9E0C1] p-6 rounded-lg">
            <div class="text-sm text-gray-500 mb-2">March 10, 2024</div>
            <h3 class="text-xl font-semibold mb-3">Modern Web Performance Optimization</h3>
            <p class="text-gray-600 mb-4">Discover the latest techniques for optimizing web performance in 2024...</p>
            <a href="#" class="text-accent hover:underline">Read more →</a>
          </article>

          <article class="border border-[#D9E0C1] p-6 rounded-lg">
            <div class="text-sm text-gray-500 mb-2">March 5, 2024</div>
            <h3 class="text-xl font-semibold mb-3">The Future of Web Development</h3>
            <p class="text-gray-600 mb-4">Exploring emerging trends and technologies shaping web development...</p>
            <a href="#" class="text-accent hover:underline">Read more →</a>
          </article>

          <article class="border border-[#D9E0C1] p-6 rounded-lg">
            <div class="text-sm text-gray-500 mb-2">February 28, 2024</div>
            <h3 class="text-xl font-semibold mb-3">Accessibility Best Practices</h3>
            <p class="text-gray-600 mb-4">Essential guidelines for creating accessible web applications...</p>
            <a href="#" class="text-accent hover:underline">Read more →</a>
          </article>
        </div>
      </div>
    `,
  },
};

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = params;

  // Check if the resource exists
  const resource = resourcesData[slug as keyof typeof resourcesData];

  if (!resource) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16">
      <SevenMaxWidth>
        {/* Header Section */}
        <div className="mb-12">
          <div className="text-sm text-gray-500 mb-4">
            <a href="/resources" className="hover:underline">
              Resources
            </a>{" "}
            / {resource.title}
          </div>
          <h1 className="text-4xl font-bold mb-4">{resource.title}</h1>
          <p className="text-xl text-gray-600">{resource.description}</p>
        </div>

        <Separator className="bg-[#D9E0C1] w-full mb-12" />

        {/* Content Section */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: resource.content }}
        />

        <Separator className="bg-[#D9E0C1] w-full mt-12 mb-8" />

        {/* Back to Resources */}
        <div className="text-center">
          <a
            href="/resources"
            className="inline-flex items-center text-accent hover:underline font-semibold"
          >
            ← Back to Resources
          </a>
        </div>
      </SevenMaxWidth>
    </div>
  );
}

// Generate static params for all available resources
export function generateStaticParams() {
  return Object.keys(resourcesData).map((slug) => ({
    slug: slug,
  }));
}

// Add metadata for SEO
export function generateMetadata({ params }: ResourcePageProps): Metadata {
  const { slug } = params;
  const resource = resourcesData[slug as keyof typeof resourcesData];

  if (!resource) {
    return {
      title: "Resource Not Found",
    };
  }

  return {
    title: `${resource.title} - Resources`,
    description: resource.description,
  };
}
