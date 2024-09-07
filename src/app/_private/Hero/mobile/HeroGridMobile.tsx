import Image from "next/image";

export const HeroGridMobile = () => {
  return (
    <>
      {/* Row 1 */}
      <div className="col-[span_6] flex items-center justify-center border-b-2 border-black xl:hidden"></div>
      <div className="col-[span_12] flex items-center justify-center border-b-2 border-l-2 border-black xl:hidden"></div>
      <div className="col-[span_6] flex items-center justify-center border-b-2 border-l-2 border-black p-2 xl:hidden">
        <div className="relative h-full w-full">
          <Image
            src="/images/img_burger.svg"
            className="object-contain"
            fill
            alt=""
          />
        </div>
      </div>
      {/* Row 2 */}
      <div className="col-[span_11] flex items-center justify-center border-b-2 border-black p-2 xl:hidden">
        <div className="relative h-full w-full">
          <Image
            src="/images/img_sandwich.svg"
            className="object-contain"
            fill
            alt=""
          />
        </div>
      </div>
      <div className="col-[span_13] flex items-center justify-center border-b-2 border-l-2 border-black xl:hidden"></div>
      {/* Row 3 */}
      <div className="col-[span_13] flex items-center justify-center border-b-2 border-black xl:hidden"></div>
      <div className="col-[span_11] flex items-center justify-center border-b-2 border-l-2 border-black p-2 xl:hidden">
        <div className="relative h-full w-full">
          <Image
            src="/images/img_peppermint.svg"
            className="object-contain"
            fill
            alt=""
          />
        </div>
      </div>
      {/* Row 4 */}
      <div className="col-[span_6] flex items-center justify-center border-b-2 border-black xl:hidden"></div>
      <div className="col-[span_12] flex items-center justify-center border-b-2 border-l-2 border-black xl:hidden"></div>
      <div className="col-[span_6] flex items-center justify-center border-b-2 border-l-2 border-black xl:hidden"></div>
      {/* Row 5 */}
      <div className="col-span-full flex items-center justify-center border-b-2 border-black xl:hidden"></div>
      {/* Row 6 */}
      <div className="col-[span_8] flex items-center justify-center border-b-2 border-black p-2 xl:hidden">
        <div className="relative h-full w-full">
          <Image
            src="/images/img_egg.svg"
            className="object-contain"
            fill
            alt=""
          />
        </div>
      </div>
      <div className="col-[span_16] flex items-center justify-center border-b-2 border-l-2 border-black xl:hidden"></div>
    </>
  );
};
