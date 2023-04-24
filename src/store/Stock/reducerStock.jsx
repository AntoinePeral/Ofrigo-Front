import{
    SAVE_CATEGORYS, SORT_INGREDIENT,
} from "./action";

const initialState = {
  
    categoryList: [   
  
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
    ]
   
  
  };

function reducerStock(state = initialState, action) {
    switch (action.type) {
        default:
            case SAVE_CATEGORYS:
                
                return{...state,
                    categoryList: action.categorys
                };

            case SORT_INGREDIENT:
                return{...state,
                };
            }
}
    
export default reducerStock;
    