import PlaceholderText from "@/components/dev/PlaceholderText";
import Header from "@/components/Header";
import VerticalNav from "@/components/VerticalNav";
import Image from "next/image";

export default function PortfolioDetails() {
  return (
    <div className="bg-black">
      <Header dark noLogoBorder className="border-b-0" />
      <main>
        <div className="flex">
          <div className="mt-40">
            <VerticalNav inverted />
          </div>
          <section className="debug-outline flex-1">
            <div className="rounded-tl-[156px] bg-simmer px-[64px] py-[51px]">
              <div className="container grid grid-cols-2 gap-[51px]">
                {/* col 1 */}
                <div className="relative h-full overflow-hidden rounded-[102px] border-2 border-black">
                  <Image
                    src="/images/sample/bourbon.png"
                    alt="bourbon"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* col 2 */}
                <div className="flex flex-col gap-[28px]">
                  <div className="relative h-[394px] overflow-hidden rounded-[81px] border-2 border-black">
                    <Image
                      src="/images/sample/bourbon-2.png"
                      alt="bourbon"
                      className="fill object-cover"
                      fill
                    />
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
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
