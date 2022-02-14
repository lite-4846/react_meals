import styles from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Delicious Food, Delivered to You!</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals and 
        enjoy delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingridients, just-in-time and 
        of course by experinced chef!
      </p>
    </section>
  )
}

export default MealsSummary;
