/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'void-black': '#050505',
        'terminal-green': '#00ff41',
        'alert-amber': '#ffb000',
        'text-secondary': '#e0e0e0',
        'border-color': '#333333',
      },
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
        body: ['Source Serif 4', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
