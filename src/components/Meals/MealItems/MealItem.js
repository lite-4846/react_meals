import { useContext } from 'react';

import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context';
import styles from "./MealItem.module.css";

const MealItem = (props) => {
  const cartCTX = useContext(CartContext);

  const price = `$${props.price.toFixed(2)};`;

  const addCartHandler = amount => {
    cartCTX.addItem({
      id: props.id,
      name: props.title,
      amount: amount,
      price: props.price
    })
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.title}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
      <MealItemForm onAddToCart={addCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
