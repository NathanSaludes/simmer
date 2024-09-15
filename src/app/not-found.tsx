import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Aside from "../components/Aside";

// TODO: Create not found screen
export default function NotFound() {
  return (
    <div className="container min-h-dvh bg-simmer outline outline-2 outline-black">
      <Header />
      <main className="relative min-h-[1179px]">
        <Aside className="absolute left-0 w-[277px] xl:block" />
      </main>
      <Footer />
    </div>
  );
}
