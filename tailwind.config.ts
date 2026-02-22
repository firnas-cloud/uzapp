import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      colors: {
        bg: '#0B0B0F',
        glass: 'rgba(255,255,255,0.06)',
        accent: '#2563EB',
        admin: '#1d4ed8'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(37,99,235,0.35), 0 12px 36px rgba(37,99,235,0.15)'
      },
      borderRadius: { xl2: '1.25rem' },
      keyframes: {
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        rise: { '0%': { opacity: '0', transform: 'translateY(10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } }
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
        rise: 'rise 220ms cubic-bezier(0.2, 0.8, 0.2, 1) both'
      }
    }
  },
  plugins: []
} satisfies Config;
