import axios from "axios";
import { FETCH_TAG, saveTags } from "../store/Filter/action";

const tagsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_TAG:
      axios
        .get("http://kevin-lienard-server.eddi.cloud/tag")
        .then((response) => {
          store.dispatch(saveTags(response.data));
        })
        .catch((err) => console.log(err));

      break;
    default:
  }

  next(action);
};

export default tagsMiddleware;