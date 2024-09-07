import { cn } from "@/lib/utils";
import Image from "next/image";

import styles from "./SectionSecretIngredient.module.css";

const SectionSecretIngredient = () => {
  return (
    <section className="mb-[40px] px-10 md:px-20">
      <div
        className={cn(
          "relative min-h-[300px] overflow-hidden rounded-[12px] bg-[#d33e27] sm:space-y-[32px] sm:rounded-[30px] lg:rounded-[40px]",
          styles.fluidContainer
        )}
      >
        <p
          className={cn(
            "mb-10 pr-9 font-articulat text-[2.6rem] font-medium leading-none tracking-tighter",
            styles.fluidHeading
          )}
        >
          Guess our secret
          <br />
          ingredient for a surprise.
        </p>
        <div className="relative mb-[24px] sm:mb-0">
          <input
            type="text"
            className={cn(
              "flex h-[62px] w-full rounded-[12px] border-2 border-black bg-simmer pl-[10px] pr-[47px] font-fionas text-[2rem] font-medium leading-none text-black placeholder:text-black/30 min-[424px]:h-[80px] min-[424px]:pl-[20px] min-[424px]:pr-[75px] sm:h-[100px] sm:rounded-[17px] sm:pr-[100px] sm:text-[3.5rem] md:h-auto md:rounded-[30px] md:pr-[120px] lg:rounded-[30px] xl:rounded-[62px]",
              styles.fluidInput
            )}
            defaultValue="Click"
            placeholder="Type here"
          />
          <div
            className={cn(
              "rig absolute bottom-0 right-0 top-0 h-full w-[50px] min-[424px]:aspect-square min-[424px]:w-auto",
              styles.sauceBottles
            )}
          >
            <Image
              src="/images/img_mustard-ketchup.svg"
              className="object-contain object-center py-3"
              fill
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row sm:justify-between">
            <div className="order-2 flex items-center gap-[0.8vw] sm:order-1">
              <p
                className={cn(
                  "font-lora text-[2rem] font-medium leading-none",
                  styles.fluidSubText1Left
                )}
              >
                &#91;our&#93;
              </p>
              <p
                className={cn(
                  "translate-y-1 font-adelle-mono text-[1.12rem] leading-none",
                  styles.fluidSubText2Left
                )}
              >
                SECRET
                <br />
                RECIPE
              </p>
            </div>
            <div className="order-1 sm:order-2">
              <p
                className={cn(
                  "text-center font-articulat text-[1.12rem] font-black leading-none tracking-tight",
                  styles.fluidSubTextRight
                )}
              >
                NO WRONG ANSWERS
                <br />
                <span
                  className={cn(
                    "font-lora text-[1rem] font-medium tracking-tighter",
                    styles.fluidSubTextRight_DONT_THINK
                  )}
                >
                  &#91;don&apos;t think&#93;
                </span>{" "}
                COME ON, JUST TYPE!
              </p>
            </div>
          </div>
        </div>
        <p
          className={cn(
            "absolute right-[16px] top-[16px] font-adelle-mono-flex text-sm sm:-translate-y-7",
            styles.fluidFloatingLabel
          )}
        >
          01
        </p>
      </div>
    </section>
  );
};

export default SectionSecretIngredient;
