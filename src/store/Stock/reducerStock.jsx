import{
    SAVE_CATEGORYS, SORT_INGREDIENT,
} from "./action";

const initialState = {
  
    categoryList: [   
  
    ],
   
  
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
    