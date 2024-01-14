import style from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <form className={style.wrapper}>
      <input
        name="name"
        className={style.field}
        type="text"
        placeholder="Imię i Nazwisko"
      />
      <input className={style.field} type="text" placeholder="Email" />
      <input
        name="phone"
        className={style.field}
        type="text"
        placeholder="Telefon kontaktowy"
      />
      <input
        name="car"
        className={style.field}
        type="text"
        placeholder="Samochód"
      />
      <textarea
        name="message"
        className={style.big_field}
        placeholder="Twoja wiadomość"
      />
      <div className={style.button_wrapper}>
        <button className={style.button} type="submit">
          Wyślij
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
