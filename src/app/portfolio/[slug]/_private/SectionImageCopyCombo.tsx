const SectionImageCopyCombo = () => {
  return (
    <section className="bg-simmer">
      <div className="grid grid-cols-2 divide-x-2 divide-black border-y-2 border-black">
        {/* Image */}
        <div className="relative aspect-square bg-gray-200"></div>
        {/* Copy */}
        <article className="flex items-center justify-center">
          <div className="basis-[544px] space-y-6">
            {/* BUILDING THE BRAND */}
            <div className="">
              <p className="flex gap-1 font-adelle-mono leading-none tracking-tight before:inline-block before:content-[url(/images/img_opening-square-bracket.svg)] after:inline-block after:content-[url(/images/img_closing-square-bracket.svg)]">
                BUILDING
                <br />
                THE BRAND
              </p>
            </div>
            {/* TITLE */}
            <div className="max-w-[544px]">
              <h2 className="font-articulat text-[3.5rem] font-bold leading-none tracking-tight">
                Building the Brand For The Dapper Bro
              </h2>
            </div>
            {/* DESCRIPTION */}
            <div className="flex-1">
              <p className="text-[1.5rem] font-medium leading-8">
                The Bourbon Bros combines premium quality with a fun and
                approachable personality, making it an excellent choice for
                those looking for a high-quality bourbon that doesn&apos;t take
                itself too seriously. The Bourbon Bros combines premium quality
                with a fun and approachable personality, making it an excellent
                choice for those looking for a high-quality bourbon that
                doesn&apos;t take itself too seriously.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default SectionImageCopyCombo;
