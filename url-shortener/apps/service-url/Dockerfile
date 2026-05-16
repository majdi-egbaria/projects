# ---------- Builder Stage ----------
FROM node:22-alpine AS builder

WORKDIR /app

# Enable pnpm
RUN corepack enable

# Copy dependency files first (better layer caching)
COPY package.json pnpm-lock.yaml ./

# Install all deps (including devDependencies)
RUN pnpm install --frozen-lockfile

# Copy source
COPY . .

# Build TypeScript
RUN pnpm build

# ---------- Runtime Stage ----------
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Enable pnpm
RUN corepack enable

# Copy dependency files
COPY package.json pnpm-lock.yaml ./

# Install ONLY production deps
RUN pnpm install --prod --frozen-lockfile

# Copy compiled app from builder
COPY --from=builder /app/dist ./dist

# Optional security hardening
USER node

EXPOSE 3000

CMD ["node", "dist/server.js"]
