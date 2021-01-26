import {
  CHOOSED_CATEGORY,
  GET_COLLECTION_FAILED,
  GET_COLLECTION_START,
  GET_COLLECTION_SUCCSES
} from "../types/food.types";

//////////////////--GET_COLLECTION--//////////////////
export const getCollectionStartAC = () => ({
  type: GET_COLLECTION_START
});
export const getCollectionSuccsesAC = (getedCollectin) => ({
  type: GET_COLLECTION_SUCCSES,
  payload: getedCollectin
});
export const getCollectionFailedAC = (error) => ({
  type: GET_COLLECTION_FAILED,
  payload: error
});
//////////////////--GET_COLLECTION--//////////////////


//////////////////--CHOOSED_CATEGORY--//////////////////
export const choosedCategoryAC = (category) => ({
  type: CHOOSED_CATEGORY,
  payload: category
});
//////////////////--CHOOSED_CATEGORY--//////////////////