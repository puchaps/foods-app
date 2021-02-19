import React from "react";
import { connect } from "react-redux";

import "./menu-category.styles.scss";

import { selectorCategoryNames } from "../../redux/reducer/food/selectors/food.selectors";
import { chosenCategoryAC } from "../../redux/reducer/food/actions/food.actions";

import MenuItem from "../menu-item/menu-item.component";

const MenuCategory = ({ onCategoryNames, handleChosenCategory }) => (
  <div className="menu-category">
    <menu>
      <div className="menu-category-item">
        {onCategoryNames.map((name) => (
          <MenuItem
            key={name}
            onCategoryName={name}
            handleChosenCategory={handleChosenCategory}
          />
        ))}
      </div>
    </menu>
  </div>
);

const mapStateToProps = (state) => ({
  onCategoryNames: selectorCategoryNames(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleChosenCategory: (category) => dispatch(chosenCategoryAC(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuCategory);
