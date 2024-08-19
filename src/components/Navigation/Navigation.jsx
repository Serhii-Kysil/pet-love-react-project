import css from "./Navigation.module.css";

import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <NavLink to="/news">
        <button className={css.btn}>News</button>
      </NavLink>
      <NavLink to="/notices">
        <button className={css.btn}>Find Pet</button>
      </NavLink>
      <NavLink to="/friends">
        <button className={css.btn}>Frinend</button>
      </NavLink>
    </nav>
  );
};
