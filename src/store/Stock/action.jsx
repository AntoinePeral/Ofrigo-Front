export const FILTER_INGREDIENT = "FILTER_INGREDIENT";
export const SAVE_CATEGORYS = "SAVE_CATEGORYS";
export const FETCH_CATEGORYS = "FETCH_CATEGORYS";
export const SORT_INGREDIENT = "SORT_INGREDIENT";

export const saveCategorys = (categorys) => ({
    type: SAVE_CATEGORYS,
    categorys
});

export const FetchCategorys = () => ({
    type: FETCH_CATEGORYS
});

export const SortIngredient = () => ({
    type: SORT_INGREDIENT
});

export const filterIngredient = (onChangeInput, listIngredient) => ({
    type: FILTER_INGREDIENT,

    onChangeInput,
    listIngredient,
    filteredIngredientList: listIngredient.filter((ingredient) =>
      ingredient.label.toLowerCase().includes(onChangeInput.toLowerCase()),
      
    ),
  });
