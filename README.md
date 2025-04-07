# Mikey Roush Portfolio

My professional portfolio website built with Astro, showcasing my projects, skills, and experience as a Senior Software Developer.

## Features

- Modern responsive design with Coffee/Bourbon theme toggle
- Interactive timeline tree visualization of my professional journey
- D3-based skill visualization with interactive category filtering
- Project showcase with filtering capabilities
- Interactive easter egg treasure hunt activated with Konami code (↑↑↓↓←→←→BA)
- Fast performance with optimized assets
- GitHub Pages deployment workflow

## Technologies Used

- [Astro](https://astro.build/) - Web framework for content-focused websites
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [GSAP](https://greensock.com/gsap/) - Animation library for timeline tree
- [D3.js](https://d3js.org/) - Data visualization library for skills clusters

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
mikeyroush.github.io/
├── public/                # Static assets
├── src/
│   ├── components/        # UI components
│   │   ├── core/          # Header, Footer, Navigation
│   │   ├── sections/      # Main page sections
│   │   ├── interactive/   # Interactive elements (Timeline, Skills viz)
│   │   └── shared/        # Reusable components
│   ├── layouts/           # Page layouts
│   ├── pages/             # Astro pages
│   ├── styles/            # Global styles and themes
│   ├── scripts/           # JavaScript files
│   │   └── easteregg.js   # Konami code & treasure hunt
│   ├── data/              # Data for components
│   └── utils/             # Utility functions
├── astro.config.mjs       # Astro configuration
└── tailwind.config.mjs    # Tailwind configuration
```

## Special Features

### Theme Toggle
Switch between "Coffee Mode" (light theme) and "Bourbon Mode" (dark theme) with a persistent theme preference.

### Interactive Timeline
A growing tree visualization showing key career milestones that animates as you scroll.

### Skills Visualization
Interactive, force-directed visualization of skills with category filtering and interactive nodes.

### Easter Egg Hunt
Activate with the Konami code (↑↑↓↓←→←→BA) to reveal hidden items throughout the site:
- 5 coffee cups
- 5 bourbon glasses
- 5 bicycles

### Quote Integration
Inspirational quotes appear between sections, categorized by personal, technical, and leadership themes.

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions whenever changes are pushed to the master branch.

## License

[MIT License](LICENSE)