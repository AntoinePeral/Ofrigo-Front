// React imports
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages imports
import Recipes from "../pages/Recipies.jsx";
import RecipeDetails from "../pages/RecipeDetails";
import Profile from "../pages/Profile.jsx";
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import Logout from "../pages/Logout.jsx";
import CreateAccountPage from "../pages/CreateAccountPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import NotFound from "../pages/NotFound.jsx";
import UpdateAccount from "../pages/UpdateAccountPage.jsx";
import CGU from "../pages/CGU.jsx";
import CGV from "../pages/CGV.jsx";
import About from "../pages/About.jsx";

// Components imports
import Header from "./Header";
import Footer from "./Footer";
import Ingredients from "./Main/Stock";

// Material-UI imports
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import { CssBaseline, Box } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});

function App() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          top: 65,
          width: screenSize.width,
          height: screenSize.height - 280,
          paddingBottom: "30px", // Padding-bottom pour prendre en compte la hauteur du footer
          minHeight: "calc(100% - 65px - 30px)", // Ajoutez cette ligne pour le minHeight
        }}
      >
        <Router>
          <Header />
          <Routes>
            <Route path="/profil" element={<Profile />} />
            <Route path="/accueil" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/deconnexion" element={<Logout />} />
            <Route path="/creer-compte" element={<CreateAccountPage />} />
            <Route path="/connexion" element={<LoginPage />} />
            <Route path="/" element={<Home />} />

            <Route path="*" element={<NotFound />} />
            <Route path="/CGU" element={<CGU />} />
            <Route path="/CGV" element={<CGV />} />
            <Route path="/About" element={<About />} />
            <Route path="/profil/stock" element={<Ingredients />} />
            <Route path="/recette" element={<Recipes />} />
            <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
            <Route path="/UpdateAccount" element={<UpdateAccount />} />
          </Routes>
          <Footer />
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
