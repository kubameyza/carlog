import styles from './Services.module.css';
import { nanoid } from 'nanoid';

const services = [
  {
    header: 'Mycie zewnętrzne i woskowanie',
    icon: '../../../public/services/wash.png',
  },
  {
    header: 'Czyszczenie i pielęgnacja wnętrza',
    icon: '../../../public/services/interior.png',
  },
  {
    header: 'Pranie tapicerki',
    icon: '../../../public/services/car_seat.png',
  },
  {
    header: 'Odnowa lakieru',
    icon: '../../../public/services/paint.png',
  },
  {
    header: 'Usuwanie rys',
    icon: '../../../public/services/scratch.png',
  },
  {
    header: 'Ochrona przed korozją',
    icon: '../../../public/services/corrosion.png',
  },
  {
    header: 'Czyszczenie i polerowanie felg',
    icon: '../../../public/services/wheel.png',
  },
  {
    header: 'Detailing silnika',
    icon: '../../../public/services/engine.png',
  },
];

const Services = () => {
  return (
    <div className={styles.services}>
      {services.map((service) => (
        <div key={nanoid} className={styles.service}>
          <img className={styles.service_icon} src={service.icon} />
          <h3>{service.header}</h3>
        </div>
      ))}
    </div>
  );
};
export default Services;
