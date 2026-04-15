# Docker, CI/CD, and Testing Setup Guide

Complete guide for dockerizing your React Vite application, setting up CI/CD pipelines, and implementing testing.

## 📋 Table of Contents
1. [Docker Setup](#docker-setup)
2. [Testing Setup](#testing-setup)
3. [CI/CD Pipeline](#cicd-pipeline)
4. [Commands Reference](#commands-reference)
5. [Deployment](#deployment)

---

## 🐳 Docker Setup

### What's Included
- **Dockerfile**: Multi-stage build for optimized production image
- **nginx.conf**: Production-grade Nginx configuration with security headers
- **.dockerignore**: Excludes unnecessary files from Docker build
- **docker-compose.yml**: Orchestrates services for local and production

### How It Works

#### Multi-Stage Build
1. **Stage 1 (Builder)**: Node.js container installs dependencies and builds your React app
2. **Stage 2 (Production)**: Lightweight Nginx container serves the built static files

This reduces the final image size from ~1GB to ~100MB.

### Getting Started with Docker

#### Option 1: Build and Run Production Image
```bash
# Build the Docker image
docker build -t portfolio-app:latest .

# Run the container
docker run -p 80:80 --name portfolio portfolio-app:latest

# Access at http://localhost
```

#### Option 2: Using Docker Compose (Recommended)
```bash
# Build and run services
docker-compose up -d

# View logs
docker-compose logs -f app

# Stop services
docker-compose down

# Remove everything (including volumes)
docker-compose down -v
```

#### Option 3: Development with Hot Reload
```bash
# Run with development profile (includes hot reload)
docker-compose --profile dev up dev

# Access at http://localhost:5173
```

### Docker Commands Reference

```bash
# Build image
docker build -t portfolio-app:latest .

# Run container
docker run -p 80:80 --name portfolio portfolio-app:latest

# View running containers
docker ps

# View all containers (including stopped)
docker ps -a

# View image size
docker images

# Stop container
docker stop portfolio

# Start stopped container
docker start portfolio

# Remove container
docker rm portfolio

# View logs
docker logs portfolio
docker logs -f portfolio  # Follow logs

# Execute command in running container
docker exec -it portfolio sh

# Push to registry (GitHub Container Registry example)
docker tag portfolio-app:latest ghcr.io/yourusername/portfolio-app:latest
docker push ghcr.io/yourusername/portfolio-app:latest
```

### Environment Variables in Docker
Create a `.env.docker` file for Docker-specific variables:
```env
NODE_ENV=production
REACT_APP_API_URL=https://api.example.com
```

Then in docker-compose.yml:
```yaml
environment:
  - NODE_ENV=production
  - REACT_APP_API_URL=${REACT_APP_API_URL}
```

---

## 🧪 Testing Setup

### What's Included
- **Vitest**: Fast unit test framework
- **@testing-library/react**: React component testing utilities
- **jsdom**: DOM environment simulation
- **vitest.config.js**: Test framework configuration
- **src/test/setup.js**: Test environment setup

### Running Tests

```bash
# Run tests in watch mode (watch for file changes)
npm run test

# Run tests once (CI mode)
npm run test:run

# Run tests with UI dashboard
npm run test:ui

# Generate coverage report
npm run test:coverage
```

### Test File Structure
Tests should follow the pattern: `ComponentName.test.jsx`

Example:
```
src/
├── components/
│   ├── Logo.jsx
│   └── Logo.test.jsx
├── test/
│   ├── setup.js          # Test configuration
│   ├── Logo.test.jsx
│   ├── DownloadCVButton.test.jsx
│   └── utils.test.js
```

### Writing Your First Test

```javascript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import MyComponent from '../MyComponent'

describe('MyComponent', () => {
  it('should render without crashing', () => {
    render(<MyComponent />)
    expect(document.body).toBeTruthy()
  })

  it('should display text', () => {
    render(<MyComponent />)
    const text = screen.queryByText('Hello World')
    expect(text).toBeTruthy()
  })
})
```

### Testing Best Practices

1. **Test user behavior, not implementation**: Test what users see and do
2. **Use semantic queries**: Prefer `getByRole`, `getByLabelText` over `getByTestId`
3. **Keep tests simple**: One concept per test
4. **Mock external dependencies**: API calls, timers, etc.
5. **Test accessibility**: Include ARIA attributes checks

### Mocking Examples

```javascript
// Mock API calls
vi.mock('../api', () => ({
  fetchData: vi.fn(() => Promise.resolve({ data: 'test' }))
}))

// Mock timers
vi.useFakeTimers()
// ... test code ...
vi.useRealTimers()

// Mock window objects
window.matchMedia = vi.fn(() => ({
  matches: false,
  addListener: vi.fn(),
  removeListener: vi.fn(),
}))
```

### Coverage Reports
```bash
npm run test:coverage
```

This generates an HTML report in `coverage/` folder. Open `coverage/index.html` to view.

---

## 🚀 CI/CD Pipeline

### How GitHub Actions Works

GitHub Actions automatically runs when:
- Code is pushed to `main` or `develop` branches
- Pull requests are opened or updated

### Workflow Files

#### 1. **ci-cd.yml** - Main Workflow
Runs on every push to main/develop:

**Jobs:**
1. **Test**: Lints and tests your code
2. **Build**: Creates Docker image and pushes to registry
3. **Deploy**: (Optional) Deploys to production

**Features:**
- Automatic test execution
- Code coverage upload to Codecov
- Docker image build and push
- Container registry authentication

#### 2. **pr-validation.yml** - Pull Request Checks
Validates code quality before merging:
- Code style validation
- All tests pass
- Build succeeds
- Bundle size check

### Setting Up GitHub Actions

#### Step 1: Enable GitHub Actions
1. Go to your repository on GitHub
2. Click **Settings** → **Actions** → **General**
3. Enable "Allow all actions and reusable workflows"

#### Step 2: Set Required Secrets

Go to **Settings** → **Secrets and variables** → **Actions**

Add these secrets (if using private registry):
```
REGISTRY_USERNAME - Your container registry username
REGISTRY_PASSWORD - Your container registry password
DEPLOY_KEY - SSH key for production server (optional)
```

#### Step 3: Configure Docker Registry (Optional)

For GitHub Container Registry (GHCR):
```bash
# Login locally first
docker login ghcr.io -u USERNAME -p TOKEN

# TOKEN: Go to GitHub Settings → Developer settings → Personal access tokens
# Permissions needed: read:packages, write:packages
```

### Workflow Triggers

Current triggers in workflows:
```yaml
on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]
```

Add more triggers as needed:
```yaml
on:
  schedule:
    - cron: '0 2 * * *'  # 2 AM UTC daily
  workflow_dispatch:      # Manual trigger
  release:
    types: [published]
```

### Monitoring CI/CD

1. **View Workflow Runs**:
   - Go to **Actions** tab on GitHub
   - Click workflow to see detailed logs

2. **Check Test Results**:
   - Each job shows pass/fail status
   - See test output in logs

3. **View Coverage**:
   - Upload to Codecov for tracking
   - Codecov badge in README

4. **Docker Image Location**:
   - GHCR: `ghcr.io/yourusername/portfolio-app:tag`
   - Docker Hub: `yourusername/portfolio-app:tag`

---

## 📦 Commands Reference

### Development
```bash
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Run ESLint
```

### Testing
```bash
npm run test             # Watch mode
npm run test:run         # Single run (CI)
npm run test:ui          # Interactive UI
npm run test:coverage    # Coverage report
```

### Docker
```bash
# Production
docker build -t portfolio-app:latest .
docker run -p 80:80 portfolio-app:latest

# Development
docker-compose up dev    # With hot reload
docker-compose up        # Production-like

# Management
docker-compose ps        # List services
docker-compose logs -f   # Follow logs
docker-compose down      # Stop and remove
```

---

## 🌐 Deployment

### Option 1: Deploy with Docker to VPS

#### On Your VPS:
```bash
# Install Docker and Docker Compose
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Clone your repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Run with Docker Compose
docker-compose up -d
```

#### With Nginx Reverse Proxy (Recommended):
```nginx
server {
    listen 443 ssl http2;
    server_name yourdomain.com;

    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:80;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Option 2: Deploy to Vercel (Simplest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment (from GitHub)
# Go to vercel.com, import your repository
```

### Option 3: Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### Option 4: AWS Deployment

**Using ECS (Elastic Container Service):**
1. Push Docker image to ECR (Elastic Container Registry)
2. Create ECS Task Definition
3. Create ECS Service
4. Set up Load Balancer

```bash
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com
docker tag portfolio-app <account-id>.dkr.ecr.us-east-1.amazonaws.com/portfolio:latest
docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/portfolio:latest
```

---

## 🔍 Troubleshooting

### Docker Issues

**Problem**: Docker build fails with "permission denied"
```bash
# Solution: Add Docker socket to user
sudo usermod -aG docker $USER
newgrp docker
```

**Problem**: Port already in use
```bash
# Solution: Find and stop the service
docker ps
docker stop <container-id>
```

### Test Issues

**Problem**: Tests fail with "Cannot find module"
```bash
# Solution: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Problem**: "jsdom is not defined"
```bash
# Solution: Ensure jsdom is installed
npm install --save-dev jsdom
```

### GitHub Actions Issues

**Problem**: Workflow not running
- Check workflow file syntax (YAML)
- Verify branch name matches trigger
- Check GitHub Actions is enabled

**Problem**: Docker push fails
- Verify credentials are correct
- Check token/password hasn't expired
- Ensure permissions are set correctly

---

## 📚 Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)

---

## ✅ Verification Checklist

- [ ] Dockerfile builds successfully
- [ ] Docker container runs on http://localhost
- [ ] All tests pass: `npm run test:run`
- [ ] GitHub Actions workflows appear in Actions tab
- [ ] First workflow runs successfully
- [ ] Docker image is pushed to registry
- [ ] Coverage report is generated

---

## 🎯 Next Steps

1. **Add more tests** to increase coverage above 80%
2. **Configure SSL/HTTPS** for production
3. **Set up monitoring** with Prometheus/Grafana
4. **Add database** if backend is needed
5. **Set up logging** with ELK stack or similar

---

Happy deploying! 🚀
