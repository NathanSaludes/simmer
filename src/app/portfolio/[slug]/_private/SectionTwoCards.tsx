const SectionTwoCards = () => {
  return (
    <section className="bg-simmer">
      <div className="grid grid-cols-2 gap-x-[153px] px-[115px] pb-[170.84px] pt-[134px]">
        <Card />
        <Card />
      </div>
    </section>
  );
};

const Card = () => {
  return (
    <div className="w-full space-y-8">
      {/* poster */}
      <div className="relative aspect-square overflow-hidden rounded-xl border-2 border-black bg-gray-100"></div>
      {/* caption */}
      <div className="space-y-4">
        <p className="font-adelle-mono font-bold tracking-tight">
          [SKETCHING THE BROS]
        </p>
        <p className="font-articulat text-[1.5rem] font-medium leading-8">
          We make sure to create all assets from scratch. Simmer enjoys creating
          and producing key visuals that would match all the brands materials.
        </p>
      </div>
    </div>
  );
};

export default SectionTwoCards;
