import type { Metadata } from "next";
import Image from "next/image";
import { aboutContent } from "@/data/about";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { photos } from "@/data/photos";
import { siteConfig } from "@/data/site";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { BLUR_WARM, IMAGE_QUALITY, imageSrc } from "@/lib/images";

export const metadata: Metadata = buildPageMetadata({
  title: "Our Story",
  description:
    "Discover MIXA on St George's Street — world flavours at one table. Small plates, wine bar and a sharing experience in Winchester city centre.",
  path: "/about",
});

const ABOUT_HERO = photos.mushroomFlatbreadKitchen;

export default function AboutPage() {
  return (
    <>
      <PageHero image={ABOUT_HERO} alt="Chef with mushroom flatbread at MIXA Winchester">
        <SectionHeading
          label="Our Story"
          title={aboutContent.headline}
          description={aboutContent.intro}
          variant="onDark"
        />
      </PageHero>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl space-y-10">
          <Reveal>
            <p className="font-heading text-center text-2xl text-oregano sm:text-3xl">
              &ldquo;{aboutContent.belief}&rdquo;
            </p>
          </Reveal>

          <Reveal delay={60}>
            <p className="font-body text-base leading-relaxed text-pepper/75">{aboutContent.mixingIntro}</p>
            <ul className="mt-6 space-y-3">
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
            <p className="font-body mt-6 text-base leading-relaxed text-pepper/75">{aboutContent.mixingOutro}</p>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm ring-1 ring-pepper/5">
                <Image
                  src={imageSrc(photos.heroSharingSpread, 720)}
                  alt="Sharing plates at MIXA"
                  fill
                  placeholder="blur"
                  blurDataURL={BLUR_WARM}
                  quality={IMAGE_QUALITY.card}
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm ring-1 ring-pepper/5">
                <Image
                  src={imageSrc(photos.interiorWindowSeating, 720)}
                  alt="Window seating at MIXA Winchester"
                  fill
                  placeholder="blur"
                  blurDataURL={BLUR_WARM}
                  quality={IMAGE_QUALITY.card}
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <p className="font-body text-base leading-relaxed text-pepper/75">{aboutContent.tradition}</p>
            <p className="font-body mt-6 text-base leading-relaxed text-pepper/75">{aboutContent.community}</p>
          </Reveal>

          <Reveal delay={240}>
            <div className="rounded-sm bg-mint/20 p-8 ring-1 ring-pepper/5">
              <h2 className="font-heading text-2xl text-oregano">{aboutContent.smallPlates.title}</h2>
              <p className="font-body mt-4 text-base leading-relaxed text-pepper/75">
                {aboutContent.smallPlates.body}
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div>
              <h2 className="font-heading text-2xl text-pepper">{aboutContent.philosophy.title}</h2>
              <ul className="mt-6 space-y-3">
                {aboutContent.philosophy.points.map((point) => (
                  <li
                    key={point}
                    className="font-body flex items-start gap-3 text-base leading-relaxed text-pepper/75"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-honey" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <p className="font-heading text-center text-2xl text-oregano">{aboutContent.welcome}</p>
          </Reveal>

          <Reveal delay={420} className="pt-4 text-center">
            <Button href="/book" variant="primary">
              {siteConfig.bookingCta}
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
