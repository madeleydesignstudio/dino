import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const DinoApi = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <div className="border-b border-neutral-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="px-8 py-12">
          <div className="mx-auto ">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                v2.1.0
              </Badge>
              <Badge variant="outline">
                REST & GraphQL
              </Badge>
            </div>
            <h1 className="font-bold text-4xl text-neutral-900 leading-tight mb-4">
              Dino API Platform
            </h1>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8 max-w-2xl">
              Powerful APIs to integrate Dino&apos;s design and development capabilities 
              into your applications. Build faster with our comprehensive developer platform.
            </p>
            <div className="flex items-center gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Get API Key
              </Button>
              <Button variant="outline">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* API Capabilities */}
      <div className="px-8 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-bold text-2xl text-neutral-900 mb-8">
            API Capabilities
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">User Management</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Complete user authentication, profiles, and permission management system.
              </p>
              <div className="bg-neutral-50 rounded-md p-3">
                <code className="text-neutral-700 text-xs font-mono">
                  GET /api/v2/users
                </code>
              </div>
            </div>

            <div className="rounded-lg border border-neutral-200 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Project Management</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Create, manage, and deploy projects with our comprehensive project API.
              </p>
              <div className="bg-neutral-50 rounded-md p-3">
                <code className="text-neutral-700 text-xs font-mono">
                  POST /api/v2/projects
                </code>
              </div>
            </div>

            <div className="rounded-lg border border-neutral-200 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Media Management</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Upload, optimize, and serve images and assets with automatic CDN delivery.
              </p>
              <div className="bg-neutral-50 rounded-md p-3">
                <code className="text-neutral-700 text-xs font-mono">
                  POST /api/v2/media/upload
                </code>
              </div>
            </div>

            <div className="rounded-lg border border-neutral-200 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Analytics & Insights</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Track usage, performance metrics, and user behavior with detailed analytics.
              </p>
              <div className="bg-neutral-50 rounded-md p-3">
                <code className="text-neutral-700 text-xs font-mono">
                  GET /api/v2/analytics
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start Example */}
      <div className="border-t border-neutral-200 bg-neutral-50">
        <div className="px-8 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-bold text-2xl text-neutral-900 mb-8">
              Quick Start Example
            </h2>
            <div className="rounded-lg border border-neutral-200 bg-white p-6">
              <h3 className="font-semibold text-neutral-900 mb-4">Create Your First Project</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-neutral-700 text-sm mb-2">1. Authentication</h4>
                  <div className="rounded-md bg-neutral-900 p-4">
                    <code className="text-green-400 text-sm font-mono">
                      curl -H &quot;Authorization: Bearer YOUR_API_KEY&quot; \
                    </code>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-700 text-sm mb-2">2. Create Project</h4>
                  <div className="rounded-md bg-neutral-900 p-4">
                    <pre className="text-green-400 text-sm font-mono">
{`curl -X POST https://api.dino.studio/v2/projects \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "My Awesome Project",
    "template": "nextjs-starter",
    "config": {
      "framework": "nextjs",
      "deployment": "vercel"
    }
  }'`}
                    </pre>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-700 text-sm mb-2">3. Response</h4>
                  <div className="rounded-md bg-neutral-50 p-4">
                    <pre className="text-neutral-700 text-sm font-mono">
{`{
  "id": "proj_abc123",
  "name": "My Awesome Project",
  "status": "creating",
  "url": "https://my-awesome-project.vercel.app",
  "created_at": "2024-01-01T00:00:00Z"
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DinoApi;
