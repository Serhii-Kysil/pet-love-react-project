import css from "./PetBlock.module.css";

const PetBlock = ({ img1x, img2x, img3x, alt }) => {
  return (
    <img
      className={css.img}
      srcSet={`${img2x} 2x, ${img3x} 3x`}
      src={img1x}
      alt={alt}
    />
  );
};

export default PetBlock;
