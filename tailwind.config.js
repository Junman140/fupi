module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // New refined color palette
        "deep-teal": "#003A40",
        "light-mint": "#B9F4D6",
        "bronze-gold": "#B68D40",
        "light-lavender": "#C5BDF6",
        "soft-sage": "#E0F5E9",

        // Base colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Updated primary colors
        primary: {
          DEFAULT: "#003A40", // deep teal
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#B9F4D6", // light mint
          foreground: "#003A40",
        },
        accent: {
          DEFAULT: "#B68D40", // bronze gold
          foreground: "#FFFFFF",
        },
        highlight: {
          DEFAULT: "#C5BDF6", // light lavender
          foreground: "#003A40",
        },

        // Updated UI colors
        muted: {
          DEFAULT: "#E0F5E9", // soft sage
          foreground: "#003A40",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        popover: {
          DEFAULT: "#003A40",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#003A40",
          foreground: "#FFFFFF",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #003A40, #B9F4D6)",
        "gradient-accent": "linear-gradient(to right, #B68D40, #C5BDF6)",
        "gradient-muted": "linear-gradient(to right, #E0F5E9, #FFFFFF)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}

