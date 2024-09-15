import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";

interface Props {
  dark?: boolean;
  noLogoBorder?: boolean;
}

const Header: React.FC<Props & HTMLAttributes<HTMLElement>> = ({
  dark,
  noLogoBorder,
  className
}) => {
  return (
    <header
      className={cn(
        "flex border-b-2 border-black",
        {
          "border-simmer text-simmer": dark
        },
        className
      )}
    >
      <div
        className={cn(
          "container flex flex-1 px-4 sm:h-[70px] sm:px-10 md:pl-0 xl:h-[120px] xl:pr-0"
        )}
      >
        <Link
          className={cn(
            "flex basis-[70px] items-center md:basis-[160px] md:justify-center md:border-r-2 md:border-black xl:basis-[277px]",
            { "md:border-simmer": dark, "md:border-none": noLogoBorder }
          )}
          href="/"
        >
          <div className="relative aspect-video w-[70px] md:w-[100px]">
            {dark ? (
              <Image
                src="/simmer-studios-logo-dark.svg"
                className="object-contain"
                alt="Simmer Studios"
                fill
              />
            ) : (
              <Image
                src="/simmer-studios-logo.svg"
                className="object-contain"
                alt="Simmer Studios"
                fill
              />
            )}
          </div>
        </Link>
        <div className="flex flex-1 items-center py-5 md:mx-4">
          <Link
            href="/"
            className={cn(
              "flex font-adelle-mono text-sm before:block before:translate-y-0.5 before:scale-50 before:content-[url(/images/img_chevron-right.svg)] hover:underline hover:underline-offset-4 sm:before:scale-75 lg:before:mr-2 lg:before:scale-100",
              {
                "before:content-[url(/images/img_chevron-right-dark.svg)]": dark
              }
            )}
          >
            <span className="flex items-center justify-center md:text-2xl">
              HOME
            </span>
          </Link>
        </div>
        <Link
          href="#get-a-quote"
          className={cn(
            "hidden basis-[141px] items-center justify-center border-l-2 border-black p-7 xl:flex",
            { "border-simmer": dark }
          )}
        >
          <span className="text-center font-adelle-mono md:text-2xl md:leading-[1.5rem]">
            GET A QUOTE
          </span>
        </Link>
        <div
          className={cn(
            "hidden basis-[152px] items-center justify-center border-l-2 border-black p-7 font-adelle-mono xl:flex xl:border-r-2",
            { "border-simmer": dark }
          )}
        >
          {dark ? (
            <Image
              src="/images/img_cloche-dark.svg"
              alt="Cart Icon"
              width={88}
              height={56}
            />
          ) : (
            <Image
              src="/images/img_cloche.svg"
              alt="Cart Icon"
              width={88}
              height={56}
            />
          )}
        </div>
        <div className="flex items-center justify-center xl:basis-[79px]">
          <button className="p-2 xl:hidden">
            <div className="relative aspect-video w-[40px] sm:w-[56px]">
              {dark ? (
                <Image
                  src="/images/img_menu-icon-mobile-dark.svg"
                  className="object-contain"
                  fill
                  alt="Menu Icon"
                />
              ) : (
                <Image
                  src="/images/img_menu-icon-mobile.svg"
                  className="object-contain"
                  fill
                  alt="Menu Icon"
                />
              )}
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
