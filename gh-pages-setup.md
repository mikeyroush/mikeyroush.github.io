# GitHub Pages Setup Instructions

To correctly set up GitHub Pages to use our custom workflow instead of the default Jekyll build, follow these steps:

1. Go to your GitHub repository: https://github.com/mikeyroush/mikeyroush.github.io

2. Click on **Settings**

3. In the left sidebar, click on **Pages**

4. Under **Build and deployment**, you'll see:
   - **Source**: Choose **GitHub Actions** from the dropdown menu
   - Do NOT select "Deploy from a branch" as this will trigger the Jekyll build

5. This will prevent the default `pages-build-deployment` workflow from running and only use our custom Astro build workflow.

## Why Is This Necessary?

Currently, you have two competing workflows:

1. Our custom Astro build workflow (`Deploy to GitHub Pages`) that correctly builds and deploys your Astro site.
2. The default GitHub Pages Jekyll build workflow (`pages-build-deployment`) that's failing because it's trying to process Astro files.

By setting the source to "GitHub Actions", you're telling GitHub to only use our custom workflow and ignore the default Jekyll build process.

## Verification

After making this change, only one workflow should run when you push changes to the master branch - our custom `Deploy to GitHub Pages` workflow. The `pages-build-deployment` workflow should no longer run automatically.

## Important Notes

- This setting change must be done through the GitHub website interface
- The `.nojekyll` files are still necessary as they prevent Jekyll processing at different stages
- You may need to manually trigger a deployment after changing these settings