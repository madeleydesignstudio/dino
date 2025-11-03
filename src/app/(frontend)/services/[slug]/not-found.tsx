import Link from "next/link";
import SevenMaxWidth from "@/components/providers/7-max-width";

export default function ServiceNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-16">
      <SevenMaxWidth>
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-400 mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            The service you're looking for doesn't exist or has been moved.
          </p>

          <div className="space-y-4">
            <div>
              <Link
                href="/services"
                className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold"
              >
                View All Services
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
            <h3 className="text-lg font-semibold mb-4">Our Services:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <Link
                href="/services/website-design"
                className="block p-3 border border-[#D9E0C1] rounded-lg hover:bg-gray-50 transition-colors"
              >
                Website Design
              </Link>
              <Link
                href="/services/website-development"
                className="block p-3 border border-[#D9E0C1] rounded-lg hover:bg-gray-50 transition-colors"
              >
                Website Development
              </Link>
              <Link
                href="/services/creative-design"
                className="block p-3 border border-[#D9E0C1] rounded-lg hover:bg-gray-50 transition-colors"
              >
                Creative Design
              </Link>
              <Link
                href="/services/agentic-ai"
                className="block p-3 border border-[#D9E0C1] rounded-lg hover:bg-gray-50 transition-colors"
              >
                Agentic AI
              </Link>
              <Link
                href="/services/product-design"
                className="block p-3 border border-[#D9E0C1] rounded-lg hover:bg-gray-50 transition-colors"
              >
                Product Design
              </Link>
            </div>
          </div>
        </div>
      </SevenMaxWidth>
    </div>
  );
}
