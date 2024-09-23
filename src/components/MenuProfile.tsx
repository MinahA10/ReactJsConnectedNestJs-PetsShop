import React, { MouseEvent, useState } from "react";
import {
  Avatar,
  Badge,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { styled, Theme } from "@mui/material/styles";
import { useAuth } from "../services/useAuth";
import Typography from "@mui/material/Typography";

const StyledBadge = styled(Badge)(({ theme }: { theme: Theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const MenuProfile: React.FC = () => {
  const user = useAuth().user;
  const { logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option: "Profile" | "Setting" | "Logout") => {
    if (option === "Logout") {
      logout();
    }
    handleClose();
  };

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
          onClick={handleClick}
        >
          <Avatar alt={user?.username} src="/static/images/avatar/1.jpg" />
        </StyledBadge>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Typography
            variant="h6"
            noWrap
            component="span"
            sx={{ marginLeft: "40px" }}
            color="black"
          >
            {user?.username}
          </Typography>
          <MenuItem onClick={() => handleMenuItemClick("Profile")}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Setting")}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Logout")}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </MenuItem>
        </Menu>
      </Stack>
    </div>
  );
};

export default MenuProfile;
