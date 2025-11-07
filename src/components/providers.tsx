"use client";

import GlobalStyles from "@/styles/GlobalStyles";
import { theme } from "@/theme";
import type { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
