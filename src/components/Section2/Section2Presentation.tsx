import styles from "./section2.module.css";
import ramaDerecha from "/assets/rama_derecha.png?url";
import hojasAbajo from "/assets/hojas_abajo.png?url";

const Section2Presentation = () => {
  return (
    <section className={styles.section2}>
      <div>
        <article className={styles.bloq}>
          <small>Aqua Verde</small>
          <p>
            Pon rumbo a tu hogar ideal en Marinilla Antioquia ahora mismo.
            Descubre la majestuosidad de Aqua Verde, un lugar que ofrece una
            experiencia de vida inigualable a un precio sumamente accesible.
            Explora sus encantos y encuentra el espacio perfecto para tu nuevo
            hogar
          </p>
        </article>
      </div>
      <img
        className={styles.rama_derecha}
        src={ramaDerecha}
        alt="hojas de arbol"
      />
      <img
        className={styles.hojas_abajo}
        src={hojasAbajo}
        alt="hojas de arbol"
      />
    </section>
  );
};

export default Section2Presentation;
