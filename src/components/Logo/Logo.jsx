import css from "./Logo.module.css";

import { FaHeart } from "react-icons/fa";

import { NavLink } from "react-router-dom";

export const Logo = () => {
  return (
    <>
      <NavLink className={css.link} to="/">
        <div className={css.logoCont}>
          <span className={css.logoText}>
            Petl
            <FaHeart className={css.logoIcon} />
            ve
          </span>
        </div>
      </NavLink>
    </>
  );
};
