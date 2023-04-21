export const FETCH_RECIPES = "FETCH_RECIPES";
export const FETCH_CATEGORYS = "FETCH_CATEGORYS";
export const SAVE_RECIPES = "SAVE_RECIPES";
export const TOGGLE_RECIPES = "TOGGLE_RECIPES";
export const SAVE_CATEGORYS = "SAVE_CATEGORYS"

export const fetchRecipes = () => ({ type: FETCH_RECIPES });

export const saveRecipes = (recipes) => ({ type: SAVE_RECIPES, recipes });

export const toggleRecipesSource = (newSource) => ({
  type: TOGGLE_RECIPES,
  payload: newSource,
});

export const saveCategory = (categorys) =>({type: SAVE_CATEGORYS, categorys });

export const fetchCategorys = () => ({type: FETCH_CATEGORYS});
