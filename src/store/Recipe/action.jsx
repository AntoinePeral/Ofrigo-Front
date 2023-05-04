export const FETCH_RECIPE = "FETCH_RECIPE";
export const SAVE_RECIPE = "SAVE_RECIPE";

export const fetchRecipe = (id) => ({
  type: FETCH_RECIPE,
  id,
});

export const saveRecipe = (recipe) => ({
  type: SAVE_RECIPE,
  recipe,
});
