import Image from "next/image";

const SectionThreeColumnGallery = () => {
  return (
    <div className="grid grid-cols-3 divide-x-2 divide-black border-y-2 border-black">
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
    </div>
  );
};

const GalleryItem = () => {
  return (
    <div className="relative aspect-square bg-gray-200">
      {/* <Image class="object-cover" src="" alt=""> */}
    </div>
  );
};

export default SectionThreeColumnGallery;
