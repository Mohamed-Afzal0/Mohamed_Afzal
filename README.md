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

---

## 📦 Production Features

### 🐳 **Containerization & Deployment**
- **Multi-stage Docker builds** for optimized production images
- **Nginx** reverse proxy with security headers and SPA routing
- **Docker Compose** for local development environment
- **Production-ready**: Deployed on Vercel with automatic deployments

### ✅ **Testing & Quality Assurance**
- **Vitest** framework with 12+ passing tests
- **React Testing Library** for component testing
- **100% test coverage** on critical components
- Automated test runs on every push

### 🔄 **CI/CD Pipeline**
- **GitHub Actions** workflows for automated testing and deployment
- **3-stage pipeline**: Test → Build → Deploy
- **PR validation** with mandatory test passing
- **Automated code formatting** with Prettier

### 🛡️ **Code Quality Automation**
- **ESLint** configuration with smart rule patterns
- **Husky pre-commit hooks** to prevent broken code commits
- **lint-staged** for efficient file processing
- **Auto-fix on save** in VS Code
- **0 linting errors** enforced before deployment

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v24+ (or v20+)
- **npm** v10+
- **Docker** (for containerized deployment)

### 1. Clone the repository
```bash
git clone https://github.com/Mohamed-Afzal0/Mohamed_Afzal.git
cd Mohamed_Afzal
```

### 2. Install dependencies
```bash
npm ci
```

### 3. Development server
```bash
npm run dev
# Visit http://localhost:5173
```

### 4. Code quality checks (before committing)
```bash
npm run lint:fix    # Auto-fix linting issues
npm run lint        # Check for any remaining errors
npm run test:run    # Run all tests
npm run build       # Build for production
```

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
docker-compose up -d
# Services start in background
```

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

## 📋 Pre-Deployment Checklist

Before pushing to GitHub (all checks run automatically):

```bash
# Quick verification script
npm run lint:fix && npm run lint && npm run test:run && npm run build && echo "✅ Ready to deploy!"
```

**What happens on push:**
- ✅ ESLint validation
- ✅ Vitest suite execution (12 tests)
- ✅ Production build verification
- ✅ Docker image build
- ✅ Auto-deployment to Vercel

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
│   ├── assets/              # Images & static files
│   └── App.jsx              # Root component
├── public/                  # Static files
├── .github/workflows/       # CI/CD automation
├── Dockerfile               # Production container
├── docker-compose.yml       # Local dev environment
├── vitest.config.js         # Test configuration
├── eslint.config.js         # Linting rules
├── vite.config.js           # Build configuration
└── package.json             # Dependencies & scripts
```

---

## 🔄 Development Workflow

1. **Create feature branch** → `git checkout -b feature/your-feature`
2. **Make changes** → Code away!
3. **Run local tests** → `npm run lint:fix && npm run test:run`
4. **Commit** → Pre-commit hook auto-runs linting & tests
5. **Push** → GitHub Actions validates everything
6. **Auto-deploy** → Vercel deploys on main branch

---

## 🤝 Let's Connect!
I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.

- **GitHub**: [github.com/Mohamed-Afzal0](https://github.com/Mohamed-Afzal0)
- **Portfolio**: [mohamed-afzal.vercel.app](https://mohamed-afzal-lovat.vercel.app/)
- **Email**: [Contact Me](mailto:afzal.mohamed@example.com)

---

*Made with ❤️ by Mohamed Afzal | Production-Ready • Fully Tested • Continuously Deployed*
