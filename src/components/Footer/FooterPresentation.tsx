import styles from "./footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const FooterPresentation = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.row}>
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
        </div>

        <div className={styles.row}>
          <ul>
            <li>
              <a href="#">Contáctanos</a>
            </li>
            <li>
              <a href="#">Nuestros servicios</a>
            </li>
            <li>
              <a href="#">Políticas de privacidad</a>
            </li>
            <li>
              <a href="#">Términos & Condiciones</a>
            </li>
          </ul>
        </div>

        <div className={styles.row}>
          INVENTEK Copyright © 2024 - Todos los derechos reservados | Diseño
          INVENTEK
        </div>
      </div>
    </footer>
  );
};

export default FooterPresentation;
