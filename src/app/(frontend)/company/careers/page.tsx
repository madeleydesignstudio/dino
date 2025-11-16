import { getPayload } from "payload";
import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { Separator } from "@/components/ui/separator";

async function getCareers() {
  const payload = await getPayload({ config });
  const careers = await payload.find({
    collection: "careers",
    where: {
      isOpen: {
        equals: true,
      },
    },
    sort: "-createdAt",
  });
  return careers.docs;
}

export default async function CareersPage() {
  const careers = await getCareers();

  return (
    <div className="w-full min-h-screen">
      {/* Header Section */}
      <section className="flex flex-col items-center justify-center py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-8xl font-black text-foreground mb-8 uppercase tracking-tight">
            Careers
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Join our passionate team and help shape the future of digital
            design. We're always looking for talented individuals who share our
            vision.
          </p>
        </div>
      </section>

      <Separator className="bg-[#D9E0C1] w-full" />

      {/* Career Opportunities Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          {careers.length === 0 ? (
            <div className="bg-background border-2 border-[#D9E0C1] rounded-lg p-16 text-center max-w-3xl mx-auto">
              <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-4xl">💼</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                No Open Positions
              </h2>
              <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
                We don't have any open positions at the moment, but we're always
                interested in connecting with talented individuals. Check back
                soon or reach out to introduce yourself!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/company/contact"
                  className="bg-accent text-white px-8 py-4 rounded-lg font-bold hover:bg-accent/90 transition-colors"
                >
                  Get In Touch
                </a>
                <a
                  href="/company/about"
                  className="border-2 border-[#D9E0C1] text-foreground px-8 py-4 rounded-lg font-bold hover:border-accent hover:text-accent transition-colors"
                >
                  Learn About Us
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-black text-foreground mb-4">
                  Open Positions
                </h2>
                <p className="text-lg text-foreground/70">
                  Discover opportunities to grow your career with Digital Dino
                </p>
              </div>

              {careers.map((job, index) => (
                <div key={job.id}>
                  <div className="bg-background border-2 border-[#D9E0C1] rounded-lg p-12 hover:border-accent transition-all duration-300 group">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-8">
                      <div className="flex-1">
                        <h3 className="text-4xl font-black text-foreground mb-4 group-hover:text-accent transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-6 mb-6">
                          <div className="flex items-center gap-3 text-foreground/70 font-semibold">
                            <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                              <span className="text-accent text-sm">📍</span>
                            </div>
                            <span className="text-lg">{job.location}</span>
                          </div>
                          <div className="flex items-center gap-3 text-foreground/70 font-semibold">
                            <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                              <span className="text-accent text-sm">💼</span>
                            </div>
                            <span className="text-lg">{job.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="prose prose-lg max-w-none mb-8 text-foreground [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-foreground [&_h1]:mb-6 [&_h1]:mt-8 [&_h1]:first:mt-0 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mb-4 [&_h2]:mt-6 [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-foreground [&_h3]:mb-3 [&_h3]:mt-5 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:text-foreground/90 [&_ul]:mb-4 [&_ul]:space-y-2 [&_li]:text-lg [&_li]:text-foreground/90 [&_li]:leading-relaxed [&_ol]:mb-4 [&_ol]:space-y-2 [&_strong]:text-foreground [&_strong]:font-semibold">
                      <RichText data={job.description} />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        type="button"
                        className="bg-accent text-white px-8 py-4 rounded-lg font-bold hover:bg-accent/90 transition-all duration-200 text-lg"
                      >
                        Apply Now
                      </button>
                      <button
                        type="button"
                        className="border-2 border-[#D9E0C1] text-foreground px-8 py-4 rounded-lg font-bold hover:border-accent hover:text-accent transition-colors text-lg"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>

                  {index < careers.length - 1 && (
                    <Separator className="bg-[#D9E0C1] w-full my-8" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Separator className="bg-[#D9E0C1] w-full" />

      {/* Why Work With Us Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground mb-8">
              Why Work With Digital Dino?
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              We believe in fostering creativity, encouraging growth, and
              building meaningful relationships with our team members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Growth Opportunities
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Continuous learning and development with mentorship and
                skill-building programs.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚖️</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Work-Life Balance
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Flexible schedules and remote work options to help you thrive
                professionally and personally.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Creative Freedom
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Work on exciting projects with the freedom to explore innovative
                solutions and ideas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-[#D9E0C1] w-full" />

      {/* Call to Action Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-foreground mb-8">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
            Even if we don't have the perfect role listed, we'd love to hear
            from you and discuss potential opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/company/contact"
              className="bg-accent text-white px-8 py-4 rounded-lg font-bold hover:bg-accent/90 transition-colors text-lg"
            >
              Send Us Your Resume
            </a>
            <a
              href="/company/about"
              className="border-2 border-[#D9E0C1] text-foreground px-8 py-4 rounded-lg font-bold hover:border-accent hover:text-accent transition-colors text-lg"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
