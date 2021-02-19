import React from "react";

import "./loader.styles.scss";

const Loader = ({ onLoader, children }) => {
  if (onLoader) {
    return (
      <img
        className="loader-image"
        src="https://cdn4.iconfinder.com/data/icons/feather/24/loader-512.png"
        alt="loader"
      />
    );
  }

  return children;
};

export default Loader;
