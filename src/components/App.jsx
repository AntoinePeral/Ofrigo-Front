<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
=======
import React from "react";


>>>>>>> origin/feature_Recipes_Recipe
import Header from "./Header";
import SearchBar from "./Main/SearchBar";
import ShoppingCart from "./Main/ShoppingCart";
import Recipes from "./Main/Recipes";
import Footer from "./Footer";
import Profile from "../pages/Profile.jsx";
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import Logout from "../pages/Logout.jsx";
import React from "react";
import FilterButton from "./Main/FilterButton";


function App() {

  return (
<<<<<<< HEAD
    <div>
      <Router>
        <Header />
        <FilterButton />
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
=======
    <div className="App">
      <Header />
      <FilterButton />
      <SearchBar />
      <ShoppingCart />
      <Recipes />
      <Footer />
>>>>>>> origin/feature_Recipes_Recipe
    </div>
  );
}

export default App;
