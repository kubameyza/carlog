import Header from '../Header/Header';
import Headline from '../Headline/Headline';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.car}></div>
      <Header />
      <Headline />
    </div>
  );
};
export default HomePage;
