# Deployment Guide

## GitHub Pages Setup (One-time Configuration)

Before the first deployment, you **must** enable GitHub Pages in your repository:

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - **Branch**: Leave as default (workflow determines deployment)
4. Click **Save**

Once enabled, the site will be deployed automatically on every push to `master`.

## What happens automatically

1. **Trigger**: Every push to `master` branch
2. **Build**: GitHub Actions runs:
   - Checks out code
   - Installs dependencies via `npm ci`
   - Builds static site via `npm run build`
   - Generates output in `_site/` directory
3. **Configure**: Sets up GitHub Pages configuration
4. **Deploy**: Uploads artifacts and deploys to GitHub Pages

### Live URL

Once deployed, the site is available at:
```
https://xnikug.github.io/tum-web-lab2/
```

## Workflow Details

- **Workflow file**: `.github/workflows/deploy.yml`
- **Build output**: `_site/` directory
- **Deployment service**: GitHub Pages (official service)
- **Supported branches**: `master`

## Troubleshooting

### Deployment fails with "Cannot find any run"
- **Fix**: Ensure GitHub Pages is set to "GitHub Actions" source in repository Settings → Pages

### Site not updating after push
- Check GitHub Actions tab for workflow failures
- Verify branch is `master`
- Wait 1-2 minutes for GitHub Pages to refresh

### Clear cache / force rebuild
- Go to Actions → Click workflow → "Run workflow" button for manual trigger

## Local testing

Before deployment, test the site locally:

```bash
npm run build
cd _site
python -m http.server 8000  # Opens at http://localhost:8000
```
