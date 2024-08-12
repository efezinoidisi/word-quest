/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background))',
        foreground: 'rgb(var(--color-foreground))',
        cb: 'rgb(var(--color-border))',

        cbh: 'rgb(var(--color-border-hover))',
        heading: 'rgb(var(--color-heading))',

        secondary: 'rgb(var(--color-secondary))',

        'modal-bg': 'rgb(var(--modal-background))',

        'modal-text': 'rgb(var(--modal-text))',
        kbd: 'var(--color-kbd)',
        primary: 'var(--color-primary)',
        'theme-btn': 'rgb(var(--color-theme-btn-bg))'
      },
      gap: {
        section: 'var(--section-gap)'
      },
      spacing: {
        section: 'var(--section-gap)'
      },
      backgroundImage: {
        art: 'url("/src/assets/bg.jpg")',
        galaxy: 'url("/src/assets/galaxy.jpg")',
        light: 'url("/src/assets/light.jpg")'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      keyframes: {
        'slide-in': {
          from: {
            translate: '0 -50%',
            opacity: '0'
          },
          to: {
            translate: '0',
            opacity: '1'
          }
        }
      },
      animation: {
        'slide-in': 'slide-in 900ms cubic-bezier(0.39, 0.575, 0.565, 1)'
      }
    }
  },
  plugins: []
}
