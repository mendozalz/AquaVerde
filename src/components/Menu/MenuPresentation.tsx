import styles from "./menu.module.css";

interface Props {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const MenuPresentation = ({ menuOpen, toggleMenu }: Props) => {
  return (
    <div className={styles.menuContainer}>
      <div
        className={`${styles["hamburguer-menu"]} ${menuOpen ? `${styles.change}` : ""}`}
        onClick={toggleMenu}
      >
        <span className={`${styles.line} ${styles["first-line"]}`}></span>
        <span className={`${styles.line} ${styles["second-line"]}`}></span>
        <span className={`${styles.line} ${styles["third-line"]}`}></span>
      </div>
      <div
        className={`${styles["menu-expanded"]} ${menuOpen ? `${styles.open}` : ""}`}
      >
        <ul>
          <li>
            <a href="#">Anchor #1</a>
          </li>
          <li>
            <a href="#">Anchor #2</a>
          </li>
          <li>
            <a href="#">Anchor #3</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuPresentation;
