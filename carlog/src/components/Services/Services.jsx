import { useState } from 'react';
import styles from './Services.module.css';
import { nanoid } from 'nanoid';
import ServiceTile from '../ServiceTile/ServiceTile';

const services = [
  {
    header: 'Mycie zewnętrzne i woskowanie',
    data: 'Usługa polegająca na dokładnym czyszczeniu zewnętrznych powierzchni samochodu oraz na nałożeniu ochronnego wosku. Jest to proces, który pomaga zachować wygląd i stan lakieru pojazdu, chroniąc go przed szkodliwymi czynnikami zewnętrznymi.',
    icon: '../../../public/services/wash.png',
    id: '1',
  },
  {
    header: 'Czyszczenie i pielęgnacja wnętrza',
    data: 'Usługa skupiająca się na gruntownym czyszczeniu i odświeżaniu wnętrza pojazdu, w tym tapicerki, deski rozdzielczej, paneli drzwiowych itp. Polega na usuwaniu plam, zabrudzeń oraz nieprzyjemnych zapachów, zapewniając czystość i komfort podróży.',
    icon: '../../../public/services/interior.png',
    id: '2',
  },
  {
    header: 'Pranie tapicerki',
    data: 'Usługa profesjonalnego prania i odświeżania tapicerki samochodowej. Polega na usuwaniu trudnych plam, zabrudzeń oraz nieprzyjemnych zapachów, przywracając tapicerce świeżość i czystość. Jest to ważny zabieg pielęgnacyjny, który poprawia wygląd wnętrza pojazdu.',
    icon: '../../../public/services/car_seat.png',
    id: '3',
  },
  {
    header: 'Odnowa lakieru',
    data: 'Zabieg mający na celu przywrócenie blasku i koloru lakieru pojazdu. Polega na polerowaniu i zabezpieczeniu powierzchni, usuwaniu drobnych rys oraz niedoskonałości. Jest to ważny etap w pielęgnacji lakieru, który poprawia wygląd i trwałość powłoki.',
    icon: '../../../public/services/paint.png',
    id: '4',
  },
  {
    header: 'Usuwanie rys',
    data: 'Usługa polegająca na usuwaniu rys z lakieru i innych powierzchni samochodu. Jest to proces, który przywraca pojazdowi pierwotny wygląd, usuwając ślady mechaniczne oraz poprawiając estetykę lakieru. Polega na precyzyjnym polerowaniu i zabezpieczeniu powierzchni.',
    icon: '../../../public/services/scratch.png',
    id: '5',
  },
  {
    header: 'Ochrona przed korozją',
    data: 'Zabezpieczenie pojazdu przed korozją i rdzą. Polega na stosowaniu specjalnych środków ochronnych i preparatów antykorozyjnych, które chronią karoserię przed szkodliwymi czynnikami zewnętrznymi. Jest to ważny zabieg prewencyjny, który zapobiega powstawaniu rdzy i uszkodzeń karoserii.',
    icon: '../../../public/services/corrosion.png',
    id: '6',
  },
  {
    header: 'Czyszczenie i polerowanie felg',
    data: 'Usługa skupiająca się na dokładnym czyszczeniu i polerowaniu felg samochodowych. Polega na usuwaniu zabrudzeń, osadów oraz kamienia kotwiczego z felg, przywracając im blask i czystość. Jest to ważny zabieg estetyczny, który poprawia wygląd pojazdu.',
    icon: '../../../public/services/wheel.png',
    id: '7',
  },
  {
    header: 'Detailing silnika',
    data: 'Zabieg polegający na dokładnym czyszczeniu, pielęgnacji i odświeżeniu silnika samochodowego. Polega na usuwaniu zabrudzeń, tłuszczu oraz osadów z silnika, zapewniając mu czystość i sprawność. Jest to ważny zabieg pielęgnacyjny, który poprawia wygląd i wydajność silnika.',
    icon: '../../../public/services/engine.png',
    id: '8',
  },
];

const Services = () => {
  const [isExpanded, setIsExpanded] = useState(null);
  const [gridStyle, setGridStyle] = useState('');

  const animateGrid = (id) => {
    const dynamicClassName = `${styles[`expand_${id}`]}`;
    gridStyle !== dynamicClassName
      ? setGridStyle(dynamicClassName)
      : setGridStyle('');

    isExpanded !== id ? setIsExpanded(id) : setIsExpanded(null);
  };

  return (
    <>
      <h2 className={styles.header}>Czym się zajmujemy?</h2>
      <div className={`${styles.services} ${gridStyle}`}>
        {services.map((service) => (
          <ServiceTile
            key={nanoid()}
            iconSrc={service.icon}
            header={service.header}
            id={service.id}
            onClick={animateGrid}
            isExpanded={isExpanded}
            data={service.data}
          />
        ))}
      </div>
    </>
  );
};
export default Services;
