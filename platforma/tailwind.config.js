/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff', 100: '#dae6ff', 200: '#bcd2ff', 300: '#8eb4ff', 400: '#598bff',
          500: '#3366ff', 600: '#1f4ff0', 700: '#173cd6', 800: '#1933ad', 900: '#1b3088', 950: '#141f52',
        },
        ink: { DEFAULT: '#0f172a', soft: '#334155', mute: '#64748b' },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,.06), 0 4px 16px rgba(15,23,42,.06)',
      },
    },
  },
  plugins: [],
};
