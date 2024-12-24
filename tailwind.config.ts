import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": ["var(--font-space-grotesk)", ...fontFamily.sans],
      },

      fontSize: {
        xs: ["1rem", "1.3125rem"],
        sm: ["1.25rem", "1.625rem"],
        lg: ["3.5rem", "4.4375rem"],
        mm: ["1.5rem", "1.9375rem"],
        md: ["1.5rem", "1.9375rem"],
      },

      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },

        cbgBlue: "#1C6DD0",
        cbrEasy: "#008138",
        cbrMedium: "#E5C600",
        cbrHard: "#DE0000",
        cButton: "#2CA58D",
        cbrall: "#47A0E5",
        cPlay: "#001D92",
        cCpu: "#E60000",
        cbar: "#47A0E5",
      },

      boxShadow: {
        custom: "0 0.625rem 0 #000",
        custom2: "0 0.3125rem 0 #000",
        customHoverE: "0 0.625rem 0 #008138",
        customHoverM: "0 0.625rem 0 #E5C600",
        customHoverH: "0 0.625rem 0 #DE0000",
        customHoverR: "0 0.625rem 0 #47A0E5",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      screens: {
        tall: { raw: "(min-height: 760px)" },
        desktopHover: { raw: "(hover: hover)" },
      },
    },
  },
  plugins: [],
};
export default config;
