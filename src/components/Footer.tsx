import { cn } from "@/lib/utils";
import Image from "next/image";

const Footer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  return (
    <footer className={cn("bg-black", className)}>
      {/* looped text */}
      <div className="flex h-[68px] items-center gap-6 overflow-hidden text-nowrap border-t-2 border-black bg-simmer font-adelle-mono text-5xl leading-[1]">
        <span>LET US TACO&apos;BOUT YOUR BRAND </span>
        <span>{"//"} LET US TACO&apos;BOUT YOUR BRAND</span>
        <span>{"//"} LET US TACO&apos;BOUT YOUR BRAND</span>
        <span>{"//"} LET US TACO&apos;BOUT YOUR BRAND</span>
      </div>
      <div className="container">
        <div className="min-h-[661px] px-[43px] pb-10 pt-20 xl:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="order-2 flex justify-end md:order-1 md:self-end">
              <button className="rounded-full bg-simmer px-6 py-3 font-adelle-mono text-[0.93rem]">
                ADD TO PLATE
              </button>
            </div>
            <div className="relative order-1 h-[226.22] w-[260px] md:order-2">
              <Image
                src="/images/img_taco-footer.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
          {/* TODO: Make footer items responsive */}
          <div className="flex flex-col items-center justify-between gap-y-[74px] xl:flex-row xl:items-end">
            <div className="space-y-6">
              <p className="font-adelle-mono text-[1.9rem] font-bold leading-none text-simmer">
                READ TO
                <br />
                COOK WITH US?
              </p>
              <div className="flex h-[122.06px] w-[539.35px] overflow-hidden rounded-[24.42px] border-2 border-simmer bg-simmer font-adelle-mono text-[3.81rem]">
                <div className="flex flex-1 items-center justify-center gap-3 bg-simmer">
                  <div className="relative h-[42.74px] w-[67.17]">
                    <Image
                      src="/images/img_cloche.svg"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  YES
                </div>
                <div className="flex flex-1 items-center justify-center bg-black text-simmer">
                  NOOO!
                </div>
              </div>
            </div>
            <div className="flex items-stretch justify-center gap-[18.7px]">
              <Image
                src="/simmer-studios-logo-dark.svg"
                width={216.6}
                height={101}
                alt="Simmer Studios"
              />
              <div className="flex flex-col justify-between border-l-2 border-simmer pl-[18.7px] text-simmer">
                <p className="font-adelle-mono leading-none">
                  ALL
                  <br />
                  RIGHTS
                  <br />
                  RESERVED
                </p>
                <p className="font-adelle-mono text-[2.8rem] leading-none">
                  (2024)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
