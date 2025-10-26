import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          50: '#f8f6f0',
          100: '#ede7d1',
          200: '#d9cfa3',
          300: '#c4b370',
          400: '#b19c4a',
          500: '#a08a3a',
          600: '#8b7430',
          700: '#715c29',
          800: '#5f4d26',
          900: '#524324',
        },
        accent: {
          50: '#f0f4f8',
          100: '#d6e4ed',
          200: '#b8d0e0',
          300: '#8fb5ce',
          400: '#5f93b8',
          500: '#4176a3',
          600: '#355e89',
          700: '#2d4c70',
          800: '#29405d',
          900: '#26374f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config