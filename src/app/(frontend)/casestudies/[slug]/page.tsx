import { getPayload } from "payload";
import config from "@payload-config";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { CaseStudy, Media } from "@/payload-types";
import Image from "next/image";
import {
  fetchCaseStudyBySlug,
  getCaseStudyStaticParams,
} from "@/lib/caseStudiesServer";

async function getCaseStudy(slug: string) {
  return await fetchCaseStudyBySlug(slug);
}

export async function generateStaticParams() {
  return await getCaseStudyStaticParams();
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  const image = caseStudy.image as Media;

  console.log("Image data:", image);
  console.log("Image URL:", image?.url);

  return (
    <div className="min-h-screen py-16">
      <div className="px-4 ">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm text-gray-500 mb-4">
            <Link href="/casestudies" className="hover:underline">
              Case Studies
            </Link>{" "}
            / {caseStudy.title}
          </div>

          <article>
            <h1 className="text-4xl font-bold mb-6">{caseStudy.title}</h1>

            {image?.url && (
              <div className="w-full aspect-video rounded-lg overflow-hidden mb-8">
                <img
                  src={image.url}
                  alt={image.alt || caseStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed whitespace-pre-wrap">
                {caseStudy.description}
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-[#D9E0C1]">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href="/start"
                  className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-center"
                >
                  Start Similar Project
                </Link>
                <Link
                  href="/casestudies"
                  className="border border-[#D9E0C1] px-8 py-3 rounded-lg hover:bg-gray-50 transition-all font-semibold text-center"
                >
                  View More Case Studies
                </Link>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500">
                  Published:{" "}
                  {new Date(caseStudy.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
