import Image from "next/image";
import { photos } from "@/data/photos";
import { BLUR_WARM, IMAGE_QUALITY, imageSrc } from "@/lib/images";

/** Pulpo-style full-width signature dish showcase */
export function SignatureDish() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
          <Image
            src={imageSrc(photos.scotchEgg, 1600)}
            alt="MIXA scotch egg — jammy yolk, watercress and harissa mayo"
            fill
            placeholder="blur"
            blurDataURL={BLUR_WARM}
            quality={IMAGE_QUALITY.hero}
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1152px"
          />
        </div>
      </div>
    </section>
  );
}
