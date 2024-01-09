import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: '/pic_1.png',
    thumbnail: '/pic_1.png',
  },
  {
    original: '/pic_2.png',
    thumbnail: '/pic_2.png',
  },
  {
    original: '/pic_3.png',
    thumbnail: '/pic_3.png',
  },
  {
    original: '/pic_4.png',
    thumbnail: '/pic_4.png',
  },
  {
    original: '/pic_5.png',
    thumbnail: '/pic_5.png',
  },
  {
    original: '/pic_6.png',
    thumbnail: '/pic_6.png',
  },
];

const ImagesGallery = ({ index }) => {
  return (
    <ImageGallery
      items={images}
      showPlayButton={false}
      showFullscreenButton={false}
      // startIndex={index}
    />
  );
};

export default ImagesGallery;
