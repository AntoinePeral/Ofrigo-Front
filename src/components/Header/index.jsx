import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../pictures/frigo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

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
              to="/recipes"
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
