import HeroSection from "@/app/_private/Hero/HeroSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VerticalNav from "@/components/VerticalNav";
import SectionDecorativeDivider from "./_private/SectionDecorativeDivider";
import SectionCards from "./_private/SectionCards";
import SectionCoreServices from "./_private/SectionCoreServices";
import SectionInteractiveEggs from "./_private/SectionInteractiveEggsSection";
import SectionPills from "./_private/SectionPillsSection";
import SectionSecretIngredient from "./_private/SectionSecretIngredient";
import SectionServicesTabs from "./_private/SectionServicesTabs";

export default function Home() {
  return (
    <div className="min-h-dvh bg-simmer outline outline-2 outline-black">
      <Header />
      <main>
        <HeroSection />
        <SectionDecorativeDivider />
        <div className="grid bg-black pt-6 xl:grid-cols-[80px_1fr] xl:pt-20">
          <VerticalNav />
          <div>
            <SectionCards />
            <SectionSecretIngredient />
            <SectionCoreServices />
            <SectionServicesTabs />
            <SectionPills />
            <SectionInteractiveEggs />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
