import styles from '../Services/Services.module.css';

const ServiceDetails = ({ isActive }) => {
  return (
    <p
      className={
        isActive
          ? `${styles.service} ${styles.expanded}`
          : styles.ServiceDetails
      }
    >
      ServiceDetails
    </p>
  );
};
export default ServiceDetails;
