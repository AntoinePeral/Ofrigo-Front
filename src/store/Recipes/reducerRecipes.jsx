import {
  testRecipesWithAllIngredients,
  testRecipesWithoutAllIngredients,
} from "../../testData";
import { TOGGLE_RECIPES, SAVE_RECIPES, SAVE_CATEGORYS } from "./action";
import recipesMiddleware from "../../middleware/recipesMiddleware";
import categorysMiddleware from "../../middleware/categorysMiddleware";

const initialState = {
  recipes: [],
  categorys: [],
  source: "testRecipesWithAllIngredients", // stockage de la source actuelle
};

function reducerRecipes(state = initialState, action) {
  
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

    case SAVE_CATEGORYS:
      return{...state,
        categorys: action.categorys
      };
    default:
      return state;
    }
  }

export default reducerRecipes;
