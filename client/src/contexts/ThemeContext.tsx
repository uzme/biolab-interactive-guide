import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type ThemePreference = Theme | "system";

interface ThemeContextType {
  theme: Theme;
  themePreference: ThemePreference;
  toggleTheme?: () => void;
  useSystemTheme?: () => void;
  switchable: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  switchable?: boolean;
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  switchable = false,
}: ThemeProviderProps) {
  const getSystemTheme = (): Theme => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const [themePreference, setThemePreference] = useState<ThemePreference>(() => {
    if (!switchable) return defaultTheme;
    const stored = localStorage.getItem("biolab-theme-preference");
    return stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
  });
  const [theme, setTheme] = useState<Theme>(() => themePreference === "system" ? getSystemTheme() : themePreference);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const applyPreference = () => setTheme(themePreference === "system" ? (media.matches ? "dark" : "light") : themePreference);
    applyPreference();
    if (themePreference !== "system") return undefined;
    media.addEventListener("change", applyPreference);
    return () => media.removeEventListener("change", applyPreference);
  }, [themePreference]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    if (switchable) localStorage.setItem("biolab-theme-preference", themePreference);
  }, [theme, themePreference, switchable]);

  const toggleTheme = switchable
    ? () => {
        setThemePreference((preference) => {
          const activeTheme = preference === "system" ? getSystemTheme() : preference;
          return activeTheme === "light" ? "dark" : "light";
        });
      }
    : undefined;
  const useSystemTheme = switchable ? () => setThemePreference("system") : undefined;

  return (
    <ThemeContext.Provider value={{ theme, themePreference, toggleTheme, useSystemTheme, switchable }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
