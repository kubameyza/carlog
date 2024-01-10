import { useState, useRef, useEffect } from 'react';
import styles from './Gallery.module.css';
import GalleryElement from './GalleryElement/GalleryElement';
import ImagesGallery from '../ImagesGallery/ImagesGallery';

const images = [
  '/pic_1.png',
  '/pic_2.png',
  '/pic_3.png',
  '/pic_4.png',
  '/pic_5.png',
  '/pic_6.png',
];

const Gallery = () => {
  const [expandGallery, setExpandGallery] = useState(false);
  const [index, setIndex] = useState(0);

  const getIndex = (item) => {
    const index = item.target.getAttribute('src');
    setIndex(images.indexOf(index));
  };

  const handleClick = (e) => {
    setExpandGallery(!expandGallery);
    getIndex(e);
  };

  const galleryRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!galleryRef.current?.contains(e.target)) setExpandGallery(false);
    };
    document.addEventListener('mousedown', handler);

    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return !expandGallery ? (
    <div id="gallery" className={styles.gallery_wrapper}>
      {images.map((image, idx) => (
        <GalleryElement
          onClick={handleClick}
          key={idx}
          src={image}
          alt="auto detailing"
        />
      ))}
    </div>
  ) : (
    <div ref={galleryRef}>
      <ImagesGallery index={index} />
    </div>
  );
};
export default Gallery;
