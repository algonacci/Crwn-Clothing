import "./cart-icon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <img src="shopping-bag.svg" alt="" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
