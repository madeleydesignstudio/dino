import { allPosts } from "content-collections";
import { notFound } from "next/navigation";
import Link from "next/link";

// Generate static paths at build time
export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._meta.path,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._meta.path === params.slug);

  if (!post) {
    notFound();
  }

  const readingTime = Math.ceil(post.content.split(/\s+/).length / 200); // Assumes 200 words per minute

  return (
    <>
      <div className="max-w-4xl mx-auto pt-[75px] w-full px-6">
        <Link
          href="/company/blog"
          className=" items-start text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 transition-colors"
        >
          <span className="mr-2">←</span>
          Back to Blog
        </Link>
      </div>
      <article className="max-w-4xl mx-auto px-6 py-6">
        {/* Header Section */}
        <div className="space-y-6 mb-12">
          <h1 className="text-4xl md:text-6xl font-nanum text-stone-900 dark:text-stone-50">
            {post.title}
          </h1>
          <p className="text-lg text-stone-600 dark:text-stone-400 font-karla">
            {post.summary}
          </p>
          <div className="flex items-center gap-4 text-sm text-stone-500 dark:text-stone-400">
            <time dateTime={post.date.toISOString()}>
              {post.date.toLocaleDateString()}
            </time>
            <span>•</span>
            <span>{readingTime} min read</span>
          </div>
        </div>

        {/* Blog Content */}
        <div className="prose prose-stone dark:prose-invert max-w-none">
          {/* Add your full blog content rendering here */}
          <div className="space-y-6 text-stone-800 dark:text-stone-200">
            {post.content}
          </div>
        </div>
      </article>
    </>
  );
}
