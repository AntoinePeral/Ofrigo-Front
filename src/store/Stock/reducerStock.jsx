import{
    SAVE_CATEGORYS, 
    SORT_INGREDIENT, 
    FILTER_INGREDIENT, 
    FILTER_INGREDIENT_BY_CATEGORYS,
    SAVE_USER_STOCK_INGREDIENT,
    FETCH_INGREDIENT_STOCK,
    SAVE_INGREDIENT_STOCK,
} from "./action";

const initialState = {
  
    categoryList: [   
  
    ],

    UserIngredient:[

    ],

    UserProfil:[
        {
            "id":1,
            "last_name" : "Lienard",
            "first_name" : "Kevin",
            "email" : "kevin@gmail.com",
            "role" : "admin",
            "ingredient" : [
                {
                    "label" : "Farine",
                    "unit" : "mg",
                    "categorie_id" : 5,
                },
                {
                    "label" : "Beurre",
                    "unit" : "mg",
                    "categorie_id" : 5,
                },
                {
                    "label" : "Chocolat",
                    "unit" : "mg",
                    "categorie_id" : 5,
                },
            ],
        }
    ],

    ingredientUserStock:[
        {
            "label":"Farine",
            "isStoked":"true",
        }
    ],

    filteredIngredientList:[

    ],
   
    ListFilterStock:[

    ],
  
  };

function reducerStock(state = initialState, action) {
    
    switch (action.type) {
        default:
            case FILTER_INGREDIENT:
                
                return { ...state, ListFilterStock: action.listFilter };

            case SAVE_CATEGORYS:
                
                return{...state,
                    categoryList: action.categorys
                };

            case SAVE_USER_STOCK_INGREDIENT:
                return{...state,
                    UserIngredient: action.ingredients
                }

            case SORT_INGREDIENT:
                return{...state,
                };
            
            case FILTER_INGREDIENT_BY_CATEGORYS:
                
                return {...state, ListFilterStock: action.listFilter}

            case SAVE_INGREDIENT_STOCK:
                return { ...state, ListFilterStock: action.ingredients };

    };
};
    
export default reducerStock