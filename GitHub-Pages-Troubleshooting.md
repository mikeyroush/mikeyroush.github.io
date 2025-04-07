# GitHub Pages Troubleshooting Guide

I've identified several potential issues with the GitHub Pages deployment:

## Current Issues

1. **Module Type Warning**: Added `"type": "module"` to package.json to fix the warning in the build.

2. **Conflicting Workflows**: You have two workflows trying to deploy:
   - Our custom Astro workflow
   - GitHub's default Pages workflow

3. **Static Files Location**: The build looks correct locally (index.html is in the dist folder), but it might not be deployed correctly.

## Debugging Steps to Try

### 1. Debug Deployment with Simple Files

I've created:
- A debug workflow (`.github/workflows/debug.yml`) 
- A simple debug page (`debug/index.html`)

You can run this workflow manually from the GitHub Actions tab to test if basic GitHub Pages deployments work.

### 2. Configure GitHub Pages Correctly

1. Go to your GitHub repository Settings > Pages
2. Make sure the **Source** is set to "GitHub Actions"
3. Make sure no branch is selected for deployment

### 3. Check Repository Settings

1. Go to Settings > Actions > General
2. Ensure Workflow permissions are set to "Read and write permissions"

### 4. Inspect Recent Deployments

1. Go to the "Deployments" section in your repository
2. Look at recent deployments to see what's actually being deployed

### 5. Check Base Path

1. Make sure the Astro config's site parameter is set correctly
2. Try accessing your site with `/index.html` explicitly

## Testing Your Site

After running the debug workflow, check if the debug page is accessible at:
- https://mikeyroush.github.io/
- https://mikeyroush.github.io/index.html
- https://mikeyroush.com/
- https://mikeyroush.com/index.html

If the debug page works but the full site doesn't, the issue is with the Astro build output.

## Next Steps

1. Run the debug workflow to test basic GitHub Pages functionality
2. Check the Settings > Pages configuration
3. If the debug page deploys successfully, we'll update the main workflow accordingly