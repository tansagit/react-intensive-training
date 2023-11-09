import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import { useShoppingCart } from "../hooks/useShoppingCart";
export default function Header() {
  const { user, logout } = useAuth();
  const { getTotalCartAmount } = useShoppingCart();
  const total = getTotalCartAmount();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          onClick={() => {
            navigate("/");
          }}
          aria-label="Home"
          sx={{ mr: 2 }}>
          <HomeIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          React intensive practice
        </Typography>
        <div>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            Welcome, {user.userName}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit">
              <AccountCircle />
            </IconButton>
          </Typography>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <MenuItem
              onClick={() => {
                navigate("/profile");
              }}>
              Profile
            </MenuItem>
            <MenuItem onClick={() => logout()}>Log out</MenuItem>
          </Menu>
        </div>
        <div>
          <IconButton
            onClick={() => {
              navigate("/cart");
            }}
            size="large"
            aria-label="cart"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit">
            <Badge badgeContent={total} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
