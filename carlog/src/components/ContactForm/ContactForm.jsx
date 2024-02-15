import toast from 'react-hot-toast';
import style from './ContactForm.module.css';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success('Twoja wiadomość została wysłana!');
  };

  return (
    <form className={style.wrapper} onSubmit={(e) => handleSubmit(e)}>
      <input
        name="name"
        className={style.field}
        type="text"
        placeholder="Imię i Nazwisko"
        required
      />
      <input
        className={style.field}
        type="email"
        placeholder="Email"
        required
      />
      <input
        name="phone"
        className={style.field}
        type="tel"
        placeholder="Telefon kontaktowy"
        required
        pattern="[0-9]{9}"
      />
      <input
        name="car"
        className={style.field}
        type="text"
        placeholder="Samochód"
        required
      />
      <textarea
        name="message"
        className={style.big_field}
        placeholder="Twoja wiadomość"
        required
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
