import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VerticalNav from "@/components/VerticalNav";
import SectionBrand from "./_private/SectionBrand";
import SectionMediaFeatured from "./_private/SectionMediaFeatured";
import SectionThreeColumnGallery from "./_private/SectionThreeColumnGallery";
import SectionTwoCards from "./_private/SectionTwoCards";
import SectionSlideShow from "./_private/SectionSlideShow";
import SectionQuote from "./_private/SectionQuote";
import SectionImageCopyCombo from "./_private/SectionImageCopyCombo";
import SectionCredits from "./_private/SectionCredits";
import SectionEndGallery from "./_private/SectionEndGallery";

export default function PortfolioDetails() {
  return (
    <div className="bg-black">
      <Header dark noLogoBorder className="border-b-0" />
      <main>
        <div className="flex">
          <VerticalNav inverted className="mt-40" />
          <div className="flex-1">
            <SectionBrand />
            <SectionMediaFeatured />
            <SectionThreeColumnGallery />
            <SectionTwoCards />
            <SectionSlideShow />
            <SectionQuote />
            <SectionImageCopyCombo />
            <SectionCredits />
            <SectionEndGallery />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
