import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(180, 29%, 50%)',
        'cyan-100': 'hsl(180, 52%, 96%)',
        'cyan-200': 'hsl(180, 31%, 95%)',
        'cyan-500': 'hsl(180, 8%, 52%)',
        'cyan-700': 'hsl(180, 14%, 20%)',
      },
      fontSize: {
        base: '0.9375rem',
      },
    },
  },
  plugins: [],
};
export default config;
