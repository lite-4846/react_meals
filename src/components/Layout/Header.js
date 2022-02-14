import { Fragment } from "react";

import CartButton from "./HeaderCartButton";
import mealsImg from "../../assests/meals.jpg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <CartButton/>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt='A table full of delicious food'/>
      </div>
    </Fragment>
  );
};

export default Header;