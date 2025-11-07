import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html, body { height: 100%; }
  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.fonts.primary};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a { color: ${({ theme }) => theme.colors.accent}; text-decoration: none; }
  a:hover { color: ${({ theme }) => theme.colors.accentHover}; }

  html { scroll-behavior: smooth; }
  :target { scroll-margin-top: 90px; }

  button {
    font-family: inherit;
    cursor: pointer;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }
  button:hover {
    transform: translateY(-1px);
    opacity: 0.95;
  }
`;

export default GlobalStyles;
