import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryImages } from "@/data/gallery";
import { BLUR_WARM, IMAGE_QUALITY, imageSrc } from "@/lib/images";

export function GalleryPreview() {
  const preview = galleryImages.slice(0, 12);

  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading label="Gallery" title="Photography that speaks for itself" />
            <Link href="/gallery" className="link-elegant font-heading shrink-0 text-sm text-oregano">
              Explore gallery
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {preview.map((image, index) => (
            <Reveal key={image.id} delay={index * 40}>
              <Link
                href="/gallery"
                className="group relative block overflow-hidden rounded-sm ring-1 ring-pepper/5"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <div className="image-zoom-wrap absolute inset-0">
                    <Image
                      src={imageSrc(image.src, 720)}
                      alt={image.alt}
                      fill
                      placeholder="blur"
                      blurDataURL={BLUR_WARM}
                      quality={IMAGE_QUALITY.gallery}
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
