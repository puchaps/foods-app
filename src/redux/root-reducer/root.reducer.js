import { combineReducers } from "redux";
import foodReducer from "../reducer/food/food.reducer";

export default combineReducers({
  food: foodReducer,
});
