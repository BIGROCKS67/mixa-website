"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { galleryCategories, galleryImages } from "@/data/gallery";
import { BLUR_WARM, IMAGE_QUALITY, imageSrc } from "@/lib/images";

function GalleryTile({ image }: { image: (typeof galleryImages)[number] }) {
  return (
    <div className="group relative overflow-hidden rounded-sm ring-1 ring-pepper/5">
      <div className="relative aspect-[4/5] overflow-hidden">
        <div className="image-zoom-wrap absolute inset-0">
          <Image
            src={imageSrc(image.src, 800)}
            alt={image.alt}
            fill
            placeholder="blur"
            blurDataURL={BLUR_WARM}
            quality={IMAGE_QUALITY.gallery}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="gallery-item-overlay absolute inset-0 flex items-end p-4">
          <p className="font-body text-sm text-white">{image.alt}</p>
        </div>
      </div>
    </div>
  );
}

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<(typeof galleryCategories)[number]["id"]>("all");

  const filtered =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {galleryCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "btn-premium font-title rounded-sm px-4 py-2 text-[11px] touch-manipulation",
              activeCategory === category.id
                ? "bg-oregano text-white shadow-md"
                : "bg-mint/40 text-pepper hover:bg-mint/70"
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((image, index) => (
          <Reveal key={image.id} delay={(index % 6) * 50}>
            <GalleryTile image={image} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
