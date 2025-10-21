import Link from "next/link";
import { StackedDiamonds } from "./stacked-diamonds";
import { Separator } from "../universal/separator";

export const Resources = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full max-w-7xl flex h-full flex-col gap-10">
          <div className="flex items-center justify-between w-full">
            <h2 className="font-black text-xl uppercase">Resources</h2>
            <div />
          </div>
          <div>
            <StackedDiamonds />
          </div>
          <div className="flex items-center justify-between w-full">
            <h2 className="font-black text-xl uppercase"></h2>
            <Link href="/clients" className="text-accent">
              view all resources {"----->"}
            </Link>
          </div>
        </div>
      </div>
      <Separator className="my-20 bg-foreground max-w-7xl mx-auto" />
    </>
  );
};
