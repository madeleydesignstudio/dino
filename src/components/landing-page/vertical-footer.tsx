import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function VerticalFooter() {
  return (
    <footer className=" right-0 h-screen w-[33rem] text-stone-900 dark:text-stone-50 overflow-hidden flex flex-col">
      <div className="absolute left-0 top-0 h-full flex items-stretch">
        <div className="w-[1px] bg-stone-900 my-6" />
      </div>
      <div className="relative z-10 p-8 flex flex-col h-full justify-between">
        <div className="space-y-8">
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
            <h2 className="font-bold text-md mb-2 ">NEWSLETTER</h2>
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
        </div>

        <div className="flex flex-col space-y-8 ">
          <img
            src="https://ik.imagekit.io/danielcmadeley/dino/dino-logo.svg?updatedAt=1729715034860"
            alt="Dino Logo"
            width={100}
            height={100}
          />
          <div className="flex space-x-8 mb-4">
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
          <div className="text-xs">
            <p>51.5072° N, 0.1276° W</p>
            <div className="flex items-center mt-1">
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
      <div className="absolute inset-y-0 right-0 flex items-center overflow-hidden pointer-events-none -z-10">
        <div className="relative left-1/2">
          <span
            className="text-[25rem] font-bold text-black leading-none rotate-180"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            DINO
          </span>
        </div>
      </div>
    </footer>
  );
}
