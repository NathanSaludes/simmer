import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  variant?: "yellow" | "dark";
}

const Aside: React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({
  variant,
  className
}) => {
  return (
    <aside
      className={cn(
        "hidden min-h-[80dvh] w-[277px] border-r-2 border-black font-adelle-mono text-[2rem] xl:block",
        { "border-simmer": variant === "dark" },
        className
      )}
    >
      <div
        className={cn("divide-y-2 divide-black border-b-2 border-black", {
          "divide-simmer border-simmer": variant === "dark"
        })}
      >
        <div
          className={cn("flex min-h-[312px] flex-col items-center gap-4 p-10", {
            "bg-simmer-yellow": variant === "yellow"
          })}
        >
          <span
            className={cn(
              "text-black underline underline-offset-8 before:mr-2 before:content-[url(/images/img_chevron-down.svg)] after:ml-2 after:inline-block after:-translate-y-3 after:content-[url(/images/img_ellipse.svg)]",
              {
                "text-simmer before:content-[url(/images/img_chevron-down-dark.svg)] after:content-[url(/images/img_ellipse-dark.svg)]":
                  variant === "dark"
              }
            )}
          >
            STUDIO
          </span>
          <div className="flex flex-col gap-4 text-2xl">
            {[
              { label: "WORKS", href: "#works" },
              { label: "MENU", href: "#menu" },
              { label: "ABOUT", href: "#about" }
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex h-[48px] w-[107px] items-center justify-center rounded-[12px] bg-black text-simmer hover:underline hover:underline-offset-4",
                  { "bg-simmer text-black": variant === "dark" }
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <AsideLink href="#snap" dark={variant === "dark"}>
          SNAP
        </AsideLink>
        <AsideLink href="#space" dark={variant === "dark"}>
          SPACE
        </AsideLink>
        <AsideLink href="#stores" dark={variant === "dark"} withAsterisk>
          STORES
        </AsideLink>
        <AsideLink href="#supply" dark={variant === "dark"} withAsterisk>
          SUPPLY
        </AsideLink>
      </div>
    </aside>
  );
};

interface AsideLinkProps {
  withAsterisk?: boolean;
  dark?: boolean;
}

const AsideLink: React.FC<
  React.PropsWithChildren<AsideLinkProps & React.ComponentProps<typeof Link>>
> = ({ withAsterisk, dark, href, className, children, ...props }) => {
  if (withAsterisk) {
    return (
      <Link
        href={href}
        className={cn(
          "group flex h-[80px] items-center justify-center",
          { "text-simmer": dark },
          className
        )}
        {...props}
      >
        <span
          className={cn(
            "relative w-[125px] before:absolute before:-left-8 before:-top-0.5 before:content-[url(/images/img_asterisk.svg)] group-hover:underline group-hover:underline-offset-4",
            { "before:content-[url(/images/img_asterisk-dark.svg)]": dark }
          )}
        >
          {children}
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "group flex h-[80px] items-center justify-center",
        { "text-simmer": dark },
        className
      )}
      {...props}
    >
      <span className="w-[125px] group-hover:underline group-hover:underline-offset-4">
        {children}
      </span>
    </Link>
  );
};

export default Aside;
