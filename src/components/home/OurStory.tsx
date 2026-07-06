import Image from "next/image";
import Link from "next/link";
import { aboutContent } from "@/data/about";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { photos } from "@/data/photos";
import { siteConfig } from "@/data/site";
import { BLUR_WARM, IMAGE_QUALITY, imageSrc } from "@/lib/images";

const STORY_IMAGES = [
  { src: photos.heroSharingSpread, alt: "Sharing plates and wine at MIXA" },
  { src: photos.kitchenPassPlating, alt: "Chefs plating at the MIXA kitchen pass" },
  { src: photos.interiorDiningKitchen, alt: "MIXA dining room and open kitchen" },
];

export function OurStory() {
  return (
    <section className="section-padding bg-mint/25" id="our-story">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-title text-[11px] text-honey">Our Story</p>
          <h2 className="font-heading mt-4 text-3xl tracking-tight text-pepper sm:text-4xl lg:text-5xl">
            {aboutContent.headline}
          </h2>
        </Reveal>

        <Reveal delay={60} className="mt-10 space-y-6 text-left sm:text-center">
          <p className="font-body text-base leading-relaxed text-pepper/75">{aboutContent.intro}</p>
          <p className="font-heading text-center text-2xl text-oregano sm:text-3xl">
            &ldquo;{aboutContent.belief}&rdquo;
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10 space-y-6 text-left">
          <p className="font-body text-base leading-relaxed text-pepper/75">{aboutContent.mixingIntro}</p>
          <ul className="space-y-3">
            {aboutContent.mixingExamples.map((example) => (
              <li
                key={example}
                className="font-body flex items-start gap-3 text-base leading-relaxed text-pepper/75"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-honey" />
                {example}
              </li>
            ))}
          </ul>
          <p className="font-body text-base leading-relaxed text-pepper/75">{aboutContent.mixingOutro}</p>
          <p className="font-body text-base leading-relaxed text-pepper/75">{aboutContent.tradition}</p>
          <p className="font-body text-base leading-relaxed text-pepper/75">{aboutContent.community}</p>
        </Reveal>

        <Reveal delay={180} className="mt-12">
          <div className="rounded-sm bg-white/70 p-8 text-left ring-1 ring-pepper/5 sm:p-10">
            <h3 className="font-heading text-xl text-oregano sm:text-2xl">{aboutContent.smallPlates.title}</h3>
            <p className="font-body mt-4 text-base leading-relaxed text-pepper/75">
              {aboutContent.smallPlates.body}
            </p>
          </div>
        </Reveal>

        <Reveal delay={240} className="mt-10">
          <p className="font-heading text-2xl text-oregano">{aboutContent.welcome}</p>
        </Reveal>

        <Reveal delay={280} className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/book" variant="primary">
            {siteConfig.bookingCta}
          </Button>
          <Link href="/about" className="link-elegant font-heading text-sm text-oregano">
            Read more about MIXA
          </Link>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {STORY_IMAGES.map((image, index) => (
          <Reveal key={image.src} delay={index * 80}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm ring-1 ring-pepper/5">
              <div className="image-zoom-wrap absolute inset-0">
                <Image
                  src={imageSrc(image.src, 800)}
                  alt={image.alt}
                  fill
                  placeholder="blur"
                  blurDataURL={BLUR_WARM}
                  quality={IMAGE_QUALITY.card}
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
