import React from "react";


import Header from "./Header";
import FilterButton from "./Main/FilterButton";
import SearchBar from "./Main/SearchBar";
import ShoppingCart from "./Main/ShoppingCart";
import Recipes from "./Main/Recipes";
import Footer from "./Footer";

function App() {

  return (
    <div className="App">
      <Header />
      <FilterButton />
      <SearchBar />
      <ShoppingCart />
      <Recipes />
      <Footer />
    </div>
  );
}

export default App;
