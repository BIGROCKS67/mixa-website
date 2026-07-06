import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";
import { BLUR_DARK, IMAGE_QUALITY, imageSrc } from "@/lib/images";
import { photos } from "@/data/photos";

/** Pulpo-style menus band with full-bleed image */
export function MenuShowcase() {
  return (
    <>
      <section className="bg-pepper py-3" aria-hidden />

      <section className="relative min-h-[480px] overflow-hidden">
        <Image
          src={imageSrc(photos.heroSharingSpread, 1800)}
          alt="Sharing plates at MIXA"
          fill
          placeholder="blur"
          blurDataURL={BLUR_DARK}
          quality={IMAGE_QUALITY.hero}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-pepper/55" />

        <div className="relative flex min-h-[480px] items-center justify-center section-padding">
          <Reveal className="text-center">
            <h2 className="font-heading text-4xl text-white sm:text-5xl">Menus</h2>
            <p className="font-title mt-4 text-[11px] text-honey">— MIXA —</p>
            <p className="font-body mx-auto mt-6 max-w-md text-base leading-relaxed text-sesame/90">
              Small plates, wine, cocktails and desserts — everything designed to be shared.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/menu" variant="secondary">
                View Menu
              </Button>
              <Button
                href="/book"
                variant="outline"
                className="border-white/40 text-white hover:border-honey hover:text-honey"
              >
                {siteConfig.bookingCta}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export function BookingBanner() {
  return <MenuShowcase />;
}
