# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- `npm install` - Install all dependencies
- `npm run dev` - Start local development server with HMR
- `npm run build` - Build production-ready site
- `npm run preview` - Preview the production build locally

## Project Structure
- `/src/components/` - UI components organized by type (core, sections, interactive, shared)
- `/src/layouts/` - Page layout templates
- `/src/pages/` - Astro pages (routes)
- `/src/data/` - Data files for content (journey, skills, projects, experience)
- `/src/scripts/` - JavaScript functionality including easteregg.js (Konami code implementation)
- `/src/styles/` - Global CSS and theme variables

## Code Style Guidelines
- **HTML/Astro**: Use 2-space indentation with semantic HTML5 elements
- **CSS**: Use Tailwind utility classes with CSS variables for theming
- **JavaScript**: Use modern ES6+ syntax with explicit typing where helpful
- **Components**: Keep components focused on a single responsibility
- **Data**: Store content in separate data files under `/src/data/`
- **Interactive elements**: Implement with clean, performant JavaScript

## Special Features
- **Theme System**: Coffee (light) and Bourbon (dark) themes using CSS variables
  - Custom theme icons stored in `/public/images/icons/`
  - To change theme icons, replace `coffee.png` and `bourbon.png` in this directory
- **Timeline Tree**: GSAP-animated tree visualization in Journey section
- **Skills Visualization**: D3-based force-directed graph for skills with hover effects and modals
- **Email Contact**: Opens native email client with prepopulated message
- **Easter Egg**: Konami code (↑↑↓↓←→←→BA) activates hidden treasure hunt