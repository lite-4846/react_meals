import CartIcon from "../Cart/CartIcon";
import styles from './HeaderCartButton.module.css';

const CartButton = (props) => {
  return (
    <button className={`${styles.button}`}>
      <span className={styles.icon}>
        <CartIcon/>
      </span>
      <span >Your Cart</span>
      <span className={styles.badge}>9</span>
    </button>
  );
};

export default CartButton;