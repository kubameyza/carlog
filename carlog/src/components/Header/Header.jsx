import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <Navbar />
    </div>
  );
};
export default Header;
