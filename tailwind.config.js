/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0369a1",
        primaryMuda: "#0ea5e9",

        secondary: "#c2410c",
        secondaryMuda: "#f97316",

        tiga: "#b91c1c",
        tigaMuda: "#ef4444",

        empat: "#15803d",
        empatMuda: "#22c55e",

        lima: "#a21caf",
        limaMuda: "#d946ef",

        light: "#e2e8f0",
        dark: "#0f172a",

        darkBg: "#0f172a",
        darkBgMuda: "#1e293b",

        darkGradient: "#172554"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
        rethink: ["Rethink Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

