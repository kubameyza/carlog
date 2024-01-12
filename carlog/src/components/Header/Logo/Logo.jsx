import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <Link to="home" className={styles.logo}>
      autokosmetyka
    </Link>
  );
};
export default Logo;
