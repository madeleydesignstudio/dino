import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <footer className="bg-accent text-neutral-50 pt-8 pb-20 h-full px-8 relative overflow-hidden">
        <div className="container mx-auto px-4 h-full">

          <div className="flex flex-col md:flex-row justify-between items-center h-full">
            <div className="flex w-fit justify-center items-center h-full gap-4 ">
              <Image
                src="/dino-footer.svg"
                alt="Logo"
                width={250}
                height={250}
              />
              <div className="flex flex-col w-full ">
                <h2 className="text-sm font-bold uppercase">The digital dino</h2>
                <p className="text-xs text-neutral-300 max-w-lg">
                  madeleydesignstuio
                </p>
              </div>
            </div>
            <div className="flex flex-1 w-full h-60 justify-center gap-14 ">
              {/* Product Column */}
              <div className="h-60 w-px bg-red-300/50"></div>

              <div>
                <h3 className="text-md font-bold mb-4">Product</h3>
                <ul className="space-y-2 text-xs">
                  <li>
                    <a href="#" className="hover:underline">
                      Download
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Releases
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Extensions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Roadmap
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Docs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline inline-flex items-center gap-1"
                    >
                      GitHub <span>↗</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline inline-flex items-center gap-1"
                    >
                      Status <span>↗</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="h-60 w-px bg-red-300/50"></div>


              {/* Resources Column */}
              <div>
                <h3 className="text-md font-bold mb-4">Resources</h3>
                <ul className="space-y-2 text-xs">
                  <li>
                    <a href="#" className="hover:underline">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      CLA
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Community Links
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline inline-flex items-center gap-1"
                    >
                      Discussions <span>↗</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Subscribe
                    </a>
                  </li>
                </ul>
              </div>

              <div className="h-60 w-px bg-red-300/50"></div>

              {/* Company Column */}
              <div>
                <h3 className="text-md font-bold mb-4">Company</h3>
                <ul className="space-y-2 text-xs">
                  <li>
                    <a href="#" className="hover:underline">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Values
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Brand
                    </a>
                  </li>
                </ul>
              </div>

              <div className="h-60 w-px bg-red-300/50"></div>

              {/* Social Column */}
              <div>
                <h3 className="text-md font-bold mb-4">Social</h3>
                <ul className="space-y-2 text-xs">
                  <li>
                    <a
                      href="#"
                      className="hover:underline inline-flex items-center gap-1"
                    >
                      Twitter <span>↗</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline inline-flex items-center gap-1"
                    >
                      Bluesky <span>↗</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline inline-flex items-center gap-1"
                    >
                      YouTube <span>↗</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline inline-flex items-center gap-1"
                    >
                      Discord <span>↗</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline inline-flex items-center gap-1"
                    >
                      Reddit <span>↗</span>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        <h1
          className="absolute bottom-0 left-0 right-0 text-center font-bold uppercase text-neutral-50 text-4xl md:text-9xl"
          style={{
            transform: "translateY(50%)",
          }}
        >
          Never Go Extinct
        </h1>
      </footer>
    </>
  );
};
