import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "../../utils/theme";
import { LikeCard } from "../../components/Card";
import ThemeToggleButton from "../../components/ThemeToggle";

export default function Home() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      return true;
    }
    if (savedTheme === "light") {
      return false;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const currentTheme = isDark ? darkTheme : lightTheme;
  const toggleTheme = () => {
    setIsDark((prevIsDark) => {
      const newIsDark = !prevIsDark;
      localStorage.setItem("theme", newIsDark ? "dark" : "light");
      return newIsDark;
    });
  };
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <LikeCard />
        <ThemeToggleButton onToggle={toggleTheme} isDark={isDark} />
      </ThemeProvider>
    </>
  );
}
