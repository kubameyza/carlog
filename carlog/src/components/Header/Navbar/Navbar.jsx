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
    </div>
  );
};
export default Navbar;
