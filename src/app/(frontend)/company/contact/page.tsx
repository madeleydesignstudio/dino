import { ContactForm } from "@/components/homepage/ContactForm";

export default function ContactPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-neutral-500 mb-8">
          Have a question? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>

        <ContactForm />
      </div>
    </div>
  );
}
