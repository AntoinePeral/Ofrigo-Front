import { combineReducers } from "redux";

import reducerFilter from "./Filter/reducerFilter";
import reducerHeader from "./Header/reducerHeader";
import reducerRecipes from "./Recipes/reducerRecipes";
import reducerSearch from "./Search/reducerSearch";

const rootReducer = combineReducers({
  reducerFilter: reducerFilter,
  reducerHeader: reducerHeader,
  reducerRecipes: reducerRecipes,
  reducerSearch: reducerSearch,
});
export default rootReducer;
