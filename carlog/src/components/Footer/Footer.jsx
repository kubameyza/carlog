import styles from './Footer.module.css';
import { NavHashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.footer_section}>
          <h3>Na skróty</h3>
          <NavHashLink to="/about">O nas</NavHashLink>
          <NavHashLink to="/#offer">Cennik</NavHashLink>
          <NavHashLink to="/#gallery">Galeria</NavHashLink>
        </div>
        <div className={styles.footer_section}>
          <h3>Adres</h3>
          <a
            href="https://www.google.com/maps/place/Gdynia/@54.5452494,18.5280123,14.65z/data=!4m6!3m5!1s0x46fda145071ed789:0xdee2f99989236636!8m2!3d54.5188898!4d18.5305409!16zL20vMDNiNGQ?entry=ttu"
            target="blank"
          >
            <p>Niebieska 1, 81-115 Gdynia</p>
          </a>
        </div>
        <div className={styles.footer_section}>
          <h3>Kontakt</h3>
          <a href="tel:123 456 789">Telefon: 123 456 789</a>
          <a href="mailto:autoglanz@gmail.com">Email: autoglanz@gmail.com</a>
        </div>
        <a
          className={styles.icon}
          href="https://www.google.com/maps/place/Gdynia/@54.5452494,18.5280123,14.65z/data=!4m6!3m5!1s0x46fda145071ed789:0xdee2f99989236636!8m2!3d54.5188898!4d18.5305409!16zL20vMDNiNGQ?entry=ttu"
          target="blank"
        >
          <div></div>
        </a>
      </div>
    </>
  );
};
export default Footer;
