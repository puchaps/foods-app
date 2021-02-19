import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";

import { getCollectionStartAC } from "./redux/reducer/food/actions/food.actions";
import { selectorLoaderToggle } from "./redux/reducer/food/selectors/food.selectors";

import FoodPreview from "./components/food-preview/food-preview.component";
import Loader from "./components/loader/loader.component";

const App = ({ handleGetCollectionStart, onLoader }) => {
  const handleUseEffect = useCallback(() => {
    handleGetCollectionStart();
  }, [handleGetCollectionStart]);

  useEffect(() => {
    handleUseEffect();
  }, [handleUseEffect]);

  return (
    <>
      <Loader onLoader={onLoader}>
        <FoodPreview />
      </Loader>
    </>
  );
};

const mapStateToProps = (state) => ({
  onLoader: selectorLoaderToggle(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleGetCollectionStart: () => dispatch(getCollectionStartAC()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
