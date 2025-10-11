module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#0a0a0a", // Deep space foundation
        secondary: "#1a1a1a", // Subtle surface elevation
        accent: "#00d4ff", // Electric blue for interactive elements
        
        // Background Colors
        background: "#000000", // Pure black for maximum contrast
        surface: "#2a2a2a", // Card backgrounds and containers
        
        // Text Colors
        "text-primary": "#ffffff", // High contrast white
        "text-secondary": "#a0a0a0", // Clear hierarchy gray
        
        // Status Colors
        success: "#39ff14", // Neon green for achievements
        warning: "#ff9500", // Warm orange for attention
        error: "#ff3366", // Vibrant red for problems
        
        // Border Color
        border: "rgba(255, 255, 255, 0.1)", // Subtle borders
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
        jetbrains: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 212, 255, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionTimingFunction: {
        'natural': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms',
      },
      boxShadow: {
        'glow-accent': '0 0 20px rgba(0, 212, 255, 0.2)',
        'glow-accent-strong': '0 0 30px rgba(0, 212, 255, 0.4)',
        'depth': '0 10px 40px rgba(0, 0, 0, 0.8)',
        'depth-strong': '0 20px 60px rgba(0, 0, 0, 0.9)',
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}