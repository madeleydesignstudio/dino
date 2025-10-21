import { HeaderNav } from "@/components/universal/HeaderNav";
import { ServerLogo } from "@/components/universal/ServerLogo";

export function Header() {
  const resourcesLinks = [
    { name: "Opensource", href: "/resources/opensource" },
    { name: "UI", href: "/resources/ui" },
    { name: "API", href: "/resources/api" },
    { name: "Compare", href: "/resources/compare" },
    { name: "Blog", href: "/resources/blog" },
  ];

  const companyLinks = [
    { name: "About", href: "/company/about" },
    { name: "Careers", href: "/company/careers" },
    { name: "Contact", href: "/company/contact" },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-[100rem]">
        <HeaderNav
          resourcesLinks={resourcesLinks}
          companyLinks={companyLinks}
          logo={<ServerLogo width={50} height={35} priority />}
        />
      </div>
    </div>
  );
}
