import { Hero } from "@/components/home/Hero";
import { FeaturedDishes } from "@/components/home/FeaturedDishes";
import { CategoryHighlights } from "@/components/home/CategoryHighlights";
import { OurStory } from "@/components/home/OurStory";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { BookingBanner } from "@/components/home/AboutPreview";
import { OpeningHoursBand } from "@/components/home/OpeningHoursBand";
import { LocationSection } from "@/components/home/LocationSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <CategoryHighlights />
      <OurStory />
      <GalleryPreview />
      <BookingBanner />
      <OpeningHoursBand />
      <LocationSection />
    </>
  );
}
