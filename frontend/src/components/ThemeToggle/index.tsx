import { IconButton } from "@mui/material";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
interface IThemeToggleButton {
  onToggle: () => void;
  isDark: boolean;
}
export default function ThemeToggleButton({
  onToggle,
  isDark,
}: IThemeToggleButton) {
  return (
    <IconButton onClick={onToggle} color="inherit">
      {isDark ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
}
