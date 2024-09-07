import HeroContent from "./HeroContent";
import HeroRightLinks from "./HeroRightLinks";

/*
[*<xs, xs, sm]:
- hide <HeroAside />
- hide <HeroRightLinks />

md:
- grid:mobile <HeroContent/>

xl:
- larger header
- grid:desktop <HeroContent/>
- show <HeroAside/>
- show <HeroRightLinks>
*/

const HeroSection = () => {
  return (
    <section className="flex xl:pl-[277px]">
      <div className="flex flex-1">
        <div className="grid flex-1 grid-cols-[repeat(24,1fr)] grid-rows-[repeat(6,80px)] xl:grid-cols-[repeat(100,1fr)] xl:grid-rows-[repeat(4,202.1px)]">
          <HeroContent />
        </div>
        <HeroRightLinks />
      </div>
    </section>
  );
};

export default HeroSection;
