import PlaceholderText from "@/components/dev/PlaceholderText";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  reversed?: boolean;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
}

const Featured: React.FC<Props> = (props) => {
  return (
    <div
      className={cn("flex h-full flex-col gap-[2px] bg-black", {
        "flex-col-reverse": props.reversed
      })}
    >
      <div className="relative flex flex-1 items-center justify-center bg-white">
        <Image
          className="object-cover"
          src={props.imageUrl}
          alt={props.imageAlt}
          fill
        />
      </div>
      <div className="space-y-5 bg-simmer px-20 py-10">
        <h3 className="font-articulat text-[4rem] font-medium leading-none tracking-tight">
          {props.title}
        </h3>
        <p className="w-[336px] font-articulat text-[2rem] font-bold leading-none">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Featured;
