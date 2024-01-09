import styles from './Logo.module.css';

const Logo = () => {
  const handleClick = () => {
    console.log('hej');
  };

  return (
    <div onClick={handleClick} className={styles.logo}>
      autokosmetyka
    </div>
  );
};
export default Logo;
