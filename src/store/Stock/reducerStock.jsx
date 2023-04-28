import {
  SAVE_CATEGORYS,
  SORT_INGREDIENT,
  FILTER_INGREDIENT,
  FILTER_INGREDIENT_BY_CATEGORYS,
  SAVE_USER_STOCK_INGREDIENT,
  FETCH_INGREDIENT_STOCK,
  SAVE_LIST_INGREDIENT,
  UPDATE_USER_STOCK_INGREDIENT,
} from "./action";

const initialState = {
  categoryList: [],

  UserIngredient: [],

  filteredIngredientList: [],

  ListFilterStock: [],
};

function reducerStock(state = initialState, action) {
  switch (action.type) {
    default:

    case FILTER_INGREDIENT:
      return { ...state, ListFilterStock: action.listFilter };

    case SAVE_CATEGORYS:
      return { ...state, categoryList: action.categorys };

    case SAVE_USER_STOCK_INGREDIENT:
      return { ...state, UserIngredient: action.ingredients };

    case SORT_INGREDIENT:
      return { ...state };

    case FILTER_INGREDIENT_BY_CATEGORYS:
      return { ...state, ListFilterStock: action.listFilter };

    case SAVE_LIST_INGREDIENT:
      return { ...state, ListFilterStock: action.ingredients };

    case UPDATE_USER_STOCK_INGREDIENT:
      return { ...state, UserIngredient: action };
  }
}

export default reducerStock;
