import {
  testRecipesWithAllIngredients,
  testRecipesWithoutAllIngredients,
} from "../../testData";
import { TOGGLE_RECIPES } from "../../store/Recipes/action";
import recipesMiddleware from "../../middleware/recipesMiddleware"

console.log(recipesMiddleware)
const initialState = {
  recipes: testRecipesWithAllIngredients,
  source: "testRecipesWithoutAllIngredients", // stockage de la source actuelle
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
    default:
      return state;
  }
}

export default reducer;
