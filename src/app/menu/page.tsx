import type { Metadata } from "next";
import { MenuTabs } from "@/components/menu/MenuTabs";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { photos } from "@/data/photos";
import { siteConfig } from "@/data/site";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Menu — Small Plates, Wine & Cocktails",
  description:
    "MIXA menu: world flavours and sharing small plates, wine list, cocktails and desserts. Restaurant & wine bar on St George's Street, Winchester SO23 8AH.",
  path: "/menu",
});

const MENU_HERO = photos.heroSharingSpread;

export default function MenuPage() {
  return (
    <>
      <PageHero image={MENU_HERO} alt="Sharing small plates at MIXA restaurant Winchester">
        <SectionHeading
          label="Menus"
          title="World flavours, one table"
          description="From snacks and small plates to wine, cocktails and desserts — everything is designed to be shared."
          variant="onDark"
        />
      </PageHero>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-5xl">
          <Reveal className="flex justify-center">
            <Button href="/book" variant="primary">
              {siteConfig.bookingCta}
            </Button>
          </Reveal>

          <Reveal delay={80} className="mt-12">
            <MenuTabs />
          </Reveal>
        </div>
      </section>
    </>
  );
}
