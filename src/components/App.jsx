import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Header";
import Recipes from "../pages/Recipies.jsx";
import Footer from "./Footer";
import Profile from "../pages/Profile.jsx";
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import Logout from "../pages/Logout.jsx";
import CreateAccountPage from "../pages/CreateAccountPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import NotFound from "../pages/NotFound.jsx";
import React from "react";
import FilterButton from "./Main/FilterButton";
import CGU from "../pages/CGU.jsx";
import CGV from "../pages/CGV.jsx";
import Copyright from "../pages/Copyright.jsx";
import Ingredients from "./Main/Stock";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Router>
        {/* <Header /> */}
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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
