/* eslint-disable react/prop-types */
import styles from './ServiceTile.module.css';

const ServiceTile = ({ iconSrc, header, id, onClick, isExpanded, data }) => {
  return (
    <div className={styles.service} onClick={() => onClick(id)}>
      {isExpanded !== id ? (
        <div className={styles.wrapper}>
          <img className={styles.service_icon} src={iconSrc} />
          <h3>{header}</h3>
        </div>
      ) : (
        <p className={styles.description}>{data}</p>
      )}
    </div>
  );
};
export default ServiceTile;
