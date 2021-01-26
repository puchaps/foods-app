import { useEffect } from "react";
import { connect } from "react-redux";

import { getCollectionStartAC } from "./redux/reducer/food/actions/food.actions";
import { selectorLoaderToggle } from "./redux/reducer/food/selectors/food.selectors";

import FoodPreview from "./components/food-preview/food-preview.component";
import Loader from './components/loader/loader.component';

const App = ({ getCollectionStart, loaderToggle }) => {

  useEffect(() => {
    getCollectionStart();
  }, []);

  return (
    <>
      <Loader loader = {loaderToggle}>
        <FoodPreview/>
      </Loader>
    </>
  );
}

const mapStateToProps = state => ({
  loaderToggle: selectorLoaderToggle(state)
});

const mapDispatchToProps = dispatch => ({
  getCollectionStart: () => dispatch(getCollectionStartAC())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
