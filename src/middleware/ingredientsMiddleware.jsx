import axios from "axios";
import { FETCH_INGREDIENT, saveIngredients } from "../store/Search/action";

const ingredientsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_INGREDIENT:
      axios
        .get("http://kevin-lienard-server.eddi.cloud/ingredient")
        .then((response) => {
          store.dispatch(saveIngredients(response.data));
        })
        .catch((err) => console.log(err));

      break;
    default:
  }

  next(action);
};

export default ingredientsMiddleware;