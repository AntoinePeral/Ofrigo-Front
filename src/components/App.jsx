import Header from "./Header";
import FilterButton from "./Main/FilterButton";
import SearchBar from "./Main/SearchBar";
import ShoppingCart from "./Main/ShoppingCart";
import Toogle from "./Main/Toggle";
import Recipes from "./Main/Recipes";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <FilterButton />
      <SearchBar />
      <ShoppingCart />
      <Toogle />
      <Recipes />
      <Footer />
    </div>
  );
}

export default App;
