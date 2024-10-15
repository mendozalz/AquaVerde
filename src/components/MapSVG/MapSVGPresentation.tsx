import SVGComponent from "../SVG/SVGComponent";
import styles from "./mapsvg.module.css";
import hojasAbajo from "/assets/hojas_abajo.png?url";

const MapSVGPresentation = () => {
  return (
    <div className={styles.MapaSvg}>
      <section className={styles.sectionMap}>
        <h1>Aqua Verde</h1>
        <h2>Lotes Disponibles</h2>
      </section>
      <SVGComponent />
      <img
        className={styles["hojas_abajo"]}
        src={hojasAbajo}
        alt="hojas de arbol"
      />
    </div>
  );
};

export default MapSVGPresentation;
