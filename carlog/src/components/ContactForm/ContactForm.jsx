import style from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <form className={style.wrapper}>
      <input
        className={style.field}
        type="text"
        placeholder="Imię i Nazwisko"
      />
      <input className={style.field} type="text" placeholder="Email" />
      <input
        className={style.field}
        type="text"
        placeholder="Telefon kontaktowy"
      />
      <input className={style.field} type="text" placeholder="Samochód" />
      <input
        className={style.big_field}
        type="textarea"
        placeholder="Twoja wiadomość"
      />
    </form>
  );
};
export default ContactForm;
