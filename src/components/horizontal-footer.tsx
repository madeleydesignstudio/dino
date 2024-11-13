import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HorizontalFooter() {
  return (
    <footer className="w-full h-[20rem] text-stone-900 dark:text-stone-50 overflow-hidden flex flex-col justify-center relative">
      <div className="top-0 left-0 w-full flex items-stretch">
        <div className="h-[1px] w-full bg-stone-900 dark:bg-stone-50 mx-6" />
      </div>
      <div className="relative z-10 p-8 flex h-full w-full justify-center">
        <div className="max-w-7xl mx-auto flex w-full space-x-24 items-start justify-center">
          <div>
            <h2 className="font-bold text-lg mb-2">WORK</h2>
            <ul className="space-y-1 text-xs">
              <li>Structopia</li>
              <li>Intor</li>
              <li>HJB Coaching</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2">SERVICES</h2>
            <ul className="space-y-1 text-xs">
              <li>Design</li>
              <li>Engineer</li>
              <li>Market</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2">COMPANY</h2>
            <ul className="space-y-1 text-xs">
              <li>About</li>
              <li>Careers</li>
              <li>Fossil Files</li>
              <li>Dino Bytes</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2">LEGAL</h2>
            <ul className="space-y-1 text-xs">
              <li>Privacy Policy</li>
              <li>Accreditation</li>
              <li>Cookie Policy</li>
            </ul>
          </div>

          <div className="max-w-[20rem]">
            <h2 className="font-bold text-md mb-2">NEWSLETTER</h2>
            <div className="flex h-fit">
              <Input
                type="email"
                placeholder="Enter your Email"
                className="rounded-r-none text-xs"
              />
              <Button
                type="submit"
                className="rounded-l-none font-bold bg-[#2EA8A9] text-stone-50 dark:text-stone-900 hover:bg-[#237e7e] text-xs"
              >
                Subscribe
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-8 justify-center">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  className="fill-stone-900 dark:fill-stone-50"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  className="fill-stone-900 dark:fill-stone-50"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  className="fill-stone-900 dark:fill-stone-50"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div className="text-xs text-center">
                <p>51.5072° N, 0.1276° W</p>
                <div className="flex items-center justify-center mt-1">
                  <div className="mr-2">
                    <img
                      src="https://ik.imagekit.io/danielcmadeley/dino/Flag_of_England.svg?updatedAt=1729714231773"
                      alt="UK"
                      width={18}
                      height={18}
                    />
                  </div>
                  <p className="uppercase">UK Design Studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-center overflow-hidden pointer-events-none h-[15rem]">
        <span className="text-[45rem] font-bold text-stone-950 dark:text-stone-100 leading-none">
          DINO
        </span>
      </div>
    </footer>
  );
}
