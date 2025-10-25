#!/bin/bash

# Script to enable Pro mode for all users in self-hosted Cap deployment
# This sets NEXT_PUBLIC_IS_CAP to false, which makes userIsPro() return true for everyone

echo "Setting NEXT_PUBLIC_IS_CAP=false in Cloudflare Pages..."

# Set the environment variable for production
wrangler pages project env add NEXT_PUBLIC_IS_CAP false --project-name cap-web

echo "✅ Environment variable set successfully!"
echo ""
echo "Next steps:"
echo "1. Redeploy your application: cd apps/web && pnpm deploy:cloudflare"
echo "2. Or wait for automatic redeployment on next git push"
echo ""
echo "After redeployment, all users will have Pro features enabled by default."
