import type { Metadata } from "next";
import { photos } from "@/data/photos";
import { siteConfig } from "@/data/site";

type PageMetaOptions = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: PageMetaOptions): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: `${title} | ${siteConfig.shortName}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: photos.heroSharingSpread,
          width: 2000,
          height: 1333,
          alt: `${siteConfig.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.shortName}`,
      description,
      images: [photos.heroSharingSpread],
    },
  };
}
