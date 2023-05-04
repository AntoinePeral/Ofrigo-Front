import { SAVE_RECIPE } from "./action";

const initialState = {
  recipe: null,
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_RECIPE:
      return {
        ...state,
        recipe: action.recipe,
      };
    default:
      return state;
  }
};

export default recipeReducer;
