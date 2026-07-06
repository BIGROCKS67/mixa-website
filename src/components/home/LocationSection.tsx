import { LazyEmbed } from "@/components/ui/LazyEmbed";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { MapPin } from "lucide-react";
import Link from "next/link";

export function LocationSection() {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading label="Find us" title="Visit MIXA in Winchester" />
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <Reveal delay={100}>
            <div className="card-lift overflow-hidden rounded-sm bg-white p-6 shadow-sm ring-1 ring-pepper/5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-oregano" />
                <div>
                  <p className="font-heading text-pepper">{siteConfig.address.full}</p>
                  <p className="font-body mt-2 text-sm leading-relaxed text-pepper/65">
                    {siteConfig.parking}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="link-elegant font-heading text-sm text-oregano"
                    >
                      Contact & hours
                    </Link>
                    <a
                      href={siteConfig.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-elegant font-heading text-sm text-oregano"
                    >
                      Get directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="overflow-hidden rounded-sm ring-1 ring-pepper/5">
              <LazyEmbed
                title="MIXA location map"
                src={siteConfig.googleMapsEmbed}
                height="min-h-[288px] lg:min-h-[360px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
