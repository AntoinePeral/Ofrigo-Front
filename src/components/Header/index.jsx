import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,

} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../pictures/frigo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({ first_name: "", last_name: "" });
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const jwtToken = localStorage.getItem("token");

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser({ first_name: "", last_name: "" });
    setIsLoggedOut(true);
  };

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
    axios
      .get("http://kevin-lienard-server.eddi.cloud/me/profile")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [jwtToken]);

  if (isLoggedOut) {
    return window.location.replace("/accueil");

  }

  return (
    <AppBar position="fixed" sx={{ bgcolor: "grey.200" }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={handleDrawerOpen} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Drawer open={isOpen} onClose={handleDrawerClose}>
          <List sx={{ width: 250 }}>
            <ListItem button component={Link} to="/profil" onClick={handleDrawerClose}>
              <ListItemText primary="Profil" />
            </ListItem>
            <ListItem button component={Link} to="/accueil" onClick={handleDrawerClose}>
              <ListItemText primary="Accueil" />
            </ListItem>
            <ListItem button component={Link} to="/contact" onClick={handleDrawerClose}>
              <ListItemText primary="Contact" />
            </ListItem>
            <ListItem button component={Link} to="/recette" onClick={handleDrawerClose}>
              <ListItemText primary="Recettes" />
            </ListItem>
            <ListItem button component={Link} to="/connexion" onClick={handleDrawerClose}>
              <ListItemText primary="Connexion" />
            </ListItem>
            {jwtToken && (
              <ListItem button component={Link} to="/Accueil" onClick={handleLogout}>
                <ListItemText primary="Déconnexion" />
              </ListItem>
            )}
          </List>
        </Drawer>
        <div style={{ flex: 1 }}>
          <img src={Logo} alt="Logo" style={{ height: "50px", margin: "0 auto" }} />
        </div>
        {jwtToken && (
  <Typography sx={{ mr: 2, fontWeight: "bold", color: "black" }}>{user.first_name} {user.last_name}</Typography>
)}

      </Toolbar>
    </AppBar>
  );
};

export default Header;
