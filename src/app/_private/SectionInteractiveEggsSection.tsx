import PlaceholderText from "@/components/dev/PlaceholderText";

const SectionInteractiveEggs = () => {
  return (
    <section className="bg-simmer">
      <div className="flex min-h-[1092px] flex-col items-center justify-center">
        <div className="relative font-adelle-mono text-[9.16rem]">
          HOW{" "}
          <span className="absolute inline-block h-[125px] w-[270px] translate-x-1 translate-y-12 bg-black"></span>
          <span className="relative text-simmer">EGG</span>
          CITING
        </div>
        <button className="h-[50px] rounded-full border-2 border-black px-10 font-adelle-mono text-[1.1rem]">
          TAP FOR EGGS
        </button>
      </div>
    </section>
  );
};

export default SectionInteractiveEggs;
