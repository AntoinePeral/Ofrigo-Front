import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Recipes from "../pages/Recipies.jsx";
import RecipeDetails from "../pages/RecipeDetails";
import Footer from "./Footer";
import Profile from "../pages/Profile.jsx";
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import Logout from "../pages/Logout.jsx";
import CreateAccountPage from "../pages/CreateAccountPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import NotFound from "../pages/NotFound.jsx";
import CGU from "../pages/CGU.jsx";
import CGV from "../pages/CGV.jsx";
import Copyright from "../pages/Copyright.jsx";
import Ingredients from "./Main/Stock";
import { React, useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

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
      {" "}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          top: 65,
          width: screenSize.width,
          height: screenSize.height - 280,
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
            <Route path="/" element={<Recipes />} />

            <Route path="*" element={<NotFound />} />
            <Route path="/CGU" element={<CGU />} />
            <Route path="/CGV" element={<CGV />} />
            <Route path="/Copyright" element={<Copyright />} />
            <Route path="/profil/stock" element={<Ingredients />} />
            <Route path="/recette" element={<Recipes />} />
            <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
