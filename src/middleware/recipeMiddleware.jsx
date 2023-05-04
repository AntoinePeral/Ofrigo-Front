import axios from "axios";
import { FETCH_RECIPE, saveRecipe } from "../store/Recipe/action";

const recipeMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPE:
      axios
        .get(`http://antoineperal-server.eddi.cloud/recipe/${action.id}`)
        .then((response) => {
          store.dispatch(saveRecipe(response.data));
        })
        .catch((err) => console.log(err));
      break;
    default:
  }

  next(action);
};

export default recipeMiddleware;
