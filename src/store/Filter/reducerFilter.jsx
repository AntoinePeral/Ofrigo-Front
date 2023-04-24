import {
  TOGGLE_FILTER_OPEN,
  RESET_NUMBER_FILTER,
  UPDATE_FILTER,
  SAVE_TAGS,
} from "./action";

const initialState = {
  isFilterOpen: false,
  difficulty: "",
  time: "",
  grades: "",
  numberFilter: 0,
  ingredient: [

  ],
  tags: [],
};

function reducerFilter(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FILTER_OPEN:
      return { ...state, isFilterOpen: !state.isFilterOpen };

    case RESET_NUMBER_FILTER:
      return {
        ...state,
        numberFilter: 0,
        difficulty: "",
        time: "",
        grades: "",
      };

    case UPDATE_FILTER:
      const newState = { ...state, [action.filterTag]: action.filterValue };
      if (action.filterTag && state[action.filterTag] === "") {
        return { ...newState, numberFilter: state.numberFilter + 1 };
      }
      return newState;

    case SAVE_TAGS:
      return { ...state, tags: action.tags };

    default:
      return state;
  }
}

export default reducerFilter;
