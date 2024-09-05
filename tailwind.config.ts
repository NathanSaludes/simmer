import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1920px"
      }
    },
    extend: {
      fontFamily: {
        "aciella-script": "var(--font-aciella-script)",
        "adelle-mono": "var(--font-adelle-mono)",
        "adelle-mono-flex": "var(--font-adelle-mono-flex)",
        "afton-james": "var(--font-afton-james)",
        articulat: "var(--font-articulat)",
        asthetic: "var(--font-asthetic)",
        bantayog: "var(--font-bantayog)",
        baurems: "var(--font-baurems)",
        fionas: "var(--font-fionas)",
        gilroy: "var(--font-gilroy)",
        imbue: "var(--font-imbue)",
        lora: "var(--font-lora)",
        "myriad-pro": "var(--font-myriad-pro)",
        "nabire-1943": "var(--font-nabire-1943)",
        soulcraft: "var(--font-soulcraft)"
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        simmer: {
          DEFAULT: "hsla(var(--simmer-main))",
          yellow: "hsla(var(--simmer-yellow))"
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/container-queries")
  ]
} satisfies Config;

export default config;
