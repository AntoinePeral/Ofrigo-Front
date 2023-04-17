import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import SearchBar from "./Main/SearchBar";
import ShoppingCart from "./Main/ShoppingCart";
import Toogle from "./Main/Toggle";
import Recipes from "./Main/Recipes";
import Footer from "./Footer";
import Profile from "../pages/Profile.jsx";
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import Logout from "../pages/Logout.jsx";
import React from "react";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <SearchBar />
        <ShoppingCart />
        <Toogle />
        <Routes>
          <Route path="/profil" element={<Profile />} />
          <Route path="/accueil" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/deconnexion" element={<Logout />} />
          <Route path="/" element={<Recipes />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
