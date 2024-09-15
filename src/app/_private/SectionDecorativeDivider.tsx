import Image from "next/image";

// TODO: Create decorative divider
const SectionDecorativeDivider = () => {
  return (
    <div className="relative flex min-h-[373px]">
      <Image
        className=""
        src="/images/img_decorative-divider-section.svg"
        alt=""
        fill
      />
    </div>
  );
};

export default SectionDecorativeDivider;
