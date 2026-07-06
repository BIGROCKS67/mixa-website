# MIXA — GitHub Pages go-live

Host: **GitHub Pages**  
Primary domain: **https://www.mixarestaurant.com**

---

## 1. GitHub repo

https://github.com/BIGROCKS67/mixa-website

Push to `main` → auto-deploy via GitHub Actions.

---

## 2. Custom domain (GoDaddy)

### Primary: `mixarestaurant.com`

In **GitHub** → Settings → Pages → **Custom domain**:

```text
www.mixarestaurant.com
```

Enable **Enforce HTTPS** when available.

`public/CNAME` contains `www.mixarestaurant.com`.

### GoDaddy DNS for `mixarestaurant.com`

**Remove** any “Forward Domain” — use DNS only.

| Type | Name | Value |
|------|------|--------|
| **A** | `@` | `185.199.108.153` |
| **A** | `@` | `185.199.109.153` |
| **A** | `@` | `185.199.110.153` |
| **A** | `@` | `185.199.111.153` |
| **CNAME** | `www` | `bigrocks67.github.io` |

Wait 15–60 minutes, then check **https://www.mixarestaurant.com**

Optional: forward bare `mixarestaurant.com` → `https://www.mixarestaurant.com` (301).

### Secondary: `mixarestaurant.co.uk` (+ any other domain)

Forward to the `.com` site:

- **To:** `https://www.mixarestaurant.com`
- **Type:** Permanent (301)
- Apply to `@` and `www` on `.co.uk`

---

## 3. Build env

```text
NEXT_PUBLIC_SITE_URL=https://www.mixarestaurant.com
```

Set in `.github/workflows/deploy-pages.yml` for production builds.

---

## 4. After go-live

1. Google Search Console → `www.mixarestaurant.com` → submit sitemap  
2. Google Business Profile → website = `https://www.mixarestaurant.com`  
3. Emails: info@, matt@, paul@, courtney@ **@mixarestaurant.com** (GoDaddy Email)

---

## 5. Local test

```bash
npm ci
NEXT_PUBLIC_SITE_URL=https://www.mixarestaurant.com npm run build
npx serve out
```
