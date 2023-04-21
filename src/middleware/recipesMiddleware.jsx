import axios from "axios";
import { FETCH_RECIPES, saveRecipes } from "../store/Recipes/action";

const recipesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      axios
        .get("http://kevin-lienard-server.eddi.cloud/recipe")
        .then((response) => {
          store.dispatch(saveRecipes(response.data));
          
        })
        .catch((err) => console.log(err));

      break;
    default:
  }

  next(action);
};

export default recipesMiddleware;
