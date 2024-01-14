import ContactForm from '../ContactForm/ContactForm';
import style from './ContactPage.module.css';

const ContactPage = () => {
  return (
    <>
      <div className={style.paragraph}>
        <h2 className={style.header}>Zapraszamy do kontaktu</h2>
        <p>
          Po zapoznaniu się z Państwa oczekiwaniami oraz oszacowaniu zakresu
          prac natychmiast otrzymają Państwo wycenę
        </p>
        <a className={style.button} href="#form">
          Zarezerwuj termin
        </a>
      </div>
      <div id="form" className={style.form}>
        <ContactForm />
      </div>
    </>
  );
};
export default ContactPage;
