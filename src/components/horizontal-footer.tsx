import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HorizontalFooter() {
  return (
    <footer className="w-full h-[25rem] text-black overflow-hidden flex flex-col justify-center relative">
      <div className="top-0 left-0 w-full flex items-stretch">
        <div className="h-[1px] w-full bg-stone-900 mx-6" />
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
                className="rounded-l-none font-bold bg-[#2EA8A9] text-white hover:bg-[#237e7e] text-xs"
              >
                Subscribe
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            <img
              src="https://ik.imagekit.io/danielcmadeley/dino/dino-logo.svg?updatedAt=1729715034860"
              alt="Dino Logo"
              width={100}
              height={100}
            />

            <div className="flex flex-col space-y-4">
              <div className="flex space-x-8 justify-center">
                <img
                  src="https://ik.imagekit.io/danielcmadeley/dino/x.svg?updatedAt=1729714447358"
                  alt="X"
                  width={20}
                  height={20}
                />
                <img
                  src="https://ik.imagekit.io/danielcmadeley/dino/github.svg?updatedAt=1729714431708"
                  alt="Github"
                  width={20}
                  height={20}
                />
                <img
                  src="https://ik.imagekit.io/danielcmadeley/dino/linkedin.svg?updatedAt=1729714466076"
                  alt="Linkedin"
                  width={20}
                  height={20}
                />
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
        <span className="text-[45rem] font-bold text-stone-950 leading-none">
          DINO
        </span>
      </div>
    </footer>
  );
}
