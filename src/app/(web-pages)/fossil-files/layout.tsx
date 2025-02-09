export default function FossilFilesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}

export const metadata = {
  title: "Fossil Files | Development Tools Directory",
  description:
    "A comprehensive directory of modern development tools, frameworks, and resources for frontend, backend, design, and marketing professionals.",
  keywords:
    "development tools, web development, frontend, backend, design tools, marketing tools, programming resources",
  openGraph: {
    title: "Fossil Files | Development Tools Directory",
    description:
      "Discover and explore modern development tools for frontend, backend, design, and marketing.",
    type: "website",
    url: "https://yourdomain.com/fossil-files",
    image: "https://ik.imagekit.io/danielcmadeley/dino/Group%209.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fossil Files | Development Tools Directory",
    description:
      "Discover and explore modern development tools for frontend, backend, design, and marketing.",
    image: "https://ik.imagekit.io/danielcmadeley/dino/Group%209.svg",
  },
};
