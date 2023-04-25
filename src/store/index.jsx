import { combineReducers } from "redux";

import reducerFilter from "./Filter/reducerFilter";
import reducerHeader from "./Header/reducerHeader";
import reducerRecipes from "./Recipes/reducerRecipes";
import reducerSearch from "./Search/reducerSearch";
import reducerStock from "./Stock/reducerStock";

const rootReducer = combineReducers({
  reducerFilter: reducerFilter,
  reducerHeader: reducerHeader,
  reducerRecipes: reducerRecipes,
  reducerSearch: reducerSearch,
  reducerStock: reducerStock,
});
export default rootReducer;
