import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const DinoOpenSource = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="border-b border-neutral-200 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="px-8 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                Open Source
              </Badge>
              <Badge variant="outline">
                MIT License
              </Badge>
            </div>
            <h1 className="font-bold text-4xl text-neutral-900 leading-tight mb-4">
              Dino Open Source
            </h1>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8 max-w-2xl">
              Join our thriving open source community. Contribute to cutting-edge design tools, 
              component libraries, and development frameworks used by thousands of developers worldwide.
            </p>
            <div className="flex items-center gap-4">
              <Button className="bg-green-600 hover:bg-green-700">
                Start Contributing
              </Button>
              <Button variant="outline">
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="px-8 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-bold text-2xl text-neutral-900 mb-8">
            Featured Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                    <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Dino UI Library</h3>
                    <p className="text-neutral-500 text-sm">Component Library</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500 text-xs">★ 1.2k</span>
                </div>
              </div>
              <p className="text-neutral-600 text-sm mb-4">
                A comprehensive React component library built with Tailwind CSS. 
                Includes 50+ components with TypeScript support and accessibility features.
              </p>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">React</Badge>
                <Badge variant="outline" className="text-xs">TypeScript</Badge>
                <Badge variant="outline" className="text-xs">Tailwind</Badge>
              </div>
            </div>

            <div className="rounded-lg border border-neutral-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                    <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Dino CLI</h3>
                    <p className="text-neutral-500 text-sm">Development Tools</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500 text-xs">★ 856</span>
                </div>
              </div>
              <p className="text-neutral-600 text-sm mb-4">
                Command-line interface for scaffolding projects, managing components, 
                and automating development workflows with Dino tools.
              </p>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">Node.js</Badge>
                <Badge variant="outline" className="text-xs">CLI</Badge>
                <Badge variant="outline" className="text-xs">DevOps</Badge>
              </div>
            </div>

            <div className="rounded-lg border border-neutral-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                    <svg className="h-5 w-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Starter Templates</h3>
                    <p className="text-neutral-500 text-sm">Project Templates</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500 text-xs">★ 643</span>
                </div>
              </div>
              <p className="text-neutral-600 text-sm mb-4">
                Production-ready starter templates for Next.js, React, and various frameworks 
                with modern tooling and best practices built-in.
              </p>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">Next.js</Badge>
                <Badge variant="outline" className="text-xs">Templates</Badge>
                <Badge variant="outline" className="text-xs">Starters</Badge>
              </div>
            </div>

            <div className="rounded-lg border border-neutral-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100">
                    <svg className="h-5 w-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Design Tokens</h3>
                    <p className="text-neutral-500 text-sm">Design System</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500 text-xs">★ 324</span>
                </div>
              </div>
              <p className="text-neutral-600 text-sm mb-4">
                Comprehensive design token system with theme support, color palettes, 
                typography scales, and spacing systems for consistent design.
              </p>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">Design</Badge>
                <Badge variant="outline" className="text-xs">Tokens</Badge>
                <Badge variant="outline" className="text-xs">Theming</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Stats */}
      <div className="border-t border-neutral-200 bg-neutral-50">
        <div className="px-8 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-bold text-2xl text-neutral-900 mb-8">
              Community Impact
            </h2>
            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="font-bold text-3xl text-green-600 mb-2">42</div>
                <div className="text-neutral-600 text-sm">Active Contributors</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-3xl text-blue-600 mb-2">12</div>
                <div className="text-neutral-600 text-sm">Open Source Projects</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-3xl text-purple-600 mb-2">3.1k</div>
                <div className="text-neutral-600 text-sm">GitHub Stars</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-3xl text-orange-600 mb-2">158</div>
                <div className="text-neutral-600 text-sm">Pull Requests</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="border-t border-neutral-200">
        <div className="px-8 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-bold text-2xl text-neutral-900 mb-8">
              Start Contributing Today
            </h2>
            <div className="rounded-lg border border-neutral-200 bg-white p-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-4">For Developers</h3>
                  <ul className="space-y-3 text-neutral-600 text-sm">
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Browse issues labeled &quot;good first issue&quot;
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Read our contributing guidelines
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Join our Discord community
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Submit your first pull request
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-4">For Designers</h3>
                  <ul className="space-y-3 text-neutral-600 text-sm">
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Contribute to our design system
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Create new component designs
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Improve accessibility guidelines
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Help with documentation design
                    </li>
                  </ul>
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
