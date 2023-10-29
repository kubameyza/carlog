import styles from './Gallery.module.css';
import GalleryElement from './GalleryElement/GalleryElement';

const images = [
  '/pic_1.png',
  '/pic_2.png',
  '/pic_3.png',
  '/pic_4.png',
  '/pic_5.png',
  '/pic_6.png',
];

const Gallery = () => {
  return (
    <div className={styles.gallery_wrapper}>
      {images.map((image, idx) => (
        <GalleryElement key={idx} src={image} alt="auto detailing" />
      ))}
    </div>
  );
};
export default Gallery;
