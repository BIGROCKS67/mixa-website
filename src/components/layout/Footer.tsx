import Link from "next/link";
import { Mail, MapPin, Phone, Instagram, Star } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-pepper pb-[calc(3.25rem+env(safe-area-inset-bottom,0px))] text-white lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="secondary" onDark className="mb-6" />
            <p className="font-body text-sm leading-relaxed text-sesame/80">
              {siteConfig.logoTagline}
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-title inline-flex items-center gap-2 text-[11px] text-sesame transition-colors hover:text-honey"
              >
                <Instagram className="h-4 w-4" />
                {siteConfig.social.handle}
              </a>
              <a
                href={siteConfig.social.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="font-title inline-flex items-center gap-2 text-[11px] text-sesame transition-colors hover:text-honey"
              >
                <Star className="h-4 w-4" />
                TripAdvisor Reviews
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-title mb-4 text-[11px] text-honey">Explore</h3>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-body text-sm text-sesame/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-title mb-4 text-[11px] text-honey">Opening Hours</h3>
            <ul className="space-y-2 text-sm text-sesame/80">
              <li className="font-body">Mon: {siteConfig.hours.monday}</li>
              <li className="font-body">Tue–Sat: {siteConfig.hours.tuesday}</li>
              <li className="font-body">Sun: {siteConfig.hours.sunday}</li>
            </ul>
            <p className="font-body mt-4 text-xs text-sesame/60">{siteConfig.hours.note}</p>
          </div>

          <div>
            <h3 className="font-title mb-4 text-[11px] text-honey">Contact</h3>
            <ul className="space-y-3 text-sm text-sesame/80">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-honey" />
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="font-body hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-honey" />
                <a href={`mailto:${siteConfig.email}`} className="font-body hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-honey" />
                <span className="font-body">{siteConfig.address.full}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-sm text-sesame/60 sm:flex-row sm:text-left">
          <p className="font-body">&copy; {year} {siteConfig.shortName}. All rights reserved.</p>
          <Link href="/book" className="font-title text-[11px] text-honey hover:text-honey/80">
            {siteConfig.bookingCta}
          </Link>
        </div>
      </div>
    </footer>
  );
}
