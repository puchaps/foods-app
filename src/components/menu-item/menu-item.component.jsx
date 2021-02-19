/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";

import "./menu-item.styles.scss";

const MenuItem = ({ onCategoryName, handleChosenCategory }) => (
  <div
    className="menu-item"
    onClick={() => handleChosenCategory(onCategoryName)}
  >
    {onCategoryName}
  </div>
);

export default MenuItem;
