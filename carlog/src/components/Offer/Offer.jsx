import styles from './Offer.module.css';

const priceListData = [
  {
    title: 'Detailing',
    description: 'Mycie zewnętrzne + osuszanie',
    price: '200 zł',
  },
  {
    description: 'Dekontaminacja lakieru',
    price: '400 zł',
  },
  {
    title: 'Pranie foteli',
    description: 'Pranie foteli (tapicerka)',
    price: '60 zł / fotel',
  },
  {
    description: 'Pranie foteli (skóra)',
    price: '80 zł / fotel',
  },
  {
    description: 'Pranie dywaników',
    price: '160 zł',
  },
  {
    description: 'Pranie wykładziny',
    price: '200 zł',
  },

  {
    description: 'Pranie podsufitki',
    price: '250 zł',
  },
  {
    title: 'Powłoka ochronna',
    description: 'Ttardy wosk',
    price: '150',
  },
  {
    description: 'Ceramika 2 letnia',
    price: '1500 zł',
  },

  {
    description: 'Powłoka 4 lenia',
    price: '2500zł',
  },

  {
    title: 'Korekta lakieru',
    description: 'Jednostopniowa korekta lakieru',
    price: '700',
  },
  {
    description: 'Dwuetapowa korekta lakieru',
    price: '1000',
  },
  {
    description: 'Pełna korekta lakieru',
    price: '1500',
  },
];

const Offer = () => {
  return (
    <div className={styles.offer_wrapper}>
      <div className={styles.offer}>
        <h2>CENNIK</h2>
        <ul>
          {priceListData.map((item, idx) => (
            <li key={idx}>
              {item.title ? <h3>{item.title}</h3> : null}
              <div className={styles.description_section}>
                <div className={styles.price_list_item}>
                  <p className={styles.description}>{item.description}</p>
                  <div className={styles.dot_line}></div>
                </div>
                <p>{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Offer;
