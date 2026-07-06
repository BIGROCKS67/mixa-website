import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { photos } from "@/data/photos";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Gallery — Food, Wine & Restaurant",
  description:
    "Photos from MIXA restaurant Winchester — small plates, wine bar, open kitchen and dining on St George's Street.",
  path: "/gallery",
});

const GALLERY_HERO = photos.wineProseccoTable;

export default function GalleryPage() {
  return (
    <>
      <PageHero image={GALLERY_HERO} alt="Wine and small plates at MIXA Winchester">
        <SectionHeading
          label="Gallery"
          title="Food, wine and atmosphere"
          description="A glimpse into the MIXA experience — sharing, warmth and great flavour."
          variant="onDark"
        />
      </PageHero>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <GalleryGrid />
          </Reveal>
        </div>
      </section>
    </>
  );
}
