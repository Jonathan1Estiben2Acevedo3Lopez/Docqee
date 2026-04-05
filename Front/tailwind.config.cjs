/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(135deg, rgb(var(--color-primary)) 0%, rgb(var(--color-primary-strong)) 100%)',
      },
      borderRadius: {
        panel: '2rem',
      },
      boxShadow: {
        ambient: '0 18px 44px rgba(56, 72, 93, 0.08)',
        float: '0 28px 60px rgba(56, 72, 93, 0.12)',
      },
      colors: {
        ghost: 'rgb(var(--color-ghost) / <alpha-value>)',
        glow: 'rgb(var(--color-glow) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        'ink-muted': 'rgb(var(--color-ink-muted) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        'primary-soft': 'rgb(var(--color-primary-soft) / <alpha-value>)',
        'primary-strong': 'rgb(var(--color-primary-strong) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        'secondary-ink': 'rgb(var(--color-secondary-ink) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'surface-card': 'rgb(var(--color-surface-card) / <alpha-value>)',
        'surface-high': 'rgb(var(--color-surface-high) / <alpha-value>)',
        'surface-low': 'rgb(var(--color-surface-low) / <alpha-value>)',
      },
      fontFamily: {
        body: ['"Public Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        headline: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        layout: '76rem',
      },
    },
  },
  plugins: [],
};
