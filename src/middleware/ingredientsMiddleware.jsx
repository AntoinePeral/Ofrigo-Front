import axios from "axios";
import { FETCH_INGREDIENT, saveIngredients } from "../store/Search/action";
import { saveListIngredients } from "../store/Stock/action";

const ingredientsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_INGREDIENT:
      axios
        .get("http://kevin-lienard-server.eddi.cloud/ingredient")
        .then((response) => {
          store.dispatch(saveIngredients(response.data));
<<<<<<< HEAD
          store.dispatch(saveIngredientsStock(response.data));
=======
          store.dispatch(saveListIngredients(response.data))
          
>>>>>>> 840cedf7d19c52d30139689d41c07243ac7fa552
        })
        .catch((err) => console.log(err));

      break;
    default:
  }

  next(action);
};

export default ingredientsMiddleware;
