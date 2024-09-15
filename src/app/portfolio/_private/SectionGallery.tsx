import PlaceholderText from "@/components/dev/PlaceholderText";

const SectionGallery = () => {
  return (
    <section className="bg-black">
      <div className="grid grid-cols-3 gap-[2px]">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="flex aspect-square w-[1fr] items-center justify-center bg-white"
          >
            <PlaceholderText text="Brand" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionGallery;
