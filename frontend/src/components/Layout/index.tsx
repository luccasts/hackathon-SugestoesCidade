import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "../../utils/theme";

import { Outlet } from "react-router";
import HeaderComponent from "../Header";
import { Box } from "@mui/material";

export default function Layout() {
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
        <Box display={"flex"} gap={1} flexDirection={"column"}>
          <HeaderComponent onToggle={toggleTheme} isDark={isDark} />

          <Outlet />
        </Box>
      </ThemeProvider>
    </>
  );
}
