import { HeroGridDesktop } from "./desktop/HeroGridDesktop";
import { HeroGridMobile } from "./mobile/HeroGridMobile";

const HeroContent = () => {
  return (
    <>
      <HeroGridDesktop />
      <HeroGridMobile />
    </>
  );
};

export default HeroContent;
