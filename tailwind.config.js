/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        background: 'rgba(var(--color-background))',
        foreground: 'rgba(var(--color-foreground))',
        cb: 'rgba(var(--color-border))',

        cbh: 'rgba(var(--color-border-hover))',
        heading: 'rgba(var(--color-heading))',

        secondary: 'rgba(var(--color-secondary))',

        'modal-bg': 'rgba(var(--modal-background))',

        'modal-text': 'rgba(var(--modal-text))',
        kbd: 'var(--color-kbd)'
      }
    }
  },
  plugins: []
}
