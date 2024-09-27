"use client";

import { cn } from "@/lib/utils";
import styles from "./SimmerMenu.module.css";

const SimmerMenu = () => {
  return (
    <div className="min-h-[1000px]">
      {/* Tab Triggers */}
      <div className="debug-outline grid min-h-[288px] grid-cols-3 divide-x-2 divide-black border-b-2 border-black">
        <div className="debug-outline flex flex-col gap-2">
          {/* Tab Label */}
          <div className="debug-outline flex-1">
            <h2>STRATEGY</h2>
          </div>
          <div className="debug-outline flex">
            {/* Tab Sub Label */}
            <div
              className={cn(
                "inline-flex min-h-[75.88px] basis-[339.71px] items-center justify-center rounded-tl-[25px] bg-black pl-[40px] pr-[80px]",
                styles.tabSubLabel
              )}
            >
              <p className="line-clamp-1 font-adelle-mono text-[2rem] text-simmer">
                APPETIZERS
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Tab Content */}
    </div>
  );
};

export default SimmerMenu;
