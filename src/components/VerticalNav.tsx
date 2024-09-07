import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  inverted?: boolean;
}

const VerticalNav: React.FC<Props> = ({ inverted = false }) => {
  return (
    <aside className="hidden min-h-[200px] w-[80px] border-r-2 border-t-2 border-simmer pb-20 text-simmer xl:block">
      <div className="sticky top-0 flex flex-col items-center gap-8 py-8">
        <div className="relative h-[26.09px] w-[40px]">
          <Image
            src="/images/img_cloche-inverted.svg"
            className="object-cover"
            fill
            alt=""
          />
        </div>
        <div className="flex gap-8" style={{ writingMode: "vertical-lr" }}>
          <VerticalLink href="#plate">PLATE</VerticalLink>
          <VerticalLink href="#home">HOME</VerticalLink>
          <VerticalLink href="#quote">QUOTE</VerticalLink>
          <VerticalLink href="#menu">MENU</VerticalLink>
          <VerticalLink
            href="#works"
            className="flex items-center gap-[0.87rem] after:inline-block after:h-[0.68rem] after:w-[0.68rem] after:rounded-full after:bg-simmer after:content-['']"
          >
            WORKS
          </VerticalLink>
          <VerticalLink href="#about">ABOUT</VerticalLink>
          <VerticalLink href="#snap">SNAP</VerticalLink>
          <VerticalLink href="#stories">STORIES</VerticalLink>
          <VerticalLink href="#supply">SUPPLY</VerticalLink>
        </div>
      </div>
    </aside>
  );
};

const VerticalLink: React.FC<React.ComponentProps<typeof Link>> = ({
  href,
  className,
  children
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex -rotate-180 items-center justify-center border-b-2 border-black font-adelle-mono text-[1.1rem] hover:underline",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default VerticalNav;
