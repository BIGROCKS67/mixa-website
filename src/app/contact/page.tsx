import type { Metadata } from "next";
import { Mail, MapPin, Phone, Instagram, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LazyEmbed } from "@/components/ui/LazyEmbed";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { photos } from "@/data/photos";
import { siteConfig } from "@/data/site";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact, Hours & Directions",
  description:
    "Contact MIXA Winchester: 56 St George's Street, SO23 8AH. Opening hours Mon–Sat 12–10pm. Phone 01962 582592. Map, parking & TripAdvisor.",
  path: "/contact",
});

const CONTACT_HERO = photos.exteriorStorefront;

export default function ContactPage() {
  return (
    <>
      <PageHero image={CONTACT_HERO} alt="MIXA storefront on St George's Street, Winchester">
        <SectionHeading
          label="Contact"
          title="Find us in Winchester"
          description="56 St George's St — reservations recommended. Outdoor seating and vegan options available."
          variant="onDark"
        />
      </PageHero>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="space-y-8">
                <div className="rounded-sm bg-mint/20 p-6 ring-1 ring-pepper/5">
                  <h2 className="font-title mb-4 text-[11px] text-oregano">Opening hours</h2>
                  <ul className="mt-4 space-y-2 text-sm text-pepper/75">
                    <li className="font-body">Monday: {siteConfig.hours.monday}</li>
                    <li className="font-body">Tuesday: {siteConfig.hours.tuesday}</li>
                    <li className="font-body">Wednesday: {siteConfig.hours.wednesday}</li>
                    <li className="font-body">Thursday: {siteConfig.hours.thursday}</li>
                    <li className="font-body">Friday: {siteConfig.hours.friday}</li>
                    <li className="font-body">Saturday: {siteConfig.hours.saturday}</li>
                    <li className="font-body">Sunday: {siteConfig.hours.sunday}</li>
                  </ul>
                  <p className="font-body mt-4 text-xs text-pepper/55">{siteConfig.hours.note}</p>
                  <p className="font-body mt-2 text-xs text-pepper/55">{siteConfig.priceRange}</p>
                </div>

                <div className="space-y-4">
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="font-body flex items-center gap-3 text-pepper transition-colors hover:text-oregano"
                  >
                    <Phone className="h-5 w-5 text-honey" />
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-body flex items-center gap-3 text-pepper transition-colors hover:text-oregano"
                  >
                    <Mail className="h-5 w-5 text-honey" />
                    {siteConfig.email}
                  </a>
                  <div className="flex items-start gap-3 text-pepper/75">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-honey" />
                    <div>
                      <p className="font-heading text-pepper">{siteConfig.address.full}</p>
                      <p className="font-body mt-2 text-sm leading-relaxed">{siteConfig.parking}</p>
                    </div>
                  </div>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-title flex items-center gap-3 text-[11px] text-pepper transition-colors hover:text-oregano"
                  >
                    <Instagram className="h-5 w-5 text-honey" />
                    {siteConfig.social.handle}
                  </a>
                  <a
                    href={siteConfig.social.tripadvisor}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-title flex items-center gap-3 text-[11px] text-pepper transition-colors hover:text-oregano"
                  >
                    <Star className="h-5 w-5 text-honey" />
                    TripAdvisor Reviews
                  </a>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {siteConfig.amenities.map((item) => (
                    <li
                      key={item}
                      className="font-body rounded-sm bg-mint/30 px-3 py-1 text-xs text-pepper/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button href="/book" variant="primary">
                    {siteConfig.bookingCta}
                  </Button>
                  <Button href={siteConfig.googleMapsDirectionsUrl} variant="outline" external>
                    Get Directions
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="overflow-hidden rounded-sm ring-1 ring-pepper/5">
                <LazyEmbed
                  title="MIXA map"
                  src={siteConfig.googleMapsEmbed}
                  height="min-h-[420px]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
