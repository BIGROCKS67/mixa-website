export const siteConfig = {
  name: "Yiayias MIXA Winchester",
  shortName: "MIXA",
  /** Official secondary logo tagline from brand guidelines */
  logoTagline: "World Flavours. One Table.",
  /** Brand line from menu / positioning */
  brandLine: "World Flavours. One Table.",
  heroHeadline: "Where great food brings people together.",
  heroSubheading:
    "World flavours at one table — small plates, carefully selected wines and a relaxed atmosphere made for sharing.",
  description:
    "MIXA is a restaurant and wine bar on St George's Street, Winchester. Small plates from around the world, great wine, outdoor seating and a welcoming sharing experience.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mixarestaurant.com",
  website: "https://www.mixarestaurant.com",
  phone: "01962 582592",
  email: "info@mixarestaurant.com",
  address: {
    line1: "56 St George's St",
    line2: "Winchester",
    postcode: "SO23 8AH",
    county: "Hampshire",
    full: "56 St George's St, Winchester SO23 8AH",
  },
  parking:
    "St George's Street has nearby pay & display bays. Winchester city centre car parks are a short walk away — including Brooks, Chesil Street and River Park.",
  priceRange: "£20–30 per person",
  amenities: [
    "Reservations recommended",
    "Outdoor seating",
    "Vegan options",
    "Terrace",
    "Cocktails",
    "Wine bar",
    "Live music",
  ],
  hours: {
    note: "Reservations recommended. Booking slots may differ from kitchen hours.",
    summary: "Tue–Sat: 12:00 – 22:00 · Sun: 12:00 – 17:00",
    monday: "Closed",
    tuesday: "12:00 – 22:00",
    wednesday: "12:00 – 22:00",
    thursday: "12:00 – 22:00",
    friday: "12:00 – 22:00",
    saturday: "12:00 – 22:00",
    sunday: "12:00 – 17:00",
  },
  bookingCta: "Book a Table Today",
  bookingUrl:
    "https://web.dojo.app/create_booking/vendor/QE47yv-7a-_GmmoePQHhJNHPuSkSfyQaDNJtHUvf2DU_restaurant",
  parentWebsite: "https://www.yiayias.co.uk",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Yiayias+MIXA+Winchester+56+St+George%27s+St+Winchester+SO23+8AH",
  googleMapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=56+St+George%27s+St,+Winchester+SO23+8AH",
  googleMapsEmbed:
    "https://www.google.com/maps?q=56+St+George%27s+St,+Winchester+SO23+8AH&hl=en&z=16&output=embed",
  nav: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Our Story", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Book", href: "/book" },
    { label: "Contact", href: "/contact" },
  ],
  social: {
    instagram: "https://www.instagram.com/mixarestaurantuk",
    handle: "@mixarestaurantuk",
    facebook: "https://www.facebook.com",
    tripadvisor:
      "https://www.tripadvisor.co.uk/Restaurant_Review-g186300-d25186278-Reviews-Yiayias_MIXA_Winchester-Winchester_Hampshire_England.html",
  },
  seoKeywords: [
    "restaurant Winchester",
    "best restaurant Winchester",
    "Mediterranean restaurant Winchester",
    "Greek restaurant Winchester",
    "world cuisine Winchester",
    "sharing restaurant Winchester",
    "wine bar Winchester",
    "small plates Winchester",
    "sharing plates Winchester",
    "St Georges Street restaurant Winchester",
    "St George's Street restaurant",
    "date night Winchester",
    "restaurants near Winchester Cathedral",
    "Yiayias MIXA Winchester",
    "MIXA restaurant Winchester",
    "tapas Winchester",
    "cocktails Winchester",
    "vegan restaurant Winchester",
    "SO23 8AH restaurant",
    "where to eat Winchester",
    "best places to eat Winchester",
  ],
} as const;

/** Brand palette — mixa_guidelines.pdf */
export const brandColors = {
  pepper: "#282828",
  oregano: "#4E6450",
  honey: "#CF935C",
  sesame: "#D9C5AB",
  mint: "#D1DFCD",
} as const;

/** Typography — mixa_guidelines.pdf */
export const brandType = {
  paragraph: { weight: 300, casing: "titlecase" as const },
  heading: { weight: 500, casing: "titlecase" as const },
  title: { weight: 400, casing: "uppercase" as const, tracking: "0.2em" },
} as const;
