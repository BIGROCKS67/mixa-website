import type { Metadata } from "next";
import { BookingWidget } from "@/components/book/BookingWidget";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { photos } from "@/data/photos";
import { siteConfig } from "@/data/site";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Book a Table",
  description:
    "Book a table at MIXA restaurant & wine bar, 56 St George's Street, Winchester SO23 8AH. Reservations recommended — world flavours, small plates & wine.",
  path: "/book",
});

const BOOK_HERO = photos.interiorDiningKitchen;

export default function BookPage() {
  return (
    <>
      <PageHero image={BOOK_HERO} alt="Dining at MIXA restaurant Winchester">
        <SectionHeading
          label="Reservations"
          title="Book your table"
          description="MIXA on St George's Street — world flavours, small plates, wine bar and sharing dishes in Winchester city centre."
          variant="onDark"
        />
      </PageHero>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl">
          <Reveal className="mb-8 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center">
            <Button href={siteConfig.bookingUrl} variant="primary" external>
              {siteConfig.bookingCta}
            </Button>
            <Button href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} variant="outline">
              Call {siteConfig.phone}
            </Button>
          </Reveal>

          <Reveal delay={80}>
            <BookingWidget />
          </Reveal>

          <Reveal delay={120} className="mt-8 text-center">
            <p className="font-body text-sm leading-relaxed text-pepper/60">
              {siteConfig.hours.note} Open {siteConfig.hours.summary}. Sunday closed.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
