export const FETCH_RECIPES = "FETCH_RECIPES";
export const SAVE_RECIPES = "SAVE_RECIPES";
export const TOGGLE_RECIPES_SOURCE = "TOGGLE_RECIPES_SOURCE";

export const fetchRecipes = () => ({ type: FETCH_RECIPES });

export const saveRecipes = (recipes) => ({ type: SAVE_RECIPES, recipes });

export const toggleRecipesSource = (source) => ({
  type: TOGGLE_RECIPES_SOURCE,
  payload: source,
});
