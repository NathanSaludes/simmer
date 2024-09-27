const SectionCredits = () => {
  return (
    <section className="bg-simmer">
      <div className="flex items-center justify-center p-[98px]">
        <div className="">
          {/* BRAND NAME */}
          <h2 className="font-adelle-mono text-[7.38rem] font-bold leading-none tracking-tight">
            BOURBON BROS
          </h2>
          {/* CREDITS */}
          <div className="divide-y-2 divide-black border-y-2 border-black">
            <Credit title="CREATIVE DIRECTOR" name="R.K. De la Rosa" />
            <Credit title="DESIGNER" name="Jena Hernandez" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Credit = ({ title, name }: { title: string; name: string }) => {
  return (
    <div className="flex justify-between py-2 text-[1.5rem]">
      <p className="font-adelle-mono font-bold">{title}</p>
      <p className="font-articulat font-medium">{name}</p>
    </div>
  );
};

export default SectionCredits;
