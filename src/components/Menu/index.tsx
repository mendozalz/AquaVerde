import { useState } from "react";
import MenuPresentation from "./MenuPresentation";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <MenuPresentation menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Menu;
