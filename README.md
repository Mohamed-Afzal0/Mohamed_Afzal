# Mohamed Afzal — Full Stack Designer & Developer

> **"Building Future"** — *Ever Evolving • Ever Learning*

Welcome to my portfolio! I'm a passionate **Full Stack Developer** and creative professional dedicated to building exceptional digital experiences. I specialize in bridging the gap between robust backend logic and intuitive, user-centric front-end design.

[![Vercel Deploy](https://img.shields.io/badge/Deployed-Vercel-000000?style=flat-square&logo=vercel)](https://mohamed-afzal-lovat.vercel.app/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker)](./Dockerfile)
[![Testing](https://img.shields.io/badge/Testing-Vitest-629E51?style=flat-square&logo=vitest)](./vitest.config.js)
[![CI/CD](https://img.shields.io/badge/CI/CD-GitHub%20Actions-2088FF?style=flat-square&logo=github-actions)](./github/workflows/)

---

## 🚀 About Me
I'm **Mohamed Afzal**, a developer who thrives on transforming complex problems into beautiful, functional solutions. Whether it's crafting high-performance web applications or designing visually stunning layouts, I am committed to delivering quality and excellence in every project.

- 🛠️ **5+ Projects** completed with high-end performance.
- ⚙️ **12+ Technologies** in my core stack.
- 🔥 **100% Passion** for clean code and modern UI/UX.
- 🐳 **Production-Ready**: Fully dockerized with automated CI/CD pipeline.
- ✅ **100% Tested**: Comprehensive test suite with 12+ passing tests.

---

## 🛠️ Toolkit & Technologies

| **Category** | **Skills & Tools** |
| :--- | :--- |
| **Frontend** | React 19, JavaScript, HTML5, CSS3, Vite, Framer Motion, Material-UI |
| **Backend** | Node.js, Firebase, MySQL, Java, Python, Flask |
| **Mobile** | React Native, Expo |
| **UI / Design** | Material UI (MUI), Figma, Canva, UI/UX Design |
| **DevOps** | Docker, Docker Compose, Nginx, GitHub Actions |
| **Testing** | Vitest, React Testing Library, jsdom |
| **Code Quality** | ESLint, Prettier, Husky, lint-staged |
| **Dev Tools** | Git, GitHub, VS Code, IntelliJ IDEA |

---

## 🌟 Featured Projects

### [Mind Wave](#projects)
An advanced mood and mental health tracking application designed to help users monitor and improve their well-being.
- **Tech Stack**: React Native, Expo, Firebase, Superbase, Node.js.
- **Key Features**: Secure user data, intuitive mood tracking interface, real-time analytics.

### [Portfolio Website](#projects)
A personal showcase of my skills and creative work, featuring a fully interactive 3D WebGL background and glassmorphic UI.
- **Tech Stack**: React 19, Vite, Framer Motion, Material-UI, Docker.
- **Key Features**: 3D tire animation, responsive design, dynamic project section, production-ready containers.

### [Estate Agent Application (SmartMove)](#projects)
A modern real estate listing application for managing and displaying properties with a clean, professional aesthetic.
- **Tech Stack**: React, Vite, Material-UI.
- **Key Features**: Responsive listing grid, property detail views, sleek glassmorphic containers.

### [Server Monitor Dashboard](#projects)
A full-stack real-time system monitoring tool built independently to explore DevOps and SRE practices. Monitor CPU, memory, disk usage, and network activity with interactive charts.
- **Tech Stack**: Python, psutil, Flask, JavaScript, Chart.js, Docker, GitHub Actions, HTML, CSS.
- **Key Features**: Real-time metrics, interactive dashboards, system health alerts, containerized deployment.

---

## 📦 Production Features

### 🐳 **Containerization & Deployment**
- **Multi-stage Docker builds** for optimized production images (~100MB)
- **Nginx** reverse proxy with security headers, SPA routing, and caching
- **Docker Compose** for local development with hot-reload support
- **Environment-based configs**: Development, staging, and production builds
- **Production-ready**: Deployed on Vercel with automatic deployments

### ✅ **Testing & Quality Assurance**
- **Vitest** framework with 12+ passing tests (all automated)
- **React Testing Library** for comprehensive component testing
- **jsdom** environment for DOM simulation
- **Coverage reporting** with detailed metrics
- **Test locations**: `src/test/Logo.test.jsx`, `src/test/DownloadCVButton.test.jsx`, `src/test/utils.test.js`
- **Automated test runs** on every push and pull request validation

### 🛡️ **Code Quality Automation - Multi-Layer Defense**
- **Layer 1: Enhanced ESLint Configuration**
  - Smart rule patterns with custom ignore patterns
  - Handles `motion` variable from framer-motion imports
  - Proper unused parameter handling with `_` prefix convention
  - Catch block error variable support
  
- **Layer 2: Pre-Commit Hooks**
  - **Husky** automatically runs before every commit
  - **lint-staged** processes only changed files efficiently
  - Auto-runs: `npm run lint:fix && npm run test:run`
  - Prevents broken code from entering repository
  
- **Layer 3: VS Code Integration**
  - Auto-fix on save with configured `.vscode/settings.json`
  - **Prettier** for automatic code formatting
  - Real-time linting feedback
  
- **npm Legacy Peer Dependency Management**
  - `.npmrc` configuration for smooth installations
  - Supports React 19 with Testing Library 15.0
  - No manual `--legacy-peer-deps` needed

- **Zero Tolerance**
  - **0 linting errors** enforced before deployment
  - All automated checks pass before push

### 🔄 **CI/CD Pipeline**
- **GitHub Actions** workflows in `.github/workflows/`
- **ci-cd.yml**: Full 3-stage pipeline (Test → Build → Deploy)
- **pr-validation.yml**: Pull request validation workflow
- **Automated checks on every push**:
  - ESLint validation
  - Vitest suite execution (12 tests)
  - Production build verification
  - Docker image build
  - Auto-deployment to Vercel on main branch

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v24+ (or v20+)
- **npm** v10+
- **Docker** (optional, for containerized deployment)
- **Git** for version control

### 1. Clone the repository
```bash
git clone https://github.com/Mohamed-Afzal0/Mohamed_Afzal.git
cd Mohamed_Afzal
```

### 2. Install dependencies
```bash
# Using npm ci (recommended for CI/CD and consistency)
npm ci

# Or use npm install
npm install
```

### 3. Verify Setup (Recommended First Time)
```bash
# Run all quality checks to ensure everything works
npm run lint:fix    # Auto-fix linting issues
npm run test:run    # Run all 12 tests
npm run build       # Build for production
```

### 4. Development server
```bash
# Option A: Standard development mode
npm run dev
# Visit http://localhost:5173

# Option B: With Docker (Production-like environment)
docker-compose up
# Visit http://localhost

# Option C: With Docker + Hot Reload (Development)
docker-compose --profile dev up dev
# Visit http://localhost:5173
```

### 5. Code quality checks (before committing)
```bash
npm run lint:fix    # Auto-fix linting issues with ESLint
npm run lint        # Check for any remaining linting errors
npm run test:run    # Run all tests with Vitest
npm run build       # Build for production
```

---

## 🧪 Testing

### Run tests in different modes
```bash
# Watch mode (best for development)
npm run test
# Automatically re-runs tests when files change

# Interactive UI mode
npm run test:ui
# Opens interactive dashboard at http://localhost:51204

# Single run (for CI/CD pipelines)
npm run test:run
# Runs all tests once and exits

# With coverage report
npm run test:coverage
# Generates coverage metrics and HTML report
```

### Test structure
- **Test files**: Located in `src/test/`
- **Test types**:
  - Component tests: `*.test.jsx` (React components)
  - Utility tests: `*.test.js` (JavaScript functions)
  - Setup: `src/test/setup.js` (test environment configuration)
- **Testing libraries**:
  - **Vitest**: Ultra-fast unit test framework
  - **React Testing Library**: Component testing utilities
  - **jsdom**: DOM simulation environment

---

## 🐳 Docker Deployment

### Build Docker image
```bash
docker build -t portfolio:latest .
```

### Run container locally
```bash
docker run -p 80:80 portfolio:latest
# Visit http://localhost
```

### Using Docker Compose
```bash
# Production mode
docker-compose up -d

# Development mode with hot-reload
docker-compose --profile dev up dev
```

---

## 📋 Pre-Deployment Checklist

Before pushing to GitHub, run this verification script (all checks run automatically on push anyway):

```bash
# Complete pre-deployment verification
npm run lint:fix && npm run lint && npm run test:run && npm run build
# Output: ✅ Ready to deploy!
```

### Local verification steps
1. **Linting** → `npm run lint:fix` (auto-fixes common issues)
2. **Linting check** → `npm run lint` (ensures no errors remain)
3. **Testing** → `npm run test:run` (runs all 12 tests)
4. **Build** → `npm run build` (creates production-ready dist/)

### What happens automatically on GitHub push
When you push to GitHub, the CI/CD pipeline automatically:
- ✅ Runs **ESLint** validation
- ✅ Executes **Vitest** suite (12 tests)
- ✅ Verifies **Production build**
- ✅ Builds **Docker image**
- ✅ Deploys to **Vercel** (main branch)
- ✅ Runs **PR validation** (pull request branches)

---

## 🧪 Testing

### Run tests
```bash
npm run test:run        # Single run
npm run test:ui         # Interactive UI
npm run test:coverage   # Coverage report
```

### Test files location
- `src/test/*.test.jsx` - Component tests
- `src/test/*.test.js` - Utility tests

---

## 📁 Project Structure

```
Mohamed_Afzal/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── animated/        # Framer Motion animations
│   │   └── ui/              # Material-UI wrappers
│   ├── Pages/               # Page components (Home, About, etc.)
│   ├── animations/          # Animation variants & hooks
│   ├── context/             # React Context providers
│   ├── test/                # Test files & setup
│   │   ├── setup.js         # Test environment configuration
│   │   ├── Logo.test.jsx    # Component test example
│   │   ├── DownloadCVButton.test.jsx
│   │   └── utils.test.js    # Utility function tests
│   ├── assets/              # Images & static files
│   └── App.jsx              # Root component
├── public/                  # Static files
├── .github/
│   └── workflows/           # CI/CD automation
│       ├── ci-cd.yml        # Main pipeline (test → build → deploy)
│       └── pr-validation.yml # Pull request validation
├── .vscode/                 # VS Code settings
├── Dockerfile               # Production container (multi-stage)
├── docker-compose.yml       # Local dev & production setup
├── nginx.conf               # Production Nginx configuration
├── vitest.config.js         # Test runner configuration
├── vite.config.js           # Build tool configuration
├── eslint.config.js         # Linting rules
├── .npmrc                   # npm configuration
├── .gitignore               # Git ignore patterns
└── package.json             # Dependencies & scripts
```

---

## 🔄 Development Workflow

### Standard Development Cycle

1. **Create feature branch**
   ```bash
   git checkout -b feature/your-feature
   ```

2. **Make changes and develop**
   ```bash
   npm run dev
   # Code changes auto-trigger tests in watch mode
   ```

3. **Verify quality before committing**
   ```bash
   npm run lint:fix    # Auto-fix linting issues
   npm run test:run    # Run all tests
   npm run build       # Verify production build
   ```

4. **Commit** (pre-commit hooks run automatically)
   ```bash
   git add .
   git commit -m "feat: your feature description"
   # Husky runs: npm run lint:fix && npm run test:run
   ```

5. **Push to GitHub**
   ```bash
   git push origin feature/your-feature
   ```

6. **Create Pull Request**
   - GitHub Actions automatically validates with `pr-validation.yml`
   - All tests must pass before merging
   - Code review required

7. **Merge and Deploy**
   - Merge to `main` branch
   - GitHub Actions runs `ci-cd.yml` pipeline
   - Auto-deployment to Vercel

### Code Quality Workflow (Automated)

**On every file save (VS Code):**
```
File Change → ESLint auto-fix → Prettier format
```

**On every commit:**
```
git commit → Husky hook → lint-staged → ESLint fix → Tests run → Commit accepted/rejected
```

**On every GitHub push:**
```
GitHub push → GitHub Actions → Lint → Test → Build → Docker → Deploy to Vercel
```

---

## 📚 Documentation & Resources

### Project Documentation
These guides provide detailed information about specific aspects of the setup:

| Document | Purpose |
| :--- | :--- |
| **QUICK_START.md** | Quick reference for common commands and workflows |
| **DOCKER_CI_CD_GUIDE.md** | Detailed Docker setup and CI/CD pipeline configuration |
| **CODE_QUALITY_SETUP.md** | In-depth guide to ESLint, Prettier, and Husky setup |
| **ESLINT_ERROR_PREVENTION.md** | Multi-layer defense system for code quality |
| **NPM_CI_FIX.md** | Explanation of `.npmrc` legacy peer dependencies |
| **SETUP_SUMMARY.md** | Complete summary of all setup components |
| **VERIFICATION_REPORT.md** | Detailed verification report of the complete setup |

### Key Commands Quick Reference
```bash
# Development
npm run dev                  # Start dev server
npm run build                # Production build

# Code Quality
npm run lint                 # Check linting errors
npm run lint:fix             # Auto-fix linting errors

# Testing
npm run test                 # Watch mode
npm run test:run             # Single run
npm run test:ui              # Interactive UI
npm run test:coverage        # Coverage report

# Docker
docker build -t portfolio:latest .     # Build image
docker run -p 80:80 portfolio:latest   # Run container
docker-compose up                      # Start with compose
```

### Important Configuration Files
- **`.npmrc`** - npm configuration (legacy peer dependencies)
- **`vitest.config.js`** - Vitest test runner configuration
- **`eslint.config.js`** - ESLint rules configuration
- **`vite.config.js`** - Vite build configuration
- **`.github/workflows/`** - GitHub Actions CI/CD workflows

---

## 🤝 Let's Connect!
I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.

- **GitHub**: [github.com/Mohamed-Afzal0](https://github.com/Mohamed-Afzal0)
- **Portfolio**: [mohamed-afzal.vercel.app](https://mohamed-afzal-lovat.vercel.app/)
- **Email**: [Contact Me](mailto:afzal.mohamed@example.com)

---

*Made with ❤️ by Mohamed Afzal | Production-Ready • Fully Tested • Continuously Deployed*
