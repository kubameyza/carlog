import styles from './Headline.module.css';

const Headline = () => {
  return (
    <div className={styles.headline}>
      Wkładamy całe serce, aby na nowo odnaleźć ukryte piękno Twojego samochodu.
      <p>Twoje auto na to zasługuje.</p>
      <button className={styles.main_button}>Sprawdź teraz</button>
    </div>
  );
};
export default Headline;
