import styles from "./nube.module.css";

const NubePresentation = () => {
  return (
    <div className={styles["contenor-nubeMouse"]}>
      <div className={styles.nube}></div>
      <img
        className={styles.mouseGifBlanco}
        src="/assets/mouseBlanco.gif"
        alt="scroll down"
      />
    </div>
  );
};

export default NubePresentation;
