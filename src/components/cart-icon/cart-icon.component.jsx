import "./cart-icon.styles.scss";

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <img src="shopping-bag.svg" alt="" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
