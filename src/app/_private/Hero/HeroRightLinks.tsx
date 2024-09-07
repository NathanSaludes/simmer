import { cn } from "@/lib/utils";
import Link from "next/link";

const HeroRightLinks: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className
}) => {
  return (
    <div
      className={cn(
        "hidden basis-[81px] border-l-2 border-black font-adelle-mono text-2xl xl:grid xl:grid-rows-4",
        className
      )}
    >
      <Link
        href="#strategy"
        className="flex items-center justify-center border-b-2 border-black hover:underline"
        style={{ writingMode: "vertical-lr" }}
      >
        STRATEGY
      </Link>
      <Link
        href="#identity"
        className="flex items-center justify-center border-b-2 border-black hover:underline"
        style={{ writingMode: "vertical-lr" }}
      >
        IDENTITY
      </Link>
      <Link
        href="#execution"
        className="flex items-center justify-center border-b-2 border-black hover:underline"
        style={{ writingMode: "vertical-lr" }}
      >
        EXECUTION
      </Link>
      <div
        className="flex items-center justify-center border-b-2 border-black"
        style={{ writingMode: "vertical-lr" }}
      >
        CLICK ME
      </div>
    </div>
  );
};

export default HeroRightLinks;
