import styles from "./videobg.module.css";
import video from "/assets/Sektionfilm-2-HD-KeyVisual.mp4";
import videoMovil from "/assets/Sektionfilm-2-HD-KeyVisual-mobile.mp4";

const VideoBgPresentation = () => {
  return (
    <>
      <video className={styles.videoColibri} src={video} autoPlay muted loop />
      <video
        className={styles.videoColibriMovil}
        src={videoMovil}
        autoPlay
        muted
        loop
      />
    </>
  );
};

export default VideoBgPresentation;
