import { useState } from 'react';
import styles from './GalleryElement.module.css';

const GalleryElement = ({ src, alt }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <img
      src={src}
      alt={alt}
      onClick={handleClick}
      className={isActive ? styles.gallery_element : ''}
    />
  );
};
export default GalleryElement;
