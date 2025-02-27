
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "scale-out": {
          from: { transform: "scale(1)", opacity: "1" },
          to: { transform: "scale(0.95)", opacity: "0" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.4s ease-out",
        "fade-out": "fade-out 0.4s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "scale-out": "scale-out 0.3s ease-out",
        "slide-in-right": "slide-in-right 0.4s ease-out",
        "slide-out-right": "slide-out-right 0.4s ease-out",
        "enter": "fade-in 0.4s ease-out, scale-in 0.3s ease-out",
        "exit": "fade-out 0.4s ease-out, scale-out 0.3s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "linear-gradient(to bottom, rgba(2, 6, 23, 0.7), rgba(2, 6, 23, 0.9)), url('https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&w=2000&q=80')",
        'benefits-pattern': "linear-gradient(to right, rgba(2, 6, 23, 0.8), rgba(2, 6, 23, 0.95)), url('https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&w=2000&q=80')",
        'demo-pattern': "linear-gradient(to bottom, rgba(2, 6, 23, 0.9), rgba(2, 6, 23, 0.7)), url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&w=2000&q=80')",
        'testimonials-pattern': "linear-gradient(to right, rgba(2, 6, 23, 0.8), rgba(2, 6, 23, 0.9)), url('https://images.unsplash.com/photo-1488970572293-32bf9e2f6b69?auto=format&w=2000&q=80')",
        'features-pattern': "linear-gradient(to bottom, rgba(2, 6, 23, 0.85), rgba(2, 6, 23, 0.95)), url('https://images.unsplash.com/photo-1517414204284-fb7e98d2e01e?auto=format&w=2000&q=80')",
        'faq-pattern': "linear-gradient(to right, rgba(2, 6, 23, 0.9), rgba(2, 6, 23, 0.8)), url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&w=2000&q=80')",
        'cta-pattern': "linear-gradient(to bottom, rgba(2, 6, 23, 0.8), rgba(2, 6, 23, 0.9)), url('https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&w=2000&q=80')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
