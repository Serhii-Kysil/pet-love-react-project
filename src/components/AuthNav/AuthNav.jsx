import css from "./AuthNav.module.css";

import { FiLogIn } from "react-icons/fi";

export const AuthNav = () => {
  return (
    <>
      <button type="button" className={css.logBtn}>
        <FiLogIn className={css.icon} />
        Log in
      </button>
      <button type="button" className={css.regBtn}>
        Registration
      </button>
    </>
  );
};
