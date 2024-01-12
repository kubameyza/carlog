import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a className={styles.nav_item} href="">
        O nas
      </a>
      <a className={styles.nav_item} href="#gallery">
        Galeria
      </a>
      <a className={styles.nav_item} href="#offer">
        Cennik
      </a>
      <Link className={styles.nav_item} to="contact">
        Kontakt
      </Link>
    </div>
  );
};
export default Navbar;
