export const FILTER_INGREDIENT = "FILTER_INGREDIENT";
export const SAVE_CATEGORYS = "SAVE_CATEGORYS";
export const FETCH_CATEGORYS = "FETCH_CATEGORYS";
export const SORT_INGREDIENT = "SORT_INGREDIENT";
export const FILTER_INGREDIENT_BY_CATEGORYS = "FILTER_INGREDIENT_BY_CATEGORYS";
export const SAVE_USER_STOCK_INGREDIENT = "SAVE_USER_STOCK_INGREDIENT";
export const FETCH_INGREDIENT_STOCK = "FETCH_INGREDIENT_STOCK";
export const SAVE_LIST_INGREDIENT = "SAVE_LIST_INGREDIENT";
export const UPDATE_USER_STOCK_INGREDIENT = "UPDATE_USER_STOCK_INGREDIENT";

export const saveCategorys = (categorys) => ({
  type: SAVE_CATEGORYS,
  categorys,
});

export const Update_User_Stock_Ingredient = (ListUserIngredient) => ({
  type: UPDATE_USER_STOCK_INGREDIENT,
  ListUserIngredient,
});

export const FetchCategorys = () => ({
  type: FETCH_CATEGORYS,
});

export const FetchIngredientsStock = () => ({
  type: FETCH_INGREDIENT_STOCK,
});

export const SortIngredient = () => ({
  type: SORT_INGREDIENT,
});

export const saveUserStockIngredient = (ingredients) => ({
  type: SAVE_USER_STOCK_INGREDIENT,
  ingredients,
});

export const filterIngredient = (onChangeInput, listIngredient) => ({
  type: FILTER_INGREDIENT,

  onChangeInput,
  listIngredient,
  listFilter: listIngredient.filter((ingredient) =>
    ingredient.label.toLowerCase().includes(onChangeInput.toLowerCase())
  ),
});

export const saveListIngredients = (ingredients) => ({
  type: SAVE_LIST_INGREDIENT,
  ingredients,
});

export const filterIngredientByCategory = (
  categorysSelect,
  ingredientList
) => ({
  type: FILTER_INGREDIENT_BY_CATEGORYS,

  listFilter: ingredientList.filter((ingredient) =>
    ingredient.category[0].label
      .toLowerCase()
      .includes(categorysSelect.toLowerCase())
  ),
});
