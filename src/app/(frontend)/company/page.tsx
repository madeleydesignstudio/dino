import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function CompanyPage() {
  return (
    <div className="w-full min-h-screen">
      {/* Header Section */}
      <section className="flex flex-col items-center justify-center py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-8xl font-black text-foreground mb-8 uppercase tracking-tight">
            Company
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Get to know the team, culture, and story behind Digital Dino. We're
            passionate about creating exceptional digital experiences.
          </p>
        </div>
      </section>

      <Separator className="bg-[#D9E0C1] w-full" />

      {/* Navigation Cards Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* About Us Card */}
            <Link
              href="/company/about"
              className="group bg-background border-2 border-[#D9E0C1] rounded-lg p-12 hover:border-accent transition-all duration-300 hover:shadow-xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <span className="text-2xl">📖</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  About Us
                </h2>
                <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                  Discover our story, mission, and the values that drive
                  everything we do. Learn what makes Digital Dino unique.
                </p>
                <div className="flex items-center text-accent font-semibold text-sm uppercase tracking-wide">
                  <span>Learn More</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>

            {/* Careers Card */}
            <Link
              href="/company/careers"
              className="group bg-background border-2 border-[#D9E0C1] rounded-lg p-12 hover:border-accent transition-all duration-300 hover:shadow-xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <span className="text-2xl">💼</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  Careers
                </h2>
                <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                  Join our growing team and help shape the future of digital
                  design. Explore opportunities to grow your career with us.
                </p>
                <div className="flex items-center text-accent font-semibold text-sm uppercase tracking-wide">
                  <span>View Openings</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>

            {/* Contact Card */}
            <Link
              href="/company/contact"
              className="group bg-background border-2 border-[#D9E0C1] rounded-lg p-12 hover:border-accent transition-all duration-300 hover:shadow-xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <span className="text-2xl">💬</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  Contact
                </h2>
                <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                  Ready to start a conversation? Get in touch with our team and
                  let's discuss your next project together.
                </p>
                <div className="flex items-center text-accent font-semibold text-sm uppercase tracking-wide">
                  <span>Get In Touch</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="bg-[#D9E0C1] w-full" />

      {/* Quick Stats Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-5xl font-black text-accent mb-4">50+</div>
              <div className="text-lg font-semibold text-foreground mb-2">
                Projects Completed
              </div>
              <p className="text-foreground/70">
                Successful digital experiences delivered
              </p>
            </div>
            <div className="p-8">
              <div className="text-5xl font-black text-accent mb-4">5+</div>
              <div className="text-lg font-semibold text-foreground mb-2">
                Years Experience
              </div>
              <p className="text-foreground/70">
                Crafting exceptional digital solutions
              </p>
            </div>
            <div className="p-8">
              <div className="text-5xl font-black text-accent mb-4">24/7</div>
              <div className="text-lg font-semibold text-foreground mb-2">
                Support
              </div>
              <p className="text-foreground/70">Always here when you need us</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
