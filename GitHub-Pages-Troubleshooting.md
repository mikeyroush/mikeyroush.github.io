# GitHub Pages Troubleshooting Guide

## Updated Workflow Files

I've updated both workflow files:
1. **Main deployment workflow** - Using the official Astro GitHub Pages template
2. **Debug workflow** - Updated with the latest GitHub Actions versions

The original error (`Missing download info for actions/upload-artifact@v3`) was likely due to using outdated or incompatible GitHub Actions versions. The official Astro template uses the correct versions that are designed to work together.

## Required GitHub Pages Configuration

For GitHub Pages to work correctly with Astro:

1. Go to your GitHub repository Settings > Pages
2. Make sure the **Source** is set to "GitHub Actions"
3. Under "Custom domain," ensure your domain is correctly set if you're using a custom domain

## Testing the Deployment

After pushing these changes:

1. Go to GitHub Actions in your repository
2. Wait for the "Deploy Astro site to Pages" workflow to complete
3. Check the deployment URL listed in the workflow summary

## Common Issues and Solutions

### Base Path Issues
If your site loads but without CSS/JS:
- Check base path in astro.config.mjs
- The GitHub workflow now automatically sets the correct base path

### 404 Errors
If you still get 404 errors:
- Make sure GitHub Pages is using GitHub Actions (not Jekyll)
- Check that index.html is in the root of the deployed site
- Verify all file paths are correct (especially in links and images)

### Custom Domain Issues
If using a custom domain:
- Verify CNAME file is in the public/ directory
- Check DNS settings 
- Ensure SSL is properly configured

## Next Steps

1. Push these updated workflows to GitHub
2. Monitor the GitHub Actions tab for successful workflow completion
3. Check your site using the URL provided in the workflow summary