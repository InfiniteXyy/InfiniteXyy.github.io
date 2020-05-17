import { useState, useEffect } from "react";
import styled, { CreateStyled } from "@emotion/styled";

/**
 * A hook to get and update the current theme for dark mode
 * @returns [theme, toggleTheme] - [current theme, function to toggle theme]
 */
type ThemeType = "dark" | "light";
export function useTheme(): [ThemeType, () => void] {
  const storedTheme = typeof window !== "undefined" && window.localStorage.getItem("theme");
  const [theme, setTheme] = useState<ThemeType>((storedTheme as ThemeType) || "light");
  const toggleTheme = () =>
    setTheme((prevTheme) => {
      return prevTheme === "light" ? "dark" : "light";
    });
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", theme);
    }
  }, [theme]);
  return [theme, toggleTheme];
}

interface Theme {
  colors: {
    highlight: string;
    primary: string;
    secondary: string;
    background: string;
    muted: string;
  };
}
export const lightTheme: Theme = {
  colors: {
    highlight: "#498fe1",
    primary: "#4a4a4a",
    secondary: "#9b9b9b",
    background: "#fafafa",
    muted: "rgba(0,0,0,0.1)",
  },
};

export const darkTheme: Theme = {
  colors: {
    highlight: "#3673b1",
    primary: "rgba(255,255,255,0.87)",
    secondary: "rgba(255,255,255,0.75)",
    background: "#292a2d",
    muted: "rgba(255,255,255,0.1)",
  },
};

export default styled as CreateStyled<Theme>;
