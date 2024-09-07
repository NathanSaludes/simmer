import Image from "next/image";
import { HTMLAttributes } from "react";

const Footer: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <footer className={className}>
      {/* looped text */}
      <div className="flex h-[68px] items-center gap-6 overflow-hidden text-nowrap border-t-2 border-black bg-simmer font-adelle-mono text-5xl leading-[1]">
        <span>LET US TACO&apos;BOUT YOUR BRAND </span>
        <span>{"//"} LET US TACO&apos;BOUT YOUR BRAND</span>
        <span>{"//"} LET US TACO&apos;BOUT YOUR BRAND</span>
      </div>
      <div className="min-h-[661px] bg-black p-20">
        <div className="flex justify-end">
          <button className="rounded-full bg-simmer px-10 py-4 font-adelle-mono text-2xl">
            ADD TO PLATE
          </button>
        </div>
        <div className="flex items-center justify-center pt-7">
          <div className="relative h-[226.22] w-[260px]">
            <Image
              src="/images/img_taco-footer.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex items-end justify-between">
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
          <div className="flex items-stretch gap-[18.7px]">
            <Image
              src="/simmer-studios-logo-inverted.svg"
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
    </footer>
  );
};

export default Footer;
