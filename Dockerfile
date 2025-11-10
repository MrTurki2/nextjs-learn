FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

# Development image
FROM base AS dev
WORKDIR /app

# Copy node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment to development
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1

# Expose port 3000
EXPOSE 3000

# Start Next.js in development mode with polling for hot reload
CMD ["npm", "run", "dev"]
