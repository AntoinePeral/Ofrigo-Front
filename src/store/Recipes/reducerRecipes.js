import {
  testRecipesWithAllIngredients,
  testRecipesWithoutAllIngredients,
} from "../../testData";
import { TOGGLE_RECIPES, SAVE_RECIPES } from "../../store/Recipes/action";
import recipesMiddleware from "../../middleware/recipesMiddleware";

console.log(recipesMiddleware);
const initialState = {
  recipes: [],
  source: "testRecipesWithAllIngredients", // stockage de la source actuelle
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_RECIPES:
      return {
        ...state,
        source: action.payload,
        recipes:
          action.payload === "testRecipesWithAllIngredients"
            ? testRecipesWithAllIngredients
            : testRecipesWithoutAllIngredients,
      };
    case SAVE_RECIPES:
      return { ...state, recipes: action.recipes };
    default:
      return state;
  }
}

export default reducer;
