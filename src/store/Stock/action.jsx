export const FILTER_INGREDIENT = "FILTER_INGREDIENT";
export const SAVE_CATEGORYS = "SAVE_CATEGORYS";
export const FETCH_CATEGORYS = "FETCH_CATEGORYS";
export const SORT_INGREDIENT = "SORT_INGREDIENT";
export const FILTER_INGREDIENT_BY_CATEGORYS = "FILTER_INGREDIENT_BY_CATEGORYS";
export const SAVE_USER_STOCK_INGREDIENT = "SAVE_USER_STOCK_INGREDIENT"
export const FETCH_INGREDIENT_STOCK = "FETCH_INGREDIENT_STOCK";
export const SAVE_INGREDIENT_STOCK = "SAVE_INGREDIENT_STOCK"

export const saveCategorys = (categorys) => ({
    type: SAVE_CATEGORYS,
    categorys
});

export const FetchCategorys = () => ({
    type: FETCH_CATEGORYS
});

export const FetchIngredientsStock = () => ({
  type: FETCH_INGREDIENT_STOCK,
});

export const SortIngredient = () => ({
    type: SORT_INGREDIENT
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
      ingredient.label.toLowerCase().includes(onChangeInput.toLowerCase()),
      
    ),
  });

  export const saveIngredientsStock = (ingredients) => ({
    type: SAVE_INGREDIENT_STOCK,
    ingredients,
  })

  export const filterCategory = (categorysSelect, ingredientList) => ({
    type: FILTER_INGREDIENT_BY_CATEGORYS,

    listFilter: ingredientList.filter((ingredient) =>
        
        ingredient.category[0].label.toLowerCase().includes(categorysSelect.toLowerCase()),
    )
  
  

})


