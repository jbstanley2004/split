import baseConfig from "@midday/ui/tailwind.config";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
  presets: [baseConfig],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        bg: "#0B0B0B",
        text: "#FFFFFF",
        muted: "#A3A3A3",
        line: "#1E1E1E",
      },
      fontFamily: {
        jetbrains: ["var(--font-jetbrains)"],
      },
    },
  },
} satisfies Config;
