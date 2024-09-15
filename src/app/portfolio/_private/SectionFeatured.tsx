import PlaceholderText from "@/components/dev/PlaceholderText";
import Image from "next/image";
import Featured from "./Featured";

const SectionFeatured = () => {
  return (
    <section className="bg-simmer">
      <div className="grid grid-flow-col grid-cols-2 grid-rows-[repeat(10,minmax(133px,1fr))] gap-[2px] bg-black">
        {/* col span 2 */}
        <div className="col-span-2 bg-simmer">
          <div className="flex justify-between px-20">
            <div className="flex items-center gap-[27px]">
              <Image
                src="/images/img_arrow-down.svg"
                alt=""
                width={32.93}
                height={82.05}
              />
              <h2 className="translate-y-2 font-articulat text-[6.25rem] tracking-tight">
                FEATURED
              </h2>
            </div>
            <Image src="/images/img_play.svg" alt="" width={65} height={92} />
          </div>
        </div>
        {/* featured item 1 */}
        <div className="row-span-8">
          <Featured
            imageAlt="24 Chicken"
            imageUrl="/images/sample/24-chicken.png"
            title="24 Chicken"
            description="Appetizers - what you need before you start anything."
          />
        </div>
        {/* col span 1 */}
        <div className="bg-simmer">
          <div className="flex items-center gap-[27px] px-20">
            <Image
              src="/images/img_arrow-down.svg"
              alt=""
              width={32.93}
              height={82.05}
            />
            <h2 className="translate-y-2 font-articulat text-[6.25rem] tracking-tight">
              FAVORITES
            </h2>
          </div>
        </div>
        {/* featured item 2 */}
        <div className="row-span-9 flex flex-col gap-[2px] bg-black">
          <Featured
            imageAlt="Johnnie Walker Blue Label"
            imageUrl="/images/sample/johnnie-walker.png"
            title="Johnnie Walker"
            description="Appetizers - what you need before you start anything."
            reversed
          />
        </div>
      </div>
    </section>
  );
};

export default SectionFeatured;
