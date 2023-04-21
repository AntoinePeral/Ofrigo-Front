import{
       FILTER_INGREDIENT,
       UPDATEFILTERLIST,
       REMOVEANINGREDIENTFROMLIST,
       SAVE_INGREDIENTS,
       CLEAR_LIST_INGREDIENT,
} from "./action";

const initialState = {
  
  ingredientList: [   

  ],

  listFilter: [

  
  ],

  proposedIngredient: [

  ],

 

};

function reducerSearch(state = initialState, action) {
  switch (action.type) {
    default:
      case FILTER_INGREDIENT:
      
        return{...state,
          listFilter: action.listFilter,
          
        }
      
      case UPDATEFILTERLIST:

        return{...state,
          proposedIngredient: action.proposedIngredient,
          listFilter: ""
        };


      case REMOVEANINGREDIENTFROMLIST:
        return{...state,
          proposedIngredient: action.proposedIngredient
        };

      case SAVE_INGREDIENTS:
        return{...state,
          ingredientList: action.ingredients
        };
      
      case CLEAR_LIST_INGREDIENT:
        return{...state,
          listFilter: ""}
  }
}

export default reducerSearch;
