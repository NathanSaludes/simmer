import Aside from "@/components/Aside";
import PlaceholderText from "@/components/dev/PlaceholderText";
import Header from "@/components/Header";
import VerticalNav from "@/components/VerticalNav";
import SectionFeatured from "./_private/SectionFeatured";
import SectionGallery from "./_private/SectionGallery";
import Footer from "@/components/Footer";

export default function Portfolio() {
  return (
    <div className="bg-simmer outline outline-2 outline-black">
      <Header />
      <main>
        <div className="container">
          <div className="flex">
            <Aside />
            {/* TODO: Intro Section */}
            <PlaceholderText text="Intro Section" />
          </div>
        </div>
        <div className="flex border-t-2 border-black">
          <VerticalNav className="border-t-0" />
          <div className="container divide-y-2 divide-black">
            <SectionFeatured />
            <SectionGallery />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
