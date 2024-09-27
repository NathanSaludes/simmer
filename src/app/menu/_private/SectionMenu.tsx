import { Suspense } from "react";
import SimmerMenu from "./SimmerMenu";

/* TODO: Create a loader for simmer menu component */

const SectionMenu = () => {
  return (
    <section className="bg-simmer text-black">
      <div>
        <Suspense fallback="Loading...">
          <SimmerMenu />
        </Suspense>
      </div>
    </section>
  );
};

export default SectionMenu;
