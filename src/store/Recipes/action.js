export const FETCH_RECIPES = "FETCH_RECIPES";
export const SAVE_RECIPES = "SAVE_RECIPES";
export const TOGGLE_RECIPES = "TOGGLE_RECIPES";

export const fetchRecipes = () => ({ type: FETCH_RECIPES });

export const saveRecipes = (recipes) => ({ type: SAVE_RECIPES, recipes });

export const toggleRecipesSource = (newSource) => ({
  type: TOGGLE_RECIPES,
  payload: newSource,
});
