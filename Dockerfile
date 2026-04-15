# Stage 1: Build the React application
FROM node:24-alpine AS builder

WORKDIR /app

# Copy .npmrc to handle peer dependencies
COPY .npmrc ./

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies (legacy-peer-deps from .npmrc will handle conflicts)
RUN npm ci

# Copy the entire application
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the built application with Nginx
FROM nginx:alpine

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
