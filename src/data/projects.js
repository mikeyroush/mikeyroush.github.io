// Project data for the portfolio section
export const projectsData = [
  {
    id: "youtube-spotify",
    title: "YouTube to Spotify Converter",
    description: "Web app that extracts songs from YouTube playlists and creates matching Spotify playlists",
    image: "/images/youtube-spotify.png",
    technologies: ["Angular", "TypeScript", "YouTube API", "Spotify API"],
    category: "web",
    featured: true,
    links: {
      live: null,
      code: "https://github.com/mikeyroush/youtube-spotify"
    }
  },
  {
    id: "smart-glasses",
    title: "Smart Glasses App",
    description: "Flutter mobile application for controlling smart glasses with Bluetooth connectivity",
    image: "/images/smart-glasses.png",
    technologies: ["Flutter", "Dart", "Bluetooth LE", "Firebase"],
    category: "mobile",
    featured: true,
    links: {
      live: null,
      code: "https://github.com/mikeyroush/smart-glasses"
    }
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "Personal portfolio website built with Astro, featuring interactive elements and responsive design",
    image: "/images/portfolio.png",
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "GSAP"],
    category: "web",
    featured: true,
    links: {
      live: "https://mikeyroush.github.io",
      code: "https://github.com/mikeyroush/mikeyroush.github.io"
    }
  },
  {
    id: "space-invaders",
    title: "Space Invaders Game",
    description: "Classic arcade game recreation with modern web technologies",
    image: "/images/space-invaders.png",
    technologies: ["JavaScript", "HTML Canvas", "CSS"],
    category: "game",
    featured: false,
    links: {
      live: null,
      code: "https://github.com/mikeyroush/space-invaders"
    }
  },
  {
    id: "unix-shell",
    title: "Unix Shell Implementation",
    description: "Custom implementation of a Unix shell with support for basic commands and piping",
    image: "/images/unix-shell.png",
    technologies: ["C", "Unix", "System Programming"],
    category: "systems",
    featured: false,
    links: {
      live: null,
      code: "https://github.com/mikeyroush/unix-shell"
    }
  },
  {
    id: "mountain-paths",
    title: "Mountain Path Finder",
    description: "Algorithm to find optimal mountain paths from grayscale height maps",
    image: "/images/mountain-paths.jpg",
    technologies: ["Python", "NumPy", "Pathfinding Algorithms"],
    category: "algorithm",
    featured: false,
    links: {
      live: null,
      code: "https://github.com/mikeyroush/mountain-paths"
    }
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe with AI",
    description: "Tic Tac Toe game with an unbeatable AI using the minimax algorithm",
    image: "/images/tic-tac-toe.PNG",
    technologies: ["JavaScript", "HTML", "CSS", "Minimax Algorithm"],
    category: "game",
    featured: false,
    links: {
      live: null,
      code: "https://github.com/mikeyroush/tic-tac-toe"
    }
  },
  {
    id: "sudoku",
    title: "Sudoku Solver",
    description: "Sudoku solver that uses backtracking to find solutions for any valid puzzle",
    image: "/images/sudoku.PNG",
    technologies: ["Python", "Backtracking Algorithm"],
    category: "algorithm",
    featured: false,
    links: {
      live: null,
      code: "https://github.com/mikeyroush/sudoku-solver"
    }
  },
  {
    id: "hangman",
    title: "Hangman Game",
    description: "Classic hangman word guessing game with a clean interface",
    image: "/images/hangman.PNG",
    technologies: ["JavaScript", "HTML", "CSS"],
    category: "game",
    featured: false,
    links: {
      live: null,
      code: "https://github.com/mikeyroush/hangman"
    }
  }
];