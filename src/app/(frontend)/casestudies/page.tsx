import { fetchCaseStudies } from "@/lib/caseStudiesServer";
import CaseStudiesClient from "@/app/(frontend)/casestudies/CaseStudiesClient";

export default async function CaseStudiesPage() {
  const caseStudies = await fetchCaseStudies();

  return <CaseStudiesClient caseStudies={caseStudies} />;
}
