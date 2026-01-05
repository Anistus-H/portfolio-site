# Cloudflare Pages Deployment Guide

Follow these steps to deploy your portfolio site to Cloudflare Pages.

## 1. Cloudflare Dashboard Setup
1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository and click **Begin setup**.

## 2. Build Settings
In the **Build settings** section, use the following configuration:
- **Framework preset**: `None` (or `Next.js` if available, but we use a custom command)
- **Build command**: `npm run pages:build`
- **Build output directory**: `.open-next/assets`

## 3. Environment Variables
Add the following variables in the **Environment variables (advanced)** section:
- `RESEND_API_KEY`: Your Resend API key.
- `CONTACT_EMAIL`: The email address where you want to receive messages.
- `NODE_VERSION`: `20` (or higher).

## 4. Compatibility Flags
Once the project is created, go to **Settings** > **Functions** > **Compatibility flags**:
- Add `nodejs_compat` to both **Production** and **Preview** environments.

## 5. Deploy
Click **Save and Deploy**. Cloudflare will now build and deploy your site using OpenNext!

---

> [!TIP]
> You can test the build locally by running:
> ```bash
> npm run pages:build
> ```
> This will generate the `.vercel/output` directory which Cloudflare uses for deployment.
