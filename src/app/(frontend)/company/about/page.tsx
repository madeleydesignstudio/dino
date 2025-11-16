import { getPayload } from "payload";
import config from "@payload-config";
import type { Media } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { Separator } from "@/components/ui/separator";

async function getAboutContent() {
  const payload = await getPayload({ config });
  const about = await payload.findGlobal({
    slug: "company-about",
  });
  return about;
}

export default async function AboutPage() {
  const about = await getAboutContent();
  const heroImage = about.heroImage as Media;

  return (
    <div className="w-full min-h-screen">
      {/* Header Section */}
      <section className="flex flex-col items-center justify-center py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-8xl font-black text-foreground mb-8 uppercase tracking-tight">
            {about.title}
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            The story behind Digital Dino and the passionate team that brings
            your digital vision to life.
          </p>
        </div>
      </section>

      <Separator className="bg-[#D9E0C1] w-full" />

      {/* Hero Image Section */}
      {heroImage?.url && (
        <>
          <section className="py-20 px-8">
            <div className="max-w-6xl mx-auto">
              <div className="w-full aspect-video rounded-lg overflow-hidden border-2 border-[#D9E0C1] shadow-lg">
                <img
                  src={heroImage.url}
                  alt={heroImage.alt || about.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          <Separator className="bg-[#D9E0C1] w-full" />
        </>
      )}

      {/* Content Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-foreground max-w-none">
            <div className="text-foreground [&_h1]:text-4xl [&_h1]:font-black [&_h1]:text-foreground [&_h1]:mb-8 [&_h1]:mt-12 [&_h1]:first:mt-0 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mb-6 [&_h2]:mt-10 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mb-4 [&_h3]:mt-8 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-foreground/90 [&_ul]:mb-6 [&_ul]:space-y-2 [&_li]:text-lg [&_li]:text-foreground/90 [&_strong]:text-foreground [&_strong]:font-semibold [&_a]:text-accent [&_a]:font-semibold [&_a:hover]:text-accent/80 [&_a]:transition-colors [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:pl-6 [&_blockquote]:py-4 [&_blockquote]:bg-accent/5 [&_blockquote]:rounded-r-lg [&_blockquote]:my-8 [&_blockquote_p]:text-foreground [&_blockquote_p]:italic">
              <RichText data={about.description} />
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-[#D9E0C1] w-full" />

      {/* Call to Action Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-foreground mb-8">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
            Let's discuss how we can help bring your digital vision to life with
            our expertise and passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/company/contact"
              className="bg-accent text-white px-8 py-4 rounded-lg font-bold hover:bg-accent/90 transition-colors text-lg"
            >
              Get In Touch
            </a>
            <a
              href="/services"
              className="border-2 border-[#D9E0C1] text-foreground px-8 py-4 rounded-lg font-bold hover:border-accent hover:text-accent transition-colors text-lg"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
