import React from 'react';
import Link from 'next/link';
import { NewsletterSignup } from '@/components/newsletter/newsletter-signup';

const Footer = () => {
  return (
    <footer className="">
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Side - Hero Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-neutral-600 text-md">Don&apos;t hold back</p>
              <h2 className="font-bold text-4xl text-neutral-900 max-w-md">
                — your standout site could be live in 10 days.
              </h2>
            </div>
            <Link
              className="inline-block rounded-md bg-violet-300 px-2 py-1 font-medium text-neutral-900 transition-colors hover:bg-violet-500 text-xs"
              href="/start-project"
            >
              Start Project
            </Link>
          </div>

          {/* Right Side - Navigation */}
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {/* Case Studies */}
            <div className="space-y-4">
              <h4 className="font-semibold text-neutral-900 text-sm">Case Studies</h4>
              <ul className="space-y-2 text-neutral-600 text-xs">
                <li><Link className="transition-colors hover:text-neutral-900" href="/case-studies/ordo">Ordo</Link></li>
                <li><Link className="transition-colors hover:text-neutral-900" href="/case-studies/structopia">Structopia</Link></li>
                <li><Link className="transition-colors hover:text-neutral-900" href="/case-studies/form-function">Form + Function</Link></li>
                <li><Link className="transition-colors hover:text-neutral-900" href="/case-studies/madeleydesignstudio">madeleydesignstudio</Link></li>
                <li><Link className="border-b border-neutral-300 pb-0.5 transition-colors hover:text-neutral-900" href="/case-studies">View All</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="font-semibold text-neutral-900 text-sm">Resources</h4>
              <ul className="space-y-2 text-neutral-600 text-xs">
                <li><Link className="transition-colors hover:text-neutral-900" href="/resources/dino-ui">Dino UI</Link></li>
                <li><Link className="transition-colors hover:text-neutral-900" href="/resources/dino-opensource">Dino Open Source</Link></li>
                <li><Link className="transition-colors hover:text-neutral-900" href="/resources/dino-api">Dino API</Link></li>
                <li><Link className="transition-colors hover:text-neutral-900" href="/resources/dino-tools">Dino Tools</Link></li>
                <li><Link className="transition-colors hover:text-neutral-900" href="/resources/dino-academy">Dino Academy</Link></li>
                <li><Link className="border-b border-neutral-300 pb-0.5 transition-colors hover:text-neutral-900" href="/resources">View All</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold text-neutral-900 text-sm">Services</h4>
              <ul className="space-y-2 text-neutral-600 text-xs">
                <li><Link className="transition-colors hover:text-neutral-900" href="/services/website-design">Website Design</Link></li>
                <li><Link className="transition-colors hover:text-neutral-900" href="/services/website-development">Website Development</Link></li>
                <li><Link className="transition-colors hover:text-neutral-900" href="/services/art-creative-design">Art & Creative Design</Link></li>
                <li><Link className="transition-colors hover:text-neutral-900" href="/services/agentic-ai">Agentic AI</Link></li>
                <li><Link className="transition-colors hover:text-neutral-900" href="/services/product-design">Product Design</Link></li>
                <li><Link className="border-b border-neutral-300 pb-0.5 transition-colors hover:text-neutral-900" href="/services">View All</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="font-semibold text-neutral-900 text-sm">Company</h4>
              <ul className="space-y-2 text-neutral-600 text-xs">
                <li><Link className="transition-colors hover:text-neutral-900" href="/company/updates-news">Updates & News</Link></li>
                <li><Link className="transition-colors hover:text-neutral-900" href="/pricing">Pricing</Link></li>
                <li><Link className="transition-colors hover:text-neutral-900" href="/questions">Questions</Link></li>
                <li><Link className="transition-colors hover:text-neutral-900" href="/testimonials">Testimonials</Link></li>
              </ul>
            </div>
          </div>
        </div>
<div className="flex flex-col items-end">
   {/* Newsletter Section */}
        <div className=" pt-8 ">
          <NewsletterSignup
            buttonText="Subscribe"
            className="max-w-md text-xs"
            description="Join our newsletter to stay informed about new tips, tutorials, projects, products, investments, and more."
            showFirstName={false}
            title="Newsletter"
          />
        </div>

        {/* Social Links */}
        <div className="mt-8 flex space-x-6">
          <Link className="text-neutral-600 text-sm transition-colors hover:text-neutral-900" href="https://instagram.com">
            INSTAGRAM
          </Link>
          <Link className="text-neutral-600 text-sm transition-colors hover:text-neutral-900" href="https://x.com">
            X.COM
          </Link>
          <Link className="text-neutral-600 text-sm transition-colors hover:text-neutral-900" href="https://linkedin.com">
            LINKEDIN
          </Link>
        </div>
</div>
       
      </div>
    </footer>
  );
};

export default Footer;
