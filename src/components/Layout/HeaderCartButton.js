import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import styles from "./HeaderCartButton.module.css";

const CartButton = (props) => {
  const [isBtnHigh, setIsBtnHigh] = useState(false);
  const cartCTX = useContext(CartContext);
   
  const { items } = cartCTX;

  const numberOfCartItems = cartCTX.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${styles["button"]} ${isBtnHigh ? styles["bump"] : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsBtnHigh(true);

    const timer = setTimeout(() => {
      setIsBtnHigh(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
