import { CHOOSED_CATEGORY, GET_COLLECTION_FAILED, GET_COLLECTION_SUCCSES } from "./types/food.types";
import { fillterByCategory } from "./utils/food.utils";

const INITIAL_STATE = {
  currentFoods: null,
  loaderToggle: true,
  choosedCategory: null,
  error: null
};

const foodReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_COLLECTION_SUCCSES:
      return {
        ...state,
        currentFoods: action.payload,
        loaderToggle: false,
        error: null
      };
    case GET_COLLECTION_FAILED:
      return {
        ...state,
        error: action.payload
      };
    case CHOOSED_CATEGORY:
      return {
        ...state,
        choosedCategory: fillterByCategory(state.currentFoods, action.payload)
      };
    default:
      return state;
  };
};

export default foodReducer;