import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../pictures/frigo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({ first_name: "", last_name: "" }); // ajout de l'état utilisateur

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  useEffect(() => { // utilisation de useEffect pour récupérer les informations de l'utilisateur connecté
    axios.get("http://kevin-lienard-server.eddi.cloud/me/profile").then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <AppBar position="fixed" sx={{ bgcolor: "grey.200" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleDrawerOpen}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={isOpen} onClose={handleDrawerClose}>
          <List sx={{ width: 250 }}>
            <ListItem
              button
              component={Link}
              to="/profil"
              onClick={handleDrawerClose}
            >
              <ListItemText primary="Profil" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/accueil"
              onClick={handleDrawerClose}
            >
              <ListItemText primary="Accueil" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/contact"
              onClick={handleDrawerClose}
            >
              <ListItemText primary="Contact" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/recette"
              onClick={handleDrawerClose}
            >
              <ListItemText primary="Recettes" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/connexion"
              onClick={handleDrawerClose}
            >
              
              <ListItemText primary="Connexion" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/deconnexion"
              onClick={handleDrawerClose}
            >
              
              <ListItemText primary="Déconnexion" />
            </ListItem>
            
          </List>
        </Drawer>
        <div style={{ flex: 1 }}>
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "50px", margin: "0 auto" }}
          />
        </div>
        <Typography sx={{ mr: 2 }}>{user.firstName} {user.lastName}</Typography> {/* ajout de l'affichage du nom et prénom de l'utilisateur */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
