import styles from "./carrusel.module.css";

interface Props {
  slides: {
    background: string;
    icon: string;
    sub: string;
  }[];
  activeIndex: number;
  handleSlideClick: (index: number) => void;
}

const CarruselPresentation = ({
  slides,
  activeIndex,
  handleSlideClick,
}: Props) => {
  return (
    <div className={styles.containerExpandCard}>
      <div className={styles.cont}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === activeIndex ? `${styles.active}` : `${styles.nonActive}`}`}
            style={{ backgroundImage: `url(${slide.background})` }}
            onClick={() => handleSlideClick(index)}
          >
            <div className={styles["slide-content"]}>
              <div className={styles.icon}>
                <img src={slide.icon} alt="Icon" />
              </div>
              <div className={styles.info}>
                <p className={styles.sub}>{slide.sub}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarruselPresentation;
