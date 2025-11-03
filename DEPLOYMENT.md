# Deployment Guide

## Automated Deployment Setup

This project is configured to automatically deploy to a hosting platform after all tests pass on the `main` branch.

### Supported Platforms

You can deploy to any of these platforms:

#### 1. Render (Recommended)

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Create a new Web Service
3. Connect your GitHub repository
4. Render will detect the Node.js app automatically
5. Get the Deploy Hook URL from Settings → Deploy Hooks
6. Add it to GitHub Secrets as `RENDER_DEPLOY_HOOK`

#### 2. Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Login and link project
vercel login
vercel link

# Get deployment token
vercel --token
```

Add `VERCEL_TOKEN` and `VERCEL_PROJECT_ID` to GitHub Secrets

#### 3. Railway

1. Go to [Railway](https://railway.app/)
2. Create a new project from GitHub
3. Get the webhook URL from Settings
4. Add it to GitHub Secrets as `RAILWAY_DEPLOY_HOOK`

#### 4. Heroku

```bash
# Install Heroku CLI
# Create Heroku app
heroku create your-app-name

# Get API key from Heroku Dashboard → Account Settings
# Add to GitHub Secrets as HEROKU_API_KEY and HEROKU_APP_NAME
```

### Setting up GitHub Secrets

1. Go to your GitHub repository
2. Click Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Add your deployment secret (e.g., `RENDER_DEPLOY_HOOK`)

### Enabling Deployment

Uncomment the deployment step in `.github/workflows/ci.yml` and update with your platform's configuration.

## Manual Deployment

You can also deploy manually:

```bash
# Build and test locally
yarn install
yarn test
yarn test:coverage

# Deploy to your platform
git push heroku main
# or
vercel --prod
# or use platform-specific commands
```
