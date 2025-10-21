import { getPayload } from "payload";
import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";

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
    <div className="min-h-screen p-8 sm:p-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold text-foreground mb-12 tracking-tight">
          Careers
        </h1>

        {careers.length === 0 ? (
          <div className="bg-background border border-foreground rounded-lg p-8 text-center">
            <p className="text-foreground text-lg">
              No open positions at the moment. Check back soon!
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {careers.map((job) => (
              <div
                key={job.id}
                className="bg-background border border-foreground rounded-lg p-8 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {job.title}
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-foreground/70 font-semibold">
                      <span className="flex items-center gap-2">
                        <span className="text-accent">📍</span>
                        {job.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="text-accent">💼</span>
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none mb-6 text-foreground">
                  <RichText data={job.description} />
                </div>

                <button
                  type="button"
                  className="bg-accent text-white px-6 py-3 rounded-tl-md rounded-tr-md rounded-br-md border-b-4 border-accent/80 font-bold hover:opacity-90 active:border-b-2 active:translate-y-1 transition-all duration-75"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
