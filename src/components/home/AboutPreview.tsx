import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { BLUR_DARK, BLUR_WARM, IMAGE_QUALITY, imageSrc } from "@/lib/images";
import { photos } from "@/data/photos";

const ABOUT_IMAGE = photos.interiorDiningKitchen;
const BOOKING_IMAGE = photos.sharingPlatesWine;

export function AboutPreview() {
  return (
    <section className="section-padding bg-mint/20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm lg:aspect-[3/4]">
            <Image
              src={imageSrc(ABOUT_IMAGE, 900)}
              alt="Dining room and open kitchen at MIXA Winchester"
              fill
              placeholder="blur"
              blurDataURL={BLUR_WARM}
              quality={IMAGE_QUALITY.card}
              className="image-zoom object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-pepper/10" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading
            label="About MIXA"
            title="Built around bringing people together"
            description="MIXA is built around bringing people together through food, wine and conversation. Inspired by Mediterranean flavours, every dish is made to be shared, enjoyed and remembered."
          />
          <div className="mt-8 space-y-6 text-base leading-relaxed text-pepper/75">
            <p className="font-body">
              Great food deserves great company. Whether it&apos;s lunch with friends, date night or
              a bottle of wine after work, MIXA is designed to be enjoyed together.
            </p>
            <p className="font-body">
              We don&apos;t follow tradition for tradition&apos;s sake. We respect it, learn from
              it and then create something new — one table, many flavours.
            </p>
            <Link href="/about" className="link-elegant font-heading inline-block text-sm text-oregano">
              Read our story
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function BookingBanner() {
  return (
    <section className="relative min-h-[420px] overflow-hidden bg-pepper">
      <Image
        src={imageSrc(BOOKING_IMAGE, 1600)}
        alt="Sharing plates and wine at MIXA"
        fill
        placeholder="blur"
        blurDataURL={BLUR_DARK}
        quality={IMAGE_QUALITY.hero}
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-pepper/75" />
      <div className="hero-vignette absolute inset-0" />

      <div className="relative section-padding text-center">
        <Reveal className="mx-auto max-w-2xl">
          <p className="font-title mb-4 text-[11px] text-honey">Join us</p>
          <h2 className="font-heading text-3xl text-white sm:text-4xl lg:text-5xl">
            Ready to join us?
          </h2>
          <p className="font-body mx-auto mt-4 max-w-lg text-base leading-relaxed text-sesame/90">
            Book your table and discover world flavours at one table.
          </p>
          <div className="mt-8">
            <Button href="/book" variant="secondary">
              {siteConfig.bookingCta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
