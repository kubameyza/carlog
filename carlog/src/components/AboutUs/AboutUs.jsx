import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <>
      <h1 className={styles.header}>O nas</h1>
      <div className={styles.wrapper}>
        <div className={styles.paragraph_section}>
          <p className={styles.paragraph}>
            Jesteśmy pasjonatami motoryzacji, dla których każdy samochód to nie
            tylko pojazd, ale prawdziwe dzieło sztuki na czterech kółkach. Nasza
            firma auto detailingowa powstała z miłości do doskonałego wyglądu i
            perfekcji w pielęgnacji pojazdów.
          </p>
          <p className={styles.paragraph}>
            W Auto Glanz nie zajmujemy się jedynie myciem samochodów. Naszą
            misją jest przywracanie blasku i piękna każdej karoserii, dbając o
            najmniejsze detale. Wykorzystujemy najnowsze technologie, wysokiej
            jakości produkty i doświadczenie, aby zapewnić naszym klientom nie
            tylko czystość, ale także niepowtarzalny efekt estetyczny.
          </p>
        </div>
        <div className={styles.paragraph_section}>
          <p className={styles.paragraph}>
            Nasi specjaliści to zgrany zespół ekspertów, których praca opiera
            się na precyzji, zaangażowaniu i pasji. Niezależnie od tego, czy
            chodzi o usuwanie rys, polerowanie lakieru, czy dogłębne
            oczyszczanie wnętrza auta, zawsze dążymy do perfekcji.
          </p>
          <p className={styles.paragraph}>
            W Auto Glanz wiemy, że dla wielu osób samochód to coś więcej niż
            tylko środek transportu. To często wyraz stylu życia i osobistej
            estetyki. Dlatego oddajemy do dyspozycji naszych klientów nie tylko
            usługi detailingowe, ale również doradztwo i indywidualne podejście,
            aby każdy samochód odzwierciedlał charakter swojego właściciela.
            Zaufaj nam, a my zadbamy o to, aby Twój pojazd błyszczał nowym
            blaskiem. Auto Glanz - bo detal ma znaczenie.
          </p>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
