#!/bin/bash

# Cloudflare Pages Fast Deploy Script
# Uses CLI for maximum speed

set -e

echo "🚀 Starting fast deploy..."
START_TIME=$(date +%s)

# Load environment variables
if [ -f .env.local ]; then
  export $(cat .env.local | grep -v '^#' | xargs)
fi

# Build
echo "📦 Building project..."
npm run build

# Deploy
echo "☁️  Deploying to Cloudflare Pages..."
npx wrangler pages deploy out \
  --project-name=nextjs-learn \
  --commit-dirty=true

END_TIME=$(date +%s)
DURATION=$((END_TIME - START_TIME))

echo "✅ Deploy completed in ${DURATION}s!"
echo "🌍 Live at: https://nextjs-learn-2mr.pages.dev"
