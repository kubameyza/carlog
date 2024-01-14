import Counters from '../Counters/Counters';
import Gallery from '../Gallery/Gallery';
import Headline from '../Headline/Headline';
import Offer from '../Offer/Offer';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <div className={styles.homepage}>
        <div className={styles.car}>
          <div className={styles.lights}>
            <div className={styles.big_circle}></div>
            <div className={styles.small_circle}></div>
          </div>
        </div>
        <Headline />
      </div>
      <Counters />
      <Gallery />
      <Offer />
    </>
  );
};
export default HomePage;
