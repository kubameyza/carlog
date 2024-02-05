import { useEffect, useState } from 'react';
import styles from '../Services/Services.module.css';

const ServiceTile = ({
  iconSrc,
  header,
  isVisible,
  id,
  onClick,
  isExpanded,
  setIsExpanded,
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    isExpanded ? setAnimate(true) : null;
  }, []);

  const handleCLick = () => {
    onClick(id);
  };

  const unmount = () => {
    setIsExpanded(false);
  };

  return isVisible ? (
    <div
      className={
        animate ? `${styles.service} ${styles.expanded}` : styles.service
      }
      onClick={handleCLick}
      // onTransitionEnd={unmount}
    >
      <>
        <img className={styles.service_icon} src={iconSrc} />
        <h3>{header}</h3>
      </>
    </div>
  ) : null;
};
export default ServiceTile;
