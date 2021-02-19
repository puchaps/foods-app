/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { connect } from "react-redux";

import "./food-preview.styles.scss";

import {
  selectorChosenCategory,
  selectorCurrentFoods,
} from "../../redux/reducer/food/selectors/food.selectors";

import MenuCategory from "../menu-category/menu-category.component";
import FoodItem from "../food-item/food-item.component";

const FoodPreview = ({ onChosenCategory, onCurrentFoods }) => (
  <div className="food-preview">
    <div className="food-preview-title">
      <h1>Our Menu</h1>
    </div>
    <div className="food-preview-menu">
      <MenuCategory />
    </div>
    <div className="food-preview-items">
      {onChosenCategory
        ? onChosenCategory.map((item) => <FoodItem key={item.id} {...item} />)
        : onCurrentFoods.map((item) => <FoodItem key={item.id} {...item} />)}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  onChosenCategory: selectorChosenCategory(state),
  onCurrentFoods: selectorCurrentFoods(state),
});

export default connect(mapStateToProps)(FoodPreview);
