import { allPosts } from "content-collections";
import Link from "next/link";

export default function BlogList() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900">
      {/* Header Section */}
      <div className="relative h-[40vh] border-b border-stone-900 dark:border-stone-400 overflow-hidden">
        <div className="absolute w-1/3 h-full border-r border-stone-900 dark:border-stone-400 bg-stone-100/30 dark:bg-stone-800/30" />
        <div className="absolute w-2/3 h-full border-r border-stone-900 dark:border-stone-400 bg-stone-100/20 dark:bg-stone-800/20" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-6xl md:text-8xl font-nanum text-stone-900 dark:text-stone-50 px-8 text-center">
            Dino Bytes
          </h1>
        </div>
      </div>

      {/* Blog List Section */}
      <div className="max-w-4xl mx-auto px-6 py-24">
        <ul className="space-y-12">
          {allPosts.map((post) => (
            <li
              key={post._meta.path}
              className="border-b border-stone-200 dark:border-stone-700 pb-12 last:border-none"
            >
              <Link
                href={`/company/blog/${post._meta.path}`}
                className="block group"
              >
                <h3 className="text-3xl font-nanum text-stone-900 dark:text-stone-50 mb-4 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 font-karla leading-relaxed">
                  {post.summary}
                </p>
                <div className="mt-4 flex items-center text-sm text-stone-500 dark:text-stone-500">
                  <span className="group-hover:translate-x-2 transition-transform">
                    Read more →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
