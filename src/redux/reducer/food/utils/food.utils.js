const filterByCategory = (currentFoods, chosenCategory) => {
  switch (chosenCategory) {
    case "breakfast":
      return currentFoods.filter((item) => item.category === "breakfast");
    case "lunch":
      return currentFoods.filter((item) => item.category === "lunch");
    case "shakes":
      return currentFoods.filter((item) => item.category === "shakes");
    default:
      return currentFoods;
  }
};

export default filterByCategory;
