import axios from "axios";
import { FETCH_PROFIL, saveProfil } from "../store/Profil/action";
import { ADD_INGREDIENT } from "../store/Ingredient/action"

const profilMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_INGREDIENT:
      axios
        .get("http://kevin-lienard-server.eddi.cloud/me/profile")
        .then((response) => {
          store.dispatch(saveIProfil(response.data));
        })
        .catch((err) => console.log(err));
        break;
      
    default:
  }

  next(action);
};

export default profilMiddleware;