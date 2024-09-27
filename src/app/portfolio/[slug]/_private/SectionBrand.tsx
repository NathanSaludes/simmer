import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const SectionBrand = () => {
  return (
    <section className="flex-1">
      <div className="space-y-[57px] rounded-tl-[156px] bg-simmer px-[64px] pb-[91px] pt-[51px]">
        {/* Row 1 - Bento Grid */}
        <div className="container grid grid-cols-2 gap-[51px]">
          {/* col 1 */}
          <div className="relative aspect-square h-full overflow-hidden rounded-[102px] border-2 border-black bg-gray-100">
            {/* <Image
              src="/images/sample/bourbon.png"
              alt="bourbon"
              fill
              className="object-cover"
            /> */}
          </div>
          {/* col 2 */}
          <div className="flex flex-col gap-[28px]">
            <div className="relative h-[394px] overflow-hidden rounded-[81px] border-2 border-black bg-gray-100">
              {/* <Image
                src="/images/sample/bourbon-2.png"
                alt="bourbon"
                className="fill object-cover"
                fill
              /> */}
            </div>
            <div className="flex flex-1 items-center gap-10 rounded-[63px] bg-black px-[53px] py-[50px] font-adelle-mono-flex text-[7.8rem] leading-none tracking-tight text-simmer">
              <p className="flex-1">
                BRANDING
                <br />
                +DESIGN
              </p>
              <div className="flex h-full flex-1 items-end justify-end">
                <Image
                  src="/images/img_arrow-down-dark.svg"
                  alt=""
                  width={32.93}
                  height={82.05}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* Row 2 - Project Details */}
        <div className="container flex flex-col gap-[166px] px-[51px] md:flex-row">
          {/* year, brand, project, services */}
          <div className="max-w-[613px] flex-1 divide-y-2 divide-black border-y-2 border-black">
            <div className="flex py-3 text-[1.125rem]">
              <p className="flex-1 font-adelle-mono leading-none">YEAR</p>
              <p className="font-articulat font-medium leading-[1]">2022</p>
            </div>
            <div className="flex py-3 text-[1.125rem]">
              <p className="flex-1 font-adelle-mono leading-none">BRAND</p>
              <p className="font-articulat font-medium leading-[1]">
                Luiqor Industry
              </p>
            </div>
            <div className="flex py-3 text-[1.125rem]">
              <p className="flex-1 font-adelle-mono leading-none">PROJECT</p>
              <p className="font-articulat font-medium leading-[1]">
                Rebranding
              </p>
            </div>
            <div className="flex py-3 text-[1.125rem]">
              <p className="flex-1 font-adelle-mono leading-none">SERVICES</p>
              <ul className="space-y-1.5 text-end font-articulat font-medium leading-[1]">
                <li>Logo Creation</li>
                <li>Packaging</li>
                <li>Website Design</li>
              </ul>
            </div>
          </div>
          {/* text */}
          <div className="flex-1 space-y-2">
            <p className="text-center font-articulat text-[1.5rem] font-medium leading-[1.3] md:text-start">
              The Bourbon Bros combines premium quality with a fun and
              approachable personality, making it an excellent choice for those
              looking for a high-quality bourbon that doesn&apos;t take itself
              too seriously.
            </p>
            <div className="font-articulat text-[1.125rem] font-bold">
              <span className="mr-3 hidden md:inline">WEBSITE</span>
              <p className="inline-flex items-center gap-2 border-b-2 border-black font-medium">
                thebourbonbros.com <ArrowUpRight size={24} className="mb-1" />
              </p>
            </div>
          </div>
        </div>
        {/* Row 3 - Brand Name */}
        <div className="flex px-[51px] pt-[17px]">
          {/* left */}
          <div className="flex-1">
            <h1 className="font-adelle-mono text-[12.42rem] font-bold leading-[0.9] tracking-tighter">
              BOURBON
              <br />
              BROS
            </h1>
          </div>
          {/* right */}
          <div className="flex flex-1 justify-end">
            <div className="flex items-end gap-[27.07px]">
              <Image
                src="/images/img_arrow-down.svg"
                alt=""
                width={32.93}
                height={82.05}
              />
              <p className="font-articulat text-[6.25rem] leading-[0.7] tracking-tight">
                PEEK HERE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBrand;
