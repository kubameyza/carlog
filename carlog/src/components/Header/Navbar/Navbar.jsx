import styles from './Navbar.module.css';
import { NavHashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavHashLink
        to="/about"
        className={({ isActive }) =>
          isActive ? `${styles.nav_item} ${styles.active}` : styles.nav_item
        }
      >
        O nas
      </NavHashLink>
      <NavHashLink to="/home/#gallery" className={styles.nav_item}>
        Galeria
      </NavHashLink>
      <NavHashLink className={styles.nav_item} to="/home/#offer">
        Cennik
      </NavHashLink>
      <NavHashLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? `${styles.nav_item} ${styles.active}` : styles.nav_item
        }
      >
        Kontakt
      </NavHashLink>
    </div>
  );
};
export default Navbar;
