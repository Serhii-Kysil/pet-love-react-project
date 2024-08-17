import { FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

import css from "./UserNav.module.css";

export const UserNav = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.userInfo}>
        <FaUser className={css.userIcon} />
        <p>name</p>
      </div>
      <button className={css.logBtn} type="button">
        Log Out
        <FiLogIn className={css.icon} />
      </button>
    </div>
  );
};
