/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Coffee theme (light mode)
        coffee: {
          light: '#F8F4E3',
          cream: '#E5DCC5',
          medium: '#C7B198',
          dark: '#85694F',
          accent: '#A47551',
        },
        // Bourbon theme (dark mode)
        bourbon: {
          darker: '#2A1B0A',
          dark: '#3C2A1A',
          medium: '#5E442F',
          amber: '#C67D30',
          glow: '#E8A95C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'grow': 'grow 3s ease-out forwards',
        'fadeIn': 'fadeIn 0.5s ease-in forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        grow: {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};