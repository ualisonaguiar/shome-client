// src/components/TopMenu.jsx
import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

export default function BarraSistema() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo / Nome do sistema */}
        <Typography variant="h6">
          <Button color="inherit" component={RouterLink} to="/">
            GFIN
          </Button>
        </Typography>

        {/* Botões principais */}

        {/* Menu Dropdown */}
        <Button color="inherit" onClick={handleOpen}>
          Cadastro
        </Button>

        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem component={RouterLink} to="/usuarios" onClick={handleClose}>
            Usuário
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
