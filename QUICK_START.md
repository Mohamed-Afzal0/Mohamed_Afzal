# Quick Start Scripts

**Installation & Setup:**
```bash
# 1. Install dependencies
npm install

# 2. Install testing dependencies
npm install --save-dev vitest @vitest/ui jsdom @testing-library/react @testing-library/jest-dom

# 3. Verify setup
npm run test:run
npm run build
```

**Local Development:**

*Option A: Without Docker*
```bash
npm run dev
# Access at http://localhost:5173
```

*Option B: With Docker (Production-like)*
```bash
docker-compose up
# Access at http://localhost
```

*Option C: With Docker (Hot Reload)*
```bash
docker-compose --profile dev up dev
# Access at http://localhost:5173
```

**Running Tests:**

```bash
# Watch mode (best for development)
npm run test

# UI mode (interactive dashboard)
npm run test:ui

# Single run (for CI/CD)
npm run test:run

# With coverage
npm run test:coverage
```

**Building & Deployment:**

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Build Docker image
docker build -t portfolio-app:latest .

# Run Docker container
docker run -p 80:80 portfolio-app:latest
```

**GitHub Actions:**

- Workflows are in `.github/workflows/`
- Push to `main` or `develop` to trigger CI/CD
- View results in GitHub **Actions** tab
- Pull requests trigger validation workflow

**Useful Commands:**

```bash
# Docker management
docker ps                              # List running containers
docker images                          # List images
docker logs -f portfolio               # View logs
docker exec -it portfolio sh           # Access container shell

# Docker Compose
docker-compose up -d                   # Start in background
docker-compose down                    # Stop all services
docker-compose logs app                # View app logs
docker-compose exec app sh             # Shell into app container

# Node/npm
npm run lint                           # Check code style
npm run build                          # Production build
npm ci                                 # Clean install (for CI)
```

**Common Issues & Solutions:**

1. **Port 80 in use**: `docker run -p 8080:80 portfolio-app:latest`
2. **Module not found**: `npm install && npm run build`
3. **Tests failing**: `npm run test:run` to see detailed errors
4. **GitHub Actions not triggering**: Check workflow YAML syntax and branch names

---

For detailed instructions, see [DOCKER_CI_CD_GUIDE.md](./DOCKER_CI_CD_GUIDE.md)
