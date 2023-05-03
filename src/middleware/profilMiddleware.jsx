import axios from "axios";
import {
  FETCH_INGREDIENT_STOCK,
  saveUserStockIngredient,
} from "../store/Stock/action";

const profilMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_INGREDIENT_STOCK:
      const jwtToken = localStorage.getItem("token");

      axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;

      axios
        .get("http://kevin-lienard-server.eddi.cloud/me/profile/ingredient")
        .then((response) => {
<<<<<<< HEAD
          console.log(response.data);
=======
          
>>>>>>> 840cedf7d19c52d30139689d41c07243ac7fa552
          store.dispatch(saveUserStockIngredient(response.data));
        })
        .catch((err) => console.log(err));
      break;

    default:
  }

  next(action);
};

export default profilMiddleware;
