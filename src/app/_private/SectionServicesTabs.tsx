import PlaceholderText from "@/components/dev/PlaceholderText";
import Image from "next/image";

// TODO: Implement tab view functionality
const SectionServicesTabs = () => {
  return (
    <section>
      {/* Tab Triggers Slot */}
      <div>
        <div className="debug-outline flex min-h-[100px] items-center px-20">
          <PlaceholderText
            text="Tab Triggers"
            className="flex-1 text-center text-simmer"
          />
        </div>
      </div>
      {/* Tab Content */}
      <div className="min-h-[200px] bg-simmer">
        <div className="flex items-start justify-between px-20 pb-[56px] pt-[112px]">
          <p className="font-adelle-mono text-[3rem] font-bold leading-none tracking-tight">
            BRAND
            <br />
            STRATEGY
          </p>
          <div className="flex items-start gap-6">
            <Image
              src="/images/img_information-icon.svg"
              width={45}
              height={45}
              alt=""
            />
            <p className="w-[336px] font-articulat text-[2rem] font-bold leading-none">
              Appetizers - what you need before you start anything.
            </p>
          </div>
        </div>
        {/* items */}
        <div>
          <div className="flex items-stretch gap-10 border-b-2 border-black px-20 py-20">
            <span className="mr-[48px] font-adelle-mono-flex text-[3rem]">
              01
            </span>
            <p className="flex-1 font-articulat text-[8.8rem] font-semibold leading-[0.9]">
              BRAND STRATEGY
            </p>
            <Image
              className="mb-5 flex-shrink-0 self-end"
              src="/images/img_asterisk.svg"
              width={45}
              height={45}
              alt=""
            />
          </div>
          <div className="flex items-stretch gap-10 border-b-2 border-black px-20 py-20">
            <span className="mr-[48px] font-adelle-mono-flex text-[3rem]">
              02
            </span>
            <p className="flex-1 font-articulat text-[8.8rem] italic leading-[0.9]">
              BRAND NAMING
            </p>
            <Image
              className="mb-5 flex-shrink-0 self-end"
              src="/images/img_asterisk.svg"
              width={45}
              height={45}
              alt=""
            />
          </div>
          <div className="flex items-stretch gap-10 border-b-2 border-black px-20 py-20">
            <span className="mr-[48px] font-adelle-mono-flex text-[3rem]">
              03
            </span>
            <p className="flex-1 font-articulat text-[8.8rem] font-semibold leading-[0.9]">
              BRAND DISCOVERY
            </p>
            <Image
              className="mb-5 flex-shrink-0 self-end"
              src="/images/img_asterisk.svg"
              width={43}
              height={43}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionServicesTabs;
