import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      colors: { bg: '#0B0B0F', glass: 'rgba(255,255,255,0.06)' },
      keyframes: {
        shimmer: { '100%': { transform: 'translateX(100%)' } },
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(8px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } }
      },
      animation: { shimmer: 'shimmer 1.8s infinite', fadeUp: 'fadeUp .24s cubic-bezier(0.2,0.8,0.2,1)' }
    }
  },
  darkMode: ['class']
};
export default config;
