import { cn } from "@/lib/utils";

interface StackedDiamondsProps {
  className?: string;
}

export function StackedDiamonds({ className }: StackedDiamondsProps) {
  const navigationItems = [
    { label: "OPEN - SOURCE", href: "/resources/opensource" },
    { label: "UI", href: "/resources/ui" },
    { label: "API", href: "/resources/api" },
    { label: "COMPARE", href: "/resources/compare" },
    { label: "BLOG", href: "/resources/blog" },
  ];

  return (
    <div className={cn("flex flex-col items-center", className)}>
      {navigationItems.map((item, index) => (
        <div
          key={item.label}
          className="relative"
          style={{
            marginTop: index > 0 ? "-20px" : "0px",
            zIndex: navigationItems.length - index,
          }}
        >
          <a
            href={item.href}
            className="group block transition-all duration-300 hover:scale-105"
          >
            <svg
              width="300"
              height="120"
              viewBox="0 0 300 120"
              className="drop-shadow-lg"
            >
              <path
                d="M30 60 L150 20 L270 60 L150 100 Z"
                fill="#e5e5dc"
                className="group-hover:fill-white transition-colors duration-300"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-800 font-bold text-lg tracking-wider group-hover:text-gray-900 transition-colors duration-300">
                {item.label}
              </span>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
