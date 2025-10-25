Add environment variable to Cloudflare Pages:

1. Go to: Cloudflare Dashboard → Workers & Pages → cap-web → Settings → Environment Variables
2. Add: NEXT_PUBLIC_IS_CAP = false
3. Apply to: Production
4. Redeploy: cd apps/web && pnpm deploy:cloudflare

Done. All users will have Pro features.