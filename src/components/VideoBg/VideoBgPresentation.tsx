import styles from "./videobg.module.css";
import video from "/assets/Sektionfilm-2-HD-KeyVisual.mp4";
import videoMovil from "/assets/Sektionfilm-2-HD-KeyVisual-mobile.mp4";

const VideoBgPresentation = () => {
  return (
    <div className={styles.videoContainer}>
      <video
        className={styles.backgroundVideo}
        src={video}
        autoPlay
        muted
        loop
      />
      <video
        className={styles.backgroundVideoMovil}
        src={videoMovil}
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default VideoBgPresentation;
