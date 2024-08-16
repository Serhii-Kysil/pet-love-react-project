import css from "./Logo.module.css";

import { NavLink } from "react-router-dom";

export const Logo = () => {
  return (
    <>
      <NavLink className={css.link} to="/">
        <div className={css.logoCont}>
          <span>Petlove</span>
        </div>
      </NavLink>
    </>
  );
};
