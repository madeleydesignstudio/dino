import { ContactForm } from "@/components/homepage/ContactForm";
import { Separator } from "@/components/ui/separator";

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen">
      {/* Header Section */}
      <section className="flex flex-col items-center justify-center py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-8xl font-black text-foreground mb-8 uppercase tracking-tight">
            Contact
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Have a question or ready to start your next project? We'd love to
            hear from you. Send us a message and we'll respond as soon as
            possible.
          </p>
        </div>
      </section>

      <Separator className="bg-[#D9E0C1] w-full" />

      {/* Contact Form Section */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-background border-2 border-[#D9E0C1] rounded-lg p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Let's Start a Conversation
              </h2>
              <p className="text-foreground/70 text-lg">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Separator className="bg-[#D9E0C1] w-full" />

      {/* Contact Information Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground mb-8">
              Other Ways to Reach Us
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Prefer a different way to get in touch? Here are some alternative
              contact methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Email */}
            <div className="bg-background border-2 border-[#D9E0C1] rounded-lg p-8 text-center hover:border-accent transition-colors">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Email</h3>
              <p className="text-foreground/70 mb-4">
                Send us an email directly
              </p>
              <a
                href="mailto:hello@digitaldino.com"
                className="text-accent font-semibold hover:text-accent/80 transition-colors"
              >
                hello@digitaldino.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-background border-2 border-[#D9E0C1] rounded-lg p-8 text-center hover:border-accent transition-colors">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Phone</h3>
              <p className="text-foreground/70 mb-4">
                Give us a call during business hours
              </p>
              <a
                href="tel:+1234567890"
                className="text-accent font-semibold hover:text-accent/80 transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>

            {/* Social Media */}
            <div className="bg-background border-2 border-[#D9E0C1] rounded-lg p-8 text-center hover:border-accent transition-colors">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Social Media
              </h3>
              <p className="text-foreground/70 mb-4">
                Connect with us on social platforms
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="text-accent font-semibold hover:text-accent/80 transition-colors"
                >
                  LinkedIn
                </a>
                <span className="text-foreground/30">•</span>
                <a
                  href="#"
                  className="text-accent font-semibold hover:text-accent/80 transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-[#D9E0C1] w-full" />

      {/* FAQ Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-foreground/80">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-background border-2 border-[#D9E0C1] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                How long does a typical project take?
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Project timelines vary depending on scope and complexity.
                Typically, our projects range from 2-12 weeks. We'll provide a
                detailed timeline during our initial consultation.
              </p>
            </div>

            <div className="bg-background border-2 border-[#D9E0C1] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                What's your design process like?
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                We follow a collaborative approach: Discovery, Strategy, Design,
                Development, and Launch. You'll be involved throughout the
                entire process with regular check-ins and feedback sessions.
              </p>
            </div>

            <div className="bg-background border-2 border-[#D9E0C1] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Do you work with businesses of all sizes?
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Absolutely! We work with startups, small businesses, and larger
                enterprises. Our approach is tailored to fit your specific needs
                and budget requirements.
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
            Let's discuss your project and explore how we can help bring your
            digital vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#contact-form"
              className="bg-accent text-white px-8 py-4 rounded-lg font-bold hover:bg-accent/90 transition-colors text-lg"
            >
              Fill Out Our Form
            </a>
            <a
              href="mailto:hello@digitaldino.com"
              className="border-2 border-[#D9E0C1] text-foreground px-8 py-4 rounded-lg font-bold hover:border-accent hover:text-accent transition-colors text-lg"
            >
              Send Direct Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
