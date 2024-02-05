import { useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import styles from './Services.module.css';
import { nanoid } from 'nanoid';
import ServiceTile from '../ServiceTile/ServiceTile';

const services = [
  {
    header: 'Mycie zewnętrzne i woskowanie',
    icon: '../../../public/services/wash.png',
    id: '1',
  },
  {
    header: 'Czyszczenie i pielęgnacja wnętrza',
    icon: '../../../public/services/interior.png',
    id: '2',
  },
  {
    header: 'Pranie tapicerki',
    icon: '../../../public/services/car_seat.png',
    id: '3',
  },
  {
    header: 'Odnowa lakieru',
    icon: '../../../public/services/paint.png',
    id: '4',
  },
  {
    header: 'Usuwanie rys',
    icon: '../../../public/services/scratch.png',
    id: '5',
  },
  {
    header: 'Ochrona przed korozją',
    icon: '../../../public/services/corrosion.png',
    id: '6',
  },
  {
    header: 'Czyszczenie i polerowanie felg',
    icon: '../../../public/services/wheel.png',
    id: '7',
  },
  {
    header: 'Detailing silnika',
    icon: '../../../public/services/engine.png',
    id: '8',
  },
];

const Services = () => {
  const [isExpanded, setIsExpanded] = useState(null);

  const handleClick = (id) => {
    setIsExpanded(id);
  };

  return (
    <>
      <h2 className={styles.header}>Czym się zajmujemy?</h2>
      <div
        className={
          isExpanded
            ? `${styles.services} ${styles.services_expanded}`
            : styles.services
        }
      >
        {services.map((service) => (
          <ServiceTile
            id={service.id}
            isVisible={isExpanded === null || isExpanded === service.id}
            key={nanoid()}
            iconSrc={service.icon}
            header={service.header}
            onClick={handleClick}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
        ))}
      </div>
    </>
  );
};
export default Services;
