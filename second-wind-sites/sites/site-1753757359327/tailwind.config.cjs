const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#0A2342',
        'brand-secondary': '#4A5568',
        'brand-accent': '#B9975B',
        'neutral-light': '#F8F9FA',
        'neutral-dark': '#111827',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        heading: ['var(--font-inter)', ...fontFamily.sans],
      },
      backgroundImage: {
        'hero-pattern': "url('https://static.wixstatic.com/media/3ccbaa_01c9ce029efc447b9cf3546a91ae0991~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_1920,h_1080,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/3ccbaa_01c9ce029efc447b9cf3546a91ae0991~mv2_d_6000_4000_s_4_2.jpg')",
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};