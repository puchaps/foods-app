
import './menu-item.styles.scss';

const MenuItem = ({ category, choosedCategory }) => {
  return (
    <div className="menu-item" onClick = {() => choosedCategory(category)}>
      {category}
    </div>
  );
};

export default MenuItem;