"use client";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme/theme";
import { GlobalStyles } from "@/theme/globalStyles";
import { useTheme } from "@/hooks/useTheme";
import StyledComponentsRegistry from "./lib/registry";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDarkMode = useTheme();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
