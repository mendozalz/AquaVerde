import styles from "./section3.module.css";
import viviendas1 from "/assets/FACHADA_PRINCIPAL_LATERAL.jpg?url";
import viviendas2 from "/assets/FACHADA_PRINCIPAL_ACCESO.jpg?url";

const Section3Presentation = () => {
  return (
    <section className={styles.section3}>
      <article>
        <h3>Lorem Ipsum</h3>
        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          voluptatem perferendis rerum, reiciendis temporibus nihil cumque
          exercitationem delectus, aliquam corporis earum, vel quisquam at illum
          labore eveniet provident nam voluptatibus! Asperiores illum qui
          repellendus eius veritatis ea deserunt sunt, impedit ut ratione odio
          cumque dolore facilis debitis perspiciatis molestiae officiis minima
          excepturi aliquam quae earum quos iure. Debitis, ratione blanditiis.
        </p>
      </article>
      <section className={styles.section3_1}>
        <div className={styles.section3_1_img}>
          <img src={viviendas1} alt="viviendas" />
        </div>
        <div className={styles.section3_1_div}>
          <article>
            <h3>Lorem Ipsum</h3>
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              voluptatem perferendis rerum, reiciendis temporibus nihil cumque
              exercitationem delectus, aliquam corporis earum, vel quisquam at
              illum labore eveniet provident nam voluptatibus!
            </p>
            <button>Lorem Ipsum</button>
          </article>
        </div>
      </section>
      <section className={styles.section3_2}>
        <div className={styles.section3_2_div}>
          <article>
            <h3>Lorem Ipsum</h3>
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              voluptatem perferendis rerum, reiciendis temporibus nihil cumque
              exercitationem delectus, aliquam corporis earum, vel quisquam at
              illum labore eveniet provident nam voluptatibus!
            </p>
            <button>Lorem Ipsum</button>
          </article>
        </div>
        <div className={styles.section3_2_img}>
          <img src={viviendas2} alt="viviendas" />
        </div>
      </section>
    </section>
  );
};

export default Section3Presentation;
