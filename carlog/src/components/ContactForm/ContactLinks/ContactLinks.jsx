import { IconContext } from 'react-icons';
import style from './ContactLinks.module.css';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';

const ContactLinks = () => {
  return (
    <IconContext.Provider
      value={{ color: 'white', size: '40', className: 'global-class-name' }}
    >
      <div className={style.wrapper}>
        <ul className={style.links_list}>
          <li>
            <a className={style.link} href="tel:123456789">
              <FaPhoneAlt className={style.icon} />
              <div className={style.link_text}>123 456 789</div>
            </a>
          </li>
          <li>
            <a className={style.link} href="mailto:autoglanz@gmail.com">
              <FaEnvelope />
              <div className={style.link_text}>autoglanz@gmail.com</div>
            </a>
          </li>
          <li>
            <a
              className={style.link}
              href="https://maps.app.goo.gl/yrLMZ1G4UWju8NGg8"
              target="blank"
            >
              <FaMapMarkerAlt />
              <div className={style.link_text}>Niebieska 1, 81-115 Gdynia</div>
            </a>
          </li>
          <li className={style.link}>
            <FaClock />
            <div className={style.link_text}>Pn-Pt 9:00 - 18:00</div>
          </li>
        </ul>
      </div>
    </IconContext.Provider>
  );
};
export default ContactLinks;
