import hojasAbajo from "/assets/hojas_abajo.png?url";
import SvgComponentMovil from "../SVG/SVGComponentMovil";
import styles from "./mapsvgmovil.module.css";

const MapSVGMovilPresentation = () => {
  return (
    <div className={styles.MapaSvgMovil}>
      <section className={styles.sectionMapMovil}>
        <h1>Aqua Verde</h1>
        <h2>Lotes Disponibles</h2>
      </section>
      <SvgComponentMovil />
      <img
        className={styles.MapaSvgMovil_hojas_abajo}
        src={hojasAbajo}
        alt="hojas de arbol"
      />
    </div>
  );
};

export default MapSVGMovilPresentation;
