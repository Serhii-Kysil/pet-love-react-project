import { useState } from "react";

import css from "./BurgerMenu.module.css";

import { RxHamburgerMenu } from "react-icons/rx";

export const BurgerMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={css.burgerMenu}>
      <button className={css.burgerIcon} onClick={toggleMenu}>
        <RxHamburgerMenu />
      </button>
      {isOpen && <div className={css.menuContent}>{children}</div>}
    </div>
  );
};
