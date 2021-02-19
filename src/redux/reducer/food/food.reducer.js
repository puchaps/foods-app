import {
  CHOSEN_CATEGORY,
  GET_COLLECTION_FAILED,
  GET_COLLECTION_SUCCESS,
} from "./types/food.types";

import filterByCategory from "./utils/food.utils";

const INITIAL_STATE = {
  currentFoods: null,
  loader: true,
  chosenCategory: null,
  error: null,
};

const foodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COLLECTION_SUCCESS:
      return {
        ...state,
        currentFoods: action.payload,
        loader: false,
        error: null,
      };
    case GET_COLLECTION_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case CHOSEN_CATEGORY:
      return {
        ...state,
        chosenCategory: filterByCategory(state.currentFoods, action.payload),
      };
    default:
      return state;
  }
};

export default foodReducer;
