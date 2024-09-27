import Aside from "@/components/Aside";
import Header from "@/components/Header";
import SectionMenu from "./_private/SectionMenu";
import VerticalNav from "@/components/VerticalNav";
import Footer from "@/components/Footer";

export default function Menu() {
  return (
    <div className="bg-black text-simmer">
      <Header dark />
      <main>
        <section className="container">
          <Aside variant="dark" />
          {/* <HeroSectionContent /> */}
        </section>
        <div className="flex">
          <div>
            <VerticalNav />
          </div>
          <div className="flex-1">
            <SectionMenu />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
