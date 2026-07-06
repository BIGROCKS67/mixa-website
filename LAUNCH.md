# MIXA Launch Handoff

## Preview deployment

Deploy a private review link before connecting the live domain:

```bash
cd mixa
npx vercel --yes --scope eagleaibots-projects
```

Share the generated `*.vercel.app` URL with the client for approval.

## Domain connection (GoDaddy)

1. Client rotates GoDaddy password (never share in chat/images)
2. In Vercel project settings, add the client's domain
3. In GoDaddy DNS, add the records Vercel provides (usually A + CNAME)
4. Wait for SSL to provision (usually under 24 hours)

## Google setup

### Search Console

1. Add property for the live domain
2. Verify via DNS TXT record or HTML tag
3. Submit sitemap: `https://yourdomain.com/sitemap.xml`

### Google Analytics

1. Create GA4 property under client's Google account
2. Add measurement ID to `.env.local`:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

3. Redeploy on Vercel

## Sanity CMS (client editing)

1. Create Sanity project at sanity.io under client's email
2. Add project ID to `.env.local`
3. Deploy Sanity Studio separately or embed at `/studio` later
4. Train client on updating:
   - Menu items
   - Gallery images
   - Opening hours
   - Events/offers
   - Site settings

## Pre-go-live content checklist

- [ ] Exact street address and postcode
- [ ] Phone number
- [ ] Final opening hours
- [ ] Parking directions
- [ ] Client photography (replace Unsplash placeholders)
- [ ] Google Business review link
- [ ] Dojo login for embedded booking styling (optional)

## Ownership summary

| Asset | Owner |
|-------|-------|
| Domain (GoDaddy) | Client |
| Website code | Jack / agency |
| Vercel hosting | Client account recommended |
| Sanity CMS | Client account |
| Google Analytics / Search Console | Client account |

## Monthly costs (approximate)

- Vercel: free tier or ~£20/mo for pro features
- Sanity: free tier for this site size
- Domain: existing GoDaddy renewal
- Dojo: existing booking subscription
