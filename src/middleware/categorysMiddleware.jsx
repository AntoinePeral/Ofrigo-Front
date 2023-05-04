import axios from "axios";
import { FETCH_CATEGORYS, saveCategory } from "../store/Recipes/action";

const categorysMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CATEGORYS:
      axios
        .get("http://antoineperal-server.eddi.cloud/category")
        .then((response) => {
          store.dispatch(saveCategory(response.data));
        })
        .catch((err) => console.log(err));
      console.log("ok");

      break;
    default:
  }

  next(action);
};

export default categorysMiddleware;
