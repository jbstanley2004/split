export const theme = {
  colors: {
    background: "#0A0A0A",
    surface: "#111111",
    textPrimary: "#F5F5F5",
    textSecondary: "#AAAAAA",
    accent: "#FF6600",
    accentHover: "#FF8533",
    border: "#222222",
  },
  fonts: {
    primary:
      "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif",
  },
  spacing: (factor: number) => `${factor * 8}px`,
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
  shadows: {
    card: "0 6px 18px rgba(0,0,0,0.35)",
  },
} as const;

export type AppTheme = typeof theme;
