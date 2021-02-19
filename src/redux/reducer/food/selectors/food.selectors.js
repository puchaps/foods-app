/* eslint-disable array-callback-return */
import { createSelector } from "reselect";

const selectorFood = (state) => state.food;

export const selectorCurrentFoods = createSelector(
  [selectorFood],
  (food) => food.currentFoods
);

export const selectorChosenCategory = createSelector(
  [selectorFood],
  (food) => food.chosenCategory
);

export const selectorLoaderToggle = createSelector(
  [selectorFood],
  (food) => food.loader
);

export const selectorCategoryNames = createSelector(
  [selectorCurrentFoods],
  (currentFoods) => {
    const sortArr = ["all"];

    currentFoods.sort((item) => {
      if (sortArr.includes(item.category)) return;

      sortArr.push(item.category);
    });

    return sortArr;
  }
);
