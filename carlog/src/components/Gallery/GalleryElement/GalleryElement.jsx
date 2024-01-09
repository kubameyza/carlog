const GalleryElement = ({ src, alt, onClick }) => {
  return <img src={src} alt={alt} onClick={(e) => onClick(e)} />;
};
export default GalleryElement;
