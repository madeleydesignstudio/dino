import React from 'react';
import { NewsletterSignup } from '@/components/newsletter/newsletter-signup';

const Footer = () => {
  return (
    <footer className="border-gray-200 border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 text-lg">
              Madeley Design Studio
            </h3>
            <p className="text-gray-600 text-sm">
              Creating beautiful, functional websites that help your business
              grow.
            </p>
            <div className="text-gray-600 text-sm">
              <p>daniel@madeleydesignstudio.com</p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
              Services
            </h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a className="transition-colors hover:text-gray-900" href="#">
                  Web Design
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-gray-900" href="#">
                  Web Development
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-gray-900" href="#">
                  Brand Identity
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-gray-900" href="#">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
              Resources
            </h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a className="transition-colors hover:text-gray-900" href="#">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-gray-900" href="#">
                  Case Studies
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-gray-900" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-gray-900" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <NewsletterSignup
              buttonText="Subscribe"
              className="max-w-sm"
              description="Get design tips, project updates, and industry insights."
              showFirstName={false}
              title="Newsletter"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-gray-200 border-t pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Madeley Design Studio. All rights
              reserved.
            </p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              <a
                className="text-gray-500 text-sm transition-colors hover:text-gray-900"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="text-gray-500 text-sm transition-colors hover:text-gray-900"
                href="#"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
