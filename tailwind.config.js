/* eslint-disable camelcase */
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { fontFamily } = require('tailwindcss/defaultTheme')
export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const darkMode = 'selector';
export const theme = {
  extend: {
    colors: {
      // Configure your color palette here
      color_sidebar: 'var(--color-bg-sidebar)',
      auth_primary_color: '#0a4378',

      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',

      ringborderdropdown: '#F2E7FE',

      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
      },
      secondaryColor: 'hsl(var(--secondary-color,blue))',
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
    fontFamily: {
      bricolage: ['Bricolage Grotesque', 'sans-serif'], // added another font-family==>font-bricolage
      poppins: ['Poppins', 'sans-serif'], // now you can now use this font by using font-poppins
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
  },
};
export const plugins = [require('tailwindcss-animate')];
