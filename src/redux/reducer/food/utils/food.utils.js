export const fillterByCategory = (currentFoods, choosedCategory) => {
  switch(choosedCategory) {
    case 'breakfast':
      return currentFoods.filter(item => item.category === 'breakfast');
    case 'lunch':
      return currentFoods.filter(item => item.category === 'lunch');
    case 'shakes':
      return currentFoods.filter(item => item.category === 'shakes');
    default:
      return currentFoods;
  };
};

