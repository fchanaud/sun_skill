/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'citrus-yellow': '#FFD633',
        'lime-green': '#66B032',
        'orange': '#FF7F2A',
        'grapefruit-red': '#FF4C4C',
        'leaf-green': '#2F7D32',
        'light-neutral': '#F7F7F7',
        'dark-slate': '#1E1E1E',
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'tennis-court': "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'pulse-scale': 'pulseScale 1s ease',
        'scroll-bounce': 'scrollBounce 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        pulseScale: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' }
        },
        scrollBounce: {
          '0%, 20%, 50%, 80%, 100%': { opacity: '0.7' },
          '40%': { opacity: '0.3' },
          '60%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}
