/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './index.html',
    './blog.html',
    './workshop.html',
    './services/**/*.html',
    './lead-magnets/**/*.html',
    './public/**/*.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './assets/js/**/*.{js,ts}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["SF Pro Display", "Inter", "sans-serif"],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
          green: "#65E48F",
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        luxury: {
          50: "#FFFFFF",
          100: "#F5F5F7",
          200: "#E5E5EA",
          300: "#B9B9BE",
          400: "#96969C",
          500: "#78787F",
          600: "#5A5A64",
          700: "#46464F",
          800: "#32323C",
          900: "#1E1E23",
          950: "#111117",
        },
        "accent-green": {
          DEFAULT: "rgb(var(--color-accent-green) / <alpha-value>)",
          dark: "rgb(var(--color-accent-green-dark) / <alpha-value>)",
        },
        glass: {
          bg: "rgb(var(--color-glass-bg) / <alpha-value>)",
          border: "rgb(var(--color-glass-border) / <alpha-value>)",
        }
      },
      backgroundImage: {
        "luxury-gradient": "linear-gradient(to bottom, rgba(var(--gradient-start), 0.1), rgba(var(--gradient-end), 0))",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-out': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(10px)' }
        },
        'fade-in-slow': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px 5px rgba(255, 255, 255, 0.15)' },
          '50%': { boxShadow: '0 0 30px 8px rgba(255, 255, 255, 0.25)' }
        },
        'rise-slow': {
          '0%': { transform: 'translateY(0) translateX(-50%)', opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { transform: 'translateY(-100%) translateX(-50%)', opacity: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-out': 'fade-out 0.5s ease-out forwards',
        'fade-in-slow': 'fade-in-slow 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.7s ease-out forwards',
        'glow-pulse': 'glow-pulse 3s infinite',
        'rise-slow': 'rise-slow 8s ease-in-out infinite'
      },
      // Phase 2 Fix: Touch-friendly utilities for Xiaomi Poco and WCAG compliance
      minHeight: {
        'touch': '44px',      // WCAG AAA touch target minimum
        'touch-aa': '24px',   // WCAG AA touch target minimum
      },
      minWidth: {
        'touch': '44px',      // WCAG AAA touch target minimum
        'touch-aa': '24px',   // WCAG AA touch target minimum
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      }
    }
  },
  plugins: [],
} 