import styles from './Scroller.module.css';
import { nanoid } from 'nanoid';

const services = [
  'Mycie i Woskowanie Premium',
  'Pełne Oczyszczanie Wnętrza',
  'Usuwanie Rys i Poprawa Lakieru',
  'Detailing Felg i Opon',
  'Ochronna Powłoka Ceramiczna',
  'Ozonowanie Wnętrza',
  'Detailing Skóry',
  'Detailing Silnika',
];

const Scroller = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.scroller}>
        {services.map((item) => (
          <li className={styles.scroller_element} key={nanoid()}>
            {item}
          </li>
        ))}
      </ul>
      <ul className={styles.scroller}>
        {services.map((item) => (
          <li className={styles.scroller_element} key={nanoid()}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Scroller;
