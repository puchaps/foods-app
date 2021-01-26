import { connect } from 'react-redux';

import './menu-category.styles.scss';

import { selectorCategortNames } from '../../redux/reducer/food/selectors/food.selectors';
import { choosedCategoryAC } from '../../redux/reducer/food/actions/food.actions';

import MenuItem from '../menu-item/menu-item.component';

const MenuCategory = ({ categoryNames, choosedCategory }) => {
  return (
    <div className="menu-category">
      <menu>
        <div className="menu-category-item">
          {
            categoryNames.map( name => {
              return <MenuItem key = {name} category = {name} choosedCategory = {choosedCategory}/>
            })
          }
        </div>
      </menu>
    </div>
  );
};

const mapStateToProps = state => ({
  categoryNames: selectorCategortNames(state)
});

const mapDispatchToProps = dispatch => ({
  choosedCategory: (category) => dispatch(choosedCategoryAC(category))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuCategory);