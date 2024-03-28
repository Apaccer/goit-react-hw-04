import css from "./ImageCard.module.css";
const ImageCard = ({ image, openModal }) => {
  return (
    <div className={css.imgContainer} onClick={() => openModal(image.id)}>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
