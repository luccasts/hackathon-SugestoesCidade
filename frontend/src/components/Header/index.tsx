import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router";
import ThemeToggleButton from "../ThemeToggle";

import {
  Container,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import logo from "../../assets/img/logo.png";
import { useState } from "react";

type AnchorElType = null | HTMLElement;
interface IHaderComponent {
  onToggle: () => void;
  isDark: boolean;
}
export default function HeaderComponent({ onToggle, isDark }: IHaderComponent) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAlchorEl] = useState<AnchorElType>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAlchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAlchorEl(null);
  };
  const menuItens = ["Home", "Rank", "Sobre"];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="default" position="static">
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: "flex",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={1}
              sx={{ flexGrow: 1 }}
            >
              <Box display={"flex"} component={Link} to={"/"}>
                <img width={100} src={logo} alt="Logo do SugeCity" />
              </Box>

              {/*  Deixar salvo para futuros projetos
              {isSmallScreen ? (
                <Drawer anchor="left" open={open} onClose={handleClose}>
                  <Box
                    bgcolor="primary.main"
                    color="primary.contrastText"
                    sx={{ width: 250, padding: 1 }}
                    role="presentation"
                    paddingTop={4}
                  >
                    {menuItens.map((text) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton onClick={handleClose}>
                          <ListItemText primary={text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </Box>
                </Drawer>
              ) : (
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose} component={Link} to="/">
                    PARALELEIPITOD
                  </MenuItem>
                  <MenuItem onClick={handleClose} component={Link} to="/home">
                    PARALELEIPITOD
                  </MenuItem>
                  <MenuItem onClick={handleClose} component={Link} to="/home">
                    PARALELEIPITOD
                  </MenuItem>
                  <MenuItem onClick={handleClose} component={Link} to="/home">
                    PARALELEIPITOD
                  </MenuItem>
                </Menu>
              )} */}
              {isSmallScreen ? (
                <>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-label="menu"
                    aria-expanded={open ? "true" : undefined}
                    sx={{
                      mr: 2,
                    }}
                    onClick={handleClick}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Drawer anchor="left" open={open} onClose={handleClose}>
                    <Box
                      bgcolor="primary.main"
                      color="primary.contrastText"
                      sx={{ width: 250, padding: 1 }}
                      role="presentation"
                      paddingTop={4}
                    >
                      {menuItens.map((text) => (
                        <ListItem key={text} disablePadding>
                          <ListItemButton onClick={handleClose}>
                            <ListItemText primary={text} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </Box>
                  </Drawer>
                </>
              ) : (
                ""
              )}
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 2,
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <Button color="primary" component={Link} to="/">
                Home
              </Button>
              <Button color="primary" component={Link} to="/rank">
                Rank
              </Button>
              <Button color="primary" component={Link} to="/sobre">
                Sobre
              </Button>
            </Box>
            <Box component={"div"}>
              <ThemeToggleButton onToggle={onToggle} isDark={isDark} />
              <Button
                variant="contained"
                component={Link}
                to={"/login"}
                color="primary"
              >
                Login
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
