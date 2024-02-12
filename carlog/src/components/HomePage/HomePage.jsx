import Counters from '../Counters/Counters';
import Gallery from '../Gallery/Gallery';
import Headline from '../Headline/Headline';
import Offer from '../Offer/Offer';
import Scroller from '../Scroller/Scroller';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.homepage}>
        <div className={styles.car}></div>
        <Headline />
      </div>
      <Counters />
      <Gallery />
      <Scroller />
      <Offer />
    </div>
  );
};
export default HomePage;
