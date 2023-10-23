import Header from '../Header/Header';
import Headline from '../Headline/Headline';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <Header />
      <Headline />
    </div>
  );
};
export default HomePage;
