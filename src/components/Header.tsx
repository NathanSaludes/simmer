import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";

const Header: React.FC<HTMLAttributes<HTMLElement>> = ({ className }) => {
  return (
    <header
      className={cn(
        "flex border-b-2 border-black px-4 sm:h-[70px] sm:px-10 md:pl-0 xl:h-[120px] xl:pr-0",
        className
      )}
    >
      <Link
        className="flex basis-[70px] items-center md:basis-[160px] md:justify-center md:border-r-2 md:border-black xl:basis-[277px]"
        href="/"
      >
        <div className="relative aspect-video w-[70px] md:w-[100px]">
          <Image
            src="/simmer-studios-logo.svg"
            className="object-contain"
            alt="Simmer Studios"
            fill
          />
        </div>
      </Link>
      <div className="flex flex-1 items-center py-5 md:mx-4">
        <Link
          href="/"
          className="flex font-adelle-mono text-sm before:block before:translate-y-0.5 before:scale-50 before:content-[url(/images/img_chevron-right.svg)] hover:underline hover:underline-offset-4 sm:before:scale-75 lg:before:mr-2 lg:before:scale-100"
        >
          <span className="flex items-center justify-center md:text-2xl">
            HOME
          </span>
        </Link>
      </div>
      <Link
        href="#get-a-quote"
        className="hidden basis-[141px] items-center justify-center border-l-2 border-black p-7 xl:flex"
      >
        <span className="text-center font-adelle-mono md:text-2xl md:leading-[1.5rem]">
          GET A QUOTE
        </span>
      </Link>
      <div className="hidden basis-[152px] items-center justify-center border-l-2 border-black p-7 font-adelle-mono xl:flex xl:border-r-2">
        <Image
          src="/images/img_cloche.svg"
          alt="Cart Icon"
          width={88}
          height={56}
        />
      </div>
      <div className="flex items-center justify-center xl:basis-[79px]">
        <button className="p-2 xl:hidden">
          <div className="relative aspect-video w-[40px] sm:w-[56px]">
            <Image
              src="/images/img_menu-icon-mobile.svg"
              className="object-contain"
              fill
              alt="Menu Icon"
            />
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
