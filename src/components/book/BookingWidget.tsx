import { siteConfig } from "@/data/site";

export function BookingWidget() {
  return (
    <iframe
      title="MIXA table booking"
      src={siteConfig.bookingUrl}
      className="min-h-[720px] w-full rounded-sm border border-pepper/10"
      loading="eager"
    />
  );
}
