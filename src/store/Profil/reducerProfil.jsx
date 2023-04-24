import{
    SAVE_PROFIL,
} from "./action";

const initialState = {

    UserProfil:[

    ]
   
  
  };

function reducerProfil(state = initialState, action) {
    switch (action.type) {
        default:
            case SAVE_PROFIL:
                
                return{...state,
                    UserProfil: action.profil
                };

}
}
    
export default reducerProfil;
    