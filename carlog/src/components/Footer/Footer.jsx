import styles from './Footer.module.css';
import { NavHashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footer_section}>
        <h3>Na skróty</h3>
        <NavHashLink to="/about">O nas</NavHashLink>
        <NavHashLink to="/#offer">Cennik</NavHashLink>
        <NavHashLink to="/#gallery">Galeria</NavHashLink>
      </div>
      <div className={styles.footer_section}>
        <h3>Adres</h3>
        <p>Niebieska 1, 81-115 Gdynia</p>
      </div>
      <div className={styles.footer_section}>
        <h3>Kontakt</h3>
        <a href="tel:123 456 789">Telefon:123 456 789</a>
        <a href="mailto:autoglanz@gmail.com">Email: autoglanz@gmail.com</a>
      </div>
    </div>
  );
};
export default Footer;
