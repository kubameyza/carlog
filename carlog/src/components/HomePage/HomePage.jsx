import Counters from '../Counters/Counters';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import Headline from '../Headline/Headline';
import Offer from '../Offer/Offer';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <div className={styles.homepage}>
        <div className={styles.car}></div>
        <Header />
        <Headline />
      </div>
      <Counters />
      <Gallery />
      <Offer />
    </>
  );
};
export default HomePage;
