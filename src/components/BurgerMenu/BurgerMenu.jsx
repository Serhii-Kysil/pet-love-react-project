import { useState } from "react";

import css from "./BurgerMenu.module.css";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export const BurgerMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={css.burgerMenu}>
      <button className={css.burgerIcon} onClick={toggleMenu}>
        <RxHamburgerMenu className={css.icon} />
      </button>
      {isOpen && (
        <div className={css.menuContent}>
          <IoClose onClick={toggleMenu} className={css.closeIcon} />
          {children}
        </div>
      )}
    </div>
  );
};
