import { cn } from "@/lib/utils";
import Link from "next/link";

const HeroAside: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className
}) => {
  return (
    <aside
      className={cn(
        "hidden min-h-[1181.4px] border-r-2 border-black font-adelle-mono text-[2rem]",
        className
      )}
    >
      <div className="flex min-h-[312px] flex-col items-center gap-4 border-b-2 border-black bg-simmer-yellow p-10">
        <span className="underline underline-offset-8 before:mr-2 before:content-[url(/images/img_chevron-down.svg)] after:ml-2 after:inline-block after:-translate-y-3 after:content-[url(/images/img_ellipse.svg)]">
          STUDIO
        </span>
        <div className="flex flex-col gap-4 text-2xl">
          <Link
            href="#works"
            className="flex h-[48px] w-[107px] items-center justify-center rounded-[12px] bg-black text-simmer hover:underline hover:underline-offset-4"
          >
            WORKS
          </Link>
          <Link
            href="#menu"
            className="flex h-[48px] w-[107px] items-center justify-center rounded-[12px] bg-black text-simmer hover:underline hover:underline-offset-4"
          >
            MENU
          </Link>
          <Link
            href="#about"
            className="flex h-[48px] w-[107px] items-center justify-center rounded-[12px] bg-black text-simmer hover:underline hover:underline-offset-4"
          >
            ABOUT
          </Link>
        </div>
      </div>
      <Link
        href="#snap"
        className="group flex h-[80px] items-center justify-center border-b-2 border-black"
      >
        <span className="w-[125px] group-hover:underline group-hover:underline-offset-4">
          SNAP
        </span>
      </Link>
      <Link
        href="#space"
        className="group flex h-[80px] items-center justify-center border-b-2 border-black"
      >
        <span className="w-[125px] group-hover:underline group-hover:underline-offset-4">
          SPACE
        </span>
      </Link>
      <Link
        href="#stores"
        className="group flex h-[80px] items-center justify-center border-b-2 border-black"
      >
        <span className="relative w-[125px] before:absolute before:-left-8 before:-top-0.5 before:content-[url(/images/img_asterisk.svg)] group-hover:underline group-hover:underline-offset-4">
          STORES
        </span>
      </Link>
      <Link
        href="#supply"
        className="group flex h-[80px] items-center justify-center border-b-2 border-black"
      >
        <span className="relative w-[125px] before:absolute before:-left-8 before:-top-0.5 before:content-[url(/images/img_asterisk.svg)] group-hover:underline group-hover:underline-offset-4">
          SUPPLY
        </span>
      </Link>
    </aside>
  );
};

export default HeroAside;
