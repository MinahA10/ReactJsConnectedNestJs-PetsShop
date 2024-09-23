import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { useAuth } from "../services/useAuth";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import MenuProfile from "./MenuProfile";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#424242"),
  backgroundColor: "#424242",
  "&:hover": {
    backgroundColor: "#424242",
  },
}));

const Header = () => {
  const isLoggedIn = useAuth().isLoggedIn();
  const navigate = useNavigate();
  return (
    <AppBar position="static" sx={{ backgroundColor: "#bbd4db" }}>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          <Typography variant="h6" noWrap component="span" color="black">
            Pets Shop
          </Typography>
        </Typography>

        <div style={{ flexGrow: 1 }} />
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        {isLoggedIn ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={() => navigate("/")} color="inherit">
              <ShoppingCart />
            </IconButton>

            <IconButton color="inherit">
              <MenuProfile />
            </IconButton>
          </div>
        ) : (
          <LoginButton color="primary" href="/signin" variant="contained">
            Se Connecter
          </LoginButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
