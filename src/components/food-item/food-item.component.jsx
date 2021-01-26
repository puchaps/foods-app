import './food-item.styles.scss';

const FoodItem = ({ img, title, price, desc }) => {
  return (
    <div className="food-item">
      <div className="food-item-image">
        <img src={img} alt="food"/>
      </div>
      <div className="food-item-descr">
        <div className="food-item-name-price">
          <span className="name">{title}</span>
          <span className="price">${price}</span>
        </div>
        <div className="food-item-info">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;