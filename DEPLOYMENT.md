# Deployment Guide

## GitHub Pages Deployment

The project is configured to automatically deploy to GitHub Pages on every push to the `master` branch using GitHub Actions.

### What happens automatically:

1. **Trigger**: Every push to `master` branch
2. **Build**: GitHub Actions runs `npm run build` which generates the static site in `_site/`
3. **Deploy**: Built site is deployed to GitHub Pages

### Live URL

The site is deployed at:
```
https://xnikug.github.io/tum-web-lab2/
```

### Configuration

- **Workflow file**: `.github/workflows/deploy.yml`
- **Build output**: `_site/` directory
- **Environment**: GitHub Pages environment

### Disabling automatic builds

If you need to disable auto-deployment:
- Disable the workflow in GitHub Actions settings
- Or delete `.github/workflows/deploy.yml`

### Monitoring deployments

- View deployment status in GitHub Actions tab
- Check build logs for any errors
- GitHub Pages settings show the deployment URL and status

### Local testing before deployment

Before pushing to master, test locally:
```bash
npm run build
cd _site
# Serve locally for testing (optional: python -m http.server 8000)
```
