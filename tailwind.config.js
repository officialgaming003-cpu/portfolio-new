/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f9fafb',
          100: '#f3f4f6',
          900: '#111827',
        },
        light: {
          50: '#fafafa',
          100: '#f5f5f5',
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-out',
        fadeIn: 'fadeIn 0.3s ease-in',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backdropBlur: {
        sm: '4px',
      },
    },
  },
  plugins: [],
}
