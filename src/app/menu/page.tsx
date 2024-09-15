import Aside from "@/components/Aside";
import Header from "@/components/Header";

export default function Menu() {
  return (
    <div className="bg-black text-simmer">
      <Header dark />
      <main>
        <div className="container">
          <Aside variant="dark" />
        </div>
      </main>
    </div>
  );
}
