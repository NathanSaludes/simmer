const SectionEndGallery = () => {
  return (
    <section className="bg-simmer">
      <div className="grid grid-cols-3 divide-x-2 divide-black border-t-2 border-black">
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
      </div>
    </section>
  );
};

const GalleryItem = () => {
  return (
    <div className="relative aspect-[3/4] bg-gray-200">
      {/* <Image class="object-cover" src="" alt=""> */}
    </div>
  );
};

export default SectionEndGallery;
