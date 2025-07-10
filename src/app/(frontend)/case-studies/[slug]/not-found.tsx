import Link from 'next/link'
import { ArrowLeftIcon, SearchIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-40px)] flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <SearchIcon className="h-8 w-8 text-neutral-400" />
        </div>

        <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>

        <p className="text-neutral-600 mb-8">
          Sorry, we couldn&apos;t find the case study you&apos;re looking for. It may have been
          moved or doesn&apos;t exist.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/case-studies">
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="/start-project">Start Your Project</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
