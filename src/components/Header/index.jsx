// Import des dépendances
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

// Composant Header
const Header = () => {

  // Initialisation des states
  const [isOpen, setIsOpen] = useState(false); // State pour gérer l'ouverture/fermeture du menu latéral
  const [user, setUser] = useState({ first_name: "", last_name: "" }); // State pour stocker les informations de l'utilisateur connecté
  const [isLoggedOut, setIsLoggedOut] = useState(false); // State pour gérer la déconnexion de l'utilisateur
  const jwtToken = localStorage.getItem("token"); // Récupération du token JWT stocké dans le LocalStorage du navigateur

  // Fonction pour ouvrir le menu latéral
  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  // Fonction pour fermer le menu latéral
  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  // Fonction pour gérer la déconnexion de l'utilisateur
  const handleLogout = () => {
    localStorage.removeItem("token"); // Suppression du token JWT dans le LocalStorage
    setUser({ first_name: "", last_name: "" }); // Réinitialisation des informations de l'utilisateur
    setIsLoggedOut(true); // Activation du state pour déclencher une redirection vers la page d'accueil
  };

  // Effet secondaire pour récupérer les informations de l'utilisateur connecté
  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`; // Ajout du token JWT dans les headers des requêtes HTTP
    axios
      .get("http://kevin-lienard-server.eddi.cloud/me/profile") // Requête HTTP pour récupérer les informations de l'utilisateur
      .then((response) => {
        setUser(response.data); // Stockage des informations de l'utilisateur dans le state correspondant
      })
      .catch((error) => {
        console.log(error);
      });
  }, [jwtToken]); // Déclenchement de l'effet uniquement si le token JWT est modifié

  // Redirection vers la page d'accueil si l'utilisateur se déconnecte
  if (isLoggedOut) {
    return window.location.replace("/accueil");
  }

  // Rendu du composant
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
            <ListItem button component={Link} to="/profil/stock" onClick={handleDrawerClose}>
              <ListItemText primary="Stock" />
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
