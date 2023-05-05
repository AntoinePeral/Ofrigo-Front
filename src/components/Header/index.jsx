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
  Switch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import Logo from "../pictures/frigo.png";
import Logo from "../pictures/frigoLogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    first_name: localStorage.first_name,
    last_name: localStorage.last_name,
    role: "",
  });
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
    localStorage.removeItem("last_name");
    localStorage.removeItem("first_name");
    localStorage.removeItem("email");
    setUser({ first_name: "", last_name: "", role: "" });
    setIsLoggedOut(true);
  };

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
    axios
      .get("http://antoineperal-server.eddi.cloud/me/profile")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [jwtToken]);

  const handleDashboardClick = () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
    axios
      .get("http://antoineperal-server.eddi.cloud/admin/home")
      .then((response) => {
        setIsLoggedOut(false);
        setUser(response.data);
        window.location.replace("/admin/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (isLoggedOut) {
    return window.location.replace("/accueil");
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "#1C6EA4",
        background:
          "-moz-linear-gradient(left, #1C6EA4 0%, #2388CB 50%, #144E75 100%)",
        background:
          "-webkit-linear-gradient(left, #1C6EA4 0%, #2388CB 50%, #144E75 100%)",
        background:
          "linear-gradient(to right, #1C6EA4 0%, #2388CB 50%, #144E75 100%)",
      }}
    >
      <Toolbar>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleDrawerOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <img src={Logo} alt="Logo" style={{ height: "70px" }} />
          <Typography
            sx={{
              fontFamily: "Pacifico, cursive",
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            O'Frigo
          </Typography>
        </div>
        <div style={{ flex: 1 }}></div>
        <Drawer open={isOpen} onClose={handleDrawerClose}>
          <List sx={{ width: 250 }}>
            <ListItem
              button
              component={Link}
              to="/profil"
              onClick={handleDrawerClose}
            >
              <ListItemText primary="Frig-O-Matic" />
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
            {jwtToken && (
              <ListItem
                button
                component={Link}
                to="/profil/stock"
                onClick={handleDrawerClose}
              >
                <ListItemText primary="Stock" />
              </ListItem>
            )}
            {jwtToken && (
              <ListItem
                button
                component={Link}
                to="/UpdateAccount"
                onClick={handleDrawerClose}
              >
                <ListItemText primary="Profil" />
              </ListItem>
            )}
            <ListItem
              button
              component={Link}
              to="/connexion"
              onClick={handleDrawerClose}
            >
              <ListItemText primary="Connexion" />
            </ListItem>
            {jwtToken && (
              <ListItem
                button
                component={Link}
                to="/Accueil"
                onClick={handleLogout}
              >
                <ListItemText primary="Déconnexion" />
              </ListItem>
            )}
          </List>
        </Drawer>
        <Typography sx={{ fontWeight: "bold", color: "white" }}>
          {user.first_name} {user.last_name}
        </Typography>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {jwtToken ? (
            <Switch
              checked={true}
              onChange={handleLogout}
              inputProps={{ "aria-label": "Déconnexion" }}
            />
          ) : (
            <Switch
              checked={false}
              onChange={() => window.location.replace("/connexion")}
              inputProps={{ "aria-label": "Connexion" }}
            />
          )}
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
