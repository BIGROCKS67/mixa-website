# MIXA — GitHub Pages go-live

Host: **GitHub Pages** (not Vercel).  
Primary domain: **https://www.mixarestaurant.co.uk**

---

## 1. Create the GitHub repo

Push the **`mixa`** folder as its own repo (repo root = this folder):

```bash
cd mixa
git init
git add .
git commit -m "MIXA website — GitHub Pages"
git branch -M main
git remote add origin https://github.com/YOUR_ORG/mixa-website.git
git push -u origin main
```

---

## 2. Enable GitHub Pages

1. Repo → **Settings** → **Pages**
2. **Build and deployment** → Source: **GitHub Actions**
3. Push to `main` — workflow `.github/workflows/deploy-pages.yml` runs automatically
4. When green, site is at `https://YOUR_USER.github.io/REPO_NAME/` until DNS is set

---

## 3. Custom domain (GoDaddy)

### Primary: `mixarestaurant.co.uk`

In **GitHub** → Settings → Pages → **Custom domain** → enter:

```text
www.mixarestaurant.co.uk
```

Enable **Enforce HTTPS** when available.

`public/CNAME` already contains `www.mixarestaurant.co.uk`.

### GoDaddy DNS for `mixarestaurant.co.uk`

**Remove** any “Forward Domain” on this domain — use DNS only.

| Type | Name | Value |
|------|------|--------|
| **A** | `@` | `185.199.108.153` |
| **A** | `@` | `185.199.109.153` |
| **A** | `@` | `185.199.110.153` |
| **A** | `@` | `185.199.111.153` |
| **CNAME** | `www` | `YOUR_GITHUB_USERNAME.github.io` |

Replace `YOUR_GITHUB_USERNAME.github.io` with your actual Pages host (shown in GitHub Pages settings after first deploy).

Delete old A/CNAME records pointing at Vercel or parking pages.

Wait 15–60 minutes, then check **https://www.mixarestaurant.co.uk**

### Apex → www (optional)

In GoDaddy, forward `mixarestaurant.co.uk` → `https://www.mixarestaurant.co.uk` (301 permanent).

---

## 4. Other domains (`mixarestaurant.com` + 3rd domain)

GitHub Pages = **one custom domain per repo**.

For `.com` and any other domain → **GoDaddy Forward Domain**:

- From: `mixarestaurant.com` and `www.mixarestaurant.com`
- To: `https://www.mixarestaurant.co.uk`
- Type: **Permanent (301)**

Do **not** use DNS A records on `.com` if you’re only forwarding.

---

## 5. Environment variable

Set at build time (already in workflow):

```text
NEXT_PUBLIC_SITE_URL=https://www.mixarestaurant.co.uk
```

Canonical URLs, sitemap, and schema use this.

---

## 6. After go-live

1. Google Search Console → add `www.mixarestaurant.co.uk` → submit sitemap  
2. Google Business Profile → website = `https://www.mixarestaurant.co.uk`  
3. Anthony updates Instagram / socials to the live URL  
4. Emails (info@, matt@, paul@, courtney@) — set up in GoDaddy separately  

---

## 7. Local build test

```bash
npm ci
NEXT_PUBLIC_SITE_URL=https://www.mixarestaurant.co.uk npm run build
npx serve out
```

Static files land in **`out/`**.

---

## Vercel

You can remove the Vercel project / domains if everything is on GitHub Pages. Preview URL `mixa-puce.vercel.app` is no longer needed after DNS is live.
