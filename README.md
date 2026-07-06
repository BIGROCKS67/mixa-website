# MIXA Restaurant Website

Premium restaurant website for **Yiayias MIXA Winchester** — Mediterranean-inspired small plates and wine bar on St George's Street.

## Stack

- Next.js 15 + TypeScript + Tailwind CSS 4
- Sanity CMS schemas (optional connection for client editing)
- Vercel deployment

## Local development

```bash
cd mixa
npm install
npm run dev
```

Open http://localhost:3010

## Environment variables

Copy `.env.example` to `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://your-preview-url.vercel.app
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_GA_MEASUREMENT_ID=
```

## Pages

- `/` Home
- `/menu` Full menus (food, wine, drinks, desserts)
- `/about` Brand story
- `/gallery` Photo gallery
- `/book` Dojo booking
- `/contact` Hours, map, contact details

## Client handover

### What the client owns

- GoDaddy domain (stays in their account)
- Sanity CMS project (once created under their email)
- Vercel project access (optional, for preview/production)

### What the client can update in Sanity

- Opening hours
- Menu sections and items
- Gallery images
- Events and seasonal offers
- Site settings (phone, email, booking URL, SEO description)

### Before go-live checklist

1. Replace placeholder phone, address and parking info in `src/data/site.ts`
2. Swap Unsplash placeholder images with client photography
3. Connect Google Analytics measurement ID
4. Submit sitemap in Google Search Console
5. Point GoDaddy DNS to Vercel after client approves preview URL
6. Rotate any credentials shared during setup

## Deploy to Vercel preview

```bash
cd mixa
npx vercel --yes
```

Share the generated `*.vercel.app` URL with the client for review before connecting the live domain.

## Brand assets

Logos live in `public/logos/` from the supplied MIXA logo pack.

Brand colours:

- Pepper `#282828`
- Oregano `#4E6450`
- Honey `#CF935C`
- Sesame `#D9C5AB`
- Mint `#D1DFCD`
