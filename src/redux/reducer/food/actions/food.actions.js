/* eslint-disable spaced-comment */
import {
  CHOSEN_CATEGORY,
  GET_COLLECTION_FAILED,
  GET_COLLECTION_START,
  GET_COLLECTION_SUCCESS,
} from "../types/food.types";

//////////////////--GET_COLLECTION--//////////////////
export const getCollectionStartAC = () => ({
  type: GET_COLLECTION_START,
});
export const getCollectionSuccessAC = (collections) => ({
  type: GET_COLLECTION_SUCCESS,
  payload: collections,
});
export const getCollectionFailedAC = (error) => ({
  type: GET_COLLECTION_FAILED,
  payload: error,
});
//////////////////--GET_COLLECTION--//////////////////

//////////////////--CHOSEN_CATEGORY--//////////////////
export const chosenCategoryAC = (category) => ({
  type: CHOSEN_CATEGORY,
  payload: category,
});
//////////////////--CHOSEN_CATEGORY--//////////////////
