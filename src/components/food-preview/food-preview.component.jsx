import { connect } from 'react-redux';

import './food-preview.styles.scss';

import {
  selectorChoosedCategory, selectorCurrentFoods
} from '../../redux/reducer/food/selectors/food.selectors';

import MenuCategory from '../menu-category/menu-category.component';
import FoodItem from '../food-item/food-item.component';

const FoodPreview = ({ choosedCategory, currentFoods }) => {
  return (
    <div className="food-preview">
      <div className="food-preview-title">
        <h1>Our Menu</h1>
      </div>
      <div className="food-preview-menu">
        <MenuCategory/>
      </div>
      <div className="food-preview-items">
        {
          choosedCategory ? (
            choosedCategory.map( item => <FoodItem key = {item.id} {...item}/>)
          ) : (
            currentFoods.map( item => <FoodItem key = {item.id} {...item}/>)
          )
        }
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  choosedCategory: selectorChoosedCategory(state),
  currentFoods: selectorCurrentFoods(state)
});

export default connect(
  mapStateToProps
)(FoodPreview);