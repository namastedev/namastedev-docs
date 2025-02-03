/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "brand-background": "#181e24",
        "success-btn": "#28A745",
        "success-btn-clicked": "#196e2d",
        "primary-btn": "#10426e",
        "primary-btn-clicked": "#0b3860",
        "grey-shade": "#797F87",
        "logo-blue": "#092A46",
        "logo-banner": "#183045",
        "logo-banner-fade": "#425C71",
        "logo-orange": "#E58C33",
        "logo-orange-clicked": "#d78330",
        "logo-yellow": "#EDAE2F",
        "logo-skyBlue": "#4FB8B9",
        "invoice-background": "#f7f7f7",
        "logo-red": "#FF0900",
        "brand-dark-background": "#2A323C",
        "brand-sky-blue": "#52ceff",
        "brand-blue": "#00aaff",
        "brand-heading": "#E3646E",
        "brand-subparagraph": "#A2A2A2",
        "brand-light-background": "#DBDBDB",
        "brand-light-heading": "#383838",
        "popup-light": "#ffffff",
        "popup-dark": "#1d232a",
        "brand-card-bg": "#292C34",
        "brand-card-title": "#E2E4E9",
        "card-secondary-text-dark": "#B7B7B7",
        "brand-secondary-text": "#C0C4CE",
        "user-profile-bg": "#3a434e",
        "user-profile-edit-icon": "#D1D5DB",
        "web-app-bg-dark": "#16181D",
        "brand-border-color": "#a6adba66",
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
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      aspectRatio: {
        "9/16": "9 / 16",
      },
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"],
        inter: ["Inter", "sans-serif"],
        maven: ["Maven Pro", "sans-serif"],
        segoe: ["Segoe UI", "sans-serif"],
      },
      // borderRadius: {
      // 	lg: 'var(--radius)',
      // 	md: 'calc(var(--radius) - 2px)',
      // 	sm: 'calc(var(--radius) - 4px)'
      // }
    },
  },
  plugins: [],
};
