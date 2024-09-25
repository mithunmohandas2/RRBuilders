/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif'],
      },
      colors: {
        specialCyan: "#67c1d3",
        menubarBg: "#1c2638",
        violetTxt: "#7574a6",
        violetBg: "#565593",
      },
      keyframes: {
        flyInTop: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        flyOutDown: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
      },
      animation: {
        flyIn: 'flyInTop 0.5s ease-in-out',
        flyOut: 'flyOutDown 0.5s ease-in-out',
      },
    }
  },
  plugins: [],
}
