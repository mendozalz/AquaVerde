import styles from "./section1.module.css";

interface Props {
  hojasDerecha: string;
}

const Section1Presentation = ({ hojasDerecha }: Props) => {
  return (
    <div className={styles.mainCard}>
      <div className={styles.banner}>
        <p>Pon rumbo a tu hogar ideal en Marinilla Antioquia ahora mismo...</p>
      </div>
      <div className={styles["mainCard_titulo"]}>
        <h2>¿Que es Condominio Aquaverde?</h2>
        <p>
          Es un espacio exclusivo con <b>41 lotes</b> campestres en un exclusivo
          condominio campestre con lotes que van desde los <b>1500m2</b> hasta
          los <b>1900m2</b>
        </p>
      </div>
      <img
        className={styles["hojas_derecha"]}
        src={hojasDerecha}
        alt="hojas de arbol"
      />
    </div>
  );
};

export default Section1Presentation;
