'use client';

import { SatelliteDish } from 'lucide-react';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';

// Fake blog post data
const generateBlogPosts = () => {
  const titles = [
    'The Future of Web Design: Trends to Watch in 2024',
    'Building Scalable Design Systems with React',
    'Why User Experience Matters More Than Ever',
    'The Rise of AI in Creative Design',
    'Mastering CSS Grid: A Complete Guide',
    'JavaScript Frameworks: Which One to Choose?',
    'Accessibility in Modern Web Development',
    'The Psychology of Color in Digital Design',
    'Building Better APIs: Best Practices',
    'Mobile-First Design: Beyond Responsive',
    'Designing for Voice Interfaces',
    'The Evolution of Typography on the Web',
    'Creating Engaging Micro-Interactions',
    'Data Visualization: Making Numbers Beautiful',
    'The Art of Minimalist Design',
    'Web Performance Optimization Strategies',
    'Building Trust Through Design',
    'The Future of E-commerce Design',
    'Designing for Accessibility: A Comprehensive Guide',
    'The Role of Animation in User Experience',
    'Building Sustainable Design Practices',
    'The Impact of 5G on Web Development',
    'Designing for Different Cultures',
    'The Ethics of Design in Technology',
    'Creating Inclusive Design Systems',
    'The Future of Remote Collaboration Tools',
    'Designing for Mental Health Applications',
    'The Rise of No-Code Design Tools',
    'Building Better Forms: UX Principles',
    'The Art of Visual Storytelling',
  ];

  const categories = [
    'Design',
    'Development',
    'UX/UI',
    'Technology',
    'Business',
  ];
  const authors = [
    'Sarah Chen',
    'Michael Rodriguez',
    'Emma Thompson',
    'David Park',
    'Lisa Johnson',
  ];

  return titles.map((title, index) => ({
    id: index + 1,
    title,
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
    author: authors[index % authors.length],
    category: categories[index % categories.length],
    date: new Date(
      Date.now() - Math.random() * 10_000_000_000
    ).toLocaleDateString(),
    readTime: Math.floor(Math.random() * 10) + 3,
  }));
};

const BlogPage = () => {
  const [visiblePosts, setVisiblePosts] = useState(10);
  const allPosts = generateBlogPosts();
  const displayedPosts = allPosts.slice(0, visiblePosts);
  const hasMore = visiblePosts < allPosts.length;

  const loadMore = () => {
    setVisiblePosts((prev) => prev + 10);
  };
  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex items-center justify-between py-16">
        <h1 className="font-bold text-2xl">Blog</h1>
        <SatelliteDish className="h-4 w-4" />
      </div>
      <div className="flex gap-4">
        <div className="h-[300px] w-1/2 rounded-lg border border-neutral-200 bg-neutral-100" />
        <div className="h-[300px] w-1/2 rounded-lg border border-neutral-200 bg-neutral-100" />
      </div>
      <div className="flex gap-4 pt-8">
        <div className="h-[300px] w-1/3 rounded-lg border border-neutral-200 bg-neutral-100" />
        <div className="h-[300px] w-1/3 rounded-lg border border-neutral-200 bg-neutral-100" />
        <div className="h-[300px] w-1/3 rounded-lg border border-neutral-200 bg-neutral-100" />
      </div>

      {/* More News Section */}
      <div className="mt-16">
        <Separator className="mb-8" />

        <div className="mb-8">
          <h2 className="mb-2 font-bold text-xl">More News</h2>
          <p className="text-neutral-600 text-sm">
            Stay updated with our latest insights and articles
          </p>
        </div>

        <div className="space-y-6">
          {displayedPosts.map((post) => (
            <article
              className="cursor-pointer rounded-lg border-neutral-200 border-b p-4 pb-6 transition-colors last:border-b-0 hover:bg-neutral-50"
              key={post.id}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full bg-violet-100 px-2 py-1 font-medium text-violet-700 text-xs">
                      {post.category}
                    </span>
                    <span className="text-neutral-500 text-xs">
                      {post.date}
                    </span>
                    <span className="text-neutral-500 text-xs">
                      {post.readTime} min read
                    </span>
                  </div>

                  <h3 className="mb-2 font-semibold text-lg text-neutral-900 transition-colors hover:text-violet-600">
                    {post.title}
                  </h3>

                  <p className="mb-3 text-neutral-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-neutral-300" />
                    <span className="font-medium text-neutral-700 text-sm">
                      {post.author}
                    </span>
                  </div>
                </div>

                <div className="h-16 w-24 flex-shrink-0 rounded-md bg-neutral-200" />
              </div>
            </article>
          ))}
        </div>

        {hasMore && (
          <div className="mt-8 text-center">
            <button
              className="rounded-lg bg-violet-600 px-6 py-3 font-medium text-white transition-colors hover:bg-violet-700"
              onClick={loadMore}
            >
              Load More Articles ({allPosts.length - visiblePosts} remaining)
            </button>
          </div>
        )}

        {!hasMore && (
          <div className="mt-8 text-center">
            <p className="text-neutral-500 text-sm">
              You&apos;ve reached the end of our articles. Check back soon for
              more!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
