import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { BLUR_DARK, IMAGE_QUALITY, imageSrc } from "@/lib/images";
import { photos } from "@/data/photos";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-pepper">
      <Image
        src={imageSrc(photos.heroSharingSpread, 1920)}
        alt="Sharing plates and wine at MIXA, Winchester"
        fill
        priority
        fetchPriority="high"
        placeholder="blur"
        blurDataURL={BLUR_DARK}
        quality={IMAGE_QUALITY.hero}
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-pepper via-pepper/70 to-pepper/20" />
      <div className="hero-vignette absolute inset-0" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28">
        <p className="hero-fade-up font-title mb-4 text-[11px] text-honey">{siteConfig.brandLine}</p>
        <h1 className="hero-fade-up hero-fade-up-delay-1 font-heading max-w-3xl text-4xl leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {siteConfig.heroHeadline}
        </h1>
        <p className="hero-fade-up hero-fade-up-delay-2 font-body mt-6 max-w-xl text-lg leading-relaxed text-sesame/90">
          {siteConfig.heroSubheading}
        </p>
        <div className="hero-fade-up hero-fade-up-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/book" variant="secondary">
            {siteConfig.bookingCta}
          </Button>
          <Button
            href="/menu"
            variant="outline"
            className="border-white/30 text-white hover:border-honey hover:bg-white/5 hover:text-honey"
          >
            View Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
