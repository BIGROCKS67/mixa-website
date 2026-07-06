import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { WebSiteJsonLd } from "@/components/seo/WebSiteJsonLd";
import { photos } from "@/data/photos";
import { siteConfig } from "@/data/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#282828",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.shortName} | Restaurant & Wine Bar, Winchester`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: `${siteConfig.name} | Winchester Restaurant & Wine Bar`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: photos.heroSharingSpread,
        width: 2000,
        height: 1333,
        alt: "MIXA Restaurant & Wine Bar, Winchester",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Winchester`,
    description: siteConfig.description,
    images: [photos.heroSharingSpread],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${montserrat.variable} antialiased`}>
        <WebSiteJsonLd />
        <LocalBusinessJsonLd />
        <FaqJsonLd />
        <Header />
        <main className="pb-[calc(3.25rem+env(safe-area-inset-bottom,0px))] lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileStickyBar />
        <CookieConsent />
      </body>
    </html>
  );
}
