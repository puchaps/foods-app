import { createSelector } from "reselect";

const selectorFood = state => state.food;


export const selectorCurrentFoods = createSelector(
  [selectorFood],
  (food) => food.currentFoods
);

export const selectorChoosedCategory = createSelector(
  [selectorFood],
  (food) => food.choosedCategory
);

export const selectorLoaderToggle = createSelector(
  [selectorFood],
  (food) => food.loaderToggle
);

export const selectorCategortNames = createSelector(
  [selectorCurrentFoods],
  (currentFoods) => {
    const sortArr = ['all'];

    currentFoods.sort(((item) => {
      if (sortArr.includes(item.category)) return;

      sortArr.push(item.category);
    }));
    
    return sortArr;
  }
);
