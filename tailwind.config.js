/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#EAF5EE',
          100: '#CDE6D6',
          200: '#9DD4B2',
          300: '#6DC28E',
          400: '#4CC98A',
          500: '#149A5B',
          600: '#149A5B',
          700: '#0E3D2C',
          800: '#0E3D2C',
          900: '#0E3D2C',
        },
        accent: {
          50: '#FBFAF6',
          100: '#F6F4EF',
          200: '#EDEAE0',
          300: '#E5E1D6',
          400: '#8A867A',
          500: '#6B675D',
          600: '#55534A',
          700: '#44403c',
          800: '#292524',
          900: '#14231C',
        },
        gold: {
          DEFAULT: '#C9A44C',
          light: 'rgba(201,164,76,.15)',
          hover: 'rgba(201,164,76,.3)',
        },
        surface: {
          DEFAULT: '#F6F4EF',
          raised: '#ffffff',
          sunken: '#FBFAF6',
          canvas: '#E9E6DE',
        },
        footer: {
          DEFAULT: '#0E3D2C',
          text: '#DCE8DF',
          muted: '#A9C4B2',
          accent: '#4CC98A',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        'card': '18px',
        'card-lg': '24px',
        'pill': '999px',
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        'elevated': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'float': '0 10px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.04)',
        'card-hover': '0 24px 48px rgba(14,61,44,.14)',
        'card-depth': '0 20px 40px rgba(14,61,44,.12)',
        'calc': '0 30px 70px rgba(14,61,44,.14), 0 2px 8px rgba(14,61,44,.06), 0 0 0 1px rgba(201,164,76,.15)',
        'calc-hover': '0 36px 80px rgba(14,61,44,.18), 0 0 0 1px rgba(201,164,76,.3)',
        'page-shell': '0 24px 60px rgba(20,35,28,.14)',
        'hero': '0 25px 60px -12px rgb(0 0 0 / 0.5)',
        'cta-glow': '0 10px 24px rgba(20,154,91,.35)',
      },
    },
  },
  plugins: [],
};
