import Link from "next/link";

export default function CaseStudyNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-16">
      <div className="max-w-7xl mx-auto px-4 border-x border-[#D9E0C1]">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-6xl font-bold text-gray-400 mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Case Study Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            The case study you're looking for doesn't exist or has been moved.
          </p>

          <div className="space-y-4">
            <div>
              <Link
                href="/casestudies"
                className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold"
              >
                View All Case Studies
              </Link>
            </div>

            <div className="text-sm">
              <Link
                href="/"
                className="text-gray-500 hover:text-accent transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#D9E0C1]">
            <h3 className="text-lg font-semibold mb-4">Featured Case Studies:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <Link
                href="/casestudies/project-alpha"
                className="block p-4 border border-[#D9E0C1] rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                <h4 className="font-semibold mb-1">Project Alpha</h4>
                <p className="text-gray-600">E-commerce Platform</p>
              </Link>
              <Link
                href="/casestudies/project-beta"
                className="block p-4 border border-[#D9E0C1] rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                <h4 className="font-semibold mb-1">Project Beta</h4>
                <p className="text-gray-600">SaaS Dashboard</p>
              </Link>
              <Link
                href="/casestudies/project-gamma"
                className="block p-4 border border-[#D9E0C1] rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                <h4 className="font-semibold mb-1">Project Gamma</h4>
                <p className="text-gray-600">Mobile App</p>
              </Link>
              <Link
                href="/casestudies/project-delta"
                className="block p-4 border border-[#D9E0C1] rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                <h4 className="font-semibold mb-1">Project Delta</h4>
                <p className="text-gray-600">Corporate Website</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
