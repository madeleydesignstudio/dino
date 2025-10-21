import Link from 'next/link'

export default function CompanyPage() {
  return (
    <div className="min-h-screen p-8 sm:p-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Company</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/company/about"
            className="border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-3">About Us</h2>
            <p className="text-gray-600">Learn about our story and values</p>
          </Link>

          <Link
            href="/company/careers"
            className="border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-3">Careers</h2>
            <p className="text-gray-600">Join our team and grow with us</p>
          </Link>

          <Link
            href="/company/contact"
            className="border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-3">Contact</h2>
            <p className="text-gray-600">Get in touch with us</p>
          </Link>
        </div>
      </div>
    </div>
  )
}