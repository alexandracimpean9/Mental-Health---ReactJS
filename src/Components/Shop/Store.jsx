import "./Store.css";
import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";

const Store = () => {
  const { cartItems, showHideCart } = useContext(CartContext);

  return (
    <nav>
      <div className="nav__left">Store</div>
      <div className="nav__middle"></div>
      <div className="nav__right">
        <div className="cart__icon">
          <i
            className="fa fa-shopping-cart"
            aria-hidden="true"
            onClick={showHideCart}
          />
          {cartItems.length > 0 && (
            <div className="item__count">
              <span>{cartItems.length}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Store;
