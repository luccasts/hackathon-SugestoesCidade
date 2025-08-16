import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3b82f6",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#64748b",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f9fafb",
      paper: "#ffffff",
    },
    text: {
      primary: "#1e293b",
      secondary: "#475569",
    },
    divider: "#e2e8f0",
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
    h1: { fontWeight: 700, fontSize: "2rem" },
    h2: { fontWeight: 600, fontSize: "1.5rem" },
    body1: { fontSize: "1rem", lineHeight: 1.5 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 16px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#ffffff",
          color: "#1e293b",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: "#1e293b",
          fontWeight: 500,
        },
        secondary: {
          color: "#475569",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          "&:hover": {
            backgroundColor: "#f1f5f9",
          },
          "&.Mui-selected": {
            backgroundColor: "#e2e8f0",
            color: "#1e293b",
            "&:hover": {
              backgroundColor: "#cbd5e1",
            },
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#60a5fa",
      contrastText: "#0f172a",
    },
    secondary: {
      main: "#94a3b8",
      contrastText: "#0f172a",
    },
    background: {
      default: "#0f172a",
      paper: "#1e293b",
    },
    text: {
      primary: "#f1f5f9",
      secondary: "#cbd5e1",
    },
    divider: "#334155",
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
    h1: { fontWeight: 700, fontSize: "2rem" },
    h2: { fontWeight: 600, fontSize: "1.5rem" },
    body1: { fontSize: "1rem", lineHeight: 1.5 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 16px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#1e293b",
          color: "#f1f5f9",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: "#f1f5f9",
          fontWeight: 500,
        },
        secondary: {
          color: "#cbd5e1",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          "&:hover": {
            backgroundColor: "#334155",
          },
          "&.Mui-selected": {
            backgroundColor: "#475569",
            color: "#f1f5f9",
            "&:hover": {
              backgroundColor: "#64748b",
            },
          },
        },
      },
    },
  },
});
