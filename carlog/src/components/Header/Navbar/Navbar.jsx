import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a className={styles.nav_item} href="">
        O nas
      </a>
      <HashLink to="home#gallery" className={styles.nav_item}>
        Galeria
      </HashLink>
      <HashLink className={styles.nav_item} to="home#offer">
        Cennik
      </HashLink>
      <Link className={styles.nav_item} to="contact">
        Kontakt
      </Link>
    </div>
  );
};
export default Navbar;
