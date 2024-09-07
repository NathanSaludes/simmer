import Image from "next/image";

export const HeroGridDesktop = () => {
  return (
    <>
      {/* Desktop - Row 1 */}
      <div className="col-span-full hidden items-center border-b-2 border-black px-10 xl:flex">
        <div className="group mr-[2rem] grid aspect-[1.1] h-[160px] gap-3">
          <div className="flex flex-1 justify-between">
            <h1 className="font-articulat text-[3rem] font-bold leading-none group-hover:origin-top-left group-hover:scale-90 group-hover:text-[2.6rem]">
              WE
              <br />
              ARE
            </h1>
            <div className="relative h-[59.1px] w-[59.1px] self-end group-hover:self-start">
              <Image
                src="/images/img_star.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="group-hover:block xl:hidden">
            <span className="font-afton-james text-[4.1rem] leading-none">
              100%
            </span>
          </div>
        </div>
        <div
          className="mr-[0.5rem] h-[160px] max-w-max p-[1.5rem_2px_0_2px]"
          style={{
            background: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='4' stroke-dasharray='3%2c10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`
          }}
        >
          <h1 className="bg-simmer pb-2 pr-5 font-adelle-mono-flex text-[12.3rem] font-normal leading-[0.66] tracking-[-0.8rem]">
            MORE
          </h1>
        </div>
        <div>
          <div className="relative aspect-square h-[160px]">
            <div className="absolute block aspect-square w-[287px] -translate-y-[108px]">
              <Image
                src="/images/img_ramen.svg"
                className="object-contain"
                alt=""
                fill
              />
            </div>
          </div>
        </div>
        <div className="h-[160px] max-w-max p-[2.2rem_2px_0_1.5rem]">
          {/* text-[13.3rem] */}
          <h1 className="font-articulat text-[10vw] font-thin italic leading-[0.66] tracking-tighter">
            THAN
          </h1>
        </div>
      </div>
      <div className="order-0 col-[span_22] hidden items-center justify-center border-b-2 border-black xl:flex">
        <div className="relative flex aspect-auto h-[160px] w-[259px] items-center justify-center">
          <Image
            src="/images/img_sandwich.svg"
            className="object-contain"
            fill
            alt=""
          />
        </div>
      </div>
      <div className="col-[span_37] hidden items-center justify-center border-b-2 border-l-2 border-black xl:flex">
        <div className="h-[160px]">
          <h1 className="font-articulat text-[13.3rem] font-normal italic leading-[0.9] tracking-tighter">
            JUST
          </h1>
        </div>
      </div>
      <div className="col-[span_25] hidden items-center justify-center border-b-2 border-l-2 border-black xl:flex">
        <div className="relative h-[163px] w-[273.35px]">
          <Image
            src="/images/img_peppermint.svg"
            className="object-contain"
            fill
            alt="Peppermint"
          />
        </div>
      </div>
      <div className="col-[span_16] hidden items-center justify-center border-b-2 border-l-2 border-black xl:flex">
        {/* <p className="rotate-45 font-articulat text-[25px] font-black leading-[0.9]">
          MADE-
          <br />
          FOR-ALL
          <br />
          KINDS-OF
          <br />
          BRANDS
        </p> */}
        <p className="font-articulat text-[25px] font-black leading-[1]">
          THINK
          <br />
          OUTSIDE
          <br />
          THE BOWL
        </p>
      </div>
      <div className="relative col-[span_29] hidden items-center justify-center border-b-2 border-black xl:flex">
        <h1 className="relative mr-4 -skew-y-6 font-aciella-script text-[5.9rem] after:absolute after:left-[4.8rem] after:top-[6.3rem] after:block after:h-[0.5rem] after:w-[15.7rem] after:rounded-full after:bg-black after:content-['']">
          Creative
        </h1>
        <div className="absolute -right-[51px] flex aspect-square w-[100px] items-center justify-center rounded-full border-2 border-black bg-simmer">
          <div className="relative aspect-square w-[63px]">
            <Image
              src="/images/img_ampersand.svg"
              className="object-contain"
              alt="And"
              fill
            />
          </div>
        </div>
      </div>
      <div className="col-[span_71] hidden items-center justify-center border-b-2 border-l-2 border-black xl:flex">
        <h1 className="translate-y-5 font-articulat text-[13.3rem] font-bold leading-none tracking-tighter">
          BRANDING
        </h1>
      </div>
      <div className="col-[span_15] hidden items-center justify-center border-b-2 border-black xl:flex">
        <div className="relative aspect-square w-[160px]">
          <Image
            src="/images/img_narutomaki.svg"
            className="object-contain"
            fill
            alt=""
          />
        </div>
      </div>
      <div className="col-[span_59] hidden items-center justify-center border-b-2 border-l-2 border-black xl:flex">
        <div className="flex h-[160px] gap-6">
          <div className="relative flex aspect-square h-[145px]">
            <div className="relative w-[111.59px]">
              <Image
                src="/images/img_leaf.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-0 right-0 h-[70px] w-[66px] self-end">
              <Image
                src="/images/img_brackets-and-asterisk.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="font-articulat text-[13.3rem] font-normal leading-[0.9] tracking-tighter">
            STUDIO
          </h1>
        </div>
      </div>
      <div className="col-[span_13] hidden items-center justify-center border-b-2 border-l-2 border-black xl:flex">
        <div className="relative aspect-square w-[160px]">
          <Image
            src="/images/img_egg.svg"
            className="object-contain"
            fill
            alt=""
          />
        </div>
      </div>
      <button className="col-[span_13] hidden items-center justify-center border-b-2 border-l-2 border-black bg-simmer-yellow xl:flex">
        <div className="relative h-[102px] w-[71px]">
          <Image
            src="/images/img_play.svg"
            className="object-contain"
            fill
            alt="Click Me"
          />
        </div>
      </button>
    </>
  );
};
