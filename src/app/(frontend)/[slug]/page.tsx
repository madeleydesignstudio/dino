import { getPayload } from "payload";
import config from "@payload-config";
import { notFound } from "next/navigation";
import type { Media } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";

async function getPage(slug: string) {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: "pages",
    where: {
      slug: {
        equals: slug,
      },
      isPublished: {
        equals: true,
      },
    },
    limit: 1,
  });

  return result.docs[0] || null;
}

export async function generateStaticParams() {
  const payload = await getPayload({ config });

  const pages = await payload.find({
    collection: "pages",
    where: {
      isPublished: {
        equals: true,
      },
    },
    limit: 100,
  });

  return pages.docs.map((page) => ({
    slug: page.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  const page = await getPage(slug);

  if (!page) {
    notFound();
  }

  const heroImage = page.heroImage as Media | null;

  return (
    <div className="min-h-screen p-8 sm:p-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">{page.title}</h1>

        {heroImage?.url && (
          <div className="w-full aspect-video rounded-lg overflow-hidden mb-8">
            <img
              src={heroImage.url}
              alt={heroImage.alt || page.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <RichText data={page.content} />
        </div>
      </div>
    </div>
  );
}
