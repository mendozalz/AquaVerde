import Formulario from "../Formulario";
import styles from "./hero.module.css";
import { useRef } from "react";

interface Props {
  video: string;
  videoMovil: string;
  isChanging: boolean;
  text: string;
}

const HeroPresentation = ({ video, videoMovil, isChanging, text }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <header className={styles.hero}>
      <video
        className={styles.videoHero}
        ref={videoRef}
        src={video}
        autoPlay
        muted
        playsInline
      />
      <video
        className={styles.videoHeroMovil}
        ref={videoRef}
        src={videoMovil}
        autoPlay
        muted
        playsInline
      />
      <div className={styles.titulo}>
        <h1
          className={`${styles["fade-text"]} ${isChanging ? styles["fade-out"] : styles["fade-in"]} ${styles["hero-text"]}`}
        >
          {text}
        </h1>
        <Formulario />
      </div>
    </header>
  );
};

export default HeroPresentation;
