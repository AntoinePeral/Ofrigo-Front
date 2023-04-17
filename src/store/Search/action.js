export const FILTER_INGREDIENT = "FILTER_INGREDIENT"
export const UPDATEFILTERLIST = "UPDATEFILTERLIST"
export const RESETFILTERLIST = "RESETFILTERLIST"
export const REMOVEANINGREDIENTFROMLIST = "REMOVEANINGREDIENTFROMLIST"

export const filterIngredient = (onChangeInput, listIngredient) =>({
    type : FILTER_INGREDIENT,
    onChangeInput,
    listIngredient,
    listFilter: listIngredient.filter(element => element.toLowerCase().includes(onChangeInput.toLowerCase())),

});

export const UpdateFilterList =(ingredient, proposedIngredient) => ({
    type : UPDATEFILTERLIST,
    proposedIngredient: proposedIngredient.includes(ingredient) 
    ? proposedIngredient 
    : [...proposedIngredient, ingredient]
})

export const ResetFilterList =(ingredient, proposedIngredient) => ({
    type : RESETFILTERLIST,
    proposedIngredient: ""
})

export const RemoveAnIngredientFromList =(ingedientToRemove, proposedIngredient) =>({
    type : REMOVEANINGREDIENTFROMLIST,
    proposedIngredient:proposedIngredient.filter(ingredient => ingredient !== ingedientToRemove)
})