export const FILTER_INGREDIENT = "FILTER_INGREDIENT";
export const UPDATEFILTERLIST = "UPDATEFILTERLIST";
export const RESETFILTERLIST = "RESETFILTERLIST";
export const REMOVEANINGREDIENTFROMLIST = "REMOVEANINGREDIENTFROMLIST";
export const SAVE_INGREDIENTS = "SAVE_INGREDIENT";
export const FETCH_INGREDIENT = "FETCH_INGREDIENT";

export const filterIngredient = (onChangeInput, listIngredient) =>({
    type : FILTER_INGREDIENT,
    onChangeInput,
    listIngredient,
    listFilter: listIngredient.filter(element => element.label.toLowerCase().includes(onChangeInput.toLowerCase())),

});

export const UpdateFilterList =(ingredient, proposedIngredient) => ({
    type : UPDATEFILTERLIST,
    proposedIngredient: ingredient 
    ? proposedIngredient.includes(ingredient) 
      ? proposedIngredient 
      : [...proposedIngredient, ingredient]
    : proposedIngredient
});

export const ResetFilterList =(ingredient, proposedIngredient) => ({
    type : RESETFILTERLIST,
    proposedIngredient: ""
});

export const RemoveAnIngredientFromList =(ingedientToRemove, proposedIngredient) =>({
    type : REMOVEANINGREDIENTFROMLIST,
    proposedIngredient:proposedIngredient.filter(ingredient => ingredient !== ingedientToRemove)
});

export const saveIngredients = (ingredients) => ({
    type: SAVE_INGREDIENTS,
    ingredients
});

export const FetchIngredients = () => ({
    type: FETCH_INGREDIENT
});