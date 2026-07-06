import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

/** Pulpo-style opening hours grey panel */
export function OpeningHoursBand() {
  return (
    <section className="section-padding bg-white">
      <Reveal className="mx-auto max-w-3xl">
        <div className="bg-mint/30 px-8 py-12 text-center ring-1 ring-pepper/5 sm:px-12 sm:py-16">
          <h2 className="font-heading text-3xl tracking-tight text-pepper/80 sm:text-4xl">
            Opening Hours
          </h2>
          <ul className="font-body mt-8 space-y-2 text-base text-pepper/70">
            <li>Monday — {siteConfig.hours.monday}</li>
            <li>Tuesday — {siteConfig.hours.tuesday}</li>
            <li>Wednesday — {siteConfig.hours.wednesday}</li>
            <li>Thursday — {siteConfig.hours.thursday}</li>
            <li>Friday — {siteConfig.hours.friday}</li>
            <li>Saturday — {siteConfig.hours.saturday}</li>
            <li>Sunday — {siteConfig.hours.sunday}</li>
          </ul>
          <p className="font-body mt-6 text-xs text-pepper/50">{siteConfig.hours.note}</p>
        </div>
      </Reveal>
    </section>
  );
}
