import Image from "next/image";

const SAMPLE_FEATURED_IMAGE = "/images/sample/bourbon_16_9.png";

const SectionMediaFeatured = () => {
  return (
    <section className="bg-simmer">
      <div className="relative flex aspect-video bg-gray-100">
        {/* <Image
          alt=""
          src={SAMPLE_FEATURED_IMAGE}
          fill
          className="object-cover"
        /> */}
      </div>
      <article className="flex gap-6 pb-[82px] pl-[130px] pr-[194px] pt-[122px]">
        {/* BUILDING THE BRAND */}
        <div className="">
          <p className="flex gap-1 font-adelle-mono leading-none tracking-tight before:inline-block before:content-[url(/images/img_opening-square-bracket.svg)] after:inline-block after:content-[url(/images/img_closing-square-bracket.svg)]">
            BUILDING
            <br />
            THE BRAND
          </p>
        </div>
        {/* TITLE */}
        <div className="max-w-[544px] flex-1">
          <h2 className="text-wrap font-articulat text-[3.5rem] font-bold leading-none tracking-tight">
            Building the Brand For The Dapper Bro
          </h2>
        </div>
        {/* DESCRIPTION */}
        <div className="flex-1">
          <p className="text-[1.5rem] font-medium leading-8">
            The Bourbon Bros combines premium quality with a fun and
            approachable personality, making it an excellent choice for those
            looking for a high-quality bourbon that doesn&apos;t take itself too
            seriously. The Bourbon Bros combines premium quality with a fun and
            approachable personality, making it an excellent choice for those
            looking for a high-quality bourbon that doesn&apos;t take itself too
            seriously.
          </p>
        </div>
      </article>
    </section>
  );
};

export default SectionMediaFeatured;
