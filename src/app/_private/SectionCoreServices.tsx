import { cn } from "@/lib/utils";
import { HTMLAttributes, PropsWithChildren, ReactHTMLElement } from "react";
import styles from "./SectionCoreServices.module.css";

const SectionCoreServices = () => {
  return (
    <section className="mb-[48.65px]">
      {/* TODO: Make row mobile responsive */}
      <div
        className={cn(
          "container hidden px-10 lg:flex lg:items-center lg:justify-between"
        )}
      >
        <span className="inline-block aspect-square h-[48px] rounded-full bg-simmer-yellow"></span>
        <button className="h-[50px] rounded-full bg-simmer px-10 font-adelle-mono text-[1.12rem] text-black">
          CLICK TO KNOW
        </button>
      </div>
      <div className="divide-y-2 divide-simmer">
        <ServiceRow>
          <ServiceRowText>BRANDING</ServiceRowText>
          <ServiceRowNumber>01</ServiceRowNumber>
        </ServiceRow>
        <ServiceRow>
          <ServiceRowText className="font-light italic">
            IDENTITY
          </ServiceRowText>
          <ServiceRowNumber>02</ServiceRowNumber>
        </ServiceRow>
        <ServiceRow>
          <ServiceRowText>EXECUTIONS</ServiceRowText>
          <ServiceRowNumber>03</ServiceRowNumber>
        </ServiceRow>
      </div>
    </section>
  );
};

const ServiceRow: React.FC<
  HTMLAttributes<HTMLDivElement> & PropsWithChildren
> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "px-7 py-8 min-[425px]:px-10",
        styles.ServiceRow_DynamicPadding,
        className
      )}
    >
      <div className="container flex items-stretch gap-4 min-[425px]:gap-8">
        {children}
      </div>
    </div>
  );
};

const ServiceRowText: React.FC<
  HTMLAttributes<HTMLSpanElement> & PropsWithChildren
> = ({ className, children }) => {
  return (
    <span
      className={cn(
        "order-2 flex-1 font-articulat text-[2.3rem] font-bold leading-[0.9] tracking-tight text-simmer min-[375px]:text-[3rem] min-[425px]:text-[3.2rem] sm:text-[5.2rem] xl:order-1",
        styles.dynamicTextSize,
        styles.dynamicHeight,
        className
      )}
    >
      {children}
    </span>
  );
};

const ServiceRowNumber: React.FC<
  HTMLAttributes<HTMLSpanElement> & PropsWithChildren
> = ({ className, children }) => {
  return (
    <span
      className={cn(
        "order-1 font-adelle-mono-flex text-simmer xl:order-2",
        styles.dynamicNumericTextSize,
        className
      )}
    >
      {children}
    </span>
  );
};

export default SectionCoreServices;
