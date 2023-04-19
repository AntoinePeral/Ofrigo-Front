import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import SearchBar from "./Main/SearchBar";
import ShoppingCart from "./Main/ShoppingCart";
import Recipes from "./Main/Recipes";
import Footer from "./Footer";
import Profile from "../pages/Profile.jsx";
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import Logout from "../pages/Logout.jsx";
import CreateAccountPage from "../pages/CreateAccountPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import React from "react";
import FilterButton from "./Main/FilterButton";

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
        <Header />
        <FilterButton />
        <SearchBar />
        <ShoppingCart />
        <Routes>
          <Route path="/profil" element={<Profile />} />
          <Route path="/accueil" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/deconnexion" element={<Logout />} />
          <Route path="/creer-compte" element={<CreateAccountPage />} />
          <Route path="/connexion" element={<LoginPage />} />
          <Route path="/" element={<Recipes />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
