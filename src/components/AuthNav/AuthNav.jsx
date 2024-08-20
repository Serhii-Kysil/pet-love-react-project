import css from "./AuthNav.module.css";

import { NavLink } from "react-router-dom";

export const AuthNav = () => {
  return (
    <div className={css.container}>
      <NavLink to="/login">
        <button type="button" className={css.logBtn}>
          Log in
        </button>
      </NavLink>
      <NavLink to="/register">
        <button type="button" className={css.regBtn}>
          Registration
        </button>
      </NavLink>
    </div>
  );
};
