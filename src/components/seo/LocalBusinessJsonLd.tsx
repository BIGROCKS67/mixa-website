import { photos } from "@/data/photos";
import { siteConfig } from "@/data/site";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "FoodEstablishment"],
    "@id": `${siteConfig.url}/#restaurant`,
    name: siteConfig.name,
    alternateName: [siteConfig.shortName, "MIXA Restaurant Winchester", "Yiayias MIXA"],
    description: siteConfig.description,
    url: siteConfig.url,
    image: [
      photos.exteriorStorefront,
      photos.heroSharingSpread,
      `${siteConfig.url}${photos.interiorDiningKitchen}`,
    ].map((img) => (img.startsWith("http") ? img : `${siteConfig.url}${img}`)),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "££",
    servesCuisine: ["World Cuisine", "Small Plates", "Sharing Plates", "Wine Bar"],
    acceptsReservations: true,
    menu: `${siteConfig.url}/menu`,
    hasMenu: `${siteConfig.url}/menu`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.line2,
      addressRegion: siteConfig.address.county,
      postalCode: siteConfig.address.postcode,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.0633,
      longitude: -1.318,
    },
    hasMap: siteConfig.googleMapsUrl,
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.tripadvisor,
      siteConfig.parentWebsite,
      siteConfig.website,
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "12:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "12:00",
        closes: "17:00",
      },
    ],
    amenityFeature: siteConfig.amenities.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
