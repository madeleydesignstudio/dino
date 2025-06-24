import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const DinoUi = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="border-b border-neutral-200 bg-gradient-to-r from-violet-50 to-blue-50">
        <div className="px-8 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-violet-100 text-violet-700">
                v1.0.0
              </Badge>
              <Badge variant="outline">
                Open Source
              </Badge>
            </div>
            <h1 className="font-bold text-4xl text-neutral-900 leading-tight mb-4">
              Dino UI Component Library
            </h1>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8 max-w-2xl">
              A modern, accessible, and customizable React component library built with 
              Tailwind CSS. Designed for rapid development and beautiful user interfaces.
            </p>
            <div className="flex items-center gap-4">
              <Button className="bg-violet-600 hover:bg-violet-700">
                Get Started
              </Button>
              <Button variant="outline">
                View Components
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-8 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-bold text-2xl text-neutral-900 mb-8">
            Why Choose Dino UI?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-neutral-200 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100">
                <svg className="h-6 w-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Lightning Fast</h3>
              <p className="text-neutral-600 text-sm">
                Optimized for performance with minimal bundle size and tree-shaking support.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Accessible</h3>
              <p className="text-neutral-600 text-sm">
                Built with accessibility in mind, following WAI-ARIA guidelines and best practices.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Customizable</h3>
              <p className="text-neutral-600 text-sm">
                Easily theme and customize components to match your brand and design system.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="border-t border-neutral-200 bg-neutral-50">
        <div className="px-8 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-bold text-2xl text-neutral-900 mb-8">
              Quick Start
            </h2>
            <div className="rounded-lg border border-neutral-200 bg-white p-6">
              <h3 className="font-semibold text-neutral-900 mb-4">Installation</h3>
              <div className="rounded-md bg-neutral-900 p-4 mb-6">
                <code className="text-green-400 text-sm font-mono">
                  npm install @dino/ui
                </code>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-4">Usage</h3>
              <div className="rounded-md bg-neutral-50 p-4">
                <pre className="text-neutral-700 text-sm font-mono">
{`import { Button } from '@dino/ui';

function App() {
  return (
    <Button variant="primary">
      Click me
    </Button>
  );
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DinoUi;
